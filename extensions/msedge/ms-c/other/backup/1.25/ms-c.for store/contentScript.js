
// if iAmMad is empty, then the two must be empty or 0.
/*examples
var iAmMad=[1,2]
var iAmMad_weight=[]
var iAmMad_req_n=1

var iAmMad=[1,2,3]
var iAmMad_weight=[0.1,0.5,0.4]
var iAmMad_req_n=2
iAmMad         [1,2]    [1,2]      [1,2]    [1]   [1]   [2,1,3]         [2,1,3]        any
iAmMad_weight  any      [0.1,0.9]  any      any   any   [0.1,0.4,0.5]   [0.1,0.4,0.5]  any
iAmMad_req_n   2        1          >2       1     >1    1               2              0
req            [1,2]    most 2     []       1     []    most 3          most [1,3]     []
* if iAmMad_req_n==2, then req may [3,3] or [1,1], etc.
  but the result won't appear both them two.
*/
var iAmMad=[];
var iAmMad_weight=[]  ;//to sum equals 1
var iAmMad_req_n=0;
var max_play_times=3;
const json_url='https://onaua.github.io/rannum/config/ini.json'
var proc_num="17";
var req;
const DEBUG=false;
let played_lddgo=0;
let played_runoob=0;
let played_online_randoms=0;
let played_stack=0;
//let max_play_times=3;
const today = new Date();
console.log("Succeed in loading pages...")

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // 在这里处理从远程脚本返回的数据
            
    printt(xhr.responseText);
    const jsonObject = JSON.parse(xhr.responseText);
    Object.defineProperty(globalThis, 'onclass', {
      value: jsonObject.onclass,
      writable: false, // 将常量设为不可写（即不可修改）
      configurable: false // 将常量设为不可配置（不可删除）
    });
    Object.defineProperty(globalThis, 'tasks', {
      value: jsonObject.tasks,
      writable: false, // 将常量设为不可写（即不可修改）
      configurable: false // 将常量设为不可配置（不可删除）
    });
  }
};
xhr.open('GET', json_url, false);
xhr.send();

for (const [k, v] of Object.entries(tasks)) {
  const dayD=[];
  for (const e_ of k.split('|')) {
    const sday_ = e_.split('.');
    dayD.push([[today.getFullYear(), today.getMonth(), today.getDate()], [today.getFullYear(), parseInt(sday_[0])-1, parseInt(sday_[1])]]);
  }

  if (in_Time(dayD, false)) {
    iAmMad = v.iAmMad;
    iAmMad_req_n = v.iAmMad_req_n;
    iAmMad_weight = v.iAmMad_weight;
    max_play_times=v.max_play_times;
  }
}
printt(iAmMad,iAmMad_weight,iAmMad_req_n,max_play_times)
if (iAmMad_req_n>iAmMad.length||iAmMad_req_n==0){
  if(iAmMad_req_n>iAmMad.length){
    printt("Error:iAmMad_req_n>iAmMad.length")
  }
  req=[];
  iAmMad=[];
  iAmMad_req_n=0;
  iAmMad_weight=[];
}else if(iAmMad.length===1){
  req=iAmMad[0];
  iAmMad_req_n=1;
}else if(iAmMad_req_n==iAmMad.length){
  req=iAmMad;
}else{
  if(iAmMad_weight||(!(iAmMad_req_n==1))){
    req=weightedRandomSampling(iAmMad,iAmMad_weight,iAmMad_req_n);
    if (iAmMad_req_n==1){
      req=req[0];
    }
  }else{
    req=choice(iAmMad);
  }
}
printt(req,played_lddgo)


function printt(...args) {
  if (DEBUG){
    return console.log(...args);
  }
  return args
}
function replaceList(l, src, dst) {
  return l.map(function(item) {
    return item === src ? dst : item;
  });
}
function toNoramlArray(b){
  b.push(' ');
  b.push('0');

  const newArray = [];
  const teArray = [];
  let entered = true;

  for (let i of b) {
    let num;
    try {
      num = parseFloat(i);
      if (isNaN(num)){throw Error}
    } catch (error) {
      entered = false;
    }

    if (!entered) {
      if (teArray.length) {
        newArray.push(teArray.join(""));
        teArray.length = 0;
      }
    }
    if (!isNaN(num)) {
        
        teArray.push(num.toString());
        entered = true;
      }
    
  }
  return newArray
}




