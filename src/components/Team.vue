<template> <section id="team" class="team-section">
    <h2>Our Team</h2>
    <div class="team-container">
      <div class="team-card" v-for="member in team" :key="member.email">
        <div class="image-container">
          <img :src="member.image || 'https://via.placeholder.com/100'" :alt="member.name">
        </div>
        <div class="info-container">
          <h3 class="name">{{ member.name }}</h3>
          <p class="designation">{{ member.designation }}</p>
          <a :href="'mailto:' + member.email" class="email">{{ member.email }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import architaaImg from '../photos/architaa.png'
import nithyaImg from '../photos/nithya.png' // <--- ADD THIS LINE
import swathysreeImg from '../photos/swathysree.png'
import durgeshImg from '../photos/durgesh.png'
import abhiramImg from '../photos/abhiram.png'
import hariImg from '../photos/hari.png'
import joshithaImg from '../photos/joshitha.png'
import priyaImg from '../photos/priya.png'
import yohaImg from '../photos/yoha.png'
import fcImg from '../photos/fc.png'

const team = [
  { name: "Dr.Prassanna J", designation: "Faculty Coordinator", email: "prassanna.j@vit.ac.in", image: fcImg },
  { name: "Swathy Sree R", designation: "President", email: "swathysree@vitc.ac.in", image: swathysreeImg },
  { name: "Durgesh Kumar", designation: "Secretary", email: "durgesh.kumar2024@vitstudent.ac.in", image: durgeshImg },
  { name: "Architaa A", designation: "Deputy Secretary", email: "architaa.a2024@vitstudent.ac.in", image: architaaImg },
  { name: "Nithya Kalaichelvan", designation: "Joint Secretary", email: "nithya.k2024@vitstudent.ac.in", image: nithyaImg },
  { name: "Abhiram Anil", designation: "Partnership Lead", email: "abhiramanil2024@vitstudent.ac.in", image: abhiramImg },
  { name: "Hari Hara Sudhan", designation: "AI/ML Lead", email: "hariharasudhan2024@vitstudent.ac.in", image: hariImg },
  { name: "Joshitha Ramesh", designation: "Design Lead", email: "joshitha.ramesh2024@vitstudent.ac.in", image: joshithaImg },
  { name: "Priya Dharshini V", designation: "Web Development Lead", email: "priydharshini.v2024a@vitstudent.ac.in", image: priyaImg },
  { name: "M Yoharudran Atsilia", designation: "Outreach Lead", email: "yoharudranatsilia.m2024@vitstudent.ac.in", image: yohaImg }
];
</script>

<style scoped>
.team-section {
  padding: 6rem 2rem;
  /* Remove opacity: 0.7; as it hides your content */
  background: var(--bg-section); /* Use a solid background variable */
  position: relative;
  opacity:0.7;
}

.team-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent);
}

.team-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  /* Two columns on large screens, one on small */
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.team-card {
  background: var(--card);
  backdrop-filter: var(--blur);
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex; /* Aligns image left, text right */
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateX(10px);
  border-color: var(--accent);
}

.image-container {
  flex-shrink: 0;
}

.image-container img {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Circular image as per sketch */
  object-fit: cover;
  border: 2px solid var(--accent);
}

.info-container {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.name {
  font-size: 1.25rem;
  color: var(--text-main);
  margin: 0;
}

.designation {
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.email {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  word-break: break-all;
}

.email:hover {
  color: var(--accent);
}

/* Mobile adjustments */
@media (max-width: 600px) {
  .team-container {
    grid-template-columns: 1fr;
  }
  .team-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>