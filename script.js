// ===== Wines Data =====
const WINES = [
  {
    id: 'tvrdos-vranac',
    quickTag: 'preporuka',
    tag: { sr: 'Duboko i staloženo', en: 'Deep and composed' },
    tag2: { sr: 'Manastirsko nasleđe', en: 'Monastery heritage' },
    name: { sr: 'Tvrdoš Vranac', en: 'Tvrdoš Vranac' },
    volume: '0.75L',
    subtitle: { sr: 'Crveno vino • Manastir Tvrdoš, Trebinje', en: 'Red Wine • Manastir Tvrdoš, Trebinje' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Vino iz manastirskih vinograda na stenovitim padinama iznad Trebinja. Monaška tradicija utkana u svaki gutljaj, kompleksno, dostojanstveno, duboko, za momente koji ostaju u sećanju.',
      en: 'Wine from monastery vineyards on rocky slopes above Trebinje. Monastic tradition woven into every sip, complex, dignified, deep, for moments that stay in memory.'
    },
    price: 1990,
    img: 'images/tvrdos-2022.webp'
  },
  {
    id: 'tvrdos-zilavka',
    quickTag: 'preporuka',
    tag: { sr: 'Sveže i mineralno', en: 'Fresh and mineral' },
    tag2: { sr: 'Uz ribu i plodove mora', en: 'Pairs with fish & seafood' },
    name: { sr: 'Tvrdoš Žilavka', en: 'Tvrdoš Žilavka' },
    volume: '0.75L',
    subtitle: { sr: 'Belo vino • Manastir Tvrdoš, Trebinje', en: 'White Wine • Manastir Tvrdoš, Trebinje' },
    type: { sr: 'Belo', en: 'White' },
    desc: {
      sr: 'Žilavka iz manastirskih vinograda, sa notama zrele kruške i badema. Sveža kiselina i dug, mineralan završetak, vino koje otkriva novi sloj ukusa sa svakim gutljajem.',
      en: 'Žilavka from the monastery vineyards, with notes of ripe pear and almond. Fresh acidity and a long mineral finish, a wine that reveals a new layer with every sip.'
    },
    price: 2390,
    img: 'images/tvrdos-2022.webp'
  },
  {
    id: 'tamjanika-galerija',
    quickTag: 'drugacije',
    tag: { sr: 'Aromatično', en: 'Aromatic' },
    tag2: { sr: 'Sjajan aperitiv', en: 'Great as an aperitif' },
    name: { sr: 'Tamjanika Galerija', en: 'Tamjanika Galerija' },
    volume: '0.75L',
    subtitle: { sr: 'Belo vino • [vinarija]', en: 'White Wine • [vinarija]' },
    type: { sr: 'Belo', en: 'White' },
    desc: {
      sr: 'Izrazito mirisno belo vino sa aromama cvetne livade, grožđa i blagog meda. Pitko i osvežavajuće, savršeno za one koji vole da vino prvo osete nosom, pa tek onda ukusom.',
      en: 'A strikingly fragrant white with aromas of flowering meadow, grapes and a hint of honey. Easy to drink and refreshing, perfect for anyone who likes to taste a wine with their nose first.'
    },
    price: 1890,
    img: 'images/tvrdos-2022.webp'
  },
  {
    id: 'tvrdos-metoh-vranac',
    quickTag: 'preporuka',
    tag: { sr: 'Opušteno i pitko', en: 'Relaxed and easy' },
    tag2: { sr: 'Vino za svaki dan', en: 'An everyday wine' },
    name: { sr: 'Tvrdoš Metoh Vranac', en: 'Tvrdoš Metoh Vranac' },
    volume: '0.75L',
    subtitle: { sr: 'Crveno vino • Manastir Tvrdoš, Trebinje', en: 'Red Wine • Manastir Tvrdoš, Trebinje' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Mlađi, opušteniji Vranac iz istog manastirskog podruma. Ukus zrele šljive i višnje, meki tanini bez težine, vino za svaki dan kad poželite nešto ozbiljno, ali ne zahtevno.',
      en: 'A younger, more relaxed Vranac from the same monastery cellar. Ripe plum and cherry, soft tannins without the weight, a wine for when you want something serious but not demanding.'
    },
    price: 1590,
    img: 'images/tvrdos-2022.webp'
  },
  {
    id: 'primavera-roze',
    quickTag: 'drugacije',
    tag: { sr: 'Osvežavajuće leto', en: 'Refreshing summer' },
    tag2: { sr: 'Za letnje druženje', en: 'For summer gatherings' },
    name: { sr: 'Primavera cuvee roze', en: 'Primavera cuvee roze' },
    volume: '0.75L',
    subtitle: { sr: 'Rosé vino • [vinarija]', en: 'Rosé Wine • [vinarija]' },
    type: { sr: 'Rosé', en: 'Rosé' },
    desc: {
      sr: 'Svetlo rozé vino boje latica ruže, sa mirisom jagode i divlje kupine. Lagano, sveže i lako se pije, ide uz sve, od letnjeg druženja do prve večere na terasi.',
      en: 'A pale rosé the colour of rose petals, with aromas of strawberry and wild blackberry. Light, fresh and effortless to drink, pairs with everything from a summer gathering to the first dinner on the terrace.'
    },
    price: 1890,
    img: 'images/tvrdos-2022.webp'
  },
  {
    id: 'tvrdos-izba-merlot',
    quickTag: 'preporuka',
    tag: { sr: 'Mekše crveno', en: 'Softer red' },
    tag2: { sr: 'Odličan izbor za početnike', en: 'A great pick for beginners' },
    name: { sr: 'Tvrdoš Izba Merlot', en: 'Tvrdoš Izba Merlot' },
    volume: '0.75L',
    subtitle: { sr: 'Crveno vino • Manastir Tvrdoš, Trebinje', en: 'Red Wine • Manastir Tvrdoš, Trebinje' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Merlot u svom najpitomijem izdanju, baršunast, okrugao, bez oštrih ivica. Ukus zrele šljive i tamne čokolade, savršen izbor za nekoga ko tek otkriva crvena vina.',
      en: 'Merlot at its most approachable, velvety, round, no rough edges. Ripe plum and dark chocolate, a perfect choice for someone just discovering red wine.'
    },
    price: 1590,
    img: 'images/tvrdos-2022.webp'
  },
  {
    id: 'zlatna-selekcija-bijelo',
    quickTag: 'premium',
    tag: { sr: 'Bogato i slojevito', en: 'Rich and layered' },
    tag2: { sr: 'Za posebne prilike', en: 'For special occasions' },
    name: { sr: 'Zlatna Selekcija Bijelo', en: 'Zlatna Selekcija Bijelo' },
    volume: '0.75L',
    subtitle: { sr: 'Belo vino • [vinarija]', en: 'White Wine • [vinarija]' },
    type: { sr: 'Belo', en: 'White' },
    desc: {
      sr: 'Vrhunsko belo vino iz posebne selekcije, negovano sa više pažnje i vremena. Bogat, slojevit ukus zrelog voća i suptilne vanile, za trenutke kada želite da počastite sebe ili nekog drugog.',
      en: 'A premium white from a special selection, given extra care and time. A rich, layered taste of ripe fruit and subtle vanilla, for moments when you want to treat yourself or someone else.'
    },
    price: 4490,
    img: 'images/tvrdos-2022.webp'
  },
  {
    id: 'vranac-reserve',
    quickTag: 'premium',
    tag: { sr: 'Baršunasto i začinjeno', en: 'Velvety and spiced' },
    tag2: { sr: 'Za slavlja i poklone', en: 'For celebrations & gifts' },
    name: { sr: 'Vranac Reserve', en: 'Vranac Reserve' },
    volume: '0.75L',
    subtitle: { sr: 'Crveno vino • [vinarija]', en: 'Red Wine • [vinarija]' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Vranac u svom najboljem izdanju, odležao duže od ostalih da uhvati punu dubinu ukusa. Tamni bobičasti plodovi, začini i baršunasta struktura, vino za slavlje i posebne trenutke.',
      en: 'Vranac at its finest, aged longer than the rest to reach full depth. Dark berry fruit, spice and a velvety structure, a wine for celebration and special moments.'
    },
    price: 4490,
    img: 'images/tvrdos-2022.webp'
  },
  {
    id: 'blatina-citluk-075',
    quickTag: 'svakodnevno',
    tag: { sr: 'Snažno i domaće', en: 'Bold and homegrown' },
    tag2: { sr: 'Uz roštilj i pečenje', en: 'Pairs with grilled & roasted meat' },
    name: { sr: 'Blatina Čitluk', en: 'Blatina Čitluk' },
    volume: '0.75L',
    subtitle: { sr: 'Crveno vino • Vinarija Čitluk', en: 'Red Wine • Vinarija Čitluk' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Jedinstven autohtoni crveni kultivar, uzgojen isključivo u Hercegovini. Tamno rubinska boja, arome višnje, šljive i začina. Srednji tanini, meki i savršeno balansirani.',
      en: 'A unique indigenous red cultivar, grown exclusively in Herzegovina. Dark ruby, aromas of cherry, plum and spice. Medium tannins, soft and perfectly balanced.'
    },
    price: 1390,
    img: 'images/blatina-citluk.webp'
  },
  {
    id: 'zilavka-citluk-075',
    quickTag: 'svakodnevno',
    tag: { sr: 'Laka klasika', en: 'Easy classic' },
    tag2: { sr: 'Svakodnevni izbor', en: 'An everyday favourite' },
    name: { sr: 'Žilavka Čitluk', en: 'Žilavka Čitluk' },
    volume: '0.75L',
    subtitle: { sr: 'Belo vino • Vinarija Čitluk', en: 'White Wine • Vinarija Čitluk' },
    type: { sr: 'Belo', en: 'White' },
    desc: {
      sr: 'Elegantna Žilavka iz čuvene Vinarije Čitluk uz reku Neretvu. Sveža kiselina, voćna kompleksnost i dug, svilenkast završetak. Najprepoznatljivije belo vino BiH.',
      en: 'Elegant Žilavka from the renowned Vinarija Čitluk along the Neretva. Fresh acidity, fruity complexity and a long, silky finish. The most recognised white wine of BiH.'
    },
    price: 1190,
    img: 'images/zilavka-mostar.webp'
  },
  {
    id: 'blatina-citluk-1l',
    quickTag: 'svakodnevno',
    tag: { sr: 'Snažno i domaće', en: 'Bold and homegrown' },
    tag2: { sr: 'Uz roštilj i pečenje', en: 'Pairs with grilled & roasted meat' },
    name: { sr: 'Blatina Čitluk', en: 'Blatina Čitluk' },
    volume: '1L',
    subtitle: { sr: 'Crveno vino • Vinarija Čitluk', en: 'Red Wine • Vinarija Čitluk' },
    type: { sr: 'Crveno', en: 'Red' },
    desc: {
      sr: 'Ista omiljena Blatina iz Vinarije Čitluk, sada u većem, praktičnom pakovanju od 1 litre. Idealna kada je društvo veće ili kada jednostavno ne želite da vam ponestane.',
      en: 'The same beloved Blatina from Vinarija Čitluk, now in a bigger, more practical 1-litre bottle. Ideal for a larger crowd, or simply so it does not run out mid-evening.'
    },
    price: 690,
    img: 'images/blatina-citluk.webp'
  },
  {
    id: 'zilavka-citluk-1l',
    quickTag: 'svakodnevno',
    tag: { sr: 'Laka klasika', en: 'Easy classic' },
    tag2: { sr: 'Svakodnevni izbor', en: 'An everyday favourite' },
    name: { sr: 'Žilavka Čitluk', en: 'Žilavka Čitluk' },
    volume: '1L',
    subtitle: { sr: 'Belo vino • Vinarija Čitluk', en: 'White Wine • Vinarija Čitluk' },
    type: { sr: 'Belo', en: 'White' },
    desc: {
      sr: 'Retka autohtona sorta uzgojena na karstu Hercegovine. Zlatno-žuta boja, bogata mineralna struktura, note zrele jabuke, breskve i mediteranskog bilja.',
      en: 'A rare indigenous variety grown on the Herzegovina karst. Golden-yellow, rich mineral structure, notes of ripe apple, peach and Mediterranean herbs.'
    },
    price: 690,
    img: 'images/zilavka-hercegovina.webp'
  },
  {
    id: 'tribunija-bijelo',
    quickTag: 'preporuka',
    tag: { sr: 'Elegantno i lako', en: 'Elegant and easy' },
    tag2: { sr: 'Laka večernja čaša', en: 'An easy evening glass' },
    name: { sr: 'Tribunija bijelo', en: 'Tribunija bijelo' },
    volume: '0.75L',
    subtitle: { sr: 'Belo vino • Podrumi Vukoje, Trebinje', en: 'White Wine • Podrumi Vukoje, Trebinje' },
    type: { sr: 'Belo', en: 'White' },
    desc: {
      sr: 'Belo vino iz podruma Vukoje u Trebinju, sa mirisom svežeg voća i blagom notom cvetova. Elegantno i lako pitko, ostavlja utisak bez da ikog optereti.',
      en: 'A white wine from the Vukoje cellars in Trebinje, with aromas of fresh fruit and a gentle floral note. Elegant and easy to drink, memorable without being demanding.'
    },
    price: 1890,
    img: 'images/tvrdos-2022.webp'
  }
];

