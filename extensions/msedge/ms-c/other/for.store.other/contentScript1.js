
var timer
function sleep(milliSeconds){
  var startTime = new Date().getTime(); // get the current time    
  while (new Date().getTime() < startTime + milliSeconds);
}
/*function processDivContent() {
  var divElements = document.getElementsByTagName("div");
  
  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].innerHTML;
    if (divContent.includes("17")) {
      divElements[i].innerHTML = divContent.replace("17", "13");
    }
  }
}*/
function processAllElements() {
  var elements = document.getElementsByTagName("b");
  
  for (var i = 0; i < elements.length; i++) {
    processElementContent(elements[i]);
  }
}
function processElementContent(element) {
  if (element.innerHTML.includes("17")) {
    element.innerHTML = element.innerHTML.replace("17", "");
  }
}
function processDivContent() {
  var divElements = document.getElementsByTagName("div");
  
  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].innerHTML;
    if (divContent.includes("17")) {
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = divContent;
      tempDiv.innerHTML = tempDiv.innerHTML.replace("17", "13");
      divElements[i].innerHTML = tempDiv.innerHTML;
    
    }
    
  }
}
function processh1Content() {
  var divElements = document.getElementsByTagName("h1");
  
  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].textContent;
    if (divContent.includes("17")) {
      var tempDiv = document.createElement("h1");
      tempDiv.textContent = divContent;
      tempDiv.textContent = tempDiv.innerHTML.replace("17", "13");
      divElements[i].textContent = tempDiv.textContent;
    
    }
    
  }
}
function processbContent() {
  var divElements = document.getElementsByTagName("b");
  
  for (var i = 0; i < divElements.length; i++) {
    var divContent = divElements[i].textContent;
    if (divContent.includes("17")) {
      var tempDiv = document.createElement("b");
      tempDiv.textContent = divContent;
      tempDiv.textContent = tempDiv.textContent.replace("17", "13");
      divElements[i].textContent = tempDiv.textContent;
    
    }
    
  }
}
function process(){
  var url_l;
  url_l=window.location.href
  if (url_l=="https://www.imathtool.com/jisuanqi/suijishu/"){
    window.location.href="https://www.imathtool.com/jisuanqi/zhongliang/"
  }
  if (url_l=="https://uutool.cn/random/"){
    window.location.href="https://uutool.cn/"
  }
  
  processh1Content()
  processbContent()
  processDivContent()
  
}


//setInterval方法或字符串 ，毫秒，参数数组（方法的）)
//setInterval("showLogin()","1000");//showLogin()函数名一定要带括号

function init() {
  process();
  
  const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      if (mutation.type === "childList") {
        process();
      }
    });
  });
  
  observer.observe(document, { childList: true, subtree: true });
}

// 页面加载完成后执行初始化函数
window.addEventListener("DOMContentLoaded", init);

window.addEventListener("load", function() {
  timer=setInterval(process,100)
  //processDivContent();
});
setInterval(process,100)