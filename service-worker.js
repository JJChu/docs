/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "85eaa9bef04603b8fe80ffe8b895148d"
  },
  {
    "url": "assets/css/0.styles.8dc399dc.css",
    "revision": "fd5c25ac7732d7c23fee709ff3971899"
  },
  {
    "url": "assets/img/4004_instruction.fa308f7b.png",
    "revision": "fa308f7bd70668096fb81ea94818e9fc"
  },
  {
    "url": "assets/img/8_bit_adder.d247bb77.png",
    "revision": "d247bb77a238d05719c213e5114ef91f"
  },
  {
    "url": "assets/img/8_bit_register.403a02e5.png",
    "revision": "403a02e573079db72c5f567da8c95ab5"
  },
  {
    "url": "assets/img/8800.8479e6f6.png",
    "revision": "8479e6f6d36d6cab9658640e11b0a18a"
  },
  {
    "url": "assets/img/ADD.c47a5bc2.png",
    "revision": "c47a5bc2f864ed039e23a52311d4f99c"
  },
  {
    "url": "assets/img/and_gate_circle.cbab7f3e.png",
    "revision": "cbab7f3e78639a8f6d285860ff62ce85"
  },
  {
    "url": "assets/img/and_gate.9bb58e4e.png",
    "revision": "9bb58e4e912c3fa8e71d7ef4ed30809e"
  },
  {
    "url": "assets/img/and_or_latch.67f1df2d.png",
    "revision": "67f1df2dcd12bc3406f49cb876900b10"
  },
  {
    "url": "assets/img/array.12219ad1.png",
    "revision": "12219ad1970579e55843a2bcf340dec7"
  },
  {
    "url": "assets/img/CPU_4004.5cd73f33.png",
    "revision": "5cd73f3380e1a698afb9459b2b1c800a"
  },
  {
    "url": "assets/img/CPU_CACHE.365e8dd7.png",
    "revision": "365e8dd759abb382c82be6787bb3eea8"
  },
  {
    "url": "assets/img/CPU_CHIP.1ebdaa5d.png",
    "revision": "1ebdaa5d5d69f5b472ded90a29e2d898"
  },
  {
    "url": "assets/img/for_loop.2a478c99.png",
    "revision": "2a478c994202a20a968f36217e57ec97"
  },
  {
    "url": "assets/img/full_adder.703d0ba9.png",
    "revision": "703d0ba9084d6a6a851d9790a606679a"
  },
  {
    "url": "assets/img/gate_symbol.306634a4.png",
    "revision": "306634a42e31da65a898b89a286aa825"
  },
  {
    "url": "assets/img/gated_latch_zujian.b7276851.png",
    "revision": "b72768516bcf3d6404fabeb1fa2e727a"
  },
  {
    "url": "assets/img/gated_latch.fa54ce15.png",
    "revision": "fa54ce1557fc6616a49f5cca8f1841b4"
  },
  {
    "url": "assets/img/graph_search.7cb9bd2d.png",
    "revision": "7cb9bd2d86dc9d650e026f300ad12a5a"
  },
  {
    "url": "assets/img/graph_search2.445a9899.png",
    "revision": "445a9899724fdf1b8bb9fe0b4c8419e5"
  },
  {
    "url": "assets/img/half_adder_zj.e8dd8e4d.png",
    "revision": "e8dd8e4d970341924509e44422d4f389"
  },
  {
    "url": "assets/img/half_adder.e1d2ed63.png",
    "revision": "e1d2ed63a9bc664a3aa8bd31969ce154"
  },
  {
    "url": "assets/img/HMR_theory.2fe60c90.png",
    "revision": "2fe60c9091c955d7fc4f1ebfd19efa09"
  },
  {
    "url": "assets/img/if_statement.3bf1feb0.png",
    "revision": "3bf1feb0d9be9dd2a07d7d4b1b0c12d7"
  },
  {
    "url": "assets/img/instruction.a2a4a0f9.png",
    "revision": "a2a4a0f980ddbb9aa485830b2399d8d9"
  },
  {
    "url": "assets/img/is_zero.2d43badc.png",
    "revision": "2d43badc01e70cfb8b97c04da70eb3af"
  },
  {
    "url": "assets/img/language_compare.e6a1a12b.png",
    "revision": "e6a1a12be01301b2413481e357f4b175"
  },
  {
    "url": "assets/img/latch_matrix_16x16.536ee730.png",
    "revision": "536ee730b56242260f9bb60e109b9eeb"
  },
  {
    "url": "assets/img/latch_matrix_detail.d85c59ae.png",
    "revision": "d85c59aef45fdf87f1d22b2a973566bb"
  },
  {
    "url": "assets/img/linked_list.34b60a0d.png",
    "revision": "34b60a0d7d1ff41e99f92aa86b2e3412"
  },
  {
    "url": "assets/img/LOAD_A.2860bbc1.png",
    "revision": "2860bbc1f9f777366364facbf95976ff"
  },
  {
    "url": "assets/img/matrix.b3044f60.png",
    "revision": "b3044f60dfb94acb0130ba1a28c7cc6a"
  },
  {
    "url": "assets/img/momery_8x256.f1930c62.png",
    "revision": "f1930c62e1a70972d3ac0e4b5c3c1d7b"
  },
  {
    "url": "assets/img/multiplexer.4683bd78.png",
    "revision": "4683bd783f6d365371d747e18260b701"
  },
  {
    "url": "assets/img/not_gate.844c7e7a.png",
    "revision": "844c7e7a1d60bb6eaffd5778608ffe8c"
  },
  {
    "url": "assets/img/or_gate_circle.b9794655.png",
    "revision": "b979465579c581ac0b84eaeff258172a"
  },
  {
    "url": "assets/img/or_gate.5ce6cd6f.png",
    "revision": "5ce6cd6f86a03c38cb5f293d11ac6363"
  },
  {
    "url": "assets/img/order_exec.266b3801.png",
    "revision": "266b380170c7b01f50ed1857995cb8fb"
  },
  {
    "url": "assets/img/paralle_exec.a414c628.png",
    "revision": "a414c628b723ced2b8e36806cc31e07f"
  },
  {
    "url": "assets/img/parallelize.0d87878f.png",
    "revision": "0d87878f60d241a82c6be43f83afe896"
  },
  {
    "url": "assets/img/plug_boards.38b6c74b.png",
    "revision": "38b6c74b3c6d54efcf2ebfffe6987556"
  },
  {
    "url": "assets/img/punch_cards_reader.d9cbe8a1.png",
    "revision": "d9cbe8a19e588a85f675108655066b78"
  },
  {
    "url": "assets/img/punched_card.e2a526c2.png",
    "revision": "e2a526c2aebea071f7633c81e3ad67cb"
  },
  {
    "url": "assets/img/ram_8x256.3d9b93cd.png",
    "revision": "3d9b93cd2372d206e1f025623f8642bd"
  },
  {
    "url": "assets/img/ram.bc86c5e4.png",
    "revision": "bc86c5e4f86ee6ab85151f12de57b6fc"
  },
  {
    "url": "assets/img/rem_instruction.103ff838.png",
    "revision": "103ff8380fec845ae5892b0a931fa6b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/select_sort.c7ab815b.png",
    "revision": "c7ab815bd1feacda986032558a0eefb2"
  },
  {
    "url": "assets/img/string.8f9fbcf9.png",
    "revision": "8f9fbcf9ff77b62dac1c29ae63735e36"
  },
  {
    "url": "assets/img/struct.ffa31845.png",
    "revision": "ffa31845592ba7f97a4a396a38faec1b"
  },
  {
    "url": "assets/img/switch_boards.bf0af9db.png",
    "revision": "bf0af9db34b76e3b9f5956a14f16658c"
  },
  {
    "url": "assets/img/transistor.6f11f615.png",
    "revision": "6f11f615babfdc83c9c727480e5a34ea"
  },
  {
    "url": "assets/img/while_loop.09f875ce.png",
    "revision": "09f875cebe6a5d21558f033720bc60a6"
  },
  {
    "url": "assets/img/xor_gate_symbol.a18caea4.png",
    "revision": "a18caea480070196765f48888a039fd2"
  },
  {
    "url": "assets/img/xor_gate.3abe45bb.png",
    "revision": "3abe45bb92a35210a5fd1fef22d929b1"
  },
  {
    "url": "assets/js/10.f7f35acf.js",
    "revision": "1413d1f04e6c2a2f7890bd6fbd0a52a9"
  },
  {
    "url": "assets/js/11.92ae7880.js",
    "revision": "42c223f69dc4786dc4b29ec575dbdd35"
  },
  {
    "url": "assets/js/12.39d385f8.js",
    "revision": "6c9a56ae753ee44aa99c3fdeaa5791da"
  },
  {
    "url": "assets/js/13.1b11271b.js",
    "revision": "2b3c3e788f00844fb4fc6994fabd87dd"
  },
  {
    "url": "assets/js/14.b7339ca8.js",
    "revision": "eb882b464f4125a8c3edbe3e12084d19"
  },
  {
    "url": "assets/js/15.065f816d.js",
    "revision": "4efeb50ce092d50aa5b81ff69f46d0c4"
  },
  {
    "url": "assets/js/16.c997ba0b.js",
    "revision": "c7a419cd4dd110227c94ea7259801ae1"
  },
  {
    "url": "assets/js/17.cc62ae30.js",
    "revision": "4887476332b0162e374a67d599314887"
  },
  {
    "url": "assets/js/18.f421668c.js",
    "revision": "eb8abc087a8f57cd9f4cae3b49111fe6"
  },
  {
    "url": "assets/js/19.a9804918.js",
    "revision": "534f7976c36241cfb54c44595bba9b31"
  },
  {
    "url": "assets/js/2.81827272.js",
    "revision": "39913dcdf9c70c1ed8b4254aa9dca7b6"
  },
  {
    "url": "assets/js/20.02ac6e96.js",
    "revision": "d4c15b4b0062bf85b384f0e757b3e9d9"
  },
  {
    "url": "assets/js/21.62dd3c66.js",
    "revision": "3f46dd5a1a76db3e7314214f8380a48c"
  },
  {
    "url": "assets/js/22.85befead.js",
    "revision": "cbd7acb1617d500a018875ffc4c14ad4"
  },
  {
    "url": "assets/js/23.220e008c.js",
    "revision": "72a9d4889674fc8c85926ab08f491658"
  },
  {
    "url": "assets/js/24.20500c8c.js",
    "revision": "109009475deb7a2770c39ce8a924085a"
  },
  {
    "url": "assets/js/25.db4f0211.js",
    "revision": "075a00878a412effdd4c82c11c26fb1f"
  },
  {
    "url": "assets/js/26.009882d5.js",
    "revision": "f0641cb7ebb69e0777ce56174e0bfe8b"
  },
  {
    "url": "assets/js/27.31e60a6b.js",
    "revision": "bb9dc38983b3d065ed96bb373e868959"
  },
  {
    "url": "assets/js/28.893b152e.js",
    "revision": "3a6c0dfc9687c9a6b340c96d0d169edc"
  },
  {
    "url": "assets/js/29.9520e734.js",
    "revision": "d563b7741039aa79657d69e4276a6ce5"
  },
  {
    "url": "assets/js/3.502c6eb9.js",
    "revision": "ea3073a5ac5ae0dc6c80142e064e1f88"
  },
  {
    "url": "assets/js/30.97ea4106.js",
    "revision": "abb559571a4f39006c2d9b6389d08cf4"
  },
  {
    "url": "assets/js/31.8e64220c.js",
    "revision": "1238d52e52221ba61cdd536a767d500d"
  },
  {
    "url": "assets/js/32.0703a7cd.js",
    "revision": "6b23aae6bb7ebd1cbaaed6dcbf7516fb"
  },
  {
    "url": "assets/js/33.839351e2.js",
    "revision": "7ea76d2de54f038f46e274b7e2c34528"
  },
  {
    "url": "assets/js/34.2b0fc04a.js",
    "revision": "fec68402593e9c75446539f63408a6f5"
  },
  {
    "url": "assets/js/35.47adc53e.js",
    "revision": "1e1aeb45e7e7cb8c6caac7ae0bb9fcb0"
  },
  {
    "url": "assets/js/36.a7d74dd5.js",
    "revision": "dd03245862f723bcf5e23e8535e4e3a4"
  },
  {
    "url": "assets/js/37.b14e3927.js",
    "revision": "57ad5b5a30aebc4bcb739ef6b3f5efd5"
  },
  {
    "url": "assets/js/38.f7b825e8.js",
    "revision": "afe9dcd6807c3811f23f4d4e006f2495"
  },
  {
    "url": "assets/js/4.b73fe408.js",
    "revision": "d9dc1ee03de1df1ef70c0bd5a0d7929c"
  },
  {
    "url": "assets/js/5.f37bd018.js",
    "revision": "4e7163ff7c638b885874cdbf3f79ee43"
  },
  {
    "url": "assets/js/6.08d194e2.js",
    "revision": "c9b08fdabb72c42542aa637e59f003c2"
  },
  {
    "url": "assets/js/7.97b11682.js",
    "revision": "4d1182e8b384bed373bab59c26a62bb0"
  },
  {
    "url": "assets/js/8.eb55296c.js",
    "revision": "b37ce8139545da89290bed5d65ed67fb"
  },
  {
    "url": "assets/js/9.045ab69c.js",
    "revision": "3ce4fc3f3fc121af6df490e3e99b2b7c"
  },
  {
    "url": "assets/js/app.9c008995.js",
    "revision": "87ef2f126e48a1687f33bef5d1cc5885"
  },
  {
    "url": "cs/algorithm.html",
    "revision": "e56de701a622b845650d6d7e3d4f9b4c"
  },
  {
    "url": "cs/dataStruct.html",
    "revision": "d30b61c2987c7414c866e2d58d168121"
  },
  {
    "url": "cs/index.html",
    "revision": "2e4caefddbbf4098064e727ee8b3f405"
  },
  {
    "url": "cs/linux.html",
    "revision": "ead3b71df620f61fed20cfa7803a6585"
  },
  {
    "url": "cs/liunx_command.html",
    "revision": "34f294cb5b361fd13a3bb10c3dd09005"
  },
  {
    "url": "cs/math.html",
    "revision": "7f01b44fb264ec163cdfde8e3f0b2657"
  },
  {
    "url": "cs/network.html",
    "revision": "5bf3677ef442d0399ca6f1ec6423263b"
  },
  {
    "url": "cs/safe.html",
    "revision": "8a58af9f7d156246e127d4de9224d1f1"
  },
  {
    "url": "cs/shell.html",
    "revision": "67d05f94f072755db7a6a35f106574dd"
  },
  {
    "url": "fe/client.html",
    "revision": "257a63a412b1bf0057127b08ca095935"
  },
  {
    "url": "fe/css.html",
    "revision": "d3d152c4a2aacfd6d6c793b37e1cf9de"
  },
  {
    "url": "fe/index.html",
    "revision": "06679382304b27cf998188b7401f5b07"
  },
  {
    "url": "fe/js.html",
    "revision": "0e0226874f5d4740d2077919e7847251"
  },
  {
    "url": "fe/nodejs.html",
    "revision": "c6697e6886c25b8c314d5a07aeeae2fb"
  },
  {
    "url": "fe/RegEx.html",
    "revision": "933a940b709848ee48e08b9b2ca88f62"
  },
  {
    "url": "fe/tools.html",
    "revision": "f66f4d0f72dfc7ae44f861e2713125c6"
  },
  {
    "url": "index.html",
    "revision": "7fccae46ca7235dd87f06968fe039e00"
  },
  {
    "url": "logo.png",
    "revision": "0b052bd994dbadd80239243d5261e02f"
  },
  {
    "url": "note/advancedProgram.html",
    "revision": "b35e4395df590ceac1849f29dc702004"
  },
  {
    "url": "note/codeStyle.html",
    "revision": "7c3c512a3e3a7c0f166a6758721a9b09"
  },
  {
    "url": "note/designPatterns.html",
    "revision": "cb78a7164eb8902e27961f1ce5d91ef1"
  },
  {
    "url": "note/english.html",
    "revision": "d9ed031ba39e72524335a39677465a12"
  },
  {
    "url": "note/habit.html",
    "revision": "37e12fcec13a36d3338f9d7c88118a87"
  },
  {
    "url": "note/index.html",
    "revision": "08b6944f3d4e6a570f59ca4a615a3343"
  },
  {
    "url": "schedule/fe_skills.html",
    "revision": "ada918f703a19927f7aa2543a371cbd6"
  },
  {
    "url": "schedule/index.html",
    "revision": "b01d5016f17353ba3a4f6706cbcd50d5"
  },
  {
    "url": "schedule/interview.html",
    "revision": "472ef626bdd381bbf5c272ac69d5f6bc"
  },
  {
    "url": "schedule/methodology.html",
    "revision": "17d431afc3814a6c1dbc697bd877e60b"
  },
  {
    "url": "schedule/study.html",
    "revision": "b3baf65c5955c933d83bc3ee3a3ac287"
  },
  {
    "url": "tool/git.html",
    "revision": "c826de3210216a35a4a0db96cdb324df"
  },
  {
    "url": "tool/index.html",
    "revision": "86652b3a1165fbc28940ce9c88f4e272"
  },
  {
    "url": "tool/webpack.html",
    "revision": "dd5c18f137d8f7403c2666e2c98c4697"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