// ===== Bundles Data =====
const BUNDLES = [
  {
    id: 'bundle-starter',
    name: { sr: 'Starter', en: 'Starter' },
    subtitle: { sr: 'Žilavka + Blatina • Vinarija Čitluk', en: 'Žilavka + Blatina • Vinarija Čitluk' },
    desc: {
      sr: 'Jedno belo i jedno crveno, savršen uvod u autohtone sorte Hercegovine.',
      en: 'One white and one red, the perfect introduction to indigenous Herzegovina varieties.'
    },
    wines: ['zilavka-citluk-075', 'blatina-citluk-075'],
    price: 2390,
    img: 'images/IMG_9965.webp'
  },
  {
    id: 'bundle-herceg-box',
    name: { sr: 'Hercz Box', en: 'Hercz Box' },
    subtitle: { sr: 'Blatina + Žilavka + Tvrdoš Vranac', en: 'Blatina + Žilavka + Tvrdoš Vranac' },
    desc: {
      sr: 'Tri vina, tri karaktera: belo, crveno i premium cuvée u jednoj kutiji.',
      en: 'Three wines, three characters: white, red and a premium cuvée in one box.'
    },
    wines: ['blatina-citluk-075', 'zilavka-citluk-075', 'tvrdos-vranac'],
    price: 4190,
    featured: true,
    img: 'images/IMG_9968.webp'
  },
  {
    id: 'bundle-full-herceg',
    name: { sr: 'Full Hercz', en: 'Full Hercz' },
    subtitle: { sr: 'Izbor od 5 vina iz naše ponude', en: 'A selection of 5 wines from our range' },
    desc: {
      sr: 'Žilavka u dve zapremine, Blatina, Tvrdoš Vranac i Tvrdoš Žilavka. Savršen poklon za poznavaoce.',
      en: 'Žilavka in two sizes, Blatina, Tvrdoš Vranac and Tvrdoš Žilavka. The perfect gift for connoisseurs.'
    },
    wines: ['zilavka-citluk-075', 'zilavka-citluk-1l', 'blatina-citluk-075', 'tvrdos-vranac', 'tvrdos-zilavka'],
    price: 6890,
    img: 'images/IMG_9969.webp'
  }
];

