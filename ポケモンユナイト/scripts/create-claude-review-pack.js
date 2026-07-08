import { execFileSync } from "node:child_process";
import {
    existsSync,
    mkdirSync,
    readFileSync,
    statSync,
    writeFileSync
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const outputPath = path.join(
    repoRoot,
    "docs",
    "ai-review",
    "generated",
    "claude-review-request.md"
);
const generatedDir = path.join(repoRoot, "docs", "ai-review", "generated");
const contextPath = path.join(
    repoRoot,
    "docs",
    "ai-review",
    "claude-review-context.md"
);
const templatePath = path.join(
    repoRoot,
    "docs",
    "ai-review",
    "claude-review-request-template.md"
);

const MAX_DIFF_CHARS = 14000;
const MAX_UNTRACKED_CHARS = 10000;
const MAX_UNTRACKED_FILE_CHARS = 2500;
const validTypes = new Set(["design", "pr", "ui"]);

function parseArgs(argv){
    const options = {
        type: "pr",
        baseRef: null
    };

    for(let index = 0; index < argv.length; index++){
        const arg = argv[index];

        if(arg === "--type" || arg === "-t"){
            options.type = argv[index + 1] ?? options.type;
            index++;
            continue;
        }

        if(arg.startsWith("--type=")){
            options.type = arg.slice("--type=".length);
            continue;
        }

        if(arg === "--base" || arg === "-b"){
            options.baseRef = argv[index + 1] ?? options.baseRef;
            index++;
            continue;
        }

        if(arg.startsWith("--base=")){
            options.baseRef = arg.slice("--base=".length);
            continue;
        }

        if(arg === "--help" || arg === "-h"){
            printHelp();
            process.exit(0);
        }

        if(!arg.startsWith("-") && !options.baseRef){
            options.baseRef = arg;
        }
    }

    if(!validTypes.has(options.type)){
        throw new Error(
            `Unknown review type "${options.type}". Use design, pr, or ui.`
        );
    }

    return options;
}

function printHelp(){
    console.log(`Usage:
  npm run review:claude-pack
  npm run review:claude-pack -- main
  npm run review:claude-pack -- --type design
  npm run review:claude-pack -- main --type pr
  npm run review:claude-pack -- --type ui
`);
}

function runGit(args){
    try{
        return execFileSync("git", args, {
            cwd: repoRoot,
            encoding: "utf8",
            maxBuffer: 1024 * 1024 * 10
        }).trim();
    }catch(error){
        const stderr = error.stderr?.toString().trim();
        const stdout = error.stdout?.toString().trim();
        throw new Error(stderr || stdout || error.message);
    }
}

function getDiffArgs(baseRef, extraArgs = []){
    return baseRef
        ? ["diff", baseRef, ...extraArgs]
        : ["diff", ...extraArgs];
}

function truncateText(text, maxChars){
    if(text.length <= maxChars){
        return text;
    }

    return `${text.slice(0, maxChars)}

[差分抜粋はここで省略しました。必要ならローカルで git diff を確認してください。]`;
}

function getUntrackedFiles(){
    const output = runGit(["ls-files", "--others", "--exclude-standard"]);

    return output
        ? output.split(/\r?\n/)
            .filter(Boolean)
            .filter(file => {
                const absolutePath = path.join(repoRoot, file);
                return !absolutePath.startsWith(generatedDir);
            })
        : [];
}

function readUntrackedExcerpt(filePath){
    const absolutePath = path.join(repoRoot, filePath);

    if(!absolutePath.startsWith(repoRoot) || !existsSync(absolutePath)){
        return null;
    }

    const stats = statSync(absolutePath);
    if(!stats.isFile() || stats.size > 1024 * 1024){
        return null;
    }

    try{
        const content = readFileSync(absolutePath, "utf8");
        if(content.includes("\u0000")){
            return null;
        }

        return truncateText(content, MAX_UNTRACKED_FILE_CHARS);
    }catch{
        return null;
    }
}

function getUntrackedSection(){
    const files = getUntrackedFiles();

    if(files.length === 0){
        return {
            files: "(未追跡ファイルなし)",
            excerpts: "(未追跡ファイルなし)"
        };
    }

    let excerptText = "";

    for(const file of files){
        const excerpt = readUntrackedExcerpt(file);
        if(!excerpt){
            continue;
        }

        const nextBlock = `### ${file}\n\n\`\`\`text\n${excerpt}\n\`\`\`\n\n`;

        if((excerptText + nextBlock).length > MAX_UNTRACKED_CHARS){
            excerptText += "[未追跡ファイル抜粋はここで省略しました。]\n";
            break;
        }

        excerptText += nextBlock;
    }

    return {
        files: files.join("\n"),
        excerpts: excerptText.trim() || "(テキストとして抜粋できる未追跡ファイルなし)"
    };
}

function getGitSection(baseRef){
    const stat = runGit(getDiffArgs(baseRef, ["--stat"]));
    const nameOnly = runGit(getDiffArgs(baseRef, ["--name-only"]));
    const diff = runGit(getDiffArgs(baseRef, ["--unified=20"]));
    const untracked = baseRef
        ? {
            files: "(指定ブランチ比較では未追跡ファイル一覧は省略)",
            excerpts: "(指定ブランチ比較では未追跡ファイル抜粋は省略)"
        }
        : getUntrackedSection();
    const compareLabel = baseRef
        ? `作業ツリーと \`${baseRef}\` の差分`
        : "現在の未コミット git diff";

    return {
        compareLabel,
        stat: stat || "(差分なし)",
        nameOnly: nameOnly || "(差分なし)",
        diff: diff
            ? truncateText(diff, MAX_DIFF_CHARS)
            : "(差分なし)",
        untracked
    };
}

function getTypePrompt(type){
    if(type === "design"){
        return `## 今回Claudeに依頼したい用途

用途A: API設計・データ構造相談

Claudeには、設計が自然か、責務分離が崩れていないか、将来ほかのポケモンや特殊効果を追加したとき破綻しないかをレビューしてもらってください。コード実装は依頼しないでください。`;
    }

    if(type === "ui"){
        return `## 今回Claudeに依頼したい用途

用途C: UI/UXレビュー

この依頼文と一緒に、ユーザーがClaude無料版へスクリーンショットを手動で貼ってください。Claudeには実装コードを書かせず、画面の分かりやすさ、スマホでの操作しやすさ、情報量、導線だけをレビューしてもらってください。`;
    }

    return `## 今回Claudeに依頼したい用途

用途B: Codex変更・PRレビュー

Claudeには、Codexの変更がやりすぎていないか、既存方針に反していないか、責務分離が崩れていないかをレビューしてもらってください。追加実装は依頼しないでください。`;
}

function getSelectedTemplateNote(type){
    if(type === "design"){
        return "下のテンプレート集のうち、主に「用途A: API設計・データ構造相談」を使ってください。";
    }

    if(type === "ui"){
        return "下のテンプレート集のうち、主に「用途C: UI/UXレビュー」を使ってください。スクリーンショットは別途Claudeへ手動で添付してください。";
    }

    return "下のテンプレート集のうち、主に「用途B: Codex変更・PRレビュー」を使ってください。";
}

function buildRequest({ type, baseRef }){
    const context = readFileSync(contextPath, "utf8").trim();
    const template = readFileSync(templatePath, "utf8").trim();
    const generatedAt = new Date().toISOString();
    const gitSection = type === "ui"
        ? null
        : getGitSection(baseRef);

    const sections = [
        "# Claude Review Request",
        "",
        `Generated at: ${generatedAt}`,
        "",
        getTypePrompt(type),
        "",
        "## 使い方",
        "",
        "このMarkdownをClaude無料版に貼り付けてください。Claudeには実装させず、外部レビュー担当として回答してもらいます。",
        "",
        getSelectedTemplateNote(type),
        "",
        "## 共通コンテキスト",
        "",
        context,
        "",
        "## 用途別テンプレート",
        "",
        template
    ];

    if(gitSection){
        sections.push(
            "",
            "## 差分要約",
            "",
            `比較対象: ${gitSection.compareLabel}`,
            "",
            "### git diff --stat",
            "",
            "```text",
            gitSection.stat,
            "```",
            "",
            "### git diff --name-only",
            "",
            "```text",
            gitSection.nameOnly,
            "```",
            "",
            "### 重要差分の抜粋",
            "",
            "```diff",
            gitSection.diff,
            "```",
            "",
            "### 未追跡ファイル",
            "",
            "```text",
            gitSection.untracked.files,
            "```",
            "",
            "### 未追跡ファイルの抜粋",
            "",
            gitSection.untracked.excerpts.startsWith("### ")
                ? gitSection.untracked.excerpts
                : "```text\n" + gitSection.untracked.excerpts + "\n```"
        );
    }else{
        sections.push(
            "",
            "## UI/UXレビュー時の補足",
            "",
            "- このファイルと一緒に、Claude無料版へスクリーンショットを手動で貼ってください。",
            "- スクリーンショットはスマホ幅を優先してください。",
            "- 画面名、ユーザーにやってほしい操作、特に見てほしい箇所を追記するとレビュー精度が上がります。",
            "- UIレビューでは、git diff よりも画面の見え方と操作導線を優先してください。"
        );
    }

    sections.push(
        "",
        "## Claudeへの最後のお願い",
        "",
        "Codexの報告を正しい前提にせず、第三者としてレビューしてください。問題がある場合は重要度順に、今すぐ直すべき点と後回しでよい点を分けてください。コード実装は不要です。"
    );

    return `${sections.join("\n")}\n`;
}

function main(){
    const options = parseArgs(process.argv.slice(2));
    const request = buildRequest(options);

    mkdirSync(path.dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, request, "utf8");

    console.log(`Claude review request generated: ${outputPath}`);
    console.log(`Review type: ${options.type}`);
    console.log(`Base ref: ${options.baseRef ?? "(current git diff)"}`);
}

main();
