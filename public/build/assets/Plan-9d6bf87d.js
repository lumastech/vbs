import{N as f,L as v}from"./Navbar-0d5c8453.js";import{_ as w}from"./Modal-49f10016.js";import{F as E}from"./Footer-de6e07bb.js";import{P as k}from"./PaymentModal-bfcd3215.js";import{P as L}from"./ProductItem-6e808587.js";import{Z as P,i as A,r as m,h as n,d as i,b as l,a as o,F as _,g as u,t as s,q as F,o as d,c as M}from"./app-7d473939.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-736bfd4a.js";/* empty css                                                    */import"./logo-ee70da88.js";const S={components:{Head:P,Link:A,Navbar:f,Footer:E,ProductItem:L,Modal:w,LoadingAnim:v,PaymentModal:k},props:{plans:Object,plan:Object,errs:Array},setup(c){const r=m(c.plan.images[0].image),t=m(0),e=m(0);return{preview:r,orderModal:t,ShowLoaderAnim:e}}},B={class:"bg-secondary-500"},I={class:"bg-secondary-800 text-secondary-10 pt-9"},T={class:"max-w-7xl mx-auto p-2"},C={class:"grid md:grid-cols-6 gap-3"},H={class:"md:col-span-4"},O=["src"],R={class:"flex my-4 gap-3"},W=o("div",{class:"w-8 bg-secondary-200 rounded-l-xl"},null,-1),D={class:"flex overflow-x-scroll flex-auto gap-4"},U=["onClick","src","alt"],Y=o("div",{class:"w-8 bg-secondary-200 rounded-r-xl"},null,-1),Z=o("h2",{class:"mt-9 my-4 font-bold"},"WHAT YOU'LL GET:",-1),V=o("div",{class:"border border-gray-500 p-2 rounded"},[o("p",null," This full set of construction drawings complies with the minimum requirements of the National Building Regulations for approval at any local authority in Zambia. ")],-1),j={class:"mt-9 p-2 md:p-4 rounded border border-gray-500"},q=o("h2",{class:"text-2xl"},"DESCRIPTION",-1),G={class:"col-span-2"},Q={class:"text-xl text-primary-600"},z={class:"text-3xl text-primary-600"},J=o("h4",{class:"font-bold mt-4"},"FEATURES",-1),K={class:"table-auto w-full space-y-3"},X={class:"border-b border-secondary-500"},$=o("td",null,"Bedrooms",-1),oo={class:"border-b border-secondary-500"},to=o("td",null,"Bathrooms",-1),eo={class:"border-b border-secondary-500"},ao=o("td",null,"Levels",-1),so={class:"border-b border-secondary-500"},ro=o("td",null,"Style",-1),no={class:"border-b border-secondary-500"},lo=o("td",null,"Roof Finish",-1),io={class:"border-b border-secondary-500"},co=o("td",null,"Area",-1),mo=F('<p class="mt-4 font-semibold">Extras</p><div class="form-control my-1"><input checked disabled type="checkbox" name="extra1" id="extra1" class="border-primary-600 text-primary-600 focus:ring-primary-600"><label class="hover:text-orange-600 transition-all duration-150" for="extra1">Electronic Drawing File (.DWG)</label></div><div class="form-control my-1"><input checked disabled type="checkbox" name="extra2" id="extra2" class="border-primary-600 text-primary-600 focus:ring-primary-600"><label class="hover:text-orange-600 transition-all duration-150" for="extra2">Electronic 3D Revit File</label></div><div class="form-control my-1"><input checked disabled type="checkbox" name="extra3" id="extra3" class="border-primary-600 text-primary-600 focus:ring-primary-600"><label class="hover:text-orange-600 transition-all duration-150" for="extra3">List of Materials and Quantities</label></div><div class="form-control my-1"><input checked disabled type="checkbox" name="extra4" id="extra4" class="border-primary-600 text-primary-600 focus:ring-primary-600"><label class="hover:text-orange-600 transition-all duration-150" for="extra4">Electrical Layout</label></div><p class="text-lg font-semibold mt-7"> PLEASE SPECIFIY THE CITY OR TOWN WHERE THE HOUSE WILL BE BUILT: </p><textarea name="" id="" rows="3" class="w-full rounded mb-5 border-primary-500 focus:ring-2 focus:ring-primary-600 bg-gray-800 text-primary-700 form-textarea"></textarea>',7),_o={class:"grid grid-cols-2 gap-4"},uo=o("button",{disabled:"",class:"disabled:bg-gray-300 bg-orange-300 center text-white p-2 rounded mt-4 hover:bg-orange-500 transition-all duration-300"}," Add to Cart ",-1),po=o("hr",{class:"max-w-7xl mx-auto border-t border-secondary-600 my-12"},null,-1),bo={class:"max-w-7xl mx-auto p-2 pb-24"},ho=o("h2",{class:"text-xl font-bold my-4 uppercase"},"You may also like",-1),yo={class:"grid md:grid-cols-4 grid-cols-2 gap-4"};function xo(c,r,t,e,go,fo){const p=n("Head"),b=n("Navbar"),h=n("ProductItem"),y=n("PaymentModal"),x=n("LoadingAnim"),g=n("Footer");return d(),i(_,null,[l(p,{title:"Details"}),o("header",B,[l(b)]),o("section",I,[o("section",T,[o("div",C,[o("div",H,[o("img",{src:e.preview,alt:"plan name",class:"rounded aspect-video w-full"},null,8,O),o("div",R,[W,o("div",D,[(d(!0),i(_,null,u(t.plan.images,a=>(d(),i("img",{key:a.id,onClick:vo=>e.preview=a.image,src:a.image,alt:t.plan.name,class:"w-24 h-24 rounded cursor-pointer"},null,8,U))),128))]),Y]),Z,V,o("div",j,[q,o("p",null,s(t.plan.description),1)])]),o("div",G,[o("h1",Q,s(t.plan.name)+" - HOUSE PLANS ",1),o("h2",z,s(c.numeralFormat(t.plan.price,"0,0[.]00 ZMW"))+" ZMW ",1),J,o("table",K,[o("tr",X,[$,o("td",null,s(t.plan.bedrooms)+" bedrooms",1)]),o("tr",oo,[to,o("td",null,s(t.plan.bathrooms),1)]),o("tr",eo,[ao,o("td",null,s(t.plan.levels),1)]),o("tr",so,[ro,o("td",null,s(t.plan.style),1)]),o("tr",no,[lo,o("td",null,s(t.plan.roof_finish),1)]),o("tr",io,[co,o("td",null,s(t.plan.area),1)])]),mo,o("div",_o,[o("button",{onClick:r[0]||(r[0]=a=>e.orderModal=1),class:"bg-primary-500 center text-white p-2 rounded mt-4 hover:bg-primary-700 transition-all duration-300"}," Buy Now "),uo])])])]),po,o("section",bo,[ho,o("div",yo,[(d(!0),i(_,null,u(t.plans.data,a=>(d(),M(h,{key:a.id,plan:a},null,8,["plan"]))),128))])])]),l(y,{show:e.orderModal,item:t.plan,onClose:r[1]||(r[1]=a=>e.orderModal=0),onOpen:r[2]||(r[2]=a=>e.orderModal=1)},null,8,["show","item"]),l(x,{show:e.ShowLoaderAnim},null,8,["show"]),l(g)],64)}const Bo=N(S,[["render",xo]]);export{Bo as default};