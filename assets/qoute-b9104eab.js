import{a as m,i as c}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const O=document.querySelector(".head-button"),q=document.querySelector(".backdrop-menu-container");O.addEventListener("click",C);const E=document.querySelector(".backdrop-button");function C(){q.classList.remove("is-hidden"),E.addEventListener("click",$)}function $(){q.classList.add("is-hidden"),E.removeEventListener("click",$)}m.defaults.baseURL="https://energyflow.b.goit.study/api/exercises";async function T(s){try{return(await m.get(`/${s}`)).data}catch(t){if(t.response){const{status:e}=t.response;e>=400&&e<500?c.error({message:"Client error: No detailed information about the exercise was found."}):e>=500&&c.error({message:"Server error: Something went wrong while fetching exercise data."})}else t.request?c.error({message:"Request error: Failed to send request to the server."}):c.error({message:"Unknown error: Failed to fetch exercise data."});throw t}}const _=document.querySelector(".wrapper-exercises"),d=document.querySelector(".pagination-wrapper"),B=document.getElementById("muscle-btn"),M=document.getElementById("body-btn"),F=document.getElementById("equipment-btn"),L=document.querySelector(".exercises-title"),k=document.querySelector(".search-container");let v="Muscles",b="muscle-btn",u,g=1,p,h,f=1;[B,M,F].forEach(s=>{s.addEventListener("click",function(){b!==s.id&&(A(s.id),b=s.id,g=1,s.id==="muscle-btn"&&(v="Muscles"),s.id==="body-btn"&&(v="Body parts"),s.id==="equipment-btn"&&(v="Equipment"),w())})});function A(s){[B,M,F].forEach(t=>{t.className=`exercises-category ${s===t.id?"active":""}`})}w();async function w(){const s="https://energyflow.b.goit.study/api/filters",t={filter:v,limit:j(),page:g};try{const e=await m.get(`${s}?${new URLSearchParams(t)}`);_.innerHTML='<div class="muscles-list"></div>',p=e.data.results,u=e.data.totalPages,Q(),R()}catch(e){console.log(e),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}function Q(){const s=p.map(e=>`<div class="muscle-item" 
       style="background-image: linear-gradient(rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)), url(${e.imgUrl})" ><div class="muscle-item-wrapper">
          <span class="muscle-category">${l(e.name)}</span>
           <span class="muscle-item-category">${e.filter}</span></div>
           </div>`).join(""),t=document.querySelector(".muscles-list");t.innerHTML=s,t.classList.remove("desk-flex"),t.classList.remove("tab-flex"),k.classList.add("is-hidden"),L.innerHTML="Exercises",J(t),f=1}function R(){if(d.classList.remove("scroll-x"),u>1){const s=[];for(let e=1;e<=u;e++)s.push(`<span class="pagination-number ${e===g?"active":""}">${e}</span>`);d.innerHTML=s.join("");const t=document.getElementsByClassName("pagination-number");for(let e=0;e<t.length;e++)t[e].addEventListener("click",function(){U(e+1)})}else d.innerHTML=""}function U(s){s!==g&&(g=s,w())}function l(s){if(!s.length)return"";const e=s.charAt(0).toUpperCase(),r=s.slice(1);return e+r}function j(){return window.screen.width>=768?12:8}function J(s){s.querySelectorAll(".muscle-item").forEach(e=>e.addEventListener("click",function(){h=e.querySelector(".muscle-category").textContent.toLowerCase(),H()}))}async function H(){const s="https://energyflow.b.goit.study/api/exercises";let t=document.querySelector(".active"),e;t.textContent=="Body parts"&&(e={bodypart:h,limit:y(),page:f}),t.textContent=="Muscles"&&(e={muscles:h,limit:y(),page:f}),t.textContent=="Equipment"&&(e={equipment:h,limit:y(),page:f});try{const r=await m.get(`${s}?${new URLSearchParams(e)}`);_.innerHTML='<div class="muscles-list"></div>',p=r.data.results,u=r.data.totalPages,W(),z()}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}function y(){return window.screen.width>=1440?9:8}function W(){const s=p.map(e=>`<div class="filtered-ex-item">
      <div class="filtered-ex-item-header">
          <div class="filtered-workout-box">
              <p class="filtered-workout-text">workout</p>
          </div>
          <div class="filtered-rating-container">
              <p class="filtered-rating-text">${Number(e.rating).toFixed(1)}</p>
              <div class="filtered-rating-icon-container">
              <svg class="filtered-rating-icon" width="14" height="14">
                  <use href="./assets/sprite-a52c12ca.svg#star"></use>
              </svg>
              </div>
          </div>
          <button class="filtered-start-ex-btn" type="button" data-id="${e._id}">Start
              <svg class="filtered-start-arrow-icon" width="14" height="14">
                  <use href="./assets/sprite-a52c12ca.svg#arrow"></use>
              </svg>
          </button>
      </div>
      <div class="filtered-ex-name-box">
          <div class="filtered-run-icon-box">
              <svg class="filtered-run-icon" width="16" height="16">
                  <use href="./assets/sprite-a52c12ca.svg#runner"></use>
              </svg>
          </div>
          <p class="filtered-ex-name">${l(e.name)}</p>
      </div>
      <ul class="filtered-ex-desc-list">
          <li class="filtered-ex-desc-item">Burned calories:
              <span class="filtered-ex-desc-value">${e.burnedCalories} / ${e.time} min</span>
          </li>
          <li class="filtered-ex-desc-item">Body part:
              <span class="filtered-ex-desc-value">${l(e.bodyPart)}</span>
          </li>
          <li class="filtered-ex-desc-item">Target:
              <span class="filtered-ex-desc-value">${l(e.target)}</span>
          </li>
      </ul>
  </div>`).join(""),t=document.querySelector(".muscles-list");t.innerHTML=s,te(),f===1&&L.textContent==="Exercises"&&L.insertAdjacentHTML("beforeend",` / <span class="exercises-title-grey">${l(p[0].bodyPart)}</span>`),k.classList.remove("is-hidden"),window.screen.width>=1440&&t.classList.add("desk-flex"),window.screen.width>=768&&window.screen.width<1440&&t.classList.add("tab-flex")}function z(){const s=[];if(d.classList.remove("scroll-x"),u>1){for(let e=1;e<=u;e++)s.push(`<span class="pagination-number ${e===f?"active":""}">${e}</span>`);d.innerHTML=s.join("");const t=document.getElementsByClassName("pagination-number");for(let e=0;e<t.length;e++)t[e].addEventListener("click",function(){Y(e+1)});(u>12&&window.screen.width<768||u>23&&window.screen.width<1440)&&d.classList.add("scroll-x")}else d.innerHTML=""}function Y(s){s!==f&&(f=s,H())}function G({gifUrl:s,name:t,rating:e,target:r,bodyPart:i,equipment:n,popularity:o,burnedCalories:a,description:P},I,N,D){D.classList.add("is-visible"),I.classList.add("is-visible"),N.innerHTML=`
        <img
        src="${s}"
        alt="${t}"
        class="gif"
        />
        <div class="info">
            <h2 class="title">${l(t)}</h2>
            <div class="raiting">
                <p>${Number(e).toFixed(1)}</p>
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
                <p class="info_el_text">${l(i)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Equipment</p>
                <p class="info_el_text">${l(n)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Popular</p>
                <p class="info_el_text">${o}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Burned calories</p>
                <p class="info_el_text">${a}/3min</p>
                </li>
            </ul>
            <p class="description">${P}</p>
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
        `}function K(s){const t=document.querySelector(".addToFavorites"),e=document.querySelector(".deletedForFavorites"),r=()=>{let i=JSON.parse(localStorage.getItem("favorites"));i||(i=[]),i.push(s),localStorage.setItem("favorites",JSON.stringify(i)),t.classList.remove("is-visible"),t.classList.add("is-hidden"),e.classList.remove("is-hidden"),e.classList.add("is-visible"),c.info({message:"Вправу додано до улюблених!"})};t.addEventListener("click",r)}function V(s){const t=document.querySelector(".addToFavorites"),e=document.querySelector(".deletedForFavorites"),r=()=>{let i=JSON.parse(localStorage.getItem("favorites"));for(let n=0;n<i.length;n++)if(i[n]._id===s._id){i.splice(n,1),localStorage.setItem("favorites",JSON.stringify(i));break}t.classList.remove("is-hidden"),t.classList.add("is-visible"),e.classList.remove("is-visible"),e.classList.add("is-hidden"),c.info({message:"Вправу видалено з улюблених!"})};e.addEventListener("click",r)}function X(s,t,e){const r=s.querySelector(".exitModal"),i=()=>{s.classList.remove("is-visible"),e.classList.remove("is-visible"),t.innerHTML=""},n=a=>{s.contains(a.target)||i()},o=a=>{a.key==="Escape"&&i()};document.addEventListener("click",n),r.addEventListener("click",i),document.addEventListener("keydown",o)}function Z(s){const t=document.querySelector(".addToFavorites"),e=document.querySelector(".deletedForFavorites"),r=localStorage.getItem("favorites");return r===null||r.indexOf(s)==-1?(t.classList.add("is-visible"),e.classList.add("is-hidden"),!1):(t.classList.add("is-hidden"),e.classList.add("is-visible"),!0)}async function ee(s){try{const t=await T(s),e=Math.floor(t.rating),r=document.querySelectorAll(".icon");for(let i=0;i<e;i++)r[i].style.fill="#EEA10C"}catch(t){console.error("Error while fetching exercise data:",t)}}const te=()=>{document.querySelectorAll(".filtered-start-ex-btn").forEach(t=>{t.addEventListener("click",async e=>{const r=e.target.dataset.id,i=document.querySelector(".section_modal"),n=document.querySelector(".container_modal"),o=document.querySelector(".overlay");try{const a=await T(r);G(a,i,n,o),ee(r),Z(r),K(a),V(a),X(i,n,o)}catch(a){console.log(a),c.error({message:"Error when trying to show the exercise"})}})})},x=document.querySelector(".button-to-top");function se(){window.scrollY>window.innerHeight/2?ne():oe()}window.addEventListener("scroll",se);function ie(s){s.preventDefault(),re()}x.addEventListener("click",ie);function re(){window.scrollTo({top:0,behavior:"smooth"})}function ne(){x.style.display="flex"}function oe(){x.style.display="none"}async function ae(s){try{const t="Quote-of-day",e=ce(),r=localStorage.getItem(t);if(r){const o=JSON.parse(r);if(o.date===e){S(o);return}}const i=await le(),n={date:e,author:i.author,quote:i.quote};S(n),localStorage.setItem(t,JSON.stringify(n))}catch(t){console.log(t)}}function S({author:s,quote:t}){const e={quoteText:document.querySelector("#quote-text"),quoteAuthor:document.querySelector("#quote-author")};e.quoteAuthor.innerHTML=s,e.quoteText.innerHTML=t}function ce(){const s=new Date,t=String(s.getDate()).padStart(2,"0"),e=String(s.getMonth()+1).padStart(2,"0");return`${s.getFullYear()}-${e}-${t}`}async function le(){try{const s="https://energyflow.b.goit.study/api/quote";return(await m.get(s)).data}catch{throw new Error("Failed to fetch quote from the API.")}}ae();
//# sourceMappingURL=qoute-b9104eab.js.map
