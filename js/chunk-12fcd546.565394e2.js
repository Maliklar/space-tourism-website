(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12fcd546"],{"0201":function(e,t,n){e.exports=n.p+"img/image-europa.222080ea.png"},"12ca":function(e,t,n){},"24e3":function(e,t,n){},2512:function(e,t,n){e.exports=n.p+"img/image-moon.8461d2c5.webp"},"32ca":function(e,t,n){e.exports=n.p+"img/image-titan.be591595.png"},"3c1e":function(e,t,n){"use strict";n("12ca")},"3c32":function(e,t,n){e.exports=n.p+"img/image-mars.1e869458.webp"},"40c1":function(e,t,n){e.exports=n.p+"img/image-titan.106030f7.webp"},6989:function(e,t,n){"use strict";n("7ce9")},"6e2c":function(e,t,n){var a={"./background-destination-desktop.jpg":"9031","./background-destination-mobile.jpg":"f662","./background-destination-tablet.jpg":"ebfc","./image-europa.png":"0201","./image-europa.webp":"a526","./image-mars.png":"f545","./image-mars.webp":"3c32","./image-moon.png":"a6e4","./image-moon.webp":"2512","./image-titan.png":"32ca","./image-titan.webp":"40c1"};function i(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=c,e.exports=i,i.id="6e2c"},"7ce9":function(e,t,n){},"9fdb":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const i={class:"destination-view"},c=Object(a["e"])("h1",null,[Object(a["e"])("span",null,"01 "),Object(a["f"])(" PICK YOUR DESTINATION")],-1),s={class:"destination-view-body"};function o(e,t,n,o,r,b){const l=Object(a["x"])("Carousel");return Object(a["r"])(),Object(a["d"])("div",i,[c,Object(a["e"])("div",s,[Object(a["g"])(l)])])}const r={class:"destination-carousel"},b=["src","alt"],l={class:"carousel-details"},u=Object(a["e"])("div",{class:"vertical-line"},null,-1),d={class:"travel-details"},p={class:"item"},m=Object(a["e"])("span",null,"AVG. DISTANCE",-1),g={class:"item"},O=Object(a["e"])("span",null,"EST. TRAVEL TIME",-1);function j(e,t,i,c,s,o){const j=Object(a["x"])("CarouselTab");return Object(a["r"])(),Object(a["d"])("div",r,[Object(a["e"])("img",{src:n("6e2c")("./"+e.$store.state.selectedDestination.images.png),alt:e.$store.state.selectedDestination.name},null,8,b),Object(a["e"])("div",l,[Object(a["g"])(j),Object(a["e"])("h1",null,Object(a["z"])(e.$store.state.selectedDestination.name),1),Object(a["e"])("p",null,Object(a["z"])(e.$store.state.selectedDestination.description),1),u,Object(a["e"])("div",d,[Object(a["e"])("div",p,[m,Object(a["e"])("h2",null,Object(a["z"])(e.$store.state.selectedDestination.distance),1)]),Object(a["e"])("div",g,[O,Object(a["e"])("h2",null,Object(a["z"])(e.$store.state.selectedDestination.travel),1)])])])])}const f={class:"carousel-tab"};function v(e,t,n,i,c,s){return Object(a["r"])(),Object(a["d"])("div",f,[Object(a["e"])("div",{class:Object(a["m"])(["tab-item",{active:c.moon}]),onClick:t[0]||(t[0]=e=>s.toggleTab(0))}," MOON ",2),Object(a["e"])("div",{class:Object(a["m"])(["tab-item",{active:c.mars}]),onClick:t[1]||(t[1]=e=>s.toggleTab(1))}," MARS ",2),Object(a["e"])("div",{class:Object(a["m"])(["tab-item",{active:c.europa}]),onClick:t[2]||(t[2]=e=>s.toggleTab(2))}," EUROPA ",2),Object(a["e"])("div",{class:Object(a["m"])(["tab-item",{active:c.titan}]),onClick:t[3]||(t[3]=e=>s.toggleTab(3))}," TITAN ",2)])}var h={created(){this.$store.state.selectedDestination=this.$store.state.destinations[0]},data(){return{moon:!0,mars:!1,europa:!1,titan:!1}},methods:{toggleTab(e){this.$store.state.selectedDestination=this.$store.state.destinations[e],this.moon=!1,this.mars=!1,this.europa=!1,this.titan=!1,0==e&&(this.moon=!0),1==e&&(this.mars=!0),2==e&&(this.europa=!0),3==e&&(this.titan=!0)}}},w=(n("afcc"),n("6b0d")),T=n.n(w);const k=T()(h,[["render",v],["__scopeId","data-v-27e49eeb"]]);var x=k,D={components:{CarouselTab:x}};n("6989");const C=T()(D,[["render",j]]);var $=C,E={components:{Carousel:$}};n("3c1e");const A=T()(E,[["render",o]]);t["default"]=A},a526:function(e,t,n){e.exports=n.p+"img/image-europa.cd73f80e.webp"},a6e4:function(e,t,n){e.exports=n.p+"img/image-moon.56ed2a5e.png"},afcc:function(e,t,n){"use strict";n("24e3")},ebfc:function(e,t,n){e.exports=n.p+"img/background-destination-tablet.9b36d58f.jpg"},f545:function(e,t,n){e.exports=n.p+"img/image-mars.748179d1.png"},f662:function(e,t,n){e.exports=n.p+"img/background-destination-mobile.3a7c33c5.jpg"}}]);
//# sourceMappingURL=chunk-12fcd546.565394e2.js.map