<template>
  <section class="main-section">
    <canvas ref="canvas" class="background-canvas"></canvas>

    <div class="content">
      <h1>&ltcode><br> <span class="center">{y}</span>
        <br>gen</h1>
      <p>Code for the young generation 🚀</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let ctx, w, h, raf

const mouse = { x: -9999, y: -9999 }

const TOKENS = [
  'function', 'const', '{}', '()', '=>',
  '</>', 'if', 'else', 'return', 'let',
  'var', '&&', '||', '===', ';'
]

const streams = []

class CodeSymbol {
  constructor(x, y, speed, size, opacity) {
    this.x = x
    this.y = y
    this.speed = speed
    this.size = size
    this.opacity = opacity
    this.text = TOKENS[Math.floor(Math.random() * TOKENS.length)]
  }

  update() {
    this.y += this.speed
    if (this.y > h + 40) {
      this.y = -40
      this.text = TOKENS[Math.floor(Math.random() * TOKENS.length)]
    }

    const dx = this.x - mouse.x
    const dy = this.y - mouse.y
    const dist = Math.sqrt(dx * dx + dy * dy)

    this.scale = dist < 120 ? 1.4 : 1
  }

  draw() {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.scale(this.scale, this.scale)

    ctx.font = `${this.size}px monospace`
    ctx.fillStyle = `rgba(227,27,90,${this.opacity})`
    ctx.shadowColor = 'rgba(227,27,90,0.35)'
    ctx.shadowBlur = 10

    ctx.fillText(this.text, 0, 0)
    ctx.restore()
  }
}

const resize = () => {
  w = canvas.value.width = window.innerWidth
  h = canvas.value.height = window.innerHeight

  streams.length = 0
  const spacing = 120

  for (let x = 0; x < w; x += spacing) {
    for (let i = 0; i < 6; i++) {
      streams.push(
        new CodeSymbol(
          x + Math.random() * 40,
          Math.random() * h,
          Math.random() * 0.6 + 0.3,
          Math.random() * 6 + 12,
          Math.random() * 0.4 + 0.25
        )
      )
    }
  }
}

const animate = () => {
  ctx.clearRect(0, 0, w, h)

  streams.forEach(s => {
    s.update()
    s.draw()
  })

  raf = requestAnimationFrame(animate)
}

const onMouseMove = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()
  animate()

  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.main-section {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at top,
      #160003,
      #0f0000 70%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.center{
  color:var(--accent);
}
.content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
}

.content h1 {
  font-size: 3.5rem;
  letter-spacing: 1px;
  font-family: var(--inter);
}

.content p {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  opacity: 0.85;
}
</style>
