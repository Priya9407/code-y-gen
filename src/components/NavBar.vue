<template>
  <nav class="navbar">
    <div class="logo ">Codeygen</div>

    <!-- Links for desktop -->
    <ul class="nav-links">
      <li>
        <a href="#home" :class="{ active: activeSection === 'home' }" @click.prevent="scrollTo('home')">Home</a>
      </li>
      <li>
        <a href="#about" :class="{ active: activeSection === 'about' }" @click.prevent="scrollTo('about')">About</a>
      </li>
      <li>
        <a href="#events" :class="{ active: activeSection === 'events' }" @click.prevent="scrollTo('events')">Events</a>
      </li>
      <li>
        <a href="#projects" :class="{ active: activeSection === 'projects' }"
          @click.prevent="scrollTo('projects')">Team</a>
      </li>
      <li>
        <a href="#team" :class="{ active: activeSection === 'team' }" @click.prevent="scrollTo('team')">Gallery</a>
      </li>
    </ul>

  
<div class="nav-actions">
      <div class="theme-toggle" @click="toggleTheme">
        <div class="orbit">
          <i class="fa-solid fa-moon moon"></i>
          <i class="fa-solid fa-sun sun"></i>
        </div>

      </div>

      <button class="nav-btn">Contact Us</button>
      <button class="mobile-btn" @click="menuOpen = !menuOpen">
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile links -->
   <ul v-if="menuOpen" class="mobile-menu">
      <li><a @click="scrollTo('home')">Home</a></li>
      <li><a @click="scrollTo('about')">About</a></li>
      <li><a @click="scrollTo('events')">Events</a></li>
      <li><a @click="scrollTo('projects')">Projects</a></li>
      <li><a @click="scrollTo('team')">Team</a></li>
      <li><button class="nav-btn">Contact Us</button></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
  document.documentElement.setAttribute('data-theme', 'light')
})

const activeSection = ref('home') // Home underlined by default

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })

  activeSection.value = id
  menuOpen.value = false
}

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
  transition: transform 0.8s cubic-bezier(.4, 0, .2, 1),
    opacity 0.6s ease;
}

.moon {
  color: white;
  transform: translate(-50%, -50%) rotate(0deg);
  top: 50%;
  left: 50%;
}

.sun {
  color: #E31B5A;
  opacity: 0;
  transform: translate(-50%, -50%) rotate(-180deg);
  top: 50%;
  left: 50%;
}

/* 🌗 Animation path */
[data-theme="light"] .moon {
  transform: translate(-50%, -150%) rotate(180deg);
  opacity: 0;
}

[data-theme="light"] .sun {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
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
.nav-links a {
  position: relative;
  padding-bottom: 4px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background: var(--underline);
  transition: width 0.3s ease;
}

.nav-links a.active::after {
  width: 100%;
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
.nav-btn1{
  background: transparent;
    border: none;
      padding: 0.86rem 2rem;
      border-radius: 10px;
      color: white;
      font-family: var(--inter);
      font-weight: 600;
      cursor: pointer;
      font-size: 1.2rem;
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

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
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
