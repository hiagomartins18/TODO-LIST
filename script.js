const input = document.querySelector("form");
const todoBody = document.querySelector(".todo-content");


input.addEventListener("submit", (e) => {
  const variavel = document.querySelector(".variable");
  e.preventDefault();
  if (todoBody.children.length > 5) {
    modal2.show();
  } else {
    createTodo();
    variavel.innerHTML = todoBody.children.length;
  }
}); // Atribuindo a Função createTodo(), e incluindo condicionais.
function createTodo() {
  const todoBody = document.querySelector(".todo-content");
  let response = input.querySelector("input");
  let valor = response.value;

  if (valor == "") {
    response.classList.add("create");
    modal.show();
    return;
  } else {
    response.classList.remove("create");
  }

  const createLi = document.createElement("div");
  createLi.classList.add("todo-li");
  todoBody.appendChild(createLi);
  createLi.innerHTML = `
  <div class="check">
    <img src="./images/icon-check.svg" alt="" class="checkimg"/>
  </div>
  <p>${valor}</p>
  <div class="close">
    <img src="./images/icon-cross.svg" alt="" class="removeBtn"/>
  </div>`;
  response.value = "";

  let close = createLi.querySelector(".close");
  close.addEventListener("click", () => {
    createLi.remove();
    variavel.innerHTML = todoBody.children.length;
  });

  let check = createLi.querySelector(".check");
  let checkSpan = createLi.querySelector("p");
  check.addEventListener("click", () => {
    check.classList.toggle("completed");
    checkSpan.classList.toggle("addline");
  });

  const clearAll = document.querySelector('.info-clear');
  clearAll.addEventListener('click', (e) => {
    e.preventDefault();
    createLi.remove('todo-li');
    variavel.innerHTML = todoBody.children.length;
})
} // Cria o um item do TODO, e atribui função ao X e ao Check.


// Atribuindo um Evento aos POPUPS do TODO.
const modal = document.querySelector("dialog");
const btnModal = document.querySelector(".btnModal");
const modal2 = document.querySelector(".dialog2");
const btnModal2 = document.querySelector(".btnModal2");
btnModal.onclick = () => modal.close();
btnModal2.onclick = () => modal2.close();


// Funçao que conta a quantidade de items, e monstra no "Itens Left"
const variavel = document.querySelector(".variable");
if (todoBody.children.length == 0) {
  variavel.innerHTML = "0";
} else {
  variavel.innerHTML = todoBody.children.length;
}


// Função DARK MODE
const darkBtn = document.querySelector('.dark-btn');
darkBtn.addEventListener('click', () => {
  const darkImg = darkBtn.querySelector('img');
  document.body.classList.toggle('dark');

  if(document.body.classList == 'dark'){
    darkImg.setAttribute('src', './images/icon-sun.svg')
  }else if(document.body.classList == ''){
    darkImg.setAttribute('src', './images/icon-moon.svg')
  };
});

// Função Clear All
