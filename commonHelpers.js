import{o as h}from"./assets/qoute-f6f1a5ff.js";import"./assets/vendor-8cce9181.js";function u(){let e=JSON.parse(localStorage.getItem("favorites"))||[];const p=e.map(t=>`<li class="fav-ex-item">
      <div class="fav-ex-item-header">
          <div class="fav-workout-box">
              <p class="fav-workout-text">workout</p>
          </div>
          <button class="fav-delete-btn" type="submit">
                <svg class="fav-delete-icon" width="16" height="16">
                    <use href="./assets/sprite-a52c12ca.svg#trash"></use>
                </svg>
          </button>
          <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${t._id}">Start
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
  </div>`).join(""),d=`
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `,o=window.innerWidth;let i;o<768?i=8:i=e.length;const g=document.querySelector(".no-fav-ex-inner"),v=document.querySelector(".fav-ex-list"),f=document.querySelector(".fav-pag-btn-set");if(e.length===0?g&&(g.innerHTML=d):v&&(v.innerHTML=p,h()),i<e.length&&f){const t=document.createDocumentFragment(),c=Math.ceil(e.length/i);for(let n=1;n<=c;n++){const s=document.createElement("button");s.classList.add("fav-pagination-btn"),s.textContent=n,s.addEventListener("click",()=>{const l=(n-1)*i,y=l+i,w=e.slice(l,y).map(a=>`<li class="fav-ex-item">
              <div class="fav-ex-item-header">
                  <div class="fav-workout-box">
                      <p class="fav-workout-text">workout</p>
                  </div>
                  <button class="fav-delete-btn" type="submit">
                        <svg class="fav-delete-icon" width="16" height="16">
                            <use href="./assets/sprite-a52c12ca.svg#trash"></use>
                        </svg>
                  </button>
                  <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${a._id}">Start
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
          </div>`).join("");v.innerHTML=w,h();const L=document.querySelectorAll(".fav-delete-btn");Array.from(L).forEach(a=>{a.addEventListener("click",()=>{const x=a.closest(".fav-ex-item"),S=x.querySelector(".fav-start-ex-btn").dataset.id;x.remove();let m=e.filter($=>$._id!==S);localStorage.setItem("favorites",JSON.stringify(m)),e=m,u()})})}),c>9&&o<768?s.classList.add("fav-pagi-btn-overflow"):s.classList.remove("fav-pagi-btn-overflow"),t.appendChild(s)}f.innerHTML="",f.appendChild(t)}const b=document.querySelectorAll(".fav-delete-btn");Array.from(b).forEach(t=>{t.addEventListener("click",()=>{const c=t.closest(".fav-ex-item"),n=c.querySelector(".fav-start-ex-btn").dataset.id;c.remove();let s=e.filter(l=>l._id!==n);localStorage.setItem("favorites",JSON.stringify(s)),e=s,u()})})}function r(e){if(!e.length)return"";const d=e.charAt(0).toUpperCase(),o=e.slice(1);return d+o}u();
//# sourceMappingURL=commonHelpers.js.map
