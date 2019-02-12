# 開発環境構築手順

本プロジェクトの開発時には必ず下記の手順にて開発環境の構築を行ってください。

## 初回のみ

### 0. 使用ツールのダウンロード/インストール
下記記載のツールを事前にダウンロード/インストールしてください。

**必須**
- [Node.js](https://nodejs.org/ja/)
バージョンは8.9.4以上を使用してください。
- [Git for windows](https://gitforwindows.org/)

**推奨**
-  [SourceTree](https://ja.atlassian.com/software/sourcetree)
-  テキストエディタ・IDE（[Visual Studio Code](https://code.visualstudio.com/)など）
※基本自由ですが、 [EditorConfig](https://editorconfig.org/)をサポートできないエディタの使用は禁止です。

### 1. Gitリポジトリのクローン
https://xxx/xxx.git
※masterブランチをチェックアウトしてください。

### 2. 作業ディレクトリに移動する
```sh
cd 作業ディレクトリ
```

### 3. Node.jsパッケージのインストール
```sh
npm i
```

### 4. 以下URLで開発中のページへのアクセスを確認
http://localhost:3000/

## 開発時に毎回行う作業
### 1. 作業ディレクトリに移動する
```
cd 作業ディレクトリ
```

### 2. ローカルサーバーの起動
```
npm start
```

## その他コマンドについて

### ファイル一式ビルド
```
npm run build
```

### ビルド後のファイル全量削除
「/dist/htdocs/」ディレクトリに不要ファイルが存在する場合に使用してください。
```
npm run clean
```
