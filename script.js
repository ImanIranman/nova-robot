// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Nova Robot Portfolio-Webseite erfolgreich geladen.");

    let currentPage = 1;
    const totalPages = 20; // Maximal-Seiten des PDFs
    const pdfIframe = document.getElementById('pdfIframe');
    const pdfPrevBtn = document.getElementById('pdfPrevBtn');
    const pdfNextBtn = document.getElementById('pdfNextBtn');

    // Funktion zum Wechseln der PDF-Seite
    function updatePdfPage(newPage) {
        if (newPage >= 1 && newPage <= totalPages) {
            currentPage = newPage;
            // Lädt das PDF direkt auf der angegebenen Seitenzahl
            pdfIframe.src = `nova-dokumentation-v3.pdf#page=${currentPage}&toolbar=0&navpanes=0&view=FitH`;
        }
    }

    // Event-Listener für mobile Buttons (unter dem PDF)
    if (pdfPrevBtn && pdfNextBtn) {
        pdfPrevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                updatePdfPage(currentPage - 1);
            }
        });

        pdfNextBtn.addEventListener('click', () => {
            updatePdfPage(currentPage + 1);
        });
    }

    // Deaktiviert das Zoomen via Strg + Mausrad
    document.addEventListener('wheel', (event) => {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    // Zoom-Tastenkombinationen verhindern
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=' || event.key === '0')) {
            event.preventDefault();
        }
    });
});