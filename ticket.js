document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const avatar = document.getElementById('avatar').files[0];

    if (avatar) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const avatarURL = e.target.result;

            // Save data to local storage
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('avatarURL', avatarURL);

            // Redirect to ticket.html
            window.location.href = 'ticket.html';
        };
        reader.readAsDataURL(avatar);
    } else {
        // Save data to local storage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

        // Redirect to ticket.html
        window.location.href = 'ticket.html';
    }
});

