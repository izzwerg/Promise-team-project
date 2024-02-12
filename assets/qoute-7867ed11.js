import{a as b,i as v}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const B=document.querySelector(".head-button"),q=document.querySelector(".backdrop-menu-container");B.addEventListener("click",O);const E=document.querySelector(".backdrop-button");function O(){q.classList.remove("is-hidden"),E.addEventListener("click",T)}function T(){q.classList.add("is-hidden"),E.removeEventListener("click",T)}b.defaults.baseURL="https://energyflow.b.goit.study/api/exercises";async function D(e){try{return(await b.get(`/${e}`)).data}catch(t){if(t.response){const{status:a}=t.response;a>=400&&a<500?v.error({message:"Client error: No detailed information about the exercise was found."}):a>=500&&v.error({message:"Server error: Something went wrong while fetching exercise data."})}else t.request?v.error({message:"Request error: Failed to send request to the server."}):v.error({message:"Unknown error: Failed to fetch exercise data."});throw t}}function m(e){if(!e.length)return"";const a=e.charAt(0).toUpperCase(),o=e.slice(1);return a+o}function H({gifUrl:e,name:t,rating:a,target:o,bodyPart:s,equipment:r,popularity:i,burnedCalories:l,description:y},n,f,u,c){u.classList.add("is-visible"),n.classList.add("is-visible"),f.innerHTML=`
        <img
        src="${e}"
        alt="${t}"
        class="gif"
        />
        <div class="info">
            <h2 class="title">${m(t)}</h2>
            <div class="raiting">
                <p>${Number(a).toFixed(1)}</p>
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
                <p class="info_el_text">${m(o)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Body Part</p>
                <p class="info_el_text">${m(s)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Equipment</p>
                <p class="info_el_text">${m(r)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Popular</p>
                <p class="info_el_text">${i}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Burned calories</p>
                <p class="info_el_text">${l}/3min</p>
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
                <button type="button" class="giveRating" data-id="${c}">
                    Give a rating
                </button>
                <button type="button" class="exitModal">
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#close"></use>
                    </svg>
                </button>
            </div>
        </div>
        `}function g(){let e=JSON.parse(localStorage.getItem("favorites"))||[];const t=e.map(n=>`<li class="fav-ex-item">
      <div class="fav-ex-item-header">
          <div class="fav-workout-box">
              <p class="fav-workout-text">workout</p>
          </div>
          <button class="fav-delete-btn" type="submit">
                <svg class="fav-delete-icon" width="16" height="16">
                    <use href="./assets/sprite-a52c12ca.svg#trash"></use>
                </svg>
          </button>
          <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${n._id}">Start
              <svg class="fav-start-arrow-icon" width="14" height="14">
                  <use href="./assets/sprite-a52c12ca.svg#arrow"></use>
              </svg>
          </button>
      </div>
      <div class="fav-ex-name-box">
          <div class="fav-run-icon-box">
              <svg class="fav-run-icon" width="16" height="16">
                  <use href="./assets/sprite-a52c12ca.svg#runner"></use>
              </svg>
          </div>
          <p class="fav-ex-name">${p(n.name)}</p>
      </div>
      <ul class="fav-ex-desc-list">
          <li class="fav-ex-desc-item">Burned calories:
              <span class="fav-ex-desc-value">${n.burnedCalories} / ${n.time} min</span>
          </li>
          <li class="fav-ex-desc-item">Body part:
              <span class="fav-ex-desc-value">${p(n.bodyPart)}</span>
          </li>
          <li class="fav-ex-desc-item">Target:
              <span class="fav-ex-desc-value">${p(n.target)}</span>
          </li>
      </ul>
  </div>`).join(""),a=`
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `,o=window.innerWidth;let s;o<768?s=8:s=e.length;const r=document.querySelector(".no-fav-ex-inner"),i=document.querySelector(".fav-ex-list"),l=document.querySelector(".fav-pag-btn-set");if(e.length===0?r&&(r.innerHTML=a):i&&(i.innerHTML=t,w()),s<e.length&&l){const n=document.createDocumentFragment(),f=Math.ceil(e.length/s);for(let u=1;u<=f;u++){const c=document.createElement("button");c.classList.add("fav-pagination-btn"),c.textContent=u,c.addEventListener("click",()=>{const h=(u-1)*s,F=h+s,$=e.slice(h,F).map(d=>`<li class="fav-ex-item">
              <div class="fav-ex-item-header">
                  <div class="fav-workout-box">
                      <p class="fav-workout-text">workout</p>
                  </div>
                  <button class="fav-delete-btn" type="submit">
                        <svg class="fav-delete-icon" width="16" height="16">
                            <use href="./assets/sprite-a52c12ca.svg#trash"></use>
                        </svg>
                  </button>
                  <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${d._id}">Start
                      <svg class="fav-start-arrow-icon" width="14" height="14">
                          <use href="./assets/sprite-a52c12ca.svg#arrow"></use>
                      </svg>
                  </button>
              </div>
              <div class="fav-ex-name-box">
                  <div class="fav-run-icon-box">
                      <svg class="fav-run-icon" width="16" height="16">
                          <use href="./assets/sprite-a52c12ca.svg#runner"></use>
                      </svg>
                  </div>
                  <p class="fav-ex-name">${p(d.name)}</p>
              </div>
              <ul class="fav-ex-desc-list">
                  <li class="fav-ex-desc-item">Burned calories:
                      <span class="fav-ex-desc-value">${d.burnedCalories} / ${d.time} min</span>
                  </li>
                  <li class="fav-ex-desc-item">Body part:
                      <span class="fav-ex-desc-value">${p(d.bodyPart)}</span>
                  </li>
                  <li class="fav-ex-desc-item">Target:
                      <span class="fav-ex-desc-value">${p(d.target)}</span>
                  </li>
              </ul>
          </div>`).join("");i.innerHTML=$,w();const k=document.querySelectorAll(".fav-delete-btn");Array.from(k).forEach(d=>{d.addEventListener("click",()=>{const L=d.closest(".fav-ex-item"),I=L.querySelector(".fav-start-ex-btn").dataset.id;L.remove();let S=e.filter(M=>M._id!==I);localStorage.setItem("favorites",JSON.stringify(S)),e=S,g()})})}),f>9&&o<768?c.classList.add("fav-pagi-btn-overflow"):c.classList.remove("fav-pagi-btn-overflow"),n.appendChild(c)}l.innerHTML="",l.appendChild(n)}const y=document.querySelectorAll(".fav-delete-btn");Array.from(y).forEach(n=>{n.addEventListener("click",()=>{const f=n.closest(".fav-ex-item"),u=f.querySelector(".fav-start-ex-btn").dataset.id;f.remove();let c=e.filter(h=>h._id!==u);localStorage.setItem("favorites",JSON.stringify(c)),e=c,g()})})}function p(e){if(!e.length)return"";const a=e.charAt(0).toUpperCase(),o=e.slice(1);return a+o}g();function A(e){const t=document.querySelector(".addToFavorites"),a=document.querySelector(".deletedForFavorites"),o=()=>{let s=JSON.parse(localStorage.getItem("favorites"));s||(s=[]),s.push(e),localStorage.setItem("favorites",JSON.stringify(s)),t.classList.remove("is_visible_flex"),t.classList.add("is-hidden"),a.classList.remove("is-hidden"),a.classList.add("is_visible_flex"),v.info({message:"Вправу додано до улюблених!"}),g()};t.addEventListener("click",o)}function C(e){const t=document.querySelector(".addToFavorites"),a=document.querySelector(".deletedForFavorites"),o=()=>{let s=JSON.parse(localStorage.getItem("favorites"));for(let r=0;r<s.length;r++)if(s[r]._id===e._id){s.splice(r,1),localStorage.setItem("favorites",JSON.stringify(s));break}t.classList.remove("is-hidden"),t.classList.add("is_visible_flex"),a.classList.remove("is_visible_flex"),a.classList.add("is-hidden"),v.info({message:"Вправу видалено з улюблених!"}),g()};a.addEventListener("click",o)}function N(e,t,a){const o=e.querySelector(".exitModal"),s=()=>{e.classList.remove("is-visible"),a.classList.remove("is-visible"),document.body.style.overflow="visible",t.innerHTML=""},r=l=>{e.contains(l.target)||s()},i=l=>{l.key==="Escape"&&s()};document.addEventListener("click",r),o.addEventListener("click",s),document.addEventListener("keydown",i)}function P(e){const t=document.querySelector(".addToFavorites"),a=document.querySelector(".deletedForFavorites"),o=localStorage.getItem("favorites");if(o===null){t.classList.add("is_visible_flex"),a.classList.add("is-hidden");return}if(o.indexOf(e)==-1){t.classList.add("is_visible_flex"),a.classList.add("is-hidden");return}else{t.classList.add("is-hidden"),a.classList.add("is_visible_flex");return}}async function J(e){try{const t=Math.floor(e.rating),a=document.querySelectorAll(".icon");for(let o=0;o<t;o++)a[o].style.fill="#EEA10C"}catch(t){console.error("Error while fetching exercise data:",t)}}const w=()=>{document.querySelectorAll(".filtered-start-ex-btn").forEach(t=>{t.addEventListener("click",async()=>{const a=t.dataset.id,o=document.querySelector(".section_modal"),s=document.querySelector(".container_modal"),r=document.querySelector(".overlay");try{const i=await D(a);H(i,o,s,r,a),document.body.style.overflow="hidden",J(i),P(a),A(i),C(i),N(o,s,r)}catch(i){console.log(i),v.error({message:"Error when trying to show the exercise"})}})})},x=document.querySelector(".button-to-top");function Q(){window.scrollY>window.innerHeight/2?j():z()}window.addEventListener("scroll",Q);function R(e){e.preventDefault(),U()}x.addEventListener("click",R);function U(){window.scrollTo({top:0,behavior:"smooth"})}function j(){x.style.display="flex"}function z(){x.style.display="none"}async function W(e){try{const t="Quote-of-day",a=Y(),o=localStorage.getItem(t);if(o){const i=JSON.parse(o);if(i.date===a){_(i);return}}const s=await G(),r={date:a,author:s.author,quote:s.quote};_(r),localStorage.setItem(t,JSON.stringify(r))}catch(t){console.log(t)}}function _({author:e,quote:t}){const a={quoteText:document.querySelector("#quote-text"),quoteAuthor:document.querySelector("#quote-author")};a.quoteAuthor.innerHTML=e,a.quoteText.innerHTML=t}function Y(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return`${e.getFullYear()}-${a}-${t}`}async function G(){try{const e="https://energyflow.b.goit.study/api/quote";return(await b.get(e)).data}catch{throw new Error("Failed to fetch quote from the API.")}}W();export{w as o};
//# sourceMappingURL=qoute-7867ed11.js.map
