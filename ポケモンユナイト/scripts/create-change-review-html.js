import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(appRoot, "..");
const outputDir = path.join(repoRoot, "人間確認用", "change-review");
const indexPath = path.join(outputDir, "index.html");

function runGit(args, options = {}){
    return execFileSync("git", ["-C", repoRoot, ...args], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", options.allowFailure ? "pipe" : "inherit"]
    });
}

function parseArgs(argv){
    const options = {
        baseRef: null,
        commit: null,
        title: null,
        outputName: null
    };

    for(let index = 0; index < argv.length; index++){
        const arg = argv[index];

        if(arg === "--base" || arg === "-b"){
            options.baseRef = argv[++index] ?? null;
            continue;
        }

        if(arg.startsWith("--base=")){
            options.baseRef = arg.slice("--base=".length);
            continue;
        }

        if(arg === "--commit" || arg === "-c"){
            options.commit = argv[++index] ?? null;
            continue;
        }

        if(arg.startsWith("--commit=")){
            options.commit = arg.slice("--commit=".length);
            continue;
        }

        if(arg === "--title" || arg === "-t"){
            options.title = argv[++index] ?? null;
            continue;
        }

        if(arg.startsWith("--title=")){
            options.title = arg.slice("--title=".length);
            continue;
        }

        if(arg === "--output" || arg === "-o"){
            options.outputName = argv[++index] ?? null;
            continue;
        }

        if(arg.startsWith("--output=")){
            options.outputName = arg.slice("--output=".length);
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

    return options;
}

function printHelp(){
    console.log(`Usage:
  npm run review:change-html
  npm run review:change-html -- --commit ca92ad8
  npm run review:change-html -- --base main --title "attacker HP sync"
  npm run review:change-html -- --commit ca92ad8 --output 2026-07-09-battle-state-attacker-hp-sync.html
`);
}

function hasWorkingTreeDiff(){
    const diff = runGit(["diff", "--name-only"]);
    const staged = runGit(["diff", "--cached", "--name-only"]);

    return `${diff}${staged}`.trim().length > 0;
}

function getReviewSource(options){
    if(options.commit){
        const subject = runGit(["show", "-s", "--format=%s", options.commit]).trim();
        return {
            kind: "commit",
            label: options.commit,
            compareLabel: `${options.commit}^`,
            title: options.title ?? subject,
            diffArgs: ["show", "--format=", "--unified=8", options.commit],
            statArgs: ["show", "--stat", "--oneline", options.commit],
            nameArgs: ["show", "--name-only", "--format=", options.commit]
        };
    }

    if(options.baseRef){
        const branch = runGit(["branch", "--show-current"]).trim() || "working-tree";
        return {
            kind: "branch",
            label: branch,
            compareLabel: options.baseRef,
            title: options.title ?? `${branch} vs ${options.baseRef}`,
            diffArgs: ["diff", "--unified=8", `${options.baseRef}...HEAD`],
            statArgs: ["diff", "--stat", `${options.baseRef}...HEAD`],
            nameArgs: ["diff", "--name-only", `${options.baseRef}...HEAD`]
        };
    }

    if(hasWorkingTreeDiff()){
        const branch = runGit(["branch", "--show-current"]).trim() || "working-tree";
        return {
            kind: "working-tree",
            label: branch,
            compareLabel: "HEAD",
            title: options.title ?? `${branch} working tree diff`,
            diffArgs: ["diff", "--unified=8", "HEAD"],
            statArgs: ["diff", "--stat", "HEAD"],
            nameArgs: ["diff", "--name-only", "HEAD"]
        };
    }

    const subject = runGit(["show", "-s", "--format=%s", "HEAD"]).trim();
    const hash = runGit(["rev-parse", "--short", "HEAD"]).trim();

    return {
        kind: "latest-commit",
        label: hash,
        compareLabel: "HEAD^",
        title: options.title ?? subject,
        diffArgs: ["show", "--format=", "--unified=8", "HEAD"],
        statArgs: ["show", "--stat", "--oneline", "HEAD"],
        nameArgs: ["show", "--name-only", "--format=", "HEAD"]
    };
}

function escapeHtml(value){
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

function slugify(value){
    return value
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 80) || "change-review";
}

function todayString(){
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function parseUnifiedDiff(diffText){
    const files = [];
    let currentFile = null;
    let currentHunk = null;

    for(const line of diffText.split(/\r?\n/)){
        if(line.startsWith("diff --git ")){
            currentFile = {
                header: line,
                oldPath: "",
                newPath: "",
                hunks: []
            };
            files.push(currentFile);
            currentHunk = null;
            continue;
        }

        if(!currentFile){
            continue;
        }

        if(line.startsWith("--- ")){
            currentFile.oldPath = line.slice(4);
            continue;
        }

        if(line.startsWith("+++ ")){
            currentFile.newPath = line.slice(4);
            continue;
        }

        if(line.startsWith("@@")){
            currentHunk = {
                header: line,
                oldLines: [],
                newLines: []
            };
            currentFile.hunks.push(currentHunk);
            continue;
        }

        if(!currentHunk){
            continue;
        }

        if(line.startsWith("-") && !line.startsWith("---")){
            currentHunk.oldLines.push({
                type: "deleted",
                text: line.slice(1)
            });
            continue;
        }

        if(line.startsWith("+") && !line.startsWith("+++")){
            currentHunk.newLines.push({
                type: "added",
                text: line.slice(1)
            });
            continue;
        }

        if(line.startsWith(" ")){
            const text = line.slice(1);
            currentHunk.oldLines.push({
                type: "context",
                text
            });
            currentHunk.newLines.push({
                type: "context",
                text
            });
        }
    }

    return files.filter(file => file.hunks.length > 0);
}

function renderLines(lines){
    return lines.map(line => {
        const className = line.type === "added"
            ? "diff-line added"
            : line.type === "deleted"
                ? "diff-line deleted"
                : "diff-line";

        return `<span class="${className}">${escapeHtml(line.text)}</span>`;
    }).join("\n");
}

function displayPath(file){
    const pathValue = file.newPath && file.newPath !== "/dev/null"
        ? file.newPath
        : file.oldPath;

    return pathValue.replace(/^a\//, "").replace(/^b\//, "");
}

function collectChangedFunctionNames(files){
    const names = new Set();

    for(const file of files){
        for(const hunk of file.hunks){
            const suffix = hunk.header.replace(/^@@.*@@\s*/, "").trim();

            if(suffix){
                names.add(suffix);
            }
        }
    }

    return [...names];
}

function renderFileDetails(files){
    if(files.length === 0){
        return "<p>差分はありません。</p>";
    }

    return files.map(file => {
        const filePath = displayPath(file);
        const hunksHtml = file.hunks.map((hunk, index) => `
          <article class="hunk">
            <h4>Hunk ${index + 1}: <code>${escapeHtml(hunk.header)}</code></h4>
            <div class="compare">
              <div class="before">
                <h5>変更前コード</h5>
                <pre class="line-diff"><code>${renderLines(hunk.oldLines)}</code></pre>
              </div>
              <div class="after">
                <h5>変更後コード</h5>
                <pre class="line-diff"><code>${renderLines(hunk.newLines)}</code></pre>
              </div>
            </div>
          </article>
        `).join("\n");

        return `
        <section class="file-card">
          <h3>${escapeHtml(filePath)}</h3>
          ${hunksHtml}
        </section>`;
    }).join("\n");
}

function buildHtml({ source, diffText, statText, changedFiles, parsedFiles }){
    const changedFunctions = collectChangedFunctionNames(parsedFiles);
    const fileList = changedFiles.length > 0
        ? changedFiles.map(file => `<li><code>${escapeHtml(file)}</code></li>`).join("\n")
        : "<li>なし</li>";
    const functionList = changedFunctions.length > 0
        ? changedFunctions.map(name => `<li><code>${escapeHtml(name)}</code></li>`).join("\n")
        : "<li>hunk headerから関数名を特定できませんでした。</li>";

    return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>差分理解: ${escapeHtml(source.title)}</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f8fafc;
      --panel: #ffffff;
      --border: #d8dee9;
      --muted: #64748b;
      --text: #1f2937;
      --fact: #eff6ff;
      --fact-border: #60a5fa;
      --interpretation: #fff7ed;
      --interpretation-border: #fb923c;
      --code: #0f172a;
      --code-bg: #f1f5f9;
      --before: #fff1f2;
      --after: #ecfdf5;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: var(--text);
      background: var(--bg);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.6;
    }
    main {
      max-width: 1180px;
      margin: 0 auto;
      padding: 24px;
    }
    header, section {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 20px;
      margin: 18px 0;
    }
    h1, h2, h3 { line-height: 1.3; }
    h1 { margin-top: 0; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
    }
    th { width: 220px; background: #f8fafc; }
    pre {
      margin: 0;
      padding: 12px;
      overflow: auto;
      color: var(--code);
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 6px;
      font-size: 13px;
      line-height: 1.5;
      tab-size: 4;
      white-space: pre;
    }
    code {
      font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
    }
    .fact, .interpretation {
      padding: 12px 14px;
      border-left: 4px solid;
      border-radius: 6px;
      margin: 12px 0;
    }
    .fact {
      background: var(--fact);
      border-left-color: var(--fact-border);
    }
    .interpretation {
      background: var(--interpretation);
      border-left-color: var(--interpretation-border);
    }
    .compare {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 14px;
      align-items: start;
    }
    .before h5, .after h5 { margin: 0 0 8px; }
    .before pre { background: var(--before); }
    .after pre { background: var(--after); }
    .file-card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 20px;
      margin: 18px 0;
    }
    .hunk {
      border-top: 1px solid var(--border);
      margin-top: 18px;
      padding-top: 16px;
    }
    .line-diff {
      padding: 0;
    }
    .line-diff code {
      display: block;
      padding: 12px 0;
    }
    .diff-line {
      display: block;
      min-height: 1.5em;
      padding: 0 12px 0 40px;
      position: relative;
    }
    .diff-line::before {
      position: absolute;
      left: 10px;
      width: 20px;
      color: #64748b;
      text-align: center;
    }
    .diff-line.added {
      background: #bbf7d0;
      border-left: 4px solid #22c55e;
      padding-left: 36px;
    }
    .diff-line.added::before {
      content: "+";
      color: #15803d;
      font-weight: 700;
    }
    .diff-line.deleted {
      background: #fecdd3;
      border-left: 4px solid #ef4444;
      padding-left: 36px;
    }
    .diff-line.deleted::before {
      content: "-";
      color: #b91c1c;
      font-weight: 700;
    }
    .small { color: var(--muted); font-size: 0.95rem; }
    @media (max-width: 900px) {
      .compare { grid-template-columns: 1fr; }
      main { padding: 12px; }
      th { width: auto; }
    }
  </style>
</head>
<body>
<main>
  <header>
    <h1>差分理解: ${escapeHtml(source.title)}</h1>
    <p>AI作業後のコード差分を、人間がコード原文ベースで確認するためのローカルHTMLです。日報ではありません。</p>
  </header>

  <section>
    <h2>基本情報</h2>
    <table>
      <tr><th>変更タイトル</th><td>${escapeHtml(source.title)}</td></tr>
      <tr><th>対象</th><td><code>${escapeHtml(source.label)}</code></td></tr>
      <tr><th>比較対象</th><td><code>${escapeHtml(source.compareLabel)}</code></td></tr>
      <tr><th>種別</th><td><code>${escapeHtml(source.kind)}</code></td></tr>
      <tr><th>作成日</th><td>${todayString()}</td></tr>
    </table>
  </section>

  <section>
    <h2>変更概要</h2>
    <div class="fact">
      <strong>実際の差分から分かる事実</strong>
      <pre><code>${escapeHtml(statText.trim() || "statなし")}</code></pre>
    </div>
    <div class="interpretation">
      <strong>AIの推測・解釈</strong>
      <p>この欄は自動生成時点では最小限です。意図や背景が不明な場合は、コード差分とコミットメッセージをもとに人間が追記してください。</p>
    </div>
  </section>

  <section>
    <h2>変更ファイル一覧</h2>
    <ul>
      ${fileList}
    </ul>
  </section>

  <section>
    <h2>変更された関数名・hunk見出し</h2>
    <ul>
      ${functionList}
    </ul>
  </section>

  <section>
    <h2>ファイルごとの変更詳細</h2>
    <p class="small">左端の <strong>+</strong> / <strong>-</strong> が実際に増減した行です。大きいファイルは全文ではなく、git diffのhunk単位で表示します。</p>
  </section>

  ${renderFileDetails(parsedFiles)}

  <section>
    <h2>処理の流れ</h2>
    <div class="fact">
      <p>実際のコード差分から処理順を確認してください。自動生成では、変更hunkを上から順に掲載しています。</p>
    </div>
    <div class="interpretation">
      <p>処理の意図や背景は、必要に応じて人間またはCodexが追記してください。</p>
    </div>
  </section>

  <section>
    <h2>影響範囲</h2>
    <ul>
      <li>変更ファイル一覧と各hunkを基準に確認する。</li>
      <li>計算処理・UI・保存形式などへ影響がある場合は、この欄へ追記する。</li>
    </ul>
  </section>

  <section>
    <h2>人間が確認するポイント</h2>
    <ul>
      <li>変更行の前後の処理が自然か。</li>
      <li>既存の表示・保存・計算結果が意図せず変わらないか。</li>
      <li>未確認仕様を確定扱いしていないか。</li>
      <li>テストや実ブラウザ確認が必要な箇所はどこか。</li>
    </ul>
  </section>

  <section>
    <h2>未確認・未接続のもの</h2>
    <p>自動生成では判定しません。差分を読んで、未確認仕様・未接続機能・今後の調査対象を追記してください。</p>
  </section>

  <section>
    <h2>次回Codexへの引き継ぎ</h2>
    <p>このHTMLを読んで見つけた確認事項や修正候補を、次回Codexへの依頼として追記してください。</p>
  </section>

  <section>
    <h2>Raw Diff</h2>
    <pre><code>${escapeHtml(diffText.trim())}</code></pre>
  </section>
</main>
</body>
</html>
`;
}

function buildIndex(entries){
    const links = entries.map(entry => {
        return `      <li><a href="./${escapeHtml(entry.file)}">${escapeHtml(entry.title)}</a></li>`;
    }).join("\n");

    return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>差分理解HTML一覧</title>
  <style>
    body {
      margin: 24px;
      color: #1f2937;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.6;
      background: #f8fafc;
    }
    main {
      max-width: 960px;
      margin: 0 auto;
      background: #fff;
      border: 1px solid #d8dee9;
      border-radius: 8px;
      padding: 24px;
    }
    h1 { margin-top: 0; }
    a { color: #2563eb; }
    .note {
      border-left: 4px solid #64748b;
      background: #f1f5f9;
      padding: 12px 16px;
      margin: 16px 0;
    }
  </style>
</head>
<body>
  <main>
    <h1>差分理解HTML一覧</h1>
    <p>AI作業後のコード差分を、人間がブラウザで細かく確認するためのローカルHTMLです。日報ではありません。</p>
    <div class="note">
      <p>このフォルダは <code>.gitignore</code> でGit管理対象外です。</p>
    </div>
    <ul>
${links}
    </ul>
  </main>
</body>
</html>
`;
}

function readExistingIndexEntries(){
    if(!existsSync(indexPath)){
        return [];
    }

    const html = readFileSync(indexPath, "utf8");
    const matches = [...html.matchAll(/<a href="\.\/([^"]+)">([\s\S]*?)<\/a>/g)];

    return matches.map(match => ({
        file: match[1],
        title: match[2].replace(/<[^>]+>/g, "").trim()
    }));
}

function updateIndex(newEntry){
    const entries = readExistingIndexEntries()
        .filter(entry => entry.file !== newEntry.file);

    entries.unshift(newEntry);
    writeFileSync(indexPath, buildIndex(entries), "utf8");
}

function main(){
    const options = parseArgs(process.argv.slice(2));
    const source = getReviewSource(options);
    const diffText = runGit(source.diffArgs);
    const statText = runGit(source.statArgs);
    const changedFiles = runGit(source.nameArgs)
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean);
    const parsedFiles = parseUnifiedDiff(diffText);
    const outputName = options.outputName ??
        `${todayString()}-${slugify(source.title)}.html`;
    const outputPath = path.join(outputDir, outputName);

    mkdirSync(outputDir, {
        recursive: true
    });

    writeFileSync(
        outputPath,
        buildHtml({
            source,
            diffText,
            statText,
            changedFiles,
            parsedFiles
        }),
        "utf8"
    );

    updateIndex({
        file: outputName,
        title: `${todayString()}: ${source.title}`
    });

    console.log(`Created ${outputPath}`);
}

main();
