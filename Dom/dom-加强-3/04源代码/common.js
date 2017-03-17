/**
 * Created by Administrator on 2016/9/28.
 */
var eventTools={
    //获取的事件参数(事件对象)
    getEvt:function (e) {
        return e||window.event;
    },
    //根据事件参数获取可视区域的横坐标
    getClientX:function (e) {
        return this.getEvt(e).clientX;
    },
    //根据事件参数获取可视区域的纵坐标
    getClientY:function (e) {
        return this.getEvt(e).clientY;
    },
    //根据事件参数获取可视区域+卷曲出去的横坐标
    getPageX:function (e) {
        return this.getEvt(e).pageX?this.getEvt(e).pageX: this.getClientX(e)+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0);
    },
    getPageY:function (e) {
        return this.getEvt(e).pageY?this.getEvt(e).pageY: this.getClientY(e)+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0);
    }
};
