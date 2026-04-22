// ===== Wines Data =====
const WINES = [
  {
    id: 'zilavka-trebinje',
    name: { sr: 'Zilavka Trebinje', en: 'Zilavka Trebinje' },
    subtitle: { sr: 'Bijelo vino • Berba 2022', en: 'White wine • Vintage 2022' },
    type: { sr: 'Bijelo', en: 'White' },
    desc: {
      sr: 'Autohtona hercegovačka Žilavka iz vinograda oko Trebinja. Svježe, mineralno vino sa notama jabuke, kruške i mediteranskog bilja.',
      en: 'Indigenous Herzegovinian Zilavka from vineyards around Trebinje. Fresh, mineral wine with notes of apple, pear and Mediterranean herbs.'
    },
    price: 18,
    color: '#e8d89a'
  },
  {
    id: 'vranac-trebinjski',
    name: { sr: 'Vranac Trebinjski', en: 'Vranac of Trebinje' },
    subtitle: { sr: 'Crveno vino • Berba 2020', en: 'Red wine • Vintage 2020' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Kralj trebinjskih vinograda. Moćan, tamnorubinski Vranac sa aromama višnje, duhana i kamena iz Popovog polja.',
      en: 'The king of Trebinje vineyards. Powerful, dark ruby Vranac with aromas of cherry, tobacco and stone from Popovo polje.'
    },
    price: 24,
    color: '#3d0f14'
  },
  {
    id: 'blatina-popovo',
    name: { sr: 'Blatina Popovo Polje', en: 'Blatina Popovo Polje' },
    subtitle: { sr: 'Crveno vino • Berba 2020', en: 'Red wine • Vintage 2020' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Moćna Blatina iz kamenih vinograda Popovog polja kod Trebinja. Bogat ukus tamnog voća, začina i hrastovine.',
      en: 'Powerful Blatina from the stone vineyards of Popovo polje near Trebinje. Rich flavor of dark fruit, spice and oak.'
    },
    price: 22,
    color: '#4a1e23'
  },
  {
    id: 'gangas-rose',
    name: { sr: 'Gangas Rose', en: 'Gangas Rose' },
    subtitle: { sr: 'Roze vino • Berba 2023', en: 'Rose wine • Vintage 2023' },
    type: { sr: 'Roze', en: 'Rose' },
    desc: {
      sr: 'Elegantan rosé od trebinjske Blatine. Delikatne arome jagode, narandže i ruzmarina sa obala Trebišnjice.',
      en: 'Elegant rose from Trebinje Blatina. Delicate aromas of strawberry, orange and rosemary from the banks of Trebisnjica.'
    },
    price: 16,
    color: '#d4788a'
  },
  {
    id: 'zilavka-barrique',
    name: { sr: 'Zilavka Barrique', en: 'Zilavka Barrique' },
    subtitle: { sr: 'Bijelo vino • Berba 2021', en: 'White wine • Vintage 2021' },
    type: { sr: 'Bijelo', en: 'White' },
    desc: {
      sr: 'Trebinjska Žilavka odležana 12 mjeseci u francuskom hrastu. Kremasta tekstura, vanilija i med.',
      en: 'Trebinje Zilavka aged 12 months in French oak. Creamy texture, vanilla and honey.'
    },
    price: 28,
    color: '#d4b56a'
  },
  {
    id: 'blatina-grand',
    name: { sr: 'Blatina Grand Reserve', en: 'Blatina Grand Reserve' },
    subtitle: { sr: 'Crveno vino • Berba 2018', en: 'Red wine • Vintage 2018' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Naš flagship iz srca Trebinja. 36 mjeseci u barriku. Kompleksno vino za posebne prilike.',
      en: 'Our flagship from the heart of Trebinje. 36 months in barrique. Complex wine for special occasions.'
    },
    price: 35,
    color: '#2d1216'
  },
  {
    id: 'herceg-cuvee',
    name: { sr: 'Herceg Cuvee Trebinje', en: 'Herceg Cuvee Trebinje' },
    subtitle: { sr: 'Kupaža • Berba 2019', en: 'Blend • Vintage 2019' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Vrhunska kupaža Blatine, Trnjaka i Vranca iz trebinjskih vinograda. Duša Hercegovine u jednoj flaši.',
      en: 'Premium blend of Blatina, Trnjak and Vranac from Trebinje vineyards. The soul of Herzegovina in one bottle.'
    },
    price: 42,
    color: '#6b2330'
  }
];

