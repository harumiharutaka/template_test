/*********************************
    タブ
*********************************/

export function tab() {

    // タブ切り替えの処理
    const tabs = document.querySelectorAll('.js_tab');
    tabs.forEach(function(tab, index) {

        const tabBtns = tab.querySelectorAll('.js_tab-navigation_item');
        tabBtns.forEach(function(tabBtn, index) {

            tabBtn.onclick = function() {

                tab.querySelector('.tab-navigation__item--active').inert = false;
                tab.querySelector('.tab-navigation__item--active').classList.remove('tab-navigation__item--active');
                this.inert = true;
                this.classList.add('tab-navigation__item--active');
                tab.querySelector('.tab__item--active').classList.remove('tab__item--active');
                tab.querySelectorAll('.tab__item')[index].classList.add('tab__item--active');

            }

        });

    });

}