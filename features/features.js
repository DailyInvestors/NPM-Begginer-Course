export function exampleFeature() {
    console.log("This is an example feature for the npm course.");
}

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function featureWindowBox() {
    // Create box
    let box = document.getElementById('feature-window-box');
    if (!box) {
        box = document.createElement('div');
        box.id = 'feature-window-box';
        box.style.position = 'fixed';
        box.style.left = '30px';
        box.style.bottom = '30px';
        box.style.width = '320px';
        box.style.height = '180px';
        box.style.background = '#fff';
        box.style.border = '2px solid #333';
        box.style.borderRadius = '10px';
        box.style.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
        box.style.zIndex = '10000';
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.transition = 'all 0.2s';
        document.body.appendChild(box);
    }
    // Header
    let header = document.createElement('div');
    header.style.background = '#222';
    header.style.color = '#fff';
    header.style.padding = '8px 12px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.cursor = 'move';
    header.innerHTML = '<span>Feature Window</span>';
    // Controls
    let controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.gap = '8px';
    // Close
    let closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.title = 'Close';
    closeBtn.style.background = '#e74c3c';
    closeBtn.style.color = '#fff';
    closeBtn.style.border = 'none';
    closeBtn.style.borderRadius = '3px';
    closeBtn.style.width = '28px';
    closeBtn.style.height = '28px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.onclick = () => window.close();
    // Minimize
    let minBtn = document.createElement('button');
    minBtn.textContent = '—';
    minBtn.title = 'Minimize';
    minBtn.style.background = '#f1c40f';
    minBtn.style.color = '#222';
    minBtn.style.border = 'none';
    minBtn.style.borderRadius = '3px';
    minBtn.style.width = '28px';
    minBtn.style.height = '28px';
    minBtn.style.cursor = 'pointer';
    minBtn.onclick = () => {
        box.style.height = '40px';
        content.style.display = 'none';
    };
    // Maximize
    let maxBtn = document.createElement('button');
    maxBtn.textContent = '⬜';
    maxBtn.title = 'Maximize';
    maxBtn.style.background = '#2ecc40';
    maxBtn.style.color = '#fff';
    maxBtn.style.border = 'none';
    maxBtn.style.borderRadius = '3px';
    maxBtn.style.width = '28px';
    maxBtn.style.height = '28px';
    maxBtn.style.cursor = 'pointer';
    maxBtn.onclick = () => {
        box.style.height = '320px';
        box.style.width = '480px';
        content.style.display = 'block';
    };
    controls.appendChild(minBtn);
    controls.appendChild(maxBtn);
    controls.appendChild(closeBtn);
    header.appendChild(controls);
    // Content
    let content = document.createElement('div');
    content.style.flex = '1';
    content.style.padding = '16px';
    content.textContent = 'This is a draggable, closable, minimizable, and maximizable window box.';
    // Clear and append
    box.innerHTML = '';
    box.appendChild(header);
    box.appendChild(content);
    // Drag logic (optional, simple)
    let isDragging = false, offsetX = 0, offsetY = 0;
    header.onmousedown = function(e) {
        isDragging = true;
        offsetX = e.clientX - box.offsetLeft;
        offsetY = e.clientY - box.offsetTop;
        document.onmousemove = function(e) {
            if (isDragging) {
                box.style.left = (e.clientX - offsetX) + 'px';
                box.style.top = (e.clientY - offsetY) + 'px';
                box.style.bottom = '';
            }
        };
        document.onmouseup = function() {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}
