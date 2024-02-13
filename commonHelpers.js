import{o as h}from"./assets/qoute-e96c8fe3.js";import"./assets/vendor-8cce9181.js";function v(){let e=JSON.parse(localStorage.getItem("favorites"))||[];const f=e.map(t=>`<li class="fav-ex-item">
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
  </div>`).join(""),o=`
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `,l=window.innerWidth;let i;l<768?i=8:i=e.length;const m=document.querySelector(".no-fav-ex-inner"),u=document.querySelector(".fav-ex-list"),p=document.querySelector(".fav-pag-btn-set");if(e.length===0?m&&(m.innerHTML=o):u&&(u.innerHTML=f,h()),i<e.length&&p){const t=document.createDocumentFragment(),c=Math.ceil(e.length/i);for(let n=1;n<=c;n++){const s=document.createElement("button");s.classList.add("fav-pagination-btn"),s.textContent=n,s.addEventListener("click",()=>{const d=(n-1)*i,y=d+i,w=e.slice(d,y).map(a=>`<li class="fav-ex-item">
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
          </div>`).join("");u.innerHTML=w,h();const S=document.querySelectorAll(".fav-delete-btn");Array.from(S).forEach(a=>{a.addEventListener("click",()=>{const g=a.closest(".fav-ex-item"),L=g.querySelector(".fav-start-ex-btn").dataset.id;g.remove();let x=e.filter(E=>E._id!==L);localStorage.setItem("favorites",JSON.stringify(x)),e=x,v()})})}),c>9&&l<768?s.classList.add("fav-pagi-btn-overflow"):s.classList.remove("fav-pagi-btn-overflow"),t.appendChild(s)}p.innerHTML="",p.appendChild(t)}const b=document.querySelectorAll(".fav-delete-btn");Array.from(b).forEach(t=>{t.addEventListener("click",()=>{const c=t.closest(".fav-ex-item"),n=c.querySelector(".fav-start-ex-btn").dataset.id;c.remove();let s=e.filter(d=>d._id!==n);localStorage.setItem("favorites",JSON.stringify(s)),e=s,v()})})}function r(e){if(!e.length)return"";const o=e.charAt(0).toUpperCase(),l=e.slice(1);return o+l}v();let I=localStorage.setItem;localStorage.setItem=function(e,f){const o=new Event("itemRemoved");document.dispatchEvent(o),I.apply(this,arguments)};function $(){setTimeout(()=>{v()},200)}document.addEventListener("itemRemoved",$);
//# sourceMappingURL=commonHelpers.js.map
