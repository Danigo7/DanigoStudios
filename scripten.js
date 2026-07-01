 // -------------------- NAVBAR -------------------- //

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

// -------------------- BASE GENERAL WEB -------------------- //

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

// -------------------- SOBRE MI -------------------- //

function loadScreen(section) {
  const screen = document.getElementById("screen");

  const content = {
    home: `
      <h3>Welcome 👋</h3>
      <br>
      <p>Select an option from the menu</p>
      <img class="home-logo" alt="logo" title="logo" src="img/logo_danigo_studios_blanco.png">
    `,
    about: `
      <h3>About Me</h3><br>
      <p>◉ I am a Multiplatform Application Development (DAM) student focused on web development and creating modern user interfaces.</p>
      <br>
      <p>◉ I am interested in building clean, fast, and interactive digital experiences using HTML, CSS, and JavaScript.</p>
      <br>
      <p>◉ I am currently improving my frontend skills and exploring UI design, animations, and personal project development.</p>
    `,
    cv: `
      <div class="cv-box">
        <h3>Currículum Español</h3>

           <div class="cv-download">
              <img src="img/pdf.png" alt="PDF icon">
              <a href="cv/curriculum.pdf" download="CV_Danigo_Studios.pdf">
                Download CV
              </a>
            </div>
      </div>
      <div class="cv-box">
        <h3>CV English</h3>

           <div class="cv-download">
              <img src="img/pdf.png" alt="PDF icon">
              <a href="cv/curriculum.pdf" download="CV_Danigo_Studios.pdf">
                Download CV
              </a>
            </div>
      </div>
    `,
    video: `
      <div class="video-box">
        <div class="video-switch">
          <button onclick="loadVideo(1)" class="video-btn">
            <img src="img/espana.png" alt="Video Español">
          </button>

          <button onclick="loadVideo(2)" class="video-btn">
            <img src="img/reino-unido.png" alt="Video English">
          </button>
        </div>

        <div id="video-container">
          <video class="video-cv" controls>
            <source src="video/videocv.mp4" type="video/mp4">
            Your browser does not support video.
          </video>
        </div>

      </div>
    `,
    futuro: `
      <h3>Future</h3>
      <br>
      <p>◉ My goal is to continue growing as a developer and explore different areas of software development.</p>
      <br>
      <p>◉ I am currently especially interested in frontend development, modern interfaces, and creating interactive digital experiences.</p>
      <br>
      <p>◉ I also want to learn more about backend development, application architecture, and modern technologies within the web ecosystem.</p>
      <br>
      <p>◉ This portfolio will continue evolving alongside me and the projects I build in the future.</p>
    `,
    proyectos: `
      <div class="cv-box">
        <h3>WeMarry</h3>

           <div class="cv-download">
              <img src="img/bodatrivia.webp" alt="WeMarry Icon">
              <a href="#bodatrivia">
                See Proyect
              </a>
            </div>
      </div>
      <div class="cv-box">
        <h3>DanigoStudios</h3>

           <div class="cv-download">
              <img src="img/logo_danigo_studios_blanco.png" alt="Logo Danigo Studios">
              <a href="https://danigostudios.netlify.app/">
                See Proyect
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
          <source src="video/videocv.mp4" type="video/mp4">
        </video>`
  };

  container.innerHTML = videos[id];

  document.querySelectorAll(".video-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".video-btn")[id - 1].classList.add("active");
}

// -------------------- PROYECTOS -------------------- //

const projects = [

  
  {
    title: "Tenaskis",
    desc: "Website for a company specializing in handcrafted ski manufacturing, designed with a Supabase database and a CMS admin panel. Currently in development.",
    image: "img/tena-skis.png",
    stack: ["REACT", "TYPESCRIPT", "JAVASCRIPT", "NEXTJS", "SUPABASE", "TAILWINDCSS", "HTML", "CSS", "SQL"],

    links: {
      live: "https://tenaskis.netlify.app",
      github: "https://github.com/Danigo7/tenaski-web"
    }
  },
  
  {
    title: "WeMarry",
    desc: "Wedding app where guests answer questions about the couple until they guess them all and unlock the wedding gift experience.",
    image: "img/bodatrivia.png",
    stack: ["Java", "XML"],

    links: {
      live: "#",
      github: "#"
    }
  },

  {
    title: "DanigoStudios",
    desc: "Personal portfolio website showcasing who I am, my skills, and what I am currently working on.",
    image: "img/danigo-studios.png",
    stack: ["HTML", "CSS", "JAVASCRIPT"],

    links: {
      live: "https://danigostudios.netlify.app",
      github: "https://github.com/Danigo7/DanigoStudios"
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
          🌐 Discover More
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

// -------------------- CONTACTO -------------------- //

//Formulario

document.querySelector(".contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = new FormData(form);

  // IMPORTANTE: Netlify necesita el form-name también aquí
  data.append("form-name", "contact");

  try {
    await fetch("/", {
      method: "POST",
      body: new URLSearchParams(data).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    form.reset();
    showToast("Message sent successfully ✔");

  } catch (err) {
    showToast("Error sending message ❌");
  }
});

// -------------------- TOAST -------------------- //

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// -------------------- BOTON SUBIR -------------------- //

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Mostrar / ocultar botón

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }

});

// Subir arriba suave

scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});