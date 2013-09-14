/*! autoResponsive - v1.3 - 2013-09-14 7:28:56 PM
* Copyright (c) 2013 xudafeng; Licensed  */
KISSY.add("gallery/autoResponsive/1.3/plugin/loader",function(e){"use strict";function t(e){return this instanceof t?(this._makeCfg(e),void 0):new t(e)}function n(t,n,i,r){var o,a={},s=[],u=i.config,l=u.qpt||15;return a.start=function(){s=s.concat(e.makeArray(t));var u=function(){for(var e=+new Date;s.length>0&&50>new Date-e;){var c=s.splice(0,l);n.call(i,c)}return s.length>0?(o=setTimeout(u,25),void 0):(r&&r.call(i,t),a.stop(),a=null,void 0)};u()},a.stop=function(){o&&(clearTimeout(o),s=[])},a}function i(e,t,n,i){var r;return function(){function o(){i||e.apply(a,s),r=null}var a=n||this,s=arguments;r?clearTimeout(r):i&&e.apply(a,s),r=setTimeout(o,t||100)}}var r=e.DOM,o=e.Event,a=window,s=50;return e.augment(t,e.EventTarget,{init:function(e){this.owner=e,this.__bindMethods(),this._reset()},_reset:function(){var e=this,t=e.config,n=t.mod;e.__started=e.__destroyed=e.__stopped=0,"manual"===n||(e.__onScroll(),e.start())},_makeCfg:function(t){t={load:"function"==typeof t.load?t.load:function(){e.log("AutoResponsive.Loader::_makeCfg: the load function in user's config is undefined!","warn")},diff:t.diff||0,mod:"manual"==t.mod?"manual":"auto",qpt:15},this.config=t},changeCfg:function(t){this.stop(),this._makeCfg(e.merge(this.config,t)),this._reset()},__doScroll:function(){var t=this,n=t.owner,i=t.config;if("up"!==t.__scrollDirection&&(e.log("AutoResponsive.Loader::__doScroll..."),!t.__loading)){if(n.isAdjusting())return t.__onScroll(),void 0;var o=e.get(n.get("container"));if(o.offsetWidth){var s=r.offset(o).top,u=i.diff,l=n.getMinColHeight(),c=r.scrollTop(a),f=r.height(a);u+c+f>=s+l&&t.load()}}},load:function(){function t(e,t){i.__addItems(e,function(){t&&t.call(i),i.__doScroll()}),i.__loading=0}function n(){i.stop()}var i=this,r=i.config,o=r.load;return i.__stopped?(e.log("AutoResponsive.Loader::load: this loader has stopped, please to resume!","warn"),void 0):(e.log("AutoResponsive.Loader::loading..."),i.__loading=1,o&&o(t,n),void 0)},isLoading:function(){return this.__loading},isStarted:function(){return this.__started},isStopped:function(){return this.__stopped},isDestroyed:function(){return this.__destroyed},__addItems:function(e,t){var i=this;n(e,i.__appendItems,i,function(){t&&t.call(i),i.fire("autoresponsive.loader.complete",{items:e})}).start()},__appendItems:function(t){var n=this,i=n.owner;t=e.makeArray(t),i.append(t)},__bindMethods:function(){var e=this,t=e.owner,n={min:0,max:0};t.on("afterLocate",function(e){n=e.autoResponsive.curMinMaxColHeight}),t.getMaxColHeight=function(){return n.max},t.getMinColHeight=function(){return n.min},e.__onScroll=i(e.__doScroll,s,e,!0),e.__onMouseWheel=function(t){e.__scrollDirection=t.deltaY>0?"up":"down"}},start:function(){o.on(a,"mousewheel",this.__onMouseWheel),this.resume()},stop:function(){this.pause(),o.detach(a,"scroll",this.__onMouseWheel),this.__stopped=1},pause:function(){this.__destroyed||o.detach(a,"scroll",this.__onScroll)},resume:function(){var e=this;e.__destroyed||(o.on(a,"scroll",e.__onScroll),e.__started=1,e.__stopped=0)},destroy:function(){this.__destroyed=1}}),t},{requires:["dom","event"]});