综述
============

autoResponsive，是基于kissy 1.3.0或者更高版本的自适应组件。

* 版本：1.0
* 作者：达峰


#### autoResponsive的特点


* 支持条件排序、随机排序，过滤排序
* 支持css3特效
* 兼容kissy瀑布流组件
* 支持自定义配置

### [demo汇总](http://xudafeng.github.io/autoResponsive/cat/demos/)

## 快速上手

kissy1.2需要配置gallery的包：

```javascript
KISSY.config({
    packages:[
        {
            name:"gallery",
            path:"http://a.tbcdn.cn/s/kissy/",
            charset:"utf-8"
        }
    ]
});
```

kissy1.3无需配置配置。

### init

```javascript
    KISSY.use('gallery/autoResponsive/1.0/index', function (S, AutoResponsive) {
        var AutoResponsive = new AutoResponsive({
            container:'.J_container',
            selector:'div',
            colMargin:{
                x :10,
                y:10
            }
        });
    })
```
**提醒**：use()的回调，第一个参数是KISSY，第二个参数才是组件。

### 组件依赖的html结构

```xml
    <div class="ks-autoResponsive-container J_container">
        ……
    </div>
```

组件的容器请设置为relative

### 2.配置项

## 组件事件说明

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">事件名</th>
        <th>描述</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>resize </td>
        <td>浏览器resize时添加动作</td>
    </tr>
    <tr>
        <td>beforeSort </td>
        <td>排序前触发</td>
    </tr>
    <tr>
        <td>afterSort </td>
        <td>排序后触发</td>
    </tr>
    <tr>
        <td>beforeElemSort </td>
        <td>单元素排序前触发</td>
    </tr>
    <tr>
        <td>afterElemSort  </td>
        <td>单元素排序后触发</td>
    </tr>
    </tbody>
</table>
```javascript
    KISSY.use('gallery/autoResponsive/1.0/index', function (S, AutoResponsive) {
        var AutoResponsive = new AutoResponsive({
            container:'.J_container',
            selector:'div',
            colMargin:{
                x :10,
                y:10
            }
        });
        var getRandomColor = function(){
            return (function(m,s,c){
                return (c ? arguments.callee(m,s,c-1) : '#') +
                    s[m.floor(m.random() * 16)]
            })(Math,'0123456789abcdef',5)
        };
        AutoResponsive.on('resize',function(d){
            D.css(S.get('body'),{
             background:getRandomColor()
            })
        })
    })
```

####常用参数：*****

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">参数名</th>
        <th style="width: 50px;">类型</th>
        <th style="width: 130px;">默认值</th>
        <th style="width: 200px;">读写权限</th>
        <th>描述</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>container</td>
        <td>String</td>
        <td>''</td>
        <td>r/w</td>
        <td>外层容器</td>
    </tr>
    <tr>
        <td>selector</td>
        <td>String</td>
        <td>''</td>
        <td>r/w</td>
        <td>生效选择器
        </td>
    </tr>
    <tr>
        <td>filter</td>
        <td>String</td>
        <td>''</td>
        <td>r/w</td>
        <td>过滤选择器
        </td>
    </tr>
    <tr>
        <td>priority</td>
        <td>String</td>
        <td>''</td>
        <td>r/w</td>
        <td>优先排序选择器</td>
    </tr>
    <tr>
        <td>colWidth</td>
        <td>Number</td>
        <td>10</td>
        <td>r/w</td>
        <td>最小栅格单元设置<code>px</code></td>
    </tr>

    <tr>
        <td>colMargin</td>
        <td>Object</td>
        <td><code>{x:0,y:0}</code></td>
        <td>r/w</td>
        <td>单元格边距设置</td>
    </tr>
    <tr>
        <td>animate</td>
        <td>Boolean</td>
        <td>"on"</td>
        <td>r/w</td>
        <td>动画效果开关</td>
    </tr>
    <tr>
        <td>duration</td>
        <td>Number</td>
        <td>1</td>
        <td>r/w</td>
        <td>动画缓动时间</td>
    </tr>
    <tr>
        <td>easing</td>
        <td>String</td>
        <td>"easeNone"</td>
        <td>r/w</td>
        <td>动画缓动算子</td>
    </tr>
    <tr>
        <td>direction</td>
        <td>String</td>
        <td>"left"</td>
        <td>r/w</td>
        <td>排序方向,可以选择<code>right</code></td>
    </tr>
    <tr>
        <td>random</td>
        <td>Boolean</td>
        <td>"off"</td>
        <td>r/w</td>
        <td>随机顺序开关</td>
    </tr>
    <tr>
        <td>sort</td>
        <td>String</td>
        <td>""</td>
        <td>r/w</td>
        <td>排序优先算法</td>
    </tr>
    <tr>
        <td>drag</td>
        <td>Boolean</td>
        <td>"off"</td>
        <td>r/w</td>
        <td>拖拽功能开关</td>
    </tr>
    <tr>
        <td>autoHeight</td>
        <td>Boolean</td>
        <td>"on"</td>
        <td>r/w</td>
        <td>容器高度自适应开关</td>
    </tr>
    <tr>
        <td>resize</td>
        <td>Boolean</td>
        <td>"on"</td>
        <td>r</td>
        <td>浏览器resize适应开关</td>
    </tr>
    <tr>
        <td>hash</td>
        <td>Boolean</td>
        <td>"on"</td>
        <td>r/w</td>
        <td>hash回溯开关</td>
    </tr>
    </tbody>
</table>

##常用方法说明

####adjust ()：重新调整排序

```javascript
//重新调整排序
 autoResponsive.adjust();
```
####priority ()：重新调整排序

```javascript
//优先排序
 autoResponsive.priority();
```
####filter ()：过滤排序

```javascript
//过滤排序
 autoResponsive.filter();
```
####margin ()：边距设置

```javascript
//边距设置
 autoResponsive.margin({ x:10, y:20 });
```
####random ()：随机排序

```javascript
//随机排序
 autoResponsive.random();
```
####option ()：自定义配置

```javascript
//自定义配置
 autoResponsive.option();
```
####append ()：append节点

```javascript
//append节点
 autoResponsive.append();
```
####prepend ()：prepend节点

```javascript
//prepend节点
 autoResponsive.prepend();
```
##插件说明

###effect：效果增强

####hash：hash回溯定位

##Q&A