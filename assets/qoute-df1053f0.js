import{a as d,i as c}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S=document.querySelector(".head-button"),p=document.querySelector(".backdrop-menu-container");S.addEventListener("click",q);const v=document.querySelector(".backdrop-button");function q(){p.classList.remove("is-hidden"),v.addEventListener("click",g)}function g(){p.classList.add("is-hidden"),v.removeEventListener("click",g)}d.defaults.baseURL="https://energyflow.b.goit.study/api/exercises";async function h(o){try{return(await d.get(`/${o}`)).data}catch(t){if(t.response){const{status:s}=t.response;s>=400&&s<500?c.error({message:"Client error: No detailed information about the exercise was found."}):s>=500&&c.error({message:"Server error: Something went wrong while fetching exercise data."})}else t.request?c.error({message:"Request error: Failed to send request to the server."}):c.error({message:"Unknown error: Failed to fetch exercise data."});throw t}}function l(o){if(!o.length)return"";const s=o.charAt(0).toUpperCase(),i=o.slice(1);return s+i}function w({gifUrl:o,name:t,rating:s,target:i,bodyPart:e,equipment:r,popularity:n,burnedCalories:a,description:y},m,L,b){b.classList.add("is-visible"),m.classList.add("is-visible"),L.innerHTML=`
        <img
        src="${o}"
        alt="${t}"
        class="gif"
        />
        <div class="info">
            <h2 class="title">${l(t)}</h2>
            <div class="raiting">
                <p>${Number(s).toFixed(1)}</p>
                <div class="stars">
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                </div>
            </div>
            <ul class="info_list">
                <li class="info_el">
                <p class="info_el_title">Target</p>
                <p class="info_el_text">${l(i)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Body Part</p>
                <p class="info_el_text">${l(e)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Equipment</p>
                <p class="info_el_text">${l(r)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Popular</p>
                <p class="info_el_text">${n}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Burned calories</p>
                <p class="info_el_text">${a}/3min</p>
                </li>
            </ul>
            <p class="description">${y}</p>
            <div class="buttons">
                <button type="button" class="addToFavorites">
                    Add to favorites
                    <svg class="iconHeart">
                        <use href="./assets/sprite-a52c12ca.svg#heart"></use>
                    </svg>
                </button>
                <button type="button" class="deletedForFavorites">
                    Remove from favorites
                </button>
                <button type="button" class="giveRating">
                    Give a rating
                </button>
                <button type="button" class="exitModal">
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#close"></use>
                    </svg>
                </button>
            </div>
        </div>
        `}function _(o){const t=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=()=>{let e=JSON.parse(localStorage.getItem("favorites"));e||(e=[]),e.push(o),localStorage.setItem("favorites",JSON.stringify(e)),t.classList.remove("is-visible"),t.classList.add("is-hidden"),s.classList.remove("is-hidden"),s.classList.add("is-visible"),c.info({message:"Вправу додано до улюблених!"})};t.addEventListener("click",i)}function x(o){const t=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=()=>{let e=JSON.parse(localStorage.getItem("favorites"));for(let r=0;r<e.length;r++)if(e[r]._id===o._id){e.splice(r,1),localStorage.setItem("favorites",JSON.stringify(e));break}t.classList.remove("is-hidden"),t.classList.add("is-visible"),s.classList.remove("is-visible"),s.classList.add("is-hidden"),c.info({message:"Вправу видалено з улюблених!"})};s.addEventListener("click",i)}function E(o,t,s){const i=o.querySelector(".exitModal"),e=()=>{o.classList.remove("is-visible"),s.classList.remove("is-visible"),t.innerHTML=""},r=a=>{o.contains(a.target)||e()},n=a=>{a.key==="Escape"&&e()};document.addEventListener("click",r),i.addEventListener("click",e),document.addEventListener("keydown",n)}function F(o){const t=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=localStorage.getItem("favorites");return i===null||i.indexOf(o)==-1?(t.classList.add("is-visible"),s.classList.add("is-hidden"),!1):(t.classList.add("is-hidden"),s.classList.add("is-visible"),!0)}async function T(o){try{const t=await h(o),s=Math.floor(t.rating),i=document.querySelectorAll(".icon");for(let e=0;e<s;e++)i[e].style.fill="#EEA10C"}catch(t){console.error("Error while fetching exercise data:",t)}}const A=()=>{document.querySelectorAll(".filtered-start-ex-btn").forEach(t=>{t.addEventListener("click",async s=>{const i=s.target.dataset.id,e=document.querySelector(".section_modal"),r=document.querySelector(".container_modal"),n=document.querySelector(".overlay");try{const a=await h(i);w(a,e,r,n),T(i),F(i),_(a),x(a),E(e,r,n)}catch(a){console.log(a),c.error({message:"Error when trying to show the exercise"})}})})},u=document.querySelector(".button-to-top");function k(){window.scrollY>window.innerHeight/2?I():O()}window.addEventListener("scroll",k);function M(o){o.preventDefault(),B()}u.addEventListener("click",M);function B(){window.scrollTo({top:0,behavior:"smooth"})}function I(){u.style.display="flex"}function O(){u.style.display="none"}async function D(o){try{const t="Quote-of-day",s=$(),i=localStorage.getItem(t);if(i){const n=JSON.parse(i);if(n.date===s){f(n);return}}const e=await N(),r={date:s,author:e.author,quote:e.quote};f(r),localStorage.setItem(t,JSON.stringify(r))}catch(t){console.log(t)}}function f({author:o,quote:t}){const s={quoteText:document.querySelector("#quote-text"),quoteAuthor:document.querySelector("#quote-author")};s.quoteAuthor.innerHTML=o,s.quoteText.innerHTML=t}function $(){const o=new Date,t=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0");return`${o.getFullYear()}-${s}-${t}`}async function N(){try{const o="https://energyflow.b.goit.study/api/quote";return(await d.get(o)).data}catch{throw new Error("Failed to fetch quote from the API.")}}D();export{A as o};
//# sourceMappingURL=qoute-df1053f0.js.map
