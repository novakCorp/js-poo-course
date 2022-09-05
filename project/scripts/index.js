import Curso from "./classes/Curso.js";

// Instancia un elemento del DOM
const elem = document.getElementById("curso");

// Imprime un curso en el DOM
function mostrarCurso(curso) {
  const hijo = document.createElement("div");
  hijo.classList.add("card");
  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}"  />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
        <div class="s-center">
            <span class="small s-center"> Cantidad de clases: ${curso.getClases()}</span>
        </div>
    </div>
  `;

  elem.appendChild(hijo);
}

// Getting the form
const formulario = document.getElementById("formCursos");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const target = e.target;
  const curso = new Curso(
    target.nombreCurso.value,
    target.posterCurso.value,
    target.clasesCurso.value
  );
  mostrarCurso(curso);
});
