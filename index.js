const openModalEl = document.getElementById('open-modal')
const overlayEl = document.getElementById('overlay')
openModalEl.addEventListener('click', () => {
  overlayEl.style.display = 'block'
  document.getElementById('close-modal').addEventListener('click', () => {
    overlayEl.style.display = 'none'
  })
})
