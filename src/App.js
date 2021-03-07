import Folder from '../src/Container/Folder/Folder.js';
import './util/Event.js';

export default class App {

    $target = null;
    tab = null;
    tab1 = null;

    constructor($target) {
        this.$target = $target

        const $container = document.createElement('div');

        this.folder = new Folder($target);
        
        this.$target.appendChild($container);
    }
}