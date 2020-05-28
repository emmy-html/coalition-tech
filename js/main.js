function openTab(tabName, elmnt) {
    // hide all tabs by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // show the specified tab content
    document.getElementById(tabName).style.display = "inherit";
}

// get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();