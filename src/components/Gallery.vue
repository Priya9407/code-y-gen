<template>
  <section id="gallery" class="gallery-section">
    <h2>Gallery</h2>
    
    <div 
      class="scroller" 
      ref="scrollerRef"
      @mouseenter="pause"
      @mouseleave="resume"
      @touchstart="pause"
      @touchend="resume"
    >
      <div class="scroller__inner" ref="innerRef">
        <div class="scroller__track" ref="trackRef">
          <img 
            v-for="(url, index) in imageUrls" 
            :key="'a-' + index" 
            :src="url" 
            alt="Gallery Image" 
          />
        </div>
        <div class="scroller__track">
          <img 
            v-for="(url, index) in imageUrls" 
            :key="'b-' + index" 
            :src="url" 
            aria-hidden="true" 
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const imageUrls = ref([]);
const scrollerRef = ref(null);
const innerRef = ref(null);
const trackRef = ref(null);

let isPaused = false;
let animationId;

const step = () => {
  if (scrollerRef.value && trackRef.value && innerRef.value && !isPaused) {
    scrollerRef.value.scrollLeft += 1;
    
    // Parse the gap from computed style
    const gap = parseInt(window.getComputedStyle(innerRef.value).gap) || 0;
    const scrollDistance = trackRef.value.offsetWidth + gap;
    
    // If we've scrolled past the first track, seamlessly jump back
    if (scrollerRef.value.scrollLeft >= scrollDistance) {
      scrollerRef.value.scrollLeft -= scrollDistance;
    }
  }
  animationId = requestAnimationFrame(step);
};

const pause = () => isPaused = true;
const resume = () => isPaused = false;

onMounted(() => {
  const images = import.meta.glob('../gallerypics/*.{png,jpg,jpeg,svg,webp}', { eager: true });
  imageUrls.value = Object.values(images).map((mod) => mod.default);
  
  // Start animation loop
  animationId = requestAnimationFrame(step);
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>

<style scoped>
.gallery-section {
  padding: 6rem 0;
  background: var(--bg-section);
  opacity: 0.7;
}

.gallery-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent);
}

.scroller {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  /* Hide scrollbar for a cleaner look */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  padding: 1rem 0;
}

.scroller::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.scroller__inner {
  display: flex;
  gap: 2rem;
  width: max-content;
  padding: 0 2rem;
}

.scroller__track {
  display: flex;
  gap: 2rem;
}

.scroller__track img {
  width: 350px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--card);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

/* Hover effect only on devices that support hover (desktops/laptops) */
@media (hover: hover) {
  .scroller__track img:hover {
    transform: scale(1.05);
  }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .scroller__inner {
    padding: 0 1rem;
    gap: 1rem;
  }
  .scroller__track {
    gap: 1rem;
  }
  .scroller__track img {
    width: 280px;
    height: 200px;
  }
}
</style>