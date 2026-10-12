let PROFILE, PROJECTS;

const PV = {
  journal:'<div class="win"><div class="top"><b></b><b></b><b></b></div><h5>Dear journal,</h5><div class="bar2 l"></div><div class="bar2 m"></div><div class="bar2 l"></div><div class="bar2 s lime"></div><div class="bar2 m"></div><div class="bar2 l"></div><div class="bar2 s"></div></div>',
  portal:'<div class="win"><div class="top"><b></b><b></b><b></b></div><div class="pills"><i></i><i></i><i></i><i></i></div><div class="rows"><div><i></i><i></i><i></i></div><div><i></i><i></i><i></i></div><div><i></i><i></i><i></i></div><div><i></i><i></i><i></i></div></div></div>',
  calc:'<div class="win"><div class="top"><b></b><b></b><b></b></div><div class="calc"><div class="in"><div><i></i><i></i></div><div><i></i><i></i></div><div><i></i><i></i></div><div><i></i><i></i></div></div><div class="res" aria-hidden="true">1.75</div></div></div>',
  land:'<div class="win"><div class="top"><b></b><b></b><b></b></div><div class="land"><div><h5>Fresh brew,<br>slow morning.</h5><div class="bar2 m" style="margin-top:.6rem"></div><div class="btn2"></div></div><div class="cir"></div></div></div>',
  todo:'<div class="win"><div class="top"><b></b><b></b><b></b></div><div class="todo"><div class="done"><b></b><i></i></div><div><b></b><i></i></div><div><b></b><i></i></div><div class="done"><b></b><i></i></div></div></div>',
  porsche:'<div class="porsche-preview"><img src="projects/activity-5-porsche-landing-page/porsche.jpg" alt="Porsche car used in the landing page project"><div class="porsche-caption"><strong>PORSCHE</strong><span>FIERCE TO DRIVE</span></div></div>'
};

fetch('data.json')
  .then(response => {
    if (!response.ok) throw new Error('Could not load data.json');
    return response.json();
  })
  .then(data => {
    PROFILE = data.PROFILE;
    PROJECTS = data.PROJECTS;
    initializePortfolio();
  })
  .catch(error => console.error('Portfolio data failed to load:', error));

