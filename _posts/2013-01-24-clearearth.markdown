---
layout: post
title: "googleEarth清除KML,地标等方法"
date: 2013-01-24 09:54
tags: google
---
  调项目的bug，从网上搜索的资料，整理一下！方便以后使用
  
  <!--more-->
  
  1.清除networkLink加载KML/KMZ
  {% highlight javascript linenos %}ge.getFeatures().removeChild(networkLink);//networkLink=""{% endhighlight %}
  
  2.清除fetchKml加载的KML/KMZ
  {% highlight javascript linenos %}
kmlObject=null/kmlObject="";
 {% endhighlight %}
  
  3.清除地标
   {% highlight javascript linenos %}
 ge.getFeatures().removeChild(placemark);
  {% endhighlight %}
  
  4.清除线段
  {% highlight javascript linenos %}
ge.getFeatures().removeChild(lineMark);
  {% endhighlight %}
  
  5.清除球
  {% highlight javascript linenos %}
ge.setBalloon(null);
  {% endhighlight %}
  
  6.如果是个地标或线段数组（多个），清除方法如下
   {% highlight javascript linenos %}
   i=0;
   while(placeMark[i]!=null){
   ge.getFeatures().removeChild(pacemark[i]);
   i++;
   }
  {% endhighlight %}