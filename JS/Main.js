// Ejemplo de interactividad: mostrar/ocultar la sección de habilidades al hacer clic en un botón
const button = document.querySelector("#toggle-skills-btn");
const skillsSection = document.querySelector("#skills");

button.addEventListener("click", function() {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    button.textContent = "Ocultar habilidades";
  } else {
    skillsSection.style.display = "none";
    button.textContent = "Mostrar habilidades";
  }
});

// Continuación: agregar una funcionalidad de filtrado a la lista de proyectos
const projectsSection = document.querySelector("#projects");
const projectCards = projectsSection.querySelectorAll(".project");
const filters = projectsSection.querySelectorAll("input[name=filter]");

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("change", function() {
    const selectedFilter = this.value;
    for (let j = 0; j < projectCards.length; j++) {
      const project = projectCards[j];
      const projectType = project.dataset.type;
      if (selectedFilter === "all" || projectType === selectedFilter) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    }
  });
}
// Continuación: agregar una animación al hacer scroll a las secciones
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const windowTop = window.pageYOffset;
    const windowBottom = windowTop + window.innerHeight;
    if (windowTop >= sectionTop && windowTop <= sectionBottom) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  }
});
