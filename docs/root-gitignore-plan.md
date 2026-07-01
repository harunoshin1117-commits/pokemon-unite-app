# Root Gitignore Plan

最終更新日: 2026-07-01

このファイルは、将来 Git 管理ルートを `C:\Projects\pokemon-unite-app` へ広げるときに使う、外側ルート用 `.gitignore` の設計案です。

まだ実際の `.gitignore` は外側に作りません。まずはこのファイルで内容を確認し、外側ルート化の直前に `C:\Projects\pokemon-unite-app\.gitignore` として作成します。

## 目的

GitHubには、プロジェクトを理解するために必要なファイルだけを入れます。

入れるもの:

- アプリ本体
- 調査JSON
- 人間確認メモ
- ドキュメント
- 軽量な補助スクリプト

入れないもの:

- 動画
- zip
- 仮想環境
- 自動生成された出力
- 一時ファイル
- 動画解析ツール一式

## 小学生向けの説明

GitHubは、みんなで見るノート置き場のようなものです。

ノート置き場に入れるもの:

- 大事なノート
- 設計図
- 小さい道具
- 調査メモ

ノート置き場に入れないもの:

- 重い録画ビデオ
- 作業中に出た大量の写真
- パソコンが勝手に作った作業道具
- いらなくなった一時ファイル

`.gitignore` は「これはGitHubに入れないでねリスト」です。

## 現時点の方針

Gitに含める:

```text
ポケモンユナイト/
データリサーチ/
人間確認用/
tools/ の中の軽量な補助スクリプト、説明ファイル、設定例
```

Gitに含めない:

```text
tools/damage-video-review/
検証動画/
チャットgpt作成画像/
動画ファイル
zipなどの圧縮ファイル
仮想環境
node_modules
output系フォルダ
一時ファイル、ログ
```

## 外側用 .gitignore 案

外側ルート化するときは、まず以下の内容を `C:\Projects\pokemon-unite-app\.gitignore` に置く候補とします。

```gitignore
# Dependencies / virtual environments
node_modules/
.venv/
.codex-venv/
**/.venv/
**/.codex-venv/

# Video / large media
*.mp4
*.MP4
*.mov
*.MOV
*.mkv
*.avi
*.webm
*.m4v

# Archives
*.zip
*.7z
*.rar

# Local-only folders
チャットgpt作成画像/
検証動画/
tools/damage-video-review/

# Generated outputs
output/
outputs/
**/output/
**/outputs/
**/output-*/
**/output_*/

# Temporary files / logs
*.tmp
*.log
.DS_Store
Thumbs.db
```

## 各項目の意味

### Dependencies / virtual environments

```gitignore
node_modules/
.venv/
.codex-venv/
**/.venv/
**/.codex-venv/
```

JavaScriptやPythonの部品置き場です。
他のパソコンでもインストールし直せるので、GitHubには入れません。

特に `.venv/` や `.codex-venv/` には OpenCV や numpy などの大きいファイルが入りやすいです。

### Video / large media

```gitignore
*.mp4
*.MP4
*.mov
*.MOV
*.mkv
*.avi
*.webm
*.m4v
```

動画ファイルをGitHubに入れないための設定です。
動画は重くなりやすく、リポジトリが扱いづらくなります。

### Archives

```gitignore
*.zip
*.7z
*.rar
```

zipなどの圧縮ファイルをGitHubに入れない設定です。
バックアップ用の圧縮ファイルは、Git管理と役割が重なるため入れません。

### Local-only folders

```gitignore
チャットgpt作成画像/
検証動画/
tools/damage-video-review/
```

このパソコンだけで使うフォルダをGitHubに入れない設定です。

- `チャットgpt作成画像/`
  - 参考画像置き場。アプリ本体や調査データではないため除外します。

- `検証動画/`
  - ゲーム内検証動画の置き場。動画は重いため除外します。

- `tools/damage-video-review/`
  - 以前作成を試した動画解析ツールです。
  - 今回のGitHubリポジトリには含めない方針です。

### Generated outputs

```gitignore
output/
outputs/
**/output/
**/outputs/
**/output-*/
**/output_*/
```

プログラムが作った出力フォルダをGitHubに入れない設定です。
出力画像や候補JSONは、必要なら再生成できるため、基本的にはGit管理しません。

### Temporary files / logs

```gitignore
*.tmp
*.log
.DS_Store
Thumbs.db
```

一時ファイルやOSが勝手に作るファイルを除外します。
人間が読む大事なデータではないため、GitHubには入れません。

## 注意する例外

以下は除外しすぎないように注意します。

- `docs/*.json`
  - 特殊効果調査の一覧JSONは大きくても価値があるため、基本的にGit管理候補です。

- `データリサーチ/*.json`
  - 調査データ本体なのでGit管理候補です。

- `人間確認用/*.html`
  - 検証メモサイトとして使うためGit管理候補です。

- `images/`
  - アプリで使う画像があるため、フォルダごと除外しません。

- `tools/`
  - フォルダ全体を除外しません。
  - ただし `tools/damage-video-review/` は除外します。

## 実施前チェック

外側 `.gitignore` を作る前に確認します。

1. `tools/damage-video-review/` をGitに入れない方針でよい。
2. `検証動画/` をGitに入れない方針でよい。
3. `チャットgpt作成画像/` をGitに入れない方針でよい。
4. `データリサーチ/` はGitに入れる。
5. `人間確認用/` はGitに入れる。
6. `tools/` は軽量スクリプトだけGitに入れる。
7. 外側に `.gitignore` を作った後、`git status` で大容量ファイルが出てこないことを確認する。

## 次にやること

この案を確認したあと、外側ルート化の直前に以下を行います。

1. `C:\Projects\pokemon-unite-app\.gitignore` を作る。
2. このファイルの `.gitignore` 案を貼る。
3. `.git` を外側へ移す。
4. `git status` で除外が効いているか確認する。
5. 大容量ファイルが出てきた場合は、`.gitignore` を調整する。
