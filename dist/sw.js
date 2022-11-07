

if (!self.define) {
  let e,
    s = {};
  const a = (a, f) => (
    (a = new URL(a + ".js", f).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (f, i) => {
    const d =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[d]) return;
    let r = {};
    const c = (e) => a(e, d),
      b = { module: { uri: d }, exports: r, require: c };
    s[d] = Promise.all(f.map((e) => b[e] || c(e))).then((e) => (i(...e), r));
  };
}
define(["./workbox-d59fafbc"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "assets/1.0b564f8a.jpg",
          revision: "4bfa2b5b297aef69bf7e9963af3ee3e1",
        },
        {
          url: "assets/1.4fcf4b82.jpg",
          revision: "30053f15132380a519d90f375ac2fe7d",
        },
        {
          url: "assets/2.3ae27348.jpg",
          revision: "2639a51a123e48763d8f43548580dbc4",
        },
        {
          url: "assets/2.53836a1b.jpg",
          revision: "09357fb4d05ae7e9525672be23498bb2",
        },
        {
          url: "assets/3.b39b35ff.jpg",
          revision: "206ef46916661ad1a57561e2ec6b57a5",
        },
        {
          url: "assets/3.e368d92d.jpg",
          revision: "b0cb782717e9bdf2ba40c791a3706a9d",
        },
        {
          url: "assets/4.578bf5f0.jpg",
          revision: "9f9336511f52a4065cfe08f425120a99",
        },
        {
          url: "assets/4.f7fd97e6.jpg",
          revision: "4b18a83fb7a3af63f972a4a9b54feddd",
        },
        {
          url: "assets/5.d8e80ef5.jpg",
          revision: "03a3daf49222c3e22b19de5b93a725cb",
        },
        {
          url: "assets/6.d82489dd.jpg",
          revision: "faff00748648a1b0771d40c40580c705",
        },
        {
          url: "assets/7.f0cbf39f.jpg",
          revision: "62b79e7a481a4d44c2acdcd6f576637e",
        },
        {
          url: "assets/about.2902eb71.jpg",
          revision: "dd67ee22b0af599cee125a563896fd1d",
        },
        {
          url: "assets/balchhiLogo1.f3e8fc1e.png",
          revision: "ff7ca023b9696a0d8c8c08baa411fd44",
        },
        {
          url: "assets/bhinaju.c7439302.jpg",
          revision: "6b22d8c5770e4c3c8893c73d7b9a8ab0",
        },
        {
          url: "assets/bijayneupanedai.205516d4.jpg",
          revision: "4fd0fe1f53949a7d0e8a5806c7a1b864",
        },
        {
          url: "assets/five.d0d48324.jpg",
          revision: "6885a0fa2fd08f2b97d271a0948ca805",
        },
        {
          url: "assets/four.3ed9a53f.jpg",
          revision: "74d53de526a7a377c8faf6740a4c8d4c",
        },
        {
          url: "assets/gaire.bc15f43b.jpg",
          revision: "99d71a26304815d4b41241c91d5fea3c",
        },
        {
          url: "assets/hero1.6036e8c7.jpg",
          revision: "96b7a0899dd34728edf4666d59b7e1d3",
        },
        {
          url: "assets/index.73084132.js",
          revision: "6abcc3602de6cb019bd4d050414b8531",
        },
        {
          url: "assets/index.ed38176d.css",
          revision: "96129be795fe14757fa833fd6c5b1083",
        },
        {
          url: "assets/laxman.686147da.jpg",
          revision: "36e74fe8ebe9733af62b724ba76f89d3",
        },
        {
          url: "assets/notf.b22843f0.png",
          revision: "cae48d3a6be53cf54c3fbdca78eb493a",
        },
        {
          url: "assets/one.4ba32897.jpg",
          revision: "115babb68557418b9030034b2dc1f325",
        },
        {
          url: "assets/riwaj.c8fb9efd.jpg",
          revision: "892353e388da7ffccf3995f37d5266c9",
        },
        {
          url: "assets/seven.74571581.jpg",
          revision: "40b7e548a392473f2d8875b88d11412a",
        },
        {
          url: "assets/six.a953940e.jpg",
          revision: "e2aece11916b232f4ea54b3ba0c70ddf",
        },
        {
          url: "assets/three.5dea9875.jpg",
          revision: "9dff7256b19a19a79cfbe8cf6612a51f",
        },
        {
          url: "assets/two.186968f0.jpg",
          revision: "b3c86c91884a9076eea8ca9a55346d75",
        },
        {
          url: "assets/web-vitals.67dce932.js",
          revision: "735d0bfc8c8cbf14c6d01e112fe96052",
        },
        {
          url: "balchhiLogo.jpg",
          revision: "f22b68a46457fefe478ed35c18f3cb99",
        },
        { url: "favicon.ico", revision: "fde6087b57c4dd2e850fac6ab205f9d4" },
        { url: "index.html", revision: "f3e4b430ed2d0f641e15ec570182c334" },
        { url: "logo192.png", revision: "33dbdd0177549353eeeb785d02c294af" },
        { url: "logo512.png", revision: "917515db74ea8d1aee6a246cfbcc0b45" },
        { url: "manifest.json", revision: "3719df5f4611d5c73c26febc33acf1a7" },
        { url: "offline.html", revision: "30c72643fbaa832bccc4cee9ef89a5f4" },
        { url: "robots.txt", revision: "fa1ded1ed7c11438a9b0385b1e112850" },
        {
          url: "serviceWorker.js",
          revision: "8aa4277f1ad114a8975f41582f8897b2",
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});


//# sourceMappingURL=sw.js.map
