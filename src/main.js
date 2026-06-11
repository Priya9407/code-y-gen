import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Intersection Observer for smooth scroll-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Stop observing once animated in
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal');
    if (binding.value) {
      // Allow passing a delay value, e.g., v-reveal="1"
      el.classList.add(`reveal-delay-${binding.value}`);
    }
    observer.observe(el);
  },
  unmounted(el) {
    observer.unobserve(el);
  }
});

app.mount('#app')
