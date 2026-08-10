/* Experience accordion.
   Each trigger owns one panel via aria-controls; the button's aria-expanded
   is the single source of truth for open state. Markup ships with the first
   role open, which is also what the page shows if this script never runs
   (see the <noscript> block in index.html, which reveals every panel). */
(function () {
  'use strict';

  var triggers = document.querySelectorAll('.exp__btn');

  Array.prototype.forEach.call(triggers, function (btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;

    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      var mark = btn.querySelector('.exp__mark');

      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      panel.hidden = isOpen;
      if (mark) mark.textContent = isOpen ? '+' : '–';
    });
  });
})();
