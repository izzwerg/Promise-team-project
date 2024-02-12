import{a as d,i as a}from"./vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const w=document.querySelector(".head-button"),v=document.querySelector(".backdrop-menu-container");w.addEventListener("click",q);const p=document.querySelector(".backdrop-button");function q(){v.classList.remove("is-hidden"),p.addEventListener("click",g)}function g(){v.classList.add("is-hidden"),p.removeEventListener("click",g)}d.defaults.baseURL="https://energyflow.b.goit.study/api/exercises";async function h(o){try{return(await d.get(`/${o}`)).data}catch(e){if(e.response){const{status:s}=e.response;s>=400&&s<500?a.error({message:"Client error: No detailed information about the exercise was found."}):s>=500&&a.error({message:"Server error: Something went wrong while fetching exercise data."})}else e.request?a.error({message:"Request error: Failed to send request to the server."}):a.error({message:"Unknown error: Failed to fetch exercise data."});throw e}}function l(o){if(!o.length)return"";const s=o.charAt(0).toUpperCase(),i=o.slice(1);return s+i}function _({gifUrl:o,name:e,rating:s,target:i,bodyPart:t,equipment:r,popularity:n,burnedCalories:c,description:y},m,L,b,S){b.classList.add("is-visible"),m.classList.add("is-visible"),L.innerHTML=`
        <img
        src="${o}"
        alt="${e}"
        class="gif"
        />
        <div class="info">
            <h2 class="title">${l(e)}</h2>
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
                <p class="info_el_text">${l(t)}</p>
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
                <p class="info_el_text">${c}/3min</p>
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
        `}function x(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=()=>{let t=JSON.parse(localStorage.getItem("favorites"));t||(t=[]),t.push(o),localStorage.setItem("favorites",JSON.stringify(t)),e.classList.remove("is-visible"),e.classList.add("is-hidden"),s.classList.remove("is-hidden"),s.classList.add("is-visible"),a.info({message:"Вправу додано до улюблених!"})};e.addEventListener("click",i)}function E(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=()=>{let t=JSON.parse(localStorage.getItem("favorites"));for(let r=0;r<t.length;r++)if(t[r]._id===o._id){t.splice(r,1),localStorage.setItem("favorites",JSON.stringify(t));break}e.classList.remove("is-hidden"),e.classList.add("is-visible"),s.classList.remove("is-visible"),s.classList.add("is-hidden"),a.info({message:"Вправу видалено з улюблених!"})};s.addEventListener("click",i)}function F(o,e,s){const i=o.querySelector(".exitModal"),t=()=>{o.classList.remove("is-visible"),s.classList.remove("is-visible"),document.body.style.overflow="visible",e.innerHTML=""},r=c=>{o.contains(c.target)||t()},n=c=>{c.key==="Escape"&&t()};document.addEventListener("click",r),i.addEventListener("click",t),document.addEventListener("keydown",n)}function T(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=localStorage.getItem("favorites");return i===null||i.indexOf(o)==-1?(e.classList.add("is-visible"),s.classList.add("is-hidden"),!1):(e.classList.add("is-hidden"),s.classList.add("is-visible"),!0)}async function k(o){try{const e=await h(o),s=Math.floor(e.rating),i=document.querySelectorAll(".icon");for(let t=0;t<s;t++)i[t].style.fill="#EEA10C"}catch(e){console.error("Error while fetching exercise data:",e)}}const Q=()=>{document.querySelectorAll(".filtered-start-ex-btn").forEach(e=>{e.addEventListener("click",async()=>{const s=e.dataset.id,i=document.querySelector(".section_modal"),t=document.querySelector(".container_modal"),r=document.querySelector(".overlay");try{const n=await h(s);_(n,i,t,r,s),document.body.style.overflow="hidden",k(s),T(s),x(n),E(n),F(i,t,r)}catch(n){console.log(n),a.error({message:"Error when trying to show the exercise"})}})})},u=document.querySelector(".button-to-top");function M(){window.scrollY>window.innerHeight/2?O():$()}window.addEventListener("scroll",M);function B(o){o.preventDefault(),I()}u.addEventListener("click",B);function I(){window.scrollTo({top:0,behavior:"smooth"})}function O(){u.style.display="flex"}function $(){u.style.display="none"}async function D(o){try{const e="Quote-of-day",s=H(),i=localStorage.getItem(e);if(i){const n=JSON.parse(i);if(n.date===s){f(n);return}}const t=await N(),r={date:s,author:t.author,quote:t.quote};f(r),localStorage.setItem(e,JSON.stringify(r))}catch(e){console.log(e)}}function f({author:o,quote:e}){const s={quoteText:document.querySelector("#quote-text"),quoteAuthor:document.querySelector("#quote-author")};s.quoteAuthor.innerHTML=o,s.quoteText.innerHTML=e}function H(){const o=new Date,e=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0");return`${o.getFullYear()}-${s}-${e}`}async function N(){try{const o="https://energyflow.b.goit.study/api/quote";return(await d.get(o)).data}catch{throw new Error("Failed to fetch quote from the API.")}}D();export{Q as o};
//# sourceMappingURL=qoute-f6f1a5ff.js.map
