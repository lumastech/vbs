import{T as g,k as p,d as a,b as e,u as t,w as o,F as _,o as l,Z as h,e as y,a as i,n as v,f as n,i as u,j as x}from"./app-07e5b287.js";import{A as b}from"./AuthenticationCard-0400375e.js";import{_ as k}from"./AuthenticationCardLogo-140e7740.js";import{_ as w}from"./PrimaryButton-c102bb5e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./logo_white-292b7b05.js";const V=i("div",{class:"mb-4 text-sm text-gray-600"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"mt-4 flex items-center justify-between"},$={__name:"VerifyEmail",props:{status:String},setup(c){const d=c,s=g({}),f=()=>{s.post(route("verification.send"))},m=p(()=>d.status==="verification-link-sent");return(r,N)=>(l(),a(_,null,[e(t(h),{title:"Email Verification"}),e(b,null,{logo:o(()=>[e(k)]),default:o(()=>[V,m.value?(l(),a("div",E," A new verification link has been sent to the email address you provided in your profile settings. ")):y("",!0),i("form",{onSubmit:x(f,["prevent"])},[i("div",C,[e(w,{class:v({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),i("div",null,[e(t(u),{href:r.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:o(()=>[n(" Edit Profile")]),_:1},8,["href"]),e(t(u),{href:r.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"},{default:o(()=>[n(" Log Out ")]),_:1},8,["href"])])])],40,B)]),_:1})],64))}};export{$ as default};
