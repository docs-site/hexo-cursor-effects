!function () {
  const t = document.getElementById("click-show-text");
  let e = null;
  if (e = null !== t.getAttribute("mobile") ? {
    mobile: t.getAttribute("mobile"),
    text: CONFIG.ClickShowText.text,
    fontSize: CONFIG.ClickShowText.fontSize,
    random: CONFIG.ClickShowText.random
  } : {
    mobile: t.getAttribute("data-mobile"),
    text: t.getAttribute("data-text"),
    fontSize: t.getAttribute("data-fontsize"),
    random: t.getAttribute("data-random")
  },
  "false" === e.mobile && /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent))
    return;
  let n = 0;
  document.body.addEventListener("click", (function (t) {
    const o = e.text.split(","), i = document.createElement("span");
    "true" === e.random ? (n = Math.floor(Math.random() * o.length), i.textContent = o[n]) : (i.textContent = o[n], n = (n + 1) % o.length);
    const a = t.pageX;
    let r = t.pageY - 20;
    i.style.cssText = ` \n      z-index: 150;
                        \n      top: ${r}px;
                        \n      left: ${a - 20}px;
                        \n      position: absolute;
                        \n      font-weight: bold;
                        \n      color: ${function () {
                                  const t = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(",");
                                  let e = "#";
                                  for (let n = 0; n < 6; n++)
                                    e += t[Math.floor(16 * Math.random())];
                                  return e
                                }()};
                        \n      cursor: default;
                        \n      font-size: ${e.fontSize || "inherit"};
                        \n      word-break: break-word;
                        \n    `,
    this.appendChild(i);
    const l = (new Date).getTime();
    let d = 1;
    window.requestAnimationFrame((function t() {
      r--,
      d -= .02,
      i.style.top = r + "px",
      i.style.opacity = d,
      (new Date).getTime() - l < 600 ? window.requestAnimationFrame(t) : i.remove()
    }
    ))
  }))
}();
