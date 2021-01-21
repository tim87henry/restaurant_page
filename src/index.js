import init_load from './init';

const banner = document.createElement('img');
banner.src= "../banner.png";
document.body.appendChild(banner);

const about_title = document.createElement('button');
about_title.innerHTML="About Us";
about_title.className="h1_text";
about_title.onclick=opentab;
document.body.appendChild(about_title);

const menu_title = document.createElement('button');
menu_title.innerHTML="Menu";
menu_title.className="h1_text";
menu_title.onclick=opentab;
document.body.appendChild(menu_title);

const contact_title = document.createElement('button');
contact_title.innerHTML="Contact Us";
contact_title.className="h1_text";
contact_title.onclick=opentab;
document.body.appendChild(contact_title);

init_load();

function opentab () {
    //alert("Display individual tabs here");
    var pages;

    pages=document.getElementsByClassName("page_content");
    for (var i=0;i<pages.length;i++) {
        pages[i].style.display="none";
    }
}