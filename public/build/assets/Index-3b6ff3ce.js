import{D as p}from"./DashboardLaout-9dae656d.js";import{i as m,Z as w,h as n,d as l,b as s,a as t,w as r,F as b,g as v,o as c,n as h,t as a}from"./app-b5b7322d.js";import{_ as C}from"./ConfirmationModal-27bd0b8c.js";import{T as k}from"./Toast-902e8a71.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-da3e6f2f.js";const T={components:{DashboardLaout:p,Link:m,Head:w,ConfirmationModal:C,Toast:k},props:{items:Object},layout:p,setup(){return{confirm:()=>window.confirm("Are you sure you want to delete this property?")}}},E={class:"max-w-7xl mx-auto px-2"},R={class:"flex justify-between gap-4 mb-4 place-items-center"},B=t("h2",null,"PROPERTIES",-1),L=t("i",{class:"fa-solid fa-plus"},null,-1),M=t("span",null,"Post PROPERTY",-1),A={class:"shadow-xs rounded bg-white/90 p-2 overflow-x-scroll"},O={class:"w-full"},S=t("thead",null,[t("tr",null,[t("th",{class:"border-b border-gray-200 px-2 py-1"}),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Title"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"Address"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-left"},"City"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Price"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Status"),t("th",{class:"border-b border-gray-200 px-2 py-1 text-right"},"Action")])],-1),D={class:"text-teal-500"},F={class:"border-b border-gray-200 shrink-0"},H=["src"],I={class:"border-b border-gray-200 px-2 py-1 text-left"},Z={class:"border-b border-gray-200 px-2 py-1 text-center"},$={class:"border-b border-gray-200 px-2 py-3"},j={class:"border-b border-gray-200 px-2 py-3 text-right"},N={class:"border-b border-gray-200 px-2 py-3 text-right"},V={class:"border-b border-gray-200 px-2 py-3 text-right"},W=t("i",{class:"fa-solid fa-edit"},null,-1),z=t("i",{class:"fa-solid fa-trash-can"},null,-1),Y=t("h4",null,"Confirm action",-1),q=t("p",null,"Are you sure you want to delete this property?",-1);function G(o,i,_,y,J,K){const u=n("Head"),d=n("Link"),f=n("ConfirmationModal"),g=n("Toast");return c(),l(b,null,[s(u,{title:"PROPERTIES"}),t("div",E,[t("div",R,[B,s(d,{href:o.route("property.create"),class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},{default:r(()=>[L,M]),_:1},8,["href"])]),t("div",A,[t("table",O,[S,t("tbody",D,[(c(!0),l(b,null,v(_.items.data,e=>(c(),l("tr",{key:e.id,class:h(["hover:bg-gray-50 transition",{"bg-red-100":e.status!="active"}])},[t("td",F,[t("img",{src:e.images.length?e.images[0].image:"",alt:"",class:"w-16"},null,8,H)]),t("td",I,a(e.title),1),t("td",Z,a(e.address),1),t("td",$,a(e.city),1),t("td",j,a(o.numeralFormat(e.price,"0,0[.]00ZMW"))+" ZMW",1),t("td",N,[t("span",{class:h(["px-2 rounded-md text-white",{"bg-teal-500":e.status=="active","bg-red-500":e.status!="active"}])},a(e.status),3)]),t("td",V,[s(d,{href:o.route("property.edit",e),class:"p-2 text-sky-500"},{default:r(()=>[W]),_:2},1032,["href"]),s(d,{href:o.route("property.destroy",e.id),method:"delete",class:"text-red-500",as:"button",type:"button",onBefore:y.confirm},{default:r(()=>[z]),_:2},1032,["href","onBefore"]),s(f,{show:0},{title:r(()=>[Y]),content:r(()=>[q]),footer:r(()=>[t("button",{onClick:i[0]||(i[0]=(...x)=>o.close&&o.close(...x)),class:"text-gray-500 hover:bg-secondary-100 px-4 rounded transition"},"Cancel")]),_:1})])],2))),128))])])])]),s(g)],64)}const st=P(T,[["render",G]]);export{st as default};
