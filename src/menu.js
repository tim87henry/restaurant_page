function menu_tab() {

    const menu = document.createElement('div');
    menu.className="page_content";
    menu.id="menu";
    const menu_items = document.createElement('div');
    menu_items.innerHTML="<br>"+"Latte  -  $5.00"+"<br>"+
    "Capuccino  -  $5.50"+"<br>"+
    "Espresso  -  $4.50"+"<br>"+
    "Flat White  -  $5.00"+"<br><br>"+
    "Iced Tea  -  $3.50"+"<br>"+
    "Milk  -  $2"+"<br>"+
    "Water  -  $1"+"<br>";
    menu.appendChild(menu_items);
    menu.style.display="none";
    document.body.appendChild(menu);
}

export default menu_tab