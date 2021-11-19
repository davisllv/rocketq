import Modal from '../scripts/modal'

const modal = Modal()

//Pegar botões que existe class check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener('click', event => {
    console.log('Ola mundo')
    modal.open()
  })
})
//Pegar quando o marcar como lido for clicado
