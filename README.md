# 謎解きメーカー

## Prerequired
Please install the following tools as OS level.
- [git](https://git-scm.com/)
- [yarn](https://yarnpkg.com/)

## Installation
1. `git clone https://github.com/m34github/react-redux-pwa-template.git work`
1. `cd work`
1. `yarn install`
1. `yarn run [dev | build]`
1. `yarn run start:dev`

## 仕様説明
画面は大きく3つ
- Home: 問題提供者の画面、自分や他人の謎が見れる (PC 画面)
- Upload: 問題提供者の画面、問題情報をアップロードする (PC 画面)
- Detail: 謎解きの参加者が主に見る画面、Home から飛べる (スマフォ画面)

システムの流れ
1. アップロードから PDF をアップロードする
1. Firebase Storage に PDF が上がる
1. Firebase Realtime Database に新たに書き込みが発生する
1. Home 画面に問題が追加される (Realtime Database を参照しているため)
この流れで作成されたデータは「アリスの迷宮」のみで、他は手動で上げたものになっている

認証について
- Auth にて (ハードコーディングで) ユーザ認証させている
- そのため Storage や Realtime Database のルールをデフォルトにしても正しく動作するはず
- ただ、ゼロックスのプリンタ API との接続を容易にするため、いったん全ルールを解放している

## 残タスク
- Detail ページで印刷すれば完了なのだが印刷ボタンが効かない (Detail.jsx の print 関数を参照)
- PDF アップロード時のサムネイルが固定 (Upload.jsx にてハードコーディングで指定)
- 本当は PDF から自動でサムネイル生成できると良いのだが、PDF.js との絡みが発生するので優先度を下げた
- 最初は問題提供者だけが使う PC Web だと思っていたため PWA 対応もしていない
