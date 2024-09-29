import{o as s,d as o,a as e,K as T,r as x,y as B,n as f,e as l,t as m,j as y,p as b,c as g,w as r,u as k,i as $,k as L,b as i,Z as P,f as u,F as w,g as M,O as S}from"./app-42822e64.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as C}from"./Dropdown-6aeec8c4.js";import{_ as p}from"./ResponsiveNavLink-d7ec804a.js";const A={},F={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},N=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),D=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),O=[N,D];function V(c,n){return s(),o("svg",F,O)}const E=z(A,[["render",V]]),I={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},H={class:"flex items-center justify-between flex-wrap"},K={class:"w-0 flex-1 flex items-center min-w-0"},Z={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),G=[q],J={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),R=[Q],U={class:"ml-3 font-medium text-sm text-white truncate"},W={class:"shrink-0 sm:ml-3"},X=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Y=[X],ee={__name:"Banner",setup(c){const n=T(),h=x(!0),d=x("success"),t=x("");return B(async()=>{var _,a;d.value=((_=n.props.jetstream.flash)==null?void 0:_.bannerStyle)||"success",t.value=((a=n.props.jetstream.flash)==null?void 0:a.banner)||"",h.value=!0}),(_,a)=>(s(),o("div",null,[h.value&&t.value?(s(),o("div",{key:0,class:f({"bg-indigo-500":d.value=="success","bg-red-700":d.value=="danger"})},[e("div",I,[e("div",H,[e("div",K,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":d.value=="success","bg-red-600":d.value=="danger"}])},[d.value=="success"?(s(),o("svg",Z,G)):l("",!0),d.value=="danger"?(s(),o("svg",J,R)):l("",!0)],2),e("p",U,m(t.value),1)]),e("div",W,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":d.value=="success","hover:bg-red-600 focus:bg-red-600":d.value=="danger"}]),"aria-label":"Dismiss",onClick:a[0]||(a[0]=y(j=>h.value=!1,["prevent"]))},Y,2)])])])],2)):l("",!0)]))}},te={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},se=["href"],v={__name:"DropdownLink",props:{href:String,as:String},setup(c){return(n,h)=>(s(),o("div",null,[c.as=="button"?(s(),o("button",te,[b(n.$slots,"default")])):c.as=="a"?(s(),o("a",{key:1,href:c.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[b(n.$slots,"default")],8,se)):(s(),g(k($),{key:2,href:c.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:r(()=>[b(n.$slots,"default")]),_:3},8,["href"]))]))}},oe={__name:"NavLink",props:{href:String,active:Boolean},setup(c){const n=c,h=L(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(d,t)=>(s(),g(k($),{href:c.href,class:f(h.value)},{default:r(()=>[b(d.$slots,"default")]),_:3},8,["href","class"]))}},re={class:"min-h-screen bg-gray-100"},ne={class:"bg-white border-b border-gray-100"},ae={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ie={class:"flex justify-between h-16"},le={class:"flex"},de={class:"shrink-0 flex items-center"},ue={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},ce={class:"hidden sm:flex sm:items-center sm:ml-6"},he={class:"ml-3 relative"},pe={class:"inline-flex rounded-md"},me={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},ge=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),fe={class:"w-60"},_e=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),ve=e("div",{class:"border-t border-gray-200"},null,-1),be=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),we=["onSubmit"],ye={class:"flex items-center"},xe={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ke=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),$e=[ke],je={class:"ml-3 relative"},Me={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Se=["src","alt"],Ce={key:1,class:"inline-flex rounded-md"},Te={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Be=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Le=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Pe=e("div",{class:"border-t border-gray-200"},null,-1),ze=["onSubmit"],Ae={class:"-mr-2 flex items-center sm:hidden"},Fe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ne={class:"pt-2 pb-3 space-y-1"},De={class:"pt-4 pb-1 border-t border-gray-200"},Oe={class:"flex items-center px-4"},Ve={key:0,class:"shrink-0 mr-3"},Ee=["src","alt"],Ie={class:"font-medium text-base text-gray-800"},He={class:"font-medium text-sm text-gray-500"},Ke={class:"mt-3 space-y-1"},Ze=["onSubmit"],qe=e("div",{class:"border-t border-gray-200"},null,-1),Ge=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Je=e("div",{class:"border-t border-gray-200"},null,-1),Qe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Re=["onSubmit"],Ue={class:"flex items-center"},We={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Xe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ye=[Xe],et={key:0,class:"bg-white shadow"},tt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},at={__name:"AppLayout",props:{title:String},setup(c){const n=x(!1),h=t=>{S.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},d=()=>{S.post(route("logout"))};return(t,_)=>(s(),o("div",null,[i(k(P),{title:c.title},null,8,["title"]),i(ee),e("div",re,[e("nav",ne,[e("div",ae,[e("div",ie,[e("div",le,[e("div",de,[i(k($),{href:t.route("dashboard")},{default:r(()=>[i(E,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ue,[i(oe,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[u(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",ce,[e("div",he,[t.$page.props.jetstream.hasTeamFeatures?(s(),g(C,{key:0,align:"right",width:"60"},{trigger:r(()=>[e("span",pe,[e("button",me,[u(m(t.$page.props.auth.user.current_team.name)+" ",1),ge])])]),content:r(()=>[e("div",fe,[_e,i(v,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:r(()=>[u(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),g(v,{key:0,href:t.route("teams.create")},{default:r(()=>[u(" Create New Team ")]),_:1},8,["href"])):l("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),o(w,{key:1},[ve,be,(s(!0),o(w,null,M(t.$page.props.auth.user.all_teams,a=>(s(),o("form",{key:a.id,onSubmit:y(j=>h(a),["prevent"])},[i(v,{as:"button"},{default:r(()=>[e("div",ye,[a.id==t.$page.props.auth.user.current_team_id?(s(),o("svg",xe,$e)):l("",!0),e("div",null,m(a.name),1)])]),_:2},1024)],40,we))),128))],64)):l("",!0)])]),_:1})):l("",!0)]),e("div",je,[i(C,{align:"right",width:"48"},{trigger:r(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),o("button",Me,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Se)])):(s(),o("span",Ce,[e("button",Te,[u(m(t.$page.props.auth.user.name)+" ",1),Be])]))]),content:r(()=>[Le,i(v,{href:t.route("profile.show")},{default:r(()=>[u(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),g(v,{key:0,href:t.route("api-tokens.index")},{default:r(()=>[u(" API Tokens ")]),_:1},8,["href"])):l("",!0),Pe,e("form",{onSubmit:y(d,["prevent"])},[i(v,{as:"button"},{default:r(()=>[u(" Log Out ")]),_:1})],40,ze)]),_:1})])]),e("div",Ae,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:_[0]||(_[0]=a=>n.value=!n.value)},[(s(),o("svg",Fe,[e("path",{class:f({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",Ne,[i(p,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:r(()=>[u(" Dashboard ")]),_:1},8,["href","active"])]),e("div",De,[e("div",Oe,[t.$page.props.jetstream.managesProfilePhotos?(s(),o("div",Ve,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ee)])):l("",!0),e("div",null,[e("div",Ie,m(t.$page.props.auth.user.name),1),e("div",He,m(t.$page.props.auth.user.email),1)])]),e("div",Ke,[i(p,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:r(()=>[u(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),g(p,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:r(()=>[u(" API Tokens ")]),_:1},8,["href","active"])):l("",!0),e("form",{method:"POST",onSubmit:y(d,["prevent"])},[i(p,{as:"button"},{default:r(()=>[u(" Log Out ")]),_:1})],40,Ze),t.$page.props.jetstream.hasTeamFeatures?(s(),o(w,{key:1},[qe,Ge,i(p,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:r(()=>[u(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),g(p,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:r(()=>[u(" Create New Team ")]),_:1},8,["href","active"])):l("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),o(w,{key:1},[Je,Qe,(s(!0),o(w,null,M(t.$page.props.auth.user.all_teams,a=>(s(),o("form",{key:a.id,onSubmit:y(j=>h(a),["prevent"])},[i(p,{as:"button"},{default:r(()=>[e("div",Ue,[a.id==t.$page.props.auth.user.current_team_id?(s(),o("svg",We,Ye)):l("",!0),e("div",null,m(a.name),1)])]),_:2},1024)],40,Re))),128))],64)):l("",!0)],64)):l("",!0)])])],2)]),t.$slots.header?(s(),o("header",et,[e("div",tt,[b(t.$slots,"header")])])):l("",!0),e("main",null,[b(t.$slots,"default")])])]))}};export{at as _};
