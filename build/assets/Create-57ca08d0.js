import{i as U,Z as z,r as m,T as S,h as _,d,a as e,b,w as f,j as T,f as a,t as n,e as i,l as u,G as y,n as c,H as x,F as h,g as C,O as D,o as l}from"./app-b5b7322d.js";import{D as g}from"./DashboardLaout-9dae656d.js";import{L}from"./LoadingAnim-c20a9497.js";import{_ as O}from"./Modal-da3e6f2f.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const M={components:{DashboardLayout:g,Link:U,Head:z,LoadingAnim:L,Modal:O},layout:g,props:{errors:Object,property_types:Object},setup(){const p=m(0),t=m(null),r=S({title:null,price:null,address:null,city:null,state:null,postal_code:null,country:null,bedrooms:null,bathrooms:null,square_feet:null,lot_size:null,property_type_id:null,description:null,status:"active"});return{property:r,upload:()=>{r.post(route("property.store"))},addpropModal:p,property_type:t,postProperty:()=>{D.post(route("property-type.store"),{name:t.value},{onSuccess:()=>{p.value=0}})}}}},A={class:"max-w-7xl mx-auto px-2"},E={class:"flex justify-between gap-4 mb-4 place-items-center"},R=e("h1",{class:"md:text-2xl mb-4 flex-auto"},"UPLOAD A PROPERTY",-1),B=e("i",{class:"fa-solid fa-arrow-left mr-2"},null,-1),H=e("span",null,"Back to PROPERTIES",-1),j={class:"flex bg-sky-500 px-2 py-2 text-white"},N=e("h1",{class:"flex-auto self-center font-bold"},"Property Details",-1),Y={class:"shadow-xs p-4 grid grid-cols-6 gap-4 bg-white/90 rounded"},F={class:"col-span-4"},G={for:"title"},I={key:0,class:"text-red-600"},W={for:"price"},Z={key:0,class:"text-red-600"},J={for:"address"},K={key:0,class:"text-red-600"},Q={for:"city"},X={key:0,class:"text-red-600"},$={for:"state"},ee={key:0,class:"text-red-600"},re={for:"postal_code"},te={key:0,class:"text-red-600"},oe={for:"country"},se={key:0,class:"text-red-600"},de={class:"col-span-2"},le={for:"bedrooms"},ne={key:0,class:"text-red-600"},ae={for:"bathrooms"},ie={key:0,class:"text-red-600"},ue={for:"lot_size"},ce={key:0,class:"text-red-600"},ye={for:"square_feet"},_e={key:0,class:"text-red-600"},be={for:"property_type_id"},pe={key:0,class:"text-red-600"},me=["value"],fe={for:"property_type_id"},xe={key:0,class:"text-red-600"},he=e("option",{value:"active"},"Active",-1),ge=e("option",{value:"inactive"},"Hide",-1),ve=[he,ge],ke={class:"shadow-xs py-2 px-4 bg-white/90 my-7 rounded"},we={for:"description"},Pe={key:0,class:"text-red-600"},Ve=e("div",{class:"text-right px-4"},[e("button",{class:"bg-secondary-600 shadow-xs text-white text-2xl py-2 px-4 rounded w-full md:w-1/4 hover:bg-secondary-700 transition-all"}," POST ")],-1),Ue={class:"flex bg-sky-500 px-2 py-2 text-white"},ze=e("h1",{class:"flex-auto self-center font-bold"},"Property Details",-1),Se=e("i",{class:"fas fa-close"},null,-1),Te=[Se],Ce={class:"p-2"},De={for:"property_type"},Le={key:0,class:"text-red-600"};function Oe(p,t,r,o,v,qe){const k=_("Head"),w=_("Link"),P=_("Modal"),V=_("LoadingAnim");return l(),d(h,null,[e("div",A,[b(k,{title:"POST PROPERTY"}),e("div",E,[R,b(w,{href:"/properties",class:"rounded bg-secondary-500 text-white hover:bg-secondary-600 transition border border-secondary-500 px-4 py-2"},{default:f(()=>[B,H]),_:1})]),e("div",j,[N,e("button",{onClick:t[0]||(t[0]=()=>{o.addpropModal=!0}),class:"px-4 py-2 bg-white text-teal-500 rounded text-sm hover:bg-teal-100 transition"},"ADD PROPERTY TYPE")]),e("form",{onSubmit:t[15]||(t[15]=T((...s)=>o.upload&&o.upload(...s),["prevent"])),action:"#",class:"capitalize"},[e("div",Y,[e("div",F,[e("div",null,[e("label",G,[a(" Title "),r.errors.title?(l(),d("span",I," - "+n(r.errors.title),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.property.title=s),type:"text",name:"title",id:"title",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.title,"border-teal-500":!r.errors.title}])},null,2),[[y,o.property.title]])]),e("div",null,[e("label",W,[a(" Price "),r.errors.price?(l(),d("span",Z," - "+n(r.errors.price),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.property.price=s),type:"number",name:"price",id:"price",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.price,"border-teal-500":!r.errors.price}])},null,2),[[y,o.property.price]])]),e("div",null,[e("label",J,[a(" Address "),r.errors.address?(l(),d("span",K," - "+n(r.errors.address),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>o.property.address=s),type:"text",name:"address",id:"address",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.address,"border-teal-500":!r.errors.address}])},null,2),[[y,o.property.address]])]),e("div",null,[e("label",Q,[a(" City "),r.errors.city?(l(),d("span",X," - "+n(r.errors.city),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>o.property.city=s),type:"text",name:"city",id:"city",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.city,"border-teal-500":!r.errors.city}])},null,2),[[y,o.property.city]])]),e("div",null,[e("label",$,[a(" State "),r.errors.state?(l(),d("span",ee," - "+n(r.errors.state),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[5]||(t[5]=s=>o.property.state=s),type:"text",name:"state",id:"state",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.state,"border-teal-500":!r.errors.state}])},null,2),[[y,o.property.state]])]),e("div",null,[e("label",re,[a(" Postal_code "),r.errors.postal_code?(l(),d("span",te," - "+n(r.errors.postal_code),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>o.property.postal_code=s),type:"text",name:"postal_code",id:"postal_code",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.postal_code,"border-teal-500":!r.errors.postal_code}])},null,2),[[y,o.property.postal_code]])]),e("div",null,[e("label",oe,[a(" Country "),r.errors.country?(l(),d("span",se," - "+n(r.errors.country),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>o.property.country=s),type:"text",name:"country",id:"country",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.country,"border-teal-500":!r.errors.country}])},null,2),[[y,o.property.country]])])]),e("div",de,[e("div",null,[e("label",le,[a(" Bedrooms "),r.errors.bedrooms?(l(),d("span",ne," - "+n(r.errors.bedrooms),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>o.property.bedrooms=s),type:"number",name:"bedrooms",id:"bedrooms",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.bedrooms,"border-teal-500":!r.errors.bedrooms}])},null,2),[[y,o.property.bedrooms]])]),e("div",null,[e("label",ae,[a(" bathrooms "),r.errors.bathrooms?(l(),d("span",ie," - "+n(r.errors.bathrooms),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[9]||(t[9]=s=>o.property.bathrooms=s),type:"number",name:"bathrooms",id:"bathrooms",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.bathrooms,"border-teal-500":!r.errors.bathrooms}])},null,2),[[y,o.property.bathrooms]])]),e("div",null,[e("label",ue,[a(" lot_size "),r.errors.lot_size?(l(),d("span",ce," - "+n(r.errors.lot_size),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[10]||(t[10]=s=>o.property.lot_size=s),type:"number",name:"lot_size",id:"lot_size",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.lot_size,"border-teal-500":!r.errors.lot_size}])},null,2),[[y,o.property.lot_size]])]),e("div",null,[e("label",ye,[a(" Square_feet "),r.errors.square_feet?(l(),d("span",_e," - "+n(r.errors.square_feet),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[11]||(t[11]=s=>o.property.square_feet=s),type:"number",id:"square_feet",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.square_feet,"border-teal-500":!r.errors.square_feet}])},null,2),[[y,o.property.square_feet]])]),e("div",null,[e("label",be,[a(" Property type "),r.errors.property_type_id?(l(),d("span",pe," - "+n(r.errors.property_type_id),1)):i("",!0)]),u(e("select",{"onUpdate:modelValue":t[12]||(t[12]=s=>o.property.property_type_id=s),id:"property_type_id",placeholder:"select property type",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.property_type_id,"border-teal-500":!r.errors.property_type_id}])},[(l(!0),d(h,null,C(r.property_types,s=>(l(),d("option",{key:s.id,value:s.id,selected:""},n(s.name),9,me))),128))],2),[[x,o.property.property_type_id]])]),e("div",null,[e("label",fe,[a(" Status "),r.errors.status?(l(),d("span",xe," - "+n(r.errors.status),1)):i("",!0)]),u(e("select",{"onUpdate:modelValue":t[13]||(t[13]=s=>o.property.status=s),id:"status",placeholder:"select property Status",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.status,"border-teal-500":!r.errors.status}])},ve,2),[[x,o.property.status]])])])]),e("div",ke,[e("label",we,[a(" Description "),r.errors.description?(l(),d("span",Pe," - "+n(r.errors.description),1)):i("",!0)]),u(e("textarea",{"onUpdate:modelValue":t[14]||(t[14]=s=>o.property.description=s),name:"description",id:"description",cols:"30",rows:"5",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.description,"border-teal-500":!r.errors.description}])},null,2),[[y,o.property.description]])]),Ve],32)]),b(P,{show:o.addpropModal,maxWidth:"sm"},{default:f(()=>[e("div",Ue,[ze,e("button",{onClick:t[16]||(t[16]=()=>{o.addpropModal=0})},Te)]),e("div",Ce,[e("label",De,[a(" Property Type "),r.errors.property_type?(l(),d("span",Le," - "+n(r.errors.property_type),1)):i("",!0)]),u(e("input",{"onUpdate:modelValue":t[17]||(t[17]=s=>o.property_type=s),type:"text",id:"property_type",class:c(["block w-full rounded mb-3 border-teal-500 rounded-md focus:ring-2 focus:ring-teal-500",{"border-red-500":r.errors.property_type,"border-teal-500":!r.errors.property_type}])},null,2),[[y,o.property_type]]),e("button",{onClick:t[18]||(t[18]=(...s)=>o.postProperty&&o.postProperty(...s)),class:"px-4 py-2 bg-teal-500 text-white rounded text-sm hover:bg-teal-600 transition"},"SAVE")])]),_:1},8,["show"]),b(V,{show:o.property.processing},null,8,["show"])],64)}const He=q(M,[["render",Oe]]);export{He as default};
