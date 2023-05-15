function navMob(){
    var hamMenu=document.getElementById('nav-links')
        if (hamMenu.style.display==="block"){
            hamMenu.style.display="none";
        }
        else{
            hamMenu.style.display="block";
        }
    }

function navClose(){
    var close=document.getElementById('nav-links')
    close.style.display="none"
}

function collapseNavbar() {
    var navbar = document.getElementById("mobile-menu");
    if (window.innerWidth <= 768) {
      navbar.classList.toggle('mobile-menu')
    }
  }
