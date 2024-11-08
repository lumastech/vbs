import{_ as F,N as M,L as N}from"./Navbar-93389246.js";import{F as C}from"./Footer-1ed79d53.js";import{_ as I}from"./Modal-0b41b8cf.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{o as v,d as f,a as t,t as s,Z as L,i as T,r as _,h as i,b as a,w as m,F as W,f as k,O as E}from"./app-749d0917.js";import"./Dropdown-4e21f902.js";import"./ResponsiveNavLink-0c39ec86.js";/* empty css                                                    */import"./logo-ee70da88.js";const P={props:{invoice:Object}},Z={class:"p-2"},D={class:"scale-80 overflow-x-scroll md:scale-100 invoice max-w-4xl mx-auto bg-white text-secondary-500 shadow"},O=t("h1",{class:"px-2 md:px-16 py-7 bg-primary-600 text-white font-bold text-2xl"},"INVOICE",-1),A={class:"md:flex py-9 px-2 md:px-16"},S={class:"flex-auto"},$=t("p",{class:"mt-16 font-bold"},"Bill To:",-1),B=t("img",{src:F,alt:"Mfumu",class:"w-56 mb-4"},null,-1),R={class:"px-2 md:px-16"},V={class:"table border"},H=t("thead",null,[t("tr",{class:"bg-secondary-100"},[t("th",null,"DESCRIPTIONS"),t("th",null,"QUANTITY"),t("th",null,"@ (ZMW)"),t("th",{class:"text-right"},"AMOUNT (ZMW)")])],-1),U=t("td",{class:"text-center"},"1",-1),j={class:"text-center"},Q={class:"text-right"},z=t("tr",null,[t("td",null,"Electronic Drawing File (.DWG)"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),G=t("tr",null,[t("td",null,"Electronic 3D Revit File"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),Y=t("tr",null,[t("td",null,"List of Materials and Quantities"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),q=t("tr",null,[t("td",null,"Electrical Layout"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),J={class:"table border md:w-1/2 ml-auto -mt-4 md:mb-96"},K={class:"text-xl"},X=t("td",null,null,-1),tt=t("td",null,"TOTAL",-1),et=t("td",{class:"text-center"},null,-1),ot={class:"text-right"},st={class:"text-xl w-1/2 offset-2"},nt=t("td",null,null,-1),lt=t("td",{class:"text-xl"},"TOTAL DUE: ",-1),at=t("td",{class:"text-center"},null,-1),it={class:"text-right"},ct=t("p",{class:"px-2 md:px-16 py-2 bg-primary-600 text-white"},"Thank you for your business",-1);function rt(l,o,e,n,r,u){return v(),f("div",Z,[t("div",D,[O,t("div",A,[t("div",S,[$,t("p",null,s(e.invoice.customerFirstName)+", "+s(e.invoice.customerLastName),1),t("p",null,s(e.invoice.customerPhone),1),t("p",null,s(e.invoice.customerEmail),1)]),t("div",null,[B,t("p",null,"Invoice N0. "+s(e.invoice.transactionReference),1),t("p",null,"Issue Date: "+s(e.invoice.created_at.split("T")[0]),1),t("p",null,"Due Date: "+s(e.invoice.created_at.split("T")[0]),1)])]),t("div",R,[t("table",V,[H,t("tbody",null,[t("tr",null,[t("td",null,s(e.invoice.transactionName),1),U,t("td",j,s(l.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1),t("td",Q,s(l.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)]),z,G,Y,q])]),t("table",J,[t("tbody",null,[t("tr",K,[X,tt,et,t("td",ot,s(l.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)]),t("tr",st,[nt,lt,at,t("td",it,s(l.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)])])])]),ct])])}const dt=x(P,[["render",rt]]);const _t={components:{Head:L,Link:T,Navbar:M,Footer:C,Modal:I,InvoicePreview:dt,LoadingAnim:N},props:{invoice:Object},setup(l){const o=_(!1),e=_(),n=_(!1),r=()=>{n.value=!0,E.post("/invoice-invst",{txn_ref:l.invoice.transactionReference},{onError:c=>{},onSuccess:c=>{console.log(c.data)},onFinish:c=>{n.value=!1},preserveScroll:!0})};return{iframe:o,frame:e,onFrameClosed:()=>{o.value=!1,r()},ShowLoaderAnim:n}}},mt={class:"bg-secondary-500 relative pb-24"},ut=t("div",{class:"absolute top-0 left-0 colousel-bg h-96"},null,-1),ht={class:"max-w-4xl mx-auto p-2"},xt=t("h2",{class:"flex-auto self-center px-2 font-bold"},"BroadPay Checkout",-1),vt=t("i",{class:"fas fa-times"},null,-1),ft=[vt],bt=["src"],pt=t("h2",{class:"flex-auto self-center px-2 font-bold"},null,-1),gt=t("i",{class:"fas fa-times"},null,-1);function wt(l,o,e,n,r,u){const c=i("Head"),b=i("Navbar"),p=i("InvoicePreview",!0),g=i("Footer"),h=i("did"),w=i("Modal"),y=i("LoadingAnim");return v(),f(W,null,[a(c,{title:"Invoice"}),t("header",mt,[a(b),ut,a(p,{invoice:e.invoice},null,8,["invoice"]),t("div",ht,[t("button",{onClick:o[0]||(o[0]=d=>n.iframe=!0),class:"bg-primary-600 text-white px-4 py-2 rounded text-2xl w-full font-bold block text-center mt-4 hover:bg-primary-700 transition"}," PROCEED")])]),a(g),a(w,{show:n.iframe,maxWidth:"md",class:"z-10 loading-bg"},{default:m(()=>[a(h,{class:"flex border-b"},{default:m(()=>[xt,t("button",{onClick:o[1]||(o[1]=d=>n.onFrameClosed()),class:"text-red-500 px-2 hover:bg-red-100 transition"},ft)]),_:1}),t("iframe",{ref:"frame",onLoad:o[2]||(o[2]=d=>l.loaded=!1),src:e.invoice.payment_link,frameborder:"0",class:"w-full h-[26rem] loading-bg"},null,40,bt),a(h,{class:"flex border-t"},{default:m(()=>[pt,t("button",{onClick:o[3]||(o[3]=d=>n.onFrameClosed()),class:"text-gray-500 px-2 m-1 hover:bg-red-100 transition rounded border"},[gt,k(" Close")])]),_:1})]),_:1},8,["show"]),a(y,{show:n.ShowLoaderAnim},null,8,["show"])],64)}const kt=x(_t,[["render",wt]]);export{kt as default};
