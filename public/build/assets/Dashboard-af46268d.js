import{D as c}from"./DashboardLaout-ed7edc68.js";import{i as d,Z as _,h as g,d as a,b as h,a as t,t as s,F as i,g as m,o as n}from"./app-749d0917.js";import{_ as u}from"./ConfirmationModal-70dcc8d7.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-0b41b8cf.js";const b={components:{DashboardLaout:c,Link:d,Head:_,ConfirmationModal:u},props:{users:Object,trans:Object,totalSavings:Number,totalLoans:Number,trans_count:Number},layout:c,setup(){return{confirm:()=>window.confirm("Are you sure you want to delete this user?")}}},x={class:"max-w-7xl mx-auto px-2"},f={class:"mb-6"},y=t("h3",{class:"text-lg font-semibold text-gray-800 mb-4"},"Account Overview",-1),v={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},w={class:"bg-white p-6 rounded-lg shadow-lg"},D=t("h4",{class:"text-gray-800 font-semibold"},"Total Savings",-1),L={class:"text-gray-600 mt-2"},A={class:"bg-white p-6 rounded-lg shadow-lg"},N=t("h4",{class:"text-gray-800 font-semibold"},"Total Loans",-1),S={class:"text-gray-600 mt-2"},B={class:"bg-white p-6 rounded-lg shadow-lg"},H=t("h4",{class:"text-gray-800 font-semibold"},"Total Transactions",-1),O={class:"text-gray-600 mt-2"},T=t("h3",{class:"text-lg font-semibold text-gray-800 mb-4"},"Recent Activities",-1),k={class:"bg-white p-6 rounded-lg shadow-lg"},j={class:"flex space-x-4 border-b py-2"},C={class:"text-gray-600 font-bold"},F={class:"flex-auto text-gray-400"},K={class:"text-gray-400"};function R(r,V,o,E,M,Z){const l=g("Head");return n(),a(i,null,[h(l,{title:"DASHBOARD"}),t("div",x,[t("section",f,[y,t("div",v,[t("div",w,[D,t("p",L,"K"+s(o.totalSavings),1)]),t("div",A,[N,t("p",S,"K "+s(o.totalLoans),1)]),t("div",B,[H,t("p",O,s(o.trans_count),1)])])]),t("section",null,[T,t("div",k,[t("ul",null,[(n(!0),a(i,null,m(o.trans.data,e=>(n(),a("li",j,[t("span",C,s(e.type)+" - "+s(e.amount),1),t("span",F,s(e.description),1),t("span",K,s(e.created_at),1)]))),256))])])])])],64)}const J=p(b,[["render",R]]);export{J as default};