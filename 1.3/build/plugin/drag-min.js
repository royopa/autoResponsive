/*! autoResponsive - v1.3 - 2013-10-17 11:05:58 AM
* Copyright (c) 2013 xudafeng; Licensed  */
KISSY.add("gallery/autoResponsive/1.3/util",function(e){"use strict";var t={};return e.mix(t,{debounce:function(e,t,n,i){var r;return function(){function o(){i||e.apply(a,s),r=null}var a=n||this,s=arguments;r?clearTimeout(r):i&&e.apply(a,s),r=setTimeout(o,t||100)}},timedChunk:function(t,n,i,r){var o,a={},s=[],u=i.config,c=u.qpt||15;return a.start=function(){s=s.concat(e.makeArray(t));var u=function(){for(var e=+new Date;s.length>0&&50>new Date-e;){var l=s.splice(0,c);n.call(i,l)}return s.length>0?(o=setTimeout(u,25),void 0):(r&&r.call(i,t),a.stop(),a=null,void 0)};u()},a.stop=function(){o&&(clearTimeout(o),s=[])},a}}),t}),KISSY.add("gallery/autoResponsive/1.3/plugin/drag",function(e,t,n,i){"use strict";function r(e){var t=this;t.closeConstrain=e.closeConstrain||!1,t.selector=e.selector,t.handlers=e.handlers||[],t.threshold=e.threshold||300}var o=e.DOM,a=e.DD,s=a.DDM,u=a.DraggableDelegate,c=a.DroppableDelegate,l="ks-autoResponsive-dd-",f=l+"placeHolder",d=l+"dragging",h='<div class="'+f+'"></div>';return r.prototype={init:function(i){var r=this;r.owner=i,r.owner.changeCfg({animType:"fixedAnim"}),r.container=r.owner.userConfig.container,r.dragDelegate=new u({container:r.container,selector:r.selector,move:!0,plugins:[new t({constrain:r.container}),new n({node:r.container})],handlers:r.handlers}),r.dropDelegate=new c({container:r.container,selector:r.selector}),r._bindOperate(),e.log("drag init!")},changCfg:function(t){var n=this;e.each(t,function(e,t){n.dragDelegate.set(t,e)})},stop:function(){var e=this;e.dragDelegate.set("disabled",!0)},restore:function(){var e=this;e.dragDelegate.set("disabled",!1)},_bindOperate:function(){var e=this;s.on("dragstart",e._debounce(e._dragStartOperate)).on("dragend",e._debounce(e._dragEndOperate)).on("dropover",e._debounce(e._dropOverOperate))},_dragStartOperate:function(e){var t=this,n=e.drag,i=n.get("node");t.select=i[0],t.originPosition=t.select.autoResponsiveCoordinate,t._renderPlaceHolder(),o.addClass(t.select,d),t.owner.changeCfg({exclude:d})},_dragEndOperate:function(){var e=this;o.css(e.select,{left:o.css(e.placeHolder,"left"),top:o.css(e.placeHolder,"top")}),o.insertBefore(e.select,e.placeHolder),o.remove(e.placeHolder),o.removeClass(e.select,d)},_dropOverOperate:function(e){var t=this,n=e.drop,i=n.get("node");o.insertBefore(t.placeHolder,i),t.owner.adjust()},_renderPlaceHolder:function(){var e=this;e.placeHolder=o.create(h),o.css(e.placeHolder,{left:e.originPosition.x,top:e.originPosition.y,width:o.width(e.select),height:o.height(e.select)}),o.insertBefore(e.placeHolder,e.select)},_debounce:function(e){var t=this,n=t.threshold;return i.debounce(e,n,t,!0)}},r},{requires:["dd/plugin/constrain","dd/plugin/scroll","../util","dd","dom","event"]});