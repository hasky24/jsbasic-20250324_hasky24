import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  elem = null;

  constructor() {
    this.render();
  }

  template() {
    return `
    <div class="modal">
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
          </h3>
        </div>

        <div class="modal__body">
        </div>
      </div>
    </div>
    `;
  }

  render() {
    this.elem = createElement(this.template);

    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.modal__close')) {
        this.close();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    });
  }

  setTitle(modalTitle) {
    return this.elem.querySelector('.modal__title').textContent = modalTitle;
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(node);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  }

  close() {
    this.elem.remove();
    document.body.classList.remove('is-modal-open');
    document.removeEventListener('keydown', this.close);
  }
}
