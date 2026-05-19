<template>
  <nav class="navbar">
    
    <div class="logo">
      Code-<span class="y">y</span>-gen
    </div>

    <ul class="nav-links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <div class="nav-actions">
      <button class="nav-btn">Get Started</button>

      <div class="theme-toggle">
        <div class="orbit">
          <span class="moon">🌙</span>
          <span class="sun">☀️</span>
        </div>
      </div>

      <button class="mobile-btn">☰</button>
    </div>

  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.navbar{
position:fixed;
top:15px;
left:50%;
transform:translateX(-50%);
width:95%;
max-width:1250px;
padding:18px 30px;
display:flex;
justify-content:space-between;
align-items:center;
background:rgba(255,255,255,.05);
backdrop-filter:blur(18px);
border:1px solid rgba(255,255,255,0.08);
border-radius:20px;
box-shadow:0 10px 35px rgba(0,0,0,0.2);
z-index:1000;
}

.logo{
font-size:1.6rem;
font-weight:700;
letter-spacing:1px;
cursor:pointer;
transition:.3s;
color:white;
}

.logo:hover{
transform:scale(1.04);
}

.logo .y{
color:#8b5cf6;
}

.nav-links{
display:flex;
gap:2rem;
list-style:none;
}

.nav-links a{
text-decoration:none;
color:white;
font-weight:500;
padding-bottom:5px;
position:relative;
transition:.3s;
}

.nav-links a:hover{
color:#8b5cf6;
}

.nav-links a.active{
color:#8b5cf6;
}

.nav-links a::after{
content:'';
position:absolute;
left:0;
bottom:-5px;
width:0;
height:2px;
background:#8b5cf6;
transition:.3s;
}

.nav-links a:hover::after,
.nav-links a.active::after{
width:100%;
}

.nav-actions{
display:flex;
align-items:center;
gap:15px;
}

.nav-btn{
background:linear-gradient(135deg,#8b5cf6,#7c3aed);
border:none;
padding:14px 26px;
border-radius:14px;
font-weight:600;
font-size:.95rem;
color:white;
cursor:pointer;
box-shadow:0 8px 20px rgba(0,0,0,0.2);
transition:.3s;
}

.nav-btn:hover{
transform:translateY(-4px);
}

.theme-toggle{
width:48px;
height:48px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
border-radius:50%;
background:rgba(255,255,255,.05);
}

.orbit{
position:relative;
width:40px;
height:40px;
}

.sun,
.moon{
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
transition:.6s;
font-size:1.2rem;
}

.mobile-btn{
display:none;
background:linear-gradient(135deg,#8b5cf6,#7c3aed);
border:none;
color:white;
width:48px;
height:48px;
border-radius:50%;
font-size:1.2rem;
cursor:pointer;
}

@media(max-width:768px){

.nav-links,
.nav-btn{
display:none;
}

.mobile-btn{
display:block;
}

.navbar{
padding:16px 20px;
}

}
</style>