import{k as d,l as n,v as r,o as u,d as p}from"./app-07e5b287.js";const i=["value"],h={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(e,{emit:c}){const s=e,t=d({get(){return s.checked},set(o){c("update:checked",o)}});return(o,a)=>n((u(),p("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),type:"checkbox",value:e.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,i)),[[r,t.value]])}};export{h as _};
