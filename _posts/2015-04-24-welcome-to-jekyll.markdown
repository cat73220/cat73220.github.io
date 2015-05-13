---
layout: post
title:  "The first try of jumly integration"
date:   2015-04-24 16:02:37
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

----

## jumly test
<div class="post-col-split2">
	<script type='text/jumly+sequence'>
		@found "You", ->
			@message "Think", ->
				@message "Write your idea", "JUMLY", ->
					@ref "Just created"
					@message "Come", ->
						@create "Diagram", ->
							@message "Made","JUMLY"
							@ref "...tear down"
						@message "Made 'Diagram'", "You"
						@note "...tear down"
					@note "...tear down"
				@note "...tear down"
	</script>
</div>

<div class="post-col-split2">
	<script type='text/jumly+sequence'>
		@found "You", ->
			@alt
				"[found]": ->
					@loop ->
						@message "request", "HTTP Server"
						@note "NOTE: THis donesn't make sense :) just an example"
				"[missing]": ->
					@message "new", "HTTP Session"
			@ref "respond resource"
	</script>
</div>

<div style="clear:both;"></div>

<div class="post-col-split2">
	<script type='text/jumly+sequence'>
		@actor "User" : -> @view "Browser"
		@view "Browser" : -> @controller "Server"
		@controller "Server" : -> @entity "Database"
	</script>
</div>

<div class="post-col-split2">
  Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].
</div>

<div style="clear:both;"></div>

  Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