function sleep(milliSeconds) {
  var startTime = new Date().getTime(); // get the current time
  while (new Date().getTime() < startTime + milliSeconds);
}
function in_Time(v, forTime = true) {
  if (v === "anytime") {
    return true;
  }
  let ifDo = [];
  if (forTime) {
    // Compare precise time
    const now = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
    for (const [d_s1, d_s2] of v) {
      const [d_i11, d_i12] = d_s1.split(':');
      const d1 = new Date(2023, 0, 1, parseInt(d_i11), parseInt(d_i12));
      const [d_i21, d_i22] = d_s2.split(':');
      const d2 = new Date(2023, 0, 1, parseInt(d_i21), parseInt(d_i22));
      const [d_n1, d_n2] = now.split(':');
      const no_s = new Date(2023, 0, 1, parseInt(d_n1), parseInt(d_n2));
      ifDo.push(d1 < no_s && d2 > no_s);
    }
  } else {
    // Compare only date
    for (const [d_s1, d_s2] of v) {
      var d1=new Date(...d_s1);
      var d2=new Date(...d_s2);
      ifDo.push(((!(d1<d2))&&(!(d1>d2))))
      
    }
  }
  return ifDo.some(Boolean);
}
function process_stack_over_flow(){
  // 获取包含随机数字的div元素
  defaultProcess()
  var randomNumbersDiv = document.getElementById("randomNumbers");
  // 获取随机数字字符串
  //if(!randomNumbersDiv===null){
  if(iAmMad&&(!played_stack>max_play_times)){
      var randomDigits = randomNumbersDiv.innerHTML;
      // 将随机数字字符串转换为数组
      var randomDigitsArray = randomDigits.split('');
      // 随机选择一个数字索引
      var randomIndex = Math.floor(Math.random() * randomDigitsArray.length);
      // 将选择的数字替换为13
      if(iAmMad_req_n===1){
      randomDigitsArray[randomIndex] = req;
      }else{
        randomDigitsArray[randomIndex] = choice(req);
      }// 将修改后的数组转换回字符串
      var updatedRandomDigits = randomDigitsArray.join('');
      // 将更新后的随机数字字符串赋值给div元素的innerHTML属性
      randomNumbersDiv.innerHTML = updatedRandomDigits;
      played_stack++
    
}


}

function process_runoob(){
  function setRan(shu,require){
      var numbers=toNoramlArray(shu.innerText.split(""))
      if(numbers.includes(require.toString())){
        return
      }
      //var text = shu.innerText;
      //var numbers = text.split(" ");
      //var updatedText = text.replace(choice(numbers),require);
      shu.innerText = replaceList(numbers,choice(numbers),require).join("  ");
      played_runoob++;
  }
  var shu = document.getElementById("shu");
  if (shu===null){
    defaultProcess();
    return;
  }
  if (shu.textContent.includes(proc_num)){
    if (shu.textContent.includes("13")&&shu.textContent.includes("3")){
      shu.textContent=shu.textContent.replace(proc_num,"3");
    }
    else if (shu.textContent.includes("13")||shu.textContent.includes("3")){
      if (shu.textContent.includes("13")){
        shu.textContent=shu.textContent.replace(proc_num,"3");
      }
      if (shu.textContent.includes("3")){
        shu.textContent=shu.textContent.replace(proc_num,"13");
      }
    }
    shu.textContent=shu.textContent.replace(proc_num,getRanForOne());
  }
  if(iAmMad&&(!(played_runoob>max_play_times))){
    //if (!shu.innerText.includes(req)){
      if (shu.innerText=="生成结果..."){
        return;
      }
      if(!(iAmMad_req_n==1)){
        for (var i_=0;i_<req.length;i_++){
          setRan(shu,req[i_]);
        }
      }
      else{
        /*if(iAmMad_req_n===1){
          var req_=req;
        }
        else{
          var req_=iAmMad[generateRandomNumbers(0,iAmMad.length-1,1)];
        }*/
        setRan(shu,req);
      }
    //}
  }
}

