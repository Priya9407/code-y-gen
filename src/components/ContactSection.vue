<template>
  <section id="contact" class="contact-section">
    <div class="contact-wrapper">

      <!-- LEFT CONTENT -->
      <div class="contact-left">
        <span class="tag">CONTACT</span>

        <h2>
          Connect<br />
          <span>CodeYGen</span>
        </h2>

        <p class="intro">
          Have questions about our events, collaborations, or community?
          We’re always excited to connect with curious minds.
        </p>

        <!-- EXTRA CONTENT -->
        <div class="contact-points">
          <div class="point">
            <div class="point-label">Collaborate</div>
            <p>Work with passionate developers and creators.</p>
          </div>
          <div class="point">
            <div class="point-label">Stay Updated</div>
            <p>Receive news about workshops, hackathons, and events.</p>
          </div>
          <div class="point">
            <div class="point-label">Share Ideas</div>
            <p>Send your feedback or partnership questions.</p>
          </div>
        </div>
      </div>

      <!-- RIGHT FORM CARD -->
      <form class="contact-card" @submit.prevent="sendMail">
        <div class="field">
          <label>Name</label>
          <input type="text" v-model="form.name" placeholder="Your name" required />
        </div>

        <div class="field">
          <label>Email</label>
          <input type="email" v-model="form.email" placeholder="Your email" required />
        </div>

        <div class="field">
          <label>Your Message</label>
          <textarea rows="4" v-model="form.message" placeholder="Type your message..." required></textarea>
        </div>

        <button type="submit" class="submit-btn">
          Send Message
        </button>
      </form>

    </div>
  </section>
</template>
<style scoped>
/* SECTION */
.contact-section {
  min-height: 100vh;
  padding: 5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--section-bg);
  backdrop-filter: blur(1px);
}

/* WRAPPER */
.contact-wrapper {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

/* LEFT CONTENT */
.contact-left .tag {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--accent);
}

.contact-left h2 {
  margin-top: 1rem;
  font-size: 3.2rem;
  line-height: 1.15;
  color: var(--text-main);
}

.contact-left h2 span {
  color: var(--accent);
}

.contact-left .intro {
  margin-top: 1.4rem;
  max-width: 440px;
  line-height: 1.7;
  color: var(--text-muted);
}

/* POINTS */
.contact-points {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.point {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-muted);
}

.point-label {
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
}

/* CARD */
.contact-card {
  background: var(--card);
  border-radius: 28px;
  padding: 3rem;
  box-shadow: 0 30px 70px var(--shadow-color);
}

/* FIELDS */
.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
}

.field label {
  font-size: 0.85rem;
  color: var(--accent);
  margin-bottom: 0.4rem;
}

.field input,
.field textarea {
  padding: 0.9rem 1rem;
  border-radius: 14px;
  border: 1px solid var(--input-border);
  font-size: 0.95rem;
  outline: none;
  transition: 0.25s ease;
  background: var(--input-bg);
  color: var(--text-main);
}

.field textarea {
  resize: none;
}

.field input:focus,
.field textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(227, 27, 90, 0.15);
}

/* BUTTON */
.submit-btn {
  margin-top: 0.6rem;
  width: 100%;
  padding: 1rem;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  color: white;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(227, 27, 90, 0.35);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-left h2 {
    font-size: 2.4rem;
  }

  .contact-card {
    padding: 2.2rem;
  }
}

@media (max-width: 480px) {
  .contact-left h2 {
    font-size: 2rem;
  }
}
</style>
<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const sendMail = () => {
  const subject = encodeURIComponent(`Query from ${form.name}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  );

  window.location.href = `mailto:codeygenzclub@gmail.com?subject=${subject}&body=${body}`;
};
</script>
