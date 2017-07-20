---
layout: post
title: "javascript命名空间"
date: 2013-05-31 14:42
tags: js 
---
   升级网站地图的时候，发现之前旧的代码用了好多全局变量。
   
   Javascript的全局变量，在所有模块中都是可见的；任何一个函数内部都可以生成全局变量，这大大加剧了程序的复杂性。
   
   推荐使用<span class="stress">匿名包装器</span>（译者注：也就是自执行的匿名函数）来创建命名空间。这样不仅可以防止命名冲突， 而且有利于程序的模块化。

   另外，使用全局变量被认为是不好的习惯。这样的代码倾向于产生错误和带来高的维护成本。
   
   ```javascript
(function(){// 函数创建一个命名空间
   window.foo = function(){// 对外公开的函数，创建了闭包
   };
})(); // 立即执行此匿名函数
  ```
   
   <!--more-->
   
   匿名函数被认为是 表达式；因此为了可调用性，它们首先会被执行。
   
   ```javascript
   // 另外两种方式
   +function(){}();
   (function(){}());
   ```
   
   上面都是我查找的有关命名空间的资料,看看本人在项目中的应用代码
   ```javascript
(function(){
   window['googleMap']= {}; //命名空间
   googleMapwindow['googleMap']['init'] = init; //对外的接口init
})();
   ```