import{N as v}from"./Navbar-5f130ee8.js";import{_ as f}from"./Modal-d0a90a5c.js";import{F as w}from"./Footer-0df741e6.js";import{P}from"./Property-a7d2b7c3.js";import{P as E}from"./PaymentModal-172c1bfb.js";import{Z as M,i as k,r as u,h as a,d as l,b as c,a as t,F as _,g as m,t as s,f as b,o as d,c as A}from"./app-bb7fc4e2.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-3da6682e.js";/* empty css                                                    */import"./logo-ee70da88.js";const N={components:{Head:M,Link:k,Navbar:v,Footer:w,Property:P,Modal:f,PaymentModal:E},props:{items:Object,item:Object,errs:Array,feature:Object},setup(i){const r=u(i.item.images[0].image),o=u(0);return{preview:r,orderModal:o}}},C={class:"bg-secondary-500"},T={class:"bg-secondary-800 text-secondary-10 pt-9"},B={class:"max-w-7xl mx-auto p-2"},O={class:"grid md:grid-cols-6 gap-3"},R={class:"md:col-span-4"},S=["src","alt"],D={class:"flex my-4 gap-3"},L=t("div",{class:"w-8 bg-secondary-200 rounded-l-xl"},null,-1),I={class:"flex overflow-x-scroll flex-auto gap-4"},U=["onClick","src","alt"],V=t("div",{class:"w-8 bg-secondary-200 rounded-r-xl"},null,-1),j=t("h2",{class:"mt-9 my-4 font-bold"},"PROPERTY DETAILS",-1),H={class:"mt-9 p-2 md:p-4 rounded border border-gray-500"},Z=t("h2",{class:"text-2xl"},"DESCRIPTION",-1),W={class:"col-span-2"},Y={class:"text-xl text-primary-600"},z={class:"text-3xl text-primary-600"},q=t("h4",{class:"font-bold mt-4"},"DETAILS",-1),G={class:"table-auto w-full space-y-3"},J={class:"border-b border-secondary-500"},K=t("td",null,"Bedrooms",-1),Q={class:"border-b border-secondary-500"},X=t("td",null,"Bathrooms",-1),$={class:"border-b border-secondary-500"},tt=t("td",null,"Address",-1),ot={class:"border-b border-secondary-500"},et=t("td",null,"City",-1),st={class:"border-b border-secondary-500"},rt=t("td",null,"State",-1),dt={class:"border-b border-secondary-500"},nt=t("td",null,"Country",-1),lt={class:"border-b border-secondary-500"},at=t("td",null,[b("Area "),t("sup",null,"m2")],-1),it=t("sup",null,"m2",-1),ct={class:"mt-9 p-2 rounded border border-gray-500"},_t=t("p",{class:"text-xl font-semibold"},"FEATURES",-1),mt=t("div",{class:"grid grid-cols-2 gap-4 border-b border-secondary-300 my-2"},[t("p",null,"FEATURE NAME"),t("p",null,"FEATURE VALUE")],-1),ut={class:"grid grid-cols-2 gap-4"},bt=t("button",{disabled:"",class:"disabled:bg-gray-300 bg-orange-300 center text-white p-2 rounded mt-4 hover:bg-orange-500 transition-all duration-300"}," Add to Cart ",-1),ht=t("hr",{class:"max-w-7xl mx-auto border-t border-secondary-600 my-12"},null,-1),yt={class:"max-w-7xl mx-auto p-2 pb-24"},gt=t("h2",{class:"text-xl font-bold my-4 uppercase"},"You may also like",-1),pt={class:"grid md:grid-cols-3 gap-4"};function xt(i,r,o,n,vt,ft){const h=a("Head"),y=a("Navbar"),g=a("Property",!0),p=a("PaymentModal"),x=a("Footer");return d(),l(_,null,[c(h,{title:"Details"}),t("header",C,[c(y)]),t("section",T,[t("section",B,[t("div",O,[t("div",R,[t("img",{src:n.preview,alt:o.item.title,class:"rounded aspect-video w-full"},null,8,S),t("div",D,[L,t("div",I,[(d(!0),l(_,null,m(o.item.images,e=>(d(),l("img",{key:e.id,onClick:wt=>n.preview=e.image,src:e.image,alt:o.item.title,class:"w-24 h-24 rounded cursor-pointer"},null,8,U))),128))]),V]),j,t("div",H,[Z,t("p",null,s(o.item.description),1)])]),t("div",W,[t("h1",Y,s(o.item.title),1),t("h2",z,s(i.numeralFormat(o.item.price,"0,0[.]00 ZMW"))+" ZMW ",1),q,t("table",G,[t("tr",J,[K,t("td",null,s(o.item.bedrooms)+" bedrooms",1)]),t("tr",Q,[X,t("td",null,s(o.item.bathrooms),1)]),t("tr",$,[tt,t("td",null,s(o.item.address),1)]),t("tr",ot,[et,t("td",null,s(o.item.city),1)]),t("tr",st,[rt,t("td",null,s(o.item.state),1)]),t("tr",dt,[nt,t("td",null,s(o.item.country),1)]),t("tr",lt,[at,t("td",null,[b(s(o.item.lot_size),1),it])])]),t("div",ct,[_t,mt,(d(!0),l(_,null,m(i.features,e=>(d(),l("div",{key:e.id,class:"grid grid-cols-2 gap-4"},[t("p",null,s(e.name),1),t("p",null,s(e.value),1)]))),128))]),t("div",ut,[t("button",{onClick:r[0]||(r[0]=e=>n.orderModal=1),class:"bg-primary-500 center text-white p-2 rounded mt-4 hover:bg-primary-700 transition-all duration-300"}," Buy Now "),bt])])])]),ht,t("section",yt,[gt,t("div",pt,[(d(!0),l(_,null,m(o.items.data,e=>(d(),A(g,{key:e.id,item:e},null,8,["item"]))),128))])])]),c(p,{show:n.orderModal,item:o.item,onClose:r[1]||(r[1]=e=>n.orderModal=0),onOpen:r[2]||(r[2]=e=>n.orderModal=1)},null,8,["show","item"]),c(x)],64)}const Ot=F(N,[["render",xt]]);export{Ot as default};