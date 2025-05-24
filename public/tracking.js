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
    // Main
    const viewerId = getViewerId();
    sendWebhook(viewerId);
    getAndUpdateCount();
})();
