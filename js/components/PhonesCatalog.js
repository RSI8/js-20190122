class Component {
  constructor({ element }) {
    this._element = element;
  }

  show() {
    this._element.hidden = false;
  }

  hide() {
    this._element.hidden = true;
  }
}

export default class PhonesCatalog extends Component {
  constructor({ element, phones, onPhoneSelected }) {
    super({ element });

    this._props = {
      phones: phones,
      onPhoneSelected: onPhoneSelected,
    };

    this._render();
    this._initEventListeners();
  }

  _initEventListeners() {
    this._element.addEventListener('click', (event) => {
      const detailsLink = event.target.closest('[data-element="DetailsLink"]');

      if (!detailsLink) {
        return;
      }

      this._props.onPhoneSelected(detailsLink.dataset.phoneId);
    });
  }

  _render() {
    this._element.innerHTML = `
      <ul class="phones">
        ${ this._props.phones.map(phone => `
        
          <li class="thumbnail">
            <a
              data-element="DetailsLink"
              data-phone-id="${phone.id}"
              href="#!/phones/${phone.id}"
              class="thumb"
            >
              <img alt="${phone.name}" src="${phone.imageUrl}">
            </a>
  
            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success">
                Add
              </a>
            </div>
  
            <a
              data-element="DetailsLink"
              data-phone-id="${phone.id}"
              href="#!/phones/${phone.id}"
            >
              ${phone.name}
            </a>
            
            <p>${phone.snippet}</p>
          </li>
        
        `).join('') }
      </ul>
    `;
  }
}




