import Tab from '../src/Components/Header/Header.js';

const defaultValue = '<div id="tab_section" class="col"><h1>샘플 프로젝트</h1><div><button id="button_id1" class="button_class active">버튼1</button><button id="button_id2" class="button_class">버튼2</button><button id="button_id3" class="button_class">버튼3</button></div><div><div id="section1" class="section active">section1</div><div id="section2" class="section">section2</div><div id="section3" class="section">section3</div></div></div>'

describe('Tab 컴포넌트 테스트', () => {
    // given & when
    const tab = new Tab(document.createElement('div'));

    it('sample 컴포넌트 DOM 구조 테스트', () => {

        // then
        expect(tab.$target.innerHTML).toEqual(defaultValue);
    });

    it('컴포넌트 이벤트 테스트', () => {



    });

});

