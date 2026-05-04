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

// ===== Bundles Data =====
const BUNDLES = [
  {
    id: 'bundle-duo',
    name: { sr: 'Duo Paket', en: 'Duo Bundle' },
    subtitle: { sr: '2 flase — bijelo i crveno', en: '2 bottles — white and red' },
    desc: {
      sr: 'Zilavka Trebinje i Vranac Trebinjski. Savršena kombinacija za posebnu večer.',
      en: 'Zilavka Trebinje and Vranac Trebinjski. The perfect pairing for a special evening.'
    },
    wines: ['zilavka-trebinje', 'vranac-trebinjski'],
    count: 2,
    originalPrice: 42,
    price: 34,
    saving: 8
  },
  {
    id: 'bundle-trio',
    name: { sr: 'Trio Paket', en: 'Trio Bundle' },
    subtitle: { sr: '3 premium hercegovačka vina', en: '3 premium Herzegovinian wines' },
    desc: {
      sr: 'Zilavka, Blatina i Vranac — kompletna degustacija Hercegovine u jednoj kutiji.',
      en: 'Zilavka, Blatina and Vranac — the complete Herzegovina tasting experience in one box.'
    },
    wines: ['zilavka-trebinje', 'blatina-popovo', 'vranac-trebinjski'],
    count: 3,
    originalPrice: 64,
    price: 52,
    saving: 12,
    featured: true
  },
  {
    id: 'bundle-grande',
    name: { sr: 'Grande Paket', en: 'Grande Bundle' },
    subtitle: { sr: '5 ekskluzivnih vina Hercegovine', en: '5 exclusive wines of Herzegovina' },
    desc: {
      sr: 'Barrique Žilavka, Vranac, Blatina, Gangas Rose i Grand Reserve. Savršen poklon ili kompletna kolekcija.',
      en: 'Barrique Zilavka, Vranac, Blatina, Gangas Rose and Grand Reserve. Perfect gift or full collection.'
    },
    wines: ['zilavka-barrique', 'vranac-trebinjski', 'blatina-popovo', 'gangas-rose', 'blatina-grand'],
    count: 5,
    originalPrice: 125,
    price: 99,
    saving: 26
  }
];

const RECIPIENT_EMAIL = 'pecav96@gmail.com';
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/pecav96@gmail.com';
let currentLang = 'sr';
let cart = JSON.parse(sessionStorage.getItem('hercegCart') || '[]');

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
    <div class="wine-card fade-up" data-type="${wine.type.sr}">
      <div class="wine-bottle">${bottleSVG(wine.color)}</div>
      <span class="wine-type-badge">${wine.type[currentLang]}</span>
      <h3>${wine.name[currentLang]}</h3>
      <div class="wine-srb">${wine.subtitle[currentLang]}</div>
      <p class="wine-desc">${wine.desc[currentLang]}</p>
      <div class="wine-footer">
        <span class="wine-price">${wine.price} EUR</span>
        <button class="wine-add" data-id="${wine.id}">${currentLang === 'sr' ? 'Dodaj u listu' : 'Add to list'}</button>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.wine-add').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });
  observeFadeElements();
}

