<template>
  <nav class="navbar">
    <div class="logo">
      Code<span class="y">Y</span>Gen
    </div>

    <!-- Desktop Links -->
    <ul class="nav-links">
      <li><a href="#home" :class="{ active: activeSection === 'home' }" @click.prevent="scrollTo('home')">Home</a></li>
      <li><a href="#about" :class="{ active: activeSection === 'about' }" @click.prevent="scrollTo('about')">About</a>
      </li>
      <li><a href="#events" :class="{ active: activeSection === 'events' }"
          @click.prevent="scrollTo('events')">Events</a></li>
      <li><a href="#projects" :class="{ active: activeSection === 'projects' }"
          @click.prevent="scrollTo('projects')">Team</a></li>
      <li><a href="#team" :class="{ active: activeSection === 'team' }" @click.prevent="scrollTo('team')">Gallery</a>
      </li>
    </ul>

    <div class="nav-actions">
      <!-- Theme Toggle -->
      <div class="theme-toggle" @click="toggleTheme">
        <div class="orbit">
          <i class="fa-solid fa-moon moon"></i>
          <i class="fa-solid fa-sun sun"></i>
        </div>
      </div>

      <!-- Contact Button -->
      <button class="nav-btn" @click="scrollToContact">Contact Us</button>

      <!-- Mobile Hamburger -->
      <button class="mobile-btn" @click="menuOpen = !menuOpen">
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <ul v-if="menuOpen" class="mobile-menu">
      <li><a @click="scrollTo('home')">Home</a></li>
      <li><a @click="scrollTo('about')">About</a></li>
      <li><a @click="scrollTo('events')">Events</a></li>
      <li><a @click="scrollTo('projects')">Projects</a></li>
      <li><a @click="scrollTo('team')">Team</a></li>
      <li class="mobile-cta">
        <button class="nav-btn" @click="scrollToContact">Contact Us</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute(
    'data-theme',
    isDark.value ? 'dark' : 'light'
  )
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark')
})

const activeSection = ref('home')

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  activeSection.value = id
  menuOpen.value = false
}

const handleScroll = () => {
  const sections = ['home', 'about', 'events', 'projects', 'team']
  const scrollPos = window.scrollY + window.innerHeight / 3
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = sections[i]
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.navbar {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 1200px;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(12px);
  z-index: 1000;
}

/* Logo */
.logo {
  font-family: var(--inter);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--text-main);
}

.logo .y {
  color: var(--accent);
}

/* Desktop Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  font-family: var(--inter);
  font-weight: 500;
  font-size: 1rem;
  color: var(--text-main);
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--underline);
  transition: width 0.3s ease;
}

.nav-links a.active::after,
.nav-links a:hover::after {
  width: 100%;
}

/* Nav Buttons */
.nav-btn {
  background: var(--accent);
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 12px;
  font-family: var(--inter);
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.nav-btn:hover {
  background: var(--accent-hover);
  transform: scale(1.05);
}

/* Theme toggle */
.theme-toggle {
  width: 46px;
  height: 46px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit {
  position: relative;
  width: 40px;
  height: 40px;
}

.sun,
.moon {
  position: absolute;
  font-size: 1.3rem;
  transition: transform 0.8s cubic-bezier(.4, 0, .2, 1), opacity 0.6s ease;
}

.moon {
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
}

.sun {
  color: #E31B5A;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-180deg);
  opacity: 0;
}

/* Theme Animation */
[data-theme="light"] .moon {
  transform: translate(-50%, -150%) rotate(180deg);
  opacity: 0;
}

[data-theme="light"] .sun {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
}

/* Mobile Hamburger */
.mobile-btn {
  display: none;
  background: var(--accent);
  color: white;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 4.5rem;
  right: 1rem;
  width: 220px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  background: rgb(220, 214, 214);
  backdrop-filter: blur(12px);
  padding: 1.2rem 1rem;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.mobile-menu li {
  width: 100%;
  text-align: center;
}

.mobile-menu a {
  display: block;
  width: 100%;
  padding: 0.65rem 0;
  font-size: 1rem;
  color: var(--accent);
  text-decoration: none;
  border-radius: 10px;
  transition: background 0.25s ease;
}

.mobile-menu a:hover {
  background: rgba(227, 27, 90, 0.12);
}

.mobile-cta .nav-btn {
  width: 100%;
  padding: 0.8rem 0;
  border-radius: 12px;
  font-size: 1rem;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
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
