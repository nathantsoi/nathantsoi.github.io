/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal=function(){"use strict";function e(e){if(t(),!at.transforms2d&&!at.transforms3d)return void document.body.setAttribute("class","no-transforms");window.addEventListener("load",x,!1);var r=Reveal.getQueryHash();"undefined"!=typeof r.dependencies&&delete r.dependencies,d(Je,e),d(Je,r),m(),n()}function t(){at.transforms3d="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,at.transforms2d="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,at.requestAnimationFrameMethod=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,at.requestAnimationFrame="function"==typeof at.requestAnimationFrameMethod,at.canvas=!!document.createElement("canvas").getContext,$e=navigator.userAgent.match(/(iphone|ipod|android)/gi)}function n(){function e(){a.length&&head.js.apply(null,a),r()}function t(t){head.ready(t.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],function(){"function"==typeof t.callback&&t.callback.apply(this),0===--o&&e()})}for(var n=[],a=[],o=0,i=0,s=Je.dependencies.length;s>i;i++){var c=Je.dependencies[i];(!c.condition||c.condition())&&(c.async?a.push(c.src):n.push(c.src),t(c))}n.length?(o=n.length,head.js.apply(null,n)):e()}function r(){a(),X(),s(),ne(),V(!0),setTimeout(function(){rt.slides.classList.remove("no-transition"),et=!0,y("ready",{indexh:Xe,indexv:Ue,currentSlide:je})},1)}function a(){rt.theme=document.querySelector("#theme"),rt.wrapper=document.querySelector(".reveal"),rt.slides=document.querySelector(".reveal .slides"),rt.slides.classList.add("no-transition"),rt.background=o(rt.wrapper,"div","backgrounds",null),rt.progress=o(rt.wrapper,"div","progress","<span></span>"),rt.progressbar=rt.progress.querySelector("span"),o(rt.wrapper,"aside","controls",'<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),rt.slideNumber=o(rt.wrapper,"div","slide-number",""),o(rt.wrapper,"div","state-background",null),o(rt.wrapper,"div","pause-overlay",null),rt.controls=document.querySelector(".reveal .controls"),rt.controlsLeft=u(document.querySelectorAll(".navigate-left")),rt.controlsRight=u(document.querySelectorAll(".navigate-right")),rt.controlsUp=u(document.querySelectorAll(".navigate-up")),rt.controlsDown=u(document.querySelectorAll(".navigate-down")),rt.controlsPrev=u(document.querySelectorAll(".navigate-prev")),rt.controlsNext=u(document.querySelectorAll(".navigate-next"))}function o(e,t,n,r){var a=e.querySelector("."+n);return a||(a=document.createElement(t),a.classList.add(n),null!==r&&(a.innerHTML=r),e.appendChild(a)),a}function i(){function e(e,t){var n={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundColor:e.getAttribute("data-background-color"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition")},r=document.createElement("div");return r.className="slide-background",n.background&&(/^(http|file|\/\/)/gi.test(n.background)||/\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test(n.background)?r.style.backgroundImage="url("+n.background+")":r.style.background=n.background),(n.background||n.backgroundColor||n.backgroundImage)&&r.setAttribute("data-background-hash",n.background+n.backgroundSize+n.backgroundImage+n.backgroundColor+n.backgroundRepeat+n.backgroundPosition+n.backgroundTransition),n.backgroundSize&&(r.style.backgroundSize=n.backgroundSize),n.backgroundImage&&(r.style.backgroundImage='url("'+n.backgroundImage+'")'),n.backgroundColor&&(r.style.backgroundColor=n.backgroundColor),n.backgroundRepeat&&(r.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(r.style.backgroundPosition=n.backgroundPosition),n.backgroundTransition&&r.setAttribute("data-background-transition",n.backgroundTransition),t.appendChild(r),r}g()&&document.body.classList.add("print-pdf"),rt.background.innerHTML="",rt.background.classList.add("no-transition"),u(document.querySelectorAll(Qe)).forEach(function(t){var n;n=g()?e(t,t):e(t,rt.background),u(t.querySelectorAll("section")).forEach(function(t){g()?e(t,t):e(t,n)})}),Je.parallaxBackgroundImage?(rt.background.style.backgroundImage='url("'+Je.parallaxBackgroundImage+'")',rt.background.style.backgroundSize=Je.parallaxBackgroundSize,setTimeout(function(){rt.wrapper.classList.add("has-parallax-background")},1)):(rt.background.style.backgroundImage="",rt.wrapper.classList.remove("has-parallax-background"))}function s(e){var t=document.querySelectorAll(Ve).length;if(rt.wrapper.classList.remove(Je.transition),"object"==typeof e&&d(Je,e),at.transforms3d===!1&&(Je.transition="linear"),rt.wrapper.classList.add(Je.transition),rt.wrapper.setAttribute("data-transition-speed",Je.transitionSpeed),rt.wrapper.setAttribute("data-background-transition",Je.backgroundTransition),rt.controls.style.display=Je.controls?"block":"none",rt.progress.style.display=Je.progress?"block":"none",Je.rtl?rt.wrapper.classList.add("rtl"):rt.wrapper.classList.remove("rtl"),Je.center?rt.wrapper.classList.add("center"):rt.wrapper.classList.remove("center"),Je.mouseWheel?(document.addEventListener("DOMMouseScroll",qe,!1),document.addEventListener("mousewheel",qe,!1)):(document.removeEventListener("DOMMouseScroll",qe,!1),document.removeEventListener("mousewheel",qe,!1)),Je.rollingLinks?w():k(),Je.previewLinks?L():(S(),L("[data-preview-link]")),t>1&&Je.autoSlide&&Je.autoSlideStoppable&&at.canvas&&at.requestAnimationFrame?(Ke=new Ye(rt.wrapper,function(){return Math.min(Math.max((Date.now()-ft)/dt,0),1)}),Ke.on("click",We),pt=!1):Ke&&(Ke.destroy(),Ke=null),Je.theme&&rt.theme){var n=rt.theme.getAttribute("href"),r=/[^\/]*?(?=\.css)/,a=n.match(r)[0];Je.theme!==a&&(n=n.replace(r,Je.theme),rt.theme.setAttribute("href",n))}Y()}function c(){if(lt=!0,window.addEventListener("hashchange",Re,!1),window.addEventListener("resize",He,!1),Je.touch&&(rt.wrapper.addEventListener("touchstart",ke,!1),rt.wrapper.addEventListener("touchmove",Le,!1),rt.wrapper.addEventListener("touchend",Se,!1),window.navigator.msPointerEnabled&&(rt.wrapper.addEventListener("MSPointerDown",Ee,!1),rt.wrapper.addEventListener("MSPointerMove",Ae,!1),rt.wrapper.addEventListener("MSPointerUp",xe,!1))),Je.keyboard&&document.addEventListener("keydown",we,!1),Je.progress&&rt.progress&&rt.progress.addEventListener("click",Me,!1),Je.focusBodyOnPageVisiblityChange){var e;"hidden"in document?e="visibilitychange":"msHidden"in document?e="msvisibilitychange":"webkitHidden"in document&&(e="webkitvisibilitychange"),e&&document.addEventListener(e,Oe,!1)}["touchstart","click"].forEach(function(e){rt.controlsLeft.forEach(function(t){t.addEventListener(e,Te,!1)}),rt.controlsRight.forEach(function(t){t.addEventListener(e,Pe,!1)}),rt.controlsUp.forEach(function(t){t.addEventListener(e,Ne,!1)}),rt.controlsDown.forEach(function(t){t.addEventListener(e,Ie,!1)}),rt.controlsPrev.forEach(function(t){t.addEventListener(e,Ce,!1)}),rt.controlsNext.forEach(function(t){t.addEventListener(e,De,!1)})})}function l(){lt=!1,document.removeEventListener("keydown",we,!1),window.removeEventListener("hashchange",Re,!1),window.removeEventListener("resize",He,!1),rt.wrapper.removeEventListener("touchstart",ke,!1),rt.wrapper.removeEventListener("touchmove",Le,!1),rt.wrapper.removeEventListener("touchend",Se,!1),window.navigator.msPointerEnabled&&(rt.wrapper.removeEventListener("MSPointerDown",Ee,!1),rt.wrapper.removeEventListener("MSPointerMove",Ae,!1),rt.wrapper.removeEventListener("MSPointerUp",xe,!1)),Je.progress&&rt.progress&&rt.progress.removeEventListener("click",Me,!1),["touchstart","click"].forEach(function(e){rt.controlsLeft.forEach(function(t){t.removeEventListener(e,Te,!1)}),rt.controlsRight.forEach(function(t){t.removeEventListener(e,Pe,!1)}),rt.controlsUp.forEach(function(t){t.removeEventListener(e,Ne,!1)}),rt.controlsDown.forEach(function(t){t.removeEventListener(e,Ie,!1)}),rt.controlsPrev.forEach(function(t){t.removeEventListener(e,Ce,!1)}),rt.controlsNext.forEach(function(t){t.removeEventListener(e,De,!1)})})}function d(e,t){for(var n in t)e[n]=t[n]}function u(e){return Array.prototype.slice.call(e)}function f(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function p(e,t){e.style.WebkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function v(e){var t=0;if(e){var n=0;u(e.childNodes).forEach(function(e){"number"==typeof e.offsetTop&&e.style&&("absolute"===e.style.position&&(n+=1),t=Math.max(t,e.offsetTop+e.offsetHeight))}),0===n&&(t=e.offsetHeight)}return t}function h(e,t){if(t=t||0,e){var n=e.parentNode,r=n.childNodes;u(r).forEach(function(n){if("number"==typeof n.offsetHeight&&n!==e){var r=window.getComputedStyle(n),a=parseInt(r.marginTop,10),o=parseInt(r.marginBottom,10);t-=n.offsetHeight+a+o}});var a=window.getComputedStyle(e);t-=parseInt(a.marginTop,10)+parseInt(a.marginBottom,10)}return t}function g(){return/print-pdf/gi.test(window.location.search)}function m(){Je.hideAddressBar&&$e&&(window.addEventListener("load",b,!1),window.addEventListener("orientationchange",b,!1))}function b(){setTimeout(function(){window.scrollTo(0,1)},10)}function y(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),d(n,t),rt.wrapper.dispatchEvent(n)}function w(){if(at.transforms3d&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(Ve+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(r.textContent&&!r.querySelector("*")&&(!r.className||!r.classList.contains(r,"roll"))){var a=document.createElement("span");a.setAttribute("data-title",r.text),a.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(a)}}}function k(){for(var e=document.querySelectorAll(Ve+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],a=r.querySelector("span");a&&(r.classList.remove("roll"),r.innerHTML=a.innerHTML)}}function L(e){var t=u(document.querySelectorAll(e?e:"a"));t.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",Fe,!1)})}function S(){var e=u(document.querySelectorAll("a"));e.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",Fe,!1)})}function E(e){A(),rt.preview=document.createElement("div"),rt.preview.classList.add("preview-link-overlay"),rt.wrapper.appendChild(rt.preview),rt.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+e+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+e+'"></iframe>',"</div>"].join(""),rt.preview.querySelector("iframe").addEventListener("load",function(e){rt.preview.classList.add("loaded")},!1),rt.preview.querySelector(".close").addEventListener("click",function(e){A(),e.preventDefault()},!1),rt.preview.querySelector(".external").addEventListener("click",function(e){A()},!1),setTimeout(function(){rt.preview.classList.add("visible")},1)}function A(){rt.preview&&(rt.preview.setAttribute("src",""),rt.preview.parentNode.removeChild(rt.preview),rt.preview=null)}function x(){if(rt.wrapper&&!g()){var e=rt.wrapper.offsetWidth,t=rt.wrapper.offsetHeight;e-=t*Je.margin,t-=t*Je.margin;var n=Je.width,r=Je.height,a=20;q(Je.width,Je.height,a),"string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),rt.slides.style.width=n+"px",rt.slides.style.height=r+"px",nt=Math.min(e/n,t/r),nt=Math.max(nt,Je.minScale),nt=Math.min(nt,Je.maxScale),"undefined"==typeof rt.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?p(rt.slides,"translate(-50%, -50%) scale("+nt+") translate(50%, 50%)"):rt.slides.style.zoom=nt;for(var o=u(document.querySelectorAll(Ve)),i=0,s=o.length;s>i;i++){var c=o[i];"none"!==c.style.display&&(Je.center||c.classList.contains("center")?c.classList.contains("stack")?c.style.top=0:c.style.top=Math.max(-(v(c)/2)-a,-r/2)+"px":c.style.top="")}_(),Q()}}function q(e,t,n){u(rt.slides.querySelectorAll("section > .stretch")).forEach(function(r){var a=h(r,t-2*n);if(/(img|video)/gi.test(r.nodeName)){var o=r.naturalWidth||r.videoWidth,i=r.naturalHeight||r.videoHeight,s=Math.min(e/o,a/i);r.style.width=o*s+"px",r.style.height=i*s+"px"}else r.style.width=e+"px",r.style.height=a+"px"})}function M(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function T(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){var t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function P(){if(Je.overview){de();var e=rt.wrapper.classList.contains("overview"),t=window.innerWidth<400?1e3:2500;rt.wrapper.classList.add("overview"),rt.wrapper.classList.remove("overview-deactivating"),clearTimeout(st),clearTimeout(ct),st=setTimeout(function(){for(var n=document.querySelectorAll(Qe),r=0,a=n.length;a>r;r++){var o=n[r],i=Je.rtl?-105:105;if(o.setAttribute("data-index-h",r),p(o,"translateZ(-"+t+"px) translate("+(r-Xe)*i+"%, 0%)"),o.classList.contains("stack"))for(var s=o.querySelectorAll("section"),c=0,l=s.length;l>c;c++){var d=r===Xe?Ue:T(o),u=s[c];u.setAttribute("data-index-h",r),u.setAttribute("data-index-v",c),p(u,"translate(0%, "+105*(c-d)+"%)"),u.addEventListener("click",ze,!0)}else o.addEventListener("click",ze,!0)}j(),x(),e||y("overviewshown",{indexh:Xe,indexv:Ue,currentSlide:je})},10)}}function N(){Je.overview&&(clearTimeout(st),clearTimeout(ct),rt.wrapper.classList.remove("overview"),rt.wrapper.classList.add("overview-deactivating"),ct=setTimeout(function(){rt.wrapper.classList.remove("overview-deactivating")},1),u(document.querySelectorAll(Ve)).forEach(function(e){p(e,""),e.removeEventListener("click",ze,!0)}),W(Xe,Ue),le(),y("overviewhidden",{indexh:Xe,indexv:Ue,currentSlide:je}))}function I(e){"boolean"==typeof e?e?P():N():C()?N():P()}function C(){return rt.wrapper.classList.contains("overview")}function D(e){return e=e?e:je,e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function R(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function H(){var e=rt.wrapper.classList.contains("paused");de(),rt.wrapper.classList.add("paused"),e===!1&&y("paused")}function O(){var e=rt.wrapper.classList.contains("paused");rt.wrapper.classList.remove("paused"),le(),e&&y("resumed")}function z(){F()?O():H()}function F(){return rt.wrapper.classList.contains("paused")}function W(e,t,n,r){Be=je;var a=document.querySelectorAll(Qe);void 0===t&&(t=T(a[e])),Be&&Be.parentNode&&Be.parentNode.classList.contains("stack")&&M(Be.parentNode,Ue);var o=tt.concat();tt.length=0;var i=Xe||0,s=Ue||0;Xe=B(Qe,void 0===e?Xe:e),Ue=B(Ze,void 0===t?Ue:t),j(),x();e:for(var c=0,l=tt.length;l>c;c++){for(var d=0;d<o.length;d++)if(o[d]===tt[c]){o.splice(d,1);continue e}document.documentElement.classList.add(tt[c]),y(tt[c])}for(;o.length;)document.documentElement.classList.remove(o.pop());C()&&P();var f=a[Xe],p=f.querySelectorAll("section");je=p[Ue]||f,"undefined"!=typeof n&&ie(n);var v=Xe!==i||Ue!==s;v?y("slidechanged",{indexh:Xe,indexv:Ue,previousSlide:Be,currentSlide:je,origin:r}):Be=null,Be&&(Be.classList.remove("present"),document.querySelector(Ge).classList.contains("present")&&setTimeout(function(){var e,t=u(document.querySelectorAll(Qe+".stack"));for(e in t)t[e]&&M(t[e],0)},0)),v&&(ee(Be),J(je)),K(),_(),V(),Q(),$(),re(),le()}function Y(){l(),c(),x(),dt=Je.autoSlide,le(),i(),U(),K(),_(),V(!0),$()}function X(){var e=u(document.querySelectorAll(Qe));e.forEach(function(e){var t=u(e.querySelectorAll("section"));t.forEach(function(e,t){t>0&&(e.classList.remove("present"),e.classList.remove("past"),e.classList.add("future"))})})}function U(){var e=u(document.querySelectorAll(Qe));e.forEach(function(e){var t=u(e.querySelectorAll("section"));t.forEach(function(e,t){oe(e.querySelectorAll(".fragment"))}),0===t.length&&oe(e.querySelectorAll(".fragment"))})}function B(e,t){var n=u(document.querySelectorAll(e)),r=n.length;if(r){Je.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var a=0;r>a;a++){var o=n[a],i=Je.rtl&&!D(o);if(o.classList.remove("past"),o.classList.remove("present"),o.classList.remove("future"),o.setAttribute("hidden",""),t>a){o.classList.add(i?"future":"past");for(var s=u(o.querySelectorAll(".fragment"));s.length;){var c=s.pop();c.classList.add("visible"),c.classList.remove("current-fragment")}}else if(a>t){o.classList.add(i?"past":"future");for(var l=u(o.querySelectorAll(".fragment.visible"));l.length;){var d=l.pop();d.classList.remove("visible"),d.classList.remove("current-fragment")}}o.querySelector("section")&&o.classList.add("stack")}n[t].classList.add("present"),n[t].removeAttribute("hidden");var f=n[t].getAttribute("data-state");f&&(tt=tt.concat(f.split(" ")))}else t=0;return t}function j(){var e,t,n=u(document.querySelectorAll(Qe)),r=n.length;if(r){var a=C()?10:Je.viewDistance;$e&&(a=C()?6:1);for(var o=0;r>o;o++){var i=n[o],s=u(i.querySelectorAll("section")),c=s.length;if(e=Math.abs((Xe-o)%(r-a))||0,i.style.display=e>a?"none":"block",c)for(var l=T(i),d=0;c>d;d++){var f=s[d];t=o===Xe?Math.abs(Ue-d):Math.abs(d-l),f.style.display=e+t>a?"none":"block"}}}}function _(){if(Je.progress&&rt.progress){var e=u(document.querySelectorAll(Qe)),t=document.querySelectorAll(Ve+":not(.stack)").length,n=0;e:for(var r=0;r<e.length;r++){for(var a=e[r],o=u(a.querySelectorAll("section")),i=0;i<o.length;i++){if(o[i].classList.contains("present"))break e;n++}if(a.classList.contains("present"))break;a.classList.contains("stack")===!1&&n++}rt.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function $(){if(Je.slideNumber&&rt.slideNumber){var e=Xe;Ue>0&&(e+=" - "+Ue),rt.slideNumber.innerHTML=e}}function K(){var e=Z(),t=G();rt.controlsLeft.concat(rt.controlsRight).concat(rt.controlsUp).concat(rt.controlsDown).concat(rt.controlsPrev).concat(rt.controlsNext).forEach(function(e){e.classList.remove("enabled"),e.classList.remove("fragmented")}),e.left&&rt.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&rt.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&rt.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&rt.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&rt.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&rt.controlsNext.forEach(function(e){e.classList.add("enabled")}),je&&(t.prev&&rt.controlsPrev.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rt.controlsNext.forEach(function(e){e.classList.add("fragmented","enabled")}),D(je)?(t.prev&&rt.controlsUp.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rt.controlsDown.forEach(function(e){e.classList.add("fragmented","enabled")})):(t.prev&&rt.controlsLeft.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&rt.controlsRight.forEach(function(e){e.classList.add("fragmented","enabled")})))}function V(e){var t=null,n=Je.rtl?"future":"past",r=Je.rtl?"past":"future";if(u(rt.background.childNodes).forEach(function(a,o){Xe>o?a.className="slide-background "+n:o>Xe?a.className="slide-background "+r:(a.className="slide-background present",t=a),(e||o===Xe)&&u(a.childNodes).forEach(function(e,n){Ue>n?e.className="slide-background past":n>Ue?e.className="slide-background future":(e.className="slide-background present",o===Xe&&(t=e))})}),t){var a=_e?_e.getAttribute("data-background-hash"):null,o=t.getAttribute("data-background-hash");o&&o===a&&t!==_e&&rt.background.classList.add("no-transition"),_e=t}setTimeout(function(){rt.background.classList.remove("no-transition")},1)}function Q(){if(Je.parallaxBackgroundImage){var e,t,n=document.querySelectorAll(Qe),r=document.querySelectorAll(Ze),a=rt.background.style.backgroundSize.split(" ");1===a.length?e=t=parseInt(a[0],10):(e=parseInt(a[0],10),t=parseInt(a[1],10));var o=rt.background.offsetWidth,i=n.length,s=-(e-o)/(i-1)*Xe,c=rt.background.offsetHeight,l=r.length,d=l>0?-(t-c)/(l-1)*Ue:0;rt.background.style.backgroundPosition=s+"px "+d+"px"}}function Z(){var e=document.querySelectorAll(Qe),t=document.querySelectorAll(Ze),n={left:Xe>0||Je.loop,right:Xe<e.length-1||Je.loop,up:Ue>0,down:Ue<t.length-1};if(Je.rtl){var r=n.left;n.left=n.right,n.right=r}return n}function G(){if(je&&Je.fragments){var e=je.querySelectorAll(".fragment"),t=je.querySelectorAll(".fragment:not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}function J(e){e&&!te()&&(u(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&e.play()}),u(e.querySelectorAll("iframe")).forEach(function(e){e.contentWindow.postMessage("slide:start","*")}),u(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function ee(e){e&&(u(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-ignore")||e.pause()}),u(e.querySelectorAll("iframe")).forEach(function(e){e.contentWindow.postMessage("slide:stop","*")}),u(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-ignore")||"function"!=typeof e.contentWindow.postMessage||e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function te(){return!!window.location.search.match(/receiver/gi)}function ne(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var a=Reveal.getIndices(r);W(a.h,a.v)}else W(Xe||0,Ue||0)}else{var o=parseInt(t[0],10)||0,i=parseInt(t[1],10)||0;(o!==Xe||i!==Ue)&&W(o,i)}}function re(e){if(Je.history)if(clearTimeout(it),"number"==typeof e)it=setTimeout(re,e);else{var t="/";je&&"string"==typeof je.getAttribute("id")?t="/"+je.getAttribute("id"):((Xe>0||Ue>0)&&(t+=Xe),Ue>0&&(t+="/"+Ue)),window.location.hash=t}}function ae(e){var t,n=Xe,r=Ue;if(e){var a=D(e),o=a?e.parentNode:e,i=u(document.querySelectorAll(Qe));n=Math.max(i.indexOf(o),0),a&&(r=Math.max(u(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&je){var s=je.querySelectorAll(".fragment").length>0;if(s){var c=je.querySelectorAll(".fragment.visible");t=c.length-1}}return{h:n,v:r,f:t}}function oe(e){e=u(e);var t=[],n=[],r=[];e.forEach(function(e,r){if(e.hasAttribute("data-fragment-index")){var a=parseInt(e.getAttribute("data-fragment-index"),10);t[a]||(t[a]=[]),t[a].push(e)}else n.push([e])}),t=t.concat(n);var a=0;return t.forEach(function(e){e.forEach(function(e){r.push(e),e.setAttribute("data-fragment-index",a)}),a++}),r}function ie(e,t){if(je&&Je.fragments){var n=oe(je.querySelectorAll(".fragment"));if(n.length){if("number"!=typeof e){var r=oe(je.querySelectorAll(".fragment.visible")).pop();e=r?parseInt(r.getAttribute("data-fragment-index")||0,10):-1}"number"==typeof t&&(e+=t);var a=[],o=[];return u(n).forEach(function(t,n){t.hasAttribute("data-fragment-index")&&(n=parseInt(t.getAttribute("data-fragment-index"),10)),e>=n?(t.classList.contains("visible")||a.push(t),t.classList.add("visible"),t.classList.remove("current-fragment"),n===e&&t.classList.add("current-fragment")):(t.classList.contains("visible")&&o.push(t),t.classList.remove("visible"),t.classList.remove("current-fragment"))}),o.length&&y("fragmenthidden",{fragment:o[0],fragments:o}),a.length&&y("fragmentshown",{fragment:a[0],fragments:a}),K(),!(!a.length&&!o.length)}}return!1}function se(){return ie(null,1)}function ce(){return ie(null,-1)}function le(){if(de(),je){var e=je.parentNode?je.parentNode.getAttribute("data-autoslide"):null,t=je.getAttribute("data-autoslide");dt=t?parseInt(t,10):e?parseInt(e,10):Je.autoSlide,u(je.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&dt&&1e3*e.duration>dt&&(dt=1e3*e.duration+1e3)}),!dt||pt||F()||C()||Reveal.isLastSlide()&&Je.loop!==!0||(ut=setTimeout(be,dt),ft=Date.now()),Ke&&Ke.setPlaying(-1!==ut)}}function de(){clearTimeout(ut),ut=-1}function ue(){pt=!0,clearTimeout(ut),Ke&&Ke.setPlaying(!1)}function fe(){pt=!1,le()}function pe(){Je.rtl?(C()||se()===!1)&&Z().left&&W(Xe+1):(C()||ce()===!1)&&Z().left&&W(Xe-1)}function ve(){Je.rtl?(C()||ce()===!1)&&Z().right&&W(Xe-1):(C()||se()===!1)&&Z().right&&W(Xe+1)}function he(){(C()||ce()===!1)&&Z().up&&W(Xe,Ue-1)}function ge(){(C()||se()===!1)&&Z().down&&W(Xe,Ue+1)}function me(){if(ce()===!1)if(Z().up)he();else{var e=document.querySelector(Qe+".past:nth-child("+Xe+")");if(e){var t=e.querySelectorAll("section").length-1||void 0,n=Xe-1;W(n,t)}}}function be(){se()===!1&&(Z().down?ge():ve()),le()}function ye(e){Je.autoSlideStoppable&&ue()}function we(e){ye(e);var t=(document.activeElement,!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable));if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){if(F()&&-1===[66,190,191].indexOf(e.keyCode))return!1;var n=!1;if("object"==typeof Je.keyboard)for(var r in Je.keyboard)if(parseInt(r,10)===e.keyCode){var a=Je.keyboard[r];"function"==typeof a?a.apply(null,[e]):"string"==typeof a&&"function"==typeof Reveal[a]&&Reveal[a].call(),n=!0}if(n===!1)switch(n=!0,e.keyCode){case 80:case 33:me();break;case 78:case 34:be();break;case 72:case 37:pe();break;case 76:case 39:ve();break;case 75:case 38:he();break;case 74:case 40:ge();break;case 36:W(0);break;case 35:W(Number.MAX_VALUE);break;case 32:C()?N():e.shiftKey?me():be();break;case 13:C()?N():n=!1;break;case 66:case 190:case 191:z();break;case 70:R();break;default:n=!1}n?e.preventDefault():27!==e.keyCode&&79!==e.keyCode||!at.transforms3d||(rt.preview?A():I(),e.preventDefault()),le()}}function ke(e){vt.startX=e.touches[0].clientX,vt.startY=e.touches[0].clientY,vt.startCount=e.touches.length,2===e.touches.length&&Je.overview&&(vt.startSpan=f({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:vt.startX,y:vt.startY}))}function Le(e){if(vt.captured)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{ye(e);var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===vt.startCount&&Je.overview){var r=f({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:vt.startX,y:vt.startY});Math.abs(vt.startSpan-r)>vt.threshold&&(vt.captured=!0,r<vt.startSpan?P():N()),e.preventDefault()}else if(1===e.touches.length&&2!==vt.startCount){var a=t-vt.startX,o=n-vt.startY;a>vt.threshold&&Math.abs(a)>Math.abs(o)?(vt.captured=!0,pe()):a<-vt.threshold&&Math.abs(a)>Math.abs(o)?(vt.captured=!0,ve()):o>vt.threshold?(vt.captured=!0,he()):o<-vt.threshold&&(vt.captured=!0,ge()),Je.embedded?(vt.captured||D(je))&&e.preventDefault():e.preventDefault()}}}function Se(e){vt.captured=!1}function Ee(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],ke(e))}function Ae(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Le(e))}function xe(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Se(e))}function qe(e){if(Date.now()-ot>600){ot=Date.now();var t=e.detail||-e.wheelDelta;t>0?be():me()}}function Me(e){ye(e),e.preventDefault();var t=u(document.querySelectorAll(Qe)).length,n=Math.floor(e.clientX/rt.wrapper.offsetWidth*t);W(n)}function Te(e){e.preventDefault(),ye(),pe()}function Pe(e){e.preventDefault(),ye(),ve()}function Ne(e){e.preventDefault(),ye(),he()}function Ie(e){e.preventDefault(),ye(),ge()}function Ce(e){e.preventDefault(),ye(),me()}function De(e){e.preventDefault(),ye(),be()}function Re(e){ne()}function He(e){x()}function Oe(e){var t=document.webkitHidden||document.msHidden||document.hidden;t===!1&&document.activeElement!==document.body&&(document.activeElement.blur(),document.body.focus())}function ze(e){if(lt&&C()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(N(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);W(n,r)}}}function Fe(e){var t=e.target.getAttribute("href");t&&(E(t),e.preventDefault())}function We(e){Reveal.isLastSlide()&&Je.loop===!1?(W(0,0),fe()):pt?fe():ue()}function Ye(e,t){this.diameter=50,this.thickness=3,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=e,this.progressCheck=t,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}var Xe,Ue,Be,je,_e,$e,Ke,Ve=".reveal .slides section",Qe=".reveal .slides>section",Ze=".reveal .slides>section.present>section",Ge=".reveal .slides>section:first-of-type",Je={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,slideNumber:!1,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,autoSlideStoppable:!0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,previewLinks:!1,focusBodyOnPageVisiblityChange:!0,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",parallaxBackgroundImage:"",parallaxBackgroundSize:"",viewDistance:3,dependencies:[]},et=!1,tt=[],nt=1,rt={},at={},ot=0,it=0,st=0,ct=0,lt=!1,dt=0,ut=0,ft=-1,pt=!1,vt={startX:0,startY:0,startSpan:0,startCount:0,captured:!1,threshold:40};return Ye.prototype.setPlaying=function(e){var t=this.playing;this.playing=e,!t&&this.playing?this.animate():this.render()},Ye.prototype.animate=function(){var e=this.progress;this.progress=this.progressCheck(),e>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&at.requestAnimationFrameMethod.call(window,this.animate.bind(this))},Ye.prototype.render=function(){var e=this.playing?this.progress:0,t=this.diameter/2-this.thickness,n=this.diameter/2,r=this.diameter/2,a=14;this.progressOffset+=.1*(1-this.progressOffset);var o=-Math.PI/2+e*(2*Math.PI),i=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,r,t+2,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,r,t,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#666",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,r,t,i,o,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-a/2,r-a/2),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,a/2-2,a),this.context.fillRect(a/2+2,0,a/2-2,a)):(this.context.beginPath(),this.context.translate(2,0),this.context.moveTo(0,0),this.context.lineTo(a-2,a/2),this.context.lineTo(0,a),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()},Ye.prototype.on=function(e,t){this.canvas.addEventListener(e,t,!1)},Ye.prototype.off=function(e,t){this.canvas.removeEventListener(e,t,!1)},Ye.prototype.destroy=function(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)},{initialize:e,configure:s,sync:Y,slide:W,left:pe,right:ve,up:he,down:ge,prev:me,next:be,navigateFragment:ie,prevFragment:ce,nextFragment:se,navigateTo:W,navigateLeft:pe,navigateRight:ve,navigateUp:he,navigateDown:ge,navigatePrev:me,navigateNext:be,layout:x,availableRoutes:Z,availableFragments:G,toggleOverview:I,togglePause:z,isOverview:C,isPaused:F,addEventListeners:c,removeEventListeners:l,getIndices:ae,getSlide:function(e,t){var n=document.querySelectorAll(Qe)[e],r=n&&n.querySelectorAll("section");return"undefined"!=typeof t?r?r[t]:void 0:n},getPreviousSlide:function(){return Be},getCurrentSlide:function(){return je},getScale:function(){return nt},getConfig:function(){return Je},getQueryHash:function(){var e={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()});for(var t in e){var n=e[t];e[t]=unescape(n),"null"===n?e[t]=null:"true"===n?e[t]=!0:"false"===n?e[t]=!1:n.match(/^\d+$/)&&(e[t]=parseFloat(n))}return e},isFirstSlide:function(){
return null==document.querySelector(Ve+".past")?!0:!1},isLastSlide:function(){return je?je.nextElementSibling?!1:D(je)&&je.parentNode.nextElementSibling?!1:!0:!1},isReady:function(){return et},addEventListener:function(e,t,n){"addEventListener"in window&&(rt.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(rt.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();