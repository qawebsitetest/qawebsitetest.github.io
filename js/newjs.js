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
            }, cursorSpeed / 2);

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
});

    // Start observing the target element
    observer.observe(div);
}

// Example usage
const options = {
    targetClass: "h1add",
    text: "B2B & Full Stack Marketing agency Digital Advertising Web Development Application Development",
    delay: 80,
    cursorSpeed: 900
};

const options2 = {
    targetClass: "display-1",
    text: "We can build whathever is on your mind",
    delay: 110,
    cursorSpeed: 900
};
const options3 = {
    targetClass: "lead",
    text: "Lugo is a creative agency from Belgrade that creates authentic and innovative content for the market. We work with renowned local, regional and global clients. We specialize in creating campaigns, branding, website and application development. Contact us if you are looking for a second opinion or guidance for your brand.",
    delay: 20,
    cursorSpeed: 900
};
const options4 = {
    targetClass: "display-2",
    text: "Projects",
    delay: 200,
    cursorSpeed: 900
};

const options6 = {
    targetClass: "display-4",
    text: "Feel free to contact us for any project idea or collaboration",
    delay: 50,
    cursorSpeed: 900
};
const options7 = {
    targetClass: "lead4",
    text: "Moreover, we excel in crafting engaging website designs, developing innovative applications, and creating seamless e-commerce experiences. Our dedicated team combines technical expertise with creative flair to ensure that your online presence is not only impactful but also functional. Elevate your business to new heights by partnering with Lugo – contact us today for a personalized consultation tailored to your specific goals.",
    delay: 10,
    cursorSpeed: 900
};

const options8 = {
    targetClass: "lead3",
    text: "Welcome to Lugo, your all-in-one solution for digital success. From tailored marketing strategies to web development, branding, video production, and social media management, we've got your digital needs covered. Whether you're looking to boost online visibility with SEO, accelerate growth through PPC advertising, or create a compelling brand identity, we're here to elevate your business. Let's work together to achieve your goals – contact us for a personalized consultation today.",
    delay: 10,
    cursorSpeed: 900
};

// Start observing the target elements
dynamicTextTyping(options);
dynamicTextTyping(options2);
dynamicTextTyping(options3);
dynamicTextTyping(options4);

dynamicTextTyping(options6);
dynamicTextTyping(options7);
dynamicTextTyping(options8);