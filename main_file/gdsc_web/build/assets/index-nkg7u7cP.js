import{j as e,r as l,a as E}from"./react--QUlYLtW.js";import{c as A}from"./react-dom-Dhd_DrQe.js";import{L as m,B as D}from"./react-router-dom-Blh37rLI.js";import{g as G,G as I,s as _,a as U}from"./firebase-BxMuPVIp.js";import{s as Y,t as O,u as H,v as R,w as F}from"./@firebase-Cm1URUe8.js";import{a as f,b,O as B,d as M,e as K,f as h}from"./react-router-nckMsa4m.js";import{S as v,E as w,N as S,P as N,A as C,a as y}from"./swiper-COSD2C2j.js";import{u as P}from"./react-responsive-CfNkuVjd.js";import"./css-mediaquery--lcB5qOX.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BFLWy9pZ.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./matchmediaquery-o2DIZOJ0.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./shallow-equal-BQUY1Bas.js";import"./prop-types-H3HX20jE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const q={apiKey:"AIzaSyAGE1KwpEKpbGzl4jD6EmDkqc57_T3o0KQ",authDomain:"gdsc-web-2d5fa.firebaseapp.com",projectId:"gdsc-web-2d5fa",storageBucket:"gdsc-web-2d5fa.appspot.com",messagingSenderId:"335449718955",appId:"1:335449718955:web:dd0b50e462b99577c877ee",measurementId:"G-DXL8CH7R7D"},p=Y(q);O(p);const n=G(p),V=new I,z=H(p),J=()=>(f(),e.jsxs("div",{children:[e.jsx("ul",{class:"breadcrumb",id:"breadcrumb",children:"This is bread crumb placeholder"}),e.jsxs("div",{class:"main_box-list",children:[e.jsxs("div",{class:"main_box",children:[e.jsx("img",{src:"https://via.placeholder.com/40",alt:"action"}),e.jsx("p",{children:"Club form"})]}),e.jsxs("div",{class:"main_box",href:"#box",children:[e.jsx("img",{src:"https://via.placeholder.com/40",alt:"action"}),e.jsx("p",{children:"User Profile"})]}),e.jsx("div",{class:"cutline"}),e.jsxs("div",{class:"main_box",href:"#box",children:[e.jsx("img",{src:"https://via.placeholder.com/40",alt:"action"}),e.jsx("p",{children:"secbox"})]}),e.jsx("div",{class:"cutline"}),e.jsx("div",{class:"main_box",href:"#payment",children:e.jsx("div",{})})]}),e.jsx("button",{class:"floating-button",id:"_signin_floatingButton",children:"+"})]}));function Q(){const t=f(),r=async()=>{await _(n),await U(n,V),console.log(n),t("/")};return e.jsx("div",{className:"login-parent-container",children:e.jsxs("div",{className:"form_container",children:[e.jsx("div",{className:"login-backward",children:e.jsx(m,{to:"/",children:e.jsxs("div",{className:"login-backward-button",children:[e.jsx("img",{src:"/images/backward.png",alt:"NSYSU img"}),e.jsx("h1",{children:"back"})]})})}),e.jsxs("div",{className:"heading",children:[e.jsx("img",{src:"/images/GDSC.png",alt:"GDSC img"}),e.jsx("div",{className:"title",children:"NSYSU GDSC"})]}),e.jsxs("button",{className:"google_btn",onClick:r,children:[e.jsx("img",{src:"./images/google.png",alt:"google icon"}),e.jsx("span",{children:"Sing in with Google"})]}),e.jsx("div",{className:"login-other-option",children:e.jsx(m,{to:"",children:e.jsx("p",{className:"login-other-option-button",children:"admin login"})})})]})})}const k=({target:t,onClose:r})=>e.jsxs("div",{className:"modal",children:[e.jsxs("div",{className:"modal-content",children:[e.jsx("span",{className:"close",onClick:r,children:"×"}),e.jsx("h2",{children:t.name}),e.jsx("img",{src:t.image,alt:t.name}),e.jsx("p",{children:t.description})]}),e.jsx("button",{className:"modal-join-button",onClick:console.log("Join"),children:"Join !"})]}),T=({Projects:t=[]})=>{const[r,a]=l.useState(null);l.useState(0);const o=s=>{const i=s.slides,c=s.activeIndex;i.forEach((d,u)=>{u===c?d.classList.remove("swiper-slide-faded"):d.classList.add("swiper-slide-faded")})};return Array.isArray(t)?e.jsxs("div",{children:[e.jsx(v,{modules:[w,S,N,C],spaceBetween:50,slidesPerView:3,grabCursor:!0,centeredSlides:!0,scrollbar:{draggable:!0},pagination:{clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},effect:"coverflow",coverflowEffect:{rotate:0,stretch:0,depth:120,modifier:1.5,slideShadows:!1},breakpoints:{480:{slidesPerView:3,slidesPerGroup:1}},onSlideChange:o,children:t.map((s,i)=>e.jsx(y,{children:e.jsxs("div",{className:"Clickable-div",onClick:()=>a(s),children:[e.jsx("img",{src:s.image==""?"https://via.placeholder.com/360":s.image,alt:s.name}),e.jsx("h3",{children:s.name})]})},s.id))}),r&&e.jsx(k,{target:r,onClose:()=>a(null)})]}):null},W=({Courses:t=[]})=>{const[r,a]=l.useState(null);l.useState(0);const o=s=>{const i=s.slides,c=s.activeIndex;i.forEach((d,u)=>{u===c?d.classList.remove("swiper-slide-faded"):d.classList.add("swiper-slide-faded")})};return Array.isArray(t)?e.jsxs("div",{children:[e.jsx(v,{modules:[w,S,N,C],spaceBetween:50,slidesPerView:3,grabCursor:!0,centeredSlides:!0,scrollbar:{draggable:!0},pagination:{clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},effect:"coverflow",coverflowEffect:{rotate:0,stretch:0,depth:120,modifier:1.5,slideShadows:!1},breakpoints:{480:{slidesPerView:3,slidesPerGroup:1}},onSlideChange:o,children:t.map((s,i)=>e.jsx(y,{children:e.jsxs("div",{className:"Clickable-div",onClick:()=>a(s),children:[e.jsx("img",{src:s.image==""?"https://via.placeholder.com/360":s.image,alt:s.name}),e.jsx("h3",{children:s.name})]})},s.id))}),r&&e.jsx(k,{target:r,onClose:()=>a(null)})]}):null};function X(){const[t,r]=l.useState("Cyberpunk Club"),[a,o]=l.useState("2024"),[s,i]=l.useState([]),[c,d]=l.useState([]),u=async()=>{const L=new Date().getMonth()+1,g=new Date().getFullYear(),j=`${L>8,g}`,x=(await R(F(z,"Clubstatus",j))).data();r(x.club_name),o(j),d(x.course),i(x.project_info)};return l.useEffect(()=>{u()},[]),e.jsxs("div",{className:"preview-body",children:[e.jsxs("div",{className:"Slider-container",children:[e.jsx("h2",{className:"preview-course-title",children:"Courses"}),e.jsx(W,{Courses:c})]}),e.jsxs("div",{className:"Slider-container",children:[e.jsx("h2",{className:"preview-project-title",children:"Projects"}),e.jsx(T,{Projects:s})]})]})}const $=()=>{const t=b(),r=P({query:"(max-width: 768px)"});function a(){if(t.pathname==="/Home"){const o=async()=>{await n.signOut()};return e.jsx(m,{to:"/",children:e.jsx("button",{className:"header-button",onClick:o,children:"Log out"})})}else return t.pathname==="/"&&!(n!=null&&n.currentUser)?e.jsx(m,{to:"/login",children:e.jsx("button",{className:"header-button",children:"Login"})}):e.jsx(m,{to:"/Home",children:e.jsx("button",{className:"header-button",children:"Home"})})}return e.jsxs("header",{className:"header",children:[e.jsx(m,{to:"/Home",children:e.jsxs("div",{className:"logo-container",style:{display:"flex",alignItems:"center"},children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:"/images/GDSC.png",alt:"Club Logo"})}),r?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"club-name",children:[e.jsx("h1",{children:"GDSC"}),e.jsx("h2",{children:"NSYSU"})]})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"club-name",children:[e.jsx("h1",{children:"Google Developer Student Club"}),e.jsx("h2",{children:"NSYSU"})]})})]})}),e.jsxs("div",{className:"user-info",children:[a(),e.jsx("img",{src:n!=null&&n.currentUser?n==null?void 0:n.currentUser.photoURL:"https://via.placeholder.com/40",alt:"User Avatar",className:"user-avatar"})]})]})},Z=()=>{const t=new Date().getFullYear();return P({query:"(max-width: 768px)"}),e.jsx("footer",{className:"footer",children:e.jsxs("div",{className:"footer-content",children:[e.jsxs("p",{children:["NSYSU GDSC ",t]}),e.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"}),e.jsx("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})})},ee=({user:t})=>{var r;return(r=n==null?void 0:n.currentUser)!=null&&r.displayName?e.jsx(B,{}):e.jsx(M,{to:"login"})};function se(){l.useState(null);let t=b();return e.jsxs("div",{className:"container",children:[t.pathname!=="/login"&&e.jsx($,{}),e.jsxs(K,{children:[e.jsx(h,{exact:!0,path:"/",element:e.jsx(X,{})}),e.jsx(h,{element:e.jsx(ee,{}),children:e.jsx(h,{exact:!0,path:"/Home",element:e.jsx(J,{})})}),e.jsx(h,{exact:!0,path:"/login",element:e.jsx(Q,{})})]}),t.pathname!=="/Login"&&t.pathname!=="/Home"&&e.jsx(Z,{})]})}const te=A.createRoot(document.getElementById("root"));te.render(e.jsx(E.StrictMode,{children:e.jsx(D,{children:e.jsx(se,{})})}));
