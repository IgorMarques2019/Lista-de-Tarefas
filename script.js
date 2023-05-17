let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')
let tarefas = JSON.parse(localStorage.getItem('@listaTarefas')) || []

window.onload = renderTarefas();

// Adicionar tarefas na lista
function adcTarefas() {
  if (inputElement.value === '') {
    alert('Digite alguma tarefa ô animal!!')
    return false;
  } else {
    tarefas.push(inputElement.value)
    inputElement.value = '';
  }
  renderTarefas()
  salvarDados()
}

/**
 * Se o Input for vazio quero que alerte o usuário e depois pare de executar o if
 * Senão, quero que ele adicione o valor recebido no input na nossa lista tarefas criada no começo do código
 * Por fim quero que limpe  o input.
 * Depois de passar pelas condicionais quero que ele chame a funcção renderTarefas que terá como papel adicionar e renderizar nossas tarefas
 */



// Renderizar as tarefas na lista
function renderTarefas() {
  listElement.innerHTML = ''
  tarefas.map((task) => {
    let novo = document.createElement('li')
    let anchor = document.createElement('a')
    let pos = tarefas.indexOf(task)
    anchor.setAttribute('onclick', `delTarefas(${pos})`)

    anchor.innerText = 'Excluir'
    novo.innerHTML = `${task}`
    novo.appendChild(anchor)
    listElement.appendChild(novo)
  })

}

/** 
 * Limpei Todas as tarefas anteriormente de exemplo
 * Percorri nossa lista de tarefas criando nova li e novos botões excluir
 * Peguei o index da nossa tarefa e passei como argumento na função delTarefas
 */

// Deletar Tarefas
function delTarefas(indexTarefa) {
  tarefas.splice(indexTarefa, 1)
  renderTarefas()
  salvarDados()

}

buttonElement.onclick = adcTarefas;

function salvarDados() {
  localStorage.setItem('@listaTarefas', JSON.stringify(tarefas))
}
