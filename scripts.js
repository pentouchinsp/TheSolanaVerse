const canvas = document.getElementById('stars');
const nebula = document.querySelector('.nebula');
let ctx, w, h, stars = [];
function init(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; ctx = canvas.getContext('2d'); w = canvas.width; h = canvas.height; stars = []; const count = Math.floor((w*h)/11000); for(let i=0;i<count;i++){ stars.push({x: Math.random()*w, y: Math.random()*h, r: Math.random()*1.3+0.2, vx:(Math.random()-0.5)*0.02, vy: (Math.random()*0.2)+0.02, a: Math.random()*0.8+0.2}); } }
function draw(){ ctx.clearRect(0,0,w,h); for(let s of stars){ ctx.beginPath(); ctx.fillStyle = 'rgba(255,255,255,'+s.a+')'; ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill(); s.x += s.vx; s.y += s.vy; if(s.y>h+10){ s.y=-10; s.x=Math.random()*w; } if(s.x<-10){ s.x=w+10; } if(s.x>w+10){ s.x=-10; } } requestAnimationFrame(draw); }
window.addEventListener('resize', ()=>{ init(); }); init(); draw(); let nx=0; function nebPan(){ nx+=0.05; nebula.style.backgroundPosition = (nx%200) + 'px 0px'; requestAnimationFrame(nebPan); } nebPan();
