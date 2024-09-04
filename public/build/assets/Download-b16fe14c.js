import{N as _}from"./Navbar-296df798.js";import{F as p}from"./Footer-0b5cf3fc.js";import{P as h}from"./ProductItem-84546f6b.js";import{Z as x,i as y,h as a,d as o,b as n,a as e,f as t,e as l,F as i,g as b,o as r}from"./app-dfe17c11.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-784327fd.js";import"./Modal-f3bdf0e6.js";/* empty css                                                    */import"./logo-ee70da88.js";const g={props:{invoice:Object,plan:Object,images:Array,files:Array},components:{Head:x,Link:y,Navbar:_,Footer:p,ProductItem:h}},v={class:"bg-secondary-500"},w=e("div",{class:"colousel-bg h-96"},null,-1),N={class:"bg-secondary-800 text-secondary-10 pt-9"},k={class:"mx-auto py-24 max-w-7xl"},F=e("div",{class:"border border-gray-600 p-4 md:p-7 rounded-md mb-4"},[e("p",{class:"text-2xl md:text-4xl text-yellow-600"},"Your Order Number"),e("div",{class:"flex"},[e("form",{action:"{{ url('searchorder') }}",method:"post"},[e("input",{type:"text",name:"order",value:"{{ isset($order)? $order->order_number:old('order')}}",class:"border border-gray-600 rounded-l bg-gray-700",placeholder:"Search order number"}),e("button",{type:"submit",class:"border border-gray-600 py-2 px-4 my-4 bg-gray-600 text-white hover:bg-yellow-700 transition-all rounded-r"},"Search")])])],-1),O={key:0,class:"border border-gray-600 p-4 md:p-9 rounded-md"},$={key:0,class:"text-yellow-600 mt-4 text-2xl md:text-4xl"},B=e("p",null,"Bellow are your document download links, they will be avairrable within 48 hours",-1),D=e("p",null,"Keep your order number safe in case you want to come back to download within 48 hours and for future refference.",-1),L=e("h3",{class:"text-2xl mt-4"},"DOWNLOAD LINKS",-1),P=e("h4",null,"Images",-1),V={class:"grid grid-cols-3"},A=["src","alt"],C=e("h2",{class:"text-yellow-600 mt-4 text-2xl md:text-4xl"},"Failed!",-1),H=e("p",null,"Payment for this transaction did not go through!",-1),I=e("div",{class:"border border-gray-600 p-4 md:p-9 rounded-md"},[e("h2",{class:"text-yellow-600 mt-4 text-2xl md:text-4xl"},"Order not found!"),e("p",null,"Provided information did not march any order in our systen!")],-1);function S(j,K,s,Y,E,T){const c=a("Head"),m=a("Navbar"),u=a("Footer");return r(),o(i,null,[n(c,{title:"Contact us"}),e("header",v,[n(m),w]),e("section",N,[e("div",k,[F,s.invoice.id?(r(),o("div",O,[t(' @if($order->status == "success") '),s.invoice.status==="paid"?(r(),o("h2",$,"Your Order")):l("",!0),B,D,L,P,e("div",V,[(r(!0),o(i,null,b(s.images,d=>(r(),o("img",{key:d.id,src:d.url,alt:d.name,class:"aspect-video"},null,8,A))),128))]),t(' @endif @if($order->status == "failed") '),C,H,t(" @endif ")])):l("",!0),t(" @endif @if(!isset($order)) "),I,t(" @endif ")])]),n(u)],64)}const U=f(g,[["render",S]]);export{U as default};
