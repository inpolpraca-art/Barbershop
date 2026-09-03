const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');

function setMenu(open){
  if(!nav||!menuBtn)return;
  nav.classList.toggle('mobile-open',open);
  menuBtn.classList.toggle('open',open);
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.setAttribute('aria-label',open?'Zamknij menu':'Otwórz menu');
  document.body.classList.toggle('menu-lock',open && innerWidth<=700);
}
if(menuBtn){
  menuBtn.addEventListener('click',()=>setMenu(!nav.classList.contains('mobile-open')));
}
if(nav){
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
window.addEventListener('resize',()=>{if(innerWidth>700)setMenu(false)});

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.service,.review-grid article,.stats div,.story-text,.gallery-item').forEach(e=>{e.classList.add('reveal');obs.observe(e)});

const lightbox=document.querySelector('#lightbox');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{
  if(!lightbox)return;
  lightbox.querySelector('img').src=item.querySelector('img').src;
  lightbox.classList.add('active');
}));
if(lightbox)lightbox.addEventListener('click',()=>lightbox.classList.remove('active'));

const theme=document.querySelector('#theme');
if(theme){
  theme.onclick=()=>{document.body.classList.toggle('light');localStorage.setItem('noir-theme',document.body.classList.contains('light')?'light':'dark')};
  if(localStorage.getItem('noir-theme')==='light')document.body.classList.add('light');
}
document.querySelectorAll('.book-btn').forEach(b=>b.addEventListener('click',()=>{
  const el=document.querySelector('#kontakt');
  if(el)el.scrollIntoView({behavior:'smooth'});
  setTimeout(()=>document.querySelector('#name')?.focus(),500);
}));
