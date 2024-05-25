import{i as n,h as a,o as c,c as l,w as d,a as t,t as s,f as r}from"./app-b5b7322d.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const m={components:{Link:n},props:{item:Object}},h={class:"bg-secondary shadow rounded text-white"},u=["src"],f={class:"p-4 border-b border-secondary-300"},p={class:"text-2xl uppercase"},x={class:"text-sm mb-3"},b={class:"text-4xl text-teal-500"},v={class:"flex justify-between px-4 py-2 text-center"},y=t("p",{class:"font-bold"},"Beds",-1),w=t("p",{class:"font-bold"},"Baths",-1),g=t("p",{class:"font-bold"},"Area",-1),k=t("sup",null,"m2",-1);function B(o,L,e,j,C,M){const i=a("Link");return c(),l(i,{href:o.route("properties.show",e.item.id),class:"relative shadow rounded hover:scale-90 transition"},{default:d(()=>[t("div",h,[t("img",{src:e.item.images[0].image,alt:""},null,8,u),t("div",f,[t("h3",p,s(e.item.title),1),t("p",x,s(e.item.address)+", "+s(e.item.city)+", "+s(e.item.country),1),t("p",b,s(o.numeralFormat(e.item.price,"0,0[.]00 ZMW"))+" ZMW",1)]),t("div",v,[t("div",null,[y,t("p",null,s(e.item.bedrooms),1)]),t("div",null,[w,t("p",null,s(e.item.bathrooms),1)]),t("div",null,[g,t("p",null,[r(s(e.item.lot_size)+" ",1),k])])])])]),_:1},8,["href"])}const V=_(m,[["render",B]]);export{V as P};
