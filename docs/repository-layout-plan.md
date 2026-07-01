# Repository Layout Plan

最終更新日: 2026-07-01

このファイルは、現在 `ポケモンユナイト/` の中だけが Git 管理されている状態から、将来的に `pokemon-unite-app/` 全体を GitHub で読める構成へ広げるための計画メモです。

まだ実行手順ではなく、実施前に確認するための設計メモです。実際に `.git` の移動、ファイル移動、削除、Git ルート変更を行う前には必ず確認します。

## 目的

ChatGPT や Codex に GitHub リポジトリを読ませたとき、アプリ本体だけでなく、調査データ、検証メモ、補助ツールも同じ文脈で確認できるようにします。

現在は Git 管理ルートが以下です。

```text
C:\Projects\pokemon-unite-app\ポケモンユナイト
```

そのため、GitHub から見ると、外側にある `データリサーチ/` や `人間確認用/` が見えない可能性があります。

## 現在の外側フォルダ構成

```text
C:\Projects\pokemon-unite-app\
├─ ポケモンユナイト\        # 現在のGitリポジトリ本体
├─ データリサーチ\          # 調査JSON、特殊効果調査、人間確認結果
├─ 人間確認用\              # 検証メモサイト、テンプレート
├─ tools\                   # 補助ツール
├─ 検証動画\                # 動画素材。基本的にGit管理しない候補
├─ チャットgpt作成画像\     # 画像素材。内容確認後に扱いを決める
└─ ポケモンユナイト.zip     # zip。基本的にGit管理しない候補
```

## 現在GitHubから見えにくい重要データ

GitHub連携のChatGPTに読ませたい可能性が高いもの:

- `データリサーチ/`
  - `pikachu-researchData.json`
  - `cinderace-researchData.json`
  - `greninja-researchData.json`
  - 特殊効果横断調査 v1 / v2 / v3
  - human review 結果

- `人間確認用/`
  - 検証メモサイト
  - 検証テンプレート
  - メモサイト更新スクリプト

- `tools/`
  - 動画確認、検証補助、今後のデータ処理ツール

ただし、動画ファイルや生成出力はサイズが大きくなりやすいため、原則として Git 管理対象から外す方針です。

## 動画解析ツールの扱い

以前作成を試した `tools/damage-video-review/` は、動画からダメージ表示候補を抽出するためのローカル補助ツールです。

現時点では、この動画解析ツール関連は今回の GitHub リポジトリには含めません。理由は以下です。

- 検証動画、切り抜き画像、出力JSONが大容量になりやすい。
- 仮想環境 `.venv` や OpenCV / numpy 依存ファイルが非常に大きい。
- 現在の開発方針では、動画解析は一度中断し、人間が動画から数値を読み取ってメモする運用に戻している。
- ダメージ計算サイト本体、調査JSON、人間確認メモとは役割が違う。
- ChatGPT にGitHubリポジトリを読ませるとき、動画解析ツール一式はノイズになりやすい。

そのため、Gitルートを外側へ広げる場合も、以下は除外候補とします。

```gitignore
tools/damage-video-review/
検証動画/
*.mp4
*.mov
*.mkv
*.avi
*.webm
*.m4v
```

将来、動画解析ツールを再開する場合は、別リポジトリに分けるか、ローカル専用ツールとして扱う方針を優先します。

## 目標構成の最小案

最初の段階では、ファイル移動をせず、Git 管理ルートだけを外側へ広げる案が安全です。

```text
C:\Projects\pokemon-unite-app\
├─ .git\
├─ ポケモンユナイト\
│  ├─ index.html
│  ├─ style.css
│  ├─ js\
│  ├─ images\
│  ├─ tests\
│  └─ docs\
├─ データリサーチ\
├─ 人間確認用\
└─ tools\
```

メリット:

- 既存アプリの相対パスをほぼ変えずに済む。
- GitHubから調査ファイルも見える。
- ChatGPT / Codex が同じリポジトリ内で文脈を追いやすい。
- 大きなファイル移動を避けられる。

デメリット:

- GitHub上ではアプリ本体が `ポケモンユナイト/` の下に1段深くなる。
- GitHub Pages の公開設定やURLパスの確認が必要。
- 日本語フォルダ名が残るため、外部ツールによっては扱いに注意が必要。

## 将来の整理案

