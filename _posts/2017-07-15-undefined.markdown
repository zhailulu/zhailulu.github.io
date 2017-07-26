---
layout: post
title: "undefined和undeclared"
date: 2017-07-15 17:10
tags: [js]
---

很多开发人员会将undefined和undeclared混为一谈，但是在JavaScript中它们其实两回事

undefined表示已经在作用域声明但是没有赋值的变量

undeclared表示变量还没有声明过

~~~
  var a;
  a; //undefined
  b; //ReferenceError： b is not defined
~~~

ReferenceError错误一般都是没有在作用域声明导致的报错

~~~
  var a;
  typeof a; //undefined
  typeof b; //undefined
~~~

两个都返回undefined，这是为啥呢？

这是因为typeof有一个特殊的安全防范机制，导致undeclared没有报错

这个一般用来检查未声明变量有时候是个不错的办法，可以阻止控制台报错。

嘿嘿。。。。