// A bundle stores only its discounted price and which wines it contains. The
// full price, the saving and the bottle count are derived from WINES on every
// load, so changing a wine's price can never leave a bundle advertising a
// saving that no longer adds up.
(function deriveBundleTotals() {
  const priceOf = id => {
    const wine = WINES.find(w => w.id === id);
    if (!wine) throw new Error('Paket se poziva na nepoznato vino: ' + id);
    return wine.price;
  };
  BUNDLES.forEach(bundle => {
    bundle.count = bundle.wines.length;
    bundle.originalPrice = bundle.wines.reduce((sum, id) => sum + priceOf(id), 0);
    bundle.saving = bundle.originalPrice - bundle.price;
    if (bundle.saving < 0) {
      console.warn(
        `Paket "${bundle.name.sr}" je skuplji od zbira pojedinačnih cena ` +
        `(${bundle.price} > ${bundle.originalPrice}).`);
    }
  });
})();

const RECIPIENT_EMAIL = 'herczwines@gmail.com';
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/herczwines@gmail.com';
let currentLang = 'sr';

// Four corners pushing outward: the panel it opens is the card at full size.
const MORE_ICON =
  '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
  + 'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'
  + '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>'
  + '<line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>'
  + '</svg>';

// The same four glyphs as the "Brzi izbor" filter row, so a card's tag reads
// as that same category rather than a fifth icon language of its own.
const QUICK_TAG_ICONS = {
  svakodnevno: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  preporuka: '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  drugacije: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h7a7 7 0 0 1 7 7 7 7 0 0 1-7 7z"/><path d="M4 13c8 0 10-6 16-6"/></svg>',
  premium: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16"/><path d="M5 20l-1.5-9L8 15l4-8 4 8 4.5-4L19 20"/></svg>'
};

