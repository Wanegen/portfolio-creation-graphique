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


const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const allProjets = Array.from(document.querySelectorAll('.projet'));
const checked = {};

getChecked('adobePhotoshop');
getChecked('adobeIndesign');
getChecked('adobeIllustrator');
getChecked('sketch');

Array.prototype.forEach.call(allCheckboxes, function (el) {
    el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
    getChecked(e.target.name);
    setVisibility();
}

function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
        return el.value;
    });
}

function setVisibility() {
    allProjets.map(function (el) {
        const adobePhotoshop = checked.adobePhotoshop.length ? _.intersection(Array.from(el.classList), checked.adobePhotoshop).length : true;
        const adobeIndesign = checked.adobeIndesign.length ? _.intersection(Array.from(el.classList), checked.adobeIndesign).length : true;
        const adobeIllustrator = checked.adobeIllustrator.length ? _.intersection(Array.from(el.classList), checked.adobeIllustrator).length : true;
        const sketch = checked.sketch.length ? _.intersection(Array.from(el.classList), checked.sketch).length : true;
        if (adobePhotoshop && adobeIndesign && adobeIllustrator && sketch) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    })
}