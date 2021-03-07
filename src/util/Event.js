window.addEventListener('keydown', (event) => {
    
    const modal = document.querySelector('.modal');
    const isHiddenModal = modal.classList.contains('hidden');
    if (event.key === 'Escape' && isHiddenModal === false) {
        modal.classList.toggle('hidden');
    }
    
})