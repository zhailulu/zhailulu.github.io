---
layout: post
title: " css3元素简单的闪烁效果"
date: 2012-12-17 10:02
tags: css
---
CSS3属性中有关于制作动画的三个属性：Transform,Transition,<span class="stress">Animation</span>；
下面教大家一个简单的闪烁的动画

<!-- more-->

```javascript
 //animation关键帧
 @-webkit-keyframes twinkling{
 /*透明度由0到1*/
 0%{  
 opacity:0; /*透明度为0*/
 }
 100%{
 opacity:1; /*透明度为1*/
 }
 }  
```

Jquery 调用：
```javascript
$(element).css({"-webkit-animation":"twinkling 1s infinite ease-in-out"}); //在对象element中添加闪烁动画 
```

javascript调用
```javascript
var elem=document.getElementById(id);
elem.css({"-webkit-animation":"twinkling 1s infinite ease-in-out"}); //在对象element中添加闪烁动画 
elem.style.webkitAnimation="twinkling 1s infinite ease-in-out";
```

也可以在css样式里添加如下：
```javascript
#element{
  -webkit-animation: twinkling 1s infinite ease-in-out;
  }
```

注：动画名称为twinkling  时间为1s  动画次数为无限次  动画效果 ease-in-out 
简单吧！其实用css3做动画效果，比用flash，javascript要方便简单多了！希望浏览器赶快都支持css3 Animation .目前webkit内核的浏览器都支持（safrai,chrome）

测试浏览器是否支持CSS3:
<a href="http://modernizr.github.com/Modernizr/test/index.html" target="_blank">http://modernizr.github.com/Modernizr/test/index.html</a>