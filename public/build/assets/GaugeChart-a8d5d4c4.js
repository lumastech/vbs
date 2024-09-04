import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{r as g,h as _,d,a as t,b as p,w as m,t as s,F as f,o as h,f as x,g as y}from"./app-dfe17c11.js";const w={props:{last_month:Number,this_month:Number},setup(){const c=g([0]),u=g({chart:{height:280,type:"radialBar"},series:[67],colors:["#20E647"],plotOptions:{radialBar:{startAngle:-135,endAngle:135,track:{background:"#333",startAngle:-135,endAngle:135},dataLabels:{name:{show:!1},value:{fontSize:"16px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",gradientToColors:["#87D4F9"],stops:[0,100]}},stroke:{lineCap:"butt"},labels:["Progress"]});return{series:c,plotOptions:u,getPreviousMonths:()=>{const n=["January","February","March","April","May","June","July","August","September","October","November","December"],l=new Date().getMonth(),i=[];for(let o=0;o<=4;o++){const b=(l-o+12)%12;i.push(n[b])}return i},growthPer:(n,a)=>(a==0?1:a)/(n==0?1:n)*100}}},M={class:"text-right"},P={class:"rounded px-2 pyy-1 bg-indigo-500 hover:bg-indigo-600 transition text-white"},k=t("i",{class:"fas fa-angle-down"},null,-1),A={class:"shadow rounded text-left"},B={class:"text-center mb-2"},C={class:"flex justify-evenly"},D={class:"flex"},N=t("i",{class:"self-center p-3 rounded bg-green-100 mr-1 text-green-500 fas fa-dollar"},null,-1),F={class:"text-sm self-center"},O={class:"flex"},J=t("i",{class:"self-center p-3 rounded bg-sky-100 mr-1 text-sky-500 fas fa-dollar"},null,-1),S={class:"text-sm self-center"};function V(c,u,r,e,n,a){const l=_("dropdown-menu"),i=_("apexchart");return h(),d(f,null,[t("div",M,[p(l,{overlay:!1,direction:"right"},{trigger:m(()=>[t("button",P,[x(s(e.getPreviousMonths()[0])+" ",1),k])]),body:m(()=>[t("ul",A,[(h(!0),d(f,null,y(e.getPreviousMonths(),o=>(h(),d("li",{key:o,class:"p-2 border-b border-gray-100 hover:bg-gray-100 transition cursor-pointer"},s(o),1))),128))])]),_:1})]),p(i,{width:"100%",height:"auto",type:"radialBar",options:e.plotOptions,series:e.series,class:"w-full md:col-span-2"},null,8,["options","series"]),t("div",null,[t("p",B,s(c.numeralFormat(e.growthPer(r.last_month,r.this_month),"0,0[.]00"))+"% Company Growth",1),t("div",C,[t("div",D,[N,t("div",F,[t("p",null,s(e.getPreviousMonths()[1]),1),t("p",null,s(r.last_month),1)])]),t("div",O,[J,t("div",S,[t("p",null,s(e.getPreviousMonths()[0]),1),t("p",null,s(r.this_month),1)])])])])],64)}const G=v(w,[["render",V]]);export{G as default};
