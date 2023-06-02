// CREATE SELECT MODAL

const createSelect = () => {

  modalGeneral();
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const selectTemplate = document.getElementById('selectTemplate').content;
  const clone = selectTemplate.cloneNode(true);

  // Add black style
  modal.classList.add("w3-black");
  
  // Insert Fragment
  fragment.appendChild(clone);

  // Insert in modal
  modal.appendChild(fragment);

  // Add event to close modal
  modal.querySelector('#closeSM').addEventListener('click', () => {
    modal.classList.remove("w3-black");
    modalGeneral();
    //sessionStorage.selectMenu = 'true';
  });

}

// Inicialice
//if( sessionStorage.selectMenu === undefined ){
  createSelect();
//}
