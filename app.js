//selectors
const shareBtn = document.getElementById('share-btn');
const modal = document.getElementById('modal');
const shareModal = document.querySelector('.modal-share');

//event listeners
shareBtn.addEventListener('click', shareButtonClickHandler);
shareModal.addEventListener('click', shareModalClickHandler);

modal.classList.add('hidden');

//functions
function shareButtonClickHandler(e){
    modal.classList.toggle('hidden');
}

function shareModalClickHandler(e){
   modal.classList.add('hidden');
}