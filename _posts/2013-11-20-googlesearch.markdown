---
layout: post
title: "googleMap V3 Search跑哪里了"
date: 2013-11-20 10:24
tags: google
---
   googleMap V2版本中有个方便的自动搜索框，但V3里面确找不到调用接口。V2和V3的API差别太大了。
   
   找了好久，原来google把这功能提出来，放在库里的places里面了。简单介绍一下调用方法
   
1.添加places库
```javascript
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places" ></script>
```

<!-- more -->

2.页面添加搜索框DOM
```javascript
<input id="search" class="controls" type="text" placeholder="Search Box">
```

3.初始化搜索框initialize
```javascript
var input = document.getElementById('search');
var searchBox = new google.maps.places.SearchBox(input);
//地点变动事件监听器
google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();
    var bounds = new google.maps.LatLngBounds();

    if(!!marker){
       marker.setMap(null);
    }   
    // Create a marker for each place.
    marker = new google.maps.Marker({
        map: map,
        title: places[0].name,
        position: places[0].geometry.location,
        draggable:true
    }); 

    bounds.extend(places[0].geometry.location);

    map.fitBounds(bounds);
}); 
```

参考资料
<a href="https://developers.google.com/maps/documentation/javascript/places-autocomplete" target="_blank">https://developers.google.com/maps/documentation/javascript/places-autocomplete</a>
   
   
  
