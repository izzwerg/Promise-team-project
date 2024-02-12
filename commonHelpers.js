import{o as g}from"./assets/qoute-9831cd22.js";import"./assets/vendor-8cce9181.js";function x(){let e=JSON.parse(localStorage.getItem("favorites"))||[];const u=e.map(s=>`<li class="fav-ex-item">
      <div class="fav-ex-item-header">
          <div class="fav-workout-box">
              <p class="fav-workout-text">workout</p>
          </div>
          <button class="fav-delete-btn" type="submit">
                <svg class="fav-delete-icon" width="16" height="16">
                    <use href="./assets/sprite-a52c12ca.svg#trash"></use>
                </svg>
          </button>
          <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${s._id}">Start
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
          <p class="fav-ex-name">${r(s.name)}</p>
      </div>
      <ul class="fav-ex-desc-list">
          <li class="fav-ex-desc-item">Burned calories:
              <span class="fav-ex-desc-value">${s.burnedCalories} / ${s.time} min</span>
          </li>
          <li class="fav-ex-desc-item">Body part:
              <span class="fav-ex-desc-value">${r(s.bodyPart)}</span>
          </li>
          <li class="fav-ex-desc-item">Target:
              <span class="fav-ex-desc-value">${r(s.target)}</span>
          </li>
      </ul>
  </div>`).join(""),v=`
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `,o=window.innerWidth;let a;o<768?a=8:a=e.length;const p=document.querySelector(".no-fav-ex-inner"),d=document.querySelector(".fav-ex-list"),f=document.querySelector(".fav-pag-btn-set");if(e.length===0?p&&(p.innerHTML=v):d&&(d.innerHTML=u,g()),a<e.length&&f){const s=document.createDocumentFragment(),c=Math.ceil(e.length/a);for(let i=1;i<=c;i++){const t=document.createElement("button");t.classList.add("fav-pagination-btn"),t.textContent=i,t.addEventListener("click",()=>{const l=(i-1)*a,m=l+a,b=e.slice(l,m).map(n=>`<li class="fav-ex-item">
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
          </div>`).join("");d.innerHTML=b,g()}),c>9&&o<768?t.classList.add("fav-pagi-btn-overflow"):t.classList.remove("fav-pagi-btn-overflow"),s.appendChild(t)}f.innerHTML="",f.appendChild(s)}const h=document.querySelectorAll(".fav-delete-btn");Array.from(h).forEach(s=>{s.addEventListener("click",()=>{const c=s.closest(".fav-ex-item"),i=c.querySelector(".fav-start-ex-btn").dataset.id;c.remove();let t=e.filter(l=>l._id!==i);localStorage.setItem("favorites",JSON.stringify(t)),e=t,x()})})}function r(e){if(!e.length)return"";const v=e.charAt(0).toUpperCase(),o=e.slice(1);return v+o}x();
//# sourceMappingURL=commonHelpers.js.map
