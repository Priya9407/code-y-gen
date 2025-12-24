<template>
  <nav class="navbar">
    <div class="logo">CodeYGen</div>

    <!-- Links for desktop -->
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#team">Team</a></li>
    </ul>

    <!-- Join button for desktop -->
    <button class="nav-btn">Join Us</button>

    <!-- Mobile hamburger button -->
    <button class="mobile-btn" @click="menuOpen = !menuOpen">
      <span v-if="!menuOpen">☰</span>
      <span v-else>✕</span>
    </button>

    <!-- Mobile links -->
    <ul v-if="menuOpen" class="mobile-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#team">Team</a></li>
      <li><button class="nav-btn">Join Us</button></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  padding: 0.8rem 1.5rem;
  border-radius: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background: rgba(15, 0, 0, 0.9); */
  backdrop-filter: blur(12px);
  z-index: 1000;
}

/* Logo */
.logo {
  color: white;
  font-family: var(--inter);
  font-weight: 700;
  font-size: 1.2rem;
}

/* Desktop links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.6rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-family: var(--inter);
}

/* Desktop Join button */
.nav-btn {
  background: #E31B5A;
  border: none;
  padding: 0.86rem 2rem;
  border-radius: 10px;
  color: white;
  font-family: var(--inter);
  font-weight: 600;
  cursor: pointer;
}

/* Mobile Hamburger */
.mobile-btn {
  display: none;
  background: #E31B5A;
  color: white;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Mobile menu */
.mobile-menu {
  position: absolute;
  top: 4rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background: rgba(15, 0, 0, 0.95);
  padding: 1rem;
  border-radius: 12px;
}

.mobile-menu li button {
  width: 100%;
  border-radius: 12px;
}

/* Responsive */
@media (max-width: 768px) {

  .nav-links,
  .nav-btn {
    display: none;
  }

  .mobile-btn {
    display: block;
  }
}
</style>
