import"./assets/qoute-443ec654.js";import{a as d,i as p}from"./assets/vendor-8cce9181.js";const g=document.querySelector(".wrapper-exercises"),f=document.querySelector(".pagination-wrapper");document.querySelector(".exercises-title");const r=document.getElementById("muscle-btn"),c=document.getElementById("body-btn"),o=document.getElementById("equipment-btn");let a="muscle-btn";[r,c,o].forEach(e=>{e.addEventListener("click",function(){a!==e.id&&(y(e.id),a=e.id,e.id==="muscle-btn"&&s())})});function y(e){[r,c,o].forEach(n=>{n.className=`exercises-category ${e===n.id?"active":""}`})}let l,i=1,u;s();async function s(){const e="https://energyflow.b.goit.study/api/filters",n={filter:"Muscles",limit:E(),page:i};try{const t=await d.get(`${e}?${new URLSearchParams(n)}`);g.innerHTML='<div class="muscles-list"></div>',console.log(t.data),u=t.data.results,l=t.data.totalPages,h(),L()}catch{p.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}function h(){const e=u.map(t=>`<div class="muscle-item" 
       style="background-image: linear-gradient(rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)), url(${t.imgUrl})" ><div class="muscle-item-wrapper">
          <span class="muscle-category">${w(t.name)}</span>
           <span class="muscle-item-category">${t.filter}</span></div>
           </div>`).join(""),n=document.querySelector(".muscles-list");n.innerHTML=e}function L(){const e=[];for(let t=1;t<=l;t++)e.push(`<span class="pagination-number ${t===i?"active":""}">${t}</span>`);f.innerHTML=e.join("");const n=document.getElementsByClassName("pagination-number");for(let t=0;t<n.length;t++)n[t].addEventListener("click",function(){v(t+1)})}function v(e){e!==i&&(i=e,s())}function w(e){if(!e.length)return"";const t=e.charAt(0).toUpperCase(),m=e.slice(1);return t+m}function E(){return window.screen.width>=768?12:8}
//# sourceMappingURL=commonHelpers2.js.map