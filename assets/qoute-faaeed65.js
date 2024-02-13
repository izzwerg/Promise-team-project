import{a as y,i as l}from"./vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const T=document.querySelector(".head-button"),x=document.querySelector(".backdrop-menu-container");T.addEventListener("click",O);const w=document.querySelector(".backdrop-button");function O(){x.classList.remove("is-hidden"),w.addEventListener("click",E)}function E(){x.classList.add("is-hidden"),w.removeEventListener("click",E)}y.defaults.baseURL="https://energyflow.b.goit.study/api/exercises";async function N(o){try{return(await y.get(`/${o}`)).data}catch(e){if(e.response){const{status:s}=e.response;s>=400&&s<500?l.error({message:"Client error: No detailed information about the exercise was found."}):s>=500&&l.error({message:"Server error: Something went wrong while fetching exercise data."})}else e.request?l.error({message:"Request error: Failed to send request to the server."}):l.error({message:"Unknown error: Failed to fetch exercise data."});throw e}}function p(o){if(!o.length)return"";const s=o.charAt(0).toUpperCase(),r=o.slice(1);return s+r}function B({gifUrl:o,name:e,rating:s,target:r,bodyPart:t,equipment:n,popularity:i,burnedCalories:d,description:m},f,g,h,S){h.classList.add("is-visible"),f.classList.add("is-visible"),g.innerHTML=`
        <img
        src="${o}"
        alt="${e}"
        class="gif"
        />
        <div class="info">
            <h2 class="title">${p(e)}</h2>
            <div class="raiting">
                <p>${Number(s).toFixed(1)}</p>
                <div class="stars">
                    <svg class="icon">
                        <use href="./assets/sprite-fb630926.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-fb630926.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-fb630926.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-fb630926.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-fb630926.svg#star"></use>
                    </svg>
                </div>
            </div>
            <ul class="info_list">
                <li class="info_el">
                <p class="info_el_title">Target</p>
                <p class="info_el_text">${p(r)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Body Part</p>
                <p class="info_el_text">${p(t)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Equipment</p>
                <p class="info_el_text">${p(n)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Popular</p>
                <p class="info_el_text">${i}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Burned calories</p>
                <p class="info_el_text">${d}/3min</p>
                </li>
            </ul>
            <p class="description">${m}</p>
            <div class="buttons">
                <button type="button" class="addToFavorites">
                    Add to favorites
                    <svg class="iconHeart">
                        <use href="./assets/sprite-fb630926.svg#heart"></use>
                    </svg>
                </button>
                <button type="button" class="deletedForFavorites">
                    Remove from
                    <svg class="iconHeart">
                        <use href="./assets/sprite-fb630926.svg#heart"></use>
                    </svg>
                </button>
                <button type="button" class="giveRating" data-id="${S}">
                    Give a rating
                </button>
                <button type="button" class="exitModal">
                    <svg class="icon">
                        <use href="./assets/sprite-fb630926.svg#close"></use>
                    </svg>
                </button>
            </div>
        </div>
        `}function M(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),r=()=>{let t=JSON.parse(localStorage.getItem("favorites"));t||(t=[]),t.push(o),localStorage.setItem("favorites",JSON.stringify(t)),e.classList.remove("is_visible_flex"),e.classList.add("is-hidden"),s.classList.remove("is-hidden"),s.classList.add("is_visible_flex"),l.info({message:"Exercise added to your favorites"})};e.addEventListener("click",r)}function $(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),r=()=>{let t=JSON.parse(localStorage.getItem("favorites"));for(let n=0;n<t.length;n++)if(t[n]._id===o._id){t.splice(n,1),localStorage.setItem("favorites",JSON.stringify(t));break}e.classList.remove("is-hidden"),e.classList.add("is_visible_flex"),s.classList.remove("is_visible_flex"),s.classList.add("is-hidden"),l.info({message:"Exercise removed from your favorites"})};s.addEventListener("click",r)}function D(o,e,s){const r=o.querySelector(".exitModal"),t=()=>{o.classList.remove("is-visible"),s.classList.remove("is-visible"),document.body.style.overflow="visible",e.innerHTML=""},n=d=>{o.contains(d.target)||t()},i=d=>{d.key==="Escape"&&t()};document.addEventListener("click",n),r.addEventListener("click",t),document.addEventListener("keydown",i)}function R(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),r=localStorage.getItem("favorites");if(r===null){e.classList.add("is_visible_flex"),s.classList.add("is-hidden");return}if(r.indexOf(o)==-1){e.classList.add("is_visible_flex"),s.classList.add("is-hidden");return}else{e.classList.add("is-hidden"),s.classList.add("is_visible_flex");return}}async function A(o){try{const e=Math.floor(o.rating),s=document.querySelectorAll(".icon");for(let r=0;r<e;r++)s[r].style.fill="#EEA10C"}catch(e){console.error("Error while fetching exercise data:",e)}}function H(){const o="feedback-form-state",e=document.querySelector(".rating-form"),s=document.querySelector(".rating-input-email"),r=document.querySelector(".rating-input-textaera"),t=document.querySelector(".rating-close"),n=document.querySelector(".giveRating"),i=document.querySelector(".backdrop"),d=document.querySelector(".section_modal");let m;const f=document.querySelectorAll(".rating-star-form input"),g=document.querySelector(".rating-number");e.addEventListener("input",S),e.addEventListener("submit",h),n.addEventListener("click",function(){i.classList.add("is-open"),d.classList.remove("is-visible"),m=n.dataset.id}),t.addEventListener("click",function(){i.classList.remove("is-open"),d.classList.add("is-visible")}),f.forEach(a=>{a.addEventListener("change",()=>{const c=a.value;g.textContent=c+".0",k(c)})});async function h(a){if(a.preventDefault(),b()!==null){const c={email:s.value,review:r.value,rate:Number(b())};async function L(u,v){try{await y.patch(`https://energyflow.b.goit.study/api/exercises/${u}/rating`,v),l.info({message:"Rating has been updated"})}catch{l.error({message:"This email has already been used"})}}L(m,c),e.reset(),F(),g.textContent="0.0",localStorage.removeItem(o),i.classList.remove("is-open"),f.forEach(u=>{u.checked||u.parentElement.classList.add("disabled")})}}function S(){const a={email:s.value.trim(),message:r.value.trim(),rating:b()};localStorage.setItem(o,JSON.stringify(a))}function b(){const a=document.querySelector(".rating-star-form input:checked");return a?a.value:null}function F(){f.forEach(a=>{a.checked=!1})}function k(a){const c=JSON.parse(localStorage.getItem(o))||{};c.rating=a,localStorage.setItem(o,JSON.stringify(c))}function I(){const a=localStorage.getItem(o);if(a){const{email:c,message:L,rating:u}=JSON.parse(a);if(s.value=c,r.value=L,u){const v=document.querySelector(`.rating-star-form input[value="${u}"]`);v&&(v.checked=!0,g.textContent=+`${u}.toFixed(1)`)}}}I()}const j=()=>{document.querySelectorAll(".filtered-start-ex-btn").forEach(e=>{e.addEventListener("click",async()=>{const s=e.dataset.id,r=document.querySelector(".section_modal"),t=document.querySelector(".container_modal"),n=document.querySelector(".overlay");try{const i=await N(s);B(i,r,t,n,s),document.body.style.overflow="hidden",A(i),R(s),M(i),$(i),D(r,t,n),H()}catch(i){console.log(i),l.error({message:"Error when trying to show the exercise"})}})})},q=document.querySelector(".button-to-top");function J(){window.scrollY>window.innerHeight/2?C():U()}window.addEventListener("scroll",J);function P(o){o.preventDefault(),Q()}q.addEventListener("click",P);function Q(){window.scrollTo({top:0,behavior:"smooth"})}function C(){q.style.display="flex"}function U(){q.style.display="none"}async function W(o){try{const e="Quote-of-day",s=Y(),r=localStorage.getItem(e);if(r){const i=JSON.parse(r);if(i.date===s){_(i);return}}const t=await z(),n={date:s,author:t.author,quote:t.quote};_(n),localStorage.setItem(e,JSON.stringify(n))}catch(e){console.log(e)}}function _({author:o,quote:e}){const s={quoteText:document.querySelector("#quote-text"),quoteAuthor:document.querySelector("#quote-author")};s.quoteAuthor.innerHTML=o,s.quoteText.innerHTML=e}function Y(){const o=new Date,e=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0");return`${o.getFullYear()}-${s}-${e}`}async function z(){try{const o="https://energyflow.b.goit.study/api/quote";return(await y.get(o)).data}catch{throw new Error("Failed to fetch quote from the API.")}}W();export{j as o};
//# sourceMappingURL=qoute-faaeed65.js.map
