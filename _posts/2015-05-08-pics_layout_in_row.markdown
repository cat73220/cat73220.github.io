---
layout: post
title:  "静止画を横n段組する例"
categories: Learning
---

### キャメルバッグ

登山･ハイキングで背負う水袋のこと。ストローがついていて口元で飲めるようになっています。

#### Markdownで配置した例

![備え付けた様子](/images/IMG_15062014_224847-40percent.png "備え付けた様子")

![単体品](/images/IMG_15062014_225103.png "単体品")

----

#### div/imgタグで配置した例（横２段組の例）

<div class="post-col-split2">
<img src="/images/IMG_15062014_224847-40percent.png" title="内蔵型" />
</div>
<div class="post-col-split2">
<img src="/images/IMG_15062014_225103.png" title="単体品" />
</div>
<div style="clear:both;"></div>

----

#### div/imgタグで配置した例（横3段組の例）

<div class="post-col-split3">
<img src="/images/IMG_15062014_224847-40percent.png" title="内蔵型" />
</div>
<div class="post-col-split3">
<img src="/images/IMG_15062014_225132-30percent.png" title="内蔵型を備えたバックパック" />
</div>
<div class="post-col-split3">
<img src="/images/IMG_15062014_225103.png" title="単体品" />
</div>
<div style="clear:both;"></div>

----

#### div/imgタグで配置した例（横4段組の例）

<div class="post-col-split4">
<img src="/images/IMG_15062014_224847-40percent.png" title="内蔵型" />
</div>
<div class="post-col-split4">
<p class="text">内蔵型<br>
バックパックに内蔵して使います。バックパックを選べば専用のポケットが装備されていて仕込むことができバックパックと一体となるり良いし心地が得られます。</p>
</div>
<div class="post-col-split4">
<img src="/images/IMG_15062014_225103.png" title="単体品" />
</div>
<div class="post-col-split4">
<p class="text">単体型<br>
バックパックと単体型の２つを背負って使います。</p>
</div>
<div style="clear:both;"></div>

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
