# Repository Layout Plan

最終更新日: 2026-07-02

このファイルは、`ポケモンユナイト/` の中だけが Git 管理されていた状態から、`pokemon-unite-app/` 全体を GitHub で読める構成へ広げたときの判断メモです。

外側ルート化は完了済みです。今後は履歴・判断理由・除外方針を確認するための記録として扱います。

## 目的

ChatGPT や Codex に GitHub リポジトリを読ませたとき、アプリ本体だけでなく、調査データ、検証メモ、補助ツールも同じ文脈で確認できるようにします。

現在の Git 管理ルートは以下です。

```text
C:\Projects\pokemon-unite-app
```

そのため、GitHub からも `ポケモンユナイト/`、`データリサーチ/`、`人間確認用/`、軽量な `tools/` を同じ文脈で確認できます。

## 現時点の確定方針

GitHubに含める対象は以下を基本方針とします。

```text
含める:
- ポケモンユナイト/
- データリサーチ/
- 人間確認用/
- tools/ の中の軽量な補助スクリプト、説明ファイル、設定例

含めない:
- tools/damage-video-review/
- 検証動画/
- チャットgpt作成画像/
- 動画ファイル
- zipなどの圧縮ファイル
- 仮想環境
- node_modules
- output系フォルダ
- 一時ファイル、ログ
```

`tools/` は必要フォルダ候補ですが、丸ごとGitに入れるわけではありません。
現在の `tools/damage-video-review/` は動画解析ツール関連のため、今回のリポジトリには含めません。

## 現在の外側フォルダ構成

```text
C:\Projects\pokemon-unite-app\
├─ README.md                 # GitHub表示用の入口
├─ .gitignore
├─ .gitattributes
├─ ポケモンユナイト\        # アプリ本体
├─ データリサーチ\          # 調査JSON、特殊効果調査、人間確認結果
├─ 人間確認用\              # 検証メモサイト、テンプレート
├─ tools\                   # 補助ツール
├─ 検証動画\                # 動画素材。基本的にGit管理しない候補
├─ チャットgpt作成画像\     # 画像素材。内容確認後に扱いを決める
└─ ポケモンユナイト.zip     # zip。基本的にGit管理しない候補
```

## GitHubから読めるようになった重要データ

GitHub連携のChatGPTに読ませたい可能性が高いため、現在は以下もリポジトリ内で管理しています。

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

そのため、外側ルート化後も以下は除外します。

```gitignore
tools/damage-video-review/
tools/damage-video-review/**
damage-video-review/
**/damage-video-review/
**/damage-video-review/**
検証動画/
*.mp4
*.mov
*.mkv
*.avi
*.webm
*.m4v
```

将来、動画解析ツールを再開する場合は、別リポジトリに分けるか、ローカル専用ツールとして扱う方針を優先します。

## 採用した最小構成

ファイル移動をせず、Git 管理ルートだけを外側へ広げる案を採用しました。

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
- `ポケモンユナイト/docs/`
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

## .gitignore に入れた方針

外側用 `.gitignore` は作成済みです。
具体的な項目と各項目の説明は [root-gitignore-plan.md](root-gitignore-plan.md) にまとめています。

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

## 実施済みチェックリスト

外側ルート化時に確認したこと:

1. 現在の `git status` が把握できている。
2. 未コミット変更をどう扱うか決めている。
3. 現在の remote URL を確認済み。
4. GitHub Pages の公開元を確認済み。
5. 外側にある大容量ファイルを確認済み。
6. `.gitignore` の候補を用意済み。
7. GitHubに上げたくないファイルがないか確認済み。
8. Codex / ChatGPT に読ませたいファイルが整理されている。

## 実施手順の記録

実施時の最小手順候補として残していた内容です。現在は完了済みです。

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

## 実施後に更新したもの

Gitルートを外側へ広げたため、以下を更新対象にしました。

- `README.md`
- `ポケモンユナイト/docs/project-map.md`
- `ポケモンユナイト/docs/project-overview.md`
- `ポケモンユナイト/docs/ai-workflow.md`
- `ポケモンユナイト/docs/current-status.md`
- `ポケモンユナイト/docs/repository-layout-plan.md`
- GitHub Pages 設定に関係する説明

特に `ポケモンユナイト/docs/current-status.md` の「Git管理上の注意」は必ず更新します。

## 主なリスク

- GitHub Pages の公開パスが変わる。
- 既存リンクや相対パスが壊れる。
- 大容量ファイルを誤ってGit管理してしまう。
- 調査中・未確認データが、確定済みデータのように見える。
- 日本語フォルダ名が外部ツールで扱いづらい場合がある。
- Codex の作業ルートを変更する必要が出る。

## 現時点の推奨判断

今後も、すぐに `app/ research/ verification/` への大規模ファイル移動までは行わず、現在の構成を維持します。

1. GitHubに見せたい調査ファイルを確定する。
2. GitHubに上げない動画・出力ファイルを洗い出す。
3. `.gitignore` を先に設計する。
4. GitHub Pages の公開方法を確認する。
5. GitHub Pages の公開設定やREADMEリンクを必要に応じて見直す。

今の段階では、`app/ research/ verification/` への大規模整理より、外側ルート化済みの現在構成を保つ方が安全です。
