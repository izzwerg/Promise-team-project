import{a as d,i as c}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const w=document.querySelector(".head-button"),v=document.querySelector(".backdrop-menu-container");w.addEventListener("click",q);const p=document.querySelector(".backdrop-button");function q(){v.classList.remove("is-hidden"),p.addEventListener("click",g)}function g(){v.classList.add("is-hidden"),p.removeEventListener("click",g)}d.defaults.baseURL="https://energyflow.b.goit.study/api/exercises";async function h(o){try{return(await d.get(`/${o}`)).data}catch(t){if(t.response){const{status:s}=t.response;s>=400&&s<500?c.error({message:"Client error: No detailed information about the exercise was found."}):s>=500&&c.error({message:"Server error: Something went wrong while fetching exercise data."})}else t.request?c.error({message:"Request error: Failed to send request to the server."}):c.error({message:"Unknown error: Failed to fetch exercise data."});throw t}}function l(o){if(!o.length)return"";const s=o.charAt(0).toUpperCase(),r=o.slice(1);return s+r}function _({gifUrl:o,name:t,rating:s,target:r,bodyPart:e,equipment:i,popularity:n,burnedCalories:a,description:y},m,L,b,S){b.classList.add("is-visible"),m.classList.add("is-visible"),L.innerHTML=`
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
                <p class="info_el_text">${l(r)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Body Part</p>
                <p class="info_el_text">${l(e)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Equipment</p>
                <p class="info_el_text">${l(i)}</p>
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
                    Remove from
                    <svg class="iconHeart">
                        <use href="./assets/sprite-a52c12ca.svg#heart"></use>
                    </svg>
                </button>
                <button type="button" class="giveRating" data-id="${S}">
                    Give a rating
                </button>
                <button type="button" class="exitModal">
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#close"></use>
                    </svg>
                </button>
            </div>
        </div>
        `}function x(o){const t=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),r=()=>{let e=JSON.parse(localStorage.getItem("favorites"));e||(e=[]),e.push(o),localStorage.setItem("favorites",JSON.stringify(e)),t.classList.remove("is-visible"),t.classList.add("is-hidden"),s.classList.remove("is-hidden"),s.classList.add("is-visible"),c.info({message:"Вправу додано до улюблених!"})};t.addEventListener("click",r)}function E(o){const t=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),r=()=>{let e=JSON.parse(localStorage.getItem("favorites"));for(let i=0;i<e.length;i++)if(e[i]._id===o._id){e.splice(i,1),localStorage.setItem("favorites",JSON.stringify(e));break}t.classList.remove("is-hidden"),t.classList.add("is-visible"),s.classList.remove("is-visible"),s.classList.add("is-hidden"),c.info({message:"Вправу видалено з улюблених!"})};s.addEventListener("click",r)}function F(o,t,s){const r=o.querySelector(".exitModal"),e=()=>{o.classList.remove("is-visible"),s.classList.remove("is-visible"),document.body.style.overflow="visible",t.innerHTML=""},i=a=>{o.contains(a.target)||e()},n=a=>{a.key==="Escape"&&e()};document.addEventListener("click",i),r.addEventListener("click",e),document.addEventListener("keydown",n)}function T(o){const t=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),r=localStorage.getItem("favorites");return r===null||r.indexOf(o)==-1?(t.classList.add("is-visible"),s.classList.add("is-hidden"),!1):(t.classList.add("is-hidden"),s.classList.add("is-visible"),!0)}async function k(o){try{const t=await h(o),s=Math.floor(t.rating),r=document.querySelectorAll(".icon");for(let e=0;e<s;e++)r[e].style.fill="#EEA10C"}catch(t){console.error("Error while fetching exercise data:",t)}}const Q=()=>{document.querySelectorAll(".filtered-start-ex-btn").forEach(t=>{t.addEventListener("click",async s=>{const r=s.target.dataset.id,e=document.querySelector(".section_modal"),i=document.querySelector(".container_modal"),n=document.querySelector(".overlay");try{const a=await h(r);_(a,e,i,n,r),document.body.style.overflow="hidden",k(r),T(r),x(a),E(a),F(e,i,n)}catch(a){console.log(a),c.error({message:"Error when trying to show the exercise"})}})})},u=document.querySelector(".button-to-top");function M(){window.scrollY>window.innerHeight/2?O():$()}window.addEventListener("scroll",M);function B(o){o.preventDefault(),I()}u.addEventListener("click",B);function I(){window.scrollTo({top:0,behavior:"smooth"})}function O(){u.style.display="flex"}function $(){u.style.display="none"}async function D(o){try{const t="Quote-of-day",s=H(),r=localStorage.getItem(t);if(r){const n=JSON.parse(r);if(n.date===s){f(n);return}}const e=await N(),i={date:s,author:e.author,quote:e.quote};f(i),localStorage.setItem(t,JSON.stringify(i))}catch(t){console.log(t)}}function f({author:o,quote:t}){const s={quoteText:document.querySelector("#quote-text"),quoteAuthor:document.querySelector("#quote-author")};s.quoteAuthor.innerHTML=o,s.quoteText.innerHTML=t}function H(){const o=new Date,t=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0");return`${o.getFullYear()}-${s}-${t}`}async function N(){try{const o="https://energyflow.b.goit.study/api/quote";return(await d.get(o)).data}catch{throw new Error("Failed to fetch quote from the API.")}}D();export{Q as o};
//# sourceMappingURL=qoute-67115664.js.map
