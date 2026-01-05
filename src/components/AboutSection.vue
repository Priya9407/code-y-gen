<template>
  <section id="about" class="about-section">
    <div class="about-wrapper">

      <!-- LEFT CONTENT -->
      <div class="about-content">
        <span class="tag">ABOUT US</span>

        <h2>
          Where <span>Code</span><br />
          Meets <span>Creativity</span>
        </h2>

        <p class="description">
          CodeYGen is a student-led tech community focused on building real-world
          skills through hands-on projects, hackathons, and collaboration.
          We believe learning should be practical, creative, and fun.
        </p>

        <div class="pill-row">
          <span class="pill">🚀 Build First</span>
          <span class="pill">💡 Learn Together</span>
          <span class="pill">⚙️ Real Projects</span>
          <span class="pill">🤝 Strong Community</span>
        </div>
      </div>

      <!-- RIGHT GLASS STATS -->
      <div class="stats-grid">
        <div class="glass-card">
          <h3>50+</h3>
          <p>Active Members</p>
        </div>

        <div class="glass-card accent">
          <h3>10+</h3>
          <p>Events Conducted</p>
        </div>

        <div class="glass-card">
          <h3>∞</h3>
          <p>Ideas Built</p>
        </div>

        <div class="glass-card">
          <h3>100%</h3>
          <p>Student Driven</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* SECTION OVERLAY (transparent) */
.about-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 1.5rem;

  /* THIS keeps animation visible */
  background: var(--blur-bg);
  backdrop-filter: var(--blur);
}

/* layout */
.about-wrapper {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
}

/* text */
.tag {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--accent);
}

.about-content h2 {
  margin-top: 1rem;
  font-size: 3rem;
  line-height: 1.2;
}

.about-content h2 span {
  color: var(--accent);
}

.description {
  margin-top: 1.4rem;
  max-width: 520px;
  line-height: 1.7;
  color: #e0e0e0;
}

/* pills */
.pill-row {
  margin-top: 2.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.pill {
  padding: 0.6rem 1.3rem;
  border-radius: 999px;
  font-size: 0.9rem;

  background: rgba(227, 27, 90, 0.15);
  border: 1px solid rgba(227, 27, 90, 0.35);
}

/* stats cards */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.glass-card {
  background: rgba(15, 0, 0, 0.7); /* NOT solid */
  border-radius: 18px;
  padding: 2.2rem;
  text-align: center;

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 30px rgba(227, 27, 90, 0.15);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 45px rgba(227, 27, 90, 0.35);
}

.glass-card h3 {
  font-size: 2.4rem;
  color: var(--accent);
}

.glass-card p {
  margin-top: 0.4rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.glass-card.accent {
  background: linear-gradient(
    145deg,
    rgba(227, 27, 90, 0.35),
    rgba(15, 0, 0, 0.7)
  );
}

/* responsive */
@media (max-width: 900px) {
  .about-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-content h2 { 
    font-size: 2.4rem;
  }
}
</style>
