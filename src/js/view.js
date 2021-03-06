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
      <button onclick="window.controller.proyect()" class="col-12 p-0 btn-botton btn-cover"></button>
      </div>
    </div>

    
    <button onclick="window.controller.contact()" class="btn-right btn-cover"></button>
    <button onclick="window.controller.dataUser()" class="btn-left btn-cover"></button>`;
};


window.view.dataUser = () => {
  let divDataUser = document.getElementById('container');
  divDataUser.innerHTML =
    `<div class="row m-0 pt-2">
      <h1 class="col-12 text-center text-head">Perfil</h1>
    </div>
    <div class="row m-0 pt-2">
      <div class="col-md-4 col-12 m-0 px-3 pt-5 pb-3">
        <div class="row m-0">
          <div class="col-12 pt-md-5 p-0 pb-md-5 pb-3">
            <img src="src/img/dataUser.jpg" class="rounded-circle img-fluid p-0" alt="data-user">
          </div>
          <div class="col-8 pr-5 py-5 m-auto v-xs">
            <button class="col btn-perfil" onclick="window.controller.cover()">Regresar</button>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-12 px-4">
        <div class="row m-0">
          <div class="col-12 pt-md-5 p-0 pb-md-5 pb-3">
            <h1 class="text-center text-title pb-2">Nataly Verdugo Nogue</h1>
            <p class="text-user text-justify">
              Soy Front-End Developer engrasada de Laboratoria, Ingeniera Civil Química y licenciada en ciencias.
            </p>
            <p class="text-user text-justify">
              He trabajado en el Retail, como Profesora y en la industria de la pintura como jefe de planta interina;
              pero el
              mundo de la tecnología siempre estuvo en mi vida, llevándome a estudiar en <a href="https://www.laboratoria.la/"
                target="_blank">Laboratoria.</a>
            </p>
            <p class="text-user text-justify">
              Ahí aprendí JavaScript,HTML,CSS, Angular y Node.js.
            </p>
            <p class="text-user text-justify">
              También he utilizado herramientas como Bootstrap 4 y Jest.js, Mocha.js y Chai.js.
            </p>
            <p class="text-user text-justify">
              Ademas utilice plataformas y tecnologías para el desarrollo como Firebase, git, GitHub, npm entre otras.
            </p>
            <p class="text-user text-justify">
              Destacando la utilización de metodologías Agile y de TDD (Test-driven development).
            </p>
            <p class="text-user text-justify">
              Mi formación académica me llevo a evaluar y optimizar procesos, diseñar y conducir experimentos, así como
              también
              la capacidad para analizar e interpretar datos; habilidades que me han permitido destacar en la
              implementación
              de
              lógicas algorítmica al momento del desarrollo.
            </p>
            <p class="text-user text-justify">
              Laboratoria me sirvió para embarcarme en un viaje por el desarrollo de software, aspirando a mejorar día a
              día
              mis habilidades y conocimientos, para que esta travesía no termine.
            </p>
          </div>
          <div class="col-8 pr-5 pt-2 pb-5 m-auto v-xl">
            <button class="col btn-perfil" onclick="window.controller.cover()">Regresar</button>
          </div>
        </div>
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
                <p class="descr-proy text-justify px-3">
                  Para el desarrollo se utilizó JavaScript, HTML y CSS.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://github.com/NatalyVerdugoNogue/CIPHER-CESAR" target="_blank">
                    <i class="far fa-file-code"></i>
                    Ver código en Git Hub
                  </a>
                </p>
                <p class="descr-proy text-justify px-3">
                  <a href="https://natalyverdugonogue.github.io/CIPHER-CESAR/" target="_blank">
                  <i class="fas fa-laptop-code"></i>
                   Probar aplicación
                  </a>
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
            <li class="py-3">
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
              <p class="descr-proy text-justify px-3">
              Desarrollado completamente en JavaScript, con consideraciones de diseño generales determinadas por <a href="https://github.com/NatalyVerdugoNogue/scl-2018-01-foodmap/blob/master/ReadmeLaboratoria.md" target="_blank">Laboratoria</a>, quien planteo el proyecto.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
                <a href="https://github.com/NatalyVerdugoNogue/FoodMap" target="_blank">
                  <i class="far fa-file-code"></i>
                    Ver código en Git Hub
                </a>
              </p>
              <p class="descr-proy text-justify px-3">
                <a href="https://natalyverdugonogue.github.io/FoodMap/" target="_blank">
                <i class="fas fa-laptop-code"></i>
                   Probar aplicación
                </a>
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
            <li class="py-3">
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
                  Librería en JavaScript que desde un archivo markdown (.md), si este contiene enlaces, según lo requerido, mostrara los links, la linea y el texto.
                </p>
                <p class="descr-proy text-justify px-3">
                  Desarrollado en Node.js y testeado con Jest.js.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://github.com/NatalyVerdugoNogue/Markdown" target="_blank">
                    <i class="far fa-file-code"></i>
                     Ver código en Git Hub
                  </a>
                </p>
                <p class="descr-proy text-justify px-3">
                  <a href="https://www.npmjs.com/package/md-links-nvn" target="_blank">
                  <i class="fas fa-laptop-code"></i>
                   Ver aplicación en npm
                  </a>
                </p>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcMarkdown.png" alt="Proyecto-MarkdownLinks" class="img-fluid">
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
            <li class="py-3">
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
              <p class="descr-proy text-justify px-3">
              Desarrollado en JavaScript, HTML y CSS; utilizando Firebase como base de datos Cloud.
              </p>
              <p class="descr-proy text-justify px-3 pt-3">
                <a href="https://github.com/NatalyVerdugoNogue/EasyRegister" target="_blank">
                  <i class="far fa-file-code"></i>
                    Ver código en Git Hub
                </a>
              </p>
              <p class="descr-proy text-justify px-3">
                <a href="https://finalcorelaboratoria.firebaseapp.com/" target="_blank">
                <i class="fas fa-laptop-code"></i>
                   Probar aplicación
                </a>
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
            <li class="py-3">
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
                <p class="descr-proy text-justify px-3">
                  Desarrollado completamente en Angular y utilizando Bootstrap 4.
                </p>
                <p class="descr-proy text-justify px-3 pt-3">
                  <a href="https://github.com/NatalyVerdugoNogue/MemoryCard" target="_blank">
                    <i class="far fa-file-code"></i>
                     Ver código en Git Hub
                  </a>
                </p>
                <p class="descr-proy text-justify px-3">
                  <a href="https://memorycard-deb96.firebaseapp.com/" target="_blank">
                  <i class="fas fa-laptop-code"></i>
                    Probar aplicación
                  </a>
                </p>
            </div>
            <div class="col-12 col-md-6">
              <img src="src/img/opcMemoryCard.png" alt="Proyecto-MemoryCards" class="img-fluid">
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
            <li class="py-3">
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
              <p class="descr-proy text-justify px-3 pt-2">
              El modelo desarrollado en JavaScript es responsive, y ademas se puede realizar una búsqueda de imágenes por tema.
              </p>
              <p class="descr-proy text-justify px-3">
                <a href="https://github.com/NatalyVerdugoNogue/Pinterest-JS" target="_blank">
                  <i class="far fa-file-code"></i>
                    Ver código en Git Hub
                </a>
              </p>
              <p class="descr-proy text-justify px-3">
                <a href="https://natalyverdugonogue.github.io/Pinterest-JS/" target="_blank">
                <i class="fas fa-laptop-code"></i>
                  Probar aplicación
                </a>
              </p>
              <p class="descr-proy text-justify px-3 pt-2">
              El modelo desarrollado en angular tiene una barra de palabras claves con colores al azar, y al cargar 20 imágenes y hacer scroll al final cargan 20 imágenes mas.
              </p>
              <p class="descr-proy text-justify px-3">
                <a href="https://github.com/NatalyVerdugoNogue/Pinterest-Angular" target="_blank">
                  <i class="far fa-file-code"></i>
                    Ver código en Git Hub
                </a>
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
            <li class="py-3">
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


