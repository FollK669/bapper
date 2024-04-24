function openPageLeden() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = '/leden';
}

function openPageBoek() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = '/boekOns';
}

function openPageBezoekers() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = '/bezoekers';
}

function openPageHome() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = '/';
}

function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show-sidebar");
}

function toggleDropdown() {
    var dropdownMenu = document.getElementById("myDropdown");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}// JavaScript source code


// Definieer een JavaScript-functie om alle leden te verwijderen
async function deleteAllMembers() {
    try {
        const response = await fetch("/leden/deleteMembers", {
            method: "POST",
        });

        if (response.ok) {
            const result = await response.text();
            console.log(result); // Logging voor controle
            alert("Alle leden zijn verwijderd."); // Toon een melding dat alle leden zijn verwijderd
            window.location.reload(); // Ververs de pagina om de veranderingen te tonen
        } else {
            throw new Error("Fout bij het verwijderen van alle leden");
        }
    } catch (error) {
        console.error("Fout bij het verwijderen van alle leden:", error);
        alert("Er is een fout opgetreden bij het verwijderen van alle leden. Raadpleeg de console voor meer informatie.");
    }
}

// Voeg een event listener toe aan de knop om de functie te activeren wanneer erop wordt geklikt
document.getElementById("deleteMembersButton").addEventListener("click", deleteAllMembers);



function Darktheme() {
    // Vervang 'andere_pagina.html' door de URL van de pagina die je wilt openen
    window.location.href = 'index.html';
}

window.addEventListener('resize', function () {
    var button = document.getElementById('bottomLeftButton');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    button.style.bottom = '0';
    button.style.left = '0';
});

// JavaScript source code
window.addEventListener('resize', function () {
    var selectBox = document.getElementById('topRightSelectBox');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    selectBox.style.top = '0';
    selectBox.style.right = '10px';
});

// Voer de functie uit wanneer de pagina is geladen



function toggleDropdown() {
    var dropdownMenu = document.getElementById("myDropdown");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}// JavaScript source code



let darkMode = false;

function toggleTheme() {
    const body = document.body;
    darkMode = !darkMode;
    body.classList.toggle("dark-theme");
    updateButton();
}


$(document).ready(function () {
    // Wanneer de knop wordt geklikt
    $("#toggleThemeRandom").click(function () {
        // Genereer een willekeurige kleur in hexadecimal formaat
        var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        // Verander de achtergrondkleur van de body naar de willekeurige kleur
        $("body").css("background-color", randomColor);
    });
});




function updateButton() {
    const button = document.getElementById("theme-toggle");
    if (darkMode) {
        button.textContent = "LightTheme";
    } else {
        button.textContent = "DarkTheme";
    }
}