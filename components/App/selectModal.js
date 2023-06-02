// CREATE WELCOME WINDOW

const createWelcome = () => {

  modalGeneral();
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const selectTemplate = document.getElementById('selectTemplate').content;
  const clone = selectTemplate.cloneNode(true);

  // Insert Fragment
  fragment.appendChild(clone);

  // Insert in modal
  modal.appendChild(fragment);

  // Add evento to close modal
  modal.querySelector('button').addEventListener('click', () => {
    modalGeneral();
    sessionStorage.selectMenu = 'true';
  });

}

// Inicialice
if( sessionStorage.selectMenu === undefined ){
  createWelcome();
}
