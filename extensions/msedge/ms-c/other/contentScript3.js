var timer;

const onclass = [
  ["07:18", "07:50"],
  ["07:58", "08:45"],
  ["08:53", "09:40"],
  ["10:03", "10:50"],
  ["11:03", "11:50"],
  ["14:08", "14:55"],
  ["15:08", "15:55"],
  ["16:03", "16:50"],
  ["18:30", "19:20"],
  ["19:30", "20:20"],
  ["20:30", "21:10"],
];
var iAmMad=["13"]
var iAmMadIfAll=true


function generateRandomNumbers(min, max, count) {
  if (count > (max - min + 1)) {
    throw new Error('Count cannot be greater than the range of the numbers.');
  }
  let numbers = [];
  while (numbers.length < count) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

function myImport(href){
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src",href);        // 引用文件的路径
  try{
    document.getElementsByTagName('head')[0].appendChild(script);                    // 引用文件
  }catch(exception){
    console.log(exception);
  }finally{}
}

function inTime(v, forTime = true) {
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
      ifDo.push(new Date(...d_s1) === new Date(...d_s2));
    }
  }
  return ifDo.some(Boolean);
}

function sleep(milliSeconds) {
  var startTime = new Date().getTime(); // get the current time
  while (new Date().getTime() < startTime + milliSeconds);
}



function process_stack_over_flow(){
  function setRan(randomNumbersDiv,require){
      var randomDigits = randomNumbersDiv.innerHTML;
      // 将随机数字字符串转换为数组
      var randomDigitsArray = randomDigits.split('');
      // 随机选择一个数字索引
      var randomIndex = Math.floor(Math.random() * randomDigitsArray.length);
      // 随机选择的数字
      var selectedDigit = randomDigitsArray[randomIndex];
      // 将选择的数字替换为13
      randomDigitsArray[randomIndex] = require;
      // 将修改后的数组转换回字符串
      var updatedRandomDigits = randomDigitsArray.join('');
      // 将更新后的随机数字字符串赋值给div元素的innerHTML属性
      randomNumbersDiv.innerHTML = updatedRandomDigits;
  }
  // 获取包含随机数字的div元素
  defaultProcess()
  var randomNumbersDiv = document.getElementById("randomNumbers");
  // 获取随机数字字符串
  if(!ranNumbers===null){
    if(iAmMad){
      if(iAmMadIfAll){
        for (var i_=0;i_<iAmMad.length;i_++){
          setRan(randomNumbersDiv,iAmMad[i_])
        }
      }
      else{
        setRan(randomNumbersDiv,iAmMad[generateRandomNumbers(0,iAmMad.length,1)])
      }   
}
}
}

function process_runoob(){
  function setRan(shu,require){
    var text = shu.innerText;
      var numbers = text.split(" ");
      var updatedText = text.replace(numbers[generateRandomNumbers(0,numbers.length-1,1)],require);
      shu.innerHTML = updatedText;
  }
  var shu = document.getElementById("shu");
  if (shu===null){
    defaultProcess();
    return;
  }

  if (shu.textContent.includes("17")){
    if (shu.textContent.includes("13")&&shu.textContent.includes("3")){
      shu.textContent=shu.textContent.replace("17","3");
    }
    else if (shu.textContent.includes("13")||shu.textContent.includes("3")){
      if (shu.textContent.includes("13")){
        shu.textContent=shu.textContent.replace("17","3");
      }
      if (shu.textContent.includes("3")){
        shu.textContent=shu.textContent.replace("17","13");
      }
    }

    shu.textContent=shu.textContent.replace("17",getRanForOne());
  }
  if(iAmMad){
    //if (!shu.innerText.includes("13")){
      if(iAmMadIfAll){
        for (var i_=0;i_<iAmMad.length;i_++){
          setRan(shu,iAmMad[i_])
        }
      }
      else{
        var req=iAmMad[generateRandomNumbers(0,iAmMad.length,1)]
        if(!shu.innerText.includes(req)){
          setRan(shu,req)
      }
    }
    //}
    }
}
function process_lddgo(){
  function setRan(generateResult,require){
      var text = generateResult.textContent;
      var numbers = text.split("");
      var updatedText = text.replace(numbers[generateRandomNumbers(0,numbers.length,1)],"&nbsp;&nbsp;&nbsp;13".replace("13",require));
      generateResult.innerHTML = updatedText;
  }
  var generateResult = document.getElementById("generateResult");
  if (generateResult===null){
    defaultProcess();
    return;
  }
  if (generateResult.innerHTML.includes("17")){

    if (generateResult.innerHTML.includes("13")&&generateResult.innerHTML.includes("3")){
      generateResult.innerHTML=generateResult.innerHTML.replace("17","3");
    }
    else if (generateResult.innerHTML.includes("13")||generateResult.innerHTML.includes("3")){
      if (generateResult.innerHTML.includes("13")){
        generateResult.innerHTML=generateResult.innerHTML.replace("17","3");
      }
      if (generateResult.innerHTML.includes("3")){
        generateResult.innerHTML=generateResult.innerHTML.replace("17","13");
      }
    }
    generateResult.innerHTML=generateResult.innerHTML.replace("17",getRanForOne());
  }
  if(iAmMad){
    //if (!generateResult.innerText.includes("13")){
    if(iAmMadIfAll){
      for (var i_=0;i_<iAmMad.length;i_++){
        setRan(generateResult,iAmMad[i_])
      }
    }
    else{
      var req=iAmMad[generateRandomNumbers(0,iAmMad.length,1)]
      if (!generateResult.innerText.includes(req)){
        setRan(generateResult,req)
      }
    }
      
  //}
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

    if (ranNumber.innerHTML.includes("17")){
      ranNumber.innerHTML=ranNumber.innerHTML.replace("17",getRanForOne())
    }
  }
  if(iAmMad){
    var i=generateRandomNumbers(0,ranNumbers.length-1,1)

    if (!ranNumbers[i].innerText.includes("13")){
      ranNumbers[i].innerHTML = "13";
    }
  }
}


function processDivContent() {
  var divElements = document.getElementsByTagName("div");

  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].innerHTML;
    if (divContent.includes("17")) {
      divElements[i].innerHTML = divContent.replace("17", getRanForOne());
    }
  }
}

function processh1Content() {
  var divElements = document.getElementsByTagName("h1");

  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].textContent;
    if (divContent.includes("17")) {
      divElements[i].textContent = divContent.replace("17", getRanForOne());
    }
  }
}

function processbContent() {
  var divElements = document.getElementsByTagName("b");

  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].textContent;
    if (divContent.includes("17")) {
      divElements[i].textContent = divContent.replace("17", getRanForOne());
    }
  }
}

function defaultProcess(){
  processh1Content()
  processbContent()
  processDivContent()
    
}


function process() {
  if (!inTime(onclass)){
    return
  }
  var url_l;
  url_l = window.location.href;
  if (url_l==="https://onaua.github.io/rannum/"||url_l.startsWith("https://www.bing.com/")||url_l.startsWith("https://cn.bing.com/")){
    return
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
    process_lddgo()
  }
  else if (url_l==="https://online-random.com/cn/"){
    process_online_randoms()
  }
  else if(url_l==="https://stackoverflow.org.cn/random/"){
    process_stack_over_flow()
  }
  else if (document.title.includes("随机")){
    defaultProcess()
    
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

  setInterval(process,10);
});


setInterval(process,10);
