---
layout: post
title: "JavaScript的全局函数"
date: 2014-02-26 09:57
tags: js
---
JavaScript 中包含以下 7 个全局函数，用于完成一些常用的功能（以后的章节中可能会用到）：escape( )、eval( )、isFinite( )、isNaN( )、parseFloat( )、parseInt( )、unescape( )。

**1.escape( )**

escape( ) 函数以一个 string 对象或表达式为参数并返回一个 string 对象。参数指定的字符串中的所有非字母字符被转换成以 XX% 表示的等价数字，XX 是一个表示非字母字符的十六进制数。
以下示例显示了 escape( ) 函数的作用。

**2.eval( )**

 eval( ) 函数将通过参数传入的一个包含 JavaScript 语句的字符串作为一个 JavaScript 源代码执行。eval( ) 返回执行 JavaScript 语句的返回值。

 <!-- more -->

 **3.isFinite( )**

 isFinite ( ) 函数用于确定一个变量是否有界，如果有界则返回 true，否则返回 false。所谓有界是指表达式的值界于 MAX_VALUE 和 MIN_VALUE 之间。

**4.isNaN( )**

 isNaN( ) 函数用于确定一个变量是否是 NaN，如果是，则返回 true，否则返回 false。NaN 代表 Not a Number，表示非数，即不是任何数。
例如，isNaN(12) 返回 false，isNaN('a') 返回 true，isNaN(true) 返回 false（因为此时 true 被当作数字 1）。

**5.parseFloat( )**

 parseFloat( ) 函数用于将字符串开头的整数或浮点数分解出来，若字符串不是以数字开头，则返回 NaN。

**6.parseInt( )**

 parseInt( ) 函数与 parseFloat( ) 函数类似，用于将字符串开头的整数分解出来，若字符串不是以数字开头，则返回 NaN。
例如，如果将刚才的 parseFloat( ) 函数示例中的所有 parseFloat 都用 parseInt 代替。

**7.unescape( )**

 unescape( ) 函数将参数传递来的字符串中的十六进制码转换成 ASCII 码并返回，它完成 escape( ) 函数的逆操作。例如，unescape("Tom%20%26%20and%20Jerry%20show") 的返回值为 "Tom & Jerry show"。
