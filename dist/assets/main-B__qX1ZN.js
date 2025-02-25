(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const i=async(s,t={})=>{try{const o=await fetch(s,t);return o.ok?await o.json():{error:(await o.json()).message||"An error occurred"}}catch(o){return console.error("fetchData() error:",o.message),{error:o.message}}},p=async()=>{const t=await i("http://localhost:3000/api/items");if(t.error){console.log("Tapahtui virhe fetch haussa!!");return}console.log(t)},m=async()=>{const t=await i("http://localhost:3000/api/users");if(t.error){console.log("Tapahtui virhe fetch haussa!!");return}console.log(t);const o=document.querySelector(".tbody");o.innerHTML="",t.forEach(r=>{const e=document.createElement("tr");e.innerHTML=`
          <td>${r.username}</td>
          <td>${r.email}</td>
          <td><button class="check" data-id="${r.user_id}">
          Info</button></td>
          <td><button class="del" data-id="${r.user_id}">
          Delete</button></td>
          <td>${r.user_id}</td>
        `,o.appendChild(e)}),h()},d=document.querySelector(".info_dialog"),g=document.querySelector(".info_dialog button");g.addEventListener("click",()=>{d.close()});const h=()=>{const s=document.querySelectorAll(".check");console.log(s),s.forEach(t=>{t.addEventListener("click",async o=>{console.log("Klikkasit nappulaa:",o.target);const r=o.target.dataset.id;console.log("Haetaan tietoja käyttäjälle id:llä:",r);const e=await y(r);console.log(e),e&&(d.querySelector("p").innerHTML="",d.showModal(),d.querySelector("p").innerHTML=`
            <div>User ID: <span>${e.user_id}</span></div>
            <div>User Name: <span>${e.username}</span></div>
            <div>Email: <span>${e.email}</span></div>
            <div>Role: <span>${e.user_level}</span></div>`)})})},y=async s=>{const t=await i(`http://localhost:3000/api/users/${s}`);return t.error?(console.error(`Error fetching item with ID ${s}:`,t.error),alert(`Error: ${t.error}`),null):t},l=document.getElementById("snackbar"),u=(s,t="")=>{l.innerText=s,l.className=`show ${t}`.trim(),setTimeout(()=>{l.className=l.className.replace("show","").trim()},3e3)},f=async s=>{s.preventDefault();const t="http://localhost:3000/api/users";await i(t);const o=document.querySelector("#username").value.trim(),r=document.querySelector("#password").value.trim(),e=document.querySelector("#email").value.trim(),a={body:JSON.stringify({username:o,password:r,email:e}),method:"POST",headers:{"Content-type":"application/json"}};console.log(a);const c=await i(t,a);if(c.error){console.log(c.error),u("Virhe lähettämisesssä, varmista että kaikki kentät on täytetty","error");return}c.message&&(console.log(c.meesage),u("Käyttäjän luonti onnistui","success")),console.log(c),m()},v=async()=>{console.log("Hei maailma"),console.log("Haetaan paikallisesta tiedostosta");const s=document.getElementById("diary");console.log(s);const o=await i("/diary.json");if(o.error){console.log("Tapahtui virhe fetch haussa!!");return}console.log(o),s.innerHTML="",o.forEach(r=>{const e=document.createElement("div");e.classList.add("card");const n=document.createElement("div");n.classList.add("card-img");const a=document.createElement("img");a.src="/img/diary.jpg",a.alt="Diary Image",n.appendChild(a);const c=document.createElement("div");c.classList.add("card-diary"),c.innerHTML=`
        <p><strong>Date:</strong> ${r.entry_date}</p>
        <p><strong>Mood:</strong> ${r.mood}</p>
        <p><strong>Weight:</strong> ${r.weight} kg</p>
        <p><strong>Sleep:</strong> ${r.sleep_hours} hours</p>
        <p><strong>Notes:</strong> ${r.notes}</p>
      `,e.appendChild(n),e.appendChild(c),s.appendChild(e)})};document.querySelector("#app").innerHTML="Moi tässä oman APIn harjoituksia";console.log("Moro, tästä alkaa scriptit");const E=document.querySelector(".get_items");E.addEventListener("click",p);const L=document.querySelector(".get_users");L.addEventListener("click",m);const w=document.querySelector(".formpost");w.addEventListener("click",f);const S=document.querySelector(".get_entries");S.addEventListener("click",v);
