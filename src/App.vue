<script setup>
import NavBar from './components/NavBar.vue'
import MainSection from './components/MainSection.vue'
import AboutSection from './components/AboutSection.vue'
import GlobalBackground from './components/GlobalBackground.vue'
import EventsSection from './components/EventsSection.vue';
import Departments from './components/Departments.vue'
import Team from './components/Team.vue'
import Gallery from './components/Gallery.vue'
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
    <Departments />
    <Team/>
    <Gallery/>
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
