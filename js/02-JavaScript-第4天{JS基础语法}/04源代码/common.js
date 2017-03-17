/*
* 
* 作者:帅小杨
* 项目时间:2016年9月13日
* 版本:0.1
* 最后修改日期:2016年9月13日
* 
* 
* */

//掌握的内容===这个内容会陪伴着你一直到你的职业生涯结束
//2016年-09月-13日 16:55:23
/*
* getDate:功能是获取指定日期的时间
* 参数:dt是一个时间对象
* 返回值:字符串类型的指定格式的时间
* 
* 
* */

function getDate(dt) {//dt是一个时间对象
    var year=dt.getFullYear();//获取年
    var month=dt.getMonth()+1;//获取月
    var day=dt.getDate();//获取日
    var hours=dt.getHours();//获取小时
    var minutes=dt.getMinutes();//获取分
    var seconds=dt.getSeconds();//获取秒
    //做小于10的处理
    month=month<10?"0"+month:month;
    day=day<10?"0"+day:day;
    hours=hours<10?"0"+hours:hours;
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;
    return year+"年-"+month+"月-"+day+"日 "+hours+":"+minutes+":"+seconds;
}