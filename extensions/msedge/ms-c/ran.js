var timer;
var number = 0;
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

var runtimes = 0;
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
