function textTypingReverse(options) {
    const { targetClass, speed, delay } = options;
    const div = document.querySelector(`.${targetClass}`);

    // Get the text content from the target class
    const originalText = div.textContent.trim();

    // Set the initial text in the div
    div.innerHTML = '';

    // Split the text into characters
    const characters = originalText.split('');

    // Set opacity for each character individually
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

    // Intersection Observer setup
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is in the viewport, start typing backward after a delay
                setTimeout(() => {
                    textTypingReverseWithDelay();
                }, delay);
                observer.unobserve(div); // Stop observing once triggered
            }
        });
    });

    // Start observing the target element
    observer.observe(div);
}

// Function to type text with cursor
// function textTypingWithCursor(options) {
//     const { targetClass, totalDuration, delay, cursorSpeed } = options;

//     const div = document.querySelector(`.${targetClass}`);
//     const originalText = div.textContent.trim();
//     div.innerHTML = ''; // Clear the original content

//     const characters = originalText.split('');
//     const speed = totalDuration / characters.length;

//     let i = 0;

//     function showLetterWithCursor() {
//         if (i < characters.length) {
//             const letter = characters[i];

//             // Create a span for the letter
//             const letterSpan = document.createElement("span");
//             letterSpan.textContent = letter;

//             // Create a cursor for the current letter
//             const cursor = createCursor(cursorSpeed);

//             div.appendChild(letterSpan);
//             div.appendChild(cursor);

//             setTimeout(() => {
//                 div.removeChild(cursor);
//                 i++;
//                 showLetterWithCursor();
//             }, speed);
//         } else {
//             // All letters are shown, add the final cursor at the end
//             const finalCursor = createCursor(cursorSpeed);
//             div.appendChild(finalCursor);
//         }
//     }

//     // Helper function to create a cursor
//     function createCursor(cursorSpeed) {
//         const cursor = document.createElement("span");
//         cursor.textContent = "|";

//         // Add blinking effect to the cursor
//         setInterval(() => {
//             cursor.style.transition = `opacity ${cursorSpeed / 2 / 1000}s`;
//             cursor.style.opacity = cursor.style.opacity === "0" ? 1 : 0;
//         }, cursorSpeed);

//         return cursor;
//     }

//     // Intersection Observer setup
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // Element is in the viewport, start the animation
//                 showLetterWithCursor();
//                 observer.unobserve(div); // Stop observing once triggered
//             }
//         });
//     });

//     // Start observing the target element
//     observer.observe(div);
// }

// Helper function to create a cursor
function createCursor(cursorSpeed) {
    const cursor = document.createElement("span");
    cursor.textContent = "|";

    // Add blinking effect to the cursor
    setInterval(() => {
        cursor.style.transition = `opacity ${cursorSpeed / 2 / 1000}s`;
        cursor.style.opacity = cursor.style.opacity === "0" ? 1 : 0;
    }, cursorSpeed);

    return cursor;
}

// Example usage for textTypingReverse
const optionsWithCurso = {
    targetClass: "service-title",
    speed: 1200,
    delay: 4000
};
/* textTypingReverse(optionsReverse); */

// Example usage for textTypingWithCursor
const optionsWithCursor = {
    targetClass: "service-text",
    totalDuration: 4000, // Set the total duration in milliseconds
    delay: 2000,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor1 = {
    targetClass: "web-dev",
    totalDuration: 4000, // Set the total duration in milliseconds
    delay: 2000,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor2 = {
    targetClass: "web-text",
    totalDuration: 4000, // Set the total duration in milliseconds
    delay: 2000,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor3 = {
    targetClass: "digital",
    totalDuration: 4000, // Set the total duration in milliseconds
    delay: 2000,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor4 = {
    targetClass: "digital-text",
    totalDuration: 4000, // Set the total duration in milliseconds
    delay: 2000,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor5 = {
    targetClass: "application",
    totalDuration: 4000, // Set the total duration in milliseconds
    delay: 2000,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
const optionsWithCursor6 = {
    targetClass: "application-text",
    totalDuration: 4000, // Set the total duration in milliseconds
    delay: 2000,
    cursorSpeed: 900 // Set the cursor speed in milliseconds
};
textTypingReverse(optionsWithCurso);
textTypingReverse(optionsWithCursor);
textTypingReverse(optionsWithCursor1);
textTypingReverse(optionsWithCursor2);
textTypingReverse(optionsWithCursor3);
textTypingReverse(optionsWithCursor4);
textTypingReverse(optionsWithCursor5);
