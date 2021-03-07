export default class Header {

    $target = null;
    header = null;

    constructor($target, header) {
        this.$target = $target
        this.header = header;

        this.render();
    }

    render = () => {
        const header = this.header;

        const $div_header = document.createElement('div');
        const $root_span = document.createElement('span');
        $div_header.setAttribute('id', 'filepath');
        $root_span.innerHTML = 'root';
        $div_header.appendChild($root_span);

        header.forEach(item => {
            const $span_header = document.createElement('span');
            $span_header.innerHTML = ' - ' + item['name'];
            $span_header.setAttribute('data-id', item['id']);

            $div_header.appendChild($span_header);
        });
        
        this.$target.appendChild($div_header);
    }
}