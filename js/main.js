/* ========================================
   MAIN — Navigation, Scroll & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Navbar Scroll Effect ----
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function handleNavScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ---- Active Nav Link on Scroll ----
  function updateActiveNav() {
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', () => {
    handleNavScroll();
    updateActiveNav();
  });

  // ---- Smooth Scroll for Nav Links ----
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = navbar.offsetHeight;
        const targetPos = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }

      // Close mobile menu
      const mobileMenu = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ---- Hamburger Menu ----
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // ---- Scroll Reveal Animations ----
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---- Contact Form (mailto fallback) ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#name').value;
      const email = contactForm.querySelector('#email').value;
      const message = contactForm.querySelector('#message').value;

      const mailtoLink = `mailto:kosit.n@ku.th?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailtoLink, '_blank');

      // Show success feedback
      const btn = contactForm.querySelector('.btn-primary');
      const originalText = btn.textContent;
      btn.textContent = '✓ Opening Email Client...';
      btn.style.background = 'linear-gradient(135deg, #06b6d4, #6c63ff)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ---- CTA Scroll Buttons ----
  const scrollBtns = document.querySelectorAll('[data-scroll-to]');
  scrollBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-scroll-to');
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = navbar.offsetHeight;
        window.scrollTo({
          top: target.offsetTop - navHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Initial calls ----
  handleNavScroll();
  updateActiveNav();
});
