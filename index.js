let openModalEl = document.getElementById('open-modal')
let overlayEl = document.getElementById('overlay')
openModalEl.addEventListener('click', () => {
  overlayEl.style.display = 'block'
})

let closeModalEl = document.getElementById('close-modal')
closeModalEl.addEventListener('click', () => {
  overlayEl.style.display = 'none'
})
