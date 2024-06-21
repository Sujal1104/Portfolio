document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    var header = document.querySelector('header');
    var topButton = document.querySelector('.top');

    menu.addEventListener('click', function() {
        this.classList.toggle('fa-times');
        header.classList.toggle('toggle');
    });

    window.addEventListener('scroll', function() {
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');

        if (window.scrollY > 0) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    window.addEventListener('load', function() {
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');

        if (window.scrollY > 0) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    document.querySelectorAll('a[href*="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const project = document.getElementById('project').value;
      const message = document.getElementById('message').value;

      // Basic validation
      if (name === '' || email === '' || project === '' || message === '') {
        alert('Please fill in all fields');
        return;
      }

      // Simulate form submission
      alert('Form submitted successfully!\n' +
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Project: ' + project + '\n' +
            'Message: ' + message);

      // Reset form
      document.getElementById('contactForm').reset();
    });
  });