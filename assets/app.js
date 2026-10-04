/* Nemesis — static catalog. Data lives in /data/*.json and is edited via /admin (Decap CMS). */
(function () {
  'use strict';

  const T = {
    ru: {
      nav_catalog: 'Каталог', nav_custom: 'На заказ', nav_about: 'О мастере', nav_delivery: 'Доставка', nav_contacts: 'Контакты',
      cta_catalog: 'Смотреть каталог', cta_custom: 'Изделие по эскизу',
      strip_years: 'лет опыта', strip_leather: 'натуральная кожа', strip_hand: 'дней на изготовление', strip_ship: 'лет службы изделия',
      strip_years_v: '15+', strip_leather_v: '100%', strip_hand_v: '2–7', strip_ship_v: '20+',
      cats_eyebrow: 'Коллекции', cats_title: 'Категории', all: 'Все',
      best_eyebrow: 'Выбор клиентов', best_title: 'Бестселлеры', see_all: 'Весь каталог',
      process_eyebrow: 'Индивидуальный заказ', process_title: 'Как создаётся ваше изделие',
      about_eyebrow: 'О мастере', about_title: 'Мастерская Nemesis', more: 'Подробнее',
      corp_eyebrow: 'Для бизнеса', corp_title: 'Корпоративные подарки и интерьер', corp_cta: 'Обсудить проект',
      showroom_eyebrow: 'Шоурум', showroom_title: 'Примерьте в Белграде', showroom_text: 'Изделия можно посмотреть, примерить и купить в нашем магазине. Или закажите онлайн — отправим почтой по всей Сербии.',
      catalog_title: 'Каталог', catalog_sub: 'Каждое изделие можно изменить под вас: цвет и фактура кожи, фурнитура, размер, гравировка инициалов.',
      search: 'Поиск', sort_default: 'По умолчанию', sort_asc: 'Сначала дешевле', sort_desc: 'Сначала дороже', nothing: 'Ничего не найдено',
      from: 'от', on_request: 'Цена по запросу',
      av_in_stock: 'В наличии — можно примерить в шоуруме', av_made_to_order: 'Под заказ', av_sold_out: 'Продано — можно заказать похожее',
      av_short_in_stock: 'В наличии', av_short_made_to_order: 'Под заказ', av_short_sold_out: 'Продано',
      badge_bestseller: 'Бестселлер', badge_new: 'Новинка', badge_limited: 'Единственный экземпляр',
      opt_leather: 'Материал', opt_leather_v: 'Натуральная итальянская кожа', opt_custom: 'Можно изменить', opt_custom_v: 'Цвет кожи, фактуру, фурнитуру, размер',
      opt_engrave: 'Персонализация', opt_engrave_v: 'Гравировка инициалов', opt_time: 'Изготовление', opt_time_v: 'Обычно 2–7 дней',
      order_title: 'Заказать', order_note: 'Напишите нам — уточним цвет, размер и сроки. Оплата при получении или предоплата 50% для индивидуальных заказов.',
      order_msg: 'Здравствуйте! Хочу заказать: {name}{price}\n{url}',
      order_custom_msg: 'Здравствуйте! Хочу обсудить индивидуальный заказ.',
      copied: 'Текст заказа скопирован — вставьте его в чат',
      no_contacts: 'Контакты ещё не указаны — добавьте их в админке (Настройки → Контакты)',
      related: 'Вам может понравиться', back: 'Каталог',
      about_story_t: 'История', name_t: 'Почему Nemesis', materials_t: 'Материалы и техники',
      care_title: 'Уход за изделиями', ws_title: 'Из мастерской', ws_eyebrow: 'Процесс', care_cleaning: 'Очистка', care_drying: 'Сушка', care_storage: 'Хранение', care_conditioning: 'Уход',
      custom_title: 'Изделия на заказ', custom_sub: 'Возьмите за основу модель из каталога или принесите свою идею — я воплощу её в коже.',
      custom_how: 'Как это работает', timing_t: 'Сроки изготовления', write_us: 'Написать мастеру',
      delivery_title: 'Доставка и оплата', delivery_t: 'Доставка', payment_t: 'Оплата', warranty_t: 'Гарантия и ремонт',
      f_showroom: 'Шоурум', f_contacts: 'Связаться', f_catalog: 'Каталог', f_handmade: 'Сделано вручную в Белграде', f_map: 'Открыть на карте',
      not_found: 'Страница не найдена', home: 'На главную', master: 'Мастер'
    },
    sr: {
      nav_catalog: 'Katalog', nav_custom: 'Po meri', nav_about: 'O majstoru', nav_delivery: 'Dostava', nav_contacts: 'Kontakt',
      cta_catalog: 'Pogledajte katalog', cta_custom: 'Izrada po skici',
      strip_years: 'godina iskustva', strip_leather: 'prirodna koža', strip_hand: 'dana za izradu', strip_ship: 'godina trajanja',
      strip_years_v: '15+', strip_leather_v: '100%', strip_hand_v: '2–7', strip_ship_v: '20+',
      cats_eyebrow: 'Kolekcije', cats_title: 'Kategorije', all: 'Sve',
      best_eyebrow: 'Izbor kupaca', best_title: 'Najprodavanije', see_all: 'Ceo katalog',
      process_eyebrow: 'Porudžbina po meri', process_title: 'Kako nastaje vaš predmet',
      about_eyebrow: 'O majstoru', about_title: 'Radionica Nemesis', more: 'Saznajte više',
      corp_eyebrow: 'Za firme', corp_title: 'Korporativni pokloni i enterijer', corp_cta: 'Razgovarajmo o projektu',
      showroom_eyebrow: 'Radnja', showroom_title: 'Probajte u Beogradu', showroom_text: 'Predmete možete pogledati, probati i kupiti u našoj radnji. Ili naručite onlajn — šaljemo poštom po celoj Srbiji.',
      catalog_title: 'Katalog', catalog_sub: 'Svaki predmet može se prilagoditi vama: boja i tekstura kože, okovi, veličina, graviranje inicijala.',
      search: 'Pretraga', sort_default: 'Podrazumevano', sort_asc: 'Cena: rastuće', sort_desc: 'Cena: opadajuće', nothing: 'Nema rezultata',
      from: 'od', on_request: 'Cena na upit',
      av_in_stock: 'Na stanju — možete probati u radnji', av_made_to_order: 'Po porudžbini', av_sold_out: 'Prodato — možete naručiti sličan',
      av_short_in_stock: 'Na stanju', av_short_made_to_order: 'Po porudžbini', av_short_sold_out: 'Prodato',
      badge_bestseller: 'Najprodavanije', badge_new: 'Novo', badge_limited: 'Unikat',
      opt_leather: 'Materijal', opt_leather_v: 'Prirodna italijanska koža', opt_custom: 'Može se promeniti', opt_custom_v: 'Boja kože, tekstura, okovi, veličina',
      opt_engrave: 'Personalizacija', opt_engrave_v: 'Graviranje inicijala', opt_time: 'Izrada', opt_time_v: 'Obično 2–7 dana',
      order_title: 'Poručite', order_note: 'Pišite nam — dogovorićemo boju, veličinu i rok. Plaćanje pri preuzimanju ili avans 50% za porudžbine po meri.',
      order_msg: 'Zdravo! Želim da poručim: {name}{price}\n{url}',
      order_custom_msg: 'Zdravo! Želim da razgovaramo o porudžbini po meri.',
      copied: 'Tekst porudžbine je kopiran — nalepite ga u čet',
      no_contacts: 'Kontakti još nisu uneti — dodajte ih u admin panelu (Podešavanja → Kontakti)',
      related: 'Možda će vam se dopasti', back: 'Katalog',
      about_story_t: 'Priča', name_t: 'Zašto Nemesis', materials_t: 'Materijali i tehnike',
      care_title: 'Održavanje', ws_title: 'Iz radionice', ws_eyebrow: 'Proces', care_cleaning: 'Čišćenje', care_drying: 'Sušenje', care_storage: 'Čuvanje', care_conditioning: 'Nega',
      custom_title: 'Izrada po meri', custom_sub: 'Uzmite model iz kataloga kao osnovu ili donesite svoju ideju — pretočiću je u kožu.',
      custom_how: 'Kako funkcioniše', timing_t: 'Rokovi izrade', write_us: 'Pišite majstoru',
      delivery_title: 'Dostava i plaćanje', delivery_t: 'Dostava', payment_t: 'Plaćanje', warranty_t: 'Garancija i popravke',
      f_showroom: 'Radnja', f_contacts: 'Kontakt', f_catalog: 'Katalog', f_handmade: 'Ručno izrađeno u Beogradu', f_map: 'Otvori na mapi',
      not_found: 'Stranica nije pronađena', home: 'Početna', master: 'Majstor'
    }
  };

  const ICON = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3Z"/></svg>',
    viber: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c5.5 0 9 1.6 9 8.3s-3.5 8.2-9 8.2c-.8 0-1.6 0-2.3-.1L6 21.5v-3.4C3.8 16.9 3 14.6 3 10.8 3 4.1 6.5 2.5 12 2.5Z"/><path d="M9.2 7.3c.4 0 .7.2.9.6l.6 1.3c.1.4 0 .7-.3 1l-.4.4a5 5 0 0 0 2.9 2.9l.4-.4c.3-.3.7-.4 1-.3l1.3.6c.4.2.6.5.6.9 0 1-.9 1.7-1.9 1.6a7.7 7.7 0 0 1-6.7-6.7c-.1-1 .6-1.9 1.6-1.9Z"/><path d="M13 6.5a4 4 0 0 1 3.5 3.5M13 4.8a5.7 5.7 0 0 1 5.2 5.2"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.4 3.6 2.9 10.8c-1.3.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.9-1.4-1.5ZM8.6 13.4l9.2-5.8c.5-.3.8-.1.5.2l-7.6 6.9-.3 3.2-1.8-4.5Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor" stroke="none"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/></svg>'
  };

  const state = { lang: 'ru', cats: [], products: [], settings: {}, content: {}, q: '', sort: '' };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const t = k => (T[state.lang][k] ?? T.ru[k] ?? k);
  const L = (o, f) => (o && (o[`${f}_${state.lang}`] || o[`${f}_ru`] || o[`${f}_sr`])) || '';
  const C = k => (state.content[state.lang] && state.content[state.lang][k]) || (state.content.ru && state.content.ru[k]) || '';
  const paras = s => String(s || '').split(/\n\s*\n/).filter(Boolean).map(p => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
  const lines = s => `<ul class="list">${String(s || '').split('\n').filter(x => x.trim()).map(x => `<li>${esc(x.replace(/^[-•]\s*/, ''))}</li>`).join('')}</ul>`;
  const digits = s => String(s || '').replace(/\D/g, '');
  const handle = s => String(s || '').trim().replace(/^@/, '').replace(/^https?:\/\/(www\.)?(instagram\.com|t\.me)\//, '').replace(/\/$/, '');

  function store(k, v) { try { v === undefined ? (v = localStorage.getItem(k)) : localStorage.setItem(k, v); return v; } catch (e) { return null; } }

  function fmtPrice(p) {
    if (p.price === null || p.price === undefined || p.price === '' || Number(p.price) === 0) return `<span class="price" style="font-size:15px">${t('on_request')}</span>`;
    const n = Number(p.price).toLocaleString(state.lang === 'sr' ? 'sr-Latn-RS' : 'ru-RU');
    return `<span class="price">${p.price_from ? `<small>${t('from')}</small>` : ''}€${n}</span>`;
  }
  const img = p => (p.images && p.images[0] && (p.images[0].image || p.images[0])) || '/images/placeholders/cat-bags.svg';
  const visible = () => state.products.filter(p => !p.hidden);
  const catById = id => state.cats.find(c => c.id === id);

  function card(p) {
    const imgs = (p.images || []).map(i => i.image || i).filter(Boolean);
    const badge = p.badge ? `<span class="badge">${t('badge_' + p.badge)}</span>` : '';
    return `<a class="card reveal" href="#/p/${encodeURIComponent(p.id)}">
      <div class="card-img">${badge}<img src="${esc(imgs[0] || img(p))}" alt="${esc(L(p, 'name'))}" loading="lazy">${imgs[1] ? `<img class="alt" src="${esc(imgs[1])}" alt="" loading="lazy">` : ''}</div>
      <div class="card-b"><div><h3>${esc(L(p, 'name'))}</h3><span class="av">${t('av_short_' + (p.availability || 'in_stock'))}</span></div>${fmtPrice(p)}</div>
    </a>`;
  }

  /* ---------- messengers ---------- */
  function channels() {
    const s = state.settings;
    const list = [];
    if (s.whatsapp) list.push({ k: 'whatsapp', label: 'WhatsApp', href: m => `https://wa.me/${digits(s.whatsapp)}?text=${encodeURIComponent(m)}` });
    if (s.viber) list.push({ k: 'viber', label: 'Viber', copy: true, href: () => `viber://chat?number=%2B${digits(s.viber)}` });
    if (s.telegram) list.push({ k: 'telegram', label: 'Telegram', copy: true, href: () => `https://t.me/${handle(s.telegram)}` });
    if (s.instagram) list.push({ k: 'instagram', label: 'Instagram', copy: true, href: () => `https://ig.me/m/${handle(s.instagram)}` });
    return list;
  }
  function msgrButtons(message) {
    let ch = channels();
    const demo = !ch.length;
    if (demo) ch = ['whatsapp', 'viber', 'telegram', 'instagram'].map(k => ({ k, label: { whatsapp: 'WhatsApp', viber: 'Viber', telegram: 'Telegram', instagram: 'Instagram' }[k], demo: true }));
    return `<div class="msgr" data-msg="${esc(message)}">${ch.map((c, i) =>
      `<a href="${c.demo ? '#' : esc(c.href(message))}" ${c.demo ? 'data-demo="1"' : ''} ${c.copy ? 'data-copy="1"' : ''} target="_blank" rel="noopener" class="${i === 0 ? 'primary' : ''}">${ICON[c.k]}<span>${c.label}</span></a>`).join('')}</div>`;
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('.msgr a');
    if (!a) return;
    const msg = a.closest('.msgr').dataset.msg;
    if (a.dataset.demo) { e.preventDefault(); toast(t('no_contacts')); return; }
    if (a.dataset.copy && navigator.clipboard) { navigator.clipboard.writeText(msg).then(() => toast(t('copied'))).catch(() => {}); }
  });

  let toastTimer;
  function toast(s) { const el = $('#toast'); el.textContent = s; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3800); }

  /* ---------- pages ---------- */
  function pageHome() {
    const best = visible().filter(p => p.featured).slice(0, 8);
    const steps = C('process') || [];
    return `
    <section class="hero"><div class="wrap hero-in">
      <span class="eyebrow">${esc(C('hero_eyebrow'))}</span>
      <img class="hero-logo" src="/assets/logo.png" alt="Nemesis Leather Accessories">
      <h1>${esc(C('hero_title'))}</h1>
      <p>${esc(C('hero_subtitle'))}</p>
      <div class="hero-cta"><a class="btn btn-silver" href="#/catalog">${t('cta_catalog')}</a><a class="btn" href="#/custom">${t('cta_custom')}</a></div>
    </div><span class="scroll-cue"></span></section>

    <div class="strip"><div class="wrap strip-in">
      ${['years', 'leather', 'hand', 'ship'].map(k => `<div class="strip-item"><b class="silver">${t('strip_' + k + '_v')}</b><span>${t('strip_' + k)}</span></div>`).join('')}
    </div></div>

    <section class="sec"><div class="wrap">
      <div class="sec-head"><div><span class="eyebrow">${t('cats_eyebrow')}</span><h2>${t('cats_title')}</h2></div><a class="link" href="#/catalog">${t('see_all')}</a></div>
      <div class="cats">${state.cats.map(c => `<a class="cat reveal" href="#/catalog/${encodeURIComponent(c.id)}"><img src="${esc(c.image || '/images/placeholders/cat-bags.svg')}" alt="" loading="lazy"><div class="cat-t"><h3>${esc(L(c, 'name'))}</h3><p>${esc(L(c, 'desc'))}</p></div></a>`).join('')}</div>
    </div></section>

    ${best.length ? `<section class="sec" style="padding-top:0"><div class="wrap">
      <div class="sec-head"><div><span class="eyebrow">${t('best_eyebrow')}</span><h2>${t('best_title')}</h2></div><a class="link" href="#/catalog">${t('see_all')}</a></div>
      <div class="grid">${best.map(card).join('')}</div>
    </div></section>` : ''}

    <section class="sec band"><div class="wrap quote reveal">
      <div class="divider"><i></i></div>
      <blockquote>${esc(C('name_meaning'))}</blockquote>
      <div class="divider"><i></i></div>
    </div></section>

    <section class="sec"><div class="wrap">
      <div class="sec-head"><div><span class="eyebrow">${t('process_eyebrow')}</span><h2>${t('process_title')}</h2></div><a class="link" href="#/custom">${t('more')}</a></div>
      <div class="steps">${steps.map((s, i) => `<div class="step reveal"><span class="n">0${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join('')}</div>
    </div></section>

    <section class="sec" style="padding-top:0"><div class="wrap split">
      <div class="split-img reveal"><img src="${esc(state.settings.master_photo || '/images/placeholders/cat-accessories.svg')}" alt="" id="about-img"></div>
      <div class="reveal"><span class="eyebrow">${t('about_eyebrow')}</span><h2>${esc(state.settings.master_name || t('about_title'))}</h2>
        <div class="prose"><p class="lead">${esc(C('about_short'))}</p></div>
        <a class="btn" href="#/about">${t('more')}</a></div>
    </div></section>

    <section class="sec band"><div class="wrap split">
      <div class="reveal"><span class="eyebrow">${t('corp_eyebrow')}</span><h2>${t('corp_title')}</h2>
        <div class="prose"><p>${esc(C('corporate_text'))}</p></div>
        <div style="max-width:420px">${msgrButtons(t('order_custom_msg'))}</div></div>
      <div class="reveal"><span class="eyebrow">${t('showroom_eyebrow')}</span><h2>${t('showroom_title')}</h2>
        <div class="prose"><p>${t('showroom_text')}</p><p><b>${esc(L(state.settings, 'address'))}</b><br><span class="muted">${esc(L(state.settings, 'hours'))}</span></p></div>
        ${state.settings.map_url ? `<a class="btn" href="${esc(state.settings.map_url)}" target="_blank" rel="noopener">${t('f_map')}</a>` : ''}</div>
    </div></section>`;
  }

  function pageCatalog(catId) {
    const cat = catId && catById(catId);
    const counts = id => visible().filter(p => p.category === id).length;
    let items = visible().filter(p => !cat || p.category === cat.id);
    const q = state.q.trim().toLowerCase();
    if (q) items = items.filter(p => [p.name_ru, p.name_sr, p.description_ru, p.description_sr].join(' ').toLowerCase().includes(q));
    const price = p => (Number(p.price) || Infinity);
    if (state.sort === 'asc') items = [...items].sort((a, b) => price(a) - price(b));
    if (state.sort === 'desc') items = [...items].sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
    return `
    <div class="wrap">
      <div class="page-hd"><span class="eyebrow">Nemesis</span><h1>${esc(cat ? L(cat, 'name') : t('catalog_title'))}</h1><p>${esc(cat ? L(cat, 'desc') : t('catalog_sub'))}</p></div>
      <div class="filters">
        <div class="chips">
          <a class="chip ${!cat ? 'on' : ''}" href="#/catalog">${t('all')}<sup>${visible().length}</sup></a>
          ${state.cats.map(c => `<a class="chip ${cat && cat.id === c.id ? 'on' : ''}" href="#/catalog/${encodeURIComponent(c.id)}">${esc(L(c, 'name'))}<sup>${counts(c.id)}</sup></a>`).join('')}
        </div>
        <div class="tools">
          <input class="search" id="q" type="search" placeholder="${t('search')}" value="${esc(state.q)}">
          <select class="sort" id="sort" aria-label="Sort">
            <option value="">${t('sort_default')}</option><option value="asc" ${state.sort === 'asc' ? 'selected' : ''}>${t('sort_asc')}</option><option value="desc" ${state.sort === 'desc' ? 'selected' : ''}>${t('sort_desc')}</option>
          </select>
        </div>
      </div>
      <div class="grid" id="grid">${items.map(card).join('') || ''}</div>
      ${items.length ? '' : `<p class="empty">${t('nothing')}</p>`}
      <div style="height:clamp(56px,8vw,110px)"></div>
    </div>`;
  }

  function pageProduct(id) {
    const p = state.products.find(x => x.id === id);
    if (!p) return page404();
    const cat = catById(p.category);
    const imgs = (p.images || []).map(i => i.image || i).filter(Boolean);
    if (!imgs.length) imgs.push(img(p));
    const name = L(p, 'name');
    const priceTxt = Number(p.price) ? ` — ${p.price_from ? t('from') + ' ' : ''}€${p.price}` : '';
    const url = location.href;
    const msg = t('order_msg').replace('{name}', name).replace('{price}', priceTxt).replace('{url}', url);
    const av = p.availability || 'in_stock';
    const noLeather = ['chain-necklaces', 'brooches'].includes(p.category);
    const related = visible().filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
    return `
    <div class="wrap">
      <div class="crumbs"><a href="#/catalog">${t('back')}</a> / ${cat ? `<a href="#/catalog/${encodeURIComponent(cat.id)}">${esc(L(cat, 'name'))}</a> / ` : ''}<span>${esc(name)}</span></div>
      <div class="pdp">
        <div class="gallery ${imgs.length < 2 ? 'single' : ''}">
          <div class="thumbs">${imgs.map((s, i) => `<button class="${i ? '' : 'on'}" data-src="${esc(s)}" aria-label="${i + 1}"><img src="${esc(s)}" alt=""></button>`).join('')}</div>
          <div class="main-img"><img id="main-img" src="${esc(imgs[0])}" alt="${esc(name)}"></div>
        </div>
        <div class="pinfo">
          <span class="eyebrow">${esc(cat ? L(cat, 'name') : '')}${p.badge ? ' · ' + t('badge_' + p.badge) : ''}</span>
          <h1>${esc(name)}</h1>
          ${fmtPrice(p)}
          <div><span class="avail ${av === 'made_to_order' ? 'mto' : av === 'sold_out' ? 'out' : ''}">${t('av_' + av)}</span></div>
          <div class="pdesc">${esc(L(p, 'description'))}</div>
          <ul class="opts">
            ${noLeather ? '' : `<li><b>${t('opt_leather')}</b><span>${t('opt_leather_v')}</span></li>
            <li><b>${t('opt_custom')}</b><span>${t('opt_custom_v')}</span></li>
            <li><b>${t('opt_engrave')}</b><span>${t('opt_engrave_v')}</span></li>`}
            <li><b>${t('opt_time')}</b><span>${esc(L(p, 'timing') || t('opt_time_v'))}</span></li>
          </ul>
          <div class="order"><h3>${t('order_title')}</h3>${msgrButtons(msg)}<p>${t('order_note')}</p></div>
        </div>
      </div>
    </div>
    ${related.length ? `<section class="related band"><div class="wrap"><div class="sec-head"><h2>${t('related')}</h2></div><div class="grid">${related.map(card).join('')}</div></div></section>` : ''}`;
  }

  function pageAbout() {
    return `
    <div class="wrap">
      <div class="page-hd"><span class="eyebrow">${t('about_eyebrow')}</span><h1>${esc(state.settings.master_name || t('about_title'))}</h1></div>
      <div class="split" style="align-items:start">
        <div class="split-img reveal"><img src="${esc(state.settings.master_photo || '/images/placeholders/cat-bags.svg')}" alt=""></div>
        <div class="prose reveal"><span class="eyebrow">${t('about_story_t')}</span><div style="height:18px"></div>${paras(C('about_story'))}</div>
      </div>
    </div>
    <section class="sec band" style="margin-top:clamp(56px,8vw,100px)"><div class="wrap quote reveal"><span class="eyebrow">${t('name_t')}</span><div class="divider"><i></i></div><blockquote>${esc(C('name_meaning'))}</blockquote></div></section>
    <section class="sec"><div class="wrap split" style="align-items:start">
      <div><span class="eyebrow">Nemesis</span><h2>${t('materials_t')}</h2></div>
      <div class="reveal">${lines(C('materials'))}</div>
    </div></section>
    ${(state.settings.workshop_photos || []).length ? `<section class="sec" style="padding-top:0"><div class="wrap">
      <div class="sec-head"><div><span class="eyebrow">${t('ws_eyebrow')}</span><h2>${t('ws_title')}</h2></div></div>
      <div class="ws">${state.settings.workshop_photos.map(w => `<figure class="reveal"><img src="${esc(w.image || w)}" alt="" loading="lazy"></figure>`).join('')}</div>
    </div></section>` : ''}
    <section class="sec band" id="care"><div class="wrap">
      <div class="sec-head"><h2>${t('care_title')}</h2></div>
      <div class="care">${['cleaning', 'drying', 'storage', 'conditioning'].map(k => `<div class="box reveal"><h3>${t('care_' + k)}</h3><p>${esc(C('care_' + k))}</p></div>`).join('')}</div>
    </div></section>`;
  }

  function pageCustom() {
    const steps = C('process') || [];
    return `
    <div class="wrap">
      <div class="page-hd"><span class="eyebrow">${t('process_eyebrow')}</span><h1>${t('custom_title')}</h1><p>${t('custom_sub')}</p></div>
      <div class="steps" style="margin-bottom:clamp(56px,8vw,100px)">${steps.map((s, i) => `<div class="step reveal"><span class="n">0${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join('')}</div>
      <div class="split" style="align-items:start">
        <div class="prose reveal"><span class="eyebrow">${t('custom_how')}</span><div style="height:18px"></div>${paras(C('custom_order'))}
          <div style="max-width:440px;margin-top:28px">${msgrButtons(t('order_custom_msg'))}</div></div>
        <div class="reveal"><span class="eyebrow">${t('timing_t')}</span><div style="height:10px"></div>${lines(C('timing'))}</div>
      </div>
    </div>
    <section class="sec band" style="margin-top:clamp(56px,8vw,100px)"><div class="wrap split">
      <div><span class="eyebrow">${t('corp_eyebrow')}</span><h2>${t('corp_title')}</h2></div>
      <div class="prose reveal"><p class="lead">${esc(C('corporate_text'))}</p></div>
    </div></section>`;
  }

  function pageDelivery() {
    return `
    <div class="wrap">
      <div class="page-hd"><span class="eyebrow">Nemesis</span><h1>${t('delivery_title')}</h1></div>
      <div class="cards3" style="margin-bottom:clamp(56px,8vw,100px)">
        <div class="box reveal"><h3>${t('delivery_t')}</h3>${paras(C('delivery_text').replace(/\n/g, '\n\n'))}</div>
        <div class="box reveal"><h3>${t('payment_t')}</h3>${paras(C('payment_text').replace(/\n/g, '\n\n'))}</div>
        <div class="box reveal"><h3>${t('warranty_t')}</h3>${paras(C('warranty_text'))}</div>
      </div>
      <div class="split" style="align-items:start;margin-bottom:clamp(56px,8vw,100px)">
        <div><span class="eyebrow">${t('custom_how')}</span><h2>${t('timing_t')}</h2></div>
        <div class="reveal">${lines(C('timing'))}<p style="margin-top:22px"><a class="link" href="#/about">${t('care_title')} →</a></p></div>
      </div>
    </div>`;
  }

  function page404() { return `<div class="wrap page-hd" style="padding:120px 0"><h1>404</h1><p>${t('not_found')}</p><p style="margin-top:28px"><a class="btn" href="#/">${t('home')}</a></p></div>`; }

  /* ---------- chrome ---------- */
  function renderChrome() {
    document.documentElement.lang = state.lang === 'sr' ? 'sr-Latn' : 'ru';
    $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
    $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === state.lang));
    const s = state.settings;
    $('#f-address').textContent = L(s, 'address');
    $('#f-hours').textContent = L(s, 'hours');
    $('#f-map').innerHTML = s.map_url ? `<a class="link" href="${esc(s.map_url)}" target="_blank" rel="noopener">${t('f_map')}</a>` : '';
    const c = [];
    if (s.phone) c.push(`<a href="tel:${esc(s.phone.replace(/\s/g, ''))}">${esc(s.phone)}</a>`);
    if (s.email) c.push(`<a href="mailto:${esc(s.email)}">${esc(s.email)}</a>`);
    if (s.instagram) c.push(`<a href="https://instagram.com/${esc(handle(s.instagram))}" target="_blank" rel="noopener">Instagram</a>`);
    if (s.facebook) c.push(`<a href="${esc(s.facebook)}" target="_blank" rel="noopener">Facebook</a>`);
    if (s.tiktok) c.push(`<a href="${esc(s.tiktok)}" target="_blank" rel="noopener">TikTok</a>`);
    channels().filter(x => x.k !== 'instagram').forEach(x => c.push(`<a href="${esc(x.href(''))}" target="_blank" rel="noopener">${x.label}</a>`));
    $('#f-contacts').innerHTML = c.join('') || `<span class="muted">—</span>`;
    $('#f-cats').innerHTML = state.cats.map(x => `<a href="#/catalog/${encodeURIComponent(x.id)}">${esc(L(x, 'name'))}</a>`).join('');
    $('#year').textContent = new Date().getFullYear();
  }

  function route() {
    let h = location.hash.replace(/^#/, '');
    if (h === 'contacts') h = '';
    const parts = h.replace(/^\//, '').split('/').map(decodeURIComponent);
    let html, navKey = '';
    switch (parts[0]) {
      case '': html = pageHome(); break;
      case 'catalog': html = pageCatalog(parts[1]); navKey = 'catalog'; break;
      case 'p': html = pageProduct(parts[1]); navKey = 'catalog'; break;
      case 'about': html = pageAbout(); navKey = 'about'; break;
      case 'custom': html = pageCustom(); navKey = 'custom'; break;
      case 'delivery': html = pageDelivery(); navKey = 'delivery'; break;
      default: html = page404();
    }
    const app = $('#app');
    app.innerHTML = html;
    $$('.nav a').forEach(a => a.classList.toggle('on', navKey && a.getAttribute('href') === '#/' + navKey));
    document.body.classList.remove('menu-open');
    const titleBase = 'Nemesis — ' + (state.lang === 'sr' ? 'kožni aksesoari' : 'кожаные аксессуары');
    const h1 = $('h1', app);
    document.title = parts[0] && h1 ? `${h1.textContent} · Nemesis` : titleBase;
    bindPage();
    observe();
  }

  function bindPage() {
    const q = $('#q'), sort = $('#sort');
    if (q) q.addEventListener('input', () => {
      state.q = q.value; const pos = q.selectionStart; route();
      const nq = $('#q'); nq.focus(); nq.setSelectionRange(pos, pos);
    });
    if (sort) sort.addEventListener('change', () => { state.sort = sort.value; route(); });
    $$('.thumbs button').forEach(b => b.addEventListener('click', () => {
      $('#main-img').src = b.dataset.src; $$('.thumbs button').forEach(x => x.classList.toggle('on', x === b));
    }));
  }

  let io;
  function observe() {
    if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(el => el.classList.add('in')); return; }
    io && io.disconnect();
    io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach(el => io.observe(el));
  }

  function setLang(l) { state.lang = l; store('nemesis_lang', l); renderChrome(); route(); }

  async function load() {
    const get = u => fetch(u, { cache: 'no-cache' }).then(r => r.ok ? r.json() : {}).catch(() => ({}));
    const [cats, prods, settings, content] = await Promise.all([get('/data/categories.json'), get('/data/products.json'), get('/data/settings.json'), get('/data/content.json')]);
    state.cats = cats.items || []; state.products = prods.items || []; state.settings = settings || {}; state.content = content || {};
  }

  async function init() {
    const saved = store('nemesis_lang');
    state.lang = saved === 'sr' || saved === 'ru' ? saved : (/^(sr|hr|bs|me)/i.test(navigator.language) ? 'sr' : 'ru');
    const urlLang = new URLSearchParams(location.search).get('lang');
    if (urlLang === 'sr' || urlLang === 'ru') state.lang = urlLang;
    $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href="#contacts"]');
      if (a) { e.preventDefault(); document.body.classList.remove('menu-open'); $('#contacts').scrollIntoView({ behavior: 'smooth' }); }
    });
    $('#burger').addEventListener('click', () => document.body.classList.toggle('menu-open'));
    window.addEventListener('scroll', () => $('#hdr').classList.toggle('scrolled', scrollY > 10), { passive: true });
    window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });
    await load();
    renderChrome();
    route();
  }
  init();
})();
