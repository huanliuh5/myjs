/**
 * Created by HUCC on 2016/6/17.
 */
//原型
$.fn.changeRed = function () {
    //this：jquery对象
    this.css("backgroundColor", "red");
    return this;
};