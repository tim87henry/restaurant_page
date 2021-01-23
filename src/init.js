function init_load() {
    
    const about = document.createElement('div');
    about.className="page_content";
    about.id="about";
    const about_text = document.createElement('div');
    about_text.innerHTML="<br>"+"Pazzo's Cafe is an authentic Italian cafe, established in the 5th century BC."+"<br>"+
    "We even sold take-away Lattes to Cleopatra and Julius Ceaser. In fact, we invented coffee.";
    about.appendChild(about_text);
    document.body.append(about);

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
    document.body.appendChild(menu);

    const contact = document.createElement('div');
    contact.className="page_content";
    contact.id="contact";
    const contact_text = document.createElement('div');
    contact_text.innerHTML="<br>"+"You can send your messenger pigeons or contact us digitally with the information given below:";
    contact.appendChild(contact_text);

    const contact_address = document.createElement('div');
    contact_address.innerHTML="<br>"+"10050 Cielo Drive"+"<br>"+
    "Melbourne "+"<br>"+
    "VIC 3000"+"<br>"+
    "T: 0412 345 678"+"<br>"+
    "coffee@pazzos.com";
    contact.appendChild(contact_address);
    document.body.appendChild(contact);
}

export default init_load