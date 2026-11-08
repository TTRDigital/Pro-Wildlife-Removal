/* Dynamic number swap for Google Ads visitors. No dependencies.
   - Default number stays in the HTML (works with JS off, no gclid, or any error).
   - With a gclid in the URL, asks TTR OS for a tracking number (1.5 s limit).
   - Swaps every [data-ttr-num] text and every tel: link in one pass, so text and link always match.
   - Keeps the number about 30 minutes after last activity (localStorage, shared across pages/tabs). */
(function () {
  var CFG = window.__TTR_NUM || {};
  var KEY = CFG.key || '';
  var API = CFG.api || 'https://ttr-portal.vercel.app/api/site/number';
  var DEFAULT_TEL = '+17278556766';
  var STORE = 'ttr_num_v1';
  var HOLD_MS = 30 * 60 * 1000;
  var TIMEOUT_MS = 1500;

  function store() { try { return window.localStorage; } catch (e) { return null; } }
  function read() {
    var s = store(); if (!s) return null;
    try {
      var r = JSON.parse(s.getItem(STORE) || 'null');
      if (r && r.n && r.exp > Date.now()) return r;
      if (r) s.removeItem(STORE);
    } catch (e) {}
    return null;
  }
  function write(r) { var s = store(); if (s) { try { s.setItem(STORE, JSON.stringify(r)); } catch (e) {} } }

  function fmt(n) { // "+17274724083" -> "(727) 472-4083"
    var m = /^\+1(\d{3})(\d{3})(\d{4})$/.exec(n);
    return m ? '(' + m[1] + ') ' + m[2] + '-' + m[3] : null;
  }

  function apply(n) {
    var d = fmt(n);
    if (!d) return false;
    var spans = document.querySelectorAll('[data-ttr-num]');
    var links = document.querySelectorAll('a[href^="tel:"]');
    for (var i = 0; i < spans.length; i++) spans[i].textContent = d;
    for (var j = 0; j < links.length; j++) links[j].setAttribute('href', 'tel:' + n);
    return true;
  }

  function params() {
    var q = new URLSearchParams(window.location.search);
    return { gclid: q.get('gclid') || '', campaign: q.get('campaign') || q.get('campaignid') || '', adgroup: q.get('adgroup') || q.get('adgroupid') || '' };
  }

  function request(p) {
    if (!KEY || !window.fetch) return Promise.reject(new Error('off'));
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, TIMEOUT_MS);
    var body = JSON.stringify({ k: KEY, gclid: p.gclid, campaign: p.campaign, adgroup: p.adgroup, page: location.pathname, referrer: document.referrer || '' });
    var call = fetch(API, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: body, signal: ctl ? ctl.signal : undefined, credentials: 'omit', keepalive: true })
      .then(function (r) { if (!r.ok) throw new Error('http'); return r.json(); });
    var limit = new Promise(function (_, rej) { setTimeout(function () { rej(new Error('timeout')); }, TIMEOUT_MS); });
    return Promise.race([call, limit]).then(function (v) { clearTimeout(timer); return v; }, function (e) { clearTimeout(timer); throw e; });
  }

  function keepAlive(rec) {
    var last = 0;
    function bump() {
      var now = Date.now();
      if (now - last < 15000) return; // write at most every 15 s
      last = now;
      var cur = read();
      if (cur && cur.n === rec.n) { cur.exp = now + (cur.hold || HOLD_MS); write(cur); }
    }
    ['click', 'scroll', 'keydown', 'touchstart', 'pointerdown'].forEach(function (ev) { window.addEventListener(ev, bump, { passive: true }); });
  }

  try {
    var p = params();
    var saved = read();
    if (saved && saved.n !== DEFAULT_TEL) apply(saved.n);

    var needNew = p.gclid && (!saved || saved.g !== p.gclid);
    if (needNew) {
      request(p).then(function (res) {
        var n = res && res.number;
        if (!fmt(n)) return; // pool busy / bad answer: keep what is showing
        var hold = res.hold > 0 ? Math.min(res.hold, 86400) * 1000 : HOLD_MS;
        var rec = { n: n, g: p.gclid, hold: hold, exp: Date.now() + hold };
        if (apply(n)) { write(rec); keepAlive(rec); }
      }).catch(function () {});
    }
    if (saved && saved.n !== DEFAULT_TEL) {
      saved.exp = Date.now() + (saved.hold || HOLD_MS); write(saved); keepAlive(saved);
    }
  } catch (e) {}
})();
