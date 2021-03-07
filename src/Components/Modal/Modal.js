export default class Modal {

    $target = null

    constructor($target) {
        this.$target = $target

        this.render();
    }

    setToggle = () => {
        const modal = document.querySelector('.modal');
        modal.classList.toggle('hidden');
    }

    setImagepath = (filepath) => {
        const modal = document.querySelector('#modal-img');
        const image_url = 'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public/'
        modal.setAttribute('src', image_url + this.getConvertFilepath(filepath));
    }

    getConvertFilepath = (filepath) => {
        return filepath.replace(/^\//, '');
    }

    render = () => {

        const $modal = document.createElement('div');
        const $modal_section = document.createElement('div');
        const $modal_img = document.createElement('img');

        $modal.setAttribute('class', 'modal hidden');
        $modal_img.setAttribute('id', 'modal-img')
        $modal_img.setAttribute('src', '');
        
        $modal.append($modal_section);
        $modal.append($modal_img);
        this.$target.appendChild($modal);
    }

}