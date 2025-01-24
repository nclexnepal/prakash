// Extract date from URL query parameters
function getTargetDateFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const targetDate = urlParams.get('date');
    
    if (targetDate) {
        // Format: YYYYMMDD -> Year, Month (0-11), Day
        const year = parseInt(targetDate.slice(0, 4), 10);
        const month = parseInt(targetDate.slice(4, 6), 10) - 1; // Month is 0-indexed
        const day = parseInt(targetDate.slice(6, 8), 10);

        return { year, month, day };
    }

    // Default date (if none provided in the URL)
    return { year: 2018, month: 0, day: 1 };
}

// Get the target date from the URL
const { year, month, day } = getTargetDateFromURL();

let units = ['months', 'days', 'hours', 'minutes', 'seconds'];

let divElements = units.map((key) => {
    let content = key;
    let div = document.createElement('div');
    div.className = `${content} unit`;
    div.innerHTML = `${content}`;
    document.body.appendChild(div);
    return div;
});

function countdown(divElements) {
    setInterval(() => {
        let timeNow = new Date();
        let targetDate = new Date(year, month, day);

        // Calculate time difference
        let timeDiff = targetDate - timeNow;

        if (timeDiff <= 0) {
            timeDiff = 0; // If the target date has passed
        }

        let monthsLeft = 0; // You can calculate months based on specific logic if needed
        let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hoursLeft = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        let minutesLeft = Math.floor((timeDiff / (1000 * 60)) % 60);
        let secondsLeft = Math.floor((timeDiff / 1000) % 60);

        // Update the DOM elements
        divElements[0].dataset.content = monthsLeft;
        divElements[1].dataset.content = daysLeft;
        divElements[2].dataset.content = hoursLeft;
        divElements[3].dataset.content = minutesLeft;
        divElements[4].dataset.content = secondsLeft;
    }, 1000);
}

countdown(divElements);
