document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.hover-navbar');
  
    navbar.addEventListener('mouseenter', function () {
      navbar.style.opacity = '1';
      navbar.style.visibility = 'visible';
    });
  
    navbar.addEventListener('mouseleave', function () {
      navbar.style.opacity = '0';
      navbar.style.visibility = 'hidden';
    });
  });