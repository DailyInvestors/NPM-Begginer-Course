// tracking.js
(function() {
    const cookieName = 'npmCourseViewer';
    const webhookUrl = 'https://your-analytics-endpoint.example.com/webhook';

    // Get or set viewer ID
    function getViewerId() {
        const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        if (match) return match[2];
        const id = Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        document.cookie = cookieName + '=' + id + '; path=/; max-age=31536000';
        return id;
    }

    // Send webhook
    function sendWebhook(viewerId) {
        fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ viewerId, timestamp: new Date().toISOString() })
        }).catch(() => {});
    }

    // Counter UI
    function updateCounter(count) {
        let box = document.getElementById('viewer-counter-box');
        if (!box) {
            box = document.createElement('div');
            box.id = 'viewer-counter-box';
            box.style.position = 'fixed';
            box.style.right = '20px';
            box.style.bottom = '20px';
            box.style.background = 'rgba(0,0,0,0.7)';
            box.style.color = '#fff';
            box.style.padding = '10px 18px';
            box.style.borderRadius = '8px';
            box.style.fontSize = '18px';
            box.style.zIndex = '9999';
            document.body.appendChild(box);
        }
        box.textContent = 'Viewers: ' + count;
    }

    // Get count from server (simulate with localStorage for demo)
    function getAndUpdateCount() {
        // In production, fetch from server. Here, use localStorage for demo.
        let count = parseInt(localStorage.getItem('viewerCount') || '0', 10);
        count++;
        localStorage.setItem('viewerCount', count);
        updateCounter(count);
    }

    // --- Google Calendar Scheduling Button Function ---
    /**
     * Loads the Google Calendar scheduling button into a specified target element.
     * This function should be called after the Google Calendar script is loaded.
     *
     * @param {string} containerId The ID of the HTML element where the button should be inserted.
     * @param {string} calendarUrl The URL of your Google Calendar appointment schedule.
     * @param {string} buttonColor The desired color of the button (e.g., '#039BE5').
     * @param {string} buttonLabel The text label for the button (e.g., 'Book an appointment').
     */
    function loadGoogleCalendarButton(containerId, calendarUrl, buttonColor, buttonLabel) {
        // We'll use a small retry mechanism to ensure the Google script is loaded
        const checkAndLoad = () => {
            if (window.calendar && window.calendar.schedulingButton) {
                const targetElement = document.getElementById(containerId);
                if (targetElement) {
                    window.calendar.schedulingButton.load({
                        url: calendarUrl,
                        color: buttonColor,
                        label: buttonLabel,
                        target: targetElement,
                    });
                } else {
                    console.error(`Google Calendar Button: Target element with ID '${containerId}' not found.`);
                }
            } else {
                // If not ready, try again shortly
                setTimeout(checkAndLoad, 50);
            }
        };
        checkAndLoad(); // Initial call
    }
    // --- End Google Calendar Scheduling Button Function ---


    // Main execution within the IIFE
    const viewerId = getViewerId();
    sendWebhook(viewerId);
    getAndUpdateCount();

    // Load the Google Calendar button when the DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Make sure you have a div with this ID in your HTML, e.g., <div id="calendar-button-container"></div>
        loadGoogleCalendarButton(
            'calendar-button-container', // The ID of the div where the button will go
            'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1zfEk3ZiUG4fS9VBxVQxLUBzjpyhsSJVh3boXBVY_OmjUbkxhiO0LsVVPUZAgj5qd8tHY6ilMj?gv=true',
            '#039BE5',
            'Book an Appointment Now'
        );
    });

})();
