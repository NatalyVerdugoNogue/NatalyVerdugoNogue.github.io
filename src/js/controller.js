window.controller = {};


window.onload = () => {
  window.view.front();
};


window.controller.dataUser = () => {
  const container = document.getElementById('container');
  container.classList.add('animated');
  container.classList.add('bounceInRight');
  window.view.dataUser();
};


window.controller.cover = () => {
  const container = document.getElementById('container');
  container.classList.remove('animated');
  container.classList.remove('bounceInLeft');
  container.classList.remove('bounceInRight');
  container.classList.remove('bounceInUp');
  window.view.front();
};


window.controller.proyect = () => {
  const container = document.getElementById('container');
  container.classList.add('animated');
  container.classList.add('bounceInUp');
  window.view.proyect01();
};


window.controller.contact = () => {
  const container = document.getElementById('container');
  container.classList.add('animated');
  container.classList.add('bounceInLeft');
  window.view.contact();
};