function tagChip(wine, lang) {
  if (!wine.tag || !wine.quickTag) return '';
  const icon = QUICK_TAG_ICONS[wine.quickTag] || '';
  return '<span class="wine-tag" data-quick="' + wine.quickTag + '">'
    + '<span class="wf-icon">' + icon + '</span>' + wine.tag[lang] + '</span>';
}

// A second, plainer line under the taste tag: who to serve it to, what to
// serve it with, or its story — one neutral icon rather than the four
// category colours above, since this isn't tied to a filter bucket.
const PAIRING_ICON =
  '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
  + '<path d="M8 2v7a2 2 0 002 2h0a2 2 0 002-2V2M10 11v11M16 2c-2 2-2 5-2 7 0 1 1 2 2 2s2-1 2-2c0-2 0-5-2-7z"/>'
  + '</svg>';

function tag2Chip(wine, lang) {
  if (!wine.tag2) return '';
  return '<span class="wine-tag wine-tag--secondary">'
    + '<span class="wf-icon">' + PAIRING_ICON + '</span>' + wine.tag2[lang] + '</span>';
}

// The same basket drawn in the header, so the two read as one action.
const CART_ICON =
  '<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
  + 'stroke-width="1.8" aria-hidden="true" focusable="false">'
  + '<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>'
  + '<line x1="3" y1="6" x2="21" y2="6"/>'
  + '<path d="M16 10a4 4 0 01-8 0"/>'
  + '</svg>';

// A cart still sitting there the next day reads as a glitch, not a courtesy.
// Six hours covers "let me think it over and come back tonight"; older than
// that gets dropped. The clock restarts on every change, so a long browsing
// session never expires while someone is still shopping.
const CART_TTL_MS = 6 * 60 * 60 * 1000;

function clearStoredCart() {
  try {
    localStorage.removeItem('hercegCart');
    sessionStorage.removeItem('hercegCart');
  } catch (err) {
    // Storage unavailable — there is nothing to clear.
  }
}

// Corrupt or unavailable storage must never take the whole page down.
function loadCart() {
  try {
    const raw = localStorage.getItem('hercegCart') || sessionStorage.getItem('hercegCart');
    const parsed = JSON.parse(raw || 'null');
    // Carts written before the expiry existed are bare arrays with no
    // timestamp — those are exactly the stale ones this is meant to clear.
    const fresh = parsed
      && Array.isArray(parsed.items)
      && typeof parsed.savedAt === 'number'
      && Date.now() - parsed.savedAt <= CART_TTL_MS;
    if (!fresh) {
      clearStoredCart();
      return [];
    }
    // A saved cart outlives the catalogue now that it sits in localStorage, so
    // drop anything that no longer exists rather than rendering a broken row.
    const known = id => WINES.some(w => w.id === id) || BUNDLES.some(b => b.id === id);
    return parsed.items.filter(i => i && typeof i.id === 'string' && i.qty > 0 && known(i.id));
  } catch (err) {
    return [];
  }
}
let cart = loadCart();

// ===== Render Wines =====
let activeWineFilter = 'all';
// Independent of the type filter — a shopper can combine "Nešto drugačije"
// with "Belo" and land on exactly the one wine that is both, same as the
// two rows read as separate questions in the design.
// Matches the pill already marked wf-btn--active in the markup — the two
// have to agree, or the button shows selected while the grid renders
// everything, or the wines section opens twice as tall as it needs to.
let activeQuickFilter = 'preporuka';

// Serbian only turns singular at exactly n1, n21, n31... (never n11) — every
// other count, including 2 through 4, still takes the same plural "vina" a
// count of 13 does, so this only has one real branch to get right.
function wineCountLabel(n, lang) {
  if (lang !== 'sr') return n + ' ' + (n === 1 ? 'wine' : 'wines');
  const singular = n % 10 === 1 && n % 100 !== 11;
  return n + ' ' + (singular ? 'vino' : 'vina');
}

