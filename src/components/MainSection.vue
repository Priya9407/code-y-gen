<template>
<section class="main-section" id="home">

<div class="content">

<h1 class="typing-wrapper">

&ltcode><br>

<span class="line">
<span class="accent">
{{ line1 }}
</span>
</span>

<br>

<span class="line">
<span class="white">
{{ line2 }}
</span>
</span>

<span
v-if="showCursor"
class="cursor"
>
|
</span>

</h1>

<p class="subtitle">
Code for the young generation 🚀
Building developers,
innovators and creators.
</p>


<div class="buttons">

<button>
Join Us
</button>

<button class="secondary">
Explore Events
</button>

</div>


<div class="stats">

<div>
<h2>500+</h2>
<p>Members</p>
</div>

<div>
<h2>20+</h2>
<p>Events</p>
</div>

<div>
<h2>50+</h2>
<p>Projects</p>
</div>

</div>

</div>

</section>
</template>



<script setup>
import { ref,onMounted } from 'vue'

const fullLine1='{y}'
const fullLine2='gen'

const line1=ref('')
const line2=ref('')
const showCursor=ref(true)

let typingCompleted=false

const wait=(ms)=>
new Promise(
res=>setTimeout(res,ms)
)

const typeOnce=async()=>{

typingCompleted=false

line1.value=''
line2.value=''

showCursor.value=true

for(let char of fullLine1){

line1.value+=char

await wait(
120+
Math.random()*80
)

}

await wait(300)

for(let char of fullLine2){

line2.value+=char

await wait(
120+
Math.random()*80
)

}

showCursor.value=false

typingCompleted=true

}

const handleRepeat=(event)=>{

const tag=
event.target.tagName
.toLowerCase()

if(
tag==='a'
||
tag==='button'
)return

if(
typingCompleted
){

typeOnce()

}

}

onMounted(()=>{

setTimeout(
()=>typeOnce(),
1200
)

window.addEventListener(
'click',
handleRepeat
)

})
</script>



<style scoped>

.main-section{

min-height:100vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

padding:40px;

}


.content{

z-index:2;

max-width:900px;

}


.content h1{

font-size:5rem;

line-height:1;

font-weight:700;

}


.accent{

color:
var(--accent);

}


.white{

color:white;

}


.subtitle{

margin-top:20px;

font-size:1.2rem;

color:#aaa;

line-height:1.8;

}


.cursor{

animation:
blink 1s infinite;

color:
var(--accent);

}


@keyframes blink{

50%{

opacity:0;

}

}


/* Buttons */

.buttons{

margin-top:35px;

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

}


button{

padding:
14px 28px;

border:none;

border-radius:12px;

background:
linear-gradient(
135deg,
#ff2e74,
#7c3aed
);

color:white;

font-weight:600;

cursor:pointer;

}


button:hover{

transform:
translateY(-5px);

}


.secondary{

background:
transparent;

border:
1px solid white;

}


/* Stats */

.stats{

margin-top:70px;

display:flex;

justify-content:center;

gap:70px;

flex-wrap:wrap;

}


.stats h2{

font-size:2rem;

color:
var(--accent);

}


.stats p{

opacity:.8;

}


/* Mobile */

@media(max-width:768px){

.content h1{

font-size:3rem;

}

.stats{

gap:30px;

}

}

</style>