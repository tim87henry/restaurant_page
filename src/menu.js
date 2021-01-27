function menu_tab() {

    const menu = document.createElement('div');
    menu.className="page_content";
    menu.id="menu";
    const menu_items = document.createElement('div');
    menu_items.innerHTML="<br>"+
    "<table id=\"menu_list\">"+
    "<tr><td class=\"menu_item\">Latte</td><td class=\"cost\">$5.00</td></tr>"+
    "<tr><td class=\"menu_item\">Capuccino</td><td class=\"cost\">$5.50</td></tr>"+
    "<tr><td class=\"menu_item\">Espresso</td><td class=\"cost\">$4.50</td></tr>"+
    "<tr><td class=\"menu_item\">Flat White</td><td class=\"cost\">$5.00</td></tr>"+
    "<tr><td class=\"menu_item\">Hot Chocolate</td><td class=\"cost\">$6.00</td></tr>"+
    "<tr><td></td><td></td></tr>"+
    "<tr><td></td><td></td></tr>"+
    "<tr><td class=\"menu_item\">Iced Latte</td><td class=\"cost\">$5.50</td></tr>"+
    "<tr><td class=\"menu_item\">Iced Tea</td><td class=\"cost\">$4.50</td></tr>"+
    "<tr><td></td><td></td></tr>"+
    "<tr><td></td><td></td></tr>"+
    "<tr><td class=\"menu_item\">Milk</td><td class=\"cost\">$2.00</td></tr>"+
    "<tr><td class=\"menu_item\">Water</td><td class=\"cost\">$1.00</td></tr>"+
    "</table>";
    menu.appendChild(menu_items);
    menu.style.display="none";
    document.body.appendChild(menu);
}

export default menu_tab