function renderWines() {
  const grid = document.getElementById('winesGrid');
  const list = WINES.filter(w =>
    (activeWineFilter === 'all' || w.type.sr === activeWineFilter) &&
    (activeQuickFilter === 'all' || w.quickTag === activeQuickFilter)
  );
  const countEl = document.getElementById('wineCount');
  if (countEl) countEl.textContent = wineCountLabel(list.length, currentLang);
  const addLabel = currentLang === 'sr' ? 'Dodaj u listu' : 'Add to list';
  const moreLabel = currentLang === 'sr' ? 'Prikaži detalje' : 'Show details';
  grid.innerHTML = list.map(wine => `
    <div class="wine-card fade-up">
      <div class="wine-img-wrap">
        <span class="wine-type-badge">${wine.type[currentLang]}</span>
        <img src="${wine.img}" alt="${wine.name[currentLang]}" loading="lazy">
      </div>
      <button type="button" class="wine-more" data-detail-id="${wine.id}" aria-label="${wine.name[currentLang]}: ${moreLabel}" title="${moreLabel}">${MORE_ICON}</button>
      <div class="wine-card-body">
        <h3>${wine.name[currentLang]}</h3>
        <div class="wine-srb">${wine.subtitle[currentLang]}</div>
        <p class="wine-desc">${wine.desc[currentLang]}</p>
        <div class="wine-tags">${tagChip(wine, currentLang)}${tag2Chip(wine, currentLang)}</div>
        <div class="wine-footer">
          <div class="wine-price-row"><span class="wine-price">${wine.price} RSD</span><span class="wine-volume">${wine.volume}</span></div>
          <button type="button" class="wine-add" data-id="${wine.id}" aria-label="${addLabel}" title="${addLabel}">${CART_ICON}</button>
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
  grid.innerHTML = BUNDLES.map(function(bundle) {
    // With no real saving left, the tag and the struck-through price would be
    // claiming a discount that is not there — drop both instead.
    const hasSaving = bundle.saving > 0;
    const savingTag = hasSaving
      ? '<div class="bundle-saving-tag">'
        + (isSr ? 'Uštedite ' + bundle.saving + ' RSD' : 'Save ' + bundle.saving + ' RSD')
        + '</div>'
      : '';
    const originalPrice = hasSaving
      ? '<span class="bundle-original">' + bundle.originalPrice + ' RSD</span>'
      : '';
    const featured = bundle.featured ? ' bundle-card--featured' : '';
    const topBadge = bundle.featured
      ? '<div class="bundle-top-badge">' + (isSr ? 'Najpopularnije' : 'Most popular') + '</div>'
      : '';
    const countLabel = bundle.count + (isSr ? (bundle.count >= 5 ? ' flaša' : ' flaše') : ' btl.');
    const btnLabel = isSr ? 'Dodaj paket u listu' : 'Add bundle to list';
    const moreLabel = isSr ? 'Prikaži detalje' : 'Show details';
    return [
      '<div class="wine-card ' + bundle.id + featured + ' fade-up">',
        '<div class="wine-img-wrap">',
          '<span class="wine-type-badge">' + countLabel + '</span>',
          '<img src="' + bundle.img + '" alt="' + bundle.name[currentLang] + '" loading="lazy">',
        '</div>',
        '<button type="button" class="wine-more" data-detail-id="' + bundle.id + '"'
          + ' aria-label="' + bundle.name[currentLang] + ': ' + moreLabel + '"'
          + ' title="' + moreLabel + '">' + MORE_ICON + '</button>',
        topBadge,
        savingTag,
        '<div class="wine-card-body">',
          '<h3>' + bundle.name[currentLang] + '</h3>',
          '<div class="wine-srb">' + bundle.subtitle[currentLang] + '</div>',
          '<p class="wine-desc">' + bundle.desc[currentLang] + '</p>',
          '<div class="wine-footer">',
            '<div class="bundle-pricing">',
              originalPrice,
              '<span class="wine-price">' + bundle.price + ' RSD</span>',
            '</div>',
            '<button type="button" class="wine-add bundle-add" data-bundle-id="' + bundle.id + '"'
              + ' aria-label="' + btnLabel + '" title="' + btnLabel + '">' + CART_ICON + '</button>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');
  }).join('');
  grid.querySelectorAll('.bundle-add').forEach(function(btn) {
    btn.addEventListener('click', function() { addBundleToCart(btn.dataset.bundleId); });
  });
  observeFadeElements();
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

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function saveCart() {
  try {
    localStorage.setItem('hercegCart', JSON.stringify({ items: cart, savedAt: Date.now() }));
  } catch (err) {
    // Private mode / quota exceeded — the cart still works for this session.
  }
  updateCartCount();
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
  updateCartCount();
  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">${currentLang === 'sr' ? 'Lista je prazna' : 'Your list is empty'}</p>`;
    footerEl.style.display = 'none';
    return;
  }
  // Wines and bundles share one row: a bundle has its own photo, so stacking
  // its member bottles here only overflowed the thumbnail box and pushed the
  // quantity buttons on top of the images.
  itemsEl.innerHTML = cart.map(item => {
    const source = item.isBundle
      ? BUNDLES.find(b => b.id === item.id)
      : WINES.find(w => w.id === item.id);
    if (!source) return '';
    const price = getItemPrice(item);
    const label = item.isBundle
      ? `<span class="cart-bundle-label">${currentLang === 'sr' ? 'Paket' : 'Bundle'}</span>`
      : `<span class="cart-volume">${source.volume}</span>`;
    const note = item.isBundle
      ? `<div class="cart-item-note">${source.count} ${currentLang === 'sr'
          ? (source.count >= 5 ? 'flaša' : 'flaše')
          : 'bottles'}</div>`
      : '';
    return `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${source.img}" alt="${source.name[currentLang]}"></div>
        <div class="cart-item-info">
          <h4>${source.name[currentLang]} ${label}</h4>
          ${note}
          <div class="cart-item-price">${price * item.qty} RSD</div>
          <div class="cart-item-controls">
            <button type="button" class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
            <button type="button" class="remove-btn" onclick="removeFromCart('${item.id}')">${currentLang === 'sr' ? 'Ukloni' : 'Remove'}</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('cartTotal').textContent = getCartTotal() + ' RSD';
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
      const wine = !item.isBundle ? WINES.find(w => w.id === item.id) : null;
      const label = item.isBundle
        ? `${BUNDLES.find(b => b.id === item.id).name[currentLang]} (${currentLang === 'sr' ? 'paket' : 'bundle'})`
        : `${wine.name[currentLang]} ${wine.volume}`;
      return `<div class="checkout-summary-item"><span>${label} × ${item.qty}</span><span>${price * item.qty} RSD</span></div>`;
    }).join('')}
    <div class="checkout-summary-total"><span>${currentLang === 'sr' ? 'Ukupno' : 'Total'}</span><span>${getCartTotal()} RSD</span></div>
  `;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

function renderConfirmLines(elId, lines) {
  const el = document.getElementById(elId);
  el.textContent = '';
  const p = document.createElement('p');
  lines.forEach((line, i) => {
    if (i) p.appendChild(document.createElement('br'));
    p.appendChild(document.createTextNode(line));
  });
  el.appendChild(p);
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
  if (!EMAIL_RE.test(email)) {
    showToast(currentLang === 'sr' ? 'Unesite ispravnu email adresu' : 'Please enter a valid email address', false);
    document.getElementById('oEmail').focus();
    return;
  }
  if (phone.replace(/\D/g, '').length < 8) {
    showToast(currentLang === 'sr' ? 'Unesite ispravan broj telefona' : 'Please enter a valid phone number', false);
    document.getElementById('oPhone').focus();
    return;
  }
  renderConfirmLines('confirmContact', [name, email, phone]);
  renderConfirmLines('confirmDelivery', [city, address]);
  populateSummary();
  document.getElementById('checkoutStep1').style.display = 'none';
  document.getElementById('checkoutStep2').style.display = 'block';
  document.getElementById('checkoutStepTitle').textContent = currentLang === 'sr' ? 'Pregled rezervacije' : 'Reservation review';
  document.getElementById('checkoutStepDesc').textContent = currentLang === 'sr' ? 'Proverite detalje i potvrdite.' : 'Review the details and confirm.';
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

// A panel that is visually hidden must also leave the tab order, or keyboard
// and screen-reader users keep landing inside it.
function setPanelOpen(id, open) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('active', open);
  if (open) el.removeAttribute('inert');
  else el.setAttribute('inert', '');
}

// ===== Wine Detail =====
// The card clamps its description and hides the volume behind a small pill.
// This shows the whole thing without leaving the catalogue, so a shopper never
// loses their scroll position to a product page.
let _detailItemId = null;

function openDetail(id) {
  const wine = WINES.find(w => w.id === id);
  const bundle = wine ? null : BUNDLES.find(b => b.id === id);
  const item = wine || bundle;
  if (!item) return;
  _detailItemId = id;

  const isSr = currentLang === 'sr';
  const badge = wine
    ? wine.type[currentLang]
    : item.count + (isSr ? (item.count >= 5 ? ' flaša' : ' flaše') : ' btl.');

  document.getElementById('detailBadge').textContent = badge;
  const img = document.getElementById('detailImg');
  img.src = item.img;
  img.alt = item.name[currentLang];
  document.getElementById('detailName').textContent = item.name[currentLang];
  document.getElementById('detailSub').textContent = item.subtitle[currentLang];
  document.getElementById('detailDesc').textContent = item.desc[currentLang];
  document.getElementById('detailPrice').textContent = item.price + ' RSD';
  // Only wines carry a quickTag; bundles show no chip here.
  document.getElementById('detailTag').innerHTML = wine ? tagChip(wine, currentLang) + tag2Chip(wine, currentLang) : '';

  const vol = document.getElementById('detailVol');
  vol.textContent = wine ? wine.volume : '';
  vol.style.display = wine ? '' : 'none';

  // The button shows only the cart, so the words live in its accessible name —
  // setting textContent here would replace the icon with them.
  document.getElementById('detailAdd').setAttribute('aria-label', wine
    ? (isSr ? 'Dodaj u listu' : 'Add to list')
    : (isSr ? 'Dodaj paket u listu' : 'Add bundle to list'));

  setPanelOpen('wineDetail', true);
  document.getElementById('detailClose').focus();
}

function closeDetail() {
  setPanelOpen('wineDetail', false);
  // Send focus back to the card that opened it, so keyboard users are not
  // dumped at the top of the document.
  if (_detailItemId) {
    const card = document.querySelector('[data-detail-id="' + _detailItemId + '"]');
    if (card) card.focus();
  }
  _detailItemId = null;
}

function initDetail() {
  document.getElementById('detailClose').addEventListener('click', closeDetail);
  document.getElementById('wineDetail').addEventListener('click', e => {
    if (e.target.id === 'wineDetail') closeDetail();
  });
  document.getElementById('detailAdd').addEventListener('click', () => {
    const id = _detailItemId;
    if (!id) return;
    if (WINES.some(w => w.id === id)) addToCart(id);
    else addBundleToCart(id);
    closeDetail();
  });

  // Delegated, because both grids re-render whenever the filter or language
  // changes and per-button listeners would be lost with them. A real button
  // needs no key handling of its own — Enter and Space already fire a click.
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-detail-id]');
    if (btn) openDetail(btn.dataset.detailId);
  });
}

