import{N as W,a as G}from"./vendor-DinUI5z5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const b=new W({duration:3e3,position:{x:"right",y:"top"},dismissible:!0,ripple:!1,types:[{type:"success",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",icon:{className:"notyf__icon--error",tagName:"i"}}]}),f={success(e){b.success(e)},error(e){b.error(e)},warning(e){b.open({type:"warning",message:e})},info(e){b.open({type:"info",message:e})}},J="https://your-energy.b.goit.study/api",h=G.create({baseURL:J}),N={400:"Bad request. Please check your input.",401:"Unauthorized. Please log in.",404:"Resource not found.",409:"This email has already been used.",500:"Server error. Please try again later.",default:"Something went wrong. Please try again."};h.interceptors.response.use(e=>e,e=>{var i;if(!e.response){const a=navigator.onLine?"Unable to connect to server. Please try again later.":"No internet connection. Please check your network.";return f.error(a),Promise.reject(e)}const t=e.response.status,r=((i=e.response.data)==null?void 0:i.message)||N[t]||N.default;return f.error(r),Promise.reject(e)});async function Y({filter:e,page:t=1,limit:n=12}){const{data:r}=await h.get("/filters",{params:{filter:e,page:t,limit:n}});return r}async function Z({bodypart:e,muscles:t,equipment:n,keyword:r,page:i=1,limit:a=10}){const o={page:i,limit:a};e&&(o.bodypart=e),t&&(o.muscles=t),n&&(o.equipment=n),r&&(o.keyword=r);const{data:c}=await h.get("/exercises",{params:o});return c}async function $(e){const{data:t}=await h.get(`/exercises/${e}`);return t}async function X(e,t,n,r=""){const i={rate:t,email:n};r&&(i.review=r);const{data:a}=await h.patch(`/exercises/${e}/rating`,i);return a}async function ee(e){const{data:t}=await h.post("/subscription",{email:e});return t}const te=`<li class="exercise-card {{cardClass}}" data-id="{{id}}">
  <div class="exercise-card-header">
    <div class="exercise-card-left">
      <span class="exercise-workout-badge">WORKOUT</span>
      <span
        class="exercise-rating"
        aria-label="Rating: {{ratingFormatted}} out of 5"
      >
        {{ratingFormatted}}
        <svg
          width="18"
          height="18"
          class="exercise-rating-star"
          aria-hidden="true"
        >
          <use href="#icon-star"></use>
        </svg>
      </span>
      <button
        type="button"
        class="favorite-delete-btn"
        data-id="{{id}}"
        aria-label="Remove {{name}} from favorites"
      >
        <svg width="20" height="20" aria-hidden="true">
          <use href="#icon-trash"></use>
        </svg>
      </button>
    </div>
    <button
      class="exercise-start-btn"
      data-id="{{id}}"
      aria-label="Start exercise {{name}}"
    >
      Start
      <svg width="16" height="16" aria-hidden="true">
        <use href="#icon-arrow"></use>
      </svg>
    </button>
  </div>

  <div class="exercise-card-body">
    <span class="exercise-icon">
      <svg width="16px" height="16px" aria-hidden="true">
        <use href="#icon-quote"></use>
      </svg>
    </span>
    <h3 class="exercise-card-title">{{name}}</h3>
  </div>

  <ul class="exercise-card-meta">
    <li class="meta-item">
      <span class="meta-label">Burned calories:</span>
      <span class="meta-value">{{burnedCalories}} / {{time}} min</span>
    </li>
    <li class="meta-item">
      <span class="meta-label">Body part:</span>
      <span class="meta-value">{{bodyPart}}</span>
    </li>
    <li class="meta-item">
      <span class="meta-label">Target:</span>
      <span class="meta-value">{{target}}</span>
    </li>
  </ul>
</li>
`,ne=`<li class="category-card" data-filter="{{filter}}" data-name="{{name}}">
  <img src="{{imgURL}}" alt="" class="category-card-bg" />
  <div class="category-card-overlay"></div>
  <div class="category-card-content">
    <h3 class="category-name">
      <a href="#" class="category-link">{{name}}</a>
    </h3>
    <p class="category-filter">{{filter}}</p>
  </div>
</li>
`,re=`<div class="favorites-empty">
  <p class="favorites-empty-text">
    It appears that you haven't added any exercises to your favorites yet. To get started, you can
    add exercises that you like to your favorites for easier access in the future.
  </p>
</div>`,ie=`<ul class="pager-list">
  <li>
    <a
      href="#"
      class="pager-btn pager-first"
      data-page="1"
      aria-label="Go to first page"
    >
      <svg width="13" height="12" class="pager-icon flip" aria-hidden="true">
        <use href="#icon-double-arrow-right"></use>
      </svg>
    </a>
  </li>
  <li>
    <a href="#" class="pager-btn pager-prev" aria-label="Go to previous page">
      <svg width="20" height="20" class="pager-icon flip" aria-hidden="true">
        <use href="#icon-arrow-right"></use>
      </svg>
    </a>
  </li>
  <li>
    <ul class="pager-numbers"></ul>
  </li>
  <li>
    <a href="#" class="pager-btn pager-next" aria-label="Go to next page">
      <svg width="20" height="20" class="pager-icon" aria-hidden="true">
        <use href="#icon-arrow-right"></use>
      </svg>
    </a>
  </li>
  <li>
    <a href="#" class="pager-btn pager-last" aria-label="Go to last page">
      <svg width="13" height="12" class="pager-icon" aria-hidden="true">
        <use href="#icon-double-arrow-right"></use>
      </svg>
    </a>
  </li>
</ul>
`,ae={"exercise-card":te,category:ne,"favorites-empty":re,pagination:ie},H={...ae},E=async e=>H[e]?H[e]:(console.warn(`Template not found in bundle: ${e}`),""),F=(e,t)=>e.replace(/\{\{(\w+)\}\}/g,(n,r)=>t[r]!==void 0?t[r]:""),se=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No exercises found. Try another filter.</p>';return}const r=await E("exercise-card"),i=e.map(a=>F(r,{id:a._id,rating:a.rating||0,ratingFormatted:a.rating?a.rating.toFixed(1):"0.0",cardClass:"",name:a.name,burnedCalories:a.burnedCalories||0,time:a.time||0,bodyPart:a.bodyPart||"N/A",target:a.target||"N/A"})).join("");n.className="exercises-grid",n.innerHTML=i},oe=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No categories found.</p>';return}const r=await E("category-card"),i=e.map(a=>F(r,{filter:a.filter,name:a.name,imgURL:a.imgURL||""})).join("");n.className="categories-grid",n.innerHTML=i},D=(e,t,n=9)=>{const r=document.getElementById(t);if(!r)return;let i="";e==="categories"?(i=Array(n).fill('<li class="category-skeleton skeleton-shimmer"></li>').join(""),r.className="categories-grid",r.innerHTML=i):(i=Array(n).fill(`
      <li class="exercise-skeleton">
        <div class="shimmer-header">
           <div class="shimmer-badge skeleton-shimmer"></div>
           <div class="shimmer-badge skeleton-shimmer"></div>
        </div>
        <div class="shimmer-title skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
      </li>
    `).join(""),r.className="exercises-grid",r.innerHTML=i)},ce=()=>{const e=document.getElementById("popup-exercise-gif"),t=document.getElementById("popup-exercise-title"),n=document.getElementById("popup-exercise-rating"),r=document.getElementById("popup-target"),i=document.getElementById("popup-bodypart"),a=document.getElementById("popup-equipment"),o=document.getElementById("popup-popular"),c=document.getElementById("popup-calories"),m=document.getElementById("popup-description");e&&(e.src="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3C/svg%3E"),t&&(t.textContent="Loading..."),n&&(n.innerHTML='<div class="skeleton-shimmer" style="width: 100px; height: 20px; border-radius: 4px;"></div>');const d='<span class="skeleton-shimmer" style="display: inline-block; width: 60px; height: 14px; border-radius: 2px;"></span>';r&&(r.innerHTML=d),i&&(i.innerHTML=d),a&&(a.innerHTML=d),o&&(o.innerHTML=d),c&&(c.innerHTML=d),m&&(m.innerHTML=`
      <div class="skeleton-shimmer" style="width: 100%; height: 14px; border-radius: 2px; margin-bottom: 8px;"></div>
      <div class="skeleton-shimmer" style="width: 90%; height: 14px; border-radius: 2px; margin-bottom: 8px;"></div>
      <div class="skeleton-shimmer" style="width: 40%; height: 14px; border-radius: 2px;"></div>
    `)};function U(e,{timeout:t=2e3}={}){const n=()=>{"requestIdleCallback"in window?requestIdleCallback(()=>e(),{timeout:t}):setTimeout(()=>e(),1)};document.readyState==="complete"?n():window.addEventListener("load",n,{once:!0})}const I=async(e,t,n="pager-container")=>{const r=document.getElementById(n);if(!r)return;if(t<=1){r.innerHTML="";return}if(!r.querySelector(".pager-list")){const g=await E("pagination");r.innerHTML=g}const i=r.querySelector(".pager-first"),a=r.querySelector(".pager-prev"),o=r.querySelector(".pager-next"),c=r.querySelector(".pager-last"),m=r.querySelector(".pager-numbers");w(i,e===1,1),w(a,e===1,e-1),w(o,e===t,e+1),w(c,e===t,t);const u=le(e,t).map(g=>g==="..."?'<li aria-hidden="true"><span class="pager-dots">...</span></li>':g===e?`<li><a href="#" class="pagination-number current" aria-current="page">${g}</a></li>`:`<li><a href="#" class="pagination-number" data-page="${g}">${g}</a></li>`).join("");m.innerHTML=u};function w(e,t,n){t?(e.classList.add("disabled"),e.setAttribute("aria-disabled","true"),e.removeAttribute("data-page")):(e.classList.remove("disabled"),e.removeAttribute("aria-disabled"),e.dataset.page=n)}function le(e,t){const n=[];if(t<=3){for(let a=1;a<=t;a++)n.push(a);return n}let r,i;e===1?(r=1,i=3):e===t?(r=t-2,i=t):(r=e-1,i=e+1),r>1&&n.push("...");for(let a=r;a<=i;a++)n.push(a);return i<t&&n.push("..."),n}function _(e,t="pager-container"){const n=document.getElementById(t);n&&n.dataset.listenerAttached!=="true"&&(n.dataset.listenerAttached="true",n.addEventListener("click",r=>{const i=r.target.closest(".pager-number, .pager-btn");if(!i||i.classList.contains("disabled")||i.classList.contains("current"))return;r.preventDefault();const a=Number(i.dataset.page);a&&!isNaN(a)&&e(a)}))}function de(e="exercises-header"){var n;const t=document.getElementById(e);t?t.scrollIntoView({behavior:"smooth"}):(n=document.querySelector(".exercises-section"))==null||n.scrollIntoView({behavior:"smooth"})}const V=e=>{const t=document.getElementById(e);t&&(t.showModal(),t.dataset.backdropListener!=="true"&&(t.addEventListener("click",n=>{n.target===t&&t.close()}),t.dataset.backdropListener="true"))},y=e=>{const t=document.getElementById(e);t&&t.close()},ue=e=>{if(!e)return;const t=document.getElementById("popup-exercise-gif");t&&(t.src=e.gifUrl||"",t.alt=e.name||"Exercise");const n=document.getElementById("popup-exercise-title");n&&(n.textContent=e.name||"Exercise");const r=document.getElementById("popup-exercise-rating");if(r){const g=e.rating||0,C=Math.floor(g);r.innerHTML=`
      <span class="rating-value">${g.toFixed(1)}</span>
      <div class="rating-stars">
        ${Array.from({length:5},(De,z)=>`<svg class="star ${z<C?"filled":""}" width="18" height="18" aria-hidden="true">
            <use href="#icon-star"></use>
          </svg>`).join("")}
      </div>
    `}const i=document.getElementById("popup-target");i&&(i.textContent=e.target||"N/A");const a=document.getElementById("popup-bodypart");a&&(a.textContent=e.bodyPart||"N/A");const o=document.getElementById("popup-equipment");o&&(o.textContent=e.equipment||"N/A");const c=document.getElementById("popup-popular");c&&(c.textContent=e.popularity||"0");const m=document.getElementById("popup-calories");m&&(m.textContent=`${e.burnedCalories||0}/${e.time||0} min`);const d=document.getElementById("popup-description");d&&(d.textContent=e.description||"No description available.");const u=document.getElementById("exercise-popup");u&&(u.dataset.exerciseId=e._id)},me=()=>{y("exercise-popup");const e=document.getElementById("rating-popup");e&&e.dataset.closeListener!=="true"&&(e.addEventListener("close",O),e.dataset.closeListener="true"),V("rating-popup"),O(),ge()},R=()=>{y("rating-popup")},O=()=>{const e=document.getElementById("rating-popup"),t=document.getElementById("rating-display-value");e&&e.reset(),t&&(t.textContent="0.0")},ge=()=>{const e=document.getElementById("rating-stars"),t=document.getElementById("rating-display-value");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("change",n=>{if(n.target.type==="radio"){const r=parseFloat(n.target.value);t&&(t.textContent=r.toFixed(1))}}))},pe=()=>{const e=document.querySelector('#rating-stars input[name="rating"]:checked');return e?parseFloat(e.value):0},M={FAVORITES:"favoriteExercises",QUOTE:"quote-of-the-day"};function L(){try{const e=localStorage.getItem(M.FAVORITES);return e?JSON.parse(e):[]}catch(e){return console.error("Failed to get favorites:",e),[]}}function fe(e){try{const t=L();return t.includes(e)?!1:(t.push(e),localStorage.setItem(M.FAVORITES,JSON.stringify(t)),!0)}catch(t){return console.error("Failed to add favorite:",t),!1}}function k(e){try{const n=L().filter(r=>r!==e);return localStorage.setItem(M.FAVORITES,JSON.stringify(n)),!0}catch(t){return console.error("Failed to remove favorite:",t),!1}}function P(e){return L().includes(e)}async function K(e,t={}){V("exercise-popup"),ce();try{const n=await $(e);ue(n),he(e,t)}catch(n){console.error(`Failed to fetch exercise details for ${e}:`,n),y("exercise-popup")}}function he(e,t={}){const{onRemoveFavorite:n,isFavoritesPage:r=!1}=t,i=document.getElementById("popup-close-btn");i&&(i.onclick=()=>y("exercise-popup"));const a=document.getElementById("give-rating-btn");a&&(a.onclick=()=>{me(),ye(e)});const o=document.getElementById("add-to-favorites-btn");if(o){const c=()=>{P(e)?o.innerHTML=`
          <span class="btn-text">Remove from favorites</span>
          <svg width="20" height="20" aria-hidden="true">
            <use href="#icon-trash"></use>
          </svg>
        `:o.innerHTML=`
          <span class="btn-text">Add to favorites</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 3.5C10 3.5 6.5 1 3.5 3.5C0.5 6 2 10 10 16.5C18 10 19.5 6 16.5 3.5C13.5 1 10 3.5 10 3.5Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        `};o.onclick=()=>{P(e)?(k(e),r?(y("exercise-popup"),n&&n()):c()):(fe(e),c())},c()}}function ye(e){const t=document.getElementById("rating-popup-close-btn");t&&(t.onclick=()=>R());const n=document.getElementById("rating-form");n&&(n.onsubmit=async r=>{var c,m;if(r.preventDefault(),!n.checkValidity()){n.reportValidity();return}const i=pe(),a=n.email.value.trim(),o=((c=n.review)==null?void 0:c.value.trim())||"";try{await X(e,i,a,o),R(),f.success("Rating submitted successfully!")}catch(d){((m=d.response)==null?void 0:m.status)===409?f.error("You have already rated this exercise with this email."):f.error("Failed to submit rating. Please try again."),console.error("Failed to submit rating:",d)}})}const T={FAVORITES:"favoriteExercises",QUOTE:"quote-of-the-day"};function Q(){return new Date().toISOString().split("T")[0]}function ve(){try{const e=localStorage.getItem(T.QUOTE);if(!e)return null;const{quote:t,author:n,date:r}=JSON.parse(e);return r===Q()?{quote:t,author:n}:(localStorage.removeItem(T.QUOTE),null)}catch(e){return console.error("Error reading cached quote:",e),null}}function Ee(e,t){try{localStorage.setItem(T.QUOTE,JSON.stringify({quote:e,author:t,date:Q()}))}catch(n){console.error("Error caching quote:",n)}}async function j(){try{let e=ve();e||(e=await getQuote(),Ee(e.quote,e.author)),renderQuote(e)}catch(e){console.error("Failed to initialize quote:",e)}}const q={TABLET:768,DESKTOP:1440},s={view:"categories",filter:"Muscles",category:null,categoryFilter:null,keyword:"",page:1},x=()=>{const e=window.innerWidth;return s.view==="categories"?e<q.TABLET?9:12:e<q.TABLET?8:10};function be(){const e=document.querySelector(".main-content"),t=x();D(s.view,"exercises-container",t),Le(),Be(),_(xe),we(),e&&e.classList.add("loaded"),U(async()=>{try{await j(),await p()}catch(n){console.error("Error initializing home page:",n)}})}function we(){let e,t=x();window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{const n=x();n!==t&&(t=n,s.page=1,p())},300)})}async function p(){const e=document.getElementById("exercises-container");try{const t=x();if(D(s.view,"exercises-container",t),s.view==="categories"){const n=await Y({filter:s.filter,page:s.page,limit:t});oe(n.results,"exercises-container"),I(n.page?Number(n.page):1,n.totalPages||1)}else{const n={limit:t,page:s.page};s.categoryFilter==="Muscles"?n.muscles=s.category.toLowerCase():s.categoryFilter==="Body parts"?n.bodypart=s.category.toLowerCase():s.categoryFilter==="Equipment"&&(n.equipment=s.category.toLowerCase()),s.keyword&&(n.keyword=s.keyword);const r=await Z(n);se(r.results,"exercises-container"),I(r.page?Number(r.page):1,r.totalPages||1)}}catch(t){console.error("Fetch error:",t),e&&(e.innerHTML='<p class="error-message">Failed to load data. Please try again.</p>')}}function xe(e){e&&e!==s.page&&(s.page=e,p(),de())}function Le(){const e=document.getElementById("filter-tabs");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".filter-tab");if(n){document.querySelectorAll(".filter-tab").forEach(r=>{r.classList.remove("active")}),n.classList.add("active"),s.filter=n.dataset.filter,s.view="categories",s.page=1,s.keyword="",s.category=null,Te();try{await p()}catch(r){console.error("Failed to fetch data:",r)}}}))}function Be(){const e=document.getElementById("exercises-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".category-card");if(n){t.preventDefault();const i=n.dataset.name,a=n.dataset.filter;if(!i)return;s.view="exercises",s.category=i,s.categoryFilter=a,s.page=1,s.keyword="",Ie(i),Ae();try{await p()}catch(o){console.error("Failed to fetch exercises:",o)}return}const r=t.target.closest(".exercise-start-btn");if(r){const i=r.dataset.id;if(!i)return;await K(i)}}))}function Ie(e){const t=document.getElementById("section-title"),n=document.getElementById("exercise-search-form");t&&(t.innerHTML=`Exercises / <span class="category-name">${e}</span>`),n&&n.classList.remove("hidden")}function Te(){const e=document.getElementById("section-title"),t=document.getElementById("exercise-search-form"),n=document.getElementById("exercise-search-input"),r=document.getElementById("exercise-clear-btn");e&&(e.textContent="Exercises"),t&&t.classList.add("hidden"),n&&(n.value=""),r&&r.classList.add("hidden")}function Ae(){const e=document.getElementById("exercise-search-form"),t=document.getElementById("exercise-search-input"),n=document.getElementById("exercise-clear-btn");!e||!t||e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",t.addEventListener("input",()=>{t.value.trim()?n.classList.remove("hidden"):n.classList.add("hidden")}),n.addEventListener("click",async()=>{t.value="",n.classList.add("hidden"),t.focus(),s.keyword="",s.page=1;try{await p()}catch(r){console.error("Failed to fetch exercises:",r)}}),e.addEventListener("submit",async r=>{r.preventDefault();const i=t.value.trim();s.keyword=i,s.page=1;try{await p()}catch(a){console.error("Failed to search exercises:",a)}}))}const A={TABLET:768,DESKTOP:1440},l={page:1,exercises:[]};function S(){const e=window.innerWidth;return e>=A.DESKTOP?1/0:e>=A.TABLET?10:8}function Se(){return window.innerWidth<A.DESKTOP}async function Fe(e){const t=await E("favorites-empty");e.innerHTML=t}async function Me(){const e=L();if(e.length===0){l.exercises=[];return}const t=e.map(async r=>{try{return await $(r)}catch(i){return console.error(`Failed to fetch exercise ${r}:`,i),k(r),null}}),n=await Promise.all(t);l.exercises=n.filter(Boolean)}async function v(){const e=document.getElementById("favorites-container");if(!e)return;const t=document.getElementById("favorites-pagination");if(l.exercises.length===0){await Fe(e),t&&(t.innerHTML="");return}const n=S(),r=Se(),i=r?Math.ceil(l.exercises.length/n):1;l.page>i&&(l.page=i);const a=r?(l.page-1)*n:0,o=r?a+n:l.exercises.length,c=l.exercises.slice(a,o),m=await E("exercise-card"),d=c.map(u=>F(m,{id:u._id,name:u.name,burnedCalories:u.burnedCalories||0,time:u.time||0,bodyPart:u.bodyPart||"N/A",target:u.target||"N/A",rating:u.rating||0,ratingFormatted:u.rating?u.rating.toFixed(1):"0.0",cardClass:"is-favorite"})).join("");e.className="favorites-grid",e.innerHTML=d,r?I(l.page,i,"favorites-pagination"):t&&(t.innerHTML="")}function ke(e){e&&e!==l.page&&(l.page=e,v())}function Ce(){let e,t=S();window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{const n=S();n!==t&&(t=n,l.page=1,v())},300)})}function Ne(){const e=document.getElementById("favorites-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".favorite-delete-btn");if(n){t.stopPropagation();const i=n.dataset.id;i&&(k(i),l.exercises=l.exercises.filter(a=>a._id!==i),await v());return}const r=t.target.closest(".exercise-start-btn");if(r){t.stopPropagation();const i=r.dataset.id;if(!i)return;await K(i,{isFavoritesPage:!0,onRemoveFavorite:async()=>{l.exercises=l.exercises.filter(a=>a._id!==i),await v()}})}}))}function He(){const e=document.querySelector(".favorites-page");Ne(),_(ke,"favorites-pagination"),Ce(),e&&e.classList.add("loaded"),U(async()=>{try{await j(),await Me(),await v()}catch(t){console.error("Error initializing favorites page:",t)}})}function Re(){const e=document.getElementById("burger-btn"),t=document.getElementById("mobile-menu"),n=document.getElementById("mobile-close-btn");if(!e||!t||!n)return;e.addEventListener("click",Oe),n.addEventListener("click",B),t.addEventListener("click",i=>{i.target===t&&B()}),t.querySelectorAll(".mobile-nav-link").forEach(i=>{i.addEventListener("click",()=>{B()})}),t.addEventListener("close",()=>{e.setAttribute("aria-expanded","false"),document.body.style.overflow=""})}function Oe(){const e=document.getElementById("mobile-menu"),t=document.getElementById("burger-btn");e&&(e.showModal(),document.body.style.overflow="hidden"),t&&t.setAttribute("aria-expanded","true")}function B(){const e=document.getElementById("mobile-menu");e&&e.close()}function Pe(){const e=window.location.pathname;document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(n=>{const r=n.getAttribute("href");e.endsWith(r.replace("./","/"))||e.endsWith("/")&&r.includes("index.html")||e.endsWith("/index.html")&&r.includes("index.html")||e.includes("favorites")&&r.includes("favorites")?(n.setAttribute("aria-current","page"),n.classList.add("active")):(n.removeAttribute("aria-current"),n.classList.remove("active"))})}document.addEventListener("DOMContentLoaded",()=>{Re(),Pe()});function qe(){const e=window.location.pathname,t=document.getElementById("nav-home"),n=document.getElementById("nav-favorites");e.includes("favorites")?n==null||n.classList.add("active"):t==null||t.classList.add("active")}function $e(){const e=document.getElementById("subscription-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=e.email.value;try{await ee(n),f.success("Successfully subscribed!"),e.reset()}catch{}})}document.addEventListener("DOMContentLoaded",()=>{qe(),$e(),setupHeaderScroll(),document.getElementById("exercises-container")&&be(),document.getElementById("favorites-container")&&He()});
//# sourceMappingURL=main-BFWAOMRz.js.map
