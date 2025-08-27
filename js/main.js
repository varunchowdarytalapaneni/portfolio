// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Responsive nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
if (hamburger && navLinksContainer) {
  hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });
}

// Close nav on link click (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinksContainer) {
      navLinksContainer.classList.remove('open');
    }
  });
});


// Dynamic copyright year
const copyright = document.getElementById('copyright-year');
if (copyright) {
  const year = new Date().getFullYear();
  copyright.innerHTML = `© ${year} Talapaneni Varun Chowdary. All rights reserved.`;
}
