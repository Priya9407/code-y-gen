<template>
  <section id="gallery" class="gallery-section">
    <h2>Gallery</h2>
    
    <div class="scroller">
      <div class="scroller__inner">
        <img 
          v-for="(url, index) in imageUrls" 
          :key="'a-' + index" 
          :src="url" 
          alt="Gallery Image" 
        />
        <img 
          v-for="(url, index) in imageUrls" 
          :key="'b-' + index" 
          :src="url" 
          aria-hidden="true" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const imageUrls = ref([]);

onMounted(() => {
  /** * Vite's glob import: 
   * This automatically finds all images in your 'gallerypics' folder.
   * Based on your file structure, the path is '../gallerypics/'
   */
  const images = import.meta.glob('../gallerypics/*.{png,jpg,jpeg,svg,webp}', { eager: true });
  
  // Extract the URL for each imported image
  imageUrls.value = Object.values(images).map((mod) => mod.default);
});
</script>

<style scoped>
.gallery-section {
  padding: 6rem 0;
  background: var(--bg-section);
  overflow: hidden; /* Critical to hide the overflow of the long image row */
  opacity:0.7;
}

.gallery-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent);
}

.scroller {
  width: 100%;
  display: flex;
  overflow: hidden;
}

.scroller__inner {
  display: flex;
  gap: 2rem;
  padding-block: 1rem;
  width: max-content;
  flex-wrap: nowrap;
  /* Adjust the '40s' to make the scroll faster or slower */
  animation: scroll-left 40s linear infinite;
}

/* Pause the animation when a user hovers over an image */
.scroller:hover .scroller__inner {
  animation-play-state: paused;
}

.scroller__inner img {
  width: 350px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--card);
  transition: transform 0.3s ease;
}

.scroller__inner img:hover {
  transform: scale(1.05);
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    /* Moves the row by exactly half (one full set of images) */
    transform: translateX(calc(-50% - 1rem));
  }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .scroller__inner img {
    width: 280px;
    height: 200px;
  }
}
</style>