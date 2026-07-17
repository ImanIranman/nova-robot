// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Nova Robot Portfolio-Webseite erfolgreich geladen.");

    const pdfContainer = document.getElementById('pdfContainer');
    const pdfPrevBtn = document.getElementById('pdfPrevBtn');
    const pdfNextBtn = document.getElementById('pdfNextBtn');

    // Deaktiviert das Zoomen via Strg + Mausrad
    document.addEventListener('wheel', (event) => {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // Tasten-Steuerung abfangen
    document.addEventListener('keydown', (event) => {
        // Deaktiviert Zoom-Tastenkombinationen (Strg + '+', Strg + '-', etc.)
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=' || event.key === '0')) {
            event.preventDefault();
        }

        // Pfeiltasten-Steuerung für das PDF-Dokument
        if (pdfContainer) {
            const scrollAmount = 60; // Pixel-Anzahl pro Tastendruck

            if (event.key === 'ArrowDown') {
                pdfContainer.scrollTop += scrollAmount;
            } else if (event.key === 'ArrowUp') {
                pdfContainer.scrollTop -= scrollAmount;
            }
        }
    });

    // Button-Steuerung für PDF-Navigation
    if (pdfPrevBtn && pdfContainer) {
        pdfPrevBtn.addEventListener('click', () => {
            pdfContainer.scrollTop -= 60;
        });
    }

    if (pdfNextBtn && pdfContainer) {
        pdfNextBtn.addEventListener('click', () => {
            pdfContainer.scrollTop += 60;
        });
    }
});