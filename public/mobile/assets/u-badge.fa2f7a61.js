import{o as t,c as e,w as o,l as r,t as s,s as a,x as i,h as n,k as f}from"./index.79254360.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var u=l({name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:()=>[20,20]},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle(){let t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText(){return this.isDot?"":this.count>this.overflowCount?`${this.overflowCount}+`:this.count},show(){return 0!=this.count||0!=this.showZero}}},[["render",function(l,u,p,d,h,y){const c=f;return y.show?(t(),e(c,{key:0,class:a(["u-badge",[p.isDot?"u-badge-dot":"","mini"==p.size?"u-badge-mini":"",p.type?"u-badge--bg--"+p.type:""]]),style:i([{top:p.offset[0]+"rpx",right:p.offset[1]+"rpx",fontSize:p.fontSize+"rpx",position:p.absolute?"absolute":"static",color:p.color,backgroundColor:p.bgColor},y.boxStyle])},{default:o((()=>[r(s(y.showText),1)])),_:1},8,["class","style"])):n("v-if",!0)}],["__scopeId","data-v-11d03f21"]]);export{u as _};
