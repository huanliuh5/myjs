/**
 * Created by Administrator on 2016/9/29.
 */
function my$(id) {
    return document.getElementById(id);
}

//添加事件的兼容代码
function addEventListener(element,eventName,fn) {
    if(element.addEventListener){//浏览器支持这个方法
        element.addEventListener(eventName,fn,false);
    }else if(element.attachEvent){//浏览器支持这个方法
        element.attachEvent("on"+eventName,fn);
    }else{
        //浏览器都不支持上面的方式
        element["on"+eventName]=fn;
    }
}
//移除事件的兼容代码
function removeEventListener(element,eventName,fn) {
    if(element.removeEventListener){
        element.removeEventListener(eventName,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+eventName,fn);
    }else {
        element["on"+eventName]=null;
    }
}