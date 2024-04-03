import{T as y,o as i,d as u,a as r,b as o,u as e,t as _,e as f,j as w,w as p,n as h,c as x,Z as v,f as m,i as g}from"./app-00bc2994.js";import{_ as k}from"./AuthenticationCardLogo-92caa8ea.js";import{_ as V}from"./Checkbox-fe29c7eb.js";import{_ as c,a as l}from"./TextInput-2d77f9f5.js";import{_ as d}from"./InputLabel-b91ff8ee.js";import{N}from"./Navbar-26da219a.js";import"./logo_white-292b7b05.js";import"./_plugin-vue_export-helper-c27b6911.js";const P={class:"fixed w-full h-full colousel-bg"},q={class:"bg-secondary-900/80 w-full h-full text-secondary-100 overflow-y-auto"},$={class:"bg-secondary-500"},S={class:"max-w-sm mx-auto px-4 py-7 md:my-24 my-7 bg-secondary-100/10 shadow backdrop-blur rounded-md"},U=r("h1",{class:"text-2xl my-4 mt-7 text-white font-bold"},"Sign up",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},C=["onSubmit"],R={class:"mt-4"},T={class:"mt-4"},F={class:"mt-4"},j={key:0,class:"mt-4"},A={class:"flex items-center"},E={class:"ml-2"},z=["href"],D=["href"],I=["disabled"],W={__name:"Register",setup(M){const s=y({name:"",email:"",password:"",password_confirmation:"",terms:!1}),b=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(n,t)=>(i(),u("section",P,[r("div",q,[o(e(v),{title:"Register"}),r("header",$,[o(N)]),r("div",S,[o(k,{class:"inline mx-auto"}),U,n.status?(i(),u("div",B,_(n.status),1)):f("",!0),r("form",{onSubmit:w(b,["prevent"])},[r("div",null,[o(d,{for:"name",value:"Name",class:"text-secondary-100"}),o(c,{id:"name",modelValue:e(s).name,"onUpdate:modelValue":t[0]||(t[0]=a=>e(s).name=a),type:"text",class:"mt-1 block w-full bg-secondary-500/10 backdrop-blur border-secondary-300",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),r("div",R,[o(d,{for:"email",value:"Email",class:"text-secondary-100"}),o(c,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":t[1]||(t[1]=a=>e(s).email=a),type:"email",class:"mt-1 block w-full bg-secondary-500/10 backdrop-blur border-secondary-300",required:"",autocomplete:"username"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",T,[o(d,{for:"password",value:"Password",class:"text-secondary-100"}),o(c,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":t[2]||(t[2]=a=>e(s).password=a),type:"password",class:"mt-1 block w-full bg-secondary-500/10 backdrop-blur border-secondary-300",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",F,[o(d,{for:"password_confirmation",value:"Confirm Password",class:"text-secondary-100"}),o(c,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=a=>e(s).password_confirmation=a),type:"password",class:"mt-1 block w-full bg-secondary-500/10 backdrop-blur border-secondary-300",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),n.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(i(),u("div",j,[o(d,{for:"terms"},{default:p(()=>[r("div",A,[o(V,{id:"terms",checked:e(s).terms,"onUpdate:checked":t[4]||(t[4]=a=>e(s).terms=a),name:"terms",required:""},null,8,["checked"]),r("div",E,[m(" I agree to the "),r("a",{target:"_blank",href:n.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,z),m(" and "),r("a",{target:"_blank",href:n.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,D)])]),o(l,{class:"mt-2",message:e(s).errors.terms},null,8,["message"])]),_:1})])):f("",!0),r("div",null,[r("button",{class:h(["rounded bg-primary-700/30 border border-secondary-500 hover:bg-primary-800 transition text-white uppercase font-bold px-4 py-2 block w-full mt-7 mb-2 backdrop-blur",{"opacity-25":e(s).processing}]),disabled:e(s).processing},"Register",10,I),n.canResetPassword?(i(),x(e(g),{key:0,href:n.route("password.request"),class:"text-center block underline text-sm text-secondary-100 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:p(()=>[m(" Forgot your password? ")]),_:1},8,["href"])):f("",!0),o(e(g),{href:n.route("login"),class:"underline text-sm text-secondary-100 block text-center mt-4 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:p(()=>[m(" Already registered? ")]),_:1},8,["href"])])],40,C)])])]))}};export{W as default};
