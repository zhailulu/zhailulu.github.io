---
layout: post
title: "IE兼容CSS3圆角border-radius的方法"
date: 2013-06-27 11:20
tags: css
---
 IE兼容CSS3圆角border-radius的方法
 
 优化网站js效果，网上看见一个很简单方便的兼容圆角的方法，记下来。
 
 和大家<span class="stress">分享</span>一下,知道的高手就当捧个过场。嘻嘻
 
 1.下载<a href="http://yrzhll.top/example/border-radius.htc">border-radius.htc</a>
 
 <!-- more -->
 
 2.CSS
{% highlight javascript linenos %}
  .radius{
	-moz-border-radius: 11px;
	-webkit-border-radius: 11px;
	border-radius: 11px;
	behavior: url(border-radius.htc);
 }
{% endhighlight %}


 优点：

一、最为方便让IE实现圆角；

二、体积小，border-radius.htc才4.77kb，CSS里用到的代码也才一排。

缺点：

一、只能同时4角圆角，不能单独设置；

二、div上可以正常使用，测试text文本框，会出现异常；

三、CSS文件要和页面在同一目录下，否则无效