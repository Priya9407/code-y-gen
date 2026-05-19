<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


/* ---------- NAVBAR ---------- */

.navbar{

position:fixed;

top:15px;
left:50%;

transform:
translateX(-50%);

width:95%;
max-width:1250px;

padding:
18px 30px;

display:flex;

justify-content:
space-between;

align-items:
center;

background:
rgba(255,255,255,.05);

backdrop-filter:
blur(18px);

border:
1px solid rgba(
255,
255,
255,
0.08
);

border-radius:
20px;

box-shadow:
0 10px 35px rgba(
0,
0,
0,
0.2
);

z-index:1000;

}



/* ---------- LOGO ---------- */

.logo{

font-size:1.6rem;

font-weight:700;

letter-spacing:1px;

cursor:pointer;

transition:.3s;

}

.logo:hover{

transform:
scale(1.04);

}

.logo .y{

color:
var(--accent);

}



/* ---------- DESKTOP LINKS ---------- */

.nav-links{

display:flex;

gap:2rem;

list-style:none;

}


.nav-links a{

text-decoration:none;

color:
var(--text-main);

font-weight:500;

padding-bottom:5px;

position:relative;

transition:.3s;

}


.nav-links a:hover{

color:
var(--accent);

}


.nav-links a.active{

color:
var(--accent);

}


.nav-links a::after{

content:'';

position:absolute;

left:0;
bottom:-5px;

width:0;

height:2px;

background:
var(--accent);

transition:.3s;

}


.nav-links a:hover::after,
.nav-links a.active::after{

width:100%;

}



/* ---------- ACTIONS ---------- */

.nav-actions{

display:flex;

align-items:center;

gap:15px;

}



/* ---------- CONTACT BUTTON ---------- */

.nav-btn{

background:
linear-gradient(
135deg,
var(--accent),
#7c3aed
);

border:none;

padding:
14px 26px;

border-radius:
14px;

font-weight:600;

font-size:.95rem;

color:white;

cursor:pointer;

box-shadow:
0 8px 20px rgba(
0,
0,
0,
0.2
);

transition:.3s;

}


.nav-btn:hover{

transform:
translateY(-4px);

}



/* ---------- THEME TOGGLE ---------- */

.theme-toggle{

width:48px;
height:48px;

display:flex;

justify-content:center;
align-items:center;

cursor:pointer;

border-radius:50%;

background:
rgba(255,255,255,.05);

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

transform:
translate(-50%,-50%);

transition:.6s;

font-size:1.2rem;

}


.moon{

color:white;

}


.sun{

opacity:0;

color:
var(--accent);

}


[data-theme="light"] .moon{

opacity:0;

transform:
translate(-50%,-150%);

}


[data-theme="light"] .sun{

opacity:1;

transform:
translate(-50%,-50%);

}



/* ---------- MOBILE BUTTON ---------- */

.mobile-btn{

display:none;

background:
linear-gradient(
135deg,
var(--accent),
#7c3aed
);

border:none;

color:white;

width:48px;
height:48px;

border-radius:50%;

font-size:1.2rem;

cursor:pointer;

}



/* ---------- MOBILE MENU ---------- */

.mobile-menu{

position:absolute;

top:80px;
right:10px;

width:230px;

display:flex;

flex-direction:column;

gap:12px;

padding:20px;

border-radius:18px;

background:
rgba(20,20,25,.95);

backdrop-filter:
blur(18px);

list-style:none;

box-shadow:
0 20px 40px rgba(
0,
0,
0,
0.3
);

}


.mobile-menu a{

text-decoration:none;

color:white;

padding:10px;

border-radius:10px;

transition:.3s;

}


.mobile-menu a:hover{

background:
rgba(
255,
255,
255,
0.08
);

color:
var(--accent);

}



/* ---------- RESPONSIVE ---------- */

@media(max-width:768px){

.nav-links,
.nav-btn{

display:none;

}


.mobile-btn{

display:block;

}


.navbar{

padding:
16px 20px;

}

}

</style>