<script setup>
import NavBar from './components/NavBar.vue'
import MainSection from './components/MainSection.vue'
import AboutSection from './components/AboutSection.vue'
import GlobalBackground from './components/GlobalBackground.vue'
import EventsSection from './components/EventsSection.vue';
import FooterSection from './components/FooterSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<template>
  <GlobalBackground />
  <NavBar />

  <main>
    <MainSection />
    <AboutSection />
    <EventsSection />
    <ContactSection />
    <FooterSection />

  </main>
</template>

<style>
main {
  position: relative;
  z-index: 1;
}
</style>
