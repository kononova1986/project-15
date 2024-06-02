import{S as h,A as b}from"./assets/vendor-d52af3f3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const u=[{title:"Wallet Webservice",image:"../img/my-projects/manager-finance.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Wallet Webservice Project",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"Green harvest webservice",image:"../img/my-projects/vegetables.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Green harvest",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"English Exellence webservice",image:"../img/my-projects/discover.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"English Exellence",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"Transform your webservice",image:"../img/my-projects/transform-your.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transform your",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"Ukraine traditions webservice",image:"../img/my-projects/traditions-ukraine.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Ukraine traditions",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"Stay Healthy webservice",image:"../img/my-projects/get-body.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Stay Healthy",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"Mimino webservice",image:"../img/my-projects/mimino.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Mimino",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"Transformation with a Touch of the Brush webservice",image:"../img/my-projects/brand.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transformation with a Touch of the Brush",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"Fresh harvest box webservice",image:"../img/my-projects/fresh.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Fresh harvest box",svg:"../img/symbol-defs.svg#icon-arrow"},{title:"Transform your business webservice",image:"../img/my-projects/turn-your.jpg",techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transform your business",svg:"../img/symbol-defs.svg#icon-arrow"}];let a=0;const d=3;function v(){const e=document.querySelector(".project-list"),s=u.slice(a,a+d).map(({image:n,alt:t,techStack:r,title:c,link:f,svg:y})=>`
            <li class="project-item">
                <img src="${n}" alt="${t}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${r}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${c}</h3>
                        <div class="centered">
                            <button type="button" class="project-button">
                                <a href="${f}" class="project-link" target="_blank">VISIT
                                    <svg class="project-icon">
                                        <use href="${y}"></use>
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            `).join("");e.innerHTML+=s,a+=d,a>=u.length&&(document.querySelector(".load-more").style.display="none")}document.querySelector(".load-more").addEventListener("click",v);v();const w=document.querySelector(".backdrop-menu-list"),S=document.querySelector(".menu-btn"),k=document.querySelector(".menu-backdrop"),j=document.querySelector(".close-modal-btn ");function l(){k.classList.toggle("is-open")}S.addEventListener("click",l);j.addEventListener("click",l);w.addEventListener("click",e=>{e.target&&l()});const E=document.querySelector(".swiper-button-next"),L=document.querySelector(".swiper-button-prev");async function q(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return await e.json()}catch(e){return alert("Fetch error: "+e.message),console.error("Fetch error:",e),null}}function J(){new h(".swiper-container",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:E,prevEl:L},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:32,slideWidth:704},1280:{slidesPerView:2,slidesPerGroup:1,spaceBetween:32,slideWidth:592}},on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}})}function x(e){return`<li class="swiper-slide review">
    <p class="review-text">${e.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${e.avatar_url}" alt="Avatar">
      <h3 class="name">${e.author}</h3>
    </div>
  </li>`}async function P(e,o){const s=document.querySelector("#reviews-list");if(!s){console.error("Element #reviews-list not found");return}const n=await q();if(!n){s.innerHTML="Not found";return}const t=n.map(r=>o(r)).join("");s.innerHTML=t,e()}P(J,x);const m=document.querySelector(".form-work-togezer"),i=document.querySelector(".footer-modal-background"),T=document.querySelector(".footer-modal-btn"),G=document.querySelector(".input-work-togezer"),M=document.querySelector(".textarea-work-togezer"),p=document.querySelectorAll(".error-message")[0],g=document.querySelectorAll(".error-message")[1];i.style.display="none";m.addEventListener("submit",function(e){e.preventDefault();const o=G.value.trim(),s=M.value.trim();if(N(o))p.style.display="none";else{p.style.display="block";return}if(s===""){g.style.display="block";return}else g.style.display="none";i.style.display="flex",m.reset()});T.addEventListener("click",function(){i.style.display="none"});document.addEventListener("keydown",function(e){e.key==="Escape"&&(i.style.display="none")});i.addEventListener("click",function(e){e.target===i&&(i.style.display="none")});function N(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}document.addEventListener("DOMContentLoaded",function(){var e={duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,openOnInit:[0],elementClass:"accordion-item",triggerClass:"list-title-box",panelClass:"accordion-text",activeClass:"active",beforeOpen:function(o){console.log("Before opening:",o)},onOpen:function(o){console.log("Opened:",o)},beforeClose:function(o){console.log("Before closing:",o)},onClose:function(o){console.log("Closed:",o)}};new b(".accordion",e),document.querySelectorAll(".accordion-item .list-title-box").forEach(function(o){o.addEventListener("click",function(){var s=o.closest(".accordion-item"),n=s.classList.contains("active");document.querySelectorAll(".accordion-item").forEach(function(t){t.classList.remove("active")}),n||s.classList.add("active")})})});
//# sourceMappingURL=commonHelpers.js.map
