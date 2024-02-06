function toggleMenu(){
    const menuMobile = document.getElementById("menu-mobile");

    if(menuMobile.className === "menu-mobile-active"){
        menuMobile.className = "menu-mobile";
    }else{
        menuMobile.className = "menu-mobile-active";
    }
}

function toggleMode(){
    const mode = document.getElementById("mode");

    if(mode.className === "light-mode"){
        mode.className = "dark-mode";
    }else{
        mode.className = "light-mode";
    }
}