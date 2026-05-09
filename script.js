// ===== Wines Data =====
const WINES = [
  {
    id: 'zilavka-hercegovina',
    name: { sr: 'Hercegovačka Žilavka', en: 'Herzegovinian Žilavka' },
    subtitle: { sr: 'Bijelo vino • Autohtona sorta', en: 'White Wine • Indigenous Variety' },
    type: { sr: 'Bijelo', en: 'White' },
    desc: {
      sr: 'Rijetka autohtona sorta uzgojena na karstu Hercegovine. Zlatno-žuta boja, bogata mineralna struktura, note zrele jabuke, breskve i mediteranskog bilja. Vino koje ostavlja trag.',
      en: 'A rare indigenous variety grown on the Herzegovina karst. Golden-yellow, rich mineral structure, notes of ripe apple, peach and Mediterranean herbs. A wine that leaves a mark.'
    },
    price: 22,
    img: 'images/zilavka-hercegovina.jpg'
  },
  {
    id: 'zilavka-mostar',
    name: { sr: 'Žilavka Mostar', en: 'Žilavka Mostar' },
    subtitle: { sr: 'Bijelo vino • Vinarija Čitluk', en: 'White Wine • Vinarija Čitluk' },
    type: { sr: 'Bijelo', en: 'White' },
    desc: {
      sr: 'Elegantna Žilavka iz čuvene Vinarije Čitluk uz rijeku Neretvu. Svježa kiselina, voćna kompleksnost i dug, svilenkast završetak. Najprepoznatljivije bijelo vino BiH.',
      en: 'Elegant Žilavka from the renowned Vinarija Čitluk along the Neretva. Fresh acidity, fruity complexity and a long, silky finish. The most recognised white wine of BiH.'
    },
    price: 18,
    img: 'images/zilavka-mostar.jpg'
  },
  {
    id: 'blatina-citluk',
    name: { sr: 'Blatina Čitluk', en: 'Blatina Čitluk' },
    subtitle: { sr: 'Crveno vino • Vinarija Čitluk', en: 'Red Wine • Vinarija Čitluk' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Jedinstven autohtoni crveni kultivar, uzgojen isključivo u Hercegovini. Tamno rubinska boja, arome višnje, šljive i začina. Srednji tanini, mek i savršeno balansiran.',
      en: 'A uniquely indigenous red cultivar, grown exclusively in Herzegovina. Dark ruby, aromas of cherry, plum and spice. Medium tannins, soft and perfectly balanced.'
    },
    price: 20,
    img: 'images/blatina-citluk.jpg'
  },
  {
    id: 'tvrdos-2022',
    name: { sr: 'Tvrdoš 2022', en: 'Tvrdoš 2022' },
    subtitle: { sr: 'Crveno vino • Manastir Tvrdoš, Trebinje', en: 'Red Wine • Monastery Tvrdoš, Trebinje' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Vino iz manastirskih vinograda na stjenovitim padinama iznad Trebinja. Monaška tradicija utkana u svaki gutljaj — kompleksno, dostojanstveno, duboko, za momente koji ostaju u sjećanju.',
      en: 'Wine from monastery vineyards on rocky slopes above Trebinje. Monastic tradition woven into every sip — complex, dignified, deep, for moments that stay in memory.'
    },
    price: 28,
    img: 'images/tvrdos-2022.jpg'
  }
];

