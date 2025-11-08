document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message envoyé avec succès!');
  document.getElementById('contact-form').reset();
});