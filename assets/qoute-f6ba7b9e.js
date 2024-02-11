import{a as c,i as a}from"./vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const y=document.querySelector(".head-button"),u=document.querySelector(".backdrop-menu-container");y.addEventListener("click",L);const f=document.querySelector(".backdrop-button");function L(){u.classList.remove("is-hidden"),f.addEventListener("click",g)}function g(){u.classList.add("is-hidden"),f.removeEventListener("click",g)}c.defaults.baseURL="https://energyflow.b.goit.study/api/exercises";async function S(o){try{return(await c.get(`/${o}`)).data}catch(e){if(e.response){const{status:s}=e.response;s>=400&&s<500?a.error({message:"Client error: No detailed information about the exercise was found."}):s>=500&&a.error({message:"Server error: Something went wrong while fetching exercise data."})}else e.request?a.error({message:"Request error: Failed to send request to the server."}):a.error({message:"Unknown error: Failed to fetch exercise data."});throw e}}function b({gifUrl:o,name:e,rating:s,target:i,bodyPart:t,equipment:r,popularity:n,burnedCalories:p,description:v},m,h){m.classList.add("is-visible"),h.innerHTML=`
    <img
      src="${o}"
      alt="${e}"
      class="gif"
    />
    <div class="info">
        <h2 class="title">${e}</h2>
        <div class="raiting">
            <p>${s}</p>
            <div class="stars">
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
            </div>
        </div>
        <ul class="info_list">
            <li class="info_el">
            <p class="info_el_title">Target</p>
            <p class="info_el_text">${i}</p>
            </li>
            <li class="info_el">
            <p class="info_el_title">Body Part</p>
            <p class="info_el_text">${t}</p>
            </li>
            <li class="info_el">
            <p class="info_el_title">Equipment</p>
            <p class="info_el_text">${r}</p>
            </li>
            <li class="info_el">
            <p class="info_el_title">Popular</p>
            <p class="info_el_text">${n}</p>
            </li>
            <li class="info_el">
            <p class="info_el_title">Burned calories</p>
            <p class="info_el_text">${p}/3min</p>
            </li>
        </ul>
        <p class="description">${v}</p>
        <button type="button" class="addToFavorites">
            Add to favorites
            <svg class="icon">
            <use href="./img/sprite.svg#heart"></use>
            </svg>
        </button>
        <button type="button" class="deletedForFavorites">
            Remove from favorites
        </button>
        <button type="button" class="exitModal">
            <svg class="icon">
            <use href="./img/sprite.svg#close"></use>
            </svg>
        </button>
    </div>
    `}function q(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=()=>{let t=JSON.parse(localStorage.getItem("favorites"));t||(t=[]),t.push(o),localStorage.setItem("favorites",JSON.stringify(t)),e.classList.remove("is-visible"),e.classList.add("is-hidden"),s.classList.remove("is-hidden"),s.classList.add("is-visible"),a.info({message:"Вправу додано до улюблених!"})};e.addEventListener("click",i)}function w(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=()=>{let t=JSON.parse(localStorage.getItem("favorites"));for(let r=0;r<t.length;r++)if(t[r]._id===o._id){t.splice(r,1),localStorage.setItem("favorites",JSON.stringify(t));break}e.classList.remove("is-hidden"),e.classList.add("is-visible"),s.classList.remove("is-visible"),s.classList.add("is-hidden"),a.info({message:"Вправу видалено з улюблених!"})};s.addEventListener("click",i)}function _(o,e){const s=o.querySelector(".exitModal"),i=()=>{o.classList.remove("is-visible"),e.innerHTML=""},t=n=>{o.contains(n.target)||i()},r=n=>{n.key==="Escape"&&i()};document.addEventListener("click",t),s.addEventListener("click",i),document.addEventListener("keydown",r)}function x(o){const e=document.querySelector(".addToFavorites"),s=document.querySelector(".deletedForFavorites"),i=localStorage.getItem("favorites");return i===null||i.indexOf(o)==-1?(e.classList.add("is-visible"),s.classList.add("is-hidden"),!1):(e.classList.add("is-hidden"),s.classList.add("is-visible"),!0)}const D=()=>{document.querySelectorAll(".filtered-start-ex-btn").forEach(e=>{e.addEventListener("click",async s=>{const i=s.target.dataset.id,t=document.querySelector(".section_modal"),r=document.querySelector(".container_modal");try{const n=await S(i);b(n,t,r),x(i),q(n),w(n),_(t,r)}catch(n){console.log(n),a.error({message:"Error when trying to show the exercise"})}})})},l=document.querySelector(".button-to-top");function F(){window.scrollY>window.innerHeight/2?k():B()}window.addEventListener("scroll",F);function E(o){o.preventDefault(),T()}l.addEventListener("click",E);function T(){window.scrollTo({top:0,behavior:"smooth"})}function k(){l.style.display="flex"}function B(){l.style.display="none"}async function I(o){try{const e="Quote-of-day",s=M(),i=localStorage.getItem(e);if(i){const n=JSON.parse(i);if(n.date===s){d(n);return}}const t=await O(),r={date:s,author:t.author,quote:t.quote};d(r),localStorage.setItem(e,JSON.stringify(r))}catch(e){console.log(e)}}function d({author:o,quote:e}){const s={quoteText:document.querySelector("#quote-text"),quoteAuthor:document.querySelector("#quote-author")};s.quoteAuthor.innerHTML=o,s.quoteText.innerHTML=e}function M(){const o=new Date,e=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0");return`${o.getFullYear()}-${s}-${e}`}async function O(){try{const o="https://energyflow.b.goit.study/api/quote";return(await c.get(o)).data}catch{throw new Error("Failed to fetch quote from the API.")}}I();export{D as o};
//# sourceMappingURL=qoute-f6ba7b9e.js.map
