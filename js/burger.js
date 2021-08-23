
  document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('menu--open')
  };
  document.getElementById('close').onclick = function () {
    document.getElementById('menu').classList.remove('menu--open')
  }
