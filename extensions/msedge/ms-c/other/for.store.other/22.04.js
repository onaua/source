var iAmMad=true


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



//stack overflow
var iAmMad=true
// 获取包含随机数字的div元素
var randomNumbersDiv = document.getElementById("randomNumbers");
// 获取随机数字字符串
if(iAmMad){
var randomDigits = randomNumbersDiv.innerHTML;
// 将随机数字字符串转换为数组
var randomDigitsArray = randomDigits.split('');
// 随机选择一个数字索引
var randomIndex = Math.floor(Math.random() * randomDigitsArray.length);
// 随机选择的数字
var selectedDigit = randomDigitsArray[randomIndex];
// 将选择的数字替换为13
randomDigitsArray[randomIndex] = '13';
// 将修改后的数组转换回字符串
var updatedRandomDigits = randomDigitsArray.join('');
// 将更新后的随机数字字符串赋值给div元素的innerHTML属性
randomNumbersDiv.innerHTML = updatedRandomDigits;
}


//runoob.com
var iAmMad=true
var element = document.getElementById("shu");
if(iAmMad){
if (!element.innerText.includes("13")){
var text = element.innerText;
var numbers = text.split(" ");

var updatedText = text.replace(numbers[generateRandomNumbers(0,numbers.length-1,1)],"13");
element.innerHTML = updatedText;
}
}



//randoms_online
var iAmMad=true
var elements= document.getElementsByClassName("random-item");
if(iAmMad){
var i=generateRandomNumbers(0,elements.length-1,1)

if (!elements[i].innerText.includes("13")){
elements[i].innerHTML = "13";
}
}





//lddgo.net
var element = document.getElementById("generateResult");
if(iAmMad){
if (!element.innerText.includes("13")){
var text = element.textContent;
var numbers = text.split("");
var updatedText = text.replace(numbers[generateRandomNumbers(0,numbers.length-1,1)],"&nbsp;&nbsp;&nbsp;13");
element.innerHTML = updatedText;
}
}

//runoob.com
var iAmMad=true
var element = document.getElementById("shu");
if(iAmMad){
if (!element.innerText.includes("13")){
var text = element.innerText;
var numbers = text.split(" ");

var updatedText = text.replace(numbers[generateRandomNumbers(0,numbers.length-1,1)],"13");
element.innerHTML = updatedText;
}
}






