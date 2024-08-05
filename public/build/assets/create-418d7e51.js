import{D as u}from"./DashboardLaout-55ad3700.js";import{i as b,Z as _,T as h,h as f,d as i,b as y,a as t,j as g,l as a,s as n,F as p,g as x,o as c,t as l}from"./app-07e5b287.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const v={components:{DashboardLaout:u,Link:b,Head:_},props:{errors:Object,loans:Object},layout:u,setup(){return{loan:h({amount:null,purpose:"",term:null,notes:""}),submit:()=>{form.post("/loans/store",{onSuccess:d=>{form.reset(),console.log(d),alert("Loan Created successfully")}})}}}},A={class:"max-w-7xl mx-auto px-2"},k=t("header",{class:"bg-white p-6 shadow"},[t("h2",{class:"text-xl font-bold text-gray-800"},"Loan Application")],-1),L={class:"overflow-y-auto"},V={class:"mb-6"},D=t("h3",{class:"text-lg font-semibold text-gray-800 mb-4"},"Apply for a Loan",-1),S={class:"mb-4"},T=t("label",{for:"amount",class:"block text-gray-700"},"Loan Amount",-1),U={class:"mb-4"},j=t("label",{for:"purpose",class:"block text-gray-700"},"Purpose",-1),q={class:"mb-4"},B=t("label",{for:"term",class:"block text-gray-700"},"Term (in months)",-1),H={class:"mb-4"},N=t("label",{for:"notes",class:"block text-gray-700"},"Additional Notes",-1),C=t("button",{type:"submit",class:"px-4 py-2 bg-blue-600 text-white rounded-lg"},"Submit Application",-1),F=t("h3",{class:"text-lg font-semibold text-gray-800 mb-4"},"Your Loan Applications",-1),M={class:"bg-white p-6 rounded-lg shadow-lg"},O={class:"w-full"},P=t("thead",null,[t("tr",null,[t("th",{class:"text-left py-2"},"Date"),t("th",{class:"text-left py-2"},"Amount"),t("th",{class:"text-left py-2"},"Status"),t("th",{class:"text-left py-2"},"Term"),t("th",{class:"text-left py-2"},"Purpose")])],-1),E={class:"py-2"},Y={class:"py-2"},Z={class:"py-2"},z={class:"py-2"},G={class:"py-2"};function I(r,o,d,e,J,K){const m=f("Head");return c(),i(p,null,[y(m,{title:"Add user"}),t("div",A,[k,t("main",L,[t("section",V,[D,t("form",{onSubmit:o[4]||(o[4]=g((...s)=>r.submitApplication&&r.submitApplication(...s),["prevent"])),class:"bg-white p-6 rounded-lg shadow-lg"},[t("div",S,[T,a(t("input",{type:"number",id:"amount","onUpdate:modelValue":o[0]||(o[0]=s=>e.loan.amount=s),class:"mt-1 p-2 w-full border border-gray-300 rounded-lg",required:""},null,512),[[n,e.loan.amount]])]),t("div",U,[j,a(t("textarea",{id:"purpose","onUpdate:modelValue":o[1]||(o[1]=s=>e.loan.purpose=s),class:"mt-1 p-2 w-full border border-gray-300 rounded-lg",required:""},null,512),[[n,e.loan.purpose]])]),t("div",q,[B,a(t("input",{type:"number",id:"term","onUpdate:modelValue":o[2]||(o[2]=s=>e.loan.term=s),class:"mt-1 p-2 w-full border border-gray-300 rounded-lg",required:""},null,512),[[n,e.loan.term]])]),t("div",H,[N,a(t("textarea",{id:"notes","onUpdate:modelValue":o[3]||(o[3]=s=>e.loan.notes=s),class:"mt-1 p-2 w-full border border-gray-300 rounded-lg"},null,512),[[n,e.loan.notes]])]),C],32)]),t("section",null,[F,t("div",M,[t("table",O,[P,t("tbody",null,[(c(!0),i(p,null,x(d.loans,s=>(c(),i("tr",{key:s.id,class:"border-t"},[t("td",E,l(s.date),1),t("td",Y,l(s.amount),1),t("td",Z,l(s.status),1),t("td",z,l(s.term)+" months",1),t("td",G,l(s.purpose),1)]))),128))])])])])])])],64)}const X=w(v,[["render",I]]);export{X as default};
