### 扩展说明
* 扩展名称与实际作用不符，是因为这个扩展的创作初衷是为了娱乐。开发意图是为了在朋友聚会，随机抽取号码牌玩游戏时戏弄一下朋友，不会使用任何个人信息，不会在扩展市场里公开。
* 扩展原理：在一些可能会有随机数抽取功能的网页上，将数字“17”替换为我朋友的号码，然后在不知情的朋友点击“抽取”按钮时，若有设置替换，就会出现自己的号码。扩展可设置在何时替换、替换的数字和替换的概率以及最多替换次数等。部分不支持的网页会被重定向。抱歉对[搜索 - 随机](https://cn.bing.com/search?q=随机)也进行了处理。

### 更新日志
#### [2.1.24.309] - 2024-03-09

##### 新增

* `process_bing` 对'https://cn.bing.com/search?q=随机'页面上的随机数字生成在线工具进行了处理。
#### [2.1.21] - 2024-03-02

##### 新增

* `get_RemoteLoadingFile`, `processTextarea`, `get_XMLHttpRequest`, `checkOccurrence`
* 从远程拉取主配置文件和模块配置文件的功能

##### 优化

* `process_lddgo`等处理页面函数进行了优化，如将`res`与`ran_funny_couple`配置整合到远程配置文件，以便控制扩展的行动。
##### 变更
##### 已删除
***

### 代码解释

#### 来自GPT-3.5的代码解释

##### 常量声明
- `json_url`: 存储 JSON 文件的 URL 地址
- `main_config_url`: 子模块主配置文件的 URL 地址
- `proc_num`: 存储一个字符串常量 "17"
- `last_update`: 存储最后更新的日期和一系列函数的引用
- `late_update_`: 存储最近一次更新的具体信息和扩展工作相关的内容

##### 函数定义
1. `isArrayAllFalse(arr)`: 返回数组中的所有元素是否为 `false` 的布尔值
2. `printt(...)`: 根据全局变量 `DEBUG`，在控制台或者返回参数
3. `replaceList(l, src, dst)`: 将数组 `l` 中的元素 `src` 替换为 `dst`
4. `toNoramlArray(b)`: 将参数数组 `b` 中的元素规范化为浮点数组，并返回新数组
5. `get_XMLHttpRequest()`: 根据浏览器对象创建 XMLHTTP 请求对象，根据条件返回对象或 `false`
6. `get_RemoteLoadingFile()`: 发送 AJAX 请求获取远程文件，并返回布尔值 `remote_bool`
7. `generateRandomNumbers(min, max, count)`: 生成范围在 `min` 和 `max` 之间的 `count` 个不重复的随机整数
8. `sleep(milliSeconds)`: 阻塞程序 `milliSeconds` 毫秒
9. `RanNum` 类：用于生成区间内的随机数数组，以及处理重复性和特殊配置
10. `getRanForOne()`: 生成一个区间中的随机数
11. `choices(population, weights, k)`: 对指定的对象进行加权的随机抽样
12. `choice(arr)`: 从指定的抽样对象中等概率地选择一个结果
13. `weightedRandomSampling(choices, weights, n)`: 对指定的对象进行加权的随机抽样，且结果不重复
14. `get_info_config()`: 从配置对象中获取相关设置信息
15. `in_Time(__v, forTime)`: 根据传入的参数判断是否处于指定时间范围内
16. `process_stack_over_flow()`: 处理页面中包含随机数字的 `div` 元素，以及处理特定情况下的数字替换
17. `process_runoob()`: 处理特定网站页面的内容，包括监听按钮点击事件和更新页面中的随机数字
18. `process_lddgo()`: 处理特定网站页面的内容，包括数字替换和页面更新
19. `process_online_randoms()`: 处理特定网站页面的内容，包括页面中的随机数字元素替换
20. `process_bing()`: 处理特定网站页面的内容，包括页面中的随机数字元素替换
21. `processDivContent()`: 处理页面中 `div` 元素的内容
22. `processh1Content()`: 处理页面中 `h1` 元素的内容
23. `processbContent()`: 处理页面中 `b` 元素的内容
24. `checkOccurrence(array, element)`: 检查指定元素在数组中的出现次数
25. `process_rapidtables()`: 处理特定网站页面的内容，包括处理输入框的值和数字替换
26. `processTextarea()`: 处理页面中的文本输入框内容
27. `defaultProcess()`: 调用其他处理函数，处理 `h1`，`b`，`div` 元素内容

##### 数据更新和获取函数
- `get_RemoteLoadingFile()`: 用于通过 AJAX 请求获取远程文件
- `get_XMLHttpRequest()`: 创建 XMLHTTP 请求对象
- `get_info_config()`: 用于获取相关设置信息

##### 其他
还有一些辅助函数和一些特定条件下的处理函数，例如在特定网站页面上的处理和特定时间段内的处理。



#### 来自Claude-sonnet的代码解释

1. `isArrayAllFalse(arr)` 这个函数用于判断数组中的所有元素是否都为false。它使用了数组的every方法来遍历数组中的每个元素,如果有任何一个元素不为false,则返回false,否则返回true。
2. `printt(...args)` 这是一个打印输出函数,如果DEBUG为真,则打印输出传入的参数,否则直接返回参数。
3. `replaceList(l, src, dst)` 这个函数用于替换数组l中所有的src元素为dst元素,使用了数组的map方法。
4. `toNoramlArray(b)` 这个函数将一个字符串数组转换为数字数组。它首先给数组添加一个空格和0,然后遍历数组,如果元素可以转换为数字,则将其push到一个新数组中,否则新建一个数组,这样可以把连续的数字字符串拆分并转换为数字。
5. `get_XMLHttpRequest()` 这个函数返回一个XMLHttpRequest对象实例,用于发送HTTP请求。首先尝试使用原生的XMLHttpRequest,如果浏览器不支持则尝试使用ActiveXObject对象创建。
6. `get_RemoteLoadingFile()` 这个函数从远程主配置文件中获取RemoteLoadingFile的值。它使用上面的get_XMLHttpRequest函数创建一个XHR对象,然后向main_config_url发送GET请求,获取响应数据后解析JSON,最终返回RemoteLoadingFile的值。
7. `generateRandomNumbers(min, max, count)` 这个函数生成指定范围和数量的不重复随机数字,并以数组形式返回。如果count大于最大值和最小值之差加1,则抛出错误。
8. `sleep(milliSeconds)` 这是一个阻塞的sleep函数,让程序休眠指定的毫秒数。
9. `sleep2(delay)` 这是一个非阻塞的sleep函数,使用Promise实现异步延时。
10. `choices(population, weights, k)` 根据权重从给定的population数组中有放回地选取k个元素。
11. `choice(arr)` 从给定数组arr中等概率随机选取一个元素。
12. `weightedRandomSampling(choices, weights, n)` 根据权重从给定的choices数组中无放回地选取n个元素。
13. `get_info_config()` 返回一些配置数据,包括排除数字、权重设置等。
14. `in_Time` 根据给定的时间范围判断当前时间是否在该范围内。
##### `RanNum类:`
构造函数初始化了一些配置参数
1. `removeDuplicate` 去重数组
2. `generateArray` 生成指定范围的数组
3. `verfity` 验证生成的随机数是否满足要求
4. `getRandomArrayElements` 从数组中随机取count个元素
5. `make` 生成初步的随机数数组
6. `funny` 在make的基础上,尝试插入"有趣数对"
7. `toString` 属性获取格式化后的随机数字符串输出
8. `print` 直接控制台打印随机数
9. `getRanForOne()` 使用RanNum类生成一个0到52之间的随机数。
##### 页面处理函数:
1. `process_stack_over_flow` 在stackoverflow页面上的某个div插入随机数
2. `process_runoob` 在runoob页面上插入随机数,如果res.fun.enable为true且有特殊数对出现,则将其中一个替换为另一个
3. `process_lddgo` 在lddgo页面上插入随机数,与process_runoob类似,都尝试将某些特定数字插入其中
4. `...` 

#### 以前的解释
1. `backgrong.js`
  这段代码是Chrome或Edge浏览器扩展中使用的监听器，用于在浏览器页面加载完成时执行特定的操作。使用了 chrome.webNavigation.onCompleted.addListener() 方法来监听页面加载完成的事件，并在事件触发时执行回调函数。具体功能如下：
    - 当网页加载完成时（即 onCompleted 事件触发），触发一个函数，该函数接受一个 details 参数，其中包含有关已完成导航的详细信息。在这个监听器中，使用 chrome.tabs.executeScript() 方法，通过 details.tabId 指定的标签页执行一个内容脚本（`main.js` 文件）。
    - { url: [{ schemes: ["http", "https"] }] } 是一个可选的对象，定义了监听的 URL 规则。在这种情况下，它指定了当页面加载的 URL 使用了 HTTP 或 HTTPS 协议时才会触发这个监听器。
    - 总体来说，这段代码的作用是在浏览器中监控 HTTP 和 HTTPS 页面加载完成事件，并在这些页面加载完成后，在特定标签页中执行名为 `main.js` 的内容脚本。这种机制通常用于扩展或插件在特定网页上执行自定义操作或注入特定的 JavaScript 代码。

2. `contenScript.js`功能：
该脚本文件需要`ran.js`中的一些方法或对象进行随机数抽取、包含权重的随机数抽取
  - 时间表和任务定义：
定义了一个时间表 `onclass`，其中包含了一天中的多个时间段。
有一个任务对象 `tasks`，其中包含了一些任务及其执行要求、任务日期。
  - 条件判断和任务获取：
通过当前时间与时间表中的时间段比较，确定当前是否可以执行任务。若可以执行任务，便从任务对象中获取相应的任务执行要求（只要当天在任务对象中有指定任务，否则不会有任何特殊任务），包括需要生成的随机数原始序列、随机数生成权重、执行次数等。
  - 页面处理函数：
包含了一系列用于处理网页内容的函数，这些函数根据特定条件修改页面上的内容，例如替换随机数、修改特定元素的文本等。
  - 页面内容处理：
根据不同的页面和条件，在特定的页面上执行相应的处理操作，例如在某个网站上生成随机数、替换特定数字，在某个网站上重定向等。
  - 监听页面变化：
使用 `MutationObserver` 监听页面内容的变化，当页面内容发生改变时，触发相应的处理函数。
  - 自动化执行：
在页面加载完成后和一定时间间隔内，持续地执行特定的处理函数，根据条件自动在页面上进行内容修改和操作。
  * 总体来说，`contentScript.js`的主要作用是根据预设条件，在特定的网页上自动执行特定的任务，可能包括修改页面上的数字、文本或其他元素。`contentScript.js`用于自动化操作特定网页、生成随机数或对特定网站进行特定操作的脚本。

3. `ini.js`
定义了一些基本配置，用于`ran.js`中的`RanNum`对象。
  - `no`: 包含一个数字 17，可能表示需要排除的数字或不希望在结果中出现的特定数字。
  - `maxnum`: 设置为 19，可能表示生成的随机数数组的最大长度，在某些页面中若生成超过该长度的随机数数组，可能会占用大量内存资源，并且生成缓慢。
  - `hate`: 一个对象，其中列出了一些数字作为键，对应的值是另外一些数字，这些键对应的值表示在随机数生成原始序列中键值的数量，前提是该键值在随机数生成范围中（如42:8，若随机数原始序列是1~50间的所有整数，42在1~50这个范围之间，首先会生成1~50间所有整数的数组[，然后去除数字17（特定条件下）]，由于该数组中元素42的数量是1，所以会再向该数组中添加7个元素42）。
  - `fun`: 一个包含了一些具有特定规则的子对象的对象。定义了娱乐环节的规则，娱乐环节是若生成随机数的数量大于2，那么进行随机数抽取，随机数抽取的范围是下面的range，若抽出来的数字是group（里面的对象的键值是一对情侣的分别持有的号码）中某个键值的key值，那么该键值就会被塞进随机数生成结果中，实现博人一笑的环节。其中包含以下属性：
    - `enable`: 一个布尔值，表示是否启用了一些有趣或特殊的规则。
    - `range`: 一个数组 [1, 10]，。
    - `group`: 一个包含了多个键值对的对象，表示不同的组合规则。每个键是一种数字组合的形式（如 3+13），对应的值是一个包含了 enable 和 key 的对象。其中：
      - `enable`: 一个布尔值，表示是否启用了这种组合规则。
      - `key`: 一个数字，表示某种特殊的组合情况的标识。
  - 总的来说，这个对象 `res` 是一个配置对象，其中包含了一些数字和特定规则的定义，用于指导RanNum随机数生成或抽样的过程，以确保生成的结果符合预期的规则和条件。

4. `ran.js`功能
  - 函数`generateRandomNumbers(min, max, count)`:
根据给定的范围 min 和 max，生成 count 个不重复的随机整数。
  - 函数`sleep(milliSeconds)`:
通过占用 CPU 时间来实现延迟的函数，暂停程序执行指定的时间（以毫秒为单位）。
  - 对象`RanNum 类`:
用于生成随机数的类，根据给定的参数和规则生成随机数列表。
提供了一系列方法：
    - `make()`: 生成随机数列表。
    - `funny(lis)`: 根据特定的规则对生成的随机数列表进行调整，使其满足一定条件。
    - `value`: 获取生成的随机数列表。
    - `toString`: 获取生成的随机数列表并以字符串形式返回，若要求生成随机数的长度大于`ini.js`中`res`对象的`maxnum`，会有提示，在实际网页中多用该属性而不是`value`属性。
    - `print()`: 打印生成的随机数列表。
  - 其他辅助函数:
    - `getRanForOne()`: 返回一个介于 0 到 52 之间的随机整数。
    - `choices(population, weights, k)`: 根据权重从给定的选项中进行随机抽样，抽取 k 个样本。
    - `choice(arr)`: 从给定的数组中随机选择一个元素返回。
    - `weightedRandomSampling(choices, weights, n)`: 基于权重进行随机抽样，抽取 n 个样本，确保抽取结果不重复。
  - 总的来说，`ran.js`中的这些函数和类提供了在 JavaScript 中进行随机数生成和抽样操作的功能，可以根据特定需求生成随机数列表，或者从一组选项中按照一定的规则进行随机抽样。

