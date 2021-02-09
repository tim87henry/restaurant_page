function about_tab() {
    
    const content=document.getElementById("content");
    
    const about = document.createElement('div');
    about.className="page_content";
    about.id="about";

    const about_text = document.createElement('div');
    about_text.innerHTML="<br>"+"Pazzo's Cafe is an authentic Italian cafe, established in the 5th century BC."+"<br>"+
    "We even sold take-away Lattes to Cleopatra and Julius Ceaser. In fact, we invented coffee."+"<br>"+"<br>"+"<br>"+
    "Trading Hours"+"<br>"+
    "<table class=\"trading\">"+
    "<tr><td>Mon – Thu</td><td>07.00am – 5.00pm</td></tr>"+
    "<tr><td>Fri – Sat</td><td>08.00am – 8.00pm</td></tr>"+
    "<tr><td>Sun</td><td>08.00am – 1.00pm</td></tr>"+
    "</table>"+"<br>"+
    "Public Holidays: Closed"+"<br>"
    about.appendChild(about_text);
    document.body.append(about);
}

export default about_tab