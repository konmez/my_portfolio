const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
  // Form is already validated by HTML5 required attributes, 
  // but you could add custom validation here
  
  // Show a loading state on the button
  const button = this.querySelector('.submit-btn');
  const originalText = button.textContent;
  button.textContent = 'Sending...';
  button.disabled = true;
  
  // Form will submit normally to Formspree
  // You can add this script at the bottom of your HTML before </body>
  
  // Optional: Redirect back to your site after submission
  // Formspree will redirect to your form page by default
});