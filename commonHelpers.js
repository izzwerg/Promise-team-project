import{o as h}from"./assets/qoute-e96c8fe3.js";import"./assets/vendor-8cce9181.js";let t=JSON.parse(localStorage.getItem("favorites"))||[];function v(){const n=t.map(e=>`<li class="fav-ex-item">
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
          <p class="fav-ex-name">${c(e.name)}</p>
      </div>
      <ul class="fav-ex-desc-list">
          <li class="fav-ex-desc-item">Burned calories:
              <span class="fav-ex-desc-value">${e.burnedCalories} / ${e.time} min</span>
          </li>
          <li class="fav-ex-desc-item">Body part:
              <span class="fav-ex-desc-value">${c(e.bodyPart)}</span>
          </li>
          <li class="fav-ex-desc-item">Target:
              <span class="fav-ex-desc-value">${c(e.target)}</span>
          </li>
      </ul>
  </div>`).join(""),f=`
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `,r=window.innerWidth;let i;r<768?i=8:i=t.length;const g=document.querySelector(".no-fav-ex-inner"),u=document.querySelector(".fav-ex-list"),p=document.querySelector(".fav-pag-btn-set");if(t.length===0?g&&(g.innerHTML=f):u&&(u.innerHTML=n,h()),i<t.length&&p){const e=document.createDocumentFragment(),l=Math.ceil(t.length/i);for(let o=1;o<=l;o++){const s=document.createElement("button");s.classList.add("fav-pagination-btn"),s.textContent=o,s.addEventListener("click",()=>{const d=(o-1)*i,y=d+i,w=t.slice(d,y).map(a=>`<li class="fav-ex-item">
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
                  <p class="fav-ex-name">${c(a.name)}</p>
              </div>
              <ul class="fav-ex-desc-list">
                  <li class="fav-ex-desc-item">Burned calories:
                      <span class="fav-ex-desc-value">${a.burnedCalories} / ${a.time} min</span>
                  </li>
                  <li class="fav-ex-desc-item">Body part:
                      <span class="fav-ex-desc-value">${c(a.bodyPart)}</span>
                  </li>
                  <li class="fav-ex-desc-item">Target:
                      <span class="fav-ex-desc-value">${c(a.target)}</span>
                  </li>
              </ul>
          </div>`).join("");u.innerHTML=w,h();const S=document.querySelectorAll(".fav-delete-btn");Array.from(S).forEach(a=>{a.addEventListener("click",()=>{const m=a.closest(".fav-ex-item"),L=m.querySelector(".fav-start-ex-btn").dataset.id;m.remove();let x=t.filter(I=>I._id!==L);localStorage.setItem("favorites",JSON.stringify(x)),t=x,v()})})}),l>9&&r<768?s.classList.add("fav-pagi-btn-overflow"):s.classList.remove("fav-pagi-btn-overflow"),e.appendChild(s)}p.innerHTML="",p.appendChild(e)}const b=document.querySelectorAll(".fav-delete-btn");Array.from(b).forEach(e=>{e.addEventListener("click",()=>{const l=e.closest(".fav-ex-item"),o=l.querySelector(".fav-start-ex-btn").dataset.id;l.remove();let s=t.filter(d=>d._id!==o);localStorage.setItem("favorites",JSON.stringify(s)),t=s,v()})})}function c(n){if(!n.length)return"";const r=n.charAt(0).toUpperCase(),i=n.slice(1);return r+i}v();let E=localStorage.setItem;localStorage.setItem=function(n,f){const r=new Event("itemRemoved");document.dispatchEvent(r),E.apply(this,arguments)};function $(){setTimeout(()=>{t=JSON.parse(localStorage.getItem("favorites")),v()},200)}document.addEventListener("itemRemoved",$);
//# sourceMappingURL=commonHelpers.js.map
