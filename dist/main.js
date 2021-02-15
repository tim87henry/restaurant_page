(()=>{"use strict";var t=!1;const e=document.getElementById("content"),n=document.createElement("div");n.className="navbar";const c=document.createElement("button");c.innerHTML='<i class="material-icons" id="cancel">dark_mode</i>',c.className="dark_mode",c.onclick=function(){!function(e){t=!t;const n=document.getElementsByClassName("titles");for(var c=0;c<n.length;c++)t?(n[c].style.background="#3e3e3e",n[c].style.color="white"):(n[c].style.background="#FFA25B",n[c].style.color="black");for(c=0;c<n.length;c++)n[c].classList.toggle("dark_mode_titles");const d=document.querySelector(".dark_mode");d.classList.toggle("dark_mode_icon"),d.style.background=t?"#3e3e3e":"#FFA25B",document.querySelector(".navbar").classList.toggle("dark_mode_nav"),document.getElementById("content").classList.toggle("dark_mode_content"),document.querySelector(".page_content").classList.toggle("dark_page_content"),document.querySelector("#menu").classList.toggle("dark_page_content"),document.querySelector("#contact").classList.toggle("dark_page_content")}(event)},n.appendChild(c);const d=document.createElement("button");d.innerHTML="About Us",d.id="about_title",d.className="titles",d.onclick=function(){l(event,"about")},n.appendChild(d);const a=document.createElement("button");a.innerHTML="Menu",a.className="titles",a.onclick=function(){l(event,"menu")},n.appendChild(a);const o=document.createElement("button");o.innerHTML="Contact Us",o.className="titles",o.onclick=function(){l(event,"contact")},n.appendChild(o),e.appendChild(n);const s=document.createElement("img");function l(e,n){var c,d;d=document.getElementsByClassName("titles");for(var a=0;a<d.length;a++)t?(d[a].style.background="#3e3e3e",d[a].style.color="white"):(d[a].style.background="#FFA25B",d[a].style.color="black");e.target.style.background="#3e3e3e",e.target.style.color="white",c=document.getElementsByClassName("page_content");for(var o=0;o<c.length;o++)c[o].style.display="none";document.querySelector("#"+n).style.display="block"}s.id="banner",s.src="../banner.png",e.appendChild(s),function(){document.getElementById("content");const t=document.createElement("div");t.className="page_content",t.id="about";const e=document.createElement("div");e.innerHTML='<br>Pazzo\'s Cafe is an authentic Italian cafe, established in the 5th century BC.<br>We even sold take-away Lattes to Cleopatra and Julius Ceaser. In fact, we invented coffee.<br><br><br>Trading Hours<br><table class="trading"><tr><td>Mon – Thu</td><td>07.00am – 5.00pm</td></tr><tr><td>Fri – Sat</td><td>08.00am – 8.00pm</td></tr><tr><td>Sun</td><td>08.00am – 1.00pm</td></tr></table><br>Public Holidays: Closed<br>',t.appendChild(e),document.body.append(t)}(),function(){const t=document.createElement("div");t.className="page_content",t.id="menu";const e=document.createElement("div");e.innerHTML='<br><table class="menu_list"><tr><td class="menu_item">Latte</td><td class="cost">$5.00</td></tr><tr><td class="menu_item">Capuccino</td><td class="cost">$5.50</td></tr><tr><td class="menu_item">Espresso</td><td class="cost">$4.50</td></tr><tr><td class="menu_item">Flat White</td><td class="cost">$5.00</td></tr><tr><td class="menu_item">Hot Chocolate</td><td class="cost">$6.00</td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td class="menu_item">Iced Latte</td><td class="cost">$5.50</td></tr><tr><td class="menu_item">Iced Tea</td><td class="cost">$4.50</td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td class="menu_item">Milk</td><td class="cost">$2.00</td></tr><tr><td class="menu_item">Water</td><td class="cost">$1.00</td></tr></table>',t.appendChild(e),t.style.display="none",document.body.appendChild(t)}(),function(){const t=document.createElement("div");t.className="page_content",t.id="contact";const e=document.createElement("div");e.innerHTML="<br>You can send your messenger pigeons or contact us digitally with the information given below:",t.appendChild(e);const n=document.createElement("div");n.innerHTML="<br>10050 Cielo Drive<br>Melbourne <br>VIC 3000<br>T: 0412 345 678<br>coffee@pazzos.com",t.appendChild(n),t.style.display="none",document.body.appendChild(t)}()})();