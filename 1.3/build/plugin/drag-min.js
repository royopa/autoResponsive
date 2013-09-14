/*! autoResponsive - v1.3 - 2013-09-14 7:28:56 PM
* Copyright (c) 2013 xudafeng; Licensed  */
KISSY.add("gallery/autoResponsive/1.3/plugin/drag",function(e,t,n){"use strict";function i(e){var t=this;t.closeConstrain=e.closeConstrain||!1,t.selector=e.selector,t.handlers=e.handlers||[],t.threshold=e.threshold||300}var r=e.DOM,o=e.DD,a=o.DDM,s=o.DraggableDelegate,u=o.DroppableDelegate,l="ks-autoResponsive-dd-",c=l+"placeHolder",f=l+"dragging",d='<div class="'+c+'"></div>';return i.prototype={init:function(i){var r=this;r.owner=i,r.owner.changeCfg({animType:"fixedAnim"}),r.container=r.owner.userConfig.container,r.dragDelegate=new s({container:r.container,selector:r.selector,move:!0,plugins:[new t({constrain:r.container}),new n({node:r.container})],handlers:r.handlers}),r.dropDelegate=new u({container:r.container,selector:r.selector}),r._bindOperate(),e.log("drag init!")},changCfg:function(t){var n=this;e.each(t,function(e,t){n.dragDelegate.set(t,e)})},stop:function(){var e=this;e.dragDelegate.set("disabled",!0)},restore:function(){var e=this;e.dragDelegate.set("disabled",!1)},_bindOperate:function(){var e=this;a.on("dragstart",e._debounce(e._dragStartOperate)).on("dragend",e._debounce(e._dragEndOperate)).on("dropover",e._debounce(e._dropOverOperate))},_dragStartOperate:function(e){var t=this,n=e.drag,i=n.get("node");t.select=i[0],t.originPosition=t.select.autoResponsiveCoordinate,t._renderPlaceHolder(),r.addClass(t.select,f),t.owner.changeCfg({exclude:f})},_dragEndOperate:function(){var e=this;r.css(e.select,{left:r.css(e.placeHolder,"left"),top:r.css(e.placeHolder,"top")}),r.insertBefore(e.select,e.placeHolder),r.remove(e.placeHolder),r.removeClass(e.select,f)},_dropOverOperate:function(e){var t=this,n=e.drop,i=n.get("node");r.insertBefore(t.placeHolder,i),t.owner.adjust()},_renderPlaceHolder:function(){var e=this;e.placeHolder=r.create(d),r.css(e.placeHolder,{left:e.originPosition.x,top:e.originPosition.y,width:r.width(e.select),height:r.height(e.select)}),r.insertBefore(e.placeHolder,e.select)},_debounce:function(e){function t(e,t,n,i){var r;return function(){function o(){i||e.apply(a,s),r=null}var a=n||this,s=arguments;r?clearTimeout(r):i&&e.apply(a,s),r=setTimeout(o,t||100)}}var n=this,i=n.threshold;return t(e,i,n,!0)}},i},{requires:["dd/plugin/constrain","dd/plugin/scroll","dd","dom","event"]});