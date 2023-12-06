/*********************************
    環境構築方法（作業者用）
*********************************/

1.Gitからプロジェクトをクローンする
2.「npm init -y」と入力し「package.json」を作成
3.「npm install -D vite sass postcss autoprefixer postcss-sort-media-queries css-declaration-sorter @fullhuman/postcss-purgecss postcss-normalize-charset vite-plugin-handlebars js-beautify」と入力しプラグインを一括インストール
4.「package.json」の「"scripts"」に下記記述を追加
    "dev": "vite",
    "build": "vite build && html-beautify dist/**/*.html",
    "preview": "vite preview"
5.「npm run dev」と入力するとプレビューサーバのパスが表示される
6.「npm run build」と入力すると「dist」ディレクトリにビルドされる



/*********************************
    ディレクトリ構成
*********************************/

/
　┣━ src //ビルド前のファイル（編集する際は必ずこちらから行う）
　┃　　┣━ scss
　┃　　┃　　┣━ base //基本設定などを格納
　┃　　┃　　┃　　┗━ _base.scss //基本設定
　┃　　┃　　┣━ global //mixin,変数などを格納
　┃　　┃　　┃　　┣━ _valiables.scss //変数
　┃　　┃　　┃　　┗━ _media.scss //メディアクエリ
　┃　　┃　　┃　　　　　：
　┃　　┃　　┣━ layout //レイアウトに使うBlockを格納
　┃　　┃　　┃　　┗━ _container.scss //コンテナ
　┃　　┃　　┃　　　　　：
　┃　　┃　　┣━ module //モジュールとして使うBlockを格納
　┃　　┃　　┃　　┣━ _header.scss //ヘッダー
　┃　　┃　　┃　　┗━ _footer.scss //フッター
　┃　　┃　　┃　　　　　：
　┃　　┃　　┣━ page //ページ毎に使うCSSを格納
　┃　　┃　　┃　　┗━ _top.scss //indexページ
　┃　　┃　　┃　　　　　：
　┃　　┃　　┗━ style.scss
　┃　　┣━ js
　┃　　┃　　┣━ module //モジュールに分けたjsを格納
　┃　　┃　　┃　　┗━ xxx.js
　┃　　┃　　┃　　　　　：
　┃　　┃　　┗━ main.js
　┃　　┣━ publicl //Viteの変換対象外のディレクトリ、中身がそのままコピーされる
　┃　　┃　　┗━ assets
　┃　　┃　　 　　┣━ css //リセットCSSなどを格納
　┃　　┃　　 　　┣━ js //プラグインを入れる際はこちらに格納
　┃　　┃　　 　　┣━ img //画像を格納
　┃　　┃　　 　　┗━ favicon //ファビコンを格納
　┃　　┣━ parts //テンプレートに分けたhtmlを格納
　┃　　┃　　┣━ header.html //ヘッダー
　┃　　┃　　┗━ footer.html //フッター
　┃　　┃　　 　　：
　┃　　┗━ index.html //ビルド前のhtmlを格納
　┃　　 　　：
　┗━ dist //ビルド後のファイル（編集不可）
　 　　┣━ assets
　 　　┃　　┣━ css
　 　　┃　　┣━ js
　 　　┃　　┣━ img
　 　　┃　　┗━ favicon
　 　　┗━ index.html
　 　　 　　：



/*********************************
    コーディングルール
*********************************/

/* 共通ルール */

1.PCファーストでコーディングする
2.Figmaのオートレイアウト対応ヵ所は、余白はなるべくpaddingとgapで記述する
3.複数単語は「ハイフンケース（multi-word）」で記載する

/* HTMLルール */

1.Blockの閉じタグには極力コメント「<!-- /.class-name -->」をつける

/* CSSルール */

1.CSS設計は「BEM」を採用
2.命名規則は「MindBEMding（.Block__Element--Modifier）」を採用
3.modifierのキーと値はハイフンで繋ぐ（key-val）
4.基本的に子孫セレクタは使用しない（Modifierで下層の状態を変化させる時は良い）

/* JSルール */

1.JavaScriptの命名は接頭辞「js_」をつけ「スネークケース」で記載する（js_multi-word_multi-word）



/*********************************
    Sassネスト構成
*********************************/

1.「__Element」を「&」でネストしない
2.「--Modifier」は「&」でネストする
3.疑似クラス,疑似要素は「&」でネストする

.Block {
    &--Modifier {
    }

    &:hover {
    }

    &::before {
    }
}

.Block__Element {
    &--Modifier {
    }

    &:hover {
    }

    &::before {
    }
}



/*********************************
    環境構築方法（構築者用）
*********************************/

/* Gitからクローンしたプロジェクトにviteを入れる方法 */

参考：https://coding-memo.work/development/1274/
　　：https://designsupply-web.com/media/programming/7598/

1.「npm init -y」と入力し「package.json」を作成
2.「npm install -D vite」と入力しviteプラグインをインストール
3.「vite.config.js」を他のプロジェクトからコピーする
4.「npm install -D sass」と入力しSassプラグインをインストール
5.「npm install -D postcss」と入力しPostCSSプラグインをインストール
6.「postcss.config.cjs」を他のプロジェクトからコピーする
7.「npm install -D autoprefixer」と入力しベンダープレフィックスを自動付与するプラグインをインストール
8.「.browserslistrc」を他のプロジェクトからコピーする
9.「npm install -D postcss-sort-media-queries」と入力しメディアクエリを整理するプラグインをインストール
10.「npm install -D css-declaration-sorter」と入力しCSSプロパティをソートするプラグインをインストール
11.「npm install -D @fullhuman/postcss-purgecss」と入力し未使用のスタイルを削除するプラグインをインストール
12.「npm install -D postcss-normalize-charset」と入力し先頭にcharset追加するプラグインをインストール
13.「npm install -D vite-plugin-handlebars」と入力しHTMLをハンドルバー化するプラグインをインストール
14.「npm install -D js-beautify」と入力しビルドしたHTMLを整形するプラグインをインストール
15.「.jsbeautifyrc」を他のプロジェクトからコピーする
17.「sitedata.json」を他のプロジェクトからコピーし内容を編集する
18.「package.json」の「"scripts"」に下記記述を追加
    "dev": "vite",
    "build": "vite build && html-beautify dist/**/*.html",
    "preview": "vite preview"
19.「package.json」の「"main"」の下に下記記述を追加
    "type": "module",
20.「npm run dev」と入力するとプレビューサーバのパスが表示される
21.「npm run build」と入力すると「dist」ディレクトリにビルドされる
