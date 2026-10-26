// ==========================================================================
// PRIMA BALLERINA OF POP — Y2K & POP MAXIMALIST EFFECTS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCustomCursor();
    initQuotesBox();
});

// 1. LOADER SCREEN (Pink-hot, punk typographic letter-by-letter reveal)
function initLoader() {
    // Only show loader once per session or reload
    const loader = document.createElement('div');
    loader.className = 'prima-loader';
    loader.id = 'primaLoader';

    const text = 'PREMA';
    let lettersHtml = '';
    text.split('').forEach((char, index) => {
        const displayChar = char === ' ' ? '&nbsp;' : char;
        const delay = (index * 0.04).toFixed(2);
        lettersHtml += `<span style="animation-delay: ${delay}s">${displayChar}</span>`;
    });

    loader.innerHTML = `
        <div class="prima-loader-content text-center">
            <div class="prima-loader-title">${lettersHtml}</div>
            <div class="prima-loader-sub">first. bold. unapologetic.</div>
            <div class="prima-loader-bar-wrap mt-3">
                <div class="prima-loader-bar"></div>
            </div>
        </div>
    `;

    document.body.appendChild(loader);

    // Fade out after letters load
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            if (loader.parentNode) loader.remove();
        }, 450);
    }, 850);
}

// 2. CUSTOM CURSOR (Dot + Subtle Ring)
function initCustomCursor() {
    // Check if device supports hover (not purely touch)
    if (window.matchMedia('(hover: none)').matches) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.id = 'primaCursor';

    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    cursorRing.id = 'primaCursorRing';

    document.body.appendChild(cursor);
    document.body.appendChild(cursorRing);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    // Smooth ring animation loop
    function renderRing() {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        requestAnimationFrame(renderRing);
    }
    requestAnimationFrame(renderRing);

    // Interactive Hover States
    const interactiveSelectors = 'a, button, input, select, textarea, .card, .service-card, .laprak-card, .y2k-photo-card, .folder-item, [role="button"], .carousel-control-prev, .carousel-control-next';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            cursor.classList.add('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            cursor.classList.remove('hover');
        }
    });
}

// 3. CLICK SPARKLE EFFECT (Y2K / Pop Punk Symbols)
document.addEventListener('click', (e) => {
    // Avoid creating sparkles when clicking form inputs
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    const symbols = ['✦', '✧', '★', '◆', '▲', '♦', '✨', '💖', '🎀', '🍒'];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];

    const sparkle = document.createElement('div');
    sparkle.className = 'y2k-sparkle';
    sparkle.innerText = symbol;

    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;

    // Theme palette colors
    const colors = ['#FF4D9E', '#FFB6D5', '#FFFFFF', '#6B2D5C', '#C41E3A', '#1A1A1A'];
    sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.textShadow = '2px 2px 0 #1A1A1A';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 600);
});

// 4. QUOTES BOX IN GALLERY (Section 11)
function initQuotesBox() {
    const gallerySection = document.getElementById('gallery');
    if (!gallerySection) return;

    const carouselContainer = gallerySection.querySelector('.y2k-carousel-container');
    if (!carouselContainer) return;

    // Check if already enhanced
    if (gallerySection.querySelector('.prima-quotes-box')) return;

    // Create 2-column layout row
    const row = document.createElement('div');
    row.className = 'row g-4 align-items-stretch';

    const colCarousel = document.createElement('div');
    colCarousel.className = 'col-lg-8';

    const colQuotes = document.createElement('div');
    colQuotes.className = 'col-lg-4 d-flex';

    // Build Zine-style Quotes Box
    colQuotes.innerHTML = `
        <div class="prima-quotes-box w-100">
            <div class="quotes-tag">
                <span class="badge-zine">✦ MANIFESTO ✦</span>
            </div>
            <blockquote class="quotes-text">
                "Dancing through the chaos with glitter in my hair and rhythm in my blood. First. Bold. Unapologetic."
            </blockquote>
            <div class="quotes-author text-end">
                <span class="script-author">— Jovantri Immanuel</span>
            </div>
        </div>
    `;

    // Move carouselContainer into colCarousel
    carouselContainer.parentNode.insertBefore(row, carouselContainer);
    colCarousel.appendChild(carouselContainer);
    row.appendChild(colCarousel);
    row.appendChild(colQuotes);
}
