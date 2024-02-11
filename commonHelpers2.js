import"./assets/qoute-05e3ec7d.js";import{a as p,i as c}from"./assets/vendor-8cce9181.js";const h=document.querySelector(".wrapper-exercises"),i=document.querySelector(".pagination-wrapper"),w=document.getElementById("muscle-btn"),x=document.getElementById("body-btn"),b=document.getElementById("equipment-btn"),g=document.querySelector(".exercises-title"),L=document.querySelector(".search-container");let u="Muscles",y="muscle-btn",n,l=1,d,m,r=1;[w,x,b].forEach(t=>{t.addEventListener("click",function(){y!==t.id&&($(t.id),y=t.id,l=1,t.id==="muscle-btn"&&(u="Muscles"),t.id==="body-btn"&&(u="Body parts"),t.id==="equipment-btn"&&(u="Equipment"),v())})});function $(t){[w,x,b].forEach(s=>{s.className=`exercises-category ${t===s.id?"active":""}`})}v();async function v(){const t="https://energyflow.b.goit.study/api/filters",s={filter:u,limit:T(),page:l};try{const e=await p.get(`${t}?${new URLSearchParams(s)}`);h.innerHTML='<div class="muscles-list"></div>',d=e.data.results,n=e.data.totalPages,S(),q()}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}function S(){const t=d.map(e=>`<div class="muscle-item" 
       style="background-image: linear-gradient(rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)), url(${e.imgUrl})" ><div class="muscle-item-wrapper">
          <span class="muscle-category">${o(e.name)}</span>
           <span class="muscle-item-category">${e.filter}</span></div>
           </div>`).join(""),s=document.querySelector(".muscles-list");s.innerHTML=t,s.classList.remove("desk-flex"),s.classList.remove("tab-flex"),L.classList.add("is-hidden"),g.innerHTML="Exercises",P(s),r=1}function q(){if(i.classList.remove("scroll-x"),n>1){const t=[];for(let e=1;e<=n;e++)t.push(`<span class="pagination-number ${e===l?"active":""}">${e}</span>`);i.innerHTML=t.join("");const s=document.getElementsByClassName("pagination-number");for(let e=0;e<s.length;e++)s[e].addEventListener("click",function(){B(e+1)})}else i.innerHTML=""}function B(t){t!==l&&(l=t,v())}function o(t){if(!t.length)return"";const e=t.charAt(0).toUpperCase(),a=t.slice(1);return e+a}function T(){return window.screen.width>=768?12:8}function P(t){t.querySelectorAll(".muscle-item").forEach(e=>e.addEventListener("click",function(){m=e.querySelector(".muscle-category").textContent.toLowerCase(),E()}))}async function E(){const t="https://energyflow.b.goit.study/api/exercises";let s=document.querySelector(".active"),e;s.textContent=="Body parts"&&(e={bodypart:m,limit:f(),page:r}),s.textContent=="Muscles"&&(e={muscles:m,limit:f(),page:r}),s.textContent=="Equipment"&&(e={equipment:m,limit:f(),page:r});try{const a=await p.get(`${t}?${new URLSearchParams(e)}`);h.innerHTML='<div class="muscles-list"></div>',d=a.data.results,n=a.data.totalPages,k(),M()}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}function f(){return window.screen.width>=1440?9:8}function k(){const t=d.map(e=>`<div class="filtered-ex-item">
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
          <button class="filtered-start-ex-btn" type="button">Start
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
          <p class="filtered-ex-name">${o(e.name)}</p>
      </div>
      <ul class="filtered-ex-desc-list">
          <li class="filtered-ex-desc-item">Burned calories:
              <span class="filtered-ex-desc-value">${e.burnedCalories} / ${e.time} min</span>
          </li>
          <li class="filtered-ex-desc-item">Body part:
              <span class="filtered-ex-desc-value">${o(e.bodyPart)}</span>
          </li>
          <li class="filtered-ex-desc-item">Target:
              <span class="filtered-ex-desc-value">${o(e.target)}</span>
          </li>
      </ul>
  </div>`).join(""),s=document.querySelector(".muscles-list");s.innerHTML=t,r===1&&g.textContent==="Exercises"&&g.insertAdjacentHTML("beforeend",` / <span class="exercises-title-grey">${o(d[0].bodyPart)}</span>`),L.classList.remove("is-hidden"),window.screen.width>=1440&&s.classList.add("desk-flex"),window.screen.width>=768&&window.screen.width<1440&&s.classList.add("tab-flex")}function M(){const t=[];if(i.classList.remove("scroll-x"),n>1){for(let e=1;e<=n;e++)t.push(`<span class="pagination-number ${e===r?"active":""}">${e}</span>`);i.innerHTML=t.join("");const s=document.getElementsByClassName("pagination-number");for(let e=0;e<s.length;e++)s[e].addEventListener("click",function(){C(e+1)});(n>12&&window.screen.width<768||n>23&&window.screen.width<1440)&&i.classList.add("scroll-x")}else i.innerHTML=""}function C(t){t!==r&&(r=t,E())}const F=document.getElementById("subscriptionForm"),H=document.getElementById("user-submit"),I="https://energyflow.b.goit.study/api/subscription";F.addEventListener("submit",A);async function A(t){t.preventDefault();const s=H.value;if(!N(s)){c.info({title:"Info",message:"Enter a valid email"});return}try{(await p.post(I,{email:s})).status===201&&c.info({title:"Info",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."})}catch(e){if(e.message==="Request failed with status code 409"){c.info({title:"Info",message:"Subscription already exists"});return}else c.info({title:"Info",message:"Sorry, an error occurred while verifying an email. Please try again!"})}}function N(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}
//# sourceMappingURL=commonHelpers2.js.map
