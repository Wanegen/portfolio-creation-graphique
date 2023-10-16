function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let imageFiltre = document.getElementById("photo-moi");

    imageFiltre.addEventListener("mouseover", () => {
        document.imageFiltre.src = "assets/images/1636037514888-filtre.jpeg";
    })

    imageFiltre.addEventListener("mouseout", () => {
        document.imageFiltre.src = "assets/images/1636037514888.jpeg";
    })