落ち着いた後に、英語の用途別フォルダへ整理する案です。

```text
pokemon-unite-app/
├─ README.md
├─ docs/
├─ app/
│  ├─ index.html
│  ├─ style.css
│  ├─ js/
│  ├─ images/
│  └─ tests/
├─ research/
├─ verification/
└─ tools/
```

これは見通しは良くなりますが、HTML、CSS、JS、画像パス、GitHub Pages、ドキュメントリンクへの影響が大きいです。
今すぐ行うより、Git ルート拡張後に別作業として検討します。

## Git管理に含める候補

含めたいもの:

- アプリ本体
- `docs/`
- 調査JSON
- 人間確認結果JSON
- 検証メモHTML
- 検証テンプレート
- 小さな補助スクリプト
- テストコード

含めるか確認が必要なもの:

- 画像素材
- 生成済みHTML
- 機械学習や動画解析の中間成果物
- zip
- CSV出力

原則含めないもの:

- `node_modules/`
- `.venv/`
- 動画ファイル
- 大量のフレーム画像
- 解析出力の `output/`
- `tools/damage-video-review/`
- `検証動画/`
- 一時ファイル
- zipバックアップ

## .gitignore に入れる候補

Gitルートを外側へ広げる前に、外側用 `.gitignore` を確認します。

候補:

```gitignore
node_modules/
.venv/
dist/
build/
output/
outputs/
*.mp4
*.mov
*.mkv
*.avi
*.webm
*.m4v
*.zip
*.7z
*.rar
*.tmp
*.log
.DS_Store
Thumbs.db
```

注意:

- 調査データ内に必要な小さいCSVがある場合、CSV全体を除外しない。
- `images/` はアプリに必要な素材があるため、まとめて除外しない。
- 動画解析ツールの `input/` と `output/` は、原則除外候補。

## 実施前チェックリスト

実施前に確認すること:

1. 現在の `git status` が把握できている。
2. 未コミット変更をどう扱うか決めている。
3. 現在の remote URL を確認済み。
4. GitHub Pages の公開元を確認済み。
5. 外側にある大容量ファイルを確認済み。
6. `.gitignore` の候補を用意済み。
7. GitHubに上げたくないファイルがないか確認済み。
8. Codex / ChatGPT に読ませたいファイルが整理されている。

## 実施手順の候補

実際に行う場合の最小手順です。まだ実行しません。

```powershell
cd C:\Projects\pokemon-unite-app\ポケモンユナイト
git status
git remote -v
git branch
```

未コミット変更があれば、先にコミットまたは退避します。

`.git` を外側へ移す候補:

```powershell
Move-Item `
  C:\Projects\pokemon-unite-app\ポケモンユナイト\.git `
  C:\Projects\pokemon-unite-app\.git
```

外側で認識確認:

```powershell
cd C:\Projects\pokemon-unite-app
git status
```

必要ファイルを追加:

```powershell
git add ポケモンユナイト データリサーチ 人間確認用 tools .gitignore
git status
```

コミット:

```powershell
git commit -m "Expand repository root to include research files"
```

## 実施後に更新するもの

Gitルートを外側へ広げたら、以下を更新します。

- `README.md`
- `docs/project-map.md`
- `docs/project-overview.md`
- `docs/ai-workflow.md`
- `docs/current-status.md`
- `docs/repository-layout-plan.md`
- GitHub Pages 設定に関係する説明

特に `docs/current-status.md` の「Git管理上の注意」は必ず更新します。

## 主なリスク

- GitHub Pages の公開パスが変わる。
- 既存リンクや相対パスが壊れる。
- 大容量ファイルを誤ってGit管理してしまう。
- 調査中・未確認データが、確定済みデータのように見える。
- 日本語フォルダ名が外部ツールで扱いづらい場合がある。
- Codex の作業ルートを変更する必要が出る。

## 現時点の推奨判断

すぐにファイル移動までは行わず、まずはこの計画をもとに以下を確認します。

1. GitHubに見せたい調査ファイルを確定する。
2. GitHubに上げない動画・出力ファイルを洗い出す。
3. `.gitignore` を先に設計する。
4. GitHub Pages の公開方法を確認する。
5. 問題なければ、最小案として `.git` を外側へ移す。

今の段階では、`app/ research/ verification/` への大規模整理より、Gitルートだけを外側へ広げる最小案が安全です。
