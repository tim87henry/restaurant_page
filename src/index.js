import about_tab from './about';
import menu_tab from './menu';
import contact_tab from './contact';

const content=document.getElementById("content");

const navbar = document.createElement('div');
navbar.id="navbar";

const dark_mode = document.createElement('button');
dark_mode.innerHTML='<i class="material-icons" id="cancel">dark_mode</i>';
dark_mode.className="dark_mode";
dark_mode.id="dark_icon";
dark_mode.onclick=function() {setDarkMode(event);};
navbar.appendChild(dark_mode);

const about_title = document.createElement('button');
about_title.innerHTML="About Us";
about_title.id="about_title"
about_title.className="titles";
about_title.onclick=function() {opentab(event,"about");};
navbar.appendChild(about_title);

const menu_title = document.createElement('button');
menu_title.innerHTML="Menu";
menu_title.className="titles";
menu_title.onclick=function() {opentab(event,"menu");};
navbar.appendChild(menu_title);

const contact_title = document.createElement('button');
contact_title.innerHTML="Contact Us";
contact_title.className="titles";
contact_title.onclick=function() {opentab(event,"contact");};
navbar.appendChild(contact_title);

content.appendChild(navbar);

const banner = document.createElement('img');
banner.id="banner";
banner.src= "../banner.png";
content.appendChild(banner);

about_tab();
menu_tab();
contact_tab();

function opentab (e,section) {
    var pages;
    var titles;

    titles=document.getElementsByClassName("titles");
    for (var j=0;j<titles.length;j++) {
        titles[j].style.background="#FFA25B";
        titles[j].style.color="black";
    }
    e.target.style.background="#3e3e3e";
    e.target.style.color="white";
    
    pages=document.getElementsByClassName("page_content");
    for (var i=0;i<pages.length;i++) {
        pages[i].style.display="none";
    }
    var temp=document.querySelector("#"+section);
    temp.style.display="block";
}

function setDarkMode (e) {
    const titles=document.getElementsByClassName("titles");
    for (var j=0;j<titles.length;j++) {
        titles[j].classList.toggle("dark_mode_titles")
    }

    const dark_icon=document.getElementById("dark_icon");
    dark_icon.classList.toggle("dark_mode_icon");
    
    const navbar=document.getElementById("navbar");
    navbar.classList.toggle("dark_mode_nav");
    
    const content=document.getElementById("content");
    content.classList.toggle("dark_mode_content");
}