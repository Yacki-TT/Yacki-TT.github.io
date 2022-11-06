// Ouvrir le menu en mode téléphone

const openMenu = function () {
    const menuButton = document.querySelector(".navbar__menu-for-little-screen");
    const menu = document.querySelector(".navbar__list");

    menuButton.addEventListener("click", () => {
        if (window.getComputedStyle(menu).display === "none") {
            console.log(window.getComputedStyle(menu).display)
            menu.style.display = "block";
        } else {
            menu.style.display = "none"; 
        }

        
        // menu.style.display = "block";
        // menu.classList.toggle("hidden");
    })
}

openMenu();