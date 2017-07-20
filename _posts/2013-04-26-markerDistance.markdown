---
layout: post
title: "Google Map V3 javascript计算两个marker之间的距离"
date: 2013-04-26 09:31
tags:  google
---
Google Map V3 javascript计算两个marker之间的距离
   
   做地图开发，最常用到的就是marker一些操作和交互。简单介绍一下，两个marker之间的距离计算。
   
   google map api 很方便的 只要是常用的 基本上都有接口。
  
  <!--more-->

  1.创建两个marker点
   ```javascript
var oldMarker = new google.maps.Marker({
  position: new google.maps.LatLng("31.95678", "177.898673"),
  map: map,
  title:"old"
});
var newMarker = new google.maps.Marker({
  position: new google.maps.LatLng("31.45678", "177.098673"),
  map: map,
  title:"new"
});
   ```
   
   2.加载<span class="stress">geometry库</span>
   ```javascript
   <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false&libraries=geometry"></script>
   ```
   
   说明：libraries=geometry
   
   3.计算距离
   ```javascript
   var meters = google.maps.geometry.spherical.computeDistanceBetween(oldMarker.getPosition(), newMarker.getPosition());
   document.getElementById("distance").innerText = meters+"米";
   ```
   
   说明：单位是<span class="stress">米</span>
   
   oldMarker.getPosition() 获取oldmarker的当前位置(经纬度)
   
   
   