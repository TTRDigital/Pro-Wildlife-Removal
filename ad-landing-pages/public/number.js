/* Dynamic call number for Google Ads visitors (TTR-1339). A visitor who arrives from an ad (gclid in the address) gets one number
   from the pool for about 30 minutes after their last activity; calls to it are matched to the click in TTR OS.
   Anything else (no gclid, pool busy, error, slow answer, no JavaScript): the page keeps its default number.
   Generic: the page's default number is the first tel: link on the page (nothing is hard coded), and only links and text that
   show that number are swapped, so other numbers on the page (for example county lines) are left alone. */
(function () {
  var KEY = 'FDnQlortKpNhGZT59_DS8g';   // TTR OS site key for Pro Wildlife (public, it is in the page)
  var API = 'https://ttr-portal.vercel.app/api/site/number';
  var STORE = 'pw_call_number', HOLD_MS = 30 * 60 * 1000, WAIT_MS = 1500;

  function read() { try { var s = JSON.parse(localStorage.getItem(STORE) || 'null'); return s && s.exp > Date.now() && s.tel && s.display ? s : null; } catch (e) { return null; } }
  function write(n) { try { localStorage.setItem(STORE, JSON.stringify({ tel: n.tel, display: n.display, exp: Date.now() + HOLD_MS })); } catch (e) {} }

  function digits(s) { var d = String(s || '').replace(/\D/g, ''); return d.length === 11 && d.charAt(0) === '1' ? d.slice(1) : d; }
  // The page's default number: the first tel: link on the page.
  function defaultDigits() { var a = document.querySelector('a[href^="tel:"]'); var d = a ? digits(a.getAttribute('href').slice(4)) : ''; return d.length === 10 ? d : ''; }
  // Ways the default number is written on the page, each paired with the same style for the new number.
  function styles(d, nd) {
    var f = function (x) { return [
      ['(' + x.slice(0, 3) + ') ' + x.slice(3, 6) + '-' + x.slice(6), '(' + nd.slice(0, 3) + ') ' + nd.slice(3, 6) + '-' + nd.slice(6)],
      ['1-' + x.slice(0, 3) + '-' + x.slice(3, 6) + '-' + x.slice(6), '1-' + nd.slice(0, 3) + '-' + nd.slice(3, 6) + '-' + nd.slice(6)],
      [x.slice(0, 3) + '-' + x.slice(3, 6) + '-' + x.slice(6), nd.slice(0, 3) + '-' + nd.slice(3, 6) + '-' + nd.slice(6)],
      [x.slice(0, 3) + '.' + x.slice(3, 6) + '.' + x.slice(6), nd.slice(0, 3) + '.' + nd.slice(3, 6) + '.' + nd.slice(6)]
    ]; };
    return f(d);
  }

  function apply(n, d) {
    var nd = digits(n.tel);
    if (!d || !nd || d === nd) return;
    var links = document.querySelectorAll('a[href^="tel:"]');
    for (var i = 0; i < links.length; i++) if (digits(links[i].getAttribute('href').slice(4)) === d) links[i].setAttribute('href', 'tel:' + n.tel);
    var pairs = styles(d, nd);
    pairs[0][1] = n.display;   // the "(727) 855-6766" style uses the display text TTR OS returns
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), node, todo = [];
    while ((node = walker.nextNode())) {
      if (/^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentNode.nodeName)) continue;
      for (var k = 0; k < pairs.length; k++) if (node.nodeValue.indexOf(pairs[k][0]) > -1) { todo.push(node); break; }
    }
    for (var j = 0; j < todo.length; j++) for (var m = 0; m < pairs.length; m++) todo[j].nodeValue = todo[j].nodeValue.split(pairs[m][0]).join(pairs[m][1]);
    document.documentElement.setAttribute('data-call-number', n.tel);
  }

  function run() {
    var d = defaultDigits();
    if (!d) return;   // no phone link on this page, nothing to swap
    var held = read();
    if (held) { write(held); apply(held, d); return; }   // keep it, and renew the hold on activity
    var q = new URLSearchParams(location.search), gclid = q.get('gclid');
    if (!gclid) return;
    var ctl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, WAIT_MS);
    fetch(API, { method: 'POST', headers: { 'content-type': 'application/json' }, keepalive: true, signal: ctl ? ctl.signal : undefined,
      body: JSON.stringify({ k: KEY, gclid: gclid, campaign: q.get('campaign_id') || '', adgroup: q.get('ad_group_id') || '',
        page: location.pathname, referrer: document.referrer || '' }) })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (n) { clearTimeout(timer); if (n && /^\+1\d{10}$/.test(n.number || '') && n.display) { var v = { tel: n.number, display: n.display }; write(v); apply(v, d); } })
      .catch(function () { clearTimeout(timer); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  ['click', 'scroll', 'touchstart'].forEach(function (ev) { window.addEventListener(ev, function () { var h = read(); if (h) write(h); }, { passive: true, once: false }); });
})();
