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

.events-section{
  padding:8rem 0;
  background:rgba(0,0,0,.18);
  backdrop-filter:blur(10px);
  overflow:hidden;
}

.section-title{
  text-align:center;
  font-size:3rem;
  font-weight:700;
  margin-bottom:5rem;
}

.section-title span{
  color:var(--accent);
}


/* Scroll */

.scroll-wrapper{
  overflow-x:auto;
  overflow-y:hidden;
  scrollbar-width:none;
}

.scroll-wrapper::-webkit-scrollbar{
  display:none;
}


/* Timeline */

.timeline{
  position:relative;

  display:flex;
  justify-content:center;

  gap:100px;

  padding:
  0 10vw 5rem;

  min-width:max-content;
}

.timeline-line{

  position:absolute;

  top:8px;
  left:0;

  width:100%;
  height:2px;

  background:
  linear-gradient(
  to right,
  transparent,
  var(--accent),
  transparent
  );

}


/* Event */

.event{

  display:flex;

  flex-direction:column;

  align-items:center;

  cursor:pointer;

  transition:.35s;

}

.event:hover{

  transform:
  translateY(-10px);

}


/* Dot */

.dot{

  width:16px;
  height:16px;

  border-radius:50%;

  background:
  var(--accent);

  box-shadow:
  0 0 30px
  rgba(255,46,116,.9);

  margin-bottom:24px;

}


/* Poster */

.poster{

  width:240px;
  height:320px;

  overflow:hidden;

  border-radius:22px;

  background:
  rgba(255,255,255,.05);

  backdrop-filter:
  blur(12px);

  box-shadow:
  0 15px 40px
  rgba(0,0,0,.25);

  transition:.4s;

}

.poster img{

  width:100%;
  height:100%;

  object-fit:cover;

  transition:.4s;

}


.event:hover .poster{

  transform:
  scale(1.05);

}


.event:hover img{

  transform:
  scale(1.08);

}


/* Info */

.info{

  margin-top:20px;

  text-align:center;

  max-width:240px;

  padding:15px;

}

.info h3{

  color:
  var(--accent);

  font-size:1.25rem;

  margin-bottom:8px;

}

.date,
.venue{

  color:
  var(--text-muted);

  line-height:1.8;

  font-size:.9rem;

}


/* Mobile */

@media(max-width:900px){

.timeline{

gap:50px;

padding:
0 30px 4rem;

}

.poster{

width:180px;
height:250px;

}

.section-title{

font-size:2.2rem;

}

}

</style>