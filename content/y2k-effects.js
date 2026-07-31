document.addEventListener('click', (e) => {
    const symbols = ['✦', '✧', '★', '◆', '▲', '♦', '✦', '⬟'];
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    const sparkle = document.createElement('div');
    sparkle.className = 'y2k-sparkle';
    sparkle.innerText = symbol;
    
    // Position centered at click coordinates
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    
    // Set pastel colors for aesthetic Y2K theme
    const colors = ['#ff85c2', '#70ceff', '#ffd966', '#8febb0', '#c4a0ff'];
    sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.textShadow = `0 0 8px rgba(255,255,255,0.8)`;
    
    document.body.appendChild(sparkle);
    
    // Remove after the animation completes
    setTimeout(() => {
        sparkle.remove();
    }, 800);
});