function setCartOpen(open) {
  setPanelOpen('cartOverlay', open);
  setPanelOpen('cartSidebar', open);
  if (open) document.getElementById('cartClose').focus();
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
  setCartOpen(false);
  setPanelOpen('checkoutOverlay', true);
  document.getElementById('checkoutClose').focus();
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
      label = wine ? wine.name.sr + ' ' + wine.volume : item.id;
    }
    orderLines += label + ' × ' + item.qty + ' = ' + (price * item.qty) + ' RSD\n';
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
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: `Hercz Wines | Nova rezervacija | ${name} | ${getCartTotal()} RSD`,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
        _autoresponse: `Poštovani ${name},\n\nhvala Vam što ste odabrali Hercz Wines.\n\nVaša rezervacija je uspešno primljena. Kontaktiraćemo Vas u roku od 2-3 radna dana.\n\n★ HERCZ10 ★\n10% popusta na narednu porudžbinu.\n\nHercz Wines tim`,
        datum_i_vreme: timestamp,
        name, email, phone, city, address,
        total: `${getCartTotal()} RSD`,
        order: orderLines
      })
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (data.success !== 'true' && data.success !== true) throw new Error('FormSubmit error');
  } catch (err) {
    // Never claim success we cannot verify — the cart stays intact so the
    // customer can retry instead of losing the order silently.
    console.error('Order submission failed:', err);
    showToast(currentLang === 'sr'
      ? 'Slanje nije uspelo. Pokušajte ponovo ili nas kontaktirajte telefonom.'
      : 'Sending failed. Please try again or contact us by phone.', false);
    if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalBtnText; }
    return;
  }

  document.getElementById('checkoutFormWrap').style.display = 'none';
  document.getElementById('checkoutSuccess').style.display = 'block';
  updateProgress(2);
  cart = [];
  saveCart();
  renderCart();
  document.getElementById('checkoutForm').reset();
  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalBtnText; }
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
  const groups = ['.wine-card', '.visit-card', '.vf-item', '.about-stat'];
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
  const ageGate = document.getElementById('ageGate');
  if (!sessionStorage.getItem('ageVerified')) document.body.style.overflow = 'hidden';
  document.getElementById('ageYes').addEventListener('click', () => {
    sessionStorage.setItem('ageVerified', '1');
    ageGate.classList.add('age-gate--hidden');
    ageGate.setAttribute('inert', '');
    document.body.style.overflow = '';
    // Focus would otherwise stay on the now-hidden gate button, stranding
    // keyboard users mid-page; hand it back to the top of the content.
    document.getElementById('main').focus();
  });
  document.getElementById('ageNo').addEventListener('click', () => {
    document.getElementById('ageBtns').style.display = 'none';
    document.getElementById('ageDenied').style.display = 'block';
  });

  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    scrollProgress.style.width = Math.min(pct * 100, 100) + '%';
  }, { passive: true });

  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
  });
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('active'));
  });

  document.getElementById('langToggle').addEventListener('click', () => {
    switchLanguage(currentLang === 'sr' ? 'en' : 'sr');
  });

  document.getElementById('cartBtn').addEventListener('click', () => {
    setCartOpen(true);
  });
  document.getElementById('cartClose').addEventListener('click', () => {
    setCartOpen(false);
  });
  document.getElementById('cartOverlay').addEventListener('click', () => {
    setCartOpen(false);
  });

  document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
  document.getElementById('checkoutNext').addEventListener('click', goToStep2);
  document.getElementById('checkoutBack').addEventListener('click', goToStep1);
  function closeCheckout() {
    setPanelOpen('checkoutOverlay', false);
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

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.getElementById('wineDetail').classList.contains('active')) {
      closeDetail();
    } else if (document.getElementById('checkoutOverlay').classList.contains('active')) {
      closeCheckout();
    } else if (document.getElementById('cartSidebar').classList.contains('active')) {
      setCartOpen(false);
    }
  });

  document.getElementById('contactForm').addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('cName').value;
    const email = document.getElementById('cEmail').value;
    const subject = document.getElementById('cSubject').value || 'Poruka sa sajta';
    const message = document.getElementById('cMessage').value;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = currentLang === 'sr' ? 'Slanje...' : 'Sending...'; }
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _subject: `Kontakt: ${subject}`, _template: 'table', _captcha: 'false', name, email, subject, message })
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
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalBtnText; }
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Smooth scrolling alone leaves the keyboard focus behind, so the next
      // Tab would resume from the link instead of the section jumped to.
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  currentLang = 'sr';
  renderWines();
  renderBundles();
  renderCart();
  initDetail();
  switchLanguage(currentLang);
  observeFadeElements();
  createHeroParticles();
  animateCounters();
  initParallax();

  // The rail keeps whatever horizontal position a previous filter left it
  // at, which can show nothing at all once a new filter narrows the list —
  // scrolled to card 9 of 13, then filtered down to 3. Every filter change
  // resets the rail to its first card.
  function resetRailScroll() {
    const grid = document.getElementById('winesGrid');
    if (grid) grid.scrollLeft = 0;
  }

  document.getElementById('wineFilters').addEventListener('click', function(e) {
    const btn = e.target.closest('.wf-btn');
    if (!btn) return;
    // Scoped to this row only — the quick-pick row keeps its own selection
    // when this one changes, since the two filters combine rather than
    // replace each other.
    this.querySelectorAll('.wf-btn').forEach(b => b.classList.remove('wf-btn--active'));
    btn.classList.add('wf-btn--active');
    activeWineFilter = btn.dataset.filter;
    renderWines();
    resetRailScroll();
  });

  document.getElementById('quickFilters').addEventListener('click', function(e) {
    const btn = e.target.closest('.wf-btn');
    if (!btn) return;
    const wasActive = btn.classList.contains('wf-btn--active');
    this.querySelectorAll('.wf-btn').forEach(b => b.classList.remove('wf-btn--active'));
    if (wasActive) {
      // Row has no "all" pill of its own — clicking the active one a second
      // time is how it clears back to showing every quick tag.
      activeQuickFilter = 'all';
    } else {
      btn.classList.add('wf-btn--active');
      activeQuickFilter = btn.dataset.quick;
    }
    renderWines();
    resetRailScroll();
  });
});

