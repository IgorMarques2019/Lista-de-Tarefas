let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')
let tarefas = []


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
}

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

// Deletar Tarefas
function delTarefas(indexTarefa) {
  tarefas.splice(indexTarefa, 1)
  renderTarefas()

}

buttonElement.onclick = adcTarefas;