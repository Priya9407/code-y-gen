<template>
  <section id="departments" class="departments-section">
    <h2>Departments</h2>

    <div class="departments-container">
      <div class="department-card" v-for="dept in departments" :key="dept.title">
        <h3>{{ dept.title }}</h3>
        <p>{{ dept.description }}</p>
      </div>
    </div>
  </section>
</template>


<script setup>
const departments = [
  {
    title: "Web Development",
    description:
      "The Web Development team strengthens front-end and back-end skills through hands-on projects and curated learning paths and courses.\n\n If you enjoy turning ideas into interactive web experiences, this is your space.",
  },
  {
    title: "AI / ML",
    description:
      "The AI/ML team explores machine learning, data science, and artificial intelligence through practical projects and certifications.\n\n If you’re curious about data and intelligent systems, you’ll fit right in.",
  },
  {
    title: "Social Media",
    description:
      "The Social Media team manages Code Y-Gen’s digital presence across platforms such as Instagram and Linked In.\n\n If you love digital creativity and storytelling, this department is for you.",
  },
  {
    title: "Marketing",
    description:
      "Interested in strategy and promotion?\n\nThe Marketing team focuses on visibility, campaigns, and audience growth. They plan promotions, craft messaging strategies, and ensure every event and initiative gets the attention it deserves.",
  },
  {
    title: "Event Management",
    description:
      "The Event Management team handles planning, coordination, sponsorship outreach, and seamless execution of events.\n\n If you’re organized and proactive, this is your space.",
  },
  {
    title: "Design",
    description:
      "Love creating and making things look amazing? The Design team is where creativity runs free — from posters and content to everything fun and visual that defines Code Y-Gen’s vibe.\n\nIf you think in colors, layouts, and ideas, this is your space.",
  },
];
</script>

<style scoped>
.departments-section {
  padding: 8rem 2rem 6rem;
  background: var(--blur-bg);
  position: relative;
  opacity:0.7;
}

.departments-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: var(--accent);
}

.departments-container {
  max-width: 1200px;
  margin: auto;
  /* Switch to Flexbox for better centering of the "leftovers" */
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 2rem;
}

.department-card {
  background: var(--card);
  backdrop-filter: var(--blur);
  padding: 2rem;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  /* This ensures 3 cards per row on large screens, 
     but allows the bottom 2 to center themselves */
  flex: 1 1 350px; 
  max-width: 380px; 
  min-height: 250px;
  display: flex;
  flex-direction: column;
}

.department-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(227, 27, 90, 0.25);
}

.department-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: var(--accent);
}

.department-card p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  white-space: pre-line;
}

/* Responsive adjustment: on very small screens, let them take full width */
@media (max-width: 480px) {
  .department-card {
    flex: 1 1 100%;
  }
}
</style>