import{S as m}from"./assets/vendor-7ad08012.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();hh;const p=document.querySelector(".backdrop-menu-list"),f=document.querySelector(".menu-btn"),y=document.querySelector(".menu-backdrop"),g=document.querySelector(".close-modal-btn ");function l(){y.classList.toggle("is-open")}f.addEventListener("click",l);g.addEventListener("click",l);p.addEventListener("click",e=>{e.target&&l()});const w=document.querySelector(".swiper-button-next"),v=document.querySelector(".swiper-button-prev");async function b(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){return alert("Fetch error: "+e.message),console.error("Fetch error:",e),null}}function h(){new m(".swiper-container",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:w,prevEl:v},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:32,slideWidth:704},1280:{slidesPerView:2,slidesPerGroup:1,spaceBetween:32,slideWidth:592}},on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}})}function S(e){return`<li class="swiper-slide review">
    <p class="review-text">${e.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${e.avatar_url}" alt="Avatar">
      <h3 class="name">${e.author}</h3>
    </div>
  </li>`}async function E(e,o){const n=document.querySelector("#reviews-list");if(!n){console.error("Element #reviews-list not found");return}const i=await b();if(!i){n.innerHTML="Not found";return}const t=i.map(r=>o(r)).join("");n.innerHTML=t,e()}E(h,S);const a=document.querySelector(".form-work-togezer"),s=document.querySelector(".footer-modal-background"),L=document.querySelector(".footer-modal-btn"),q=document.querySelector(".input-work-togezer"),k=document.querySelector(".textarea-work-togezer"),u=document.querySelectorAll(".error-message")[0],d=document.querySelectorAll(".error-message")[1];s.style.display="none";a.addEventListener("submit",function(e){e.preventDefault();const o=q.value.trim(),n=k.value.trim();if(P(o))u.style.display="none";else{u.style.display="block";return}if(n===""){d.style.display="block";return}else d.style.display="none";s.style.display="flex",a.reset()});L.addEventListener("click",function(){s.style.display="none"});document.addEventListener("keydown",function(e){e.key==="Escape"&&(s.style.display="none")});s.addEventListener("click",function(e){e.target===s&&(s.style.display="none")});function P(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers.js.map