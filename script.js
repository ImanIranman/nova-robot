// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Nova Robot Portfolio-Webseite erfolgreich geladen.");

    // Deaktiviert das Zoomen via Strg + Mausrad
    document.addEventListener('wheel', (event) => {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // Deaktiviert das Zoomen via Tastatur (Strg + '+', Strg + '-', Strg + '0')
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=' || event.key === '0')) {
            event.preventDefault();
        }
    });
});