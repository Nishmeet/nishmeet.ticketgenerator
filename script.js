// app.js
document.getElementById('avatar').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png") && file.size <= 500 * 1024) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById('avatar-preview');
            const icon = document.querySelector('.icon-small');
            preview.src = e.target.result;
            preview.style.display = 'block';
            preview.style.maxWidth = '300px'; // Set the maximum width 
            preview.style.height = 'auto'
            icon.style.display = 'none';
        }
        reader.readAsDataURL(file);
    } else {
        alert("Please upload a JPG or PNG image (max size: 500KB).");
    }
});

const events = ["dragenter", "dragover", "dragleave", "drop"];
const imageDrop = document.querySelector('.upload-box');

events.forEach((eventName) => {
    imageDrop.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}
