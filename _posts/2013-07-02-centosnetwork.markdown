---
layout: post
title: "CentOS minimal 设置网络"
date: 2013-07-02 15:13
tags: linux
---
CentOS minimal 设置网络

安装CentOS6.4 minimal 默认是没有连接网络的。

方法：

1.
{% highlight javascript linenos %}
 vi /etc/sysconfig/network-script/ifcfg-eth0
{% endhighlight %}

<!-- more -->

2.编辑文件 如下内容

{% highlight javascript linenos %}
 ONBOOT="yes"  

 MM_Controlled="no"  

 BOOTPROTO="dhcp"  
{% endhighlight %}

3.重启网络
{% highlight javascript linenos %}
 service network restart
{% endhighlight %}