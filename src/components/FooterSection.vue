<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- BRAND -->
      <div class="footer-brand">
        <h2>CodeYGen</h2>
        <p class="brand-desc">Where Code Meets Creativity.</p>
      </div>

      <!-- LINKS -->
      <div class="footer-links">
        <h4 class="links-title">Quick Links</h4>
        <div class="links-wrapper">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <!-- CONTACT -->
      <div class="footer-contact">
        <h4 class="contact-title">Contact Us</h4>
        <a class="email-link" href="mailto:codeygenzclub@gmail.com">codeygenzclub@gmail.com</a>

        <div class="socials">
          <div class="social-links">
            <a href="https://www.instagram.com/codeygenvitc/" aria-label="Instagram" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/in/yourpage" aria-label="LinkedIn" target="_blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/@Codeygen" aria-label="YouTube" target="_blank">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

    </div>

    <!-- BOTTOM BAR -->
    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} CodeYGen. All rights reserved.
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background: var(--panel-bg);
  backdrop-filter: blur(6px);
  padding: 4rem 8vw 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* MAIN CONTENT */
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 3rem;
  align-items: start;
}

/* BRAND */
.footer-brand h2 {
  color: var(--accent);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.brand-desc {
  color: var(--text-muted);
  max-width: 260px;
}

/* LINKS & CONTACT */
.links-title,
.contact-title {
  margin-bottom: 1rem;
  color: var(--text-main);
}

.footer-links a,
.email-link {
  display: block;
  margin-bottom: 0.6rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.email-link:hover {
  color: var(--accent);
}

/* SOCIALS */
.socials {
  margin-top: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  font-size: 1.3rem;
  color: var(--text-muted);
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-3px);
  color: var(--accent);
}

/* BOTTOM BAR */
.footer-bottom {
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* MOBILE - COMPACT HORIZONTAL LAYOUT */
@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 2rem;
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  /* Hide links and contact text, but keep brand, socials, and copyright */
  .brand-desc,
  .links-title,
  .contact-title,
  .email-link,
  .footer-links {
    display: none;
  }

  .footer-brand h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  .footer-contact {
    display: flex;
    align-items: center;
  }

  .socials {
    margin-top: 0;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .footer-bottom {
    margin-top: 1.5rem;
    padding-top: 1rem;
    font-size: 0.75rem;
  }
}
</style>
