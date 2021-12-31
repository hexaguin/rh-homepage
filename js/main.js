const swup = new Swup({
    animationSelector: '[class*="page-transition-"]',
    animateHistoryBrowsing: true,
    linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([target^="_blank"]), a[href^="/"]:not([target^="_blank"]), a[href^="#"]:not([target^="_blank"])'
});