document.addEventListener('DOMContentLoaded', (event) => {
    let component = document.querySelector("[data-ctrl='card']");
    new Card(component);
})

class Card {
    constructor(el) {
        this.root = el;
        this.btn = this.root.querySelector('.js-btn');
        this.error = this.root.querySelector('.text-danger');
        this.object = [{name: 'name', title: 'title1'}, {name: 'name', title: 'title2'},{name: 'name', title: 'title3'}];
        this.init();
    }

    init() {
        this.renderCard();
        this.selectCard();
        this.renderCard();
        this.selectCard();
    }

    renderCard() {
        for (let i = 0; i < this.object.length; i++) {
            this.createElement(this.object[i].name, this.object[i].title);
        }
    }

    renderErrror() {
        let error = document.createElement('div');
        error.classList.add('text-danger');
        error.innerHTML = 'Wybierz jedną opcję';
        this.root.appendChild(error);
    }

    selectCard() {
        let input = this.root.querySelectorAll('input');
        let clickHandler = () => {
            for (let i = 0; i < input.length; i++) {
                if (input[i].checked === true) {
                    console.log(input[i].value)
                }
            }
            
        }
        this.btn.addEventListener('click', clickHandler);
    }

    createElement(name, title) {
        let label = document.createElement('label');
        let input = document.createElement('input');
        let div = document.createElement('div');
        input.setAttribute('type', 'radio');
        input.classList.add('card-input-element', 'd-none');
        input.setAttribute('name', 'cert');
        input.setAttribute('value', title);
        div.classList.add('card', 'card-body', 'bg-light', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center');
        div.innerHTML = name
        label.appendChild(input);
        label.appendChild(div);
        this.root.appendChild(label);
    }
}
