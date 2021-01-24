function contact_tab() {
    
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
    contact.style.display="none";
    document.body.appendChild(contact);
}

export default contact_tab