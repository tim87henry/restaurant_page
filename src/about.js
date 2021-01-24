function about_tab() {
    
    const about = document.createElement('div');
    about.className="page_content";
    about.id="about";
    const about_text = document.createElement('div');
    about_text.innerHTML="<br>"+"Pazzo's Cafe is an authentic Italian cafe, established in the 5th century BC."+"<br>"+
    "We even sold take-away Lattes to Cleopatra and Julius Ceaser. In fact, we invented coffee.";
    about.appendChild(about_text);
    document.body.append(about);
}

export default about_tab