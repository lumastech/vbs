import{r as y,C as w,D as k,k as c,o as C,d as h,a,p as u,E as r,u as n,l as f,z as v,b as E,w as S,n as p,A as $}from"./app-749d0917.js";const b={class:"relative"},B={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(i){const o=i;let e=y(!1);const l=s=>{e.value&&s.key==="Escape"&&(e.value=!1)};w(()=>document.addEventListener("keydown",l)),k(()=>document.removeEventListener("keydown",l));const g=c(()=>({48:"w-48"})[o.width.toString()]),m=c(()=>o.align==="left"?"origin-top-left left-0":o.align==="right"?"origin-top-right right-0":"origin-top");return(s,t)=>(C(),h("div",b,[a("div",{onClick:t[0]||(t[0]=d=>r(e)?e.value=!n(e):e=!n(e))},[u(s.$slots,"trigger")]),f(a("div",{class:"fixed inset-0 z-40",onClick:t[1]||(t[1]=d=>r(e)?e.value=!1:e=!1)},null,512),[[v,n(e)]]),E($,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:S(()=>[f(a("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[g.value,m.value]]),style:{display:"none"},onClick:t[2]||(t[2]=d=>r(e)?e.value=!1:e=!1)},[a("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",i.contentClasses])},[u(s.$slots,"content")],2)],2),[[v,n(e)]])]),_:3})]))}};export{B as _};
