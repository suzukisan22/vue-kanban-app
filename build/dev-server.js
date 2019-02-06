// Node.jsのrequireスタイルでインポート
const bodyParser = require('body-parser')

// `Express`アプリケーションインスタンスを受け取る関数をインポート
module.exports = app => {
  // HTTPリクエストのbodyの内容をJSONとして解析するようミドルウェアをインストール
  app.user(bodyParser.json())

  // Todo: ここ以降にAPIの実装内容を追加していく
}
