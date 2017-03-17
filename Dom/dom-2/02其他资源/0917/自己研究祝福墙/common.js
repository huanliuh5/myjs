/**
 * Created by Administrator on 2016/7/25.
 */
/*
* 
* 该函数通过id的值可以获取某个元素对象
* 
* */
function my$(id) {
    return document.getElementById(id);
}
/*
* 
* 该函数通过标签的名字获取多个元素对象
* 
* 
* */

function getInputs$(tagName) {
    return document.getElementsByTagName(tagName);
}



//获取innerText属性
/*
* 该函数获取某个元素的innerText属性值
* */
function getInnerText(element) {
//            if(element.textContent){//判断该浏览器中有没有这个属性
//                return element.textContent;
//            }else{//浏览器支持的是innerText
//                return element.innerText;
//            }
    return element.textContent?element.textContent:element.innerText;
}
//设置innerText属性---element表示的是元素,content表示的是设置内容
/*
* 该函数设置某个元素的innerText属性值
* */
function setInnerText(element,content) {
    if(element.textContent){//判断浏览器中是否有textContent属性
        element.textContent=content;
    }else{//判断浏览器中是否有innerText属性
        element.innerText=content;
    }

}


//能力检测,获取的一个父元素里面的第一个元素(标签)
function getFirstElementByParent(parent) {
    if(parent.firstElementChild){
        //如果为true则表示浏览器支持这个属性(firstElementChild),可以直接返回
        return parent.firstElementChild;
    }else{
        //该浏览器不支持这个属性
        var node=parent.firstChild;
        while(node&&node.nodeType!==1){
            node=node.nextSibling;
        }
        return node;
    }
}
//能力检测  获取的是一个父元素中最后的一个子元素
function getLastElementByParent(parent) {
    if(parent.lastElementChild){
        return parent.lastElementChild;
    }else {
        var node=parent.lastChild;
        while(node&&node.nodeType!==1){
            node=node.previousSibling;
        }
        return node;
    }
}