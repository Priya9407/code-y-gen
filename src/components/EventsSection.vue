<template>
  <section id="events" class="events-section">
    <div class="section-header">
      <span>Upcoming</span>
      <h2>Events</h2>
      <p>Explore our latest gatherings and workshops, designed to fuel creativity and fast-track your skills.</p>
    </div>

    <div class="events-grid">
      <article v-for="(event, index) in events" :key="index" class="event-card">
        <div class="poster">
          <img :src="event.poster" :alt="event.title" />
        </div>

        <div class="event-body">
          <div class="event-top">
            <span class="event-badge">{{ event.category }}</span>
            <span class="event-date">{{ event.date }}</span>
          </div>

          <h3>{{ event.title }}</h3>
          <p class="venue">{{ event.venue }}</p>

          <div class="event-list">
            <div><strong>Time:</strong> {{ event.time }}</div>
            <div><strong>Format:</strong> {{ event.format }}</div>
            <div><strong>Entry:</strong> {{ event.entry }}</div>
          </div>

          <p class="description">{{ event.description }}</p>

          <div class="event-actions" v-if="event.link">
            <a class="event-btn" :href="event.link" target="_blank" rel="noreferrer">
              Register Now
            </a>
          </div>
          <div class="poster-link">
            <a :href="event.posterLink" target="_blank" rel="noreferrer">View Full Poster</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    title: "Neural Frontier",
    poster: "/events/neural-frontier.png",
    date: "31 Aug - 1 Sep 2026",
    time: "09:00 AM - 09:00 AM",
    venue: "MG Auditorium",
    category: "AI Hackathon",
    format: "Team (1-4)",
    entry: "Free event",
    description: "AI research reproduction and optimization hackathon. Turn research papers into working models, improve them, and publish your results.",
    posterLink: "/events/poster1.jpeg",
    link: "",
  },
  {
    title: "Glitch in the Matrix",
    poster: "/events/glitch.png",
    date: "21 Aug 2026",
    time: "14:00 - 18:00",
    venue: "AB3-101",
    category: "AI Challenge",
    format: "Individual",
    entry: "No entry fee",
    description: "Compete in creative AI battles, prompt contests, and a finale Turing Test to see who can outthink the machine.",
    posterLink: "/events/poster2.jpeg",
    link: "",
  }
];
</script>

<style scoped>
.events-section {
  padding: 6rem 1.5rem;
  background: var(--blur-bg2);
  backdrop-filter: blur(12px);
  opacity: 0.8;
}

.section-header {
  max-width: 760px;
  margin: 0 auto 3rem;
  text-align: center;
}

.section-header span {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--accent);
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 700;
}

.section-header h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section-header p {
  max-width: 620px;
  margin: 0 auto;
  color: var(--text-muted);
  line-height: 1.8;
}

.events-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.event-card {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 1.5rem;
  background: var(--panel-bg);
  border: 1px solid var(--border-strong);
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 24px 64px var(--shadow-color);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  max-width: 900px;
  justify-self: start;
}

.event-card:nth-child(even) {
  grid-template-columns: 1.15fr 0.85fr;
  justify-self: end;
}

.event-card:nth-child(even) .poster {
  order: 2;
}

.event-card:nth-child(even) .event-body {
  order: 1;
}

.event-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.28);
}

.poster {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  min-height: 320px;
  max-height: 520px;
  background: var(--bg-main);
}

.poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.event-card:hover .poster img {
  transform: scale(1.03);
}

.event-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
}

.event-top {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.event-badge {
  display: inline-flex;
  padding: 0.55rem 0.95rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.7px;
  color: var(--accent);
  background: rgba(227, 27, 90, 0.1);
}

.event-date {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.venue {
  color: var(--text-main);
  font-weight: 500;
}

.event-list {
  display: grid;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-main);
}

.description {
  color: var(--text-muted);
  line-height: 1.8;
}

.event-actions {
  margin-top: auto;
}

.poster-link {
  margin-top: 0.75rem;
}

.poster-link a {
  color: var(--accent);
  text-decoration: underline;
  font-weight: 600;
}

.poster-link a:hover {
  color: var(--accent-hover);
}

.event-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.4rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.event-btn:hover {
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .event-card {
    grid-template-columns: 1fr;
  }

  .poster {
    min-height: 320px;
    aspect-ratio: 1 / 1;
  }
}

@media (max-width: 640px) {
  .events-section {
    padding: 4rem 1rem;
  }

  .section-header h2 {
    font-size: 2.4rem;
  }

  .event-card {
    padding: 0;
  }

  .event-body {
    padding: 1.25rem;
  }
}
</style>
