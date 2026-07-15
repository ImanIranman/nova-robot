// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Nova Robot Portfolio-Webseite erfolgreich geladen.");

    // Rechtsklick auf der gesamten Webseite sperren
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        alert("Hinweis: Das Herunterladen oder Kopieren dieser Dokumentation ist für Demonstrationszwecke deaktiviert.");
    });

    // Optionale Tastatur-Sperre für Strg+S / Cmd+S (Speichern-Hotkeys)
    document.addEventListener('keydown', (event) => {
        if ((event.ctrlKey || event.metaKey) && (event.key === 's' || event.key === 'p')) {
            event.preventDefault();
            alert("Speichern und Drucken ist auf dieser Demoseite nicht gestattet.");
        }
    });
});