window.view.contact = () => {
  let divContact = document.getElementById('container');
  divContact.innerHTML =
    `<div class="row m-0 pt-2">
      <h1 class="col-12 text-center text-head">Contactame</h1>
    </div>
    <div class="row m-0 pt-2 font-tot">
      <div class="col-md-6 col-12 m-0 px-5 pb-3 text-tot">
        <div class="row m-0">
          <p class="col-12 text-a text-justify p-0 pl-3 pt-3">
            <a class="a-contact" href="https://github.com/NatalyVerdugoNogue" target="_blank">
              <i class="i-contact fab fa-github col-2"></i>
              Ve mis proyectos en GitHub
            </a>
          </p>
          <p class="col-12 text-a text-justify p-0 pl-3 pt-3">
            <a class="a-contact" href="src/documents/CVNatalyVerdugo.pdf" download="CVNatalyVerdugo.pdf" target="_blank">
              <i class="i-contact fas fa-file-alt col-2"></i>
              Descarga mi curriculum
            </a>
          </p>
          <p class="col-12 text-a text-justify p-0 pl-3 pt-3">
            <a class="a-contact" href="https://www.linkedin.com/in/nataly-verdugo/" target="_blank">
              <i class="i-contact fab fa-linkedin col-2"></i>
              Conecta conmigo en Linkedin
            </a>
          </p>
        </div>
      </div>

      <div class="col-md-6 col-12 px-4">
        <div class="row m-0">
          <div class="col-12">
            <div class="container">
              <div class="row">
                <div class="col-12 form-group">
                  <label class="text-form">
                    Nombre:
                  </label>
                  <input class="form-control" type="text" id="fromname">
                </div>
                <div class="col-12 form-group">
                  <label class="text-form">
                    Asunto:
                  </label>
                  <input class="form-control" type="text" id="subject">
                </div>
                <div class="col-12 form-group">
                  <label class="text-form">
                    Correo:
                  </label>
                  <input class="form-control" type="email" id="fromemail">
                </div>
                <div class="col-12 form-group">
                  <label class="text-form">
                    Mensaje:
                  </label>
                  <textarea class="form-control" id="message"></textarea>
                </div>
                <div class="col-12 text-center pt-4">
                  <button id="btnform" onclick="window.email.emailajs()" class="btn btn-send-mail font-tot px-4">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-5 col-md-2 mr-auto offset-1 py-3">
        <button class="col btn-perfil" onclick="window.controller.cover()">Regresar</button>
      </div>
    </div>`;
};
