---
layout: post
title: "如何只用CSS做到完全居中(转)"
date: 2013-10-17 09:36
tags: css
---

之前介绍过元素居中，前段时间看了一个文章，介绍了完全居中。<span class="stress">太帅了。牛人就是不一样啊，几句css就全部搞定。</span>
  
  我们都知道 margin:0 auto; 的样式能让元素水平居中，而 margin: auto; 却不能做到垂直居中……直到现在。但是，请注意！想让元素绝对居中，只需要声明元素高度，并且附加以下样式，就可以做到：
{% highlight javascript linenos %}
  .Absolute-Center {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
{% endhighlight %}

<!-- more -->

我并不是第一个发现这种方法的人（不过我还是敢把它叫做“完全居中”），它有可能是种非常普遍的技巧。但大多数介绍垂直居中的文章中并没有提到过这种方法。如果不是浏览这篇文章的评论，我甚至根本就不会发现这个办法。
上面那篇文章的评论栏中，Simon提供了一个jsFiddle的链接，其他的方法相比之下就相形见绌了。（Priit也在评论栏中提到了同样的方法）。深入研究了一番之后，我又用某些关键词找到了记载这种方法的三个网站：站点一、站点二、站点三。
以前从未用过这种方法的我想试试，看看这种”完全居中”的方法到底有多么神奇。
 好处：
跨浏览器，兼容性好（无需hack，可兼顾IE8~IE10）

无特殊标记，样式更精简

自适应布局，可以使用百分比和最大最小高宽等样式

居中时不考虑元素的padding值（也不需要使用box-sizing样式）

布局块可以自由调节大小

img的图像也可以使用

同时注意：
必须声明元素高度

推荐设置overflow:auto;样式避免元素溢出，显示不正常的问题

这种方法在Windows Phone上不起作用

浏览器支持：Chrome、Firefox、Safari、Mobile Safari、IE8-10。 “完全居中”经测试可以完美地应用在最新版本的Chrome、Firefox、Safari、Mobile Safari中，甚至也可以运行在IE8~IE10上


文章地址：<a href="http://blog.jobbole.com/46574/" target="_blank">http://blog.jobbole.com/46574/</a>
