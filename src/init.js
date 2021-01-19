function init_load() {
    const banner = document.createElement('img');
    banner.src= "../banner.png";
    document.body.appendChild(banner);

    const about = document.createElement('div');
    about.innerHTML="<br>"+"About Us"+"<br>";
    about.className="h1_text";
    document.body.appendChild(about);

    const descr = document.createElement('div');
    descr.innerHTML="<br>"+"Pazzo's Cafe is an authentic Italian cafe, established in the 5th century BC."+"<br>"+
    "We even sold take-away Lattes to Cleopatra and Julius Ceaser. In fact, we invented coffee.";
    document.body.appendChild(descr);

    const menu_title = document.createElement('div');
    menu_title.innerHTML="<br>"+"Menu"+"<br>";
    menu_title.className="h1_text";
    document.body.appendChild(menu_title);

    const menu_items = document.createElement('div');
    menu_items.innerHTML="<br>"+"Latte  -  $5.00"+"<br>"+
    "Capuccino  -  $5.50"+"<br>"+
    "Espresso  -  $4.50"+"<br>"+
    "Flat White  -  $5.00"+"<br><br>"+
    "Iced Tea  -  $3.50"+"<br>"+
    "Milk  -  $2"+"<br>"+
    "Water  -  $1"+"<br>";
    document.body.appendChild(menu_items);

    const contact_title = document.createElement('div');
    contact_title.innerHTML="<br>"+"Contact Us"+"<br>";
    contact_title.className="h1_text";
    document.body.appendChild(contact_title);

    const contact_text = document.createElement('div');
    contact_text.innerHTML="<br>"+"You can send your messenger pigeons or contact us digitally with the information given below:";
    document.body.appendChild(contact_text);

    const contact_address = document.createElement('div');
    contact_address.innerHTML="<br>"+"10050 Cielo Drive"+"<br>"+
    "Melbourne "+"<br>"+
    "VIC 3000"+"<br>"+
    "T: 0412 345 678"+"<br>"+
    "coffee@pazzos.com";
    document.body.appendChild(contact_address);
}

export default init_load