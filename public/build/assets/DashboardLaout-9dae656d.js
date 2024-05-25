import{i,h as c,o as h,d as f,a as e,t as u,b as o,w as t,f as l,p,E as _}from"./app-b5b7322d.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const b="/build/assets/avater-dbd80512.png";const g={components:{Link:i},setup(){return{sideToggle:()=>{document.querySelector("aside").classList.toggle("-translate-x-full")}}}},x={class:"fixed w-full h-full blurd-bg text-secondary-500"},y={class:"md:flex h-full backdrop-blur-lg bg-secondary-100/80"},v={class:"flex flex-col px-2 md:px-2 text-secondary-600"},w={class:"text-center border-b pb-4 mb-7 border-secondary-200"},k=e("div",{class:"rounded-full bg-white ring w-12 h-12 lg:w-24 lg:h-24 mx-auto transition-all overflow-hidden"},[e("img",{src:b,alt:"",class:"w-full h-full scale-110 rounded-full"})],-1),S={class:"mt-4 md:hidden lg:block"},D=e("i",{class:"fa-solid fa-lock w-7 mr-4"},null,-1),L=e("span",{class:""},"LOG OUT",-1),R=e("i",{class:"fa-solid fa-home w-7 mr-3"},null,-1),T=e("i",{class:"fa-solid fa-users w-7 mr-3"},null,-1),E=e("i",{class:"fa-solid fa-file-invoice-dollar w-7 mr-4"},null,-1),A=e("i",{class:"fa-solid fa-ticket w-7 mr-3"},null,-1),N=e("i",{class:"fa-solid fa-plus-circle w-7 mr-3"},null,-1),B=e("i",{class:"fa-solid fa-plus-circle w-7 mr-3"},null,-1),O=e("i",{class:"fa-solid fa-plus-circle w-7 mr-3"},null,-1),C=e("hr",{class:"border-t border-secondary-200 my-4"},null,-1),P=e("i",{class:"fa-solid fa-world w-7 mr-3"},null,-1),V={class:"flex-auto h-full text-gray-500"},j={class:"flex px-2 py-2 m-2 rounded-md place-items-center backdrop-blur bg-white/80 border-b"},U=e("i",{class:"fa-solid fa-bars"},null,-1),H=[U],I=e("h2",{class:"text-gray-500 flex-auto mx-2"},"DASHBOARD",-1),$={class:"flex space-x-4"},q=_('<div class="hidden md:flex rounded-md border border-secondary-400 bg-white overflow-hidden"><input type="search" name="search" id="search" class="border-0 bg-none" placeholder="Search"><button class="px-2 border-l bg-secondary-50 hover:bg-secondary-500 hover:text-white text-secondary-500 transition"><i class="fa-solid fa-magnifying-glass"></i></button></div><p class="rounded-full p-2 bg-secondary-50 border border-secondary-400 w-10 h-10 flex place-items-center justify-center text-secondary-500"><i class="fa-solid fa-user"></i></p>',2),z=e("i",{class:"fa-solid fa-sign-out"},null,-1),G=e("span",{class:"hidden md:inline"},"Logout",-1),W={class:"pt-10 h-full w-full overflow-auto pb-32"};function F(r,a,J,d,K,M){const s=c("Link");return h(),f("div",x,[e("div",y,[e("aside",{onClick:a[0]||(a[0]=(...n)=>d.sideToggle&&d.sideToggle(...n)),class:"z-50 lg:w-[300px] shrink-0 text-secondary-800 bg-white/80 backdrop-blur shadow py-7 h-full lg:mb-7 lg:mt-2 lg:mx-2 lg:bottom-7 lg:left-2 rounded-md overflow-x-hidd overflow-y-auto absolute lg:static lg:translate-x-0 -translate-x-full transition-all"},[e("nav",v,[e("div",w,[k,e("p",S,u(r.$page.props.auth.name),1),o(s,{href:"/logout",as:"button",method:"post",class:"block w-full place-items-center overflow-hidden px-4 py-2 rounded md:rounded-lg bg-white shadow-sm mb-1 mt-4 hover:bg-secondary-500 hover:text-white transition"},{default:t(()=>[D,L]),_:1})]),o(s,{href:"/dashboard",class:"flex line-clamp-1 place-items-center overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition"},{default:t(()=>[R,l(" DASHBOARD ")]),_:1}),o(s,{href:"/user",class:"flex line-clamp-1 place-items-center overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition"},{default:t(()=>[T,l(" USERS ")]),_:1}),o(s,{href:"/order",class:"flex line-clamp-1 place-items-center overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition"},{default:t(()=>[E,l(" ORDERS ")]),_:1}),o(s,{href:"/plans",class:"flex line-clamp-1 place-items-center overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition"},{default:t(()=>[A,l(" PLANS ")]),_:1}),o(s,{href:r.route("plans.create"),class:"flex line-clamp-1 place-items-cent~er overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition"},{default:t(()=>[N,l(" ADD PLAN ")]),_:1},8,["href"]),o(s,{href:"/property",class:"flex line-clamp-1 place-items-cent~er overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition"},{default:t(()=>[B,l(" PROPERTIES ")]),_:1}),o(s,{href:"/dashboard",class:"flex line-clamp-1 place-items-cent~er overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition"},{default:t(()=>[O,l(" BURNER SLIDERS ")]),_:1}),C,o(s,{href:"/",class:"flex line-clamp-1 place-items-cent~er overflow-hidden px-4 py-2 rounded hover:bg-secondary-200 hover:text-secondary-800 transition"},{default:t(()=>[P,l(" Website ")]),_:1})])]),e("main",V,[e("div",j,[e("button",{onClick:a[1]||(a[1]=(...n)=>d.sideToggle&&d.sideToggle(...n)),class:"xl:hidden rounded p-2 bg-secondary-50 h-10 flex gap-2 place-items-center justify-center text-secondary-500 hover:bg-secondary-500 hover:text-white transition"},H),I,e("div",$,[q,o(s,{href:"/logout",as:"button",type:"button",method:"post",class:"rounded-md p-2 bg-secondary-50 border border-secondary-400 h-10 flex gap-2 place-items-center justify-center text-secondary-500 hover:bg-secondary-500 hover:text-white transition"},{default:t(()=>[z,G]),_:1})])]),e("div",W,[p(r.$slots,"default")])])])])}const Y=m(g,[["render",F]]);export{Y as D};
