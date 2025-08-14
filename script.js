// Botão tema
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    toggleButton.textContent = '🐼';
  } else {
    toggleButton.textContent = '🐻';
  }
});

// Modal Equipe
const modalEquipe = document.getElementById('modalEquipe');
const abrirModalEquipe = document.getElementById('abrirModalEquipe');
const fecharModalEquipe = document.getElementById('fecharModalEquipe');

abrirModalEquipe.onclick = () => {
  modalEquipe.style.display = 'block';
}

fecharModalEquipe.onclick = () => {
  modalEquipe.style.display = 'none';
}

window.onclick = (event) => {
  if (event.target === modalEquipe) {
    modalEquipe.style.display = 'none';
  }
}
