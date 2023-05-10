// https://github.com/Lete114/simple-image-preview
; (function () { var s = document.createElement('style'); s.textContent = '.sip-mask{position:fixed;top:0;left:0;width:100%;height:100%;z-index:var(--sip-z-index, 1);visibility:hidden;backdrop-filter:blur(10px);background:rgba(0,0,0,.7)}.sip-hide{visibility:hidden}.sip-cursor{cursor:zoom-in}.sip-img{cursor:zoom-out;visibility:visible;position:absolute;left:50%;top:0px;width:80%;height:100%;object-fit:contain;transition:all .3s;transform:translate(-50%)}.sip-hide-scrollbar{padding:0 var(--sip-hide-scrollbar, 0) 0 0;overflow:hidden!important}'; document.head.appendChild(s) })(); (function (n, t) { typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (n = typeof globalThis < "u" ? globalThis : n || self, n.simpleImagePreview = t()) })(this, function () { "use strict"; const n = "", t = document.documentElement, c = document.body, i = document.createElement("div"); i.classList.add("sip-mask"), c.appendChild(i); function u() { return window.innerWidth - t.clientWidth + "px" } function p(r, d) { d != null && d.zIndex && i.style.setProperty("--sip-z-index", d.zIndex), (r instanceof NodeList ? r : document.querySelectorAll(r || "img")).forEach(function (s) { s instanceof HTMLImageElement && (s.classList.add("sip-cursor"), s.addEventListener("click", function () { const l = s.getAttribute("src"); if (!l) return; t.style.setProperty("--sip-hide-scrollbar", u()), c.classList.add("sip-hide-scrollbar"), i.style.setProperty("visibility", "visible"); const e = document.createElement("img"); e.src = l; const o = s.getBoundingClientRect(), m = `position:absolute;top:${o.top}px;left:${o.left}px;width:${o.width}px;height:${o.height}px`; e.setAttribute("style", m), s.classList.add("sip-hide"), i.appendChild(e), setTimeout(() => { e.classList.add("sip-img"), e.removeAttribute("style") }), i.addEventListener("click", function () { e.setAttribute("style", `${m};transform:none`), e.addEventListener("transitionend", function () { s.classList.remove("sip-hide"), c.classList.remove("sip-hide-scrollbar"), t.style.removeProperty("--sip-hide-scrollbar"), e.remove(), i.style.removeProperty("visibility") }, { once: !0 }) }) })) }) } return p });
simpleImagePreview('.page img', { zIndex: 3 })