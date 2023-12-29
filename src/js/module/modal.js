/*********************************
    モーダル
*********************************/

export function modal() {
    
    // モーダルを開ける処理
    const modalOpens = document.querySelectorAll('.js_modal_open');
    modalOpens.forEach(function(modalBtn, index) {

        modalBtn.onclick = function() {

            const modalBtnId = this.dataset.modal;
            document.querySelector('#' + modalBtnId).showModal();
            document.querySelector('#' + modalBtnId).classList.add('modal--active');
            window.globalFunction.bodyScrollStop();

        }

    });

    // モーダルを閉じる関数
    function modalClose(){
        const modalActives = document.querySelectorAll('.modal--active');
        modalActives.forEach(function(modalActive, index) {

            modalActive.close();
            modalActive.classList.remove('modal--active');
            window.globalFunction.bodyScrollStart();

        });

    }

    // 閉じるボタンの処理
    const modalCloseButtons = document.querySelectorAll('.js_modal_close');
    modalCloseButtons.forEach(function(modalCloseButton, index) {

        modalCloseButton.onclick = function() {

            modalClose();

        }

    });

    // オーバーレイクリック時の処理
    const modals = document.querySelectorAll('.js_modal');
    modals.forEach(function(modal, index) {

        modal.addEventListener('click', (e) => {
        
            if (!e.target.closest('.js_modal_box')) {
        
                modalClose();
        
            }
    
        })

    });

    // Escapeボタンを押したときの時の処理
    document.addEventListener('keydown', (e) => {

        if (e.key == 'Escape') {

            modalClose();

        }

    });

}