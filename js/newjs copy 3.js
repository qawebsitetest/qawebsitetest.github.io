function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function dynamicTextTypingReverseWithObserver(options) {
    const { targetClass, text, delay, cursorSpeed } = options;

    const div = document.querySelector(`.${targetClass}`);
    div.innerHTML = "";
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.visibility = "hidden"; // Initially hide the cursor
    const cursorBlinkSpeed = 800;

    let i = text.length - 1;

    function addNewLines() {
        // Add new lines after specific parts of the text
        const currentSubstring = text.substring(i + 1);
        const parts = [
            'B2B & Full Stack Marketing agency Web Development Digital Advertising',
            'B2B & Full Stack Marketing agency Digital Advertising',
            'B2B & Full Stack Marketing agency'
        ];

        parts.forEach((part) => {
            if (currentSubstring === part) {
                div.innerHTML = '<br>' + div.innerHTML;
            }
        });
    }

    function textTypingReverseWithDelayAndNewLines() {
        if (i >= 0) {
            if (i !== text.length - 1) {
                div.removeChild(cursor);
            }
            addNewLines();
            div.innerHTML = text[i] + div.innerHTML;
            div.appendChild(cursor);

            // Change cursor opacity with animation
            cursor.style.transition = `opacity ${cursorSpeed / 2 / 1000}s`;
            cursor.style.opacity = 0.3;

            setTimeout(() => {
                cursor.style.opacity = 1;
            }, cursorSpeed / 2);

            i--;
            setTimeout(textTypingReverseWithDelayAndNewLines, delay);
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

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in the viewport, start typing after a delay
                cursor.style.visibility = "visible"; // Show the cursor
                
                // Introduce a delay before starting the typing animation
                setTimeout(() => {
                    textTypingReverseWithDelayAndNewLines();
                    observer.unobserve(div); // Stop observing once triggered
                }, 500); // 500 milliseconds (0.5 seconds) delay
            }
        });
    });

    observer.observe(div);
}
const options1 = {
    targetClass: "service-title",
    text: "We're a one-stop creative agency that turns great ideas into extraordinary brands.", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};

const optionsWithCursor = {
    targetClass: "service-text",
    text: "Services", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor1 = {
    targetClass: "web-dev",
    text: "Web Development", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor2 = {
    targetClass: "web-text",
    text: "Elevate your online presence with our dynamic and user-friendly web development ervices.", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor3 = {
    targetClass: "digital",
    text: "Digital Advertising", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor4 = {
    targetClass: "digital-text",
    text: "Enhance your brand's digital presence with our focused Digital Advertising services, covering strategic planning to performance analysis.", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor5 = {
    targetClass: "application",
    text: "Application Development", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor6 = {
    targetClass: "application-text",
    text: "Propel your business forward with our in-depth Application Development services, strategically designed to maximize potential and meet your unique operational needs.", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};

// Example usage:
dynamicTextTypingReverseWithObserver(options1);
dynamicTextTypingReverseWithObserver(optionsWithCursor);
dynamicTextTypingReverseWithObserver(optionsWithCursor1);
dynamicTextTypingReverseWithObserver(optionsWithCursor2);
dynamicTextTypingReverseWithObserver(optionsWithCursor3);
dynamicTextTypingReverseWithObserver(optionsWithCursor4);
dynamicTextTypingReverseWithObserver(optionsWithCursor5);
dynamicTextTypingReverseWithObserver(optionsWithCursor6);

// Example usage:
