<template>
  <section class="main-section" id="home">
    <div class="content">
      <h1 class="typing-wrapper">
        &ltcode><br>

        <span class="line">
          <span class="accent">{{ line1 }}</span>
        </span><br>

        <span class="line">
          <span class="white">{{ line2 }}</span>
        </span>

        <!-- SINGLE CURSOR -->
        <span v-if="showCursor" class="cursor">|</span>
      </h1>

      <p>Code for the young generation 🚀</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fullLine1 = '{y}'
const fullLine2 = 'gen'

const line1 = ref('')
const line2 = ref('')
const showCursor = ref(true)

let typingCompleted = false // ✅ track if typing finished

const wait = (ms) => new Promise(res => setTimeout(res, ms))

const typeOnce = async () => {
  typingCompleted = false
  line1.value = ''
  line2.value = ''
  showCursor.value = true

  // line 1
  for (let char of fullLine1) {
    line1.value += char
    await wait(120 + Math.random() * 80)
  }

  await wait(400)

  // line 2
  for (let char of fullLine2) {
    line2.value += char
    await wait(120 + Math.random() * 80)
  }

  await wait(300)
  showCursor.value = false
  typingCompleted = true
}

// ✅ only trigger typing again if finished
const handleRepeat = (event) => {
  const tag = event.target.tagName.toLowerCase()
  if (tag === 'a' || tag === 'button') return

  if (typingCompleted) {
    typeOnce()
  }
}

onMounted(() => {
  // start first animation after 2 seconds
  setTimeout(() => {
    typeOnce()
  }, 2000)

  window.addEventListener('click', handleRepeat)
  window.addEventListener('keydown', handleRepeat)
})
</script>

<style scoped>
.main-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
}

.content {
  text-align: center;
  z-index: 2;
}

.content h1 {
  font-size: 3.5rem;
  line-height: 1.1;
}

.typing-wrapper {
  display: inline-block;
}

.line {
  display: inline-block;
  min-height: 1em;
}

.accent {
  color: var(--accent);
}

.white {
  color: #ffffff;
}

/* Cursor */
.cursor {
  display: inline-block;
  margin-left: 4px;
  animation: blink 1s step-end infinite;
  color: var(--accent);
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.content p {
  margin-top: 0.5rem;
  opacity: 0.85;
}
</style>
