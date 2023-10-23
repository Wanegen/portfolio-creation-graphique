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

const menuHamburger = document.getElementById("icon-menu")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

const btnTri = document.getElementById("titre-filtres-mobile")
const navTri = document.getElementById("btn-container-mobile")

btnTri.addEventListener('click', () => {
    navTri.classList.toggle('mobile-menu-tri')
})

// Création d'une fonction pour filtrer les éléments avec l'appel d'un event (e)
const filterToggle = (e) => {
    // On recherche tous les input étant des checkbox qui sont cochés.
    // On les place ensuite dans un "réseau" comprenant les ID des éléments présents dans les checkbox cochées.
    const checkedFilters = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(
        (el) => el.id
    ),
        // On créé alors un "réseau" comprenant les éléments de cette NodeList qui matchent avec la classe '.filterDiv'.
        toFilter = [...document.querySelectorAll('.filterDiv')];

    // S'il n'y a aucun filtre coché, on fait apparaître tout les éléments 
    if (checkedFilters.length === 0) {
        // On itère (recherche en boucle) dans le "réseau" grâce à la fonction anonyme forEach() pour mettre à jour le display en "flex".
        toFilter.forEach(
            (el) => el.style.display = 'flex'
        )
    } else {
        // Si plusieurs checkbox sont cochées, on itère d'abord dans les éléments ayant la classe '.filterDiv' pour tous les cacher.
        toFilter.forEach(
            (el) => el.style.display = 'none'
        );


        // On créé ensuite un nouveau "réseau" depuis le "réseau" des checkedFilters en utilisant .map
        let selector = checkedFilters.map(
            // On utilise ici un littéral de gabarit pour créer une chaîne de caractères de '.filterDiv.<filter-id>'
            // On ajoute checkedFilters.join('.') au lieu de ${f} afin de n'avoir que les éléments ayant les bonnes checkbox cochées qui apparaissent.
            (f) => `.filterDiv.${checkedFilters.join('.')}`
            // On joint ensuite les éléments du "réseau" de sélecteurs ensemble, dans une chaîne de caractères, en utilisant .join et une virgule (',').
        ).join(',');
        // On utilise ici document.querySelectorAll() avec le sélecteur créé et on itère dans cette NodeList en utilisant .forEach() 
        // pour mettre à jour le display de tous les éléments qui matchent avec le sélecteur dans le but de tous les afficher.
        document.querySelectorAll(selector).forEach(
            (el) => el.style.display = 'flex'
        );
    };
};

// Ici on recherche les checkbox 
filters = document.querySelectorAll('input[type=checkbox]');

// On itère au sein des checkbox en utilisant forEach()
filters.forEach(
    // Ainsi qu'avec une fonction anonyme pour faire de la fonction filterToggle() l'évenement qui gère l'événement 'change'.
    (f) => f.addEventListener('change', filterToggle)
);