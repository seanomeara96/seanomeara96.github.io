!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.slides=document.querySelectorAll(".slideshow__slide"),this.count=0,this.prev=document.querySelector(".slideshow__btn--left"),this.next=document.querySelector(".slideshow__btn--right"),this.timer,this.interval=3e3|t,this.events(),this.startSlideShow()}var t,i,n;return t=e,(i=[{key:"events",value:function(){this.prev.addEventListener("click",this.showPrevSlide.bind(this)),this.next.addEventListener("click",this.showNextSlide.bind(this))}},{key:"startSlideShow",value:function(){this.slides[this.count].classList.remove("slideshow__slide--is-hidden"),this.timer=setTimeout(this.showNextSlide.bind(this),this.interval)}},{key:"showNextSlide",value:function(){clearTimeout(this.timer),this.slides[this.count].classList.add("slideshow__slide--is-hidden"),this.count===this.slides.length-1?this.count=0:this.count++,this.slides[this.count].classList.remove("slideshow__slide--is-hidden"),this.timer=setTimeout(this.showNextSlide.bind(this),this.interval)}},{key:"showPrevSlide",value:function(){clearTimeout(this.timer),this.slides[this.count].classList.add("slideshow__slide--is-hidden"),0===this.count?this.count=this.slides.length-1:this.count--,this.slides[this.count].classList.remove("slideshow__slide--is-hidden"),this.timer=setTimeout(this.showNextSlide.bind(this),this.interval)}}])&&s(t.prototype,i),n&&s(t,n),e}())(3e3)}]);