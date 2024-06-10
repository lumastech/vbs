import{N as r,_}from"./Navbar-47e6b741.js";import{F as u}from"./Footer-c0507927.js";import{Z as m,i as h,h as n,d as x,b as l,a as t,t as s,w as v,F as p,o as b,f}from"./app-d7433b88.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-bd516273.js";import"./LoadingAnim-278ff7c0.js";import"./logo_white-292b7b05.js";const y={components:{Head:m,Link:h,Navbar:r,Footer:u},props:{invoice:Object}},w={class:"bg-secondary-500 relative pb-24"},N=t("div",{class:"absolute top-0 left-0 colousel-bg h-96"},null,-1),F={class:"p-2"},M={class:"mt-24 scale-80 overflow-x-scroll md:scale-100 invoice max-w-4xl mx-auto bg-white text-secondary-500 shadow"},T=t("h1",{class:"px-2 md:px-16 py-7 bg-primary-600 text-white font-bold text-2xl"},"INVOICE",-1),W={class:"md:flex py-9 px-2 md:px-16"},Z={class:"flex-auto"},D=t("p",{class:"mt-16 font-bold"},"Bill To:",-1),E=t("img",{src:_,alt:"Mfumu",class:"w-56 mb-4"},null,-1),I={class:"px-2 md:px-16"},k={class:"table border"},L=t("thead",null,[t("tr",{class:"bg-secondary-100"},[t("th",null,"DESCRIPTIONS"),t("th",null,"QUANTITY"),t("th",null,"@ (ZMW)"),t("th",{class:"text-right"},"AMOUNT (ZMW)")])],-1),O=t("td",{class:"text-center"},"1",-1),C={class:"text-center"},P={class:"text-right"},A=t("tr",null,[t("td",null,"Electronic Drawing File (.DWG)"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),B=t("tr",null,[t("td",null,"Electronic 3D Revit File"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),R=t("tr",null,[t("td",null,"List of Materials and Quantities"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),V=t("tr",null,[t("td",null,"Electrical Layout"),t("td",{class:"text-center"},"-"),t("td",{class:"text-center"},"-"),t("td",{class:"text-right"},"-")],-1),H={class:"table border md:w-1/2 ml-auto -mt-4 md:mb-96"},S={class:"text-xl"},U=t("td",null,null,-1),Q=t("td",null,"TOTAL",-1),j=t("td",{class:"text-center"},null,-1),G={class:"text-right"},Y={class:"text-xl w-1/2 offset-2"},q=t("td",null,null,-1),z=t("td",{class:"text-xl"},"TOTAL DUE: ",-1),J=t("td",{class:"text-center"},null,-1),K={class:"text-right"},X=t("p",{class:"px-2 md:px-16 py-2 bg-primary-600 text-white"},"Thank you for your business",-1),$={class:"max-w-4xl mx-auto p-2"};function tt(o,et,e,st,ot,nt){const c=n("Head"),a=n("Navbar"),i=n("Link"),d=n("Footer");return b(),x(p,null,[l(c,{title:"Contact us"}),t("header",w,[l(a),N,t("div",F,[t("div",M,[T,t("div",W,[t("div",Z,[D,t("p",null,s(e.invoice.customerFirstName)+", "+s(e.invoice.customerLastName),1),t("p",null,s(e.invoice.customerPhone),1),t("p",null,s(e.invoice.customerEmail),1)]),t("div",null,[E,t("p",null,"Invoice N0. "+s(e.invoice.transactionReference),1),t("p",null,"Issue Date: "+s(e.invoice.created_at.split("T")[0]),1),t("p",null,"Due Date: "+s(e.invoice.created_at.split("T")[0]),1)])]),t("div",I,[t("table",k,[L,t("tbody",null,[t("tr",null,[t("td",null,s(e.invoice.transactionName),1),O,t("td",C,s(o.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1),t("td",P,s(o.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)]),A,B,R,V])]),t("table",H,[t("tbody",null,[t("tr",S,[U,Q,j,t("td",G,s(o.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)]),t("tr",Y,[q,z,J,t("td",K,s(o.numeralFormat(e.invoice.amount,"0,0[.]00 ZMW"))+" ZMW",1)])])])]),X])]),t("div",$,[l(i,{href:e.invoice.payment_link,class:"bg-primary-600 text-white px-4 py-2 rounded text-2xl w-full font-bold block text-center mt-4 hover:bg-primary-700 transition"},{default:v(()=>[f(" PROCEED")]),_:1},8,["href"])])]),l(d)],64)}const ut=g(y,[["render",tt]]);export{ut as default};
