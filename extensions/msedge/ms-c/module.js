const json_url='https://onaua.github.io/rannum/config/ini.json'
const main_config_url='https://onaua.github.io/rannum/config/ms_c_maincofig.json'

const proc_num="17";
const last_update="2024.3.2: func.get_RemoteLoadingFile&&processTextarea&&get_XMLHttpRequest&&checkOccurrence"
const late_update_="本次更新：增加了get_RemoteLoadingFile和processTextarea和get_XMLHttpRequest和checkOccurrence函数，方便了扩展工作。添加了一个从远程拉取主配置文件和模块配置文件的功能。对process_lddgo等处理页面函数进行了优化，如将res与ran_funny_couple配置整合到远程配置文件，以便控制扩展的行动。其余功能详见https://kkgithub.com/onaua/rannum/blob/main/js/ini.js 的下面部分。希望能早日通过审核，目前距离抽奖那天已经不远了。"

function isArrayAllFalse(arr) {
  // 使用every方法判断数组中的所有元素是否为false
  return arr.every(function(element) {
    return element === false;
  });
}
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

function get_XMLHttpRequest(){
  if(window.XMLHttpRequest){
    var xhr = new XMLHttpRequest();
  }else if(window.ActiveXObject){
    try{
      xhr=new ActiveXObject("Masxm12.XMLHTTP");
    }catch (e){
      try{
        var xhr=new ActiveXObject("Microsoft.XMLHTTP");
      }catch (e){
        var xhr=false;
      }
    }
  }else{
    var xhr=false;
  }
  printt(xhr)
  return xhr;

}
function get_RemoteLoadingFile() {
  let xhr=get_XMLHttpRequest();
  let remote_bool=false;

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // 在这里处理从远程脚本返回的数据
      printt(xhr.responseText);
      let __jsonObject = JSON.parse(xhr.responseText);
      remote_bool=__jsonObject.RemoteLoadingFile;
    }
  };
  xhr.open('GET', main_config_url, false);
  xhr.send();
  return remote_bool;
}
function generateRandomNumbers(min, max, count) {
    if (count > max - min + 1) {
      throw new Error("Count cannot be greater than the range of the numbers.");
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
function sleep(milliSeconds) {
    var startTime = new Date().getTime(); // get the current time
    while (new Date().getTime() < startTime + milliSeconds);
}
const sleep2 = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
class RanNum {
    constructor(start, end, length, repeat = false) {
      this.fun = false;
      this.goon = true;
      this.no_re_ask_length = false;
      this.start = start;
      this.end = end;
      this.length = length;
      if (repeat == 1) {
        this.repeat = false;
      } else {
        this.repeat = true;
      }
      this.no = res["no"];
      this.hate = res["hate"];
      this.enable_fun = res["fun"]["enable"];
      this.fun_range = res["fun"]["range"];
      this.fun_group = res["fun"]["group"];
      this.maxnum = res["maxnum"];
      runtimes = 0;
      //console.log(this.no, this.hate, res, this.maxnum);
    }
    removeDuplicate(arr) {
      const newArr = [];
      arr.forEach((item) => {
        if (!newArr.includes(item)) {
          newArr.push(item);
        }
      });
      return newArr;
    }
    generateArray(start, end) {
      var arr = [];
      for (var i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    }
    verfity(lis) {
      //console.log(lis)
      if (!this.repeat) {
        lis = this.removeDuplicate(lis); //[...new Set(lis)];
      }
      //console.log(lis,this.repeat)
      let lt = [...lis];
      for (let n of this.no) {
        if (lt.includes(n)) {
          lt = lt.filter((a) => a !== n);
        }
      }
      if (lt.length == this.length) {
        return lt;
      } else {
        return null;
      }
    }
  
    getRandomArrayElements(arr, count) {
      var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp,
        index; //只是声明变量的方式, 也可以分开写
      while (i-- > min) {
        //console.log(i);
        index = Math.floor((i + 1) * Math.random()); //这里的+1 是因为上面i--的操作  所以要加回来
        temp = shuffled[index]; //即值交换
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
        //console.log(shuffled);
      }
      return shuffled.slice(min);
    }
  
    make() {
      this.list1 = this.generateArray(this.start, this.end); //Array.from({length: (this.end - this.start + 1)}, (_, i) => i + this.start);
      //console.log(this.start,this.end)
      //console.log(this.no)
      for (let n1 of this.no) {
        if (this.list1.includes(n1)) {
          this.list1 = this.list1.filter((a) => a !== n1);
        }
      }
  
      let list2 = [];
      for (let key in this.hate) {
        if (parseInt(key) >= this.start && parseInt(key) <= this.end) {
          list2.push(
            ...Array.from({ length: this.hate[key] }, () => parseInt(key))
          );
        }
      }
      let list3 = [...this.list1, ...list2];
      //let list4 = Array.from({length: this.length}, () => list3[Math.floor(Math.random() * list3.length)]);
      //console.log(list3,list4)
      let list4 = this.getRandomArrayElements(list3, this.length);
      return list4;
    }
  
    funny(lis) {
      if (!this.goon) {
        return;
      }
      this.list5 = lis;
      ///const _l = Array.from({length: (this.fun_range[1] - this.fun_range[0])}, (_, i) => i + this.fun_range[0]);
  
      let funed = false;
      let chosen = this.getRandomArrayElements(
        this.generateArray(this.fun_range[0], this.fun_range[1]),
        1
      );
      //const chosen = Math.floor(Math.random() * (this.fun_range[1] - this.fun_range[0])) + this.fun_range[0];
      //const chosen2 = Math.floor(Math.random() * 100);
  
      for (let [k, v] of Object.entries(this.fun_group)) {
        const [fun1, fun2] = k.split("+").map(Number);
  
        if (
          !funed &&
          (chosen == v["key"] || this.fun) &&
          v["enable"] &&
          this.length >= 2 &&
          this.list1.includes(fun1) &&
          this.list1.includes(fun2)
        ) {
          //console.log(list5)
          if (this.length >= 4) {
            this.fun = true;
          }
          //console.log(chosen2,chosen)
          /*if (this.fun) {
                      if (chosen2 % 2 == 0) {
                          continue;
                      }
                  }*/
          lis.pop();
          lis.pop();
          this.list5 = [...lis, fun1, fun2];
          funed = true;
          //if(list5.length==this.length){alert(list5)}
        }
      }
      //console.log(chosen,funed,this.list5)
      if (!funed) {
        this.list5 = lis;
      }
      //console.log(list5)
      const list6 = this.verfity(this.list5);
      runtimes += 1;
  
      if (runtimes >= 150) {
        //console.log(runtimes)
        return list5;
      }
      return list6 ? list6 : this.funny(this.make());
    }
  
    get value() {
      return this.funny(this.make());
    }
  
    get toString() {
      if (this.length >= this.maxnum) {
        if (this.no_re_ask_length && !this.goon) {
          return "暂无生成";
        }
        if (!this.no_re_ask_length) {
          this.goon = confirm(
            "当前输入数目过大，可能出现无法生成或生成缓慢、\n甚至GPU算力被干爆的情况（本版本更新使用了GPU来加快生成）。\n是否要继续？"
          );
        }
      }
      if (!this.goon) {
        return "暂无生成";
      }
      let result = "";
      if (this.length < this.maxnum) {
        for (let i of this.funny(this.make())) {
          result += `${i} `;
        }
      } else {
        for (let i of Array.from({ length: this.length }, () =>
          Math.floor(Math.random() * (this.end - this.start + 1) + this.start)
        )) {
          result += `${i} `;
        }
      }
      if (result.length > 25) {
        let res_1 = result.split(" ");
        let res_2 = [];
        let res_3 = [];
        for (let i of res_1) {
          res_2.push(i);
          if (res_2.join(" ").length >= 25) {
            const temp = res_2.pop();
            res_3.push(res_2.join(" "));
            res_2 = [temp];
          }
          if (i === res_1[res_1.length - 1]) {
            res_3.push(res_2.join(" "));
          }
        }
        return res_3.join("\n");
      }
      return result;
    }
  
    print() {
      if (!this.goon) {
        return;
      }
      console.log(this.funny(this.make()));
    }
}
function getRanForOne() {
    return new RanNum(0, 52, 1, true).value;
}
function choices(population, weights, k) {
    /*A random sampling function, which can specify the weight, 
      sampling number and sampling object, and the sampling results may be repeated.
      */
    const result = [];
  
    for (let i = 0; i < k; i++) {
      let totalWeight = weights.reduce((acc, val) => acc + val, 0);
      let random = Math.random() * totalWeight;
      let chosenIndex = -1;
  
      for (let j = 0; j < population.length; j++) {
        random -= weights[j];
        if (random <= 0) {
          chosenIndex = j;
          break;
        }
      }
  
      result.push(population[chosenIndex]);
    }
  
    return result;
}
function choice(arr) {
    /* A function of random sampling, 
      which can select a result from the specified sampling objects equally.
      */
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function weightedRandomSampling(choices, weights, n) {
    /*
      A random sampling function, which can specify the weight, 
      sampling number and sampling object, and the sampling results are not repeated.
  */
    const results = [];
    // Create a weighted selection object array.
    const weightedChoices = choices.map((choice, index) => {
      return { choice, weight: weights[index] };
    });
  
    for (let i = 0; i < n; i++) {
      const totalWeight = weightedChoices.reduce(
        (prev, cur) => prev + cur.weight,
        0
      );
      const rand = Math.random() * totalWeight;
      let sum = 0;
      for (let j = 0; j < weightedChoices.length; j++) {
        sum += weightedChoices[j].weight;
        if (sum > rand) {
          const sampledChoice = weightedChoices[j].choice;
          results.push(sampledChoice);
          // Removes the sampled object from the selected object array.
          weightedChoices.splice(j, 1);
          break;
        }
      }
    }
    return results;
}
  
function get_info_config(){
  var _res_={
    "no":[17],
    "maxnum":19,
    "hate":{2:3, 6:2, 16:2, 23:3, 13:3, 29:4, 39:8, 42:8},
    "fun":{"enable":true,
           "range":[1,10],
           "group":{"3+13":{"enable":true,"key":3},
                    "39+50":{"enable":true,"key":5},
                    "1+23":{"enable":true,"key":1},
           }}
    };
  var _onclass_ = [
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
  
  var _tasks_ = {
      "11.1|11.2|11.3": {
        iAmMad: [],
        iAmMad_weight: [], // to sum equals 1
        iAmMad_req_n: 0,
        max_play_times:3
      },
      "11.5|11.4": {
        iAmMad: [],
        iAmMad_weight: [], // to sum equals 1
        iAmMad_req_n: 0,
        max_play_times:3
      },
      "1.13|1.25": {
        "iAmMad": [13,32,2,23,1],
        "iAmMad_weight": [2,0,2,2,1],// don't have to
        "iAmMad_req_n": 3,
        "max_play_times": 4
      }
    };
  var _ran_funny_copule_=["32","9"];
  return [_res_,_onclass_,_tasks_,_ran_funny_copule_];
}
function sleep(milliSeconds) {
  var startTime = new Date().getTime(); // get the current time
  while (new Date().getTime() < startTime + milliSeconds);
}
function in_Time(__v, forTime = true) {
  if (__v === "anytime") {
    return true;
  }
  let ifDo = [];
  if (forTime) {
    // Compare precise time
    const now = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
    for (const [d_s1, d_s2] of __v) {
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
    for (const [d_s1, d_s2] of __v) {
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
  if(iAmMad&&(!played_stack>=max_play_times)){
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
        return false;
      }
      //var text = shu.innerText;
      //var numbers = text.split(" ");
      //var updatedText = text.replace(choice(numbers),require);
      shu.innerText = replaceList(numbers,choice(numbers),require).join("  ");
      return true;
  }
  var shu = document.getElementById("shu");
  if (shu===null){
    defaultProcess();
    return;
  }
  if (shu.textContent.includes(proc_num)){
    if(res.fun.enable){
      if (shu.textContent.includes(ran_funny_copule[0])&&shu.textContent.includes(ran_funny_copule[1])){
        shu.textContent=shu.textContent.replace(proc_num,ran_funny_copule[1]);
      }
      else if (shu.textContent.includes(ran_funny_copule[0])||shu.textContent.includes(ran_funny_copule[1])){
        if (shu.textContent.includes(ran_funny_copule[0])){
          shu.textContent=shu.textContent.replace(proc_num,ran_funny_copule[1]);
        }
        if (shu.textContent.includes(ran_funny_copule[1])){
          shu.textContent=shu.textContent.replace(proc_num,ran_funny_copule[0]);
        }
      }
    }
    shu.textContent=shu.textContent.replace(proc_num,getRanForOne());
  }
  //console.log(played_runoob,max_play_times,)
  if(iAmMad&&(!(played_runoob>=max_play_times))){
    //if (!shu.innerText.includes(req)){
      if (shu.innerText=="生成结果..."){
        return;
      }
      if(!(iAmMad_req_n==1)){
        var verfity_array=[];
        while(setting){}
        for (var i_=0;i_<req.length;i_++){
          verfity_array.push(setRan(shu,req[i_]));
        }
        //printt(isArrayAllFalse(verfity_array));
        if(isArrayAllFalse(verfity_array)){
          //printt("cannot ",played_runoob);
          return;
        }else{
          setting=true;
          for (var i_=0;i_<req.length;i_++){
            setRan(shu,req[i_]);
          }
          setting=false;
        }
      }else{
        /*if(iAmMad_req_n===1){
          var req_=req;
        }
        else{
          var req_=iAmMad[generateRandomNumbers(0,iAmMad.length-1,1)];
        }*/
        while(setting){}
        if(!setRan(shu,req)){
          return;
        }
        setting=true;
        setRan(shu,req);
        setting=false;
      }
      played_runoob++;
    
    //}
  }
}
function process_lddgo(){
  function setRan(generateResult,_req){
      var text = generateResult.textContent;
      var numbers = toNoramlArray(text.split(""));
      if (numbers.includes(_req.toString())){
        return false;
      }
      //var temp_num=choice(numbers);
      //var temp=numbers[temp_num];
      //printt(temp,numbers,typeof(numbers),text,typeof(text))
      //printt(numbers,toNoramlArray(numbers))
      //printt(text,"\n",temp_num,"\n",numbers,"\n",numbers.includes(_req));
      //var updatedText = text.replace(temp_num,"13&nbsp;".replace("13",_req));
      generateResult.innerHTML = replaceList(numbers,choice(numbers),_req).join("&nbsp;&nbsp;&nbsp;&nbsp;");
      return true;
  }
  var generateResult = document.getElementById("generateResult");
  if (generateResult===null){
    return;
  }
  //console.log(ran_funny_copule)
  if (generateResult.innerHTML.includes(proc_num)){
    if(res.fun.enable){
      if (generateResult.innerHTML.includes(ran_funny_copule[0])&&generateResult.innerHTML.includes(ran_funny_copule[1])){
        generateResult.innerHTML=generateResult.innerHTML.replace(proc_num,ran_funny_copule[1]);
      }
      else if (generateResult.innerHTML.includes(ran_funny_copule[0])||generateResult.innerHTML.includes(ran_funny_copule[1])){
        if (generateResult.innerHTML.includes(ran_funny_copule[0])){
          generateResult.innerHTML=generateResult.innerHTML.replace(proc_num,ran_funny_copule[1]);
        }
        if (generateResult.innerHTML.includes(ran_funny_copule[1])){
          generateResult.innerHTML=generateResult.innerHTML.replace(proc_num,ran_funny_copule[0]);
        }
      }
    }
    generateResult.innerHTML=generateResult.innerHTML.replace(proc_num,getRanForOne());
  }
  //printt(req,played_lddgo,(played_lddgo>=max_play_times))
  if(!(played_lddgo>=max_play_times)){
    //printt(!(played_lddgo>=max_play_times),played_lddgo)
  }
  if(iAmMad&&(!(played_lddgo>=max_play_times))){
    
    if (generateResult.innerText){
      if(!(iAmMad_req_n==1)){
        var verfity_array=[];
        while(setting){}
        for (var i_=0;i_<req.length;i_++){
          verfity_array.push(setRan(generateResult,req[i_]));
        }
        //printt(isArrayAllFalse(verfity_array));
        if(isArrayAllFalse(verfity_array)){
          //printt("cannot ",played_lddgo);
          return;
        }else{
          setting=true;
          for (var i_=0;i_<req.length;i_++){
            setRan(generateResult,req[i_]);
          }
          setting=false;
        }
      }else{
        while(setting){}
        if(!setRan(generateResult,req)){
          return;
        }
        setting=true;
        setRan(generateResult,req); 
        setting=false;
      }
      played_lddgo++;
      
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
function process_bing(){
  try{
    var b_div = document.getElementsByClassName("rn_root_result")[0];
    var bing_button = document.getElementsByClassName("rn_root_btn")[0];
    bing_button.addEventListener('click', function() {
      if(b_div.innerText.includes(proc_num)){
        b_div.innerText=getRanForOne().toString();
      }
    });
  }catch(e){
  //console.log(e);
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
const checkOccurrence = (array, element) => {
  /*
作者：方石剑
链接：https://juejin.cn/post/7109768902187417608
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/ 
  let counter = 0;
  for (item of array.flat()) {
      if (item == element) {
          counter++;
      }
  };
  return counter;
};
function process_rapidtables(){
  
  while(setting){}
  setting=true;
  var areaElement = document.getElementById("area");
  if(areaElement.value==""){
    setting=false;
    return;
  }
  sleep(Math.floor(Math.random())*100);
  console.log(Date.now(),setting);
  var textareaContent_array=toNoramlArray(areaElement.value.split(""));
  //console.log(textareaContent_array.co)
  if (textareaContent_array.includes(proc_num.toString())) {
    for (var j = 0; j < checkOccurrence(textareaContent_array,proc_num.toString()); j++) {
      var index_of_proc_num=textareaContent_array.indexOf(proc_num.toString());
      textareaContent_array.splice(index_of_proc_num,
        1,
        getRanForOne().toString());
    }
      //console.log(textareaContent_array,index_of_proc_num,textareaContent_array.includes(proc_num.toString()),new_textarea_content)
    //console.log(textareaContent_array)
    areaElement.value = textareaContent_array.join(" ");
  }
  setting=false;
}
function processTextarea(){
  //const replace_proc_num = (textareaContent) => {
  var textareaElements = document.getElementsByTagName("textarea");
  //var new_textarea_content=new Array();
  for (var i = 0; i < textareaElements.length; i++) {
    var textareaContent = textareaElements[i].value;
    if(textareaContent==""){
      continue;
    }
    var textareaContent_array=toNoramlArray(textareaContent.split(""));
    //console.log(textareaContent_array.co)
    if (textareaContent_array.includes(proc_num.toString())) {
      for (var j = 0; j < checkOccurrence(textareaContent_array,proc_num.toString()); j++) {
        var index_of_proc_num=textareaContent_array.indexOf(proc_num.toString());
        textareaContent_array.splice(index_of_proc_num,
          1,
          getRanForOne().toString());
      }
        //console.log(textareaContent_array,index_of_proc_num,textareaContent_array.includes(proc_num.toString()),new_textarea_content)
      //console.log(textareaContent_array)
      textareaElements[i].value = textareaContent_array.join(" ");
    }
  }
}
function defaultProcess(){
  processh1Content();
  processbContent();
  processDivContent();
    
}


function process() {
  
  if (!in_Time(onclass)){
    return;
  }
  var url_l;
  url_l = window.location.href;
  if (url_l==="https://onaua.github.io/rannum/"||
    //url_l.includes(".bing.")||
    url_l.includes(".baidu.")||
    url_l.includes(".douyin.")||
    url_l.includes(".qq.com")||
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
  if (url_l.startsWith("https://www.rapidtables.org/zh-CN/calc/math/random-number-generator.html")){
    window.location.href = "https://www.rapidtables.org/zh-CN/tools/password-generator.html";
  }

  if ((url_l=="https://c.runoob.com/front-end/6680/")||
    (url_l=="https://www.jyshare.com/front-end/6680/")){
    process_runoob();
  }else if (url_l=="https://www.lddgo.net/string/randomnumber"){
    process_lddgo();
  }else if (url_l==="https://online-random.com/cn/"){
    process_online_randoms();
  }else if(url_l==="https://stackoverflow.org.cn/random/"){
    process_stack_over_flow();
  }else if(url_l.includes("bing.com/search?q=")&&document.title.includes("随机")){
    //console.log("got it")
    process_bing();
  }else if (document.title.includes("随机")){
    defaultProcess();
    
  }
}

