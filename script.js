// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Nova Robot Portfolio-Webseite erfolgreich geladen.");

    // 1. TOUCH-SUPPORT FÜR FLIP-KARTEN AUF HANDYS
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            const inner = card.querySelector('.flip-card-inner');
            if (inner) {
                inner.classList.toggle('flipped');
            }
        });
    });

    // 2. MOBILES SEITEN-BLÄTTERN FÜR DAS PDF
    let currentPage = 1;
    const pdfIframe = document.getElementById('pdfIframe');
    const pdfPrevBtn = document.getElementById('pdfPrevBtn');
    const pdfNextBtn = document.getElementById('pdfNextBtn');

    function loadPdfPage(page) {
        if (pdfIframe && page >= 1) {
            currentPage = page;
            // Lädt das PDF exakt skaliert auf der gewählten Seitenzahl
            pdfIframe.src = `nova-dokumentation-v3.pdf#page=${currentPage}&toolbar=0&navpanes=0&view=Fit`;
        }
    }

    if (pdfPrevBtn) {
        pdfPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentPage > 1) {
                loadPdfPage(currentPage - 1);
            }
        });
    }

    if (pdfNextBtn) {
        pdfNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            loadPdfPage(currentPage + 1);
        });
    }

    // 3. ZOOM-SPERRE
    document.addEventListener('wheel', (event) => {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=' || event.key === '0')) {
            event.preventDefault();
        }
    });
});