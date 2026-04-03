/* =========================================
   A11ytek – JavaScript
   ========================================= */

'use strict';

// === Mobile Navigation ===
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}

// === Animated Stats Counter ===
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const steps    = 60;
  const step     = target / steps;
  const interval = duration / steps;
  let current    = 0;

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current).toLocaleString();
    if (current >= target) clearInterval(timer);
  }, interval);
}

const statNumbers = document.querySelectorAll('.stat-number[data-target]');

if (statNumbers.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

// === Contact Form (Formspree) ===
const form       = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (form && formStatus) {
  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Validation
    const nameField  = form.querySelector('#name');
    const emailField = form.querySelector('#email');
    let valid        = true;
    let firstInvalid = null;

    [nameField, emailField].forEach(field => {
      field.removeAttribute('aria-invalid');
      field.style.borderColor = '';
    });

    if (!nameField.value.trim()) {
      nameField.setAttribute('aria-invalid', 'true');
      nameField.style.borderColor = 'var(--error)';
      firstInvalid = firstInvalid || nameField;
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailField.value.trim() || !emailPattern.test(emailField.value)) {
      emailField.setAttribute('aria-invalid', 'true');
      emailField.style.borderColor = 'var(--error)';
      firstInvalid = firstInvalid || emailField;
      valid = false;
    }

    if (!valid) {
      formStatus.textContent = 'Please fill in all required fields correctly.';
      formStatus.style.color = 'var(--error)';
      firstInvalid.focus();
      return;
    }

    const btn        = form.querySelector('button[type="submit"]');
    const formspreeVal = form.dataset.formspree;
    const endpoint = formspreeVal.startsWith('http')
      ? formspreeVal
      : `https://formspree.io/f/${formspreeVal}`;
    btn.disabled     = true;
    btn.textContent  = 'Sending…';
    formStatus.textContent = '';

    try {
      const res = await fetch(endpoint, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        formStatus.textContent = 'Thank you! We will be in touch within one business day.';
        formStatus.style.color = 'var(--success)';
        form.reset();
      } else {
        const data = await res.json();
        const msg  = data.errors?.map(err => err.message).join(', ') || 'Something went wrong. Please try again.';
        formStatus.textContent = msg;
        formStatus.style.color = 'var(--error)';
      }
    } catch {
      formStatus.textContent = 'Network error. Please email us directly at a11ytek.accessibility@gmail.com';
      formStatus.style.color = 'var(--error)';
    } finally {
      btn.disabled    = false;
      btn.textContent = 'Send Message';
    }
  });
}

// === Smooth Scroll Active Nav Link ===
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

if (sections.length && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.setAttribute('aria-current', isActive ? 'true' : 'false');
          link.style.color = isActive ? 'var(--primary)' : '';
          link.style.fontWeight = isActive ? '700' : '';
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}