const RECIPIENT_EMAIL = 'pecav96@gmail.com';
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/pecav96@gmail.com';
let currentLang = 'sr';
let cart = JSON.parse(localStorage.getItem('hercegCart') || '[]');

// ===== Wine Bottle SVG =====
function bottleSVG(color) {
  return `<svg viewBox="0 0 140 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-${color.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="${color}" stop-opacity="1"/>
        <stop offset="100%" stop-color="${color}" stop-opacity="0.7"/>
      </linearGradient>
    </defs>
    <rect x="58" y="5" width="24" height="30" fill="#c8a96a" rx="1"/>
    <path d="M 55 35 Q 55 50 50 70 L 50 260 Q 50 270 60 270 L 80 270 Q 90 270 90 260 L 90 70 Q 85 50 85 35 Z" fill="url(#bg-${color.replace('#','')})" stroke="#1a0f0a" stroke-width="1"/>
    <rect x="52" y="110" width="36" height="90" fill="#f5ede0" stroke="#8b7355" stroke-width="0.5"/>
    <text x="70" y="140" text-anchor="middle" font-family="Cinzel, serif" font-size="8" fill="#722f37" font-weight="700">HERCEG</text>
    <text x="70" y="155" text-anchor="middle" font-family="Cinzel, serif" font-size="11" fill="#722f37" font-weight="700">WINES</text>
    <line x1="58" y1="165" x2="82" y2="165" stroke="#c8a96a" stroke-width="0.8"/>
    <text x="70" y="180" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="7" font-style="italic" fill="#4a1e23">Hercegovina</text>
    <text x="70" y="195" text-anchor="middle" font-family="Lato, sans-serif" font-size="6" fill="#722f37">SELECTED WINES</text>
  </svg>`;
}

