(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    formEl: document.querySelector('.form'),
    backdropEl: document.querySelector('.backdrop'),
    iconlistEl: document.querySelector('.icon-list'),
  };

  refs.backdropEl.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add('is-hidden');
    }
  });

  refs.openModalBtn.forEach(elem => {
    elem.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    refs.modal.classList.toggle('is-hidden');
  }

  setTimeout(() => {
    refs.iconlistEl.style.transform = 'translateX(20%)';
  }, 5000);

  // const forms = document.querySelectorAll('form');
  // forms.forEach(form => {
  //   const formData = new FormData(form);
  //   const url = form.action || window.location.href;
  //   const method = form.method || 'POST';

  //   fetch(url, {
  //     method,
  //     body: formData,
  //   })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // });
})();