function initializePortfolio() {
  const $ = (s,r=document)=>r.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Fill profile details */
  document.querySelectorAll('[data-bind]').forEach(el=>{ const v=PROFILE[el.dataset.bind]; if(v) el.textContent=v; });
  $('.big-name').setAttribute('aria-label', PROFILE.name);
  $('#mailBtn').href = 'mailto:'+PROFILE.email;
  const githubLink = $('#gh'), facebookLink = $('#fb'), linkedinLink = $('#li');
  if (githubLink && PROFILE.github) githubLink.href = PROFILE.github;
  if (facebookLink && PROFILE.facebook) facebookLink.href = PROFILE.facebook;
  if (linkedinLink) linkedinLink.remove();
  $('#yr').textContent = new Date().getFullYear();

  /* Ticker */
  const items=['HTML','CSS','JavaScript','Python','Java','UI/UX design'];
  const row = items.map(t=>'<span>'+t+'</span>').join('');
  $('#track').innerHTML = row + row;

  /* Projects: don't display invented sample work when no projects were provided. */
  const g = $('#gallery');
  const filters = $('#filters');
  if (!PROJECTS || PROJECTS.length === 0) {
    if (filters) filters.hidden = true;
    g.innerHTML = '<div class="card add s7" data-cat="info"><span class="plus" aria-hidden="true">✳</span><h3>Building my project portfolio</h3><p>I’m continuing to develop my skills through my IT studies. This section will feature projects as I complete and document them.</p></div>';
  } else {
    const link = (href,text)=> href
      ? '<a class="lnk" href="'+href+'" target="_blank" rel="noopener noreferrer">'+text+' ↗</a>'
      : '';
    g.innerHTML = PROJECTS.map(p=>(
      '<article class="card project-card '+p.size+'" data-cat="'+p.cat+'" data-project-url="'+p.demo+'" tabindex="0" role="link" aria-label="Open project: '+p.title+'">'+
        '<div class="pv"><span class="badge">'+p.label+'</span><div class="mock">'+(PV[p.pv]||'')+'</div></div>'+
        '<div class="info"><span class="mono purpose">'+p.purpose+'</span><h3>'+p.title+'</h3><p class="d">'+p.desc+'</p>'+
        '<ul class="tech">'+p.tech.map(t=>'<li>'+t+'</li>').join('')+'</ul>'+
        '<div class="links2">'+link(p.demo,'Open project')+link(p.code,'Download source')+'</div></div>'+
      '</article>'
    )).join('');
    g.querySelectorAll('.project-card').forEach(card=>{
      const openProject=()=>{ const url=card.dataset.projectUrl; if(url) window.open(url,'_blank','noopener,noreferrer'); };
      card.addEventListener('click',e=>{ if(!e.target.closest('a,button')) openProject(); });
      card.addEventListener('keydown',e=>{ if((e.key==='Enter'||e.key===' ') && e.target===card){ e.preventDefault(); openProject(); } });
    });
    const btns = [...document.querySelectorAll('#filters button')];
    btns.forEach(b=>b.addEventListener('click',()=>{
      btns.forEach(x=>x.setAttribute('aria-pressed', String(x===b)));
      const f=b.dataset.f;
      g.querySelectorAll('.card').forEach(c=>{ c.hidden = !(f==='all' || c.dataset.cat===f); });
    }));
  }

  /* Mobile menu */
  const nav=$('#nav'), menu=$('#menu');
  const setMenu=o=>{ nav.classList.toggle('open',o); menu.setAttribute('aria-expanded',String(o)); };
  menu.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
  document.querySelectorAll('#links a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  addEventListener('keydown',e=>{ if(e.key==='Escape') setMenu(false); });

  /* Scroll spy */
  const map = {home:'#home',about:'#about',skills:'#about',projects:'#projects',journey:'#projects',contact:'#contact'};
  const links=[...document.querySelectorAll('#links a')];
  if('IntersectionObserver' in window){
    const spy=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting){ links.forEach(a=>a.removeAttribute('aria-current')); const a=links.find(l=>l.getAttribute('href')===map[e.target.id]); if(a) a.setAttribute('aria-current','true'); }
    }),{rootMargin:'-45% 0px -50% 0px'});
    ['home','about','skills','projects','journey','contact'].forEach(id=>{ const el=document.getElementById(id); if(el) spy.observe(el); });

    /* Reveal on scroll: elements below the fold start hidden, with a safety timeout */
    const vh=innerHeight;
    const pending=[...document.querySelectorAll('.reveal')].filter(el=>el.getBoundingClientRect().top>vh*0.92);
    if(!reduce){
      pending.forEach(el=>el.classList.add('pre'));
      const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.remove('pre'); io.unobserve(e.target);} }),{threshold:.12});
      pending.forEach(el=>io.observe(el));
      setTimeout(()=>pending.forEach(el=>el.classList.remove('pre')),4000);
    }
  }

  /* Hero cursor accent (fine pointers only) */
  const hero=$('#home'), ring=$('#ring');
  if(!reduce && matchMedia('(pointer:fine)').matches){
    let tx=0,ty=0,x=0,y=0,raf=0;
    const tick=()=>{ x+=(tx-x)*.16; y+=(ty-y)*.16; ring.style.transform='translate('+x+'px,'+y+'px)'; raf=(Math.abs(tx-x)+Math.abs(ty-y)>.5)?requestAnimationFrame(tick):0; };
    hero.addEventListener('pointermove',e=>{
      const r=hero.getBoundingClientRect(); tx=e.clientX-r.left; ty=e.clientY-r.top;
      hero.style.setProperty('--mx',tx+'px'); hero.style.setProperty('--my',ty+'px');
      hero.classList.add('live'); if(!raf) raf=requestAnimationFrame(tick);
    });
    hero.addEventListener('pointerleave',()=>hero.classList.remove('live'));
  }

  /* Copy email */
  const note=$('#copyNote');
  $('#copyBtn').addEventListener('click',async()=>{
    const t=PROFILE.email;
    try{ await navigator.clipboard.writeText(t); note.textContent='Copied to clipboard'; }
    catch(e){ const r=document.createRange(); r.selectNodeContents($('#emailText')); const s=getSelection(); s.removeAllRanges(); s.addRange(r); note.textContent='Press Ctrl/Cmd + C to copy'; }
    setTimeout(()=>note.textContent='',2500);
  });
}