// ===== Render Wines =====
function renderWines() {
  const grid = document.getElementById('winesGrid');
  grid.innerHTML = WINES.map(wine => `
    <div class="wine-card fade-up">
      <div class="wine-bottle">${bottleSVG(wine.color)}</div>
      <span class="wine-type-badge">${wine.type[currentLang]}</span>
      <h3>${wine.name[currentLang]}</h3>
      <div class="wine-srb">${wine.subtitle[currentLang]}</div>
      <p class="wine-desc">${wine.desc[currentLang]}</p>
      <div class="wine-footer">
        <span class="wine-price">${wine.price} EUR</span>
        <button class="wine-add" data-id="${wine.id}">${currentLang === 'sr' ? 'Dodaj u korpu' : 'Add to cart'}</button>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.wine-add').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });
  observeFadeElements();
}

// ===== Cart Logic =====
let _cartBusy = false;

function addToCart(id) {
  if (_cartBusy) return;
  _cartBusy = true;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  renderCart();
  const wine = WINES.find(w => w.id === id);
  showToast(currentLang === 'sr' ? `${wine.name.sr} dodato u korpu` : `${wine.name.en} added to cart`);
  setTimeout(() => { _cartBusy = false; }, 600);
}

function removeFromCart(id) {
  if (_cartBusy) return;
  _cartBusy = true;
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
  setTimeout(() => { _cartBusy = false; }, 300);
}

function updateQty(id, delta) {
  if (_cartBusy) return;
  _cartBusy = true;
  const item = cart.find(i => i.id === id);
  if (!item) { _cartBusy = false; return; }
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
    setTimeout(() => { _cartBusy = false; }, 300);
    return;
  }
  saveCart();
  renderCart();
  setTimeout(() => { _cartBusy = false; }, 300);
}

function saveCart() {
  localStorage.setItem('hercegCart', JSON.stringify(cart));
  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const wine = WINES.find(w => w.id === item.id);
    return sum + (wine ? wine.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">${currentLang === 'sr' ? 'Vasa korpa je prazna' : 'Your cart is empty'}</p>`;
    footerEl.style.display = 'none';
    return;
  }
  itemsEl.innerHTML = cart.map(item => {
    const wine = WINES.find(w => w.id === item.id);
    return `
      <div class="cart-item">
        <div style="width:60px;">${bottleSVG(wine.color)}</div>
        <div class="cart-item-info">
          <h4>${wine.name[currentLang]}</h4>
          <div class="cart-item-price">${wine.price * item.qty} EUR</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')">${currentLang === 'sr' ? 'Ukloni' : 'Remove'}</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('cartTotal').textContent = getCartTotal() + ' EUR';
  footerEl.style.display = 'block';
}

// ===== Checkout =====
function openCheckout() {
  if (cart.length === 0) {
    showToast(currentLang === 'sr' ? 'Korpa je prazna' : 'Cart is empty');
    return;
  }
  const summary = document.getElementById('checkoutSummary');
  summary.innerHTML = `
    <h4>${currentLang === 'sr' ? 'Vasa porudzbina' : 'Your order'}</h4>
    ${cart.map(item => {
      const wine = WINES.find(w => w.id === item.id);
      return `<div class="checkout-summary-item"><span>${wine.name[currentLang]} × ${item.qty}</span><span>${wine.price * item.qty} EUR</span></div>`;
    }).join('')}
    <div class="checkout-summary-total"><span>${currentLang === 'sr' ? 'Ukupno' : 'Total'}</span><span>${getCartTotal()} EUR</span></div>
  `;
  document.getElementById('cartOverlay').classList.remove('active');
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('checkoutOverlay').classList.add('active');
}

async function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById('oName').value;
  const email = document.getElementById('oEmail').value;
  const phone = document.getElementById('oPhone').value;
  const city = document.getElementById('oCity').value;
  const address = document.getElementById('oAddress').value;

  let orderLines = '';
  cart.forEach(item => {
    const wine = WINES.find(w => w.id === item.id);
    orderLines += `${wine.name.sr} × ${item.qty} = ${wine.price * item.qty} EUR\n`;
  });

  const timestamp = new Date().toLocaleString('sr-RS', {
    timeZone: 'Europe/Belgrade',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'sr' ? 'Slanje...' : 'Sending...';
  }

  try {
    await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `Herceg Wines — Nova rezervacija — ${name} — ${getCartTotal()} EUR`,
        _template: 'table',
        _captcha: 'false',
        _autoresponse: `Poštovani ${name},\n\nhvala Vam što ste odabrali Herceg Wines.\n\nVaša rezervacija je uspješno primljena i obrađujemo je po redoslijedu prispijeća. Kontaktiraćemo Vas u roku od 2–3 radna dana sa svim detaljima.\n\nKao zahvalnost na strpljenju, pripremili smo za Vas ekskluzivni kod:\n\n  ★  HERCEG10  ★\n\n10% popusta na narednu narudžbu.\nKod unesite pri sljedećoj kupovini na pecapecaa.github.io\n\n——————————————————\n\nS poštovanjem,\nHerceg Wines tim\n\nTrebinje, Hercegovina\ninfo@hercegwines.com\n+387 36 640 123\n\n——————————————————\nHerceg Wines • Hercegovačka vina. Online. • Est. 2021`,
        datum_i_vrijeme: timestamp,
        name: name,
        email: email,
        phone: phone,
        city: city,
        address: address,
        total: `${getCartTotal()} EUR`,
        order: orderLines
      })
    });
  } catch (err) {
    console.error('FormSubmit send attempt:', err);
  }

  document.getElementById('checkoutFormWrap').style.display = 'none';
  document.getElementById('checkoutSuccess').style.display = 'block';
  cart = [];
  saveCart();
  renderCart();
  document.getElementById('checkoutForm').reset();
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
}

// ===== Language Toggle =====
function switchLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'sr' ? 'sr' : 'en';
  document.querySelectorAll('[data-sr]').forEach(el => {
    const text = el.dataset[lang === 'sr' ? 'sr' : 'en'];
    if (text) {
      if (text.includes('<br>')) el.innerHTML = text;
      else el.textContent = text;
    }
  });
  document.querySelectorAll('[data-sr-ph]').forEach(el => {
    el.placeholder = el.dataset[lang === 'sr' ? 'srPh' : 'enPh'];
  });
  const btn = document.getElementById('langToggle');
  btn.innerHTML = lang === 'sr'
    ? '<span class="lang-active">SR</span> / <span>EN</span>'
    : '<span>SR</span> / <span class="lang-active">EN</span>';
  localStorage.setItem('hercegLang', lang);
  renderWines();
  renderCart();
}

// ===== Toast =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}

// ===== Hero Particles =====
function createHeroParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'hero-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = '-5%';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.animationDuration = (6 + Math.random() * 6) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    container.appendChild(p);
  }
}

// ===== Counter Animation =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num, .vf-num');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const text = el.textContent.trim();
        const match = text.match(/^(\d+)/);
        if (!match) return;
        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        const duration = 1500;
        const start = performance.now();
        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach(el => io.observe(el));
}

// ===== Staggered Scroll Animations =====
function observeFadeElements() {
  const groups = [
    '.wine-card',
    '.visit-card',
    '.vf-item',
    '.about-stat'
  ];
  groups.forEach(selector => {
    const items = document.querySelectorAll(selector);
    items.forEach((el, i) => {
      if (!el.classList.contains('fade-up')) el.classList.add('fade-up');
      el.classList.add('stagger-' + (i + 1));
    });
  });
  const singles = document.querySelectorAll('.about-content, .stone-frame, .contact-form, .vineyard-content, .section-header');
  singles.forEach(el => {
    if (!el.classList.contains('fade-up')) el.classList.add('fade-up');
  });
  const allFade = document.querySelectorAll('.fade-up');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  allFade.forEach(el => io.observe(el));
}

// ===== Vineyard Parallax =====
function initParallax() {
  const vineyard = document.querySelector('.section-vineyard');
  if (!vineyard) return;
  const bg = vineyard.querySelector(':before');
  window.addEventListener('scroll', () => {
    const rect = vineyard.getBoundingClientRect();
    const windowH = window.innerHeight;
    if (rect.bottom > 0 && rect.top < windowH) {
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const offset = (progress - 0.5) * 80;
      vineyard.style.setProperty('--parallax-y', offset + 'px');
    }
  }, { passive: true });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile nav
  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
  });
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('active'));
  });

  // Language toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    switchLanguage(currentLang === 'sr' ? 'en' : 'sr');
  });

  // Cart UI
  document.getElementById('cartBtn').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartSidebar').classList.add('active');
  });
  document.getElementById('cartClose').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartSidebar').classList.remove('active');
  });
  document.getElementById('cartOverlay').addEventListener('click', () => {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartSidebar').classList.remove('active');
  });

  // Checkout
  document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
  function closeCheckout() {
    document.getElementById('checkoutOverlay').classList.remove('active');
    document.getElementById('checkoutFormWrap').style.display = '';
    document.getElementById('checkoutSuccess').style.display = 'none';
  }
  document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
  document.getElementById('successCloseBtn').addEventListener('click', closeCheckout);
  document.getElementById('checkoutForm').addEventListener('submit', submitOrder);

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const subject = document.getElementById('cSubject').value || 'Poruka sa sajta';
    const message = document.getElementById('cMessage').value;

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'sr' ? 'Slanje...' : 'Sending...';
    }

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Kontakt - ${subject}`,
          _template: 'table',
          _captcha: 'false',
          name: name,
          email: email,
          subject: subject,
          message: message
        })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      if (data.success !== 'true' && data.success !== true) throw new Error('FormSubmit error');
      showToast(currentLang === 'sr' ? 'Poruka poslata!' : 'Message sent!');
      e.target.reset();
    } catch (err) {
      console.error('Contact submission failed:', err);
      showToast(currentLang === 'sr' ? 'Greska pri slanju poruke.' : 'Failed to send message.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  currentLang = 'sr';

  renderWines();
  renderCart();
  switchLanguage(currentLang);
  observeFadeElements();
  createHeroParticles();
  animateCounters();
  initParallax();
});

// Expose for inline handlers
window.updateQty = updateQty;
window.removeFromCart = removeFromCart;
