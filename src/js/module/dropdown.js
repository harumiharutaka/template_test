/*********************************
    ドロップダウン
*********************************/

export function dropdown() {

    const dropdowns = document.querySelectorAll('.js_dropdown');
    dropdowns.forEach(function(dropdown, index) {

        // 子メニューの開閉
        const parentBtns = dropdown.querySelectorAll('.js_dropdown_link_parent');
        parentBtns.forEach(function(parentBtn, index) {
    
            parentBtn.onclick = function(e) {
    
                const childActive = this.nextElementSibling.classList.contains('dropdown__child--active');
                if (!childActive){
    
                    const childActives = dropdown.querySelectorAll('.dropdown__child--active');
                    childActives.forEach(function(childActive, index) {
                        childActive.classList.remove('dropdown__child--active');
                    });
    
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
    
        });
        
        // 孫メニューの開閉
        const childParentBtns = dropdown.querySelectorAll('.js_dropdown_child_parent');
        childParentBtns.forEach(function(childParentBtn, index) {

            childParentBtn.parentNode.addEventListener('mouseover', function (event) {
                childParentBtn.nextElementSibling.classList.add('dropdown__grandchild--active');
            }, false);

            childParentBtn.parentNode.addEventListener('mouseleave', function (event) {
                childParentBtn.nextElementSibling.classList.remove('dropdown__grandchild--active');
            }, false);

            childParentBtn.addEventListener("keydown", (e) => {

                if (e.key == "Enter") {

                    const grandChildActive = childParentBtn.nextElementSibling.classList.contains('dropdown__grandchild--active');
                    if(!grandChildActive){
        
                        const grandChildActives = dropdown.querySelectorAll('.dropdown__grandchild--active');
                        grandChildActives.forEach(function(grandChildActive, index) {
                            grandChildActive.classList.remove('dropdown__grandchild--active');
                        });
        
                        childParentBtn.nextElementSibling.classList.add('dropdown__grandchild--active');
        
                    } else {

                        childParentBtn.nextElementSibling.classList.remove('dropdown__grandchild--active');
        
                    }
    
                }

            });

        });

        // フォーカスの処理
        const focusBtns = dropdown.querySelectorAll('a,button');
        focusBtns.forEach(function(focusBtn, index) {

            focusBtn.addEventListener('focus', function (e) {

                const linkParentActive = this.classList.contains('js_dropdown_link_parent');
                const childParentActive = this.classList.contains('js_dropdown_child_parent');
                const childActive = this.closest('.dropdown__child--active');
                const grandchildActive = this.closest('.dropdown__grandchild--active');
                if (linkParentActive) {

                    const childActive = this.nextElementSibling.classList.contains('dropdown__child--active');
                    if (!childActive){

                        const childActives = dropdown.querySelectorAll('.dropdown__child--active');
                        childActives.forEach(function(childActive, index) {
                            childActive.classList.remove('dropdown__child--active');
                        });
    
                    }

                } else if  (childParentActive) {

                    const grandchildActive = this.nextElementSibling.classList.contains('dropdown__grandchild--active');
                    if (!grandchildActive){

                        const grandchildActives = dropdown.querySelectorAll('.dropdown__grandchild--active');
                        grandchildActives.forEach(function(grandchildActive, index) {
                            grandchildActive.classList.remove('dropdown__grandchild--active');
                        });
    
                    }

                } else if  (!childActive) {

                    const childActives = dropdown.querySelectorAll('.dropdown__child--active');
                    childActives.forEach(function(childActive, index) {
                        childActive.classList.remove('dropdown__child--active');
                    });
            
                    const grandchildActives = dropdown.querySelectorAll('.dropdown__grandchild--active');
                    grandchildActives.forEach(function(grandchildActive, index) {
                        grandchildActive.classList.remove('dropdown__grandchild--active');
                    });

                } else if (!grandchildActive) {

                    const grandchildActives = dropdown.querySelectorAll('.dropdown__grandchild--active');
                    grandchildActives.forEach(function(grandchildActive, index) {
                        grandchildActive.classList.remove('dropdown__grandchild--active');
                    });

                }
            
            }); 

        });
    
    });
    
    // ドロップダウン範囲外をクリックで子メニューを閉じる
    document.addEventListener('click', (e) => {
        
        if (!e.target.closest('.js_dropdown')) {
    
            const childActives = document.querySelectorAll('.dropdown__child--active');
            childActives.forEach(function(childActive, index) {
                childActive.classList.remove('dropdown__child--active');
            });

            const grandchildActives = document.querySelectorAll('.dropdown__grandchild--active');
            grandchildActives.forEach(function(grandchildActive, index) {
                grandchildActive.classList.remove('dropdown__grandchild--active');
            });
    
        }

    })

    //ウィンドウリサイズの処理
    window.addEventListener('resize',function(){

        if (window.matchMedia('(max-width:991.98px)').matches) {
    
            const childActives = document.querySelectorAll('.dropdown__child--active');
            childActives.forEach(function(childActive, index) {
                childActive.classList.remove('dropdown__child--active');
            });

            const grandchildActives = document.querySelectorAll('.dropdown__grandchild--active');
            grandchildActives.forEach(function(grandchildActive, index) {
                grandchildActive.classList.remove('dropdown__grandchild--active');
            });
    
        }
    
    });
    
}