# Demos-of-JavaScript-DOM
Demos of &lt;Web Design with JavaScript and the Document Object Model>

###ImageGallery
Show the bigger picture of the images above after clicking them<br />
Prevent the default behaviour of &lt;a> (Jump to the new page)

###Domsters
A simple website of a virtual band, combining ajax, javascript and web server<br />
Use Javascript DOM to create elements, and make sure that the website can be progressive enhancement and graceful degradation

#### 网页是由以下三层信息构成的共同体：
<ul>
<li>结构层（html）</li>
<li>表示层（css）</li>
<li>行为层（js）</li>
</ul>

#### html文件组织
<ul>
<li>使用语义化、结构良好的标记来表现核心内容</li>
<li>再逐步加强这些内容</li>
</ul>

#### css文件组织
<ul>
<li>layout.css - 与整体布局有关的样式（包括内边距）</li>
<li>color.css - 颜色样式表</li>
<li>typography.css - 与版式有关的样式（包括外边距）</li>
<li>basic.css - 在html中被引用， 内部引用上面三个样式表（添加或删除样式表在这里操作）</li>
</ul>

#### js文件组织
<ul>
<li>在支持js的浏览器中使用js DOM创建元素来支持更多功能，而不支持的浏览器中则不显示这些元素，只显示核心内容，做到渐进增强、平稳退化（应尽量减少使用js DOM，会影响脚本性能）</li>
<li>在执行自定义方法前检测浏览器是否支持该方法中所用到的所有js DOM方法</li>
</ul>
