document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');



  document.body.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('btn--accent')) openModal();
    if (target.classList.contains('modal__close') || target.classList.contains('modal')) closeModal(target);
  })

  function openModal () { 
    modal.classList.add('active')
  }

  function closeModal(target) {
    const parent = target.closest('.modal');

    parent.classList.remove('active');
  }

})