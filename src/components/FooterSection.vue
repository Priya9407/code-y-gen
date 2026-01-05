<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- BRAND -->
      <div class="footer-brand">
        <h2>CodeYGen</h2>
        <p>Where Code Meets Creativity.</p>
      </div>

      <!-- LINKS -->
      <div class="footer-links">
        <h4>Quick Links</h4>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </div>

      <!-- CONTACT -->
      <div class="footer-contact">
        <h4>Contact Us</h4>
        <a href="mailto:codeygenzclub@gmail.com">codeygenzclub@gmail.com</a>

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
  background: rgba(0, 0, 0, 0.4);
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

.footer-brand p {
  color: var(--text-muted);
  max-width: 260px;
}

/* LINKS & CONTACT */
.footer-links h4,
.footer-contact h4 {
  margin-bottom: 1rem;
  color: #fff;
}

.footer-links a,
.footer-contact a {
  display: block;
  margin-bottom: 0.6rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: var(--accent);
}

/* SOCIALS */
.socials {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.socials a {
  font-size: 1.3rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.socials a:hover {
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

/* MOBILE */
@media (max-width: 600px) {
  .footer {
    text-align: center;
  }

  .socials {
    justify-content: center;
  }
}
</style>
