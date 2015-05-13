---
layout: post
title:  "Efforts to understand the layout of POST"
date:   2015-05-08 15:56:00
categories: Learning
---

`_posts`ディレクトリに保存する`.markdownファイル`冒頭の`'layout: post'`は`_layouts`ディレクトリの`post.html`をテンプレートとすることの宣言と思う。

`_posts`ディレクトリに`YYYY-MM-DD-title.markdown`形式のファイル名で保存したmarkdownファイルがwebサイトに追加される。`_posts`ディレクトリにファイルを追加したりそのディレクトリのファイルを変更すると`jekyll`サーバーはそれらを自動検出して更新する。webブラウザでリロードすると更新結果を見ることができる。



[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
