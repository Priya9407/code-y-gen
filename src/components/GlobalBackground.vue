<template>
  <canvas ref="canvas" class="background-canvas"></canvas>
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

const onMouseMove = e => {
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
.background-canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
</style>
