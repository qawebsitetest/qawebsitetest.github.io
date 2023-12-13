function dynamicTextTypingReverseWithObserver(options) {
    const { targetClass, text, delay } = options;

    const div = document.querySelector(`.${targetClass}`);
    div.innerHTML = "";

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
            addNewLines();
            div.innerHTML = text[i] + div.innerHTML;

            i--;
            setTimeout(textTypingReverseWithDelayAndNewLines, delay);
        }
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in the viewport, start typing
                textTypingReverseWithDelayAndNewLines();
                observer.unobserve(entry.target); // Stop observing once triggered
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
    text: "Propel your business forward with our in-depth Application Development services.", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor7 = {
    targetClass: "branding",
    text: "Branding", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor8 = {
    targetClass: "branding-text",
    text: "Define your brand essence with our expert branding services, creating a lasting connection through distinctive narratives and visuals.", 
    delay: 30,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};

// Example usage:
/* dynamicTextTypingReverseWithObserver(options1); */
/* dynamicTextTypingReverseWithObserver(optionsWithCursor);
dynamicTextTypingReverseWithObserver(optionsWithCursor1);
dynamicTextTypingReverseWithObserver(optionsWithCursor2);
dynamicTextTypingReverseWithObserver(optionsWithCursor3);
dynamicTextTypingReverseWithObserver(optionsWithCursor4);
dynamicTextTypingReverseWithObserver(optionsWithCursor5);
dynamicTextTypingReverseWithObserver(optionsWithCursor6);
dynamicTextTypingReverseWithObserver(optionsWithCursor7);
dynamicTextTypingReverseWithObserver(optionsWithCursor8); */


// Example usage:
