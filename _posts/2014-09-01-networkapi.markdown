---
layout: post
title: "HTML5：Network Information API简介"
date: 2014-09-01 11:22
tags: html
---
无意看到博客看到该接口，总结成笔记

1.定义：
  Network Information API让开发人员得以访问系统与网络（蜂窝网络、无线网络和蓝牙网络等）进行通信所使用的<span class="stress">连接类型</span>。
  要是连接类型有变化，它还提供了通知脚本的一种手段。
  这让开发人员得以对文档对象模型（DOM）进行动态改变，及/或通知用户网络连接类型已有变化。

<!-- more -->

2.接口：
```javascript
window.navigator.connection || window.navigator.mozConnection //加moz前缀
window.navigator.connection.type: //类型
 bluetooth  //蓝牙
 cellular   // 移动连接：EDGE 3G 4G
 ethernet   // 以太网
 none       //  未连接
 wifi      // 无线网
 other     // 不是unknow
 unknown   // 已经建立连接，无法确定类型
```

3.事件：
  ontypechange事件。每当网络连接的类型有变化，就会触发该事件。
```javascript
var connection = window.navigator.connection || window.navigator.mozConnection || null;   
connection.addEventListener('typechange', function (event) {   
 typeValue.innerHTML = connection.type;   
});   
```

4.支持：
  用firefox31测试了一下，发现不支持.大家了解一下吧！
  
原文:<a href="http://developer.51cto.com/art/201408/449995.htm" target="_blank">http://developer.51cto.com/art/201408/449995.htm</a>
  