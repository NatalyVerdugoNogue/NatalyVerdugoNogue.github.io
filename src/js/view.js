window.view = {};

window.view.front = () => {
  let divFront = document.getElementById('container');
  divFront.innerHTML =
    `<div class="row m-0">
      <div class="col-5 col-md-3 col-lg-2 m-auto pt-5 pt-md-3">
      <img src="src/img/logoAzul.png" class="img-fluid" alt="prueba-gata">
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6 col-xl-5 col-md-7 col-8 m-auto pt-md-4 pad-img">
        <img src="src/img/pru5.png" class="img-fluid animated zoomIn imageshake" alt="prueba-gata">
      </div>
    </div>

    <p class="vertical-text-left m-0">CONTACTO</p>
  <p class="vertical-text-right m-0">YO</p>
  <p onclick="window.view.pru()" class="top-botton m-0">PORTAFOLIO</p>
  
  <button onclick="window.view.pru()" class="btn-right"></button>
  <button onclick="window.view.pru()" class="btn-left"></button>`;
};

window.view.pru = () => {
  let divFront2 = document.getElementById('container');
  divFront2.innerHTML =
    '<p class="text-center nat">Nataly</p>';
};
