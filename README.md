会社サイト雛形
Nasu MAYA Creatives 合同会社 サイト雛形

このリポジトリはNasu MAYA Creatives 合同会社のコーポレートサイト雛形です。編集ポイントと使い方を簡単にまとめます。

ファイル構成

- [index.html](index.html) — メインのHTML。テキストや構成を編集してください。
- styles/styles.css — サイトのスタイル。カラーパレット・フォント等をここで調整。
- scripts/main.js — ナビのトグルとフォームの簡易ハンドリング。
- images/ — ロゴや画像を配置するフォルダ。

編集・公開手順

1. `index.html`のタイトル、会社情報、サービス説明を編集してください。
2. `styles/styles.css`で色やレイアウトをカスタマイズしてください。
3. 問い合わせフォームを有効にするには、`scripts/main.js`の送信処理をバックエンドAPIに合わせて書き換えてください。
 - 本テンプレートではシンプル運用のため、問い合わせはローカルのメールクライアントを開く`mailto:`方式を採用しています。
	 - 送信先は `nasumayacreatives+contact@gmail.com`（Gmailのプラスアドレス）です。
	 - spam軽減のためにhoneypot（隠し入力）を設置しています。フォームを自動で埋めるボットはこのフィールドに入力するため、検出して送信を中止します。
	 - 将来的にFormspreeやNetlify Formsのような外部フォームサービスを使う場合は、`scripts/main.js`を書き換え、`form`の`action`を設定してください。
4. GitHub Pagesなどで公開する場合はリポジトリの`Settings > Pages`を設定してください。

カスタマイズ案

- フォントをGoogle Fonts等で差し替える
- 画像やロゴを`images/`に追加
- 多言語対応（`lang`属性と文言の分離）

必要なら、GitHub Actionsで自動デプロイ設定も追加できます。ご希望なら設定を追加します。