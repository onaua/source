const res={
    "no":[17],
    "maxnum":19,
    "hate":{2:3,
        6:2,
        16:2,
        23:3,
        13:3,
        29:4,
        39:8,
        42:8},
    "fun":{"enable":true,
           "range":[1,10],
           "group":{
                "3+13":{
                    "enable":true,
                    "key":3},
                "39+50":{
                    "enable":true,
                    "key":5},
                "1+23":{
                        "enable":true,
                        "key":1},
               
           }}
    }
/*
const onclass = [
        ["06:18", "07:50"],
        ["07:58", "08:45"],
        ["08:53", "09:40"],
        ["10:03", "10:50"],
        ["11:03", "11:50"],
        ["14:08", "14:55"],
        ["15:08", "15:55"],
        ["16:03", "16:50"],
        ["17:30", "19:20"],
        ["19:30", "20:20"],
        ["20:30", "21:10"],
      ];
var iAmMad=[];
var iAmMad_weight=[]  ;//to sum equals 1
var iAmMad_req_n=0;
var max_play_times=3;
const tasks = {
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
        "11.7|11.6": {
          iAmMad: [],
          iAmMad_weight: [], // to sum equals 1
          iAmMad_req_n: 0,
          max_play_times:3
        }
      };
/*if iAmMad is empty, then the two must be empty or 0."
examples
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
  but the result won't appear both them two."then the two must be empty or 0./*
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














/*
扩展名称与实际作用不符，是因为这个扩展的创作初衷是为了娱乐。开发意图是为了在朋友聚会，随机抽取号码牌玩游戏时戏弄一下朋友，不会使用任何个人信息，不会在扩展市场里公开。
扩展原理：在一些可能会有随机数抽取功能的网页上，将数字“17”替换为我朋友的号码，然后在不知情的朋友点击“抽取”按钮时，若有设置替换，就会出现自己的号码。扩展可设置在何时替换、替换的数字和替换的概率以及最多替换次数等。部分不支持的网页会被重定向。


The name of the extension does not match the actual function because the original intention of this extension is for entertainment. The purpose of the development is to tease friends when they get together and randomly draw numbers to play games. No personal information will be used and will not be made public in the expanded market. 
Extended principle: On some web pages that may have random number extraction function, replace the number "17" with my friend's number, and then when an unsuspecting friend clicks the "Extract" button, if there is any setting replacement, his own number will appear. 
Extension can set when to replace, the number to replace, the probability of replacement, and the maximum number of replacements. Some unsupported pages will be redirected.



创作初衷是为了娱乐。开发意图是为了在朋友聚会，随机抽取号码牌玩游戏时戏弄一下朋友。
详见https://onaua.github.io/rannum/js/ini.js
ini.js
定义了一些基本配置，用于ran.js中的RanNum对象。
ran.js功能
定义了随机数抽取或加权、不完全随机（有抽取倾向，即某个数字抽中的概率较大）抽取以及数组内容随机或加权抽取的函数
contentScript.js
为了在一些抽取随机数字的网页上，若出现数字17，这是我的号码，就会替换成其他数字，倘若在tasks中，当天有定义规则，则按规则内的定义来。
以下的页面指诸如https://www.lddgo.net/string/randomnumber的真实页面
iAmMad：要塞进页面上随机数生成结果的数字集合,
iAmMad_weight: 倘若需要塞进的数字集合长度小于iAmMad的长度，就会按照此所定义的权重进行抽取，抽取的结果会被塞进页面上的随机数生成结果
iAmMad_req_n: 要被塞进几个数字,
max_play_times:  为避免被人看出有程序操控，在页面上的随机数生成了max_play_times次后，就不再更换页面上的随机数生成结果
contenScript.js功能：
该脚本文件需要ran.js中的一些方法或对象进行随机数抽取、包含权重的随机数抽取
1、时间表和任务定义：
从'https://onaua.github.io/rannum/config/ini.json'获得onclass与tasks的定义
定义了一个时间表 onclass，其中包含了一天中的多个时间段。
有一个任务对象 tasks，其中包含了一些任务及其执行要求、任务日期。
2、条件判断和任务获取：
通过当前时间与时间表中的时间段比较，确定当前是否可以执行任务。若可以执行任务，便从任务对象中获取相应的任务执行要求（只要当天在任务对象中有指定任务，否则不会有任何特殊任务），包括需要生成的随机数原始序列、随机数生成权重、执行次数等。
3、页面处理函数：
对于几个可能被用到的网页，都有规则定义，若是不常用到的网页会有默认处理函数
包含了一系列用于处理网页内容的函数，这些函数根据特定条件修改页面上的内容，例如替换随机数、修改特定元素的文本等。
4、页面内容处理：
根据不同的页面和条件，在特定的页面上执行相应的处理操作，例如在某个网站上生成随机数、替换特定数字，在某个网站上重定向等。
5、监听页面变化：
使用 MutationObserver 监听页面内容的变化，当页面内容发生改变时，触发相应的处理函数。
6、自动化执行：
在页面加载完成后和一定时间间隔内，持续地执行特定的处理函数，根据条件自动在页面上进行内容修改和操作。
总体来说，contentScript.js的主要作用是根据预设条件，在特定的网页上自动执行特定的任务，可能包括修改页面上的数字、文本或其他元素。contentScript.js用于自动化操作特定网页、生成随机数或对特定网站进行特定操作的脚本。

backgrong.js
这段代码是Chrome或Edge浏览器扩展中使用的监听器，用于在浏览器页面加载完成时执行特定的操作。
使用了 chrome.webNavigation.onCompleted.addListener() 方法来监听页面加载完成的事件，并在事件触发时执行回调函数。具体功能如下：
当网页加载完成时（即 onCompleted 事件触发），触发一个函数，该函数接受一个 details 参数，其中包含有关已完成导航的详细信息。
在这个监听器中，使用 chrome.tabs.executeScript() 方法，通过 details.tabId 指定的标签页执行一个内容脚本（contentScript.js 文件）。
{ url: [{ schemes: ["http", "https"] }] } 是一个可选的对象，定义了监听的 URL 规则。在这种情况下，它指定了当页面加载的 URL 使用了 HTTP 或 HTTPS 协议时才会触发这个监听器。
总体来说，这段代码的作用是在浏览器中监控 HTTP 和 HTTPS 页面加载完成事件，并在这些页面加载完成后，在特定标签页中执行名为 contentScript.js 的内容脚本。这种机制通常用于扩展或插件在特定网页上执行自定义操作或注入特定的 JavaScript 代码。

ini.js
定义了一些基本配置，用于ran.js中的RanNum对象。
1、no: 包含一个数字 17，可能表示需要排除的数字或不希望在结果中出现的特定数字。
2、maxnum: 设置为 19，可能表示生成的随机数数组的最大长度，在某些页面中若生成超过该长度的随机数数组，可能会占用大量内存资源，并且生成缓慢。
hate: 一个对象，其中列出了一些数字作为键，对应的值是另外一些数字，这些键对应的值表示在随机数生成原始序列中键值的数量，前提是该键值在随机数生成范围中（如42:8，若随机数原始序列是1~50间的所有整数，42在1~50这个范围之间，首先会生成1~50间所有整数的数组[，然后去除数字17（特定条件下）]，由于该数组中元素42的数量是1，所以会再向该数组中添加7个元素42）。
fun: 一个包含了一些具有特定规则的子对象的对象。定义了娱乐环节的规则，娱乐环节是若生成随机数的数量大于2，那么进行随机数抽取，随机数抽取的范围是下面的range，若抽出来的数字是group（里面的对象的键值是一对情侣的分别持有的号码）中某个键值的key值，那么该键值就会被塞进随机数生成结果中，实现博人一笑的环节。其中包含以下属性：
enable: 一个布尔值，表示是否启用了一些有趣或特殊的规则。
range: 一个数组 [1, 10]，。
group: 一个包含了多个键值对的对象，表示不同的组合规则。每个键是一种数字组合的形式（如 3+13），对应的值是一个包含了 enable 和 key 的对象。其中：
enable: 一个布尔值，表示是否启用了这种组合规则。
key: 一个数字，表示某种特殊的组合情况的标识。
总的来说，这个对象 res 是一个配置对象，其中包含了一些数字和特定规则的定义，用于指导RanNum随机数生成或抽样的过程，以确保生成的结果符合预期的规则和条件。

ran.js功能
1、函数generateRandomNumbers(min, max, count):
根据给定的范围 min 和 max，生成 count 个不重复的随机整数。
2.函数sleep(milliSeconds):
通过占用 CPU 时间来实现延迟的函数，暂停程序执行指定的时间（以毫秒为单位）。
3、对象RanNum 类:
用于生成随机数的类，根据给定的参数和规则生成随机数列表。
提供了一系列方法：
make(): 生成随机数列表。
funny(lis): 根据特定的规则对生成的随机数列表进行调整，使其满足一定条件。
value: 获取生成的随机数列表。
toString: 获取生成的随机数列表并以字符串形式返回，若要求生成随机数的长度大于ini.js中res对象的maxnum，会有提示，在实际网页中多用该属性而不是value属性。
print(): 打印生成的随机数列表。
4、其他辅助函数:
-getRanForOne(): 返回一个介于 0 到 52 之间的随机整数。
-choices(population, weights, k): 根据权重从给定的选项中进行随机抽样，抽取 k 个样本。
-choice(arr): 从给定的数组中随机选择一个元素返回。
-weightedRandomSampling(choices, weights, n): 基于权重进行随机抽样，抽取 n 个样本，确保抽取结果不重复。
ran.js中的这些函数和类提供了在 JavaScript 中进行随机数生成和抽样操作的功能，可以根据特定需求生成随机数列表，或者从一组选项中按照一定的规则进行随机抽样。



contentScript.js Functionality:
---This script file requires some methods or objects from ran.js for random number extraction and weighted random number extraction.
1、Schedule and Task Definition:
-Defined a schedule called "onclass," containing multiple time periods within a day.
-There's a tasks object that includes tasks, their execution requirements, and task dates.
2、Conditional Statements and Task Acquisition:
-Compares the current time with time periods in the schedule to determine if a task can be executed.
-If a task can be executed, it retrieves the corresponding task execution requirements from the tasks object (only if a specific task is designated for that day), including original sequences of random numbers to be generated, random number generation weights, execution counts, etc.
3、Page Handling Functions:
-Contains a series of functions for modifying webpage content based on specific conditions, such as replacing random numbers or modifying specific element text.
4、Page Content Handling:
-Executes specific handling operations on different pages and conditions, such as generating random numbers on a website, replacing specific numbers, redirecting on a particular website, etc.
5、Monitoring Page Changes:
-Uses a MutationObserver to monitor changes in page content. It triggers respective handling functions when there's a change in the page content.
6、Automated Execution:
-After page loading and within a certain time interval, continuously executes specific handling functions automatically on the page based on conditions.
~Overall, the main purpose of contentScript.js is to automatically perform specific tasks on specific webpages based on preset conditions. This could involve modifying numbers, text, or other elements on the webpage.

backgrong.js:
---This code serves as a listener used in Chrome or Edge browser extensions to execute specific operations when a browser page loads.
It uses ~chrome.webNavigation.onCompleted.addListener()~ to listen for page load completion events and executes a callback function when this event occurs.
Specifically:
-When a webpage completes loading (the ~onCompleted~ event triggers), a function is triggered that takes a ~details~ parameter containing detailed information about the completed navigation.
-Within this listener, ~chrome.tabs.executeScript()~ is used to execute a content script (~contentScript.js file~) on the tab specified by ~details.tabId~.
- ~{ url: [{ schemes: ["http", "https"] }] }~ is an optional object defining the URL rules to listen to. In this case, it specifies triggering the listener only when a page with URLs using HTTP or HTTPS protocols loads.
~~~In essence, this code's purpose is to monitor the completion of HTTP and HTTPS page loads in the browser and, after the completion, execute the content script named contentScript.js on specific tabs. This mechanism is commonly used for extensions or plugins to perform custom operations or inject specific JavaScript code on particular webpages.

ini.js:
---It defines basic configurations used for the RanNum object in ran.js.
1. no: Contains the number 17, possibly indicating specific numbers to be excluded or not desired in the resulting output.
2. ~maxnum~: Set to 19, likely indicating the maximum length of the generated random number array. Generating arrays longer than this on certain pages might consume significant memory resources and slow down the process.
3. ~hate~: Contains an object listing some numbers as keys, and their corresponding values are other numbers. These key-value pairs indicate the quantity of the key in the original sequence of generated random numbers. This occurs within a certain range. For instance, if the key-value pair is 42:8, in a sequence of all integers between 1 and 50, after excluding the number 17 (under specific conditions), since the count of 42 in the sequence is 1, 7 additional 42s will be added to the array.
4. ~fun~: Contains sub-objects with specific rules. It defines rules for entertainment activities, where if the quantity of generated random numbers exceeds 2, random number extraction is performed within the defined range. If a number extracted belongs to a key in the ~group~ (which holds pairs of numbers representing couples' respective numbers), that number will be added to the generated random number result. This section includes properties such as:
- ~enable~: a boolean indicating whether interesting or specific rules are enabled.
- ~range~: an array [1, 10].
- ~group~: contains multiple key-value pairs defining different combinations. Each key represents a number combination (e.g., 3+13), and its corresponding value is an object containing ~enable~ and ~key~. Here:
-- ~enable~: a boolean indicating whether this combination rule is enabled.
-- ~key~: a number representing an identifier for a particular combination scenario.
~~~In summary, this ~res~ object is a configuration object containing numbers and specific rule definitions. It guides the process of random number generation or sampling by the RanNum object to ensure that the generated results comply with expected rules and conditions.

ran.js Functionality:
1. Function ~generateRandomNumbers(min, max, count)~:
- Generates count non-repeating random integers within the given range of min and max.
2. Function ~sleep(milliSeconds)~:
- A delay function that pauses program execution for the specified time (in milliseconds) by consuming CPU time.
3. Class RanNum:
---Used for generating random numbers based on given parameters and rules. Provides methods such as:
- ~make()~: Generates a list of random numbers.
- ~funny(lis)~: Adjusts the generated list of random numbers according to specific rules to meet certain conditions.
- ~value~: Retrieves the generated list of random numbers.
- ~toString~: Retrieves the generated list of random numbers as a string. If the requested length of generated random numbers exceeds ~maxnum~ from ~ini.js~, there will be a prompt. This property is often used in actual web pages rather than the ~value~ property.
- ~print()~: Prints the generated list of random numbers.
4. Other Auxiliary Functions:
- ~getRanForOne()~: Returns a random integer between 0 and 52.
- ~choices(population, weights, k)~: Performs random sampling from given options based on weights, extracting k samples.
- ~choice(arr)~: Randomly selects and returns an element from the given array.
- ~weightedRandomSampling(choices, weights, n)~: Conducts random sampling based on weights, ensuring that n samples are extracted without repetition.
~~~These functions and classes in ~ran.js~ provide functionality for random number generation and sampling operations in JavaScript. They can generate random number lists according to specific requirements or perform random sampling from a set of options based on certain rules.






*/ 