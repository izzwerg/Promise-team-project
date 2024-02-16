import{a as y,i as l}from"./vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const I=document.querySelector(".head-button"),x=document.querySelector(".backdrop-menu-container");I.addEventListener("click",O);const w=document.querySelector(".backdrop-button");function O(){x.classList.remove("is-hidden"),w.addEventListener("click",E)}function E(){x.classList.add("is-hidden"),w.removeEventListener("click",E)}y.defaults.baseURL="https://energyflow.b.goit.study/api/exercises";async function N(s){try{return(await y.get(`/${s}`)).data}catch(e){if(e.response){const{status:o}=e.response;o>=400&&o<500?l.error({message:"Client error: No detailed information about the exercise was found."}):o>=500&&l.error({message:"Server error: Something went wrong while fetching exercise data."})}else e.request?l.error({message:"Request error: Failed to send request to the server."}):l.error({message:"Unknown error: Failed to fetch exercise data."});throw e}}function p(s){if(!s.length)return"";const o=s.charAt(0).toUpperCase(),r=s.slice(1);return o+r}function B({gifUrl:s,name:e,rating:o,target:r,bodyPart:t,equipment:n,popularity:i,burnedCalories:d,description:m},f,g,h,S){h.classList.add("is-visible"),f.classList.add("is-visible"),g.innerHTML=`
        <img
        src="${s}"
        alt="${e}"
        class="gif"
        />
        <div class="info">
            <h2 class="title">${p(e)}</h2>
            <div class="raiting">
                <p>${Number(o).toFixed(1)}</p>
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
        `}function M(s){const e=document.querySelector(".addToFavorites"),o=document.querySelector(".deletedForFavorites"),r=()=>{let t=JSON.parse(localStorage.getItem("favorites"));t||(t=[]),t.push(s),localStorage.setItem("favorites",JSON.stringify(t)),e.classList.remove("is_visible_flex"),e.classList.add("is-hidden"),o.classList.remove("is-hidden"),o.classList.add("is_visible_flex"),l.success({message:"Exercise added to your favorites"})};e.addEventListener("click",r)}function $(s){const e=document.querySelector(".addToFavorites"),o=document.querySelector(".deletedForFavorites"),r=()=>{let t=JSON.parse(localStorage.getItem("favorites"));for(let n=0;n<t.length;n++)if(t[n]._id===s._id){t.splice(n,1),localStorage.setItem("favorites",JSON.stringify(t));break}e.classList.remove("is-hidden"),e.classList.add("is_visible_flex"),o.classList.remove("is_visible_flex"),o.classList.add("is-hidden"),l.success({message:"Exercise removed from your favorites"})};o.addEventListener("click",r)}function D(s,e,o){const r=s.querySelector(".exitModal"),t=()=>{s.classList.add("closing"),setTimeout(()=>{s.classList.remove("is-visible"),o.classList.remove("is-visible"),document.body.style.overflow="visible",e.innerHTML="",s.classList.remove("closing")},300),document.removeEventListener("click",n),r.removeEventListener("click",t),document.removeEventListener("keydown",i)},n=d=>{s.contains(d.target)||t()},i=d=>{d.key==="Escape"&&t()};document.addEventListener("click",n),r.addEventListener("click",t),document.addEventListener("keydown",i)}function R(s){const e=document.querySelector(".addToFavorites"),o=document.querySelector(".deletedForFavorites"),r=localStorage.getItem("favorites");if(r===null){e.classList.add("is_visible_flex"),o.classList.add("is-hidden");return}if(r.indexOf(s)==-1){e.classList.add("is_visible_flex"),o.classList.add("is-hidden");return}else{e.classList.add("is-hidden"),o.classList.add("is_visible_flex");return}}async function A(s){try{const e=Math.floor(s.rating),o=document.querySelectorAll(".icon");for(let r=0;r<e;r++)o[r].style.fill="#EEA10C"}catch(e){console.error("Error while fetching exercise data:",e)}}function H(){const s="feedback-form-state",e=document.querySelector(".rating-form"),o=document.querySelector(".rating-input-email"),r=document.querySelector(".rating-input-textaera"),t=document.querySelector(".rating-close"),n=document.querySelector(".giveRating"),i=document.querySelector(".backdrop"),d=document.querySelector(".section_modal");let m;const f=document.querySelectorAll(".rating-star-form input"),g=document.querySelector(".rating-number");e.addEventListener("input",S),e.addEventListener("submit",h),n.addEventListener("click",function(){i.classList.add("is-open"),d.classList.remove("is-visible"),m=n.dataset.id}),t.addEventListener("click",function(){i.classList.remove("is-open"),d.classList.add("is-visible")}),f.forEach(a=>{a.addEventListener("change",()=>{const c=a.value;g.textContent=c+".0",F(c)})});async function h(a){if(a.preventDefault(),b()!==null){const c={email:o.value,review:r.value,rate:Number(b())};async function L(u,v){try{await y.patch(`https://energyflow.b.goit.study/api/exercises/${u}/rating`,v),l.info({message:"Rating has been updated"})}catch{l.error({message:"This email has already been used"})}}L(m,c),e.reset(),k(),g.textContent="0.0",localStorage.removeItem(s),i.classList.remove("is-open"),f.forEach(u=>{u.checked||u.parentElement.classList.add("disabled")})}}function S(){const a={email:o.value.trim(),message:r.value.trim(),rating:b()};localStorage.setItem(s,JSON.stringify(a))}function b(){const a=document.querySelector(".rating-star-form input:checked");return a?a.value:null}function k(){f.forEach(a=>{a.checked=!1})}function F(a){const c=JSON.parse(localStorage.getItem(s))||{};c.rating=a,localStorage.setItem(s,JSON.stringify(c))}function T(){const a=localStorage.getItem(s);if(a){const{email:c,message:L,rating:u}=JSON.parse(a);if(o.value=c,r.value=L,u){const v=document.querySelector(`.rating-star-form input[value="${u}"]`);v&&(v.checked=!0,g.textContent=+`${u}.toFixed(1)`)}}}T()}const j=()=>{document.querySelectorAll(".filtered-start-ex-btn").forEach(e=>{e.addEventListener("click",async()=>{const o=e.dataset.id,r=document.querySelector(".section_modal"),t=document.querySelector(".container_modal"),n=document.querySelector(".overlay");try{const i=await N(o);B(i,r,t,n,o),document.body.style.overflow="hidden",A(i),R(o),M(i),$(i),D(r,t,n),H()}catch(i){console.log(i),l.error({message:"Error when trying to show the exercise"})}})})},q=document.querySelector(".button-to-top");function J(){window.scrollY>window.innerHeight/2?C():U()}window.addEventListener("scroll",J);function P(s){s.preventDefault(),Q()}q.addEventListener("click",P);function Q(){window.scrollTo({top:0,behavior:"smooth"})}function C(){q.style.display="flex"}function U(){q.style.display="none"}async function W(s){try{const e="Quote-of-day",o=Y(),r=localStorage.getItem(e);if(r){const i=JSON.parse(r);if(i.date===o){_(i);return}}const t=await z(),n={date:o,author:t.author,quote:t.quote};_(n),localStorage.setItem(e,JSON.stringify(n))}catch(e){console.log(e)}}function _({author:s,quote:e}){const o={quoteText:document.querySelector("#quote-text"),quoteAuthor:document.querySelector("#quote-author")};o.quoteAuthor.innerHTML=s,o.quoteText.innerHTML=e}function Y(){const s=new Date,e=String(s.getDate()).padStart(2,"0"),o=String(s.getMonth()+1).padStart(2,"0");return`${s.getFullYear()}-${o}-${e}`}async function z(){try{const s="https://energyflow.b.goit.study/api/quote";return(await y.get(s)).data}catch{throw new Error("Failed to fetch quote from the API.")}}W();export{j as o};
//# sourceMappingURL=qoute-dfc90006.js.map
