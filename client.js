'use strict'

navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();



var sender = document.getElementById('sender');

var f_div = document.getElementById('m_message');
var s_div = document.getElementById('r_message');

var sellec = document.getElementById('sellec');
var datas = document.createElement("pre");

 sender.onclick = function (e) {

  var f_name = document.getElementsByClassName('f_name')[0].value;
  var s_name = document.getElementsByClassName('s_name')[0].value;
  var datas = document.createElement("pre");

  datas.textContent = "Добрый день " + f_name + " " + s_name + "\n" + "Версия вашего браузера: " +  navigator.sayswho;

  datas.id = 'asd'

  s_div.insertBefore(datas, sellec);

  f_div.style.display = 'block';

  

  
}; 

sellec.onclick = function() {
  s_div.removeChild(document.getElementById('asd'));

  f_div.style.display = 'none';
}