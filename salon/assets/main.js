document.querySelectorAll('.demo-form').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = f.querySelector('.form-msg');
    if (msg) msg.textContent = 'Thanks! This is a sample concept site, so nothing was sent.';
  });
});
