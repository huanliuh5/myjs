//该函数的作用通过id返回对应的标签对象
//返回值是对象
//参数是id的值
function my$(id) {
    return document.getElementById(id);
}

//获取innerText或者是获取textContent
function getInnerTxt(element) {//element表示的标签
    return element.innerText?element.innerText:element.textContent;
}
//设置innerText或者是设置textContent
function setInnerText(element,value) {
    if(element.innerText){
        element.innerText=value;
    }else{
        element.textContent=value;
    }
}
