// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Nova Robot Portfolio-Webseite erfolgreich geladen.");

    // 1. TOUCH-SUPPORT FÜR FLIP-KARTEN (An- und Ausdrehen per Tap)
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Nur auf mobilen Bildschirmen per Klick drehen
            if (window.innerWidth <= 850) {
                const inner = card.querySelector('.flip-card-inner');
                if (inner) {
                    inner.classList.toggle('flipped');
                }
            }
        });
    });

    // AUTO-RESET: Dreht Karten automatisch zurück, sobald sie beim Scrollen aus dem Bild verschwinden
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    const inner = entry.target.querySelector('.flip-card-inner');
                    if (inner) {
                        inner.classList.remove('flipped');
                    }
                }
            });
        }, { threshold: 0.1 });

        flipCards.forEach(card => observer.observe(card));
    }

    // 2. MOBILES SEITEN-BLÄTTERN FÜR DAS PDF
    let currentPage = 1;
    const pdfIframe = document.getElementById('pdfIframe');
    const pdfPrevBtn = document.getElementById('pdfPrevBtn');
    const pdfNextBtn = document.getElementById('pdfNextBtn');
    const pdfPageIndicator = document.getElementById('pdfPageIndicator');

    function updatePdfPage(page) {
        if (pdfIframe && page >= 1) {
            currentPage = page;
            
            // Erzwingt sauberes Nachladen auf mobilen Geräten
            const baseUrl = 'nova-dokumentation-v3.pdf';
            const params = `#page=${currentPage}&toolbar=0&navpanes=0&view=FitH`;
            
            pdfIframe.src = baseUrl + params;

            if (pdfPageIndicator) {
                pdfPageIndicator.textContent = `Seite ${currentPage}`;
            }
        }
    }

    if (pdfPrevBtn) {
        pdfPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentPage > 1) {
                updatePdfPage(currentPage - 1);
            }
        });
    }

    if (pdfNextBtn) {
        pdfNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updatePdfPage(currentPage + 1);
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