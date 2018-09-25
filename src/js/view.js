window.view = {};

window.view.front = () => {
  let divFront = document.getElementById('container');
  divFront.innerHTML =
    `<div class="row m-0">
      <div class="col-5 col-md-3 col-lg-2 m-auto pt-5 pt-md-3">
      <img src="src/img/logoAzul.png" class="img-fluid img-fluid-alt" alt="prueba-gata">
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-6 col-xl-5 col-md-7 col-8 m-auto pt-md-4 pad-img">
        <img src="src/img/pru5.png" class="img-fluid img-fluid-altanimated zoomIn imageshake" alt="prueba-gata">
      </div>
    </div>

    <p class="vertical-text-left m-0">CONTACTO</p>
    <p class="vertical-text-right m-0">YO</p>
    <p onclick="window.view.pru()" class="top-botton m-0">PORTAFOLIO</p>
    
    <button onclick="window.view.pru()" class="btn-right"></button>
    <button onclick="window.controller.dataUser()" class="btn-left"></button>`;
};

window.view.dataUser = () => {
  let divDataUser = document.getElementById('container');
  divDataUser.innerHTML =
    `<div class="row m-0 p-5">
      <div class="col-md-6 col-12">
        <img src="src/img/dataUser.jpg" class="rounded-circle img-fluid p-5" alt="data-user">
      </div>
      <div class="col-md-6 col-12 p-sm-5 p-0">
        <h1 class="text-center text-title pb-2">Nataly Verdugo Nogue</h1>
        <p class="text-user text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus
          justo fermentum
          velit tristique, sed
          consequat justo placerat. Curabitur pharetra arcu vestibulum lorem semper, vel congue nisi pellentesque.
          Praesent non arcu urna. Nulla ipsum erat, interdum sit amet luctus non, molestie ut arcu. Donec leo augue,
          hendrerit eget imperdiet posuere, finibus ut lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Donec semper sem eget auctor bibendum. Proin commodo feugiat libero vitae pretium. Integer sed
          tempor purus. Vestibulum non varius arcu, vel faucibus lacus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Quisque non velit mi. Praesent nec venenatis leo. Aliquam cursus
          tellus at felis sollicitudin, in dictum arcu mattis.</p>
      </div>
    </div>`;
};
