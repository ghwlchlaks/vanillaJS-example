import {getDetail, getMain} from '../../Api/api.js';
import Header from '../Header/Header.js';
import Modal from '../Modal/Modal.js';
import {getStorage, setStorage} from '../../util/Storage.js';

export default class Folder {

    $target = null;
    $modal = null;
    data = null;
    loading = null;
    header = [];

    constructor($target, $loading) {
        this.$target = $target;
        this.$loading = $loading;

        this.init();
    }

    init = async() => {
        this.$loading.setView();
        const data = await this.getMainInfo();
        this.$loading.setHidden();
        this.setState(data);
    }

    getMainInfo = async() => {
        let savedData = JSON.parse(getStorage('cat-info'));
        let newSaveData;
        let data;

        this.$loading.setView();
        if (savedData === null || savedData.hasOwnProperty('root') === false) {
            data = await getMain().then((response) => {
                if (response.status === true) {
                    return response.data;
                } else {
                    return response.message;
                }
            });

            newSaveData = {
                ...savedData, 
                ...{'root': data}
            };
            setStorage('cat-info', JSON.stringify(newSaveData));
        } else {
            data = savedData['root'];
        }

        this.$loading.setHidden();
        return data;
    }

    setState = (data) => {
        this.data = data;
        
        this.render();
    }

    onDirectoryClickEvent = async(id, name) => {
        this.$loading.setView();

        const data = await this.getDetailInfo(id);
        this.$loading.setHidden();
        this.header.push({'id': id, 'name': name})
        this.setState(data);
    }

    getDetailInfo = async(id) => {

        this.$loading.setView();
        let savedData = JSON.parse(getStorage('cat-info'));
        let newSaveData;
        let data;

        if (savedData === null || savedData.hasOwnProperty(id) === false) {
            data = await getDetail(id).then((response) => {
                if (response.status === true) {
                    return response.data;
                } else {
                    return response.message;
                }
            });

            newSaveData = {
                ...savedData, 
                ...{id: data}
            };
            setStorage('cat-info', JSON.stringify(newSaveData));
        } else {
            data = savedData[id];
        }

        this.$loading.setHidden();
        return data;
    }

    onFileClickEvent = (filepath) => {
        this.$modal.setImagepath(filepath);
        this.$modal.setToggle();
    }

    onPrevClickEvent = async() => {
        const $div_filepath = document.getElementById('filepath');
        const $span_children = $div_filepath.children;
        const $span_target_children = $span_children[$span_children.length - 2];
        if ($span_target_children.length < 1) {
            return;
        }

        const data_id = parseInt($span_target_children.getAttribute('data-id'), 10);
        if (isNaN(data_id) === true) {
            // root
            const data = await this.getMainInfo();
            this.header.splice(0, this.header.length - 1);
            this.setState(data);
        } else {
            // prev id
            const data = await this.getDetailInfo(data_id);
            this.header.splice(this.header.length -1, 1);
            this.setState(data);
        }

    }

    render = () => {
        const data = this.data;
        const header = this.header;
        console.log(data);

        this.$target.innerHTML = '';

        this.$modal = new Modal(this.$target);
        this.$header = new Header(this.$target, header);

        if (header.length > 0) {
            const $button_prev = document.createElement('button');
            $button_prev.innerHTML = '<';
            $button_prev.addEventListener('click', this.onPrevClickEvent);
            this.$target.appendChild($button_prev);
        }
        
        const $div_section = document.createElement('div');
        $div_section.id = 'folder-section';

        data.forEach(item => {
            const $div_maincontent = document.createElement('div');
            const $div_content = document.createElement('div');
            const $div_description = document.createElement('div');

            $div_maincontent.className = 'folder-item';
            $div_maincontent.innerHTML = item.type;
            $div_description.innerHTML = item.name;
            
            if (item.type === 'DIRECTORY') {
                $div_maincontent.addEventListener('click', () => {this.onDirectoryClickEvent(item.id, item.name)});
            } else if (item.type === 'FILE') {
                $div_maincontent.addEventListener('click', () => {this.onFileClickEvent(item.filePath)});
            } else {
                // 지원하지않는 타임
                return;
            }
            

            $div_maincontent.appendChild($div_content);
            $div_maincontent.appendChild($div_description);
            $div_section.appendChild($div_maincontent);

        });


        this.$target.appendChild($div_section);
        
    }
}