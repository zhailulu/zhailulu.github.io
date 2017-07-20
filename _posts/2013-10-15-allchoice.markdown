---
layout: post
title: "jquery'全选'简单code"
date: 2013-10-15 10:28
tags: js
---
十一大假过了一个星期了，好长时间没有写文章了。今天翻翻笔记。把之前整理网站上的jquery“全选”的脚本分享一下
  
请大家多多指教。(嘻嘻，估计也没几个人看)

<!--more-->

```javascript  
/*
*jQuery allChoice  plus v1.0 全选 可以直接拷贝到页面位置
* 创建人 : zhailulu
* 创建时间 : 2013-09-05
   调用方式 : $("#all").allChoice("input[name='filter[]']");
*/

$.fn.extend({   
   allChoice: function(single){
     var $all = $(this),$single = $(single);  
	 
     $all.unbind("click");
     $all.click(function(){
        !$(this).attr("checked") ? $single.attr("checked",false) : $single.attr("checked",true);
      });
	 $single.unbind("click");
     $single.click(function(){
       if(!$(this).attr("checked") && $all.attr("checked")){
         $all.attr("checked",false);
       }else if($(this).attr("checked")){
         var flag = false;
         $single.not($(this)).each(function(){
            if(!$(this).attr("checked")){
               flag = true;
            }  
         });

         if(!flag){$all.attr("checked",true);}
      }  
   
      });


   }  
});
```