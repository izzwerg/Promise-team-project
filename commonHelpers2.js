import{o as F}from"./assets/qoute-32f9cd21.js";import{a as h,i as o}from"./assets/vendor-8cce9181.js";const L=document.querySelector(".wrapper-exercises"),i=document.querySelector(".pagination-wrapper"),q=document.getElementById("muscle-btn"),B=document.getElementById("body-btn"),M=document.getElementById("equipment-btn"),w=document.querySelector(".exercises-title"),k=document.querySelector(".search-container"),y=document.getElementById("searchForm");let m="Muscles",$="muscle-btn",r,g=1,d,l,n=1,b=!1;[q,B,M].forEach(t=>{t.addEventListener("click",function(){($!==t.id||b)&&(D(t.id),$=t.id,g=1,t.id==="muscle-btn"&&(m="Muscles"),t.id==="body-btn"&&(m="Body parts"),t.id==="equipment-btn"&&(m="Equipment"),E())})});function D(t){[q,B,M].forEach(s=>{s.className=`exercises-category ${t===s.id?"active":""}`})}E();async function E(){const t="https://energyflow.b.goit.study/api/filters",s={filter:m,limit:R(),page:g};try{const e=await h.get(`${t}?${new URLSearchParams(s)}`);L.innerHTML='<div class="muscles-list"></div>',d=e.data.results,r=e.data.totalPages,b=!1,I(),U()}catch(e){console.log(e),o.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}function I(){const t=d.map(e=>`<div class="muscle-item" 
       style="background-image: linear-gradient(rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)), url(${e.imgUrl})" ><div class="muscle-item-wrapper">
          <span class="muscle-category">${u(e.name)}</span>
           <span class="muscle-item-category">${e.filter}</span></div>
           </div>`).join(""),s=document.querySelector(".muscles-list");s.innerHTML=t,s.classList.remove("desk-flex"),s.classList.remove("tab-flex"),k.classList.add("is-hidden"),w.innerHTML="Exercises",j(s),n=1}function U(){if(i.classList.remove("scroll-x"),r>1){const t=[];for(let e=1;e<=r;e++)t.push(`<span class="pagination-number ${e===g?"active":""}">${e}</span>`);i.innerHTML=t.join("");const s=document.getElementsByClassName("pagination-number");for(let e=0;e<s.length;e++)s[e].addEventListener("click",function(){N(e+1)})}else i.innerHTML=""}function N(t){t!==g&&(g=t,E())}function u(t){if(!t.length)return"";const e=t.charAt(0).toUpperCase(),a=t.slice(1);return e+a}function R(){return window.screen.width>=768?12:8}function j(t){t.querySelectorAll(".muscle-item").forEach(e=>e.addEventListener("click",function(){l=e.querySelector(".muscle-category").textContent.toLowerCase(),T()}))}async function T(){const t="https://energyflow.b.goit.study/api/exercises";let s=document.querySelector(".active"),e;s.textContent=="Body parts"&&(e={bodypart:l,limit:c(),page:n}),s.textContent=="Muscles"&&(e={muscles:l,limit:c(),page:n}),s.textContent=="Equipment"&&(e={equipment:l,limit:c(),page:n});try{const a=await h.get(`${t}?${new URLSearchParams(e)}`);L.innerHTML='<div class="muscles-list"></div>',d=a.data.results,r=a.data.totalPages,b=!0,P(),A()}catch{o.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}function c(){return window.screen.width>=1440?9:8}function P(){const t=d.map(e=>`<div class="filtered-ex-item">
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
          <p class="filtered-ex-name">${u(e.name)}</p>
      </div>
      <ul class="filtered-ex-desc-list">
          <li class="filtered-ex-desc-item">Burned calories:
              <span class="filtered-ex-desc-value">${e.burnedCalories} / ${e.time} min</span>
          </li>
          <li class="filtered-ex-desc-item">Body part:
              <span class="filtered-ex-desc-value">${u(e.bodyPart)}</span>
          </li>
          <li class="filtered-ex-desc-item">Target:
              <span class="filtered-ex-desc-value">${u(e.target)}</span>
          </li>
      </ul>
  </div>`).join(""),s=document.querySelector(".muscles-list");s.innerHTML=t,F(),n===1&&w.textContent==="Exercises"&&w.insertAdjacentHTML("beforeend",` / <span class="exercises-title-grey">${u(d[0].bodyPart)}</span>`),k.classList.remove("is-hidden"),window.screen.width>=1440&&s.classList.add("desk-flex"),window.screen.width>=768&&window.screen.width<1440&&s.classList.add("tab-flex")}function A(){const t=[];if(i.classList.remove("scroll-x"),r>1){for(let e=1;e<=r;e++)t.push(`<span class="pagination-number ${e===n?"active":""}">${e}</span>`);i.innerHTML=t.join("");const s=document.getElementsByClassName("pagination-number");for(let e=0;e<s.length;e++)s[e].addEventListener("click",function(){z(e+1)});(r>12&&window.screen.width<768||r>23&&window.screen.width<1440)&&i.classList.add("scroll-x")}else i.innerHTML=""}function z(t){t!==n&&(n=t,T())}let v="",C="",p="";function W(){const t=[];if(i.classList.remove("scroll-x"),r>1){for(let e=1;e<=r;e++)t.push(`<span class="pagination-number ${e===n?"active":""}">${e}</span>`);i.innerHTML=t.join("");const s=document.getElementsByClassName("pagination-number");for(let e=0;e<s.length;e++)s[e].addEventListener("click",function(){_(e+1)});(r>12&&window.screen.width<768||r>23&&window.screen.width<1440)&&i.classList.add("scroll-x")}else i.innerHTML=""}function _(t){t!==n&&(n=t,S())}y.addEventListener("submit",async function(t){t.preventDefault();const s=new FormData(y);v=s.get("search").trim(),C=s.get("filter"),p=s.get("subcategory"),v!==""&&(await S(),y.reset())});i.addEventListener("click",function(t){t.target.classList.contains("page-link")&&(t.preventDefault(),parseInt(t.target.dataset.page),S())});async function S(){const t="https://energyflow.b.goit.study/api/exercises",s={keyword:v,limit:c(),page:n,filter:C};let e;const a=document.querySelector(".active");a.textContent=="Body parts"&&(e={bodypart:l,limit:c(),page:n,subcategory:p}),a.textContent=="Muscles"&&(e={muscles:l,limit:c(),page:n,subcategory:p}),a.textContent=="Equipment"&&(e={equipment:l,limit:c(),page:n,subcategory:p});const H={...s,...e};try{const f=await h.get(`${t}?${new URLSearchParams(H)}`);if(f.data.results.length===0){O();return}d=f.data.results,r=f.data.totalPages,r>=1&&W(),P()}catch{o.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}function O(){i.innerHTML="",L.innerHTML=`
    <div class="wrapper-exercises">
      <p class="no-search-server">Unfortunately, <span class="gray-world-server">no results</span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>
    </div>
  `}const x=document.getElementById("subscriptionForm"),Y=document.getElementById("user-submit"),Z="https://energyflow.b.goit.study/api/subscription";x.addEventListener("submit",Q);async function Q(t){t.preventDefault();const s=Y.value;if(!G(s)){o.info({title:"Info",message:"Enter a valid email"});return}try{const e=await h.post(Z,{email:s});x.reset(),e.status===201&&o.info({title:"Info",message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."})}catch(e){if(e.message==="Request failed with status code 409"){x.reset(),o.info({title:"Info",message:"Subscription already exists"});return}else o.info({title:"Info",message:"Sorry, an error occurred while verifying an email. Please try again!"})}}function G(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}
//# sourceMappingURL=commonHelpers2.js.map
