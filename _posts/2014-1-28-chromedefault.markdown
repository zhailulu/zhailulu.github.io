---
layout: post
title: "chrome浏览器的默认样式"
date: 2014-01-28 09:00
tags: css
---
好久没写博客了，好像有一个月了吧！每天大大小小的烦人的事。也不知道写什么，
  
  感觉最近没啥长进，也懒的写了。再没长进，估计就被淘汰了。发点小牢骚，说正题吧！
  
  之前在调样式的时候就发现chrome的一些默认样式，哎呀 真不知道chrome一些默认样式是福还是<span class="stress">麻烦</span>。
  
  几乎每次都要取消chrome的一些默认样式，跟其他浏览器保持一致。有点烦人
  
  随便举几个例子：
  
  <!-- more -->
  
  1.默认样式字体大小12px;
   经常调chrome浏览器会发现chrome最小的字体只能是12px.
{% highlight javascript linenos %}   
html{-webkit-text-size-adjust:none;}//取消chrome默认字体
{% endhighlight %}
  
  2.input和textarea聚焦边框
{% highlight javascript linenos %}
input,button,select,textarea{outline:none}
textarea{resize:none}  //取消textarea可拖动放大
{% endhighlight %}
  
  经常遇见的好像也就是上面两个例子
  
  网上搜到的chrome默认样式表
  
  <a href="http://wenku.baidu.com/view/98395820aaea998fcc220ee2.html">http://wenku.baidu.com/view/98395820aaea998fcc220ee2.html</a>