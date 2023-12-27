/*********************************
    ドロップダウン
*********************************/

export function dropdown() {

    const dropdown = document.querySelector('.js_dropdown');

    // 子メニューを全て閉じる関数
    function childAllClose(){
        const childActives = dropdown.querySelectorAll('.dropdown__child--active');
        childActives.forEach(function(childActive, index) {
            childActive.classList.remove('dropdown__child--active');
        });
    }

    // 孫メニューを全て閉じる関数
    function grandchildAllClose(){
        const grandchildActives = dropdown.querySelectorAll('.dropdown__grandchild--active');
        grandchildActives.forEach(function(grandchildActive, index) {
            grandchildActive.classList.remove('dropdown__grandchild--active');
        });
    }

    // 子メニューを展開するボタンの処理
    const parentBtns = dropdown.querySelectorAll('.js_dropdown_link_parent');
    parentBtns.forEach(function(parentBtn, index) {

        parentBtn.onclick = function(e) {

            const childActive = this.nextElementSibling.classList.contains('dropdown__child--active');
            if (!childActive){

                childAllClose();
                this.nextElementSibling.classList.add('dropdown__child--active');

            } else {

                this.nextElementSibling.classList.remove('dropdown__child--active');

            }

        }

        parentBtn.addEventListener('mouseover', function (e) {

            const childActive = this.nextElementSibling.classList.contains('dropdown__child--active');
            if (!childActive){

                const childActives = dropdown.querySelectorAll('.dropdown__child--active');
                childActives.forEach(function(childActive, index) {
                    childActive.classList.remove('dropdown__child--active');
                });

                if(childActives.length !== 0){
                    this.nextElementSibling.classList.add('dropdown__child--active');
                }

            }

        });

        parentBtn.addEventListener('keydown', (e) => {

            if(e.key == 'Enter') {
                           
                const childActive = parentBtn.nextElementSibling.classList.contains('dropdown__child--active');
                if (!childActive){

                    childAllClose();
                    parentBtn.nextElementSibling.classList.add('dropdown__child--active');

                } else {

                    parentBtn.nextElementSibling.classList.remove('dropdown__child--active');

                }

            }

        });

    });
    
    // 孫メニューを展開するボタンの処理
    const childParentBtns = dropdown.querySelectorAll('.js_dropdown_child_parent');
    childParentBtns.forEach(function(childParentBtn, index) {

        childParentBtn.parentNode.addEventListener('mouseover', function (e) {
            childParentBtn.nextElementSibling.classList.add('dropdown__grandchild--active');
        });

        childParentBtn.parentNode.addEventListener('mouseleave', function (e) {
            childParentBtn.nextElementSibling.classList.remove('dropdown__grandchild--active');
        });

        childParentBtn.addEventListener('keydown', (e) => {

            if (e.key == 'Enter') {

                const grandchildActive = childParentBtn.nextElementSibling.classList.contains('dropdown__grandchild--active');
                if(!grandchildActive){
    
                    grandchildAllClose();
                    childParentBtn.nextElementSibling.classList.add('dropdown__grandchild--active');
    
                } else {

                    childParentBtn.nextElementSibling.classList.remove('dropdown__grandchild--active');
    
                }

            }

        });

    });

    // フォーカスの処理
    const focusBtns = dropdown.querySelectorAll('a');
    focusBtns.forEach(function(focusBtn, index) {

        focusBtn.addEventListener('focus', function (e) {

            const linkParentActive = this.classList.contains('js_dropdown_link_parent');
            const childParentActive = this.classList.contains('js_dropdown_child_parent');
            const childActive = this.closest('.dropdown__child--active');
            const grandchildActive = this.closest('.dropdown__grandchild--active');
            if (linkParentActive) {

                const childActive = this.nextElementSibling.classList.contains('dropdown__child--active');
                if (!childActive){

                    childAllClose();

                }

            } else if  (childParentActive) {

                const grandchildActive = this.nextElementSibling.classList.contains('dropdown__grandchild--active');
                if (!grandchildActive){

                    grandchildAllClose();

                }

            } else if  (!childActive) {

                childAllClose();
                grandchildAllClose();

            } else if (!grandchildActive) {

                grandchildAllClose();
            }
        
        }); 

    });
    
    
    // ドロップダウン範囲外をクリックで子＆孫メニューを閉じる処理
    document.addEventListener('click', (e) => {
        
        if (!e.target.closest('.js_dropdown')) {
    
            childAllClose();
            grandchildAllClose();
    
        }

    });

    //ウィンドウリサイズの処理
    window.addEventListener('resize',function(){

        if (window.matchMedia('(max-width:991.98px)').matches) {
    
            childAllClose();
            grandchildAllClose();
    
        }
    
    });
    
}