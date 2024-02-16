import{o as h}from"./assets/qoute-a1b36f88.js";import{i as I}from"./assets/vendor-8cce9181.js";function f(){let e=JSON.parse(localStorage.getItem("favorites"))||[];const u=e.map(t=>`<li class="fav-ex-item">
      <div class="fav-ex-item-header">
          <div class="fav-workout-box">
              <p class="fav-workout-text">workout</p>
          </div>
          <button class="fav-delete-btn" type="submit">
                <svg class="fav-delete-icon" width="16" height="16">
                    <use href="./assets/sprite-fb630926.svg#trash"></use>
                </svg>
          </button>
          <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${t._id}">Start
              <svg class="fav-start-arrow-icon" width="14" height="14">
                  <use href="./assets/sprite-fb630926.svg#arrow"></use>
              </svg>
          </button>
      </div>
      <div class="fav-ex-name-box">
          <div class="fav-run-icon-box">
              <svg class="fav-run-icon" width="16" height="16">
                  <use href="./assets/sprite-fb630926.svg#runner"></use>
              </svg>
          </div>
          <p class="fav-ex-name">${r(t.name)}</p>
      </div>
      <ul class="fav-ex-desc-list">
          <li class="fav-ex-desc-item">Burned calories:
              <span class="fav-ex-desc-value">${t.burnedCalories} / ${t.time} min</span>
          </li>
          <li class="fav-ex-desc-item">Body part:
              <span class="fav-ex-desc-value">${r(t.bodyPart)}</span>
          </li>
          <li class="fav-ex-desc-item">Target:
              <span class="fav-ex-desc-value">${r(t.target)}</span>
          </li>
      </ul>
  </div>`).join(""),o=`
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `,l=window.innerWidth;let i;l<768?i=8:i=e.length;const p=document.querySelector(".no-fav-ex-inner"),d=document.querySelector(".fav-ex-list"),m=document.querySelector(".fav-pag-btn-set");if(e.length===0?p&&(d.innerHTML="",p.innerHTML=o):d&&(d.innerHTML=u,h()),i<e.length&&m){const t=document.createDocumentFragment(),c=Math.ceil(e.length/i);for(let n=1;n<=c;n++){const s=document.createElement("button");s.classList.add("fav-pagination-btn"),s.textContent=n,s.addEventListener("click",()=>{const v=(n-1)*i,y=v+i,w=e.slice(v,y).map(a=>`<li class="fav-ex-item">
              <div class="fav-ex-item-header">
                  <div class="fav-workout-box">
                      <p class="fav-workout-text">workout</p>
                  </div>
                  <button class="fav-delete-btn" type="submit">
                        <svg class="fav-delete-icon" width="16" height="16">
                            <use href="./assets/sprite-fb630926.svg#trash"></use>
                        </svg>
                  </button>
                  <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${a._id}">Start
                      <svg class="fav-start-arrow-icon" width="14" height="14">
                          <use href="./assets/sprite-fb630926.svg#arrow"></use>
                      </svg>
                  </button>
              </div>
              <div class="fav-ex-name-box">
                  <div class="fav-run-icon-box">
                      <svg class="fav-run-icon" width="16" height="16">
                          <use href="./assets/sprite-fb630926.svg#runner"></use>
                      </svg>
                  </div>
                  <p class="fav-ex-name">${r(a.name)}</p>
              </div>
              <ul class="fav-ex-desc-list">
                  <li class="fav-ex-desc-item">Burned calories:
                      <span class="fav-ex-desc-value">${a.burnedCalories} / ${a.time} min</span>
                  </li>
                  <li class="fav-ex-desc-item">Body part:
                      <span class="fav-ex-desc-value">${r(a.bodyPart)}</span>
                  </li>
                  <li class="fav-ex-desc-item">Target:
                      <span class="fav-ex-desc-value">${r(a.target)}</span>
                  </li>
              </ul>
          </div>`).join("");d.innerHTML=w,h();const L=document.querySelectorAll(".fav-delete-btn");Array.from(L).forEach(a=>{a.addEventListener("click",()=>{const g=a.closest(".fav-ex-item"),S=g.querySelector(".fav-start-ex-btn").dataset.id;g.remove();let x=e.filter(E=>E._id!==S);localStorage.setItem("favorites",JSON.stringify(x)),e=x,f()})})}),c>9&&l<768?s.classList.add("fav-pagi-btn-overflow"):s.classList.remove("fav-pagi-btn-overflow"),t.appendChild(s)}m.innerHTML="",m.appendChild(t)}const b=document.querySelectorAll(".fav-delete-btn");Array.from(b).forEach(t=>{t.addEventListener("click",()=>{const c=t.closest(".fav-ex-item"),n=c.querySelector(".fav-start-ex-btn").dataset.id;c.remove();let s=e.filter(v=>v._id!==n);localStorage.setItem("favorites",JSON.stringify(s)),e=s,I.info({message:"Exercise removed from your favorites"}),f()})})}function r(e){if(!e.length)return"";const o=e.charAt(0).toUpperCase(),l=e.slice(1);return o+l}f();let T=localStorage.setItem;localStorage.setItem=function(e,u){const o=new Event("itemRemoved");document.dispatchEvent(o),T.apply(this,arguments)};function $(){setTimeout(()=>{f()},200)}document.addEventListener("itemRemoved",$);
//# sourceMappingURL=commonHelpers.js.map
