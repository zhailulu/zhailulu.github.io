/**
 * jQuery overlay  plus v1.0
 * 创建人 : zhailulu
 * 创建时间 : 2013-04-09
 ***************************
 */
;(function($){
  $.overlay=function(param){
     var opts = $.extend({},$.overlay.defaults,param),
	 clickElem=$("#"+opts.clickId),
     windowElem=$("#"+opts.contentId),
	 closeElem=$("#"+opts.closeId);
	 
	 /*遮罩层的大小*/
     function overlaySize(id){
       var width= $(document).width(),height= $(document).height();
	   $("#"+id).css({"width":width,"height":height});
     }
	 
	 /*添加遮罩层*/
     function addOverlay(){
      var overlay=$("<div class='overlay' id='overlay'></div>");
      overlay.appendTo($("body"));
      overlaySize('overlay');
     }
	 
	 /*删除遮罩层*/
	 function removeOverlay(){
	    $("#overlay").remove();
	 }
	 
	 /*点击按钮事件*/
	 clickElem.bind("click",function(){
        addOverlay();
	    windowElem.show();
      });
	  
      /*窗口改变大小*/
      $(window).resize(function(){
         overlaySize("overlay");
      });
	  
	  /*关闭按钮事件*/
	  closeElem.bind("click",function(e){
	      removeOverlay();
		  windowElem.hide();
	  });
  };
  
  /*默认参数*/
  $.overlay.defaults = {
		  clickId : "demo",
          contentId : "windows",
		  closeId : "close"
  };

  $.overlay.version = '1.0.0';
})(jQuery)