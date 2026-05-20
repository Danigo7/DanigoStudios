 // ---------- NAVBAR ---------- //

const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

// ABRIR Y CERRAR MENÚ EN MODO RESPONSIVE (MOVIL)

toggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    toggle.textContent = "✕";
  } else {
    toggle.textContent = "☰";
  }

});

// CERRAR AL PULSAR UN LINK 
links.forEach(link => {
  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    toggle.textContent = "☰";

  });
});

// ---------- BASE GENERAL WEB ---------- //

//REVEAL

const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealObserver.observe(el));

// ---------------- SOBRE MI ------------------------- //

function loadScreen(section) {
  const screen = document.getElementById("screen");

  const content = {
    home: `
      <h3>Bienvenido 👋</h3>
      <br>
      <p>Selecciona una opción del menú</p>
      <img class="home-logo" alt="logo" title="logo" src="img/logo_danigo_studios_blanco.png">
    `,
    about: `
      <h3>Sobre mi</h3><br>
      <p>◉ Soy estudiante de Desarrollo de Aplicaciones Multiplataforma (DAM) con enfoque en desarrollo web y creación de interfaces modernas.</p>
      <br>
      <p>◉ Me interesa construir experiencias digitales limpias, rápidas e interactivas usando HTML, CSS y JavaScript.</p>
      <br>
      <p>◉ Actualmente estoy mejorando mis habilidades en frontend y explorando diseño UI, animaciones y desarrollo de proyectos propios..</p>
    `,
    cv: `
      <div class="cv-box">
        <h3>Currículum Español</h3>

           <div class="cv-download">
              <img src="img/pdf.png" alt="PDF icon">
              <a href="cv/curriculum.pdf" download="CV_Danigo_Studios.pdf">
                Descargar CV
              </a>
            </div>
      </div>
      <div class="cv-box">
        <h3>CV English</h3>

           <div class="cv-download">
              <img src="img/pdf.png" alt="PDF icon">
              <a href="cv/curriculum.pdf" download="CV_Danigo_Studios.pdf">
                Descargar CV
              </a>
            </div>
      </div>
    `,
    video: `
      <div class="video-box">
        <div class="video-switch">
          <button onclick="loadVideo(1)" class="video-btn">
            <img src="img/espana.png" alt="Video 1">
          </button>

          <button onclick="loadVideo(2)" class="video-btn">
            <img src="img/reino-unido.png" alt="Video 2">
          </button>
        </div>

        <div id="video-container">
          <video class="video-cv" controls>
            <source src="video/videocv.mp4" type="video/mp4">
            Tu navegador no soporta video.
          </video>
        </div>

      </div>
    `,
    futuro: `
      <h3> Futuro</h3>
      <br>
      <p>◉ Mi objetivo es seguir creciendo como desarrollador y explorar distintas áreas del software.</p>
      <br>
      <p>◉ Actualmente me interesa especialmente el desarrollo frontend, las interfaces modernas y la creación de experiencias digitales interactivas.</p>
      <br>
      <p>◉ También quiero aprender más sobre backend, arquitectura de aplicaciones y tecnologías modernas del ecosistema web.</p>
      <br>
      <p>◉ Este portfolio irá evolucionando junto conmigo y con los proyectos que construya en el futuro.</p>
    `,
    proyectos: `
      <div class="cv-box">
        <h3>WeMarry</h3>

           <div class="cv-download">
              <img src="img/bodatrivia.webp" alt="Boda trivia Icon">
              <a href="#bodatrivia">
                Ver Proyecto
              </a>
            </div>
      </div>
      <div class="cv-box">
        <h3>DanigoStudios</h3>

           <div class="cv-download">
              <img src="img/pdf.png" alt="PDF icon">
              <a href="#powGround">
                Ver Proyecto
              </a>
            </div>
      </div>
    `
  };

  // Animación de salida
  screen.style.opacity = 0;
  screen.style.transform = "translateY(10px)";

  setTimeout(() => {
    screen.innerHTML = content[section] || content.home;

    // Animación de entrada
    screen.style.opacity = 1;
    screen.style.transform = "translateY(0)";
  }, 150);
}

    // Videocurriculum
  
  function loadVideo(id) {
  const container = document.getElementById("video-container");

  const videos = {
    1: `<video class="video-cv" controls>
          <source src="video/videocv.mp4" type="video/mp4">
        </video>`,
    2: `<video class="video-cv" controls>
          <source src="video/videocv1.mov" type="video/mp4">
        </video>`
  };

  container.innerHTML = videos[id];

  document.querySelectorAll(".video-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".video-btn")[id - 1].classList.add("active");
}

// ------------------ PROYECTOS ----------------- //

const projects = [

  {
    title: "WeMarry",
    desc: "App para bodas donde los invitados hacen preguntas a los novios hasta que adivinan todas y reciben el regalo de la boda",
    image: "img/bodatrivia.png",
    stack: ["Java", "XML"],

    links: {
      live: "#",
      github: "#"
    }
  },

  {
    title: "DanigoStudios",
    desc: "Portfolio personal de presentación, donde te encuentras actualmente",
    image: "img/danigo-studios.png",
    stack: ["HTML", "CSS", "JAVASCRIPT"],

    links: {
      live: "#",
      github: "#"
    }
  }

];

let currentProject = 0;

function renderProject() {

  const tv = document.getElementById("tv-content");

  const p = projects[currentProject];

  tv.innerHTML = `

    <div class="project-header">

      <h3>${p.title}</h3>

      <p class="project-desc">${p.desc}</p>

    </div>

    <div class="project-media">
      <img src="${p.image}" alt="${p.title}">
    </div>

    <div class="project-stack">
      ${p.stack.map(skill => `<span>${skill}</span>`).join("")}
    </div>

    <div class="project-links">

      ${p.links?.live ? `
        <a href="${p.links.live}" target="_blank">
          🌐 Descubre Mas
        </a>
      ` : ""}

      ${p.links?.github ? `
        <a href="${p.links.github}" target="_blank">
          💻 GitHub
        </a>
      ` : ""}

    </div>

  `;
}

function nextProject() {
  currentProject++;

  if (currentProject >= projects.length) {
    currentProject = 0;
  }

  renderProject();
}

function prevProject() {
  currentProject--;

  if (currentProject < 0) {
    currentProject = projects.length - 1;
  }

  renderProject();
}

renderProject();

// ------------CONTACTO ------------------- //

//Formulario

document.querySelector(".contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    await fetch("/", {
      method: "POST",
      body: data
    });

    form.reset(); // limpia el formulario

    alert("Mensaje enviado correctamente ✔");

  } catch (error) {
    alert("Error al enviar el mensaje");
  }
});