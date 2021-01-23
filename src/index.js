import init_load from './init';

const banner = document.createElement('img');
banner.src= "../banner.png";
document.body.appendChild(banner);

const new_line=document.createElement('br');
document.body.appendChild(new_line);

const about_title = document.createElement('button');
about_title.innerHTML="About Us";
about_title.className="h1_text";
about_title.onclick=function() {opentab(event,"about");};
document.body.appendChild(about_title);

const menu_title = document.createElement('button');
menu_title.innerHTML="Menu";
menu_title.className="h1_text";
menu_title.onclick=function() {opentab(event,"menu");};
document.body.appendChild(menu_title);

const contact_title = document.createElement('button');
contact_title.innerHTML="Contact Us";
contact_title.className="h1_text";
contact_title.onclick=function() {opentab(event,"contact");};
document.body.appendChild(contact_title);

init_load();

function opentab (e,section) {
    var pages;

    pages=document.getElementsByClassName("page_content");
    for (var i=0;i<pages.length;i++) {
        pages[i].style.display="none";
    }
    var temp=document.querySelector("#"+section);
    temp.style.display="block";
}