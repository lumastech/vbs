import{_ as p}from"./AppLayout-0fbc5f68.js";import c from"./DeleteUserForm-64a3c9c8.js";import l from"./LogoutOtherBrowserSessionsForm-95fbe5fc.js";import{S as s}from"./SectionBorder-b175a7dc.js";import f from"./TwoFactorAuthenticationForm-5740be4c.js";import u from"./UpdatePasswordForm-ae9674cb.js";import d from"./UpdateProfileInformationForm-5752335e.js";import{c as _,w as n,o as e,a as i,d as r,b as t,e as a,F as h}from"./app-42822e64.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Dropdown-6aeec8c4.js";import"./ResponsiveNavLink-d7ec804a.js";import"./DialogModal-80c3625d.js";import"./SectionTitle-bcb89294.js";import"./Modal-6892bab8.js";import"./DangerButton-8d071df3.js";import"./TextInput-cc709c84.js";import"./SecondaryButton-95ea5fb5.js";import"./ActionMessage-73d22a82.js";import"./PrimaryButton-f4ac4284.js";import"./InputLabel-9891c69a.js";import"./FormSection-014baa1c.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{J as default};
