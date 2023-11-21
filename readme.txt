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
　┃　　┃　　┃　　┣━ _index.scss
　┃　　┃　　┃　　┗━ _top.scss //indexページ
　┃　　┃　　┃　　　　　：
　┃　　┃　　┗━ style.scss
　┃　　┣━ js
　┃　　┃　　┣━ module //モジュールに分けたjsを格納
　┃　　┃　　┗━ script.js
　┃　　┣━ html
　┃　　┃　　┣━ parts //テンプレートに分けたhtmlを格納（WordPress化したら削除）
　┃　　┃　　┗━ index.html //ビルド前のhtmlを格納（WordPress化したら削除）
　┃　　┃　　 　　：
　┃　　┣━ php
　┃　　┃　　┣━ parts //テンプレートに分けたphpを格納（WordPress時に使用）
　┃　　┃　　┗━ index.php //phpを格納（WordPress時に使用）
　┃　　┃　　 　　：
　┃　　┗━ publicl //Viteの変換対象外のディレクトリ、中身がそのままコピーされる
　┃　　 　　┗━ assets
　┃　　 　　 　　┣━ js //プラグインを入れる際はこちらに格納
　┃　　 　　 　　┣━ img //画像を格納
　┃　　 　　 　　┗━ favicon //ファビコンを格納
　┗━ dist //ビルド後のファイル（編集不可）
　 　　┣━ assets //
　 　　┃　　┣━ css
　 　　┃　　┣━ js
　 　　┃　　┣━ img
　 　　┃　　┗━ favicon
　 　　┣━ (parts) //WordPress時のみ
　 　　┗━ index.html(php)
　 　　 　　：



/*********************************
    コーディングルール
*********************************/

/* 共通ルール */

1.PCファーストでコーディングする

/* HTMLルール */

1.Blockの閉じタグには極力コメント「<!-- /.class-name -->」をつける

/* CSSルール */

1.CSS設計は「BEM」を採用
2.命名規則は「MindBEMding（.Block__Element--Modifier）」を採用
3.modifierのキーと値はハイフンで繋ぐ（key-val）
4.複数単語は「ハイフンケース（multi-word）」で記載する
5.基本的に子孫セレクタは使用しない

/* JSルール */

1.JavaScriptの命名は接頭辞「js_」をつけ「スネークケース」で記載する（js_multi-word_multi-word）



/*********************************
    Sassネスト構成
*********************************/

1.「__Element」を「&」でネストしない
2.「__Modifier」は「&」でネストする
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
