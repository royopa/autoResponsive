/*! autoResponsive - v1.2 - 2013-07-23 8:57:45 PM
* Copyright (c) 2013 xudafeng; Licensed  */
KISSY.add("gallery/autoResponsive/1.2/plugin/hash",function(e){"use strict";function t(e){var t=this;t.prefix=e.prefix||"ks-"}var n="&";return e.augment(t,{init:function(t){var n=this;n.owner=t,e.log("hash init!"),n.hasHash()&&n.parse()},hasHash:function(){return location.hash?!0:!1},parse:function(){var e=this;e.getParam()},getParam:function(){var t=this;t.hash=location.hash.split(n),e.each(t.hash,function(e){t.getPriority(e),t.getFilter(e)})},getPriority:function(e){var t=this,n=t.prefix+"priority";-1!=e.indexOf(n)},getFilter:function(e){var t=this,n=t.prefix+"filter";-1!=e.indexOf(n)}}),t},{requires:["event"]});