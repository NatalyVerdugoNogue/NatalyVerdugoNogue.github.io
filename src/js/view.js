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
            <div class="col-12 pt-3 alt-xl">
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
                  <a href="https://github.com/NatalyVerdugoNogue/scl-2018-05-bc-core-am" target="_blank">Git Hub</a>
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://natalyverdugonogue.github.io/scl-2018-05-bc-core-am/" target="_blank">App Deploy</a>
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
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect06()">06</a>
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
            <div class="col-12 pt-3 alt-xl">
              <h1 class="title-proy text-center">Food Map</h1>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcFoodMap.png" alt="Proyecto-FoodMap" class="img-fluid">
            </div>
            <div class="col-12 col-md-6">
              <p class="descr-proy text-justify px-3 pt-3">
              Web-App que utiliza google-map API, en la que se puede filtrar restaurantes cercanos y mostrar información sobre ellos a través de un modal.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
              Desarrollado completamente en JavaScript, con consideraciones de diseño generales determinadas por <a href="https://github.com/NatalyVerdugoNogue/scl-2018-01-foodmap/blob/master/ReadmeLaboratoria.md" target="_blank">Laboratoria</a>, quien planteo el proyecto.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
                <a href="https://github.com/NatalyVerdugoNogue/scl-2018-01-foodmap" target="_blank">Git Hub</a>
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
                <a href="https://natalyverdugonogue.github.io/scl-2018-01-foodmap/" target="_blank">App Deploy</a>
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
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect06()">06</a>
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
  let divProyect03 = document.getElementById('container');
  divProyect03.innerHTML =
    `<div class="container p-0 my-md-5">
      <div class="row m-0  fondo-proyectos">
        <div class="col-10">
          <div class="row m-0">
            <div class="col-12 pt-3 alt-xl">
              <h1 class="title-proy text-center">Markdown Links</h1>
            </div>
            <div class="col-12 col-md-6">
              <p class="descr-proy text-justify px-3 pt-3">
                  Librería en JavaScript que desde un archivo markdown (.md), si este contiene enlaces, según lo requerido, mostrara los enlaces, la linea y el texto de todos los enlaces en el archivo.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  Desarrollado en Node.js y testeado con Jest.js.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://github.com/NatalyVerdugoNogue/scl-2018-01-FE-markdown" target="_blank">Git Hub</a>
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://www.npmjs.com/package/md-links-nvn" target="_blank">npm</a>
                </p>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcCipherCesar.png" alt="Proyecto-MarkdownLinks" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-2 fondo-slice nav-tot p-0">
          <ul class="nav flex-column py-4 list-tot">
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect01()">01</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect02()">02</a>
            </li>
            <li class="nav-item py-2 here">
              <a class="nav-link active" onclick="window.view.proyect03()">03</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect04()">04</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect05()">05</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect06()">06</a>
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

window.view.proyect04 = () => {
  let divProyect04 = document.getElementById('container');
  divProyect04.innerHTML =
    `<div class="container p-0 my-md-5">
      <div class="row m-0  fondo-proyectos">
        <div class="col-10">
          <div class="row m-0">
            <div class="col-12 pt-3 alt-xl">
              <h1 class="title-proy text-center">Easy Register</h1>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcEasyRegister.png" alt="Proyecto-EasyRegister" class="img-fluid">
            </div>
            <div class="col-12 col-md-6">
              <p class="descr-proy text-justify px-3 pt-3">
              Web-App para realizar el registro de visitantes en un complejo de cowork o residencial y facilitar el trabajo de conserjería.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
              Desarrollado en JavaScript, HTML y CSS; utilizando Firebase como base de datos Cloud.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
                <a href="https://github.com/NatalyVerdugoNogue/scl-2018-01-ProyectoFinalCore" target="_blank">Git Hub</a>
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
                <a href="https://finalcorelaboratoria.firebaseapp.com/" target="_blank">App Deploy</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-2 fondo-slice nav-tot p-0">
          <ul class="nav flex-column py-4 list-tot">
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect01()">01</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect02()">02</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect03()">03</a>
            </li>
            <li class="nav-item py-2  here">
              <a class="nav-link active" onclick="window.view.proyect04()">04</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect05()">05</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect06()">06</a>
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

window.view.proyect05 = () => {
  let divProyect05 = document.getElementById('container');
  divProyect05.innerHTML =
    `<div class="container p-0 my-md-5">
      <div class="row m-0  fondo-proyectos">
        <div class="col-10">
          <div class="row m-0">
            <div class="col-12 pt-3 alt-xl">
              <h1 class="title-proy text-center">Memory Cards</h1>
            </div>
            <div class="col-12 col-md-6">
              <p class="descr-proy text-justify px-3 pt-3">
                  Juego de memoria de cartas que muestra 8 cartas sobre la mesa, aleatorias, todas con pareja, una vez encontrada su pareja desaparecen.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  Desarrollado completamente en Angular y utilizando Bootstrap 4.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://github.com/NatalyVerdugoNogue/desafioLaboratoria2" target="_blank">Git Hub</a>
                </p>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcCipherCesar.png" alt="Proyecto-MemoryCards" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-2 fondo-slice nav-tot p-0">
          <ul class="nav flex-column py-4 list-tot">
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect01()">01</a>
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
            <li class="nav-item py-2  here">
              <a class="nav-link active" onclick="window.view.proyect05()">05</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect06()">06</a>
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

window.view.proyect06 = () => {
  let divProyect06 = document.getElementById('container');
  divProyect06.innerHTML =
    `<div class="container p-0 my-md-5">
      <div class="row m-0  fondo-proyectos">
        <div class="col-10">
          <div class="row m-0">
            <div class="col-12 pt-3 alt-xl">
              <h1 class="title-proy text-center">Pinterest</h1>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcPinterest.png" alt="Proyecto-Pinterest" class="img-fluid">
            </div>
            <div class="col-12 col-md-6">
              <p class="descr-proy text-justify px-3 pt-3">
              Replica de Pinteres realizada paralelamente en JavaScript y Angular, ambos utilizando Bootstrap 4. En el que se consulta una API de imágenes que son cargadas siguiendo la estructura de Pinterest.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
              El modelo desarrollado en JavaScript es responsive, y ademas se puede realizar una búsqueda de imágenes por tema.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
                <a href="https://github.com/NatalyVerdugoNogue/pinterest" target="_blank">Git Hub</a>
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
              El modelo desarrollado en angular tiene una barra de palabras claves con colores al azar, y al cargar 20 imágenes y hacer scroll al final cargan 20 imágenes mas.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
                <a href="https://github.com/NatalyVerdugoNogue/desafioLaboratoria6" target="_blank">Git Hub</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-2 fondo-slice nav-tot p-0">
          <ul class="nav flex-column py-4 list-tot">
            <li class="nav-item py-2">
              <a class="nav-link" onclick="window.view.proyect01()">01</a>
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
            <li class="nav-item py-2 here">
              <a class="nav-link active" onclick="window.view.proyect06()">06</a>
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