import{S as d}from"./assets/vendor-7ad08012.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();hh;const m=document.querySelector(".backdrop-menu-list"),f=document.querySelector(".menu-btn"),p=document.querySelector(".menu-backdrop"),y=document.querySelector(".close-modal-btn ");function a(){p.classList.toggle("is-open")}f.addEventListener("click",a);y.addEventListener("click",a);m.addEventListener("click",t=>{t.target&&a()});const v=document.querySelector(".swiper-button-next"),w=document.querySelector(".swiper-button-prev");async function g(){try{const t=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){return alert("Fetch error: "+t.message),console.error("Fetch error:",t),null}}function h(){new d(".swiper-container",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:v,prevEl:w},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:32,slideWidth:704},1280:{slidesPerView:2,slidesPerGroup:1,spaceBetween:32,slideWidth:592}},on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}})}function b(t){return`<li class="swiper-slide review">
    <p class="review-text">${t.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${t.avatar_url}" alt="Avatar">
      <h3 class="name">${t.author}</h3>
    </div>
  </li>`}async function L(t,r){const s=document.querySelector("#reviews-list");if(!s){console.error("Element #reviews-list not found");return}const n=await g();if(!n){s.innerHTML="Not found";return}const e=n.map(o=>r(o)).join("");s.innerHTML=e,t()}L(h,b);const u=document.querySelector(".footer-form");u.addEventListener("submit",function(t){t.preventDefault();const r=document.querySelector(".footer-modal-background"),s=document.querySelector(".footer-input-success-message"),n=document.querySelector(".footer-input-error-message"),e=document.getElementById("email"),o=document.getElementById("comment");e.classList.remove("footer-input-error"),n.style.display="none";const c={email:e.value,comment:o.value};fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(i=>(i.ok?(r.classList.add("footer-modal-is-open"),document.querySelector(".footer-modal-btn").addEventListener("click",function(){r.classList.remove("footer-modal-is-open")}),document.addEventListener("keydown",function(l){l.key==="Escape"&&r.classList.remove("footer-modal-is-open")}),r.addEventListener("click",function(l){l.target===r&&r.classList.remove("footer-modal-is-open")}),e.classList.add("footer-input-success"),s.style.display="block",setTimeout(function(){s.style.display="none",e.classList.remove("footer-input-success")},1e4),u.reset()):(iziToast.error({title:"Oops!",message:"Please, enter a valid email address"}),e.classList.add("footer-input-error"),n.style.display="block"),i.json())).then(i=>i).catch(i=>i)});
//# sourceMappingURL=commonHelpers.js.map
