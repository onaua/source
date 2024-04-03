var timer;
var number = 0;
var runtimes = 0;
const __version__ = "2.1.240403";
let iAmMad=[];
var iAmMad_weight=[]  ;//to sum equals 1
var iAmMad_req_n=0;
var max_play_times=3;


let req;
let setting=false;
const DEBUG=false;


let played_lddgo=0;
let played_runoob=0;
let played_online_randoms=0;
let played_stack=0;

//let max_play_times=3;
const today = new Date();
let RemoteLoadingFile=false;
var temp_config=get_info_config();
let _res=temp_config[0];
let _onclass=temp_config[1];
let _tasks=temp_config[2];
let _ran_funny_copule=temp_config[3];
//res,_onclass,_tasks=get_info_config();


if(DEBUG){
    console.log("Debug mode is on. RemoteLoadingFile line48 get_config");
}
//console.log("chnage remoteloadingfile  onclass")
let xhr=get_XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // 在这里处理从远程脚本返回的数据
      printt(xhr.responseText);
      let __jsonObject = JSON.parse(xhr.responseText);
      RemoteLoadingFile=__jsonObject.RemoteLoadingFile;
    }
  };
xhr.open('GET', main_config_url, false);
xhr.send();

if (RemoteLoadingFile){
  let xhr=get_XMLHttpRequest();

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
      Object.defineProperty(globalThis, 'res', {
        value: jsonObject.res,
        writable: false, // 将常量设为不可写（即不可修改）
        configurable: false // 将常量设为不可配置（不可删除）
      });
      
      Object.defineProperty(globalThis, 'ran_funny_copule', {
        value: jsonObject.ran_funny_copule,
        writable: false, // 将常量设为不可写（即不可修改）
        configurable: false // 将常量设为不可配置（不可删除）
      });
    }
  };
  xhr.open('GET', json_url, false);
  xhr.send();
}else{
  var onclass = _onclass;
  var tasks = _tasks;
  var res = _res;
  var ran_funny_copule = _ran_funny_copule;
}

for (const [k, v_] of Object.entries(tasks)) {
  const dayD=[];
  if(k=="//"){
    continue;
  }
  for (const e_ of k.split('|')) {
    const sday_ = e_.split('.');
    dayD.push([[today.getFullYear(), today.getMonth(), today.getDate()], [today.getFullYear(), parseInt(sday_[0])-1, parseInt(sday_[1])]]);
  }

  if (in_Time(dayD, false)) {
    iAmMad = v_.iAmMad;
    iAmMad_req_n = v_.iAmMad_req_n;
    iAmMad_weight = v_.iAmMad_weight;
    max_play_times=v_.max_play_times;
  }

}
printt(iAmMad,iAmMad_weight,iAmMad_req_n,max_play_times)
printt(get_info_config())
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
printt(req,played_lddgo);


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
  
console.log("Succeed in loading pages...");


