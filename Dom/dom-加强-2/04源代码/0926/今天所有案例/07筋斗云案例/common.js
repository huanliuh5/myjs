//根据id获取对应的元素
function my$(id) {
    return document.getElementById(id);
}
/*
* element----要移动的元素
* target----移动的目标
* 
* */
function animate(element,target) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        //获取当前的位置
        var current=element.offsetLeft;
        //每次移动多少步
        var step=(target-current)/10;//(目标-当前)/10
        step=step>0?Math.ceil(step):Math.floor(step);
        current=current+step;
        element.style.left=current+"px";
        if(current==target){
            clearInterval(element.timeId);
        }
        console.log("target:"+target+"current:"+current+"step:"+step);
    },10);
}
