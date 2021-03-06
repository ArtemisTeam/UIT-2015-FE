 CSS 概述（复制于W3C）
 ---
* CSS 指层叠样式表 (Cascading Style Sheets)
* 样式定义如何显示 HTML 元素
* 样式通常存储在样式表中
* 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
* 外部样式表可以极大提高工作效率
* 外部样式表通常存储在 CSS 文件中
* 多个样式定义可层叠为一

 最关键点
 ---
* 选择器和属性，因为真的很重要所以需要再强调一遍。
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。每条声明由一个属性和一个值组成。属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

 属性优先级
 ---
内联样式（写在HTML当前标签内的style） \> 内部样式（写在HTML `<head>` 标签内的 `<style>` 标签内） \> 外部样式（也就是 `<link>` 标签中引用的样式表文件） \> 浏览器缺省值
外部样式中，如出现多个选择器选择了相同的属性，或同一段style声明里出现同名属性，后出现的优先级高

 大小写问题
 ---
 选择器选择HTML中id或class时大小写敏感，其他情况下，如CSS的属性与值，大小写不敏感。

 示例格式（仅仅是个人习惯，同时建议放在CSS文件头部的东西）
 ---
 选择器左对齐，内部的属性们左缩进4字符（1Tab），右大括号左对齐
\* {
	margin: 0;
	padding: 0;
}
 
  参考手册
  ---
  属性查询： http://w3school.com.cn/cssref/index.asp
  选择器查询： http://w3school.com.cn/cssref/css_selectors.asp
  常见问题基本都可以通过查手册来解决。


 常见属性简介
 ---

 ### 写在前面

 #### 关于`inherit`：
 几乎所有属性都可以选择的值，这个值的作用为“规定应该从父元素继承该属性的值”，简单来说和外层元素保持一致，下文不过多提及。

 #### 关于数值单位：
 常见的单位有:
 px，像素，相对于显示器屏幕一像素点而言，相对大小；
 em，相对于一个标准字符的尺寸而言，相对大小；
 pt，point，大小为1/72英寸，相对于自然界，绝对大小；
 %，百分比，相对于父元素的同名属性取值。
 * 几乎所有需要赋值的地方都可以赋负值，但请注意负值可能会出现自相矛盾的人脑不太好理解情况。
 * 接下来范例里的单位，出于方便使用px
 * 使用百分比值和em值是一种好习惯
 * 通常情况下，浏览器字体大小默认值为12px/9pt，也是1em
 * 浏览器通常有不可写的字符最小值概念，这个值会根据屏幕情况等调整（比如我的1280X800屏幕，字体小于0.8em的时候就不会再变小了），所以请不要把字体设置的过小

  #### 关于颜色：
 * 颜色名： 由浏览器预定义的颜色名，所有浏览器都支持，如white是白色，black是黑色等，详情可查看http://w3school.com.cn/cssref/css_colornames.asp。
 * 十六进制颜色： #RRGGBB 对应三组2位16进制表示的RGB颜色，最为常见，所有浏览器都支持。如果颜色的值为#112233，也可简写成#123。
 * RGB颜色： rgb(R,G,B) 对应3个0~255间的10进制数字，所有浏览器都支持。
 * RGBA颜色： rgb(R,G,B,a) 较新的浏览器支持，相比RGB颜色多一个alpha通道，用于控制透明度，数值从0.0（完全透明）~1.0（完全不透明）。
 * HSL颜色： hsl(hue, saturation, lightness)，Hue 是色盘上的度数（从 0 到 360） - 0 (或 360) 是红色，120 是绿色，240 是蓝色。Saturation 是百分比值；0% 意味着灰色，而 100% 是全彩。Lightness 同样是百分比值；0% 是黑色，100% 是白色，较新的浏览器支持。
 * HSLA颜色： 用法上同RGBA。

 ### `display`	

 #### 定义：
	* display 属性规定元素应该生成的框的类型。
 #### 个人解释：
    * 同display的单词含义一样，这个属性决定的是元素的显示方式。
 #### 常见值：
	* `inline` 默认。此元素会被显示为内联元素，元素前后没有换行符。
	* `block` 此元素将显示为块级元素，此元素前后会带有换行符。
	* `none` 此元素不会被显示。

	display最常见值为以上三个，其它的如有兴趣请自行查阅手册。
 #### 特别补充：
	关于display:none与visibility:hidden的异同，两者都是令元素不可见的方法，但display:none下元素不再拥有布局位置（长宽，边距等特性），visibility:hidden则保留，简单点理解，display:none是凭空消失，而visibility:hidden是墙上打个洞。

 ### `margin（padding）`

 #### 定义：
    * margin 简写属性在一个声明中设置所有外边距属性。
	* padding 简写属性在一个声明中设置所有内边距属性。
	* 这两个属性都可以有 1 到 4 个值。
 #### 常见值：
    * 1px 上下左右的边距都为1px
    * 1px 2px 上下的边距为1px，左右的边距为2px
    * 1px 2px 3px 上方边距为1px，左右边距为2px，下方边距为3px
    * 1px 2px 3px 4px 上方边距为1px，右方边距为2px，下方边距为3px，左方边距为4px（上右下左）
 #### 特别补充：
 	margin和padding的值定义上是完全一致的，所以放在一起讲。
 	因为上右下左这个顺序实在反人类，所以我们还可以用margin-top,margin-right-margin-bottom,maigin-left来分别指定边距（padding同理）
    当父元素宽度或高度值存在时，auto值可以使当前元素位置相对父元素居中。
 	不论margin还是padding，结果都是当前元素面积变大了（非负值情况下，个人并不建议边距上使用负值，因为position属性中你可以随便用）
    
 ### position  

 #### 定义：
    * position 属性规定元素的定位类型。
 #### 常见值：
    * static 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
    * absolute 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
    * fixed 生成绝对定位的元素，相对于浏览器窗口进行定位。
    * relative 	生成相对定位的元素，相对于其正常位置进行定位。
    
    * 元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
 #### 特别补充：
    * 定位中最常用的大概是relative，特别是流式布局之类，虽然默认表现上它和static元素一样，但这东西可以用上下左右来布局。
    * absolute定位相对于父元素左上角计算，且父元素属性值不能是static，否则再上一层，直到body为止。
    * fixed定位的元素不随浏览器页面而变化，随浏览器窗口变化，如浏览器窗口最大化等。
    * 总之定位算是CSS的核心组合拳。
