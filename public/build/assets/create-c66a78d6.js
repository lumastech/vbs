import{D as u}from"./DashboardLaout-982c374e.js";import{i as m,Z as b,T as h,h as _,d,b as y,a as t,j as f,l as a,x as n,F as p,g,o as i,t as l}from"./app-8ff31ed5.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const w={components:{DashboardLaout:u,Link:m,Head:b},props:{errors:Object,loans:Object},layout:u,setup(){const e=h({amount:null,purpose:"",term:null,notes:""});return{form:e,submit:()=>{e.post(route("user.store"),{onSuccess:r=>{e.reset(),console.log(r),alert("User Created successfully")}})}}}},v={class:"max-w-7xl mx-auto px-2"},A=t("header",{class:"bg-white p-6 shadow"},[t("h2",{class:"text-xl font-bold text-gray-800"},"Loan Application")],-1),k={class:"p-6 overflow-y-auto"},L={class:"mb-6"},V=t("h3",{class:"text-lg font-semibold text-gray-800 mb-4"},"Apply for a Loan",-1),D={class:"mb-4"},S=t("label",{for:"amount",class:"block text-gray-700"},"Loan Amount",-1),U={class:"mb-4"},T=t("label",{for:"purpose",class:"block text-gray-700"},"Purpose",-1),j={class:"mb-4"},q=t("label",{for:"term",class:"block text-gray-700"},"Term (in months)",-1),B={class:"mb-4"},H=t("label",{for:"notes",class:"block text-gray-700"},"Additional Notes",-1),N=t("button",{type:"submit",class:"px-4 py-2 bg-blue-600 text-white rounded-lg"},"Submit Application",-1),$=t("h3",{class:"text-lg font-semibold text-gray-800 mb-4"},"Your Loan Applications",-1),C={class:"bg-white p-6 rounded-lg shadow-lg"},F={class:"w-full"},M=t("thead",null,[t("tr",null,[t("th",{class:"text-left py-2"},"Date"),t("th",{class:"text-left py-2"},"Amount"),t("th",{class:"text-left py-2"},"Status"),t("th",{class:"text-left py-2"},"Term"),t("th",{class:"text-left py-2"},"Purpose")])],-1),O={class:"py-2"},P={class:"py-2"},E={class:"py-2"},Y={class:"py-2"},Z={class:"py-2"};function z(e,o,r,G,I,J){const c=_("Head");return i(),d(p,null,[y(c,{title:"Add user"}),t("div",v,[A,t("main",k,[t("section",L,[V,t("form",{onSubmit:o[4]||(o[4]=f((...s)=>e.submitApplication&&e.submitApplication(...s),["prevent"])),class:"bg-white p-6 rounded-lg shadow-lg"},[t("div",D,[S,a(t("input",{type:"number",id:"amount","onUpdate:modelValue":o[0]||(o[0]=s=>e.loan.amount=s),class:"mt-1 p-2 w-full border border-gray-300 rounded-lg",required:""},null,512),[[n,e.loan.amount]])]),t("div",U,[T,a(t("textarea",{id:"purpose","onUpdate:modelValue":o[1]||(o[1]=s=>e.loan.purpose=s),class:"mt-1 p-2 w-full border border-gray-300 rounded-lg",required:""},null,512),[[n,e.loan.purpose]])]),t("div",j,[q,a(t("input",{type:"number",id:"term","onUpdate:modelValue":o[2]||(o[2]=s=>e.loan.term=s),class:"mt-1 p-2 w-full border border-gray-300 rounded-lg",required:""},null,512),[[n,e.loan.term]])]),t("div",B,[H,a(t("textarea",{id:"notes","onUpdate:modelValue":o[3]||(o[3]=s=>e.loan.notes=s),class:"mt-1 p-2 w-full border border-gray-300 rounded-lg"},null,512),[[n,e.loan.notes]])]),N],32)]),t("section",null,[$,t("div",C,[t("table",F,[M,t("tbody",null,[(i(!0),d(p,null,g(r.loans,s=>(i(),d("tr",{key:s.id,class:"border-t"},[t("td",O,l(s.date),1),t("td",P,l(s.amount),1),t("td",E,l(s.status),1),t("td",Y,l(s.term)+" months",1),t("td",Z,l(s.purpose),1)]))),128))])])])])])])],64)}const W=x(w,[["render",z]]);export{W as default};
