---
layout: post
title: "css布局的瀑布流"
date: 2013-06-08 16:37
tags: css
---

 css布局的瀑布流
   
   公司的同事说网站的瀑布流加载好慢，让我优化一下。其实我也不知道从哪里下手，改别人写的代码真头疼！
   
   本职工作头疼也得干！呵呵
   
   发现公司的网站的瀑布流布局是利用position:absolute;然后通过动态计算top，left绝对定位。之前做过类似的效果，
   
   应该css就可以搞定的吧！ 不需要惊动javascript！改不好别人的代码，那就重新写一个。嘻嘻
   
   本人写的瀑布流主要以<span class="stress">列</span>为单位,所以动态加载的时候也是以列为单位。一下加载16个瀑布。
   
   <!-- more -->
   
   上图：
   ![Crepe](/images/blog/waterfall.jpg)
   
   demo地址： 代码看源文件

   <a href="http://www.yrzhll.com/example/waterfall.html" target="_blank">http://www.yrzhll.com/example/waterfall.html</a>