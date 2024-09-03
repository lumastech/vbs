import{T as b,d as i,a as o,b as t,u as s,t as _,e as m,j as g,n as w,c as x,w as y,o as d,Z as h,f as k,i as v}from"./app-7d473939.js";import{_ as V}from"./AuthenticationCardLogo-d434b1b6.js";import{_ as B}from"./Checkbox-3b5a68b9.js";import{_ as c,a as u}from"./TextInput-4a83cb39.js";import{_ as p}from"./InputLabel-9518c740.js";/* empty css                                                    */import"./logo-ee70da88.js";const S={class:"fixed w-full h-full colousel-bg"},$={class:"bg-secondary-900/80 w-full h-full overflow-y-auto"},L={class:"px-4"},N={class:"max-w-sm mx-auto px-4 py-7 my-24 bg-secondary-100/10 shadow backdrop-blur rounded-md"},q=o("h1",{class:"text-2xl my-4 mt-7 text-white font-bold"},"Sign in",-1),C={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],R={class:"mt-4"},U={class:"block mt-4"},E={class:"flex items-center"},F=o("span",{class:"ml-2 text-sm text-secondary-100"},"Remember me",-1),T=["disabled"],H={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=b({email:"",password:"",remember:!1}),f=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(n,a)=>(d(),i("section",S,[o("div",$,[t(s(h),{title:"Log in"}),o("div",L,[o("div",N,[t(V,{class:"inline mx-auto"}),q,l.status?(d(),i("div",C,_(l.status),1)):m("",!0),o("form",{onSubmit:g(f,["prevent"])},[o("div",null,[t(p,{for:"email",value:"Email",class:"text-white"}),t(c,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full bg-secondary-500/10 backdrop-blur border-secondary-300",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(u,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",R,[t(p,{for:"password",value:"Password",class:"text-white"}),t(c,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full bg-secondary-500/10 backdrop-blur border-secondary-300",required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(u,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),o("div",U,[o("label",E,[t(B,{checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),F])]),o("div",null,[o("button",{class:w(["rounded bg-primary-700/30 border border-secondary-500 hover:bg-primary-800 transition text-white uppercase font-bold px-4 py-2 block w-full mt-7 mb-2 backdrop-blur",{"opacity-25":s(e).processing}]),disabled:s(e).processing},"Log in",10,T),l.canResetPassword?(d(),x(s(v),{key:0,href:n.route("password.request"),class:"text-center block underline text-sm text-secondary-100 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:y(()=>[k(" Forgot your password? ")]),_:1},8,["href"])):m("",!0)])],40,P)])])])]))}};export{H as default};