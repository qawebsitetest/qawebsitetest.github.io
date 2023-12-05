function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function dynamicTextTyping(options) {
    const { targetClass, text, delay, cursorSpeed } = options;

    const div = document.querySelector(`.${targetClass}`);
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    const cursorBlinkSpeed = 800;

    let i = 0;

    function addNewLines() {
        // Add new lines after specific parts of the text
        const currentSubstring = text.substring(0, i);
        const parts = [
            'B2B & Full Stack Marketing agency',
            'B2B & Full Stack Marketing agency Digital Advertising',
            'B2B & Full Stack Marketing agency Digital Advertising Web Development'
        ];

        parts.forEach((part) => {
            if (currentSubstring === part) {
                div.innerHTML += '<br>';
            }
        });
    }

    function textTypingWithDelayAndNewLines() {
        if (i < text.length) {
            if (i !== 0) {
                div.removeChild(cursor);
            }
            addNewLines();
            div.innerHTML += text[i];
            div.appendChild(cursor);

            // Change cursor opacity with animation
            cursor.style.transition = `opacity ${cursorSpeed / 2 / 1000}s`;
            cursor.style.opacity = 0.3;

            setTimeout(() => {
                cursor.style.opacity = 1;
            }, 1500);

            i++;
            setTimeout(textTypingWithDelayAndNewLines, delay);
        } else {
            // Continuously change cursor opacity
            setInterval(() => {
                cursor.style.transition = `opacity ${cursorSpeed / 2 / 1000}s`;
                cursor.style.opacity = 0.3;

                setTimeout(() => {
                    cursor.style.opacity = 1;
                }, cursorSpeed / 2);
            }, cursorBlinkSpeed);
        }
    }

      // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is in the viewport, start typing after a delay
            cursor.style.visibility = "visible"; // Show the cursor
            
            // Introduce a delay before starting the typing animation
            setTimeout(() => {
                textTypingWithDelayAndNewLines();
                observer.unobserve(div); // Stop observing once triggered
            }, 500); // 900 milliseconds (0.9 seconds) delay
        }
    });
}); observer.observe(div);
}



const options7 = {
    targetClass: "display-5",
    text: "Portfolio",
    delay: 200,
    cursorSpeed: 900
};

// Start observing the target elements

dynamicTextTyping(options7);