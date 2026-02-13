<template>
  <section id="events" class="events-section">
    <h2 class="section-title">
      Our <span>Events</span>
    </h2>

    <div class="scroll-wrapper" ref="scrollWrapper">
      <div class="timeline">

        <div class="timeline-line"></div>

        <div v-for="(event, index) in events" :key="index" class="event" @click="openForm(event.link)">
          <div class="dot"></div>

          <div class="poster">
            <img class="image" :src="event.poster" :alt="event.title" />
          </div>

          <div class="info">
            <h3>{{ event.title }}</h3>
            <p class="date">{{ event.date }}</p>
            <p class="venue">📍 {{ event.venue }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollWrapper = ref(null);

const events = [
  {
    title: "Recode And Optimize",
    poster: "/events/event6.JPG",
    date: "15 Feb 2026 | 10:00 AM - 12:00 PM",
    venue:"Online",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdlpWPTfDeGXyai0eBqVWgJ_Ilr5yE9RuSSjFPDZbIEq91yLg/viewform?usp=publish-editor",
  },
  {
    title: "Interpret X",
    poster: "/events/event7.JPG",
    date: "16 Feb 2026 | 8:00 AM – 1:00 PM",
    venue: "AB3 – 201",
    link: "https://forms.gle/S426zjo5udU7hvqv9",
  },
  {
    title: "Code Clash",
    poster: "/events/event8.JPG",
    date: "17 Feb 2026 | 2:00 PM – 4:00 PM",
    venue: "AB3 – 201",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScaIR9ZNOrFzRWr6gd56oI-D805rZpftEMsaUyqfiLqPRkzUQ/viewform",
  }
];

const onWheel = (e) => {
  const el = scrollWrapper.value;
  if (!el) return;

  const delta = e.deltaY;

  const atStart = el.scrollLeft <= 0;
  const atEnd =
    Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;

  // 🔒 Lock section while horizontal scrolling is possible
  if (
    (delta > 0 && !atEnd) || // scrolling down, not yet at end
    (delta < 0 && !atStart)  // scrolling up, not yet at start
  ) {
    e.preventDefault();
    el.scrollLeft += delta;
  }
  // else → allow normal vertical scroll (next/prev section)
};


const openForm = (link) => {
  window.open(link, "_blank");
};

onMounted(() => {
  scrollWrapper.value.addEventListener("wheel", onWheel, { passive: false });
});

onUnmounted(() => {
  scrollWrapper.value.removeEventListener("wheel", onWheel);
});
</script>

<style scoped>
.events-section {
  /* min-height: 80vh; */
  padding: 6rem 0;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
}

.section-title span {
  color: var(--accent);
}


.scroll-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}

.scroll-wrapper::-webkit-scrollbar {
  display: none;
}

.timeline {
  position: relative;
  display: flex;
  justify-content:center;
  gap: 120px;
  padding: 0 10vw 4rem;
  min-width: max-content;
}

.timeline-line {
  position: absolute;
  top: 7px;
  left: 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(to right,
      transparent,
      var(--accent),
      transparent);
}

.event {
  position: relative;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.dot {
  width: 14px;
  height: 14px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 16px rgba(227, 27, 90, 0.9);
  margin-bottom: 1.2rem;
  z-index: 2;
}

.poster {
  width: 220px;
  height:300px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(227, 27, 90, 0.25);
  transition: transform 0.4s ease;
}

.poster img {
  width: 220px;
  height: 300px;
  object-fit:cover;
  display: block;
}

.event:hover .poster {
  transform: translateY(-10px) scale(1.05);
}

/* INFO — background REMOVED */
.info {
  margin-top: 1rem;
  text-align: center;
  padding: 1.2rem;
}

.info h3 {
  color: var(--accent);
  margin-bottom: 0.3rem;
}

.date,
.venue {
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .timeline {
    gap: 60px;
    padding: 0 2rem 3rem;
  }

  .poster {
    width: 180px;
  }
}
</style>
