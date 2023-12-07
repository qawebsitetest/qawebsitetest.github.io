// Function to reverse text with cursor
function textTypingReverse(options) {
    const { targetClass, totalDuration, delay } = options;
    const div = document.querySelector(`.${targetClass}`);
    const originalText = div.textContent.trim();
    div.innerHTML = '';

    const characters = originalText.split('');
    const speed = totalDuration / characters.length;

    characters.forEach((char, index) => {
        const span = document.createElement("span");
        span.style.opacity = 0;
        span.textContent = char;
        div.appendChild(span);
    });

    let i = characters.length - 1;

    function textTypingReverseWithDelay() {
        if (i >= 0) {
            div.childNodes[i].style.opacity = 1;
            i--;
            setTimeout(textTypingReverseWithDelay, speed);
        }
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    textTypingReverseWithDelay();
                }, delay);
                observer.unobserve(div);
            }
        });
    });

    observer.observe(div);
}

// Example usage
const optionsReverse = {
    targetClass: "h1add",
    totalDuration: 5000, // Set the total duration in milliseconds
    delay: 2000
};
textTypingReverse(optionsReverse);