// ===== Render Bundles =====
function renderBundles() {
  const grid = document.getElementById('bundlesGrid');
  if (!grid) return;
  const isSr = currentLang === 'sr';
  let html = '';
  BUNDLES.forEach(function(bundle) {
    const saving = isSr ? ('Uštedite ' + bundle.saving + ' EUR') : ('Save ' + bundle.saving + ' EUR');
    const featured = bundle.featured ? ' bundle-card--featured' : '';
    const topBadge = bundle.featured ? ('<div class="bundle-top-badge">' + (isSr ? 'Najpopularnije' : 'Most popular') + '</div>') : '';
    const bottleIcons = bundle.wines.map(function(wid) {
      const w = WINES.find(function(x) { return x.id === wid; });
      return '<div class="bundle-mini-bottle" style="background:' + (w ? w.color : '#722f37') + '"></div>';
    }).join('');
    const countLabel = bundle.count + ' ' + (isSr ? 'flase' : 'bottles');
    const btnLabel = isSr ? 'Dodaj paket u listu' : 'Add bundle to list';
    html += '<div class="bundle-card' + featured + '">';
    html += topBadge;
    html += '<div class="bundle-saving-tag">' + saving + '</div>';
    html += '<div class="bundle-bottles">' + bottleIcons + '</div>';
    html += '<div class="bundle-count">' + countLabel + '</div>';
    html += '<h3 class="bundle-name">' + bundle.name[currentLang] + '</h3>';
    html += '<p class="bundle-subtitle">' + bundle.subtitle[currentLang] + '</p>';
    html += '<p class="bundle-desc">' + bundle.desc[currentLang] + '</p>';
    html += '<div class="bundle-pricing">';
    html += '<span class="bundle-original">' + bundle.originalPrice + ' EUR</span>';
    html += '<span class="bundle-price">' + bundle.price + ' EUR</span>';
    html += '</div>';
    html += '<button class="bundle-add" data-bundle-id="' + bundle.id + '">' + btnLabel + '</button>';
    html += '</div>';
  });
  grid.innerHTML = html;
  grid.querySelectorAll('.bundle-add').forEach(function(btn) {
    btn.addEventListener('click', function() { addBundleToCart(btn.dataset.bundleId); });
  });
}

// ===== Cart Logic =====
let _cartBusy = false;

