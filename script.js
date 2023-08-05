const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta= document.querySelector('.list-task')


button.addEventListener('click', adicionarTarefa)

let minhalistadeItens = []

function adicionarTarefa() {
    minhalistadeItens.push({
        tarefa:input.value,
        concluida:true,
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = ''
    
    minhalistadeItens.forEach((item,posicao) => {

    novaLi = 
    novaLi + `
     <li class="task ${ item.concluida && 'done'}">
    <img src="img/checked.png" alt="check-tarefa" onclick="concluirTarefa(${posicao})">
 <p>${item.tarefa}</p>
    <img src="img/trash.png" alt="lixeira" onclick="deletarItem(${posicao})">
    </li>
  `
})

  listaCompleta.innerHTML= novaLi

  localStorage.setItem('lista' , JSON.stringify(minhalistadeItens))
}

function concluirTarefa(posicao){
    minhalistadeItens[posicao].concluida =!minhalistadeItens[posicao].concluida
   
    mostrarTarefas()
}

function deletarItem(posicao){
    minhalistadeItens.splice( posicao, 1 )

    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

if (tarefasDoLocalStorage){
    minhalistadeItens=JSON.parse(tarefasDoLocalStorage)
}
}

    mostrarTarefas()


recarregarTarefas()