window.updateQty = updateQty;
window.removeFromCart = removeFromCart;

// ===== Hero Video =====
// Prefers the self-hosted file at videos/hero.mp4. If that file is not in the
// repository (or the browser cannot play it), this falls back to the YouTube
// embed automatically — so dropping the file in is the only step required.
(function() {
  var native = document.getElementById('heroVideoNative');
  var settled = false;

  function useNative() {
    if (settled) return;
    settled = true;
    native.classList.add('active');
    var wrap = document.getElementById('heroVideoWrap');
    if (wrap) wrap.remove();              // YouTube is never loaded at all
    var cover = document.getElementById('heroVideoCover');
    if (cover) cover.classList.add('hidden');
  }

  function useYouTube() {
    if (settled) return;
    settled = true;
    if (native) native.remove();
    startYouTube();
  }

  // Neither video source is worth several megabytes to someone who asked for
  // less motion or less data — the still background carries the hero instead.
  function useStatic() {
    if (settled) return;
    settled = true;
    if (native) native.remove();
    var wrap = document.getElementById('heroVideoWrap');
    if (wrap) wrap.remove();
    var bg = document.getElementById('heroBgFallback');
    if (bg) bg.classList.add('visible');
    var cover = document.getElementById('heroVideoCover');
    if (cover) cover.classList.add('hidden');
  }

  var wantsLessMotion = window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var wantsLessData = navigator.connection && navigator.connection.saveData;

  if (native && (wantsLessMotion || wantsLessData)) {
    useStatic();
  } else if (native) {
    // Chrome/Firefox take the WebM, Safari the H.264 MP4.
    var probe = document.createElement('video');
    var chosen = (native.dataset.srcWebm && probe.canPlayType('video/webm; codecs="vp9"'))
      ? native.dataset.srcWebm
      : native.dataset.src;

    // A missing file does not raise <video> error promptly, which would leave
    // the hero dark for seconds. Probing first keeps the decision immediate.
    fetch(chosen, { method: 'HEAD' })
      .then(function(res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        native.addEventListener('playing', useNative, { once: true });
        native.addEventListener('error', useYouTube, { once: true });
        if (native.dataset.poster) native.poster = native.dataset.poster;
        native.src = chosen;
        var attempt = native.play();
        if (attempt && attempt.catch) attempt.catch(function() { useYouTube(); });
        setTimeout(function() { if (!settled) useYouTube(); }, 5000);
      })
      .catch(useYouTube);
  } else {
    useYouTube();
  }

function startYouTube() {
  // Set src dynamically so YouTube never renders thumbnail before cover is ready
  var iframe = document.getElementById('heroVideo');
  if (iframe) iframe.src = iframe.getAttribute('data-src');

  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
  var ytPlayer;
  window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('heroVideo', {
      events: {
        onReady: function(e) {
          e.target.mute();
          e.target.playVideo();
          e.target.setPlaybackRate(0.75);
          var faded = false;
          var poll = setInterval(function() {
            try {
              var duration = ytPlayer.getDuration();
              var current = ytPlayer.getCurrentTime();
              if (duration > 0 && current >= duration - 2.5 && !faded) {
                faded = true;
                clearInterval(poll);
                var bg = document.getElementById('heroBgFallback');
                if (bg) bg.classList.add('visible');
              }
            } catch(err) {}
          }, 500);
        },
        onStateChange: function(e) {
          if (e.data === YT.PlayerState.PLAYING) {
            var cover = document.getElementById('heroVideoCover');
            if (cover) cover.classList.add('hidden');
          }
          if (e.data === YT.PlayerState.ENDED) {
            var wrap = document.getElementById('heroVideoWrap');
            if (wrap) { wrap.style.transition = 'opacity 0.3s ease'; wrap.style.opacity = '0'; }
            var bg = document.getElementById('heroBgFallback');
            if (bg) bg.classList.add('visible');
          }
        }
      }
    });
  };
}
})();
