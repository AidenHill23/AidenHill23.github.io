/**
Name: Aiden Hill
Date: 10/22/24
File-Name: script.js
*/

//Hamburger menu function
function hamburger(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("logo");

    if(menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none";
        logo.style.display = "block";
    }

    else{
        menu.style.display = "block";
        logo.style.display = "none";
    }
}