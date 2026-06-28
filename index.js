import{a as m,S as d,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="56487481-0495141e7e76f8d02370d655c",g="https://pixabay.com/api/";function h(i){const t={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:t}).then(s=>s.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const t=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:n,comments:f,downloads:u})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${s}" alt="${e}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b><br>${r}</p>
        <p class="info-item"><b>Views</b><br>${n}</p>
        <p class="info-item"><b>Comments</b><br>${f}</p>
        <p class="info-item"><b>Downloads</b><br>${u}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",t),y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function P(){l.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",q);function q(i){i.preventDefault();const t=i.currentTarget,s=t.elements["search-text"].value.trim();if(s===""){a.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}L(),S(),h(s).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"});return}b(o.hits)}).catch(o=>{console.error(o),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P(),t.reset()})}
//# sourceMappingURL=index.js.map