function process_lddgo(){
  function setRan(generateResult,_req){
      var text = generateResult.textContent;
      var numbers = toNoramlArray(text.split(""));
      if (numbers.includes(_req.toString())){
        return
      }
      //var temp_num=choice(numbers);
      //var temp=numbers[temp_num];
      //printt(temp,numbers,typeof(numbers),text,typeof(text))
      //printt(numbers,toNoramlArray(numbers))
      //printt(text,"\n",temp_num,"\n",numbers,"\n",numbers.includes(_req));
      //var updatedText = text.replace(temp_num,"13&nbsp;".replace("13",_req));
      generateResult.innerHTML = replaceList(numbers,choice(numbers),_req).join("&nbsp;&nbsp;&nbsp;&nbsp;");
      played_lddgo++;
  }
  var generateResult = document.getElementById("generateResult");
  if (generateResult===null){
    return;
  }
  if (generateResult.innerHTML.includes(proc_num)){
    
    if (generateResult.innerHTML.includes("13")&&generateResult.innerHTML.includes("3")){
      generateResult.innerHTML=generateResult.innerHTML.replace(proc_num,"3");
    }
    else if (generateResult.innerHTML.includes("13")||generateResult.innerHTML.includes("3")){
      if (generateResult.innerHTML.includes("13")){
        generateResult.innerHTML=generateResult.innerHTML.replace(proc_num,"3");
      }
      if (generateResult.innerHTML.includes("3")){
        generateResult.innerHTML=generateResult.innerHTML.replace(proc_num,"13");
      }
    }
    generateResult.innerHTML=generateResult.innerHTML.replace(proc_num,getRanForOne());
  }
  if(!(played_lddgo>max_play_times)){
    //printt(!(played_lddgo>max_play_times),played_lddgo)
  }
  if(iAmMad&&(!(played_lddgo>max_play_times))){
    //printt(req,iAmMad_req_n)
    if (generateResult.innerText){
      if(!(iAmMad_req_n==1)){
        for (var i_=0;i_<req.length;i_++){
          setRan(generateResult,req[i_])
        }
      }
      else{
        setRan(generateResult,req)
      }
    }
  }

  
}
function process_online_randoms(){
  var ranNumbers = document.getElementsByClassName("random-item");
  if (ranNumbers.length===0){
    defaultProcess();
    return;
  }
  for (var i = 0; i < ranNumbers.length; i++) {
    var ranNumber= ranNumbers[i];

    if (ranNumber.innerHTML.includes(proc_num)){
      ranNumber.innerHTML=ranNumber.innerHTML.replace(proc_num,getRanForOne())
    }
  }
  if(iAmMad){//Here's a rollable page.
    return
    if(ranNumbers.length==1&&ranNumbers[0].innerText.length==3){
    }
    var i=generateRandomNumbers(0,ranNumbers.length-1,1)
      printt(i)
    if (!ranNumbers[i].innerText.includes(req)){
      ranNumbers[i].innerHTML = req;
    }
  }
}
function processDivContent() {
  var divElements = document.getElementsByTagName("div");

  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].innerHTML;
    if (divContent.includes(proc_num)) {
      divElements[i].innerHTML = divContent.replace(proc_num, getRanForOne());
    }
  }
}
function processh1Content() {
  var divElements = document.getElementsByTagName("h1");

  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].textContent;
    if (divContent.includes(proc_num)) {
      divElements[i].textContent = divContent.replace(proc_num, getRanForOne());
    }
  }
}
function processbContent() {
  var divElements = document.getElementsByTagName("b");

  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].textContent;
    if (divContent.includes(proc_num)) {
      divElements[i].textContent = divContent.replace(proc_num, getRanForOne());
    }
  }
}
function defaultProcess(){
  processh1Content()
  processbContent()
  processDivContent()
    
}


function process() {
  
  if (!in_Time(onclass)){
    return;
  }
  var url_l;
  url_l = window.location.href;
  if (url_l==="https://onaua.github.io/rannum/"||
  url_l.includes(".bing.")||
  url_l.includes(".baidu.")||
  url_l.includes(".douyin.")||
  url_l.startsWith("https://www.bilibili.com/")){
    return;
  }
  if (url_l === "https://www.imathtool.com/jisuanqi/suijishu/") {
    window.location.href = "https://www.imathtool.com/jisuanqi/zhongliang/";
  }
  if (url_l === "https://uutool.cn/random/") {
    window.location.href = "https://uutool.cn/";
  }
  if (url_l==="https://www.randoms-online.com/"){
    window.location.href = "https://www.randoms-online.com/rannummm";
  }
  if (url_l==="https://c.runoob.com/front-end/6680/"){
    process_runoob();
  }
  else if (url_l==="https://www.lddgo.net/string/randomnumber"){
    process_lddgo();
  }
  else if (url_l==="https://online-random.com/cn/"){
    process_online_randoms();
  }
  else if(url_l==="https://stackoverflow.org.cn/random/"){
    process_stack_over_flow();
  }
  else if (document.title.includes("随机")){
    defaultProcess();
    
  }
}


const observer = new MutationObserver(mutationsList => {
  mutationsList.forEach(mutation => {
    if (mutation.type === "childList") {
      process();
    }
  });
});
observer.observe(document, { childList: true, subtree: true });

window.addEventListener("load", function() {
  //process();
  setInterval(process,10);
});
//process();
//setInterval(editReq,1000)
setInterval(process,10);
