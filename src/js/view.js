window.view = {};

window.view.front = () => {
  let divFront = document.getElementById('container');
  divFront.innerHTML =
    `<div class="row m-0">
      <div class="col-lg-6 col-xl-6 col-md-7 col-8 m-auto pad-img">
        <img src="src/img/principals.png" class="img-fluid img-fluid-alt animated zoomIn imageshake imgRes" alt="Portada">
      </div>
    </div>

    <span class="vertical-text-left m-0">Contacto</span>
    <span class="vertical-text-right m-0">Perfil</span>
    <span class="top-botton col-12 text-center">Proyectos</span>
   
    <div class="row m-0">
      <div class="col-12 p-0">
      <button onclick="window.controller.proyect()" class="col-12 p-0 btn-botton"></button>
      </div>
    </div>

    
    <button onclick="window.view.pru()" class="btn-right"></button>
    <button onclick="window.controller.dataUser()" class="btn-left"></button>`;
};


window.view.dataUser = () => {
  let divDataUser = document.getElementById('container');
  divDataUser.innerHTML =
    `<div class="row m-0 pt-2">
      <h1 class="col-12 text-center text-head">Perfil</h1>
    </div>
    <div class="row m-0 px-5">
      <div class="col-md-6 col-12 pt-md-5">
        <img src="src/img/dataUser.jpg" class="rounded-circle img-fluid py-3 p-md-5" alt="data-user">
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
    </div>
    <div class="row m-0 pt-2">
      <div class="ml-auto pr-5 py-4">
        <button class="col btn-back" onclick="window.controller.cover()">Regresar</button>
      </div>
    </div>`;
};


window.view.proyect01 = () => {
  let divProyect01 = document.getElementById('container');
  divProyect01.innerHTML =
    `<div class="container p-0 my-md-5">
      <div class="row m-0  fondo-proyectos">
        <div class="col-10">
          <div class="row m-0">
            <div class="col-12 pt-3">
              <h1 class="title-proy text-center">Cipher Cesar</h1>
            </div>
            <div class="col-12 col-md-6">
              <p class="descr-proy text-justify px-3 pt-3">
                  Este trabajo fue mi primer acercamiento a la tecnología, una vez en Laboratoria nos propusieron hacer una aplicación que sea capas de Cifrar y Descifrar mensajes, para usarlos en la planificación de una fiesta y que el festejado, debido a su curiosidad, no pueda acceder a ellos.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  Para el desarrollo se utilizó JavaScript, HTML y CSS.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://github.com/NatalyVerdugoNogue/scl-2018-01-foodmap" target="_blank">Git Hub</a>
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://natalyverdugonogue.github.io/scl-2018-01-foodmap/" target="_blank">App Deploy</a>
                </p>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcCipherCesar.png" alt="Proyecto-CipherCesar" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-2 fondo-slice nav-tot p-0">
          <ul class="nav flex-column py-4 list-tot">
            <li class="nav-item py-2  here">
              <a class="nav-link active" onclick="window.view.proyect01()">01</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect02()">02</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect03()">03</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect04()">04</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect05()">05</a>
            </li>
            <li class="py-2">
              <button class="col-8 btn-back-proy p-2" onclick="window.controller.cover()">
                <span class="vis-md text-back">Regresar</span>
                <i class="fas fa-undo icon-back vis-xl"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>`;
};

window.view.proyect02 = () => {
  let divProyect02 = document.getElementById('container');
  divProyect02.innerHTML =
    `<div class="container p-0 my-md-5">
      <div class="row m-0  fondo-proyectos">
        <div class="col-10">
          <div class="row m-0">
            <div class="col-12 pt-3">
              <h1 class="title-proy text-center">Food Map</h1>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcFoodMap.png" alt="Proyecto-FoodMap" class="img-fluid">
            </div>
            <div class="col-12 col-md-6">
              <p class="descr-proy text-justify px-3 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus
                perferendis nihil
                commodi cum
                laudantium fugiat. Rem dolore, explicabo, inventore, placeat accusamus impedit praesentium architecto
                tenetur nesciunt consectetur repudiandae. Delectus, vero.
                </p>
            </div>
          </div>
        </div>
        <div class="col-2 fondo-slice nav-tot p-0">
          <ul class="nav flex-column py-4 list-tot">
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect01()">01</a>
            </li>
            <li class="nav-item py-2 here">
              <a class="nav-link active" onclick="window.view.proyect02()">02</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect03()">03</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect04()">04</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect05()">05</a>
            </li>
            <li class="py-2">
              <button class="col-8 btn-back-proy p-2" onclick="window.controller.cover()">
                <span class="vis-md text-back">Regresar</span>
                <i class="fas fa-undo icon-back vis-xl"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>`;
};

window.view.proyect03 = () => {
  let divProyect02 = document.getElementById('container');
  divProyect02.innerHTML =
    `<div class="row m-0 row-container">
    <div class="col-12 col-md-10 m-0 m-md-auto p-0 img-nav01">
      <div class="row m-0 row-img-nav">
        <div class="col-10 p-0 pt-2">
          <div class="row m-0">
            <div class="col-12 pt-2">
              <h1 class="title-proy text-center">Pinterest</h1>
            </div>
            <div class="col-12 col-md-6 p-3">
              <p class="descr-proy text-justify px-3 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus
                perferendis nihil
                commodi cum
                laudantium fugiat. Rem dolore, explicabo, inventore, placeat accusamus impedit praesentium architecto
                tenetur nesciunt consectetur repudiandae. Delectus, vero.</p>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcPinterest.png" alt="Poryecto-Pinterest" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-2 p-0 nav-tot text-center tabla">
          <ul class="nav flex-column py-4">
            <li class="nav-item py-2">
              <a class="nav-link active" onclick="window.view.proyect01()">01</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect02()">02</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect03()">03</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" href="#">04</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" href="#">05</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" href="#">06</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" href="#">07</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" href="#">08</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" href="#">09</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" href="#">10</a>
            </li>
            <li class="py-2">
              <button class="col-8 btn-back-proy p-0" onclick="window.controller.cover()">
                <span class="vis-md text-back">Regresar</span>
                <i class="fas fa-undo icon-back vis-xl"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
};