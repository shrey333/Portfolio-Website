const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Show success message
            alert('Message sent successfully!');
            form.reset();  // Clear the form
        } else {
            // Show error message
            alert('Oops! There was a problem sending your message');
        }
    })
    .catch(error => {
        alert('Oops! There was a problem sending your message');
    })
    .finally(() => {
        // Reset button text
        button.textContent = originalText;
    });
});