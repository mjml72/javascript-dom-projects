const inputTarea = document.getElementById("input-tarea");
const addTarea = document.getElementById("add-tarea");
const taskList = document.getElementById("task-list");

addTarea.addEventListener("click", crearTarea);

inputTarea.addEventListener("keydown", function (e) {
   if(e.key == "Enter"){
    crearTarea();
   }
});

function crearTarea(e) {


    if(inputTarea.value) {


        let tarea = document.createElement("div");
        tarea.classList.add("tarea");

        let texto = document.createElement("p");
        texto.innerText = inputTarea.value;
        
        let icons = document.createElement("div");
        icons.classList.add("icons");

        let completar = document.createElement("span");
        completar.classList.add("material-symbols-outlined", "tarea-hecha");
        completar.innerText = "done";
        completar.addEventListener("click", completarTarea)

        let borrar = document.createElement("span");
        borrar.classList.add("material-symbols-outlined", "borrar-tarea");
        borrar.innerText = "delete";
        borrar.addEventListener("click", borrarTarea);

        icons.append(completar, borrar);

        tarea.append(texto, icons);

        taskList.appendChild(tarea);

        inputTarea.value = "";

    }else {
        alert("Escribe una tarea");
    }

}

function completarTarea(e) {
    
    let tarea = e.target.parentElement.parentElement;
    tarea.classList.toggle("done");

}

function borrarTarea(e) {
    let tarea = e.target.parentElement.parentElement;
    tarea.remove();
}


