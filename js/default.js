function getFileName(){
  //ホスト以下のパスを取得し、それをsplit('/')で「/」区切りで配列に入れ、pop()で配列の最後の値を取得
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt =document.querySelector('option[value="other.html"]');
}else{
  opt=document.querySelector('option[value="index.html"]');
}
opt.selected=true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}

var last_date = getCookie('lastDate');
if(last_date){
  document.getElementById('cookie').textContent = '前回訪れた時間:' + last_date;
}else{
  document.getElementById('cookie').textContent = '初めまして！';
}

var current_time = new Date();
setCookie('lastDate',current_time.toString(),7);

document.getElementById('remove_cookie').onsubmit = function(){
  setCookie('lastDate',"",0);
}

//クッキーの保存（クッキー名、クッキーの値、クッキーの有効日数）
function setCookie(c_name,value,expiredays){
  //有効期限の日付
  var extime =new Date().getTime();
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = cltime.toUTCString();
  //クッキーに保存する文字列を生成
  var s="";
  s+= c_name + "="+escape(value); //値はエンコードしておく
  s += "; path=" +location.pathname;
  if(expiredays){
    s += "; expiredays=" + exdate+";";
  }else{
    s+=";";
  }
  document.cookie=s;
}

function getCookie(c_name){
  var st="";
  var ed="";
  if(0<document.cookie.length){
    st=document.cookie.indexOf(c_name +"=");
    if(st!=-1){
      st=st+c_name/length+1;
      ed=document.cookie.indexOf(";",st);
      if(ed==-1) ed=document.cookie.length;
      //値をデコードして返す
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}




var thumbs = document.querySelectorAll('.thumb');
for(idx in thumbs){
  thumbs[idx].onclick = function(){
    cosument.getElementById("bigimg").src = 'img/' + this.dataset.image + 'jpg';
  }
}



var separate_time = function(time){
  var sec = Math.floor((time/1000)%60);
  var min = Math.floor((time/1000/60)%60);
  var hours = Math.floor((time/1000/60/60)%24);
  var days = Math.floor(time/1000/60/60/24);
  return [sec,min,hours,days];
}

var separate_time_cloack=function(time){
  var sec =time.getSeconds();
  var min =time.getMinutes();
  var hours=time.getHours();
  var days=time.getDate();
  var month=time.getMonth();
  var year=time.getFullYear();
  return [sec,min,hours,days,month,year];
}

var clock=function(){
  var now =new Date();
  var counter_clock=separate_time_cloack(now);
  document.getElementById('clock').textContent =
    '現在時刻'
    counter_clock[5] + '年' +
    counter_clock[4] + '月' +
    counter_clock[3] + '日' +
    counter_clock[2] + '時' +
    counter_clock[1] + '分' +
    counter_clock[0] + '秒'　;
  refresh_cl();
}

var update = function(){
  var now = new Date();
  var target = new Date(2020,7,24,0,0,0,0);
  var diff = target.getTime() - now.getTime();
  var counter = separate_time(diff);
  document.getElementById('countdown').textContent =
   '東京オリンピックまであと　' +
    counter[3] + '日' +
    counter[2] + '時間' +
    counter[1] + '分' +
    counter[0] + '秒' ;
  refresh_up();
}

var refresh_up = function(){
  setTimeout(update,1000);
}

var refresh_cl = function(){
  setTimeout(clock,1000);
}
update();
clock();
