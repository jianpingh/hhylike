import{Y as t,q as e,aS as o,aT as r,aU as n,aV as i,P as a,aW as c,aX as s,aA as u,ay as h,$ as d,o as p,c as l,w as f,k as g,b as v,x as y,l as m,aY as b}from"./index.79254360.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";var w=void 0,C=["touchstarted","touchmoved","touchended"];function S(t){for(var e=[],o=arguments.length-1;o-- >0;)e[o]=arguments[o+1];C.forEach((function(o,r){void 0!==e[r]&&(t[o]=e[r])}))}function T(){return w||(w=t()),w}var O={},W={id:{default:"cropper",get:function(){return O.id},set:function(t){"string"!=typeof t&&console.error("id："+t+" is invalid"),O.id=t}},width:{default:750,get:function(){return O.width},set:function(t){"number"!=typeof t&&console.error("width："+t+" is invalid"),O.width=t}},height:{default:750,get:function(){return O.height},set:function(t){"number"!=typeof t&&console.error("height："+t+" is invalid"),O.height=t}},pixelRatio:{default:T().pixelRatio,get:function(){return O.pixelRatio},set:function(t){"number"!=typeof t&&console.error("pixelRatio："+t+" is invalid"),O.pixelRatio=t}},scale:{default:2.5,get:function(){return O.scale},set:function(t){"number"!=typeof t&&console.error("scale："+t+" is invalid"),O.scale=t}},zoom:{default:5,get:function(){return O.zoom},set:function(t){"number"!=typeof t?console.error("zoom："+t+" is invalid"):(t<0||t>10)&&console.error("zoom should be ranged in 0 ~ 10"),O.zoom=t}},src:{default:"",get:function(){return O.src},set:function(t){"string"!=typeof t&&console.error("src："+t+" is invalid"),O.src=t}},cut:{default:{},get:function(){return O.cut},set:function(t){"object"!=typeof t&&console.error("cut："+t+" is invalid"),O.cut=t}},boundStyle:{default:{},get:function(){return O.boundStyle},set:function(t){"object"!=typeof t&&console.error("boundStyle："+t+" is invalid"),O.boundStyle=t}},onReady:{default:null,get:function(){return O.ready},set:function(t){O.ready=t}},onBeforeImageLoad:{default:null,get:function(){return O.beforeImageLoad},set:function(t){O.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return O.imageLoad},set:function(t){O.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return O.beforeDraw},set:function(t){O.beforeDraw=t}}},I=T().windowWidth;var M="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function _(t,e){return t(e={exports:{}},e.exports),e.exports}var j=_((function(t,e){e.isStr=function(t){return"string"==typeof t},e.isNum=function(t){return"number"==typeof t},e.isArr=Array.isArray,e.isUndef=function(t){return void 0===t},e.isTrue=function(t){return!0===t},e.isFalse=function(t){return!1===t},e.isFunc=function(t){return"function"==typeof t},e.isObj=e.isObject=function(t){return null!==t&&"object"==typeof t};var o=Object.prototype.toString;e.isPlainObject=function(t){return"[object Object]"===o.call(t)};var r=Object.prototype.hasOwnProperty;e.hasOwn=function(t,e){return r.call(t,e)},e.noop=function(t,e,o){},e.isValidArrayIndex=function(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}})),A=j.isFunc,L=j.isPlainObject,R=["ready","beforeImageLoad","beforeDraw","imageLoad"];function P(t){return function(e){for(var o=[],r=arguments.length-1;r-- >0;)o[r]=arguments[r+1];return void 0===e&&(e={}),new Promise((function(r,n){e.success=function(t){r(t)},e.fail=function(t){n(t)},t.apply(void 0,[e].concat(o))}))}}function H(t,e){return void 0===e&&(e=!1),new Promise((function(o){t.draw(e,o)}))}var k=P(r),B=P(n),E=_((function(t,e){
/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
!function(o){var r=e,n=t&&t.exports==r&&t,i="object"==typeof M&&M;i.global!==i&&i.window!==i||(o=i);var a=function(t){this.message=t};(a.prototype=new Error).name="InvalidCharacterError";var c=function(t){throw new a(t)},s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=/[\t\n\f\r ]/g,h={encode:function(t){t=String(t),/[^\0-\xFF]/.test(t)&&c("The string to be encoded contains characters outside of the Latin1 range.");for(var e,o,r,n,i=t.length%3,a="",u=-1,h=t.length-i;++u<h;)e=t.charCodeAt(u)<<16,o=t.charCodeAt(++u)<<8,r=t.charCodeAt(++u),a+=s.charAt((n=e+o+r)>>18&63)+s.charAt(n>>12&63)+s.charAt(n>>6&63)+s.charAt(63&n);return 2==i?(e=t.charCodeAt(u)<<8,o=t.charCodeAt(++u),a+=s.charAt((n=e+o)>>10)+s.charAt(n>>4&63)+s.charAt(n<<2&63)+"="):1==i&&(n=t.charCodeAt(u),a+=s.charAt(n>>2)+s.charAt(n<<4&63)+"=="),a},decode:function(t){var e=(t=String(t).replace(u,"")).length;e%4==0&&(e=(t=t.replace(/==?$/,"")).length),(e%4==1||/[^+a-zA-Z0-9/]/.test(t))&&c("Invalid character: the string to be decoded is not correctly encoded.");for(var o,r,n=0,i="",a=-1;++a<e;)r=s.indexOf(t.charAt(a)),o=n%4?64*o+r:r,n++%4&&(i+=String.fromCharCode(255&o>>(-2*n&6)));return i},version:"0.1.0"};if(r&&!r.nodeType)if(n)n.exports=h;else for(var d in h)h.hasOwnProperty(d)&&(r[d]=h[d]);else o.base64=h}(M)}));function Y(t){var e="";if("string"==typeof t)e=t;else for(var o=0;o<t.length;o++)e+=String.fromCharCode(t[o]);return E.encode(e)}function F(t,e,o,r,n,a,c){void 0===c&&(c=function(){}),void 0===a&&(a="png"),a=function(t){return"image/"+(t=t.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0]}(a),/bmp/.test(a)?function(t,e,o,r,n,a){i({canvasId:t,x:e,y:o,width:r,height:n,success:function(t){a(t,null)},fail:function(t){a(null,t)}})}(t,e,o,r,n,(function(t,e){var o=function(t){var e=t.width,o=t.height,r=e*o*3,n=r+54,i=[66,77,255&n,n>>8&255,n>>16&255,n>>24&255,0,0,0,0,54,0,0,0],a=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&o,o>>8&255,o>>16&255,o>>24&255,1,0,24,0,0,0,0,0,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=(4-3*e%4)%4,s=t.data,u="",h=e<<2,d=o,p=String.fromCharCode;do{for(var l=h*(d-1),f="",g=0;g<e;g++){var v=g<<2;f+=p(s[l+v+2])+p(s[l+v+1])+p(s[l+v])}for(var y=0;y<c;y++)f+=String.fromCharCode(0);u+=f}while(--d);return Y(i.concat(a))+Y(u)}(t);A(c)&&c(function(t,e){return"data:"+e+";base64,"+t}(o,"image/"+a),e)})):console.error("暂不支持生成'"+a+"'类型的base64图片")}var X=function(t,e){return void 0===t&&(t={}),void 0===e&&(e=function(){}),F(t.canvasId,t.x,t.y,t.width,t.height,"bmp",e)};var z={touchStart:function(t){var e=this,o=t.touches,r=o[0],n=o[1];e.src&&(S(e,!0,null,null),e.__oneTouchStart(r),t.touches.length>=2&&e.__twoTouchStart(r,n))},touchMove:function(t){var e=this,o=t.touches,r=o[0],n=o[1];e.src&&(S(e,null,!0),1===t.touches.length&&e.__oneTouchMove(r),t.touches.length>=2&&e.__twoTouchMove(r,n))},touchEnd:function(t){var e=this;e.src&&(S(e,!1,!1,!0),e.__xtouchEnd())}};var D=function(t){var e,o,r=this,n={};return e=r,o=W,Object.defineProperties(e,o),Object.keys(W).forEach((function(t){n[t]=W[t].default})),Object.assign(r,n,t),r.prepare(),r.attachPage(),r.createCtx(),r.observer(),r.cutt(),r.methods(),r.init(),r.update(),r};D.prototype.init=function(){var t=this,e=t.src;return t.version="1.3.9","function"==typeof t.onReady&&t.onReady(t.ctx,t),e?t.pushOrign(e):t.updateCanvas(),S(t,!1,!1,!1),t.oldScale=1,t.newScale=1,t},Object.assign(D.prototype,z),D.prototype.prepare=function(){var t=this;t.attachPage=function(){var o=e(),r=o[o.length-1];Object.defineProperty(r,"wecropper",{get:function(){return console.warn("Instance will not be automatically bound to the page after v1.4.0\n\nPlease use a custom instance name instead\n\nExample: \nthis.mycropper = new WeCropper(options)\n\n// ...\nthis.mycropper.getCropperImage()"),t},configurable:!0})},t.createCtx=function(){var e=t.id,r=t.targetId;e?(t.ctx=t.ctx||o(e),t.targetCtx=t.targetCtx||o(r)):console.error("constructor: create canvas context failed, 'id' must be valuable")},t.deviceRadio=I/750},D.prototype.observer=function(){var t=this;t.on=function(e,o){var r;return R.indexOf(e)>-1?A(o)&&("ready"===e?o(t):t["on"+(r=e,r.charAt(0).toUpperCase()+r.slice(1))]=o):console.error("event: "+e+" is invalid"),t}},D.prototype.methods=function(){var t=this,e=t.width,o=t.height,r=t.id,n=t.targetId,i=t.pixelRatio,a=t.cut,c=a.x;void 0===c&&(c=0);var s=a.y;void 0===s&&(s=0);var u=a.width;void 0===u&&(u=e);var h=a.height;void 0===h&&(h=o),t.updateCanvas=function(e){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),A(t.onBeforeDraw)&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(t.boundStyle),t.ctx.draw(!1,e),t},t.pushOrigin=t.pushOrign=function(e){return t.src=e,A(t.onBeforeImageLoad)&&t.onBeforeImageLoad(t.ctx,t),k({src:e}).then((function(e){var o=e.width/e.height,r=u/h;return t.croperTarget=e.path,o<r?(t.rectX=c,t.baseWidth=u,t.baseHeight=u/o,t.rectY=s-Math.abs((h-t.baseHeight)/2)):(t.rectY=s,t.baseWidth=h*o,t.baseHeight=h,t.rectX=c-Math.abs((u-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.update(),new Promise((function(e){t.updateCanvas(e)}))})).then((function(){A(t.onImageLoad)&&t.onImageLoad(t.ctx,t)}))},t.removeImage=function(){return t.src="",t.croperTarget="",H(t.ctx)},t.getCropperBase64=function(t){void 0===t&&(t=function(){}),X({canvasId:r,x:c,y:s,width:u,height:h},t)},t.getCropperImage=function(e,o){var a=e,d={canvasId:r,x:c,y:s,width:u,height:h},p=function(){return Promise.resolve()};return L(a)&&a.original&&(p=function(){return t.targetCtx.drawImage(t.croperTarget,t.imgLeft*i,t.imgTop*i,t.scaleWidth*i,t.scaleHeight*i),d={canvasId:n,x:c*i,y:s*i,width:u*i,height:h*i},H(t.targetCtx)}),p().then((function(){L(a)&&(d=Object.assign({},d,a)),A(a)&&(o=a);var t=d.componentContext?[d,d.componentContext]:[d];return B.apply(null,t)})).then((function(e){var r=e.tempFilePath;return A(o)?o.call(t,r,null):r})).catch((function(e){if(!A(o))throw e;o.call(t,null,e)}))}},D.prototype.cutt=function(){var t=this,e=t.width,o=t.height,r=t.cut,n=r.x;void 0===n&&(n=0);var i=r.y;void 0===i&&(i=0);var a=r.width;void 0===a&&(a=e);var c=r.height;void 0===c&&(c=o),t.outsideBound=function(e,o){t.imgLeft=e>=n?n:t.scaleWidth+e-n<=a?n+a-t.scaleWidth:e,t.imgTop=o>=i?i:t.scaleHeight+o-i<=c?i+c-t.scaleHeight:o},t.setBoundStyle=function(r){void 0===r&&(r={});var s=r.color;void 0===s&&(s="#04b00f");var u=r.mask;void 0===u&&(u="rgba(0, 0, 0, 0.3)");var h=r.lineWidth;void 0===h&&(h=1);var d=h/2,p=[{start:{x:n-d,y:i+10-d},step1:{x:n-d,y:i-d},step2:{x:n+10-d,y:i-d}},{start:{x:n-d,y:i+c-10+d},step1:{x:n-d,y:i+c+d},step2:{x:n+10-d,y:i+c+d}},{start:{x:n+a-10+d,y:i-d},step1:{x:n+a+d,y:i-d},step2:{x:n+a+d,y:i+10-d}},{start:{x:n+a+d,y:i+c-10+d},step1:{x:n+a+d,y:i+c+d},step2:{x:n+a-10+d,y:i+c+d}}];t.ctx.beginPath(),t.ctx.setFillStyle(u),t.ctx.fillRect(0,0,n,o),t.ctx.fillRect(n,0,a,i),t.ctx.fillRect(n,i+c,a,o-i-c),t.ctx.fillRect(n+a,0,e-n-a,o),t.ctx.fill(),p.forEach((function(e){t.ctx.beginPath(),t.ctx.setStrokeStyle(s),t.ctx.setLineWidth(h),t.ctx.moveTo(e.start.x,e.start.y),t.ctx.lineTo(e.step1.x,e.step1.y),t.ctx.lineTo(e.step2.x,e.step2.y),t.ctx.stroke()}))}},D.prototype.update=function(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=Math.round(e.x),t.touchY0=Math.round(e.y)},t.__oneTouchMove=function(e){var o,r;if(t.touchended)return t.updateCanvas();o=Math.round(e.x-t.touchX0),r=Math.round(e.y-t.touchY0);var n=Math.round(t.rectX+o),i=Math.round(t.rectY+r);t.outsideBound(n,i),t.updateCanvas()},t.__twoTouchStart=function(e,o){var r,n,i;t.touchX1=Math.round(t.rectX+t.scaleWidth/2),t.touchY1=Math.round(t.rectY+t.scaleHeight/2),r=Math.round(o.x-e.x),n=Math.round(o.y-e.y),i=Math.round(Math.sqrt(r*r+n*n)),t.oldDistance=i},t.__twoTouchMove=function(e,o){var r=t.oldScale,n=t.oldDistance,i=t.scale,a=t.zoom;t.newScale=function(t,e,o,r,n){var i,a;return i=Math.round(n.x-r.x),a=Math.round(n.y-r.y),t+.001*o*(Math.round(Math.sqrt(i*i+a*a))-e)}(r,n,a,e,o),t.newScale<=1&&(t.newScale=1),t.newScale>=i&&(t.newScale=i),t.scaleWidth=Math.round(t.newScale*t.baseWidth),t.scaleHeight=Math.round(t.newScale*t.baseHeight);var c=Math.round(t.touchX1-t.scaleWidth/2),s=Math.round(t.touchY1-t.scaleHeight/2);t.outsideBound(c,s),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})};var N=x({props:{boundStyle:{type:Object,default:()=>({lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"})}},data(){return{bottomNavHeight:50,originWidth:200,width:0,height:0,cropperOpt:{id:"cropper",targetId:"targetCropper",pixelRatio:1,width:0,height:0,scale:2.5,zoom:8,cut:{x:(this.width-this.originWidth)/2,y:(this.height-this.originWidth)/2,width:this.originWidth,height:this.originWidth},boundStyle:{lineWidth:a(this.boundStyle.lineWidth),mask:this.boundStyle.mask,color:this.boundStyle.borderColor}},destWidth:200,rectWidth:200,fileType:"jpg",src:""}},onLoad(e){let o=t();if(this.width=o.windowWidth,this.height=o.windowHeight-this.bottomNavHeight,this.cropperOpt.width=this.width,this.cropperOpt.height=this.height,this.cropperOpt.pixelRatio=o.pixelRatio,e.destWidth&&(this.destWidth=e.destWidth),e.rectWidth){let t=Number(e.rectWidth);this.cropperOpt.cut={x:(this.width-t)/2,y:(this.height-t)/2,width:t,height:t}}this.rectWidth=e.rectWidth,e.fileType&&(this.fileType=e.fileType),this.cropper=new D(this.cropperOpt).on("ready",(t=>{})).on("beforeImageLoad",(t=>{})).on("imageLoad",(t=>{})).on("beforeDraw",((t,e)=>{})),c({frontColor:"#ffffff",backgroundColor:"#000000"}),s({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:t=>{this.src=t.tempFilePaths[0],this.cropper.pushOrign(this.src)}})},methods:{touchStart(t){this.cropper.touchStart(t)},touchMove(t){this.cropper.touchMove(t)},touchEnd(t){this.cropper.touchEnd(t)},getCropperImage(t=!1){if(!this.src)return this.$u.toast("请先选择图片再裁剪");let e={destHeight:Number(this.destWidth),destWidth:Number(this.destWidth),fileType:this.fileType};this.cropper.getCropperImage(e,((e,o)=>{o?u({title:"温馨提示",content:o.message}):t?h({current:"",urls:[e]}):(d("uAvatarCropper",e),this.$u.route({type:"back"}))}))},uploadTap(){const t=this;s({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:e=>{t.src=e.tempFilePaths[0],t.cropper.pushOrign(this.src)}})}}},[["render",function(t,e,o,r,n,i){const a=b,c=g;return p(),l(c,{class:"content"},{default:f((()=>[v(c,{class:"cropper-wrapper",style:y({height:n.cropperOpt.height+"px"})},{default:f((()=>[v(a,{class:"cropper","disable-scroll":!0,onTouchstart:i.touchStart,onTouchmove:i.touchMove,onTouchend:i.touchEnd,style:y({width:n.cropperOpt.width,height:n.cropperOpt.height,backgroundColor:"rgba(0, 0, 0, 0.8)"}),"canvas-id":"cropper",id:"cropper"},null,8,["onTouchstart","onTouchmove","onTouchend","style"]),v(a,{class:"cropper","disable-scroll":!0,style:y({position:"fixed",top:`-${n.cropperOpt.width*n.cropperOpt.pixelRatio}px`,left:`-${n.cropperOpt.height*n.cropperOpt.pixelRatio}px`,width:n.cropperOpt.width*n.cropperOpt.pixelRatio+"px",height:""+n.cropperOpt.height*n.cropperOpt.pixelRatio}),"canvas-id":"targetId",id:"targetId"},null,8,["style"])])),_:1},8,["style"]),v(c,{class:"cropper-buttons safe-area-padding",style:y({height:n.bottomNavHeight+"px"})},{default:f((()=>[v(c,{class:"upload",onClick:i.uploadTap},{default:f((()=>[m("选择图片")])),_:1},8,["onClick"]),v(c,{class:"getCropperImage",onClick:e[0]||(e[0]=t=>i.getCropperImage(!1))},{default:f((()=>[m("确定")])),_:1})])),_:1},8,["style"])])),_:1})}],["__scopeId","data-v-458e1d34"]]);export{N as default};
