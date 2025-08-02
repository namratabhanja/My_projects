document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (name === '' || email === '' || message === '') {
        event.preventDefault(); // Prevent form submission if fields are empty
        alert('Please fill in all required fields.');
      } else {
        // You can add code here to submit the form using AJAX or perform other actions
        // For example, you might send form data to the server or display a success message
        alert('Form submitted successfully!');
        // Uncomment the line below to submit the form (if you're using server-side processing)
        // this.submit();
      }
    });
  });
  