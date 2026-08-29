// ===== Catalogue =====
// Shared by the homepage and every product page, so a wine is described in
// exactly one place. Loaded before script.js / vino.js, which both read it.

const WINES = [
  {
    id: 'tvrdos-vranac',
    quickTag: 'preporuka',
    tag: { sr: 'Duboko i staloženo', en: 'Deep and composed' },
    tagIcon: 'barrel',
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
    tagIcon: 'droplet',
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
    tagIcon: 'flower',
    name: { sr: 'Tamjanika Galerija', en: 'Tamjanika Galerija' },
    volume: '0.75L',
    subtitle: { sr: 'Belo vino • Podrumi Vukoje, Trebinje', en: 'White Wine • Podrumi Vukoje, Trebinje' },
    type: { sr: 'Belo', en: 'White' },
    desc: {
      sr: 'Izrazito mirisno belo vino sa aromama cvetne livade, grožđa i blagog meda. Pitko i osvežavajuće, savršeno za one koji vole da vino prvo osete nosom, pa tek onda ukusom.',
      en: 'A strikingly fragrant white with aromas of flowering meadow, grapes and a hint of honey. Easy to drink and refreshing, perfect for anyone who likes to taste a wine with their nose first.'
    },
    price: 1890,
    img: 'images/tamjanika-galerija.webp'
  },
  {
    id: 'tvrdos-metoh-vranac',
    quickTag: 'preporuka',
    tag: { sr: 'Opušteno i pitko', en: 'Relaxed and easy' },
    tagIcon: 'glass',
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
    tagIcon: 'sun',
    name: { sr: 'Primavera cuvee roze', en: 'Primavera cuvee roze' },
    volume: '0.75L',
    subtitle: { sr: 'Rosé vino • Podrumi Vukoje, Trebinje', en: 'Rosé Wine • Podrumi Vukoje, Trebinje' },
    type: { sr: 'Rosé', en: 'Rosé' },
    desc: {
      sr: 'Svetlo rozé vino boje latica ruže, sa mirisom jagode i divlje kupine. Lagano, sveže i lako se pije, ide uz sve, od letnjeg druženja do prve večere na terasi.',
      en: 'A pale rosé the colour of rose petals, with aromas of strawberry and wild blackberry. Light, fresh and effortless to drink, pairs with everything from a summer gathering to the first dinner on the terrace.'
    },
    price: 1890,
    // PRIVREMENO: ovo je fotografija Tamjanike, ne roze — stavljena ovde samo
    // da se uporedi kvalitet uživo na sajtu. Vrati na pravu roze sliku kad
    // stigne, ili na 'images/tvrdos-2022.webp' ako se odustane od poređenja.
    img: 'images/tamjanika-galerija-v2.webp'
  },
  {
    id: 'tvrdos-izba-merlot',
    quickTag: 'preporuka',
    tag: { sr: 'Mekše crveno', en: 'Softer red' },
    tagIcon: 'heart',
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
    tagIcon: 'layers',
    name: { sr: 'Zlatna Selekcija Bijelo', en: 'Zlatna Selekcija Bijelo' },
    volume: '0.75L',
    subtitle: { sr: 'Belo vino • Podrumi Vukoje, Trebinje', en: 'White Wine • Podrumi Vukoje, Trebinje' },
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
    tagIcon: 'flame',
    name: { sr: 'Vranac Reserve', en: 'Vranac Reserve' },
    volume: '0.75L',
    subtitle: { sr: 'Crveno vino • Podrumi Vukoje, Trebinje', en: 'Red Wine • Podrumi Vukoje, Trebinje' },
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
    tagIcon: 'house',
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
    tagIcon: 'feather',
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
    tagIcon: 'house',
    tag2: { sr: 'Za veće društvo', en: 'For a bigger crowd' },
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
    tagIcon: 'feather',
    tag2: { sr: 'Za veće društvo', en: 'For a bigger crowd' },
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
    tagIcon: 'ribbon',
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

// One place builds a product-page URL, so the homepage links and the page's
// own related-wine links can never drift into different shapes.
const WINE_URL_PARAM = 'w';

function wineHref(id) {
  return 'vino.html?' + WINE_URL_PARAM + '=' + encodeURIComponent(id);
}
