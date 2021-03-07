import FolderDetail from '../../Components/FolderDetail/FolderDetail.js';
import Loading from '../../Components/Loading/Loading.js';

export default class Folder {

    $target = null;
    $modal = null;
    $loading = null;

    constructor($target) {
        this.$target = $target;
        this.$loading = new Loading($target);

        this.render();
    }

    render = () => {
        const $div_folder = document.createElement('div');

        this.$folder_detail = new FolderDetail($div_folder, this.$loading);

        this.$target.appendChild($div_folder);
    }
}