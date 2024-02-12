import{o as g}from"./assets/qoute-d9f85e61.js";import"./assets/vendor-8cce9181.js";function b(){const s=JSON.parse(localStorage.getItem("favorites"))||[],u=s.map(e=>`<li class="fav-ex-item">
      <div class="fav-ex-item-header">
          <div class="fav-workout-box">
              <p class="fav-workout-text">workout</p>
          </div>
          <button class="fav-delete-btn" type="submit">
                <svg class="fav-delete-icon" width="16" height="16">
                    <use href="./assets/sprite-a52c12ca.svg#trash"></use>
                </svg>
          </button>
          <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${e._id}">Start
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
          <p class="fav-ex-name">${r(e.name)}</p>
      </div>
      <ul class="fav-ex-desc-list">
          <li class="fav-ex-desc-item">Burned calories:
              <span class="fav-ex-desc-value">${e.burnedCalories} / ${e.time} min</span>
          </li>
          <li class="fav-ex-desc-item">Body part:
              <span class="fav-ex-desc-value">${r(e.bodyPart)}</span>
          </li>
          <li class="fav-ex-desc-item">Target:
              <span class="fav-ex-desc-value">${r(e.target)}</span>
          </li>
      </ul>
  </div>`).join(""),v=`
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `,o=window.innerWidth;let a;o<768?a=8:a=s.length;const p=document.querySelector(".no-fav-ex-inner"),d=document.querySelector(".fav-ex-list"),f=document.querySelector(".fav-pag-btn-set");if(s.length===0?p&&(p.innerHTML=v):d&&(d.innerHTML=u,g()),a<s.length&&f){const e=document.createDocumentFragment(),c=Math.ceil(s.length/a);for(let i=1;i<=c;i++){const t=document.createElement("button");t.classList.add("fav-pagination-btn"),t.textContent=i,t.addEventListener("click",()=>{const l=(i-1)*a,h=l+a,m=s.slice(l,h).map(n=>`<li class="fav-ex-item">
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
                  <p class="fav-ex-name">${r(n.name)}</p>
              </div>
              <ul class="fav-ex-desc-list">
                  <li class="fav-ex-desc-item">Burned calories:
                      <span class="fav-ex-desc-value">${n.burnedCalories} / ${n.time} min</span>
                  </li>
                  <li class="fav-ex-desc-item">Body part:
                      <span class="fav-ex-desc-value">${r(n.bodyPart)}</span>
                  </li>
                  <li class="fav-ex-desc-item">Target:
                      <span class="fav-ex-desc-value">${r(n.target)}</span>
                  </li>
              </ul>
          </div>`).join("");d.innerHTML=m,g()}),c>9&&o<768?t.classList.add("fav-pagi-btn-overflow"):t.classList.remove("fav-pagi-btn-overflow"),e.appendChild(t)}f.innerHTML="",f.appendChild(e)}const x=document.querySelectorAll(".fav-delete-btn");Array.from(x).forEach(e=>{e.addEventListener("click",()=>{const c=e.closest(".fav-ex-item"),i=c.querySelector(".fav-start-ex-btn").dataset.id;c.remove();const t=s.filter(l=>l._id!==i);localStorage.setItem("favorites",JSON.stringify(t))})})}function r(s){if(!s.length)return"";const v=s.charAt(0).toUpperCase(),o=s.slice(1);return v+o}b();
//# sourceMappingURL=commonHelpers.js.map
