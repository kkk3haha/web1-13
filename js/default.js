function getFileName(){
  //ホスト以下のパスを取得し、それをsplit('/')で「/」区切りで配列に入れ、pop()で配列の最後の値を取得
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt =document.query.Selector('option[value="other.html"]');
}else{
  opt=document.query.Selector('option[value="index.html"]');
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

var thumbs = document.querySelectorAll('.thumb');
for(idx in thumbs){
  thumbs[ids].onclick = function(){
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

var cloack=function(){
  var now =new Date();
  var counter_cloack=separate_time_cloack(now);
  document.getElementById('cloack').textContent=
    counter_cloack[5] + '年' +
    counter_cloack[4] + '月' +
    counter_cloack[3] + '日' +
    counter_cloack[2] + '時' +
    counter_cloack[1] + '分' +
    counter_cloack[0] + '秒'　;
  refresh_cl();
}

var update = function(){
var now = new Date();
var target = Date(2020,7,24,0,0,0,0);
var diff = target.getTime() - now.getTime();
var counter = separate_time(diff);
document.getEleentById('countdown').textContent =
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
  setTimeout(cloack,1000);
}
update();
cloack();
