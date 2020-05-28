function openTab(tabName) {
    // hide all tabs by default
    var i, tabcontent, tablinks, img;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // show the specified tab content
    document.getElementById(tabName).style.display = "inherit";
    // add background image on click
    if (tabName === 'schedule-one') {
        var image = document.getElementById("schedule-background");
            image.style.backgroundImage = 'url(' + './img/tab1.png' + ')';
    } else if (tabName === 'schedule-two'){
        var image = document.getElementById("schedule-background");
        image.style.backgroundImage = 'url(' + './img/tab2.png' + ')';
    }
}
// get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();