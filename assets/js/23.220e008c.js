(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{239:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844904070805716999",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js stream 系列（一）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844904078363852807#heading-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js Stream 系列（二）—— 暂停与流动模式"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("流是可读的，也是可写的，或者可读又可写的。所有的流都是 EventEmitter 的实例。在 Node.js 中有许多流，可读流（Writable）、可写流（Readable）、双工流（Duplex），还有转换流（Transform）。")]),t._v(" "),a("p",[t._v("双工流是可读又可写的流，而转换流是可以在读写过程中修改数据的双工流。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("调用 fs.createWritableStream 传入目标写入路径后，Node.js 给我们返回了可写流的实例，这个实例不仅继承可写流，也继承 EventEmitter。")]),t._v(" "),t._m(4),a("p",[t._v("Writable 和 EventEmitter 拥有的方法，它也有，一个也不少。我们调用 writable.write 写入数据，调用 writable.end 通知流对象，我们已经没有任何其他写入数据")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("进程 I/O 同样也是 Writable 和 EventEmitter 的实例。在 node.js 中 console.log 内部就是由 process.stdout 实现的。对应 console.error 内部就是由 process.stderr 实现的")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("我们在可写流中了解了 process.stdout。而 process.stdin 是可读流，因此我们可以结合两者。代码示例如下（process.js）：")]),t._v(" "),t._m(10),a("p",[t._v("复制代码运行此行代码，我们的好朋友控制台，就变成了一台复读机")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("客户端的 HTTP 响应，服务器的 HTTP 请求是可读流。然后客户端的 HTTP 请求、服务器的 HTTP 响应是可写流。")]),t._v(" "),a("p",[t._v("可写流有 write、end 方法用来写入数据。可读流有 pipe 方法用来消费数据。")]),t._v(" "),a("p",[t._v("我们可以记住以下这个简单公式：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("在 Node.js 中，I/O都是异步的，所以在和硬盘以及网络的交互过程中会涉及到传递回调函数的过程。比如我们在服务器端，响应请求并读取返回文件，我们很有可能使用 fs.readFile(path, callback) 方式。但是在大量高并发请求到来时，尤其是读完的文件目标体积很大时，此时将会消耗大量的内存，从而造成用户连接缓慢的问题。\n既然如上文所介绍，req、res 都是流对象，我们就可以使用 fs.createReadStream(path) 得到一个文件可读流对象，然后 rs.pipe(res) 即可。\n这样，文件数据就可以一小块一小块的传输过去，客户端连接也会更快，服务器压力也会更小。当然使用 pipe，还有很多很多优势，比如流的背压自动控制，组合其他流模块等等。")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[this._v("#")]),this._v(" NodeJS")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"stream-流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stream-流"}},[this._v("#")]),this._v(" Stream 流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-可读流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-可读流"}},[this._v("#")]),this._v(" 1. 可读流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"fs-createwritablestream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-createwritablestream"}},[this._v("#")]),this._v(" fs.createWritableStream")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stream'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" events "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'events'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ws "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Writable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ws "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventEmitter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"process-stdout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-stdout"}},[this._v("#")]),this._v(" process.stdout")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-可读流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-可读流"}},[this._v("#")]),this._v(" 2. 可读流")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"fs-createreadstream"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-createreadstream"}},[this._v("#")]),this._v(" fs.createReadStream")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sentence "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chunk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sentence "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" chunk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nrs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sentence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"process-stdin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-stdin"}},[this._v("#")]),this._v(" process.stdin")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[this._v("#")]),this._v(" http")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("readableStreamSrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("writableStreamDest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"主动（拉）和被动模式（推）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主动（拉）和被动模式（推）"}},[this._v("#")]),this._v(" 主动（拉）和被动模式（推）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_1-“拉”模型-流的暂停模式（paused）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-“拉”模型-流的暂停模式（paused）"}},[this._v("#")]),this._v(" 1. “拉”模型 - 流的暂停模式（paused）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);s.default=n.exports}}]);