function addBundleToCart(bundleId) {
  if (_cartBusy) return;
  _cartBusy = true;
  const bundle = BUNDLES.find(b => b.id === bundleId);
  if (!bundle) { _cartBusy = false; return; }
  const existing = cart.find(i => i.id === bundleId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: bundleId, qty: 1, isBundle: true });
  }
  saveCart();
  renderCart();
  showToast(currentLang === 'sr' ? `${bundle.name.sr} dodat u listu` : `${bundle.name.en} added to list`);
  const cartBtn = document.getElementById('cartBtn');
  cartBtn.classList.remove('cart-pulse');
  void cartBtn.offsetWidth;
  cartBtn.classList.add('cart-pulse');
  setTimeout(() => { cartBtn.classList.remove('cart-pulse'); _cartBusy = false; }, 600);
}

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
  showToast(currentLang === 'sr' ? `${wine.name.sr} dodato u listu` : `${wine.name.en} added to list`);
  const cartBtn = document.getElementById('cartBtn');
  cartBtn.classList.remove('cart-pulse');
  void cartBtn.offsetWidth;
  cartBtn.classList.add('cart-pulse');
  setTimeout(() => { cartBtn.classList.remove('cart-pulse'); _cartBusy = false; }, 600);
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
  sessionStorage.setItem('hercegCart', JSON.stringify(cart));
  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function getItemPrice(item) {
  if (item.isBundle) {
    const bundle = BUNDLES.find(b => b.id === item.id);
    return bundle ? bundle.price : 0;
  }
  const wine = WINES.find(w => w.id === item.id);
  return wine ? wine.price : 0;
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + getItemPrice(item) * item.qty, 0);
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">${currentLang === 'sr' ? 'Lista je prazna' : 'Your list is empty'}</p>`;
    footerEl.style.display = 'none';
    return;
  }
  itemsEl.innerHTML = cart.map(item => {
    const price = getItemPrice(item);
    if (item.isBundle) {
      const bundle = BUNDLES.find(b => b.id === item.id);
      const thumbs = bundle.wines.map(wid => {
        const w = WINES.find(x => x.id === wid);
        return `<div style="width:22px;display:inline-block;">${w ? bottleSVG(w.color) : ''}</div>`;
      }).join('');
      return `
        <div class="cart-item cart-item--bundle">
          <div class="cart-bundle-thumbs">${thumbs}</div>
          <div class="cart-item-info">
            <h4>${bundle.name[currentLang]} <span class="cart-bundle-label">${currentLang === 'sr' ? 'Paket' : 'Bundle'}</span></h4>
            <div class="cart-item-price">${price * item.qty} EUR</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart('${item.id}')">${currentLang === 'sr' ? 'Ukloni' : 'Remove'}</button>
            </div>
          </div>
        </div>
      `;
    }
    const wine = WINES.find(w => w.id === item.id);
    return `
      <div class="cart-item">
        <div style="width:60px;">${bottleSVG(wine.color)}</div>
        <div class="cart-item-info">
          <h4>${wine.name[currentLang]}</h4>
          <div class="cart-item-price">${price * item.qty} EUR</div>
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
function updateProgress(step) {
  ['cpStep1', 'cpStep2'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('cp-step--active', 'cp-step--done');
    if (i + 1 < step) el.classList.add('cp-step--done');
    if (i + 1 === step) el.classList.add('cp-step--active');
  });
  const line = document.getElementById('cpLine1');
  if (line) line.classList.toggle('cp-line--done', step > 1);
}

function populateSummary() {
  document.getElementById('checkoutSummary').innerHTML = `
    <h4>${currentLang === 'sr' ? 'Vaša rezervacija' : 'Your reservation'}</h4>
    ${cart.map(item => {
      const price = getItemPrice(item);
      const label = item.isBundle
        ? `${BUNDLES.find(b => b.id === item.id).name[currentLang]} (${currentLang === 'sr' ? 'paket' : 'bundle'})`
        : WINES.find(w => w.id === item.id).name[currentLang];
      return `<div class="checkout-summary-item"><span>${label} × ${item.qty}</span><span>${price * item.qty} EUR</span></div>`;
    }).join('')}
    <div class="checkout-summary-total"><span>${currentLang === 'sr' ? 'Ukupno' : 'Total'}</span><span>${getCartTotal()} EUR</span></div>
  `;
}

function goToStep2() {
  const name    = document.getElementById('oName').value.trim();
  const email   = document.getElementById('oEmail').value.trim();
  const phone   = document.getElementById('oPhone').value.trim();
  const city    = document.getElementById('oCity').value.trim();
  const address = document.getElementById('oAddress').value.trim();
  if (!name || !email || !phone || !city || !address) {
    showToast(currentLang === 'sr' ? 'Popunite sva polja' : 'Please fill in all fields', false);
    return;
  }
  document.getElementById('confirmContact').innerHTML =
    `<p>${name}<br>${email}<br>${phone}</p>`;
  document.getElementById('confirmDelivery').innerHTML =
    `<p>${city}<br>${address}</p>`;
  populateSummary();
  document.getElementById('checkoutStep1').style.display = 'none';
  document.getElementById('checkoutStep2').style.display = 'block';
  document.getElementById('checkoutStepTitle').textContent = currentLang === 'sr' ? 'Pregled rezervacije' : 'Reservation review';
  document.getElementById('checkoutStepDesc').textContent = currentLang === 'sr' ? 'Provjerite detalje i potvrdite.' : 'Review the details and confirm.';
  updateProgress(2);
  document.getElementById('checkoutModal').scrollTop = 0;
}

function goToStep1() {
  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutStep1').style.display = 'block';
  document.getElementById('checkoutStepTitle').textContent = currentLang === 'sr' ? 'Vaši podaci' : 'Your Details';
  document.getElementById('checkoutStepDesc').textContent = currentLang === 'sr' ? 'Popunite sve informacije za rezervaciju.' : 'Fill in all details for your reservation.';
  updateProgress(1);
  document.getElementById('checkoutModal').scrollTop = 0;
}

function openCheckout() {
  if (cart.length === 0) {
    showToast(currentLang === 'sr' ? 'Lista je prazna' : 'Your list is empty', false);
    return;
  }
  document.getElementById('checkoutStep1').style.display = 'block';
  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutStepTitle').textContent = currentLang === 'sr' ? 'Vaši podaci' : 'Your Details';
  document.getElementById('checkoutStepDesc').textContent = currentLang === 'sr' ? 'Popunite sve informacije za rezervaciju.' : 'Fill in all details for your reservation.';
  updateProgress(1);
  document.getElementById('cartOverlay').classList.remove('active');
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('checkoutOverlay').classList.add('active');
}

async function submitOrder(e) {
  e.preventDefault();
  if (document.getElementById('checkoutStep2').style.display === 'none') return;
  const name = document.getElementById('oName').value;
  const email = document.getElementById('oEmail').value;
  const phone = document.getElementById('oPhone').value;
  const city = document.getElementById('oCity').value;
  const address = document.getElementById('oAddress').value;

  let orderLines = '';
  cart.forEach(item => {
    const price = getItemPrice(item);
    let label;
    if (item.isBundle) {
      const bundle = BUNDLES.find(b => b.id === item.id);
      label = bundle ? bundle.name.sr + ' (paket)' : item.id;
    } else {
      const wine = WINES.find(w => w.id === item.id);
      label = wine ? wine.name.sr : item.id;
    }
    orderLines += label + ' × ' + item.qty + ' = ' + (price * item.qty) + ' EUR\n';
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
  updateProgress(2);
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
  renderBundles();
  renderCart();
}

// ===== Toast =====
function showToast(msg, success = true) {
  const toast = document.getElementById('toast');
  if (success) {
    toast.innerHTML = `<span class="toast-check">✓</span>${msg}`;
  } else {
    toast.textContent = msg;
  }
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
  // Age Gate
  const ageGate = document.getElementById('ageGate');
  if (!sessionStorage.getItem('ageVerified')) {
    document.body.style.overflow = 'hidden';
  }
  document.getElementById('ageYes').addEventListener('click', () => {
    sessionStorage.setItem('ageVerified', '1');
    ageGate.classList.add('age-gate--hidden');
    document.body.style.overflow = '';
  });
  document.getElementById('ageNo').addEventListener('click', () => {
    document.getElementById('ageBtns').style.display = 'none';
    document.getElementById('ageDenied').style.display = 'block';
  });

  // Scroll progress bar
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);

  // Navbar scroll + progress update
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    scrollProgress.style.width = Math.min(pct * 100, 100) + '%';
  }, { passive: true });

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
  document.getElementById('checkoutNext').addEventListener('click', goToStep2);
  document.getElementById('checkoutBack').addEventListener('click', goToStep1);
  function closeCheckout() {
    document.getElementById('checkoutOverlay').classList.remove('active');
    document.getElementById('checkoutFormWrap').style.display = '';
    document.getElementById('checkoutSuccess').style.display = 'none';
    document.getElementById('checkoutStep1').style.display = 'block';
    document.getElementById('checkoutStep2').style.display = 'none';
    document.getElementById('checkoutStepTitle').textContent = currentLang === 'sr' ? 'Vaši podaci' : 'Your Details';
    document.getElementById('checkoutStepDesc').textContent = currentLang === 'sr' ? 'Popunite sve informacije za rezervaciju.' : 'Fill in all details for your reservation.';
    updateProgress(1);
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
      showToast(currentLang === 'sr' ? 'Greška pri slanju poruke.' : 'Failed to send message.', false);
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
  renderBundles();
  renderCart();
  switchLanguage(currentLang);
  observeFadeElements();
  createHeroParticles();
  animateCounters();
  initParallax();

  // Wine type filters
  document.getElementById('wineFilters').addEventListener('click', function(e) {
    const btn = e.target.closest('.wf-btn');
    if (!btn) return;
    document.querySelectorAll('.wf-btn').forEach(b => b.classList.remove('wf-btn--active'));
    btn.classList.add('wf-btn--active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#winesGrid .wine-card').forEach(card => {
      if (filter === 'all') {
        card.classList.remove('wine-card--hidden');
      } else {
        const type = card.dataset.type;
        card.classList.toggle('wine-card--hidden', type !== filter);
      }
    });
  });
});

// Expose for inline handlers
window.updateQty = updateQty;
window.removeFromCart = removeFromCart;
