function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

/*将占位符图片和图片描述的元素添加到文档里面*/
function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;     //测试函数中用到的DOM方法是否可用

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");               //创建占位符图片，并设置属性

    var description = document.createElement("p");
    description.setAttribute("id","description");                     //创建图片描述的元素p，并设置属性
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);                                //创建文本节点并添加到p元素
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);                                 //将占位符图片添加到四张小图片的ul后面
    insertAfter(description,placeholder);                             //将图片描述添加到占位符图片后面
}

/*点击链接行为*/
function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);                                   //返回调用结果，this指links[i]，即获取的4个a标签
        }
        links[i].onkeypress = links[i].onclick;                      //键盘行为同鼠标行为处理方法一致
    }
}

/*将占位符图片的属性src设定为图片路径，并禁止a标签的默认行为*/
function showPic(whichpic) {
    if (!document.getElementById("imagegallery")) return false;
    if (!document.getElementById("description")) return false;

    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if (whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    }
    else {
        var text = "";        //也可以用三元运算符改写
    }                         //var text = （whichpic.getAttribute("title")? whichpic.getAttribute("title"): "");

    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;           //阻止a标签点击后的默认跳转
}

/*调用顺序*/
addLoadEvent(preparePlaceholder());
addLoadEvent(prepareGallery());