---
layout: post
title: "揭示魔术：如何将HTML字符串正确地转换为一个DOM元素（翻译）"
date: 2014-02-21 16:16
tags: html
---
  这看起来似乎是一个简单的任务。然而，事实并非如此。如果你经常使用现在几个流行的解决方案去解决这个问题的时候，你会发现其实存在很大的问题。
   
   比方说，我们有以下的HTML标记
   
   ```javascript<section><a href="#">Link label</a></section>```
   
   如果你去搜索这个问题的时候会发现目前最流行的解决方案是使用创建一个新元素的innerHTML属性。
   ```javascript
    var notWorking = function(html) {
     var el = document.createElement('div');
     el.innerHTML = html;
     return el.childNodes[0];
    }
    console.log(notWorking('<section><a href="#">Link label</a></section>'));
   ```
   
   <!-- more -->
   
   可以看到上面的运行结果完全是正确的，会得到一个包含着a的section DOM元素。这样看来确实很正常，也很简单。
   
   现在我们试试插入其他的HTML字符串
   
   ```javascriptconsole.log(notWorking('<tr><td>Text Here</td></tr>'));```
   
   而此时得到的结果：
   
   ```javascriptText Here```
   
   咦。。。tr和td标签消失了，这样看来好像是不正确的。其实这才是浏览器正常的行为。我去查了有关该问题的相关资料
   
   2006年时候Eric Vasilik的一篇文章这样说的：
   
   >当通过设置元素的innerHTML属性时，HTML字符串要通过解析器才能运行的
   
   >当解析类似"<tr><td>Foo"前面不带"table"标签的字符串时，解析器会忽略相关的tr和td标签
   
   于是我意识到通过innerHTML设置的字符串不应该是混合的一系列标签，而是一个正确有效的DOM表达式。
   
   如果我加上table应该就能得到正确的结果了
   
   ```javascriptconsole.log(notWorking('<table><tr><td>Text Here</td></tr></table>'));```
   
   结果如下
   
   ```javascript<table><tbody><tr><td>Text Here</td></tbody></table>```
   
   这就证明Eric Vasilik是正确的。我的方法类似于检查所传递的字符串然后自动添加正确的标签。不是返回第一个节点，而是返回一个正确的嵌套的节点。看起来有不少工作量啊。

   但是，等等。。。jQuery应该不存在这个问题。你输入"tr,td"标签依然能得到所期望的结果。我研究了一些jquery的代码找到下面一段
   
```javascript
  // We have to close these tags to support XHTML (#13200)
  wrapMap = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    area: [ 1, "<map>", "</map>" ],
    param: [ 1, "<object>", "</object>" ],
    thead: [ 1, "<table>", "</table>" ],
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
    // unless wrapped in a div with non-breaking characters in front of it.
    _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
   },

   ```
   
   这样看来很神奇的解决了这个问题。我差点被表面的代码给欺骗了。
   我设法提取了一个类似的功能模块
   
```javascript
var str2DOMElement = function(html) {
/* code taken from jQuery */
var wrapMap = {
option: [ 1, '<select multiple='multiple'>', '</select>' ],
legend: [ 1, '<fieldset>', '</fieldset>' ],
area: [ 1, '<map>', '</map>' ],
param: [ 1, '<object>', '</object>' ],
thead: [ 1, '<table>', '</table>' ],
tr: [ 2, '<table><tbody>', '</tbody></table>' ],
col: [ 2, '<table><tbody></tbody><colgroup>', '</colgroup></table>' ],
td: [ 3, '<table><tbody><tr>', '</tr></tbody></table>' ],
// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
_default: [ 1, '<div>', '</div>'  ]
};
wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
var element = document.createElement('div');
var match = /<\s*\w.*?>/g.exec(html);
if(match != null) {
var tag = match[0].replace(/</g, '').replace(/>/g, '');
var map = wrapMap[tag] || wrapMap._default, element;
html = map[1] + html + map[2];
element.innerHTML = html;
// Descend through wrappers to the right content
var j = map[0]+1;
while(j--) {
element = element.lastChild;
}
} else {
// if only text is passed
element.innerHTML = html;
element = element.lastChild;
}
return element;
}
```
	
jquery框架很好的展示了我应该怎么包裹我的字符串在里面。一开始我还在想琢磨wrapMap对象是什么，后来我发现了这个
	
```javascript
	  j = wrap[0];
    while ( j-- ) {
    tmp = tmp.lastChild;
   }
```
	
这才是返回需要的DOM元素树和嵌套层次的数目的代码，很好很简单，这估计是jquery最常使用的功能之一。
	
注释：
还有个特殊的例子，当你想创建body标签，上面的代码不能工作。因为div里面不能嵌套body。

下面是个修正版本代码：

```javascript
var str2DOMElement = function(html) {
var wrapMap = {
	option: [ 1, '<select multiple='multiple'>', '</select>' ],
	legend: [ 1, '<fieldset>', '</fieldset>' ],
	area: [ 1, '<map>', '</map>' ],
	aram: [ 1, '<object>', '</object>' ],
	thead: [ 1, '<table>', '</table>' ],
	tr: [ 2, '<table><tbody>', '</tbody></table>' ],
	col: [ 2, '<table><tbody></tbody><colgroup>', '</colgroup></table>' ],
	td: [ 3, '<table><tbody><tr>', '</tr></tbody></table>' ],
	body: [0, "", ""],
	_default: [ 1, '<div>', '</div>'  ]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    var match = /<\s*\w.*?>/g.exec(html);
    var element = document.createElement('div');
    if(match != null) {
        var tag = match[0].replace(/</g, '').replace(/>/g, '').split(' ')[0];
        if(tag.toLowerCase() === 'body') {
            var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
            var body = document.createElement("body");
            // keeping the attributes
            element.innerHTML = html.replace(/<body>/g, '<div>').replace(/<\/body>/g, '</div>');
            var _attrs = element.firstChild.attributes;
            body.innerHTML = html;
			for(var i=0;i<_attrs.length;i++){
				body.setAttribute(_attrs[i].name, _attrs[i].value);
			}
			return body;
        } else {
            var map = wrapMap[tag] || wrapMap._default, element;
            html = map[1] + html + map[2];
            element.innerHTML = html;
            // Descend through wrappers to the right content
            var j = map[0]+1;
            while(j--) {
                element = element.lastChild;
            }
        }
    } else {
        element.innerHTML = html;
        element = element.lastChild;
    }
    return element;
}
```

原文出自于<a href="http://krasimirtsonev.com/blog/article/Revealing-the-magic-how-to-properly-convert-HTML-string-to-a-DOM-element" target="_blank">http://krasimirtsonev.com/blog/article/Revealing-the-magic-how-to-properly-convert-HTML-string-to-a-DOM-element</a>  
	
这篇文章是本人第一次翻译外文技术文章，翻译的不好 还请见谅！ 嘻嘻……
	
	
 
