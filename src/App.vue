<script setup>
import NavBar from './components/NavBar.vue'
import MainSection from './components/MainSection.vue'
import AboutSection from './components/AboutSection.vue'
import GlobalBackground from './components/GlobalBackground.vue'
</script>

<template>
  <GlobalBackground />
  <NavBar />

  <main>
    <MainSection />
    <AboutSection />
  </main>
</template>

<style>
main {
  position: relative;
  z-index: 1;
}
</style>
