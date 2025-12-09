/**
 * Contact Form Handler
 * Handles form submission using Web3Forms API
 */

(function() {
  "use strict";

  // Get the contact form
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const loadingDiv = this.querySelector('.loading');
      const errorDiv = this.querySelector('.error-message');
      const successDiv = this.querySelector('.sent-message');
      const submitButton = this.querySelector('button[type="submit"]');
      
      // Hide all messages
      loadingDiv.style.display = 'block';
      errorDiv.style.display = 'none';
      successDiv.style.display = 'none';
      submitButton.disabled = true;
      
      // Get form data
      const formData = new FormData(contactForm);
      
      // Check if access key is configured
      const accessKey = formData.get('access_key');
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Contact form not configured. Please contact directly at mandyronald58@gmail.com';
        submitButton.disabled = false;
        return;
      }
      
      try {
        // Submit to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        loadingDiv.style.display = 'none';
        
        if (result.success) {
          successDiv.style.display = 'block';
          contactForm.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            successDiv.style.display = 'none';
          }, 5000);
        } else {
          errorDiv.style.display = 'block';
          errorDiv.textContent = result.message || 'Something went wrong. Please try again or email directly at mandyronald58@gmail.com';
        }
      } catch (error) {
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.textContent = 'Network error. Please try again or email directly at mandyronald58@gmail.com';
        console.error('Form submission error:', error);
      }
      
      submitButton.disabled = false;
    });
  }
})();
