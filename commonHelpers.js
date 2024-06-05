import{S as j,a as S,A as k}from"./assets/vendor-06d11035.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const w="/project-15/assets/manager-finance-df2f0cd8.jpg",x="/project-15/assets/maneger-finance-x2-min-cbbe719a.jpg",E="/project-15/assets/vegetables-a587ed88.jpg",L="/project-15/assets/vegetables-x2-min-6c61081a.jpg",I="/project-15/assets/discover-0b5a74ec.jpg",q="/project-15/assets/discover-x2-min-8f5036ce.jpg",J="/project-15/assets/transform-your-a0ceb6ad.jpg",P="/project-15/assets/transform-your-x2-min-0ab9547c.jpg",M="/project-15/assets/traditions-ukraine-e1966ce6.jpg",T="/project-15/assets/traditions-ukarain-x2-min-f865a371.jpg",G="/project-15/assets/get-body-3915d0f2.jpg",N="/project-15/assets/get-body-x2-min-7bb29976.jpg",B="/project-15/assets/mimino-5120051c.jpg",$="/project-15/assets/mimino-x2-min-2bd02bb8.jpg",O="/project-15/assets/brand-7a40e5ec.jpg",A="/project-15/assets/brand-x2-min-6d61de72.jpg",C="/project-15/assets/fresh-c88d3a45.jpg",R="/project-15/assets/fresh-x2-min-7c3cc483.jpg",F="/project-15/assets/turn-your-453dc1a7.jpg",H="/project-15/assets/turn-your-x2-min-dcb3564d.jpg",i="/project-15/assets/symbol-defs-4dfd43f8.svg#icon-arrow",b=[{title:"Wallet Webservice",image:w,image2x:x,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Wallet Webservice Project",svg:i},{title:"Green harvest webservice",image:E,image2x:L,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Green harvest",svg:i},{title:"English Exellence webservice",image:I,image2x:q,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"English Exellence",svg:i},{title:"Transform your webservice",image:J,image2x:P,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transform your",svg:i},{title:"Ukraine traditions webservice",image:M,image2x:T,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Ukraine traditions",svg:i},{title:"Stay Healthy webservice",image:G,image2x:N,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Stay Healthy",svg:i},{title:"Mimino webservice",image:B,image2x:$,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Mimino",svg:i},{title:"Transformation with a Touch of the Brush webservice",image:O,image2x:A,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transformation with a Touch of the Brush",svg:i},{title:"Fresh harvest box webservice",image:C,image2x:R,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Fresh harvest box",svg:i},{title:"Transform your business webservice",image:F,image2x:H,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transform your business",svg:i}];let d=0;const h=3;let g;function y(){const t=document.querySelector(".project-list"),r=b.slice(d,d+h).map(({image:o,alt:s,techStack:a,title:l,link:u,svg:p},n)=>`
            <li class="project-item ${(d+n)%2===0?"left":"right"}">
                <img  srcset="${o} 1x, ${image2x} 2x" src="${o}"  alt="${s}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${a}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${l}</h3>
                        <div class="centered">
                            <button type="button" class="project-button">
                                <a href="${u}" class="project-link" target="_blank">VISIT
                                    <svg class="project-icon">
                                        <use href="${p}"></use>
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            `).join("");t.innerHTML+=r,document.querySelectorAll(".project-item:not(.observed)").forEach(o=>{g.observe(o),o.classList.add("observed")}),d+=h,d>=b.length&&(document.querySelector(".load-more").style.display="none")}document.querySelector(".load-more").addEventListener("click",y);g=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("show"),g.unobserve(e.target))})});y();const V=document.querySelector(".backdrop-menu-list"),W=document.querySelector(".menu-btn"),D=document.querySelector(".menu-backdrop"),U=document.querySelector(".close-modal-btn ");function v(){D.classList.toggle("is-open")}W.addEventListener("click",v);U.addEventListener("click",v);V.addEventListener("click",t=>{t.target&&v()});const Y=document.querySelectorAll('a[class="nav-link"]');Y.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const r=t.getAttribute("href").substring(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})})});const z=document.querySelector(".swiper-button-next"),K=document.querySelector(".swiper-button-prev");async function _(){try{const t=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){return alert("Fetch error: "+t.message),console.error("Fetch error:",t),null}}function Q(){new j(".swiper-container",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:z,prevEl:K},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:32,slideWidth:704},1280:{slidesPerView:2,slidesPerGroup:1,spaceBetween:32,slideWidth:592}},on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}})}function X(t){return`<li class="swiper-slide review">
    <p class="review-text">${t.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${t.avatar_url}" alt="Avatar">
      <h3 class="name">${t.author}</h3>
    </div>
  </li>`}async function Z(t,e){const r=document.querySelector("#reviews-list");if(!r){console.error("Element #reviews-list not found");return}const c=await _();if(!c){r.innerHTML="Not found";return}const o=c.map(s=>e(s)).join("");r.innerHTML=o,t()}Z(Q,X);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".form-work-togezer"),e=document.querySelector(".footer-modal-background"),r=document.querySelector(".footer-modal-btn"),c=document.querySelector(".input-work-togezer"),o=document.querySelector(".textarea-work-togezer"),s=document.querySelectorAll(".error-message")[0],a=document.querySelectorAll(".error-message")[1];e.style.display="none";function l(n){n?document.addEventListener("keydown",u):document.removeEventListener("keydown",u)}function u(n){n.key==="Escape"&&(e.style.display="none")}t.addEventListener("submit",async function(n){n.preventDefault();const m=c.value.trim(),f=o.value.trim();if(p(m))s.style.display="none";else{s.style.display="block";return}if(f===""){a.style.display="block";return}else a.style.display="none";try{await S.post("https://portfolio-js.b.goit.study/api/requests",{email:m,comment:f}),e.style.display="flex",l(!0)}catch{alert("Произошла ошибка при отправке сообщения.")}t.reset()}),r.addEventListener("click",function(){e.style.display="none",l(!1)}),e.addEventListener("click",function(n){n.target===e&&(e.style.display="none",l(!1))});function p(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)}});document.addEventListener("DOMContentLoaded",function(){var t={duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,openOnInit:[0],elementClass:"accordion-item",triggerClass:"list-title-box",panelClass:"accordion-text",activeClass:"active",beforeOpen:function(e){console.log("Before opening:",e)},onOpen:function(e){console.log("Opened:",e)},beforeClose:function(e){console.log("Before closing:",e)},onClose:function(e){console.log("Closed:",e)}};new k(".accordion",t),document.querySelectorAll(".accordion-item .list-title-box").forEach(function(e){e.addEventListener("click",function(){var r=e.closest(".accordion-item"),c=r.classList.contains("active");document.querySelectorAll(".accordion-item").forEach(function(o){o.classList.remove("active")}),c||r.classList.add("active")})})});
//# sourceMappingURL=commonHelpers.js.map
