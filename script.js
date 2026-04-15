// ===== Wines Data =====
const WINES = [
  {
    id: 'zilavka-premium',
    name: { sr: 'Zilavka Premium', en: 'Zilavka Premium' },
    subtitle: { sr: 'Bijelo vino • Berba 2022', en: 'White wine • Vintage 2022' },
    type: { sr: 'Bijelo', en: 'White' },
    desc: {
      sr: 'Autohtona hercegovacka sorta. Svjeze, mineralno vino sa notama jabuke, kruske i sitnog bilja.',
      en: 'Indigenous Herzegovinian variety. Fresh, mineral wine with notes of apple, pear and herbs.'
    },
    price: 18,
    color: '#e8d89a'
  },
  {
    id: 'blatina-reserve',
    name: { sr: 'Blatina Reserve', en: 'Blatina Reserve' },
    subtitle: { sr: 'Crveno vino • Berba 2020', en: 'Red wine • Vintage 2020' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Mocna Blatina iz kamenih vinograda. Bogat ukus tamnog voca, zacina i hrastovine.',
      en: 'Powerful Blatina from stone vineyards. Rich flavor of dark fruit, spice and oak.'
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
      sr: 'Elegantan roze od Blatine. Delikatne arome jagode, narandze i rumarina.',
      en: 'Elegant rose from Blatina. Delicate aromas of strawberry, orange and rosemary.'
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
      sr: 'Zilavka odlezana 12 mjeseci u francuskom hrastu. Kremasta tekstura, vanilija i medj.',
      en: 'Zilavka aged 12 months in French oak. Creamy texture, vanilla and honey.'
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
      sr: 'Nas flagship. 36 mjeseci u barriku. Kompleksno vino za posebne prilike.',
      en: 'Our flagship. 36 months in barrique. Complex wine for special occasions.'
    },
    price: 35,
    color: '#2d1216'
  },
  {
    id: 'herceg-cuvee',
    name: { sr: 'Herceg Cuvee', en: 'Herceg Cuvee' },
    subtitle: { sr: 'Kupaza • Berba 2019', en: 'Blend • Vintage 2019' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Vrhunska kupaza Blatine, Trnjaka i Vranca. Dusa Hercegovine u jednoj flasi.',
      en: 'Premium blend of Blatina, Trnjak and Vranac. The soul of Herzegovina in one bottle.'
    },
    price: 42,
    color: '#6b2330'
  }
];

const RECIPIENT_EMAIL = 'pecav96@gmail.com';
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
    <text x="70" y="140" text-anchor="middle" font-family="Cinzel, serif" font-size="8" fill="#722f37" font-weight="700">VINARIJA</text>
    <text x="70" y="155" text-anchor="middle" font-family="Cinzel, serif" font-size="11" fill="#722f37" font-weight="700">HERCEG</text>
    <line x1="58" y1="165" x2="82" y2="165" stroke="#c8a96a" stroke-width="0.8"/>
    <text x="70" y="180" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="7" font-style="italic" fill="#4a1e23">Hercegovina</text>
    <text x="70" y="195" text-anchor="middle" font-family="Lato, sans-serif" font-size="6" fill="#722f37">ESTABLISHED 1892</text>
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
function addToCart(id) {
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
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  renderCart();
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

function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById('oName').value;
  const email = document.getElementById('oEmail').value;
  const phone = document.getElementById('oPhone').value;
  const city = document.getElementById('oCity').value;
  const address = document.getElementById('oAddress').value;
  const country = document.getElementById('oCountry').value;
  const notes = document.getElementById('oNotes').value;

  const subject = `Nova porudzbina - Vinarija Herceg - ${name}`;
  let body = `NOVA PORUDZBINA / NEW ORDER\n`;
  body += `===========================\n\n`;
  body += `KUPAC / CUSTOMER:\n`;
  body += `Ime: ${name}\n`;
  body += `Email: ${email}\n`;
  body += `Telefon: ${phone}\n`;
  body += `Adresa: ${address}\n`;
  body += `Grad: ${city}\n`;
  body += `Drzava: ${country}\n\n`;
  body += `PORUDZBINA / ORDER:\n`;
  body += `---------------------------\n`;
  cart.forEach(item => {
    const wine = WINES.find(w => w.id === item.id);
    body += `${wine.name.sr} × ${item.qty} = ${wine.price * item.qty} EUR\n`;
  });
  body += `---------------------------\n`;
  body += `UKUPNO / TOTAL: ${getCartTotal()} EUR\n\n`;
  if (notes) body += `NAPOMENA / NOTES:\n${notes}\n\n`;
  body += `Poslato sa: vinarijahergeg.ba\n`;

  const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;

  setTimeout(() => {
    showToast(currentLang === 'sr' ? 'Porudzbina je poslata! Hvala vam.' : 'Order sent! Thank you.');
    cart = [];
    saveCart();
    renderCart();
    document.getElementById('checkoutForm').reset();
    document.getElementById('checkoutOverlay').classList.remove('active');
  }, 500);
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

// ===== Scroll animations =====
function observeFadeElements() {
  const els = document.querySelectorAll('.wine-card, .visit-card, .about-content, .stone-frame, .vf-item, .contact-form, .about-stats');
  els.forEach(el => {
    if (!el.classList.contains('fade-up')) el.classList.add('fade-up');
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
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
  document.getElementById('checkoutClose').addEventListener('click', () => {
    document.getElementById('checkoutOverlay').classList.remove('active');
  });
  document.getElementById('checkoutForm').addEventListener('submit', submitOrder);

  // Contact form
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const subject = document.getElementById('cSubject').value || 'Poruka sa sajta';
    const message = document.getElementById('cMessage').value;
    const body = `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`;
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast(currentLang === 'sr' ? 'Poruka poslata!' : 'Message sent!');
    e.target.reset();
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

  // Load saved lang
  const savedLang = localStorage.getItem('hercegLang');
  if (savedLang) currentLang = savedLang;

  renderWines();
  renderCart();
  switchLanguage(currentLang);
  observeFadeElements();
});

// Expose for inline handlers
window.updateQty = updateQty;
window.removeFromCart = removeFromCart;