// ===== Bundles Data =====
const BUNDLES = [
  {
    id: 'bundle-duo',
    name: { sr: 'Duo Paket', en: 'Duo Bundle' },
    subtitle: { sr: '2 flase — bijelo i crveno', en: '2 bottles — white and red' },
    desc: {
      sr: 'Žilavka Mostar i Blatina Čitluk. Savršena kombinacija autohtone bijele i crvene sorte za posebnu večer.',
      en: 'Žilavka Mostar and Blatina Čitluk. The perfect pairing of indigenous white and red for a special evening.'
    },
    wines: ['zilavka-mostar', 'blatina-citluk'],
    count: 2,
    originalPrice: 38,
    price: 30,
    saving: 8
  },
  {
    id: 'bundle-trio',
    name: { sr: 'Trio Paket', en: 'Trio Bundle' },
    subtitle: { sr: '3 premium hercegovačka vina', en: '3 premium Herzegovinian wines' },
    desc: {
      sr: 'Hercegovačka Žilavka, Blatina Čitluk i Tvrdoš 2022 — kompletna degustacija Hercegovine u jednoj kutiji.',
      en: 'Herzegovinian Žilavka, Blatina Čitluk and Tvrdoš 2022 — the complete Herzegovina tasting experience in one box.'
    },
    wines: ['zilavka-hercegovina', 'blatina-citluk', 'tvrdos-2022'],
    count: 3,
    originalPrice: 70,
    price: 56,
    saving: 14,
    featured: true
  },
  {
    id: 'bundle-grande',
    name: { sr: 'Grande Kolekcija', en: 'Grande Collection' },
    subtitle: { sr: 'Sva 4 ekskluzivna vina Hercegovine', en: 'All 4 exclusive wines of Herzegovina' },
    desc: {
      sr: 'Kompletna kolekcija — Žilavka Hercegovina, Žilavka Mostar, Blatina Čitluk i Tvrdoš 2022. Savršen poklon za poznavaoce.',
      en: 'The complete collection — Žilavka Herzegovina, Žilavka Mostar, Blatina Čitluk and Tvrdoš 2022. The perfect gift for connoisseurs.'
    },
    wines: ['zilavka-hercegovina', 'zilavka-mostar', 'blatina-citluk', 'tvrdos-2022'],
    count: 4,
    originalPrice: 88,
    price: 68,
    saving: 20
  }
];

const RECIPIENT_EMAIL = 'pecav96@gmail.com';
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/pecav96@gmail.com';
let currentLang = 'sr';
let cart = JSON.parse(sessionStorage.getItem('hercegCart') || '[]');

// ===== Render Wines =====
let activeWineFilter = 'all';

function renderWines() {
  const grid = document.getElementById('winesGrid');
  const list = activeWineFilter === 'all'
    ? WINES
    : WINES.filter(w => w.type.sr === activeWineFilter);
  grid.innerHTML = list.map(wine => `
    <div class="wine-card fade-up">
      <div class="wine-img-wrap">
        <img src="${wine.img}" alt="${wine.name[currentLang]}" loading="lazy">
      </div>
      <div class="wine-card-body">
        <span class="wine-type-badge">${wine.type[currentLang]}</span>
        <h3>${wine.name[currentLang]}</h3>
        <div class="wine-srb">${wine.subtitle[currentLang]}</div>
        <p class="wine-desc">${wine.desc[currentLang]}</p>
        <div class="wine-footer">
          <span class="wine-price">${wine.price} EUR</span>
          <button class="wine-add" data-id="${wine.id}">${currentLang === 'sr' ? 'Dodaj u listu' : 'Add to list'}</button>
        </div>
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
        return w ? `<img src="${w.img}" alt="${w.name.sr}" style="height:44px;width:auto;object-fit:contain;">` : '';
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
        <img src="${wine.img}" alt="${wine.name[currentLang]}" style="width:52px;height:70px;object-fit:contain;background:#f5ede0;flex-shrink:0;">
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
    activeWineFilter = btn.dataset.filter;
    renderWines();
  });


});

// Expose for inline handlers
window.updateQty = updateQty;
window.removeFromCart = removeFromCart;

// ===== Hero Video — play once then show background image =====
(function() {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);

  var ytPlayer;
  window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('heroVideo', {
      events: {
        onReady: function(e) {
          e.target.setPlaybackRate(0.75);

          // Poll every 500ms — start fade 2.5s before video ends
          var faded = false;
          var poll = setInterval(function() {
            try {
              var duration = ytPlayer.getDuration();
              var current  = ytPlayer.getCurrentTime();
              if (duration > 0 && current >= duration - 2.5 && !faded) {
                faded = true;
                clearInterval(poll);
                // Fade in background image while video still playing
                var bg = document.getElementById('heroBgFallback');
                if (bg) bg.classList.add('visible');
              }
            } catch(err) {}
          }, 500);
        },
        onStateChange: function(e) {
          if (e.data === YT.PlayerState.ENDED) {
            // Image already fading in — now hide video instantly
            var wrap = document.getElementById('heroVideoWrap');
            if (wrap) {
              wrap.style.transition = 'opacity 0.3s ease';
              wrap.style.opacity = '0';
            }
            var bg = document.getElementById('heroBgFallback');
            if (bg) bg.classList.add('visible');
          }
        }
      }
    });
  };
})();
