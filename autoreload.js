(function () {
  var KEY = 'autoreload_ts';
  var LIMIT = 30 * 60 * 1000; // 30 минут

  function check() {
    var last = parseInt(localStorage.getItem(KEY) || '0', 10);
    if (Date.now() - last > LIMIT) {
      localStorage.setItem(KEY, Date.now());
      setTimeout(function () { location.reload(); }, 2000);
    }
  }

  check(); // при запуске
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) check(); // при возврате в приложение
  });
})();
