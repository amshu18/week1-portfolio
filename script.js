document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMsg = document.getElementById('formError');

  if (!name || !email || !message) {
    errorMsg.textContent = 'Please fill out all fields.';
    return;
  }

  if (!email.includes('@')) {
    errorMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  errorMsg.style.color = 'green';
  errorMsg.textContent = 'Form submitted successfully!';
  this.reset();
});