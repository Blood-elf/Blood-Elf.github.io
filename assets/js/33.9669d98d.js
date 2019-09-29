(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{146:function(s,a,t){s.exports=t.p+"assets/img/shell.1a04016e.jpg"},422:function(s,a,t){"use strict";t.r(a);var v=t(0),e=Object(v.a)({},(function(){var s=this,a=s.$createElement,v=s._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"第1章-服务端开发基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第1章-服务端开发基础","aria-hidden":"true"}},[s._v("#")]),s._v(" 第1章 服务端开发基础")]),s._v(" "),v("p",[v("strong",[s._v("学习目标")])]),s._v(" "),v("ul",[v("li",[s._v("什么是服务器")]),s._v(" "),v("li",[s._v("什么是 Web 服务器")]),s._v(" "),v("li",[s._v("IP、DNS、端口号的作用")]),s._v(" "),v("li",[s._v("命令行的使用")])]),s._v(" "),v("h2",{attrs:{id:"在浏览器输入一个地址到看到网站内容经历了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器输入一个地址到看到网站内容经历了什么","aria-hidden":"true"}},[s._v("#")]),s._v(" 在浏览器输入一个地址到看到网站内容经历了什么")]),s._v(" "),v("p",[s._v('![è®¿é®ç½ç"](../../../在职加薪课/03-01 Node.js 网络通信/docs/assets/LSBAWS_HTTP_request_response.png)')]),s._v(" "),v("ol",[v("li",[s._v("用户在浏览器地址栏中输入网站域名")]),s._v(" "),v("li",[s._v("浏览器拿到该域名自动去请求 "),v("strong",[s._v("DNS服务器查询")]),s._v(" 用户输入的域名对应的 "),v("code",[s._v("ip")]),s._v(" 地址")]),s._v(" "),v("li",[s._v("浏览器拿到 "),v("code",[s._v("ip")]),s._v(" 地址之后，通过ip地址+端口号（HTTP默认80）和服务器建立连接（通过 "),v("strong",[s._v("三次握手")]),s._v(" ）")]),s._v(" "),v("li",[s._v("三次握手建立连接成功之后")]),s._v(" "),v("li",[s._v("浏览器将用户输入的 "),v("code",[s._v("url")]),s._v(" 地址通过 "),v("code",[s._v("HTTP")]),s._v(" 协议包装成 "),v("strong",[s._v("请求报文")]),s._v(" ，然后通过 "),v("code",[s._v("Socket（服务器ip地址和端口号）")]),s._v(" 发送到服务器")]),s._v(" "),v("li",[s._v("当HTTP服务器接收到客户端浏览器发送过来的请求报文时候，按照 "),v("code",[s._v("HTTP")]),s._v(" 协议将请求报文解析出来")]),s._v(" "),v("li",[s._v("然后服务器拿到请求报文中的请求信息（例如请求路径url），做相应的业务逻辑处理操作")]),s._v(" "),v("li",[s._v("当业务逻辑处理完毕之后，服务器将要发送给客户端的数据按照 "),v("code",[s._v("HTTP")]),s._v(" 协议包装成 "),v("strong",[s._v("响应报文")])]),s._v(" "),v("li",[s._v("然后服务器将响应报文数据发送给客户端浏览器")]),s._v(" "),v("li",[s._v("当浏览器接收到服务器发送给自己的响应报文数据的时候，浏览器根据 "),v("code",[s._v("HTTP")]),s._v(" 协议将报文内容解析出来")]),s._v(" "),v("li",[s._v("浏览器拿到响应报文体中的数据开始 "),v("strong",[s._v("解析渲染html、css，执行 JavaScript")])]),s._v(" "),v("li",[s._v("如果在解析的过程（从上到下）中，发现有外链的标签（link、css、img）")]),s._v(" "),v("li",[s._v("浏览器会自动对该标签指向的 路径地址 发起新的请求，同上。")])]),s._v(" "),v("h2",{attrs:{id:"命令行基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命令行基础","aria-hidden":"true"}},[s._v("#")]),s._v(" 命令行基础")]),s._v(" "),v("blockquote",[v("p",[s._v("图形用户界面让简单的任务更容易完成，而命令行界面 使完成复杂的任务成为可能")])]),s._v(" "),v("p",[v("img",{attrs:{src:t(146),alt:"shell"}})]),s._v(" "),v("p",[s._v("当使用图形用户界面时，我们需要另一个和 shell 交互的叫做终端仿真器的程序。 在 Windows 上，一般使用操作系统自带的 "),v("code",[s._v("cmd")]),s._v(" 或者 "),v("code",[s._v("powershell")]),s._v("。 在 Linux 上，如果是图形用户界面，那么可以使用 "),v("code",[s._v("terminal")]),s._v(" 或者 "),v("code",[s._v("konsole")]),s._v("、"),v("code",[s._v("gnome-terminal")]),s._v("之类 的终端仿真器，但基本上，它们都完成同样的事情，让我们能访问 shell， 你可能会因为附加的一些花俏功能而喜欢上某个终端。")]),s._v(" "),v("p",[s._v("关于名字，如果有人提到：控制台、终端、bash、shell、terminal 等，一般都是指上面这些。")]),s._v(" "),v("p",[s._v("打开命令行")]),s._v(" "),v("ul",[v("li",[s._v("方式一：开始菜单搜索 "),v("code",[s._v("cmd")])]),s._v(" "),v("li",[s._v("方式二："),v("code",[s._v("win")]),s._v(" + "),v("code",[s._v("r")]),s._v(" 输入 "),v("code",[s._v("cmd")])])]),s._v(" "),v("p",[s._v("常用命令")]),s._v(" "),v("ul",[v("li",[s._v("pwd（print working directory）")]),s._v(" "),v("li",[s._v("cd（change directory）\n"),v("ul",[v("li",[s._v("切换到指定路径（相对路径或绝对路径）")])])]),s._v(" "),v("li",[s._v("ls（list files）\n"),v("ul",[v("li",[v("code",[s._v("ls")]),s._v(" 列出当前目录文件")]),s._v(" "),v("li",[v("code",[s._v("ls 目录路径")]),s._v(" 列出指定路径文件")]),s._v(" "),v("li",[v("code",[s._v("ls -a")]),s._v(" 列出文件并显示隐藏文件或目录")])])]),s._v(" "),v("li",[s._v("cp（copy）\n"),v("ul",[v("li",[v("code",[s._v("cp 源路径 目标路径")])]),s._v(" "),v("li",[s._v("cp 在复制目录的时候，不会复制里面的子文件或子目录")]),s._v(" "),v("li",[s._v("-r （recursive）递归复制")])])]),s._v(" "),v("li",[s._v("mv（move）：移动文件或者目录，还可以重命名文件或目录")]),s._v(" "),v("li",[s._v("mkdir（make directory）：创建目录")]),s._v(" "),v("li",[s._v("rm（remove）：删除文件或目录\n"),v("ul",[v("li",[s._v("-rf 递归删除：直接将整个目录包括里面的内容都删掉")])])]),s._v(" "),v("li",[s._v("rmdir 目录名称\n"),v("ul",[v("li",[s._v("只能删除空目录")])])]),s._v(" "),v("li",[s._v("clear：清屏")]),s._v(" "),v("li",[s._v("touch 文件名\n"),v("ul",[v("li",[s._v("根据文件名创建新的文件")])])]),s._v(" "),v("li",[s._v("cat 文件名\n"),v("ul",[v("li",[s._v("查看指定的文本文件")])])])]),s._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print working directory 打印当前工作目录")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# change directory 切换目录")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回到上一级目录")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# directory 列出当前目录列表")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出指定路径的目录列表")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" 目录路径\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# copy 拷贝")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 源 目标\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# list files 列出目录列表")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同 dir，仅适用于类 Unix 操作系统")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建目录")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件")]),s._v("\nremove\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清屏")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v("\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br"),v("span",{staticClass:"line-number"},[s._v("6")]),v("br"),v("span",{staticClass:"line-number"},[s._v("7")]),v("br"),v("span",{staticClass:"line-number"},[s._v("8")]),v("br"),v("span",{staticClass:"line-number"},[s._v("9")]),v("br"),v("span",{staticClass:"line-number"},[s._v("10")]),v("br"),v("span",{staticClass:"line-number"},[s._v("11")]),v("br"),v("span",{staticClass:"line-number"},[s._v("12")]),v("br"),v("span",{staticClass:"line-number"},[s._v("13")]),v("br"),v("span",{staticClass:"line-number"},[s._v("14")]),v("br"),v("span",{staticClass:"line-number"},[s._v("15")]),v("br"),v("span",{staticClass:"line-number"},[s._v("16")]),v("br"),v("span",{staticClass:"line-number"},[s._v("17")]),v("br"),v("span",{staticClass:"line-number"},[s._v("18")]),v("br"),v("span",{staticClass:"line-number"},[s._v("19")]),v("br"),v("span",{staticClass:"line-number"},[s._v("20")]),v("br"),v("span",{staticClass:"line-number"},[s._v("21")]),v("br"),v("span",{staticClass:"line-number"},[s._v("22")]),v("br"),v("span",{staticClass:"line-number"},[s._v("23")]),v("br"),v("span",{staticClass:"line-number"},[s._v("24")]),v("br"),v("span",{staticClass:"line-number"},[s._v("25")]),v("br"),v("span",{staticClass:"line-number"},[s._v("26")]),v("br"),v("span",{staticClass:"line-number"},[s._v("27")]),v("br"),v("span",{staticClass:"line-number"},[s._v("28")]),v("br"),v("span",{staticClass:"line-number"},[s._v("29")]),v("br"),v("span",{staticClass:"line-number"},[s._v("30")]),v("br")])]),v("p",[s._v("退出命令行")]),s._v(" "),v("ul",[v("li",[s._v("直接关闭即可")]),s._v(" "),v("li",[s._v("或者输入 "),v("code",[s._v("exit")]),s._v(" 也可以退出")])]),s._v(" "),v("p",[s._v("命令行练习")]),s._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[s._v("1. 在桌面下创建一个叫做 `itcast` 的目录\n2. 在 itcast 目录下，分别创建 `dir1` 和 `dir2` 两个子目录\n3. 复制 `code/scripts/main.js` 文件到 `itcast` 目录中\n4. 复制 `code` 目录下的 `js` 目录到 `itcast` 目录中\n5. 将 `itcast/main.js` 文件重命名为 `main-main.js`\n6. 将 `main-main.js` 文件移动到 dir1 中\n7. 将 `dir1` 中的 `main-main.js` 文件移动到 dir2 中\n8. 将 `itcast/js` 目录删除\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br"),v("span",{staticClass:"line-number"},[s._v("6")]),v("br"),v("span",{staticClass:"line-number"},[s._v("7")]),v("br"),v("span",{staticClass:"line-number"},[s._v("8")]),v("br")])]),v("p",[s._v("以后多使用，就会越用越熟。")]),s._v(" "),v("h2",{attrs:{id:"建立你的第一个网站（目标）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#建立你的第一个网站（目标）","aria-hidden":"true"}},[s._v("#")]),s._v(" 建立你的第一个网站（目标）")]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("前端开发")]),s._v("最终还是属于"),v("strong",[s._v("Web 开发")]),s._v("中的一个分支，想要成为一名合格的前端开发人员，就必须要"),v("strong",[s._v("充分理解 Web 的概念")]),s._v("。")])]),s._v(" "),v("p",[s._v("构建一个专业的网站是一项巨大的工作！对于新手我们应该从小事做起，也就是说咱们不可能立马就要求自己能够开发出跟淘宝一样的电商平台，但是对咱们来说建立一个属于自己的 Blog 网站并不难（其实再大的系统也是由一些基础功能叠加出来的），所以咱们就从这个话题开始聊。")]),s._v(" "),v("h2",{attrs:{id:"如何建立一个-blog-网站"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何建立一个-blog-网站","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何建立一个 Blog 网站")]),s._v(" "),v("blockquote",[v("p",[s._v("提问：到底什么是网站？")]),s._v(" "),v("ul",[v("li",[s._v("可以在浏览器上通过一个地址直接访问使用")]),s._v(" "),v("li",[s._v("用于提供一种（或多种）特定服务的一系列具备相关性的网页组合的整体")]),s._v(" "),v("li",[s._v("例如：博客、门户、电商、在线教育等")])])]),s._v(" "),v("p",[s._v("有了明确的目标过后，我们需要规划具体的业务方案，学习特定的技能，完成各项功能，解决各种过程中出现的问题。")]),s._v(" "),v("h3",{attrs:{id:"之前学习了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#之前学习了什么？","aria-hidden":"true"}},[s._v("#")]),s._v(" 之前学习了什么？")]),s._v(" "),v("p",[s._v("在之前的学习过程中，我们很专注，没有关心这些东西在整体中是什么角色，起到什么作用。这里我们是时候总结一下我们之前学过了的内容：")]),s._v(" "),v("ul",[v("li",[s._v("网页开发技术（硬性）\n"),v("ul",[v("li",[s._v("HTML —— 网页内容结构（GUI）")]),s._v(" "),v("li",[s._v("CSS —— 网页外观样式（GUI）")]),s._v(" "),v("li",[s._v("JavaScript —— 编程语言，可以用于调用浏览器提供的 API")]),s._v(" "),v("li",[s._v("Web APIs —— 网页交互（业务功能）DOM BOM")]),s._v(" "),v("li",[s._v("jQuery —— 糖果而已，不是必要的")])])]),s._v(" "),v("li",[s._v("编程能力 / 编程思想 / 解决问题的思路（软性）\n"),v("ul",[v("li",[s._v("我要做什么（我要得到什么），我目前有什么（我能拿到什么）")])])])]),s._v(" "),v("p",[s._v("至此，我们已经可以独立完成网页开发了，具体能完成的东西就是一个一个的网页，而且还能给这个页面加上一些动态的交互。但是这距离成为一个网站还有一些路要走。")]),s._v(" "),v("div",{staticClass:"language-flow line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-flow"}},[v("code",[s._v("webpage"),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("operation"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 网页开发\nwebsite"),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("operation"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 网站开发\napplication"),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("operation"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 应用开发\n\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("webpage")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("right"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("website")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("right"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("application\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br")])]),v("h3",{attrs:{id:"还需要学习什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#还需要学习什么？","aria-hidden":"true"}},[s._v("#")]),s._v(" 还需要学习什么？")]),s._v(" "),v("p",[s._v("想要完成完整的 Web 网站，还需要学习什么？")]),s._v(" "),v("ul",[v("li",[s._v("搭建 WEB 服务器")]),s._v(" "),v("li",[s._v("HTTP（浏览器与服务端的通讯协议）")]),s._v(" "),v("li",[s._v("服务端开发（动态网页技术）")]),s._v(" "),v("li",[s._v("数据库操作")]),s._v(" "),v("li",[s._v("AJAX（浏览器与服务端的数据交互方式）")])]),s._v(" "),v("h2",{attrs:{id:"搭建-web-服务器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搭建-web-服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 搭建 Web 服务器")]),s._v(" "),v("blockquote",[v("ul",[v("li",[s._v("服务器（提供服务）指的就是一台"),v("strong",[s._v("安装特定的软件的公共计算机")]),s._v("，用于专门用于提供特定的服务。\n"),v("ul",[v("li",[s._v("按照服务类型的不同，又划分为：Web 服务器、数据库服务器、文件服务器等等。")])])]),s._v(" "),v("li",[s._v("客户端（使用服务）指的是在一次服务过程中使用这个服务的设备（网络端点）。\n"),v("ul",[v("li",[s._v("目前咱们最常见的客户端就是浏览器")])])])])]),s._v(" "),v("p",[s._v("我们手头上的这些网页，如果想要成为一个网站，首先要完成的第一件事就是有一台公共的 Web 服务器，把这一系列的页面放到这台 Web 服务器上，让用户可以通过服务器的地址访问到这些网页。")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/web-server.png",alt:"Web Server"}})]),s._v(" "),v("blockquote",[v("p",[s._v("提问：为什么不放在我们自己电脑上呢？")])]),s._v(" "),v("p",[s._v("那么，哪里有这样的服务器呢？")]),s._v(" "),v("p",[s._v("我们手头上的电脑都可以是一台服务器，因为服务器是一个相对的概念，只要能提供服务就可以是一个服务器（提供服务的时候就是服务端，使用服务的时候就是客户端）。")]),s._v(" "),v("p",[s._v("既然服务器就是安装特定的软件的计算机，那么要让自己的成为 Web 服务器就是要安装一个 Web 服务器软件。")]),s._v(" "),v("h3",{attrs:{id:"web-服务器软件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-服务器软件","aria-hidden":"true"}},[s._v("#")]),s._v(" Web 服务器软件")]),s._v(" "),v("ul",[v("li",[s._v("Nginx ········································ 反向代理")]),s._v(" "),v("li",[s._v("Apache ····································· PHP")]),s._v(" "),v("li",[s._v("IIS ·············································· ASP.NET")]),s._v(" "),v("li",[s._v("Tomcat  ····································· Java")])]),s._v(" "),v("h3",{attrs:{id:"安装-web-服务器软件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装-web-服务器软件","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Web 服务器软件")]),s._v(" "),v("p",[s._v("这里我们选择一个比较常用的 Web 服务器软件：Apache HTTP Server。")]),s._v(" "),v("blockquote",[v("p",[s._v("如果使用的是安装版，与其他软件相同，安装无外乎就是一路点下一步，只是需要注意安装目录路径中不要有中文。")])]),s._v(" "),v("p",[s._v("由于最新的 Apache 已经不提供 Windows 的安装版本了，所以我们这里使用的是解压版。")]),s._v(" "),v("blockquote",[v("ul",[v("li",[s._v("下载地址：https://www.apachelounge.com/download/")]),s._v(" "),v("li",[s._v("使用说明：https://httpd.apache.org/docs/current/platform/windows.html")])])]),s._v(" "),v("p",[s._v("安装方式如下，先解压到纯英文路径的文件夹，然后执行以下命令：")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：需要使用管理员身份运行命令行！！！")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 Apache 解压路径中的 bin 目录")]),s._v("\n$ "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("解压目录"),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/bin\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Apache 服务，-n 参数是指定服务名称")]),s._v("\n$ httpd.exe -k "),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -n "),v("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Apache"')]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果需要卸载 Apache，可以执行以下命令")]),s._v("\n$ httpd.exe -k uninstall -n "),v("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Apache"')]),s._v("\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br"),v("span",{staticClass:"line-number"},[s._v("6")]),v("br"),v("span",{staticClass:"line-number"},[s._v("7")]),v("br")])]),v("p",[s._v("执行安装命令过后会报一个错，原因是默认的配置文件有问题，需要先调整一下配置文件 "),v("code",[s._v("conf/httpd.conf")]),s._v("，才能正常启动服务。")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1505988989079.png",alt:"1505988989079"}})]),s._v(" "),v("p",[s._v("找到 Apache 解压目录中的 conf 目录下的 httpd.conf 文件，定位到 37 行，将 "),v("code",[s._v("c:/Apache24")]),s._v(" 改为解压目录，我这里解压到路径是 "),v("code",[s._v("C:/Develop/apache")]),s._v("，所以我这里修改")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1505995465005.png",alt:"1505995465005"}})]),s._v(" "),v("p",[s._v("修改完以后，执行以下命令重新测试配置文件是否通过。")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[s._v("$ httpd.exe -t\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("这里任然报错：")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1505995651671.png",alt:"1505995651671"}})]),s._v(" "),v("p",[s._v("通过错误信息得知，这里是因为另外一个地方配置的目录不存在导致的，所以接着调整 246 行的 "),v("code",[s._v("DocumentRoot")]),s._v(" 选项：")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1505996335305.png",alt:"1505996335305"}})]),s._v(" "),v("p",[s._v("随即，我们发现这个配置文件中有很多默认配置选项中的路径都是 "),v("code",[s._v("c:/Apache24")]),s._v("，所以我们批量都修改为我们解压的目录路径。")]),s._v(" "),v("p",[s._v("然后重新执行 "),v("code",[s._v("httpd.exe -t")]),s._v(" 测试配置文件，这时候应该提示 "),v("code",[s._v("Syntax OK")]),s._v("。")]),s._v(" "),v("blockquote",[v("p",[s._v("如果有关于 "),v("code",[s._v("ServerName")]),s._v(" 的警告提示，不用管它，暂时还不会影响我们接下来的使用和操作。")])]),s._v(" "),v("p",[s._v("接着运行以下命令重新启动 Apache 服务：")]),s._v(" "),v("div",{staticClass:"language-shell line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：需要使用管理员身份运行命令行！！！")]),s._v("\n$ httpd.exe -k start -n "),v("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Apache"')]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动 Apache 服务")]),s._v("\n$ httpd.exe -k restart -n "),v("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Apache"')]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止 Apache 服务")]),s._v("\n$ httpd.exe -k stop -n "),v("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Apache"')]),s._v("\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br"),v("span",{staticClass:"line-number"},[s._v("4")]),v("br"),v("span",{staticClass:"line-number"},[s._v("5")]),v("br"),v("span",{staticClass:"line-number"},[s._v("6")]),v("br")])]),v("p",[s._v("回到浏览器中，地址栏输入：http://localhost/，回车访问，这时正常应该看到 "),v("code",[s._v("It works!")])]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1505997349857.png",alt:"1505997349857"}})]),s._v(" "),v("h3",{attrs:{id:"提供-web-服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提供-web-服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 提供 Web 服务")]),s._v(" "),v("p",[s._v("启动 Apache，让别人可以使用你机器上安装的 Apache 提供的 Web 服务，访问你机器上的网站。"),v("strong",[s._v("这种情况下你的机器就是服务器，别人的机器就是客户端")]),s._v("。")]),s._v(" "),v("p",[v("strong",[s._v("注意")]),s._v("：")]),s._v(" "),v("ul",[v("li",[s._v("确保配置文件语法检查通过")]),s._v(" "),v("li",[s._v("确保 "),v("code",[s._v("80")]),s._v(" 端口没有被其他程序占用")]),s._v(" "),v("li",[s._v("确保防火墙允许 "),v("code",[s._v("80")]),s._v(" 端口的请求，或者干脆关掉防火墙")]),s._v(" "),v("li",[s._v("如果出现 "),v("strong",[s._v("Forbidden")]),s._v(" 情况，确保配置文件 "),v("code",[s._v("httpd.conf")]),s._v(" 中 247 行（"),v("code",[s._v("DocumentRoot")]),s._v(" 之后）的 "),v("code",[s._v("Directory")]),s._v(" 配置的与 "),v("code",[s._v("DocumentRoot")]),s._v(" 路径相同")]),s._v(" "),v("li",[s._v("我们在开发阶段大多数都是自己访问自己机器上的网站，那这种情况下，我们既是服务端又是客户端。**对于新手来说，最常见的问题就是分不清楚哪是客户端应该有的，哪是服务端应该有的。**这种时候一定要保持清醒，客户端就是浏览器能看到的，代码以及 Apache 相关的文件和配置都是服务端的。")])]),s._v(" "),v("h2",{attrs:{id:"网络基础概念（必要）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络基础概念（必要）","aria-hidden":"true"}},[s._v("#")]),s._v(" 网络基础概念（必要）")]),s._v(" "),v("h3",{attrs:{id:"ip-地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址","aria-hidden":"true"}},[s._v("#")]),s._v(" IP 地址")]),s._v(" "),v("blockquote",[v("p",[s._v("Internet Protocol Address")])]),s._v(" "),v("p",[s._v("设备在某一个网络中的地址，目前最常见的格式："),v("code",[s._v("[0-255].[0-255].[0-255].[0-255]")]),s._v(" 即为四个 0-255 的数字组成。")]),s._v(" "),v("p",[s._v("作用就是标识一个网络设备（计算机、手机、电视）在"),v("strong",[s._v("某一个具体的网络")]),s._v("当中的地址。")]),s._v(" "),v("p",[s._v("127.0.0.1 是本地回环地址")]),s._v(" "),v("h4",{attrs:{id:"单个网络情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单个网络情况","aria-hidden":"true"}},[s._v("#")]),s._v(" 单个网络情况")]),s._v(" "),v("p",[s._v("在单个局域网下，结构非常简单，就是我们所连接的网络设备（网关）给我们分配了一个地址，在"),v("strong",[s._v("这个范围之内")]),s._v("我们都可以通过这个地址找到我们的这个设备。")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/single-network.png",alt:"单个局域网情况"}})]),s._v(" "),v("h4",{attrs:{id:"多个网络情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多个网络情况","aria-hidden":"true"}},[s._v("#")]),s._v(" 多个网络情况")]),s._v(" "),v("p",[s._v("但是当一个设备同时处于多个网络下（比如同时连接了有线网卡和无线网卡），就会变得稍微复杂一点：")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/multiple-network.png",alt:"multiple-network"}})]),s._v(" "),v("blockquote",[v("p",[s._v("例如：")]),s._v(" "),v("p",[s._v("小明这个同学同时报名了两个课程，在 A 班级小明是班长，所有 A 班级的同学都管他叫班长（叫班长就能找到他）。而在 B 班级小明是课代表，所有 B 班的同学都管他叫课代表（叫课代表就能找到他）。")]),s._v(" "),v("p",[s._v("同样的一个人在不同的环境有不同的身份，这些身份只有特定的环境才生效。")])]),s._v(" "),v("blockquote",[v("p",[s._v("纸上得来终觉浅，绝知此事要躬行！多尝试，多思考才能更好的理解这个问题。")])]),s._v(" "),v("h3",{attrs:{id:"域名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#域名","aria-hidden":"true"}},[s._v("#")]),s._v(" 域名")]),s._v(" "),v("p",[s._v("由于 IP 地址都是没有规律的一些数字组成的，很难被人记住，不利于传播，所以就有人想出来要给 IP 起名字（别名）。")]),s._v(" "),v("blockquote",[v("p",[s._v("域名是需要花钱注册的")])]),s._v(" "),v("h3",{attrs:{id:"dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns","aria-hidden":"true"}},[s._v("#")]),s._v(" DNS")]),s._v(" "),v("p",[s._v("通过宽带运营商提供的服务器解析一个域名背后对应的 IP，这个过程叫做 "),v("strong",[s._v("DNS 寻址")]),s._v("，帮你完成 DNS 寻址过程的服务器叫做 "),v("strong",[s._v("DNS 服务器")]),s._v("。")]),s._v(" "),v("blockquote",[v("p",[v("code",[s._v("C:\\Windows\\System32\\drivers\\etc\\hosts")]),s._v(" 文件是本机的 DNS 依据")]),s._v(" "),v("p",[v("strong",[s._v("注意")]),s._v("：")]),s._v(" "),v("ul",[v("li",[s._v("只能影响本机的 DNS 寻址")]),s._v(" "),v("li",[s._v("必须以管理员权限运行的编辑器才有权利修改 "),v("code",[s._v("hosts")]),s._v(" 文件")])])]),s._v(" "),v("h3",{attrs:{id:"端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#端口","aria-hidden":"true"}},[s._v("#")]),s._v(" 端口")]),s._v(" "),v("p",[s._v("计算机本身是一个封闭的环境，就像是一个大楼，如果需要有数据通信往来，必须有门，这个门在术语中就叫端口，每一个端口都有一个编号（0-65535）")]),s._v(" "),v("blockquote",[v("p",[s._v("可以通过 "),v("code",[s._v("netstat")]),s._v(" 监视本机端口使用情况")]),s._v(" "),v("p",[s._v("占门过程叫做监听")]),s._v(" "),v("p",[s._v("http 默认的端口 80")]),s._v(" "),v("p",[s._v("https 默认的端口是 443")])]),s._v(" "),v("h2",{attrs:{id:"请求响应流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求响应流程","aria-hidden":"true"}},[s._v("#")]),s._v(" 请求响应流程")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/http-req-res.png",alt:"HTTP请求和响应"}})]),s._v(" "),v("ol",[v("li",[s._v("用户打开浏览器")]),s._v(" "),v("li",[s._v("地址栏输入我们需要访问的网站网址（URL）")]),s._v(" "),v("li",[s._v("浏览器通过 DNS 服务器获取即将访问的网站 IP")]),s._v(" "),v("li",[s._v("浏览器发起一个对这个 IP 的请求")]),s._v(" "),v("li",[s._v("服务端接收到这个请求，进行相应的处理（如果是静态文件请求，就读取这个文件）")]),s._v(" "),v("li",[s._v("服务端将处理完的结果返回给客户端浏览器")]),s._v(" "),v("li",[s._v("浏览器将服务端返回的结果呈现到界面上")])]),s._v(" "),v("h2",{attrs:{id:"配置-apache"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置-apache","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 Apache")]),s._v(" "),v("blockquote",[v("p",[s._v("配置文档：http://httpd.apache.org/docs/current/")]),s._v(" "),v("p",[s._v("配置文件中行首的 "),v("code",[s._v("#")]),s._v(" 指的是注释")])]),s._v(" "),v("h3",{attrs:{id:"监听端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#监听端口","aria-hidden":"true"}},[s._v("#")]),s._v(" 监听端口")]),s._v(" "),v("p",[v("strong",[s._v("监听端口")]),s._v("可以随意修改为任意一个未被其他程序监听的端口，可以通过设置配置文件 "),v("code",[s._v("httpd.conf")]),s._v(" 中的 "),v("code",[s._v("Listen")]),s._v(" 指令后面的数字修改。")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1506132097583.png",alt:"1506132097583"}})]),s._v(" "),v("h3",{attrs:{id:"网站根目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网站根目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 网站根目录")]),s._v(" "),v("blockquote",[v("p",[v("strong",[s._v("网站根目录")]),s._v("就是存放我们网站文件的最顶层目录，通常 URL 中域名后面的第一个斜线对应（映射）的就是网站根目录。")]),s._v(" "),v("p",[v("strong",[s._v("注")]),s._v("：动态网站情况会比较特殊，需要单独考虑，不一定是这个规则。")]),s._v(" "),v("p",[s._v("默认文档指的是我们在在访问一个目录时（没有指定其他访问哪个文件），默认返回的文件叫做默认文档")])]),s._v(" "),v("p",[s._v("默认 Apache 的网站根目录是安装目录中的 "),v("code",[s._v("htdocs")]),s._v(" 文件夹，为了方便对网站文件的管理，一般我们会将其设置在一个自定义目录中（如果你不介意其实也无所谓）。")]),s._v(" "),v("p",[s._v("如果需要设置网站根目录，可以通过修改配置文件 "),v("code",[s._v("httpd.conf")]),s._v(" 中的网站根目录选项切换。")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1505998898900.png",alt:"1505998898900"}})]),s._v(" "),v("h3",{attrs:{id:"默认文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#默认文档","aria-hidden":"true"}},[s._v("#")]),s._v(" 默认文档")]),s._v(" "),v("blockquote",[v("p",[s._v("当客户端访问的是一个目录而不是具体文件时，服务端默认返回这个目录下的某个文档（文件），这个文档就称之为"),v("strong",[s._v("默认文档")]),s._v("。")])]),s._v(" "),v("p",[s._v("配置文件 "),v("code",[s._v("httpd.conf")]),s._v(" 的 280 行的 "),v("code",[s._v("DirectoryIndex")]),s._v("，默认文档可以配置多个（有前到后依次去找，找到为止，如果没找到任何一个则启用目录浏览）：")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1506132675132.png",alt:"1506132675132"}})]),s._v(" "),v("h3",{attrs:{id:"虚拟主机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟主机","aria-hidden":"true"}},[s._v("#")]),s._v(" 虚拟主机")]),s._v(" "),v("p",[s._v("如果一台机器上只有一个网站的话，没有任何问题，但是如果想要在一台机器上部署多个站点，就必须通过配置虚拟主机的方式解决。")]),s._v(" "),v("blockquote",[v("p",[s._v("由于后期对虚拟主机的配置操作非常常见，所以我们一般将虚拟主机的配置单独放到一个配置文件中，然后在主配置文件中引入，避免破坏主配置文件中的其他配置。")]),s._v(" "),v("p",[v("code",[s._v("Include conf/extra/httpd-vhosts.conf")]),s._v(" 配置的作用就将另外一个配置文件引入（使其生效）")])]),s._v(" "),v("p",[s._v("具体的操作方式就是在主配置文件 "),v("code",[s._v("httpd.conf")]),s._v(" 的 505 行取消注释：")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1505999461533.png",alt:"1505999461533"}})]),s._v(" "),v("p",[s._v("然后找到 Apache 的虚拟主机配置文件，添加一个如下的虚拟主机配置节点，然后重新启动 Apache。")]),s._v(" "),v("blockquote",[v("p",[s._v("这个文件中有两个默认的示例配置，可以注释掉")])]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1506136421939.png",alt:"1506136421939"}})]),s._v(" "),v("p",[s._v("如果真的要使用 "),v("code",[s._v("baixiu.com")]),s._v(" 这个域名的话，就只能通过修改 "),v("code",[s._v("hosts")]),s._v(" 文件达到目的，原因很简单：这个域名不是我们自己的，我们没有办法修改这个域名在公网上的 DNS。")]),s._v(" "),v("blockquote",[v("p",[s._v("注意：")]),s._v(" "),v("ul",[v("li",[v("p",[s._v("如果使用了虚拟主机，则默认必须全部使用虚拟主机，即之前的默认网站也必须通过虚拟主机方式配置，否则访问不到。参考：http://skypegnu1.blog.51cto.com/8991766/1532454")])]),s._v(" "),v("li",[v("p",[s._v("如果虚拟主机的端口使用的不是 "),v("code",[s._v("80")]),s._v("，则需要在主配置文件中添加一个对这个端口的监听：")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/1506001971125.png",alt:"1506001971125"}})])])])]),s._v(" "),v("h2",{attrs:{id:"静态网站与动态网站"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#静态网站与动态网站","aria-hidden":"true"}},[s._v("#")]),s._v(" 静态网站与动态网站")]),s._v(" "),v("p",[s._v("至此，我们已经可以把这些静态页面放到服务器上了，客户端也可以通过域名请求这个网站，但是对于我们来说，Apache 能够完成的事情过于简单，无外乎就是找到你请求对应的文件 → 读取文件 → 将文件内容响应给客户端浏览器（"),v("strong",[s._v("文件原封不动的给你")]),s._v("）。无法满足让网页内容动起来（动态变化）的需求。")]),s._v(" "),v("p",[s._v("于是乎，就有人提出了服务端动态网页的概念，这种实现这种概念的技术有很多种：JSP、ASP.NET、PHP、Node 等等。")]),s._v(" "),v("p",[s._v("这些技术的原理就是：不再将 HTML 固定写死，每次用户请求时，动态执行一段代码，临时生成一个用户想要的 HTML 页面。")]),s._v(" "),v("p",[v("img",{attrs:{src:"media/apache-process.png",alt:"apache-process"}})]),s._v(" "),v("p",[v("strong",[s._v("动态网站指的也就是每次请求时服务端动态生成 HTML 返回给用户的这种网站。")])]),s._v(" "),v("p",[s._v("这里我们选择 PHP 作为我们了解服务端动态网页开发的技术方案，注意：我们学习的重心不在 PHP，而是了解服务端开发，以及某些其他对前端开发有帮助的东西。")]),s._v(" "),v("h2",{attrs:{id:"作业"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作业","aria-hidden":"true"}},[s._v("#")]),s._v(" 作业")]),s._v(" "),v("ul",[v("li",[s._v("安装 Apache 并配置，确保本机可以访问。")]),s._v(" "),v("li",[s._v("同桌相互访问对方提供的 Web 服务。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);