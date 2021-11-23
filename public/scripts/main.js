import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões com o checkl
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // Adicionar a escuta
  button.addEventListener('click', handleClick)
})

const deleteButton = document.querySelectorAll('.actions a.delete')
deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()

  const roomId = document.querySelector('#room-id').dataset.id
  const slug = check ? 'check' : 'delete'
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/:${questionId}/:${slug}`)

  modalTitle.innerHTML = check ? 'Marcar como Lida' : 'Excluir essa pergunta'
  modalDescription.innerHTML = check
    ? 'Tem certeza que desejar marcar como lida esta pergunta'
    : 'Tem certeza que desejar excluir esta pergunta'
  modalButton.innerHTML = check ? 'Sim, marcar como lida' : 'Sim, excluir'
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}
