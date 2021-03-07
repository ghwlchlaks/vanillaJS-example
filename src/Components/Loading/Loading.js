export default class Loading {

    $target = null;

    constructor($target) {
        this.$target = $target;

        this.render();
    }

    setView = () => {
        const $loading = document.querySelector('.lds-circle');
        $loading.classList.remove('hidden');
    }

    setHidden = () => {
        const $loading = document.querySelector('.lds-circle');
        $loading.classList.add('hidden');
    }

    render = () => {
        const $div_loading = document.createElement('div');
        const $div_content = document.createElement('div');
        $div_loading.setAttribute('class', 'lds-circle hidden');
        $div_loading.appendChild($div_content);
        $div_content.innerHTML = 'loading...';

        this.$target.appendChild($div_loading);
    }

}