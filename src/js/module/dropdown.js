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
    
                const childWrapperActive = this.nextElementSibling.classList.contains('dropdown__child-wrapper--active');
                if (!childWrapperActive){
    
                    const childWrapperActives = dropdown.querySelectorAll('.dropdown__child-wrapper--active');
                    childWrapperActives.forEach(function(childWrapperActive, index) {
                        childWrapperActive.classList.remove('dropdown__child-wrapper--active');
                    });
    
                    this.nextElementSibling.classList.add('dropdown__child-wrapper--active');
    
                } else {
    
                    this.nextElementSibling.classList.remove('dropdown__child-wrapper--active');
    
                }
    
            }

            parentBtn.addEventListener('mouseover', function (e) {

                const childWrapperActive = this.nextElementSibling.classList.contains('dropdown__child-wrapper--active');
                if (!childWrapperActive){
    
                    const childWrapperActives = dropdown.querySelectorAll('.dropdown__child-wrapper--active');
                    childWrapperActives.forEach(function(childWrapperActive, index) {
                        childWrapperActive.classList.remove('dropdown__child-wrapper--active');
                    });

                    if(childWrapperActives.length !== 0){
                        this.nextElementSibling.classList.add('dropdown__child-wrapper--active');
                    }

                }

            });
    
        });
        
        // 孫メニューの開閉
        const childParentBtns = dropdown.querySelectorAll('.js_dropdown_child_parent');
        childParentBtns.forEach(function(childParentBtn, index) {

            childParentBtn.parentNode.addEventListener('mouseover', function (event) {
                childParentBtn.nextElementSibling.classList.add('dropdown__grandchild-wrapper--active');
            }, false);

            childParentBtn.parentNode.addEventListener('mouseleave', function (event) {
                childParentBtn.nextElementSibling.classList.remove('dropdown__grandchild-wrapper--active');
            }, false);

        });

        // フォーカスの処理
        const focusBtns = dropdown.querySelectorAll('a');
        focusBtns.forEach(function(focusBtn, index) {

            focusBtn.addEventListener("keydown", (e) => {

                if (e.key == "Enter") {

                    const linkParentActive = focusBtn.classList.contains('js_dropdown_link_parent');
                    const childParentActive = focusBtn  .classList.contains('js_dropdown_child_parent');
                    if (linkParentActive){

                        const childWrapperActive = focusBtn.nextElementSibling.classList.contains('dropdown__child-wrapper--active');
                        if(!childWrapperActive){
            
                            const childWrapperActives = dropdown.querySelectorAll('.dropdown__child-wrapper--active');
                            childWrapperActives.forEach(function(childWrapperActive, index) {
                                childWrapperActive.classList.remove('dropdown__child-wrapper--active');
                            });
            
                            focusBtn.nextElementSibling.classList.add('dropdown__child-wrapper--active');
            
                        } else {
    
                            focusBtn.nextElementSibling.classList.remove('dropdown__child-wrapper--active');
            
                        }
                    
                    } else if (childParentActive) {
    
                        const grandChildWrapperActive = focusBtn.nextElementSibling.classList.contains('dropdown__grandchild-wrapper--active');
                        if(!grandChildWrapperActive){
            
                            const grandChildWrapperActives = dropdown.querySelectorAll('.dropdown__grandchild-wrapper--active');
                            grandChildWrapperActives.forEach(function(grandChildWrapperActive, index) {
                                grandChildWrapperActive.classList.remove('dropdown__grandchild-wrapper--active');
                            });
            
                            focusBtn.nextElementSibling.classList.add('dropdown__grandchild-wrapper--active');
            
                        } else {
    
                            focusBtn.nextElementSibling.classList.remove('dropdown__grandchild-wrapper--active');
            
                        }
    
                    }

                }

            });

            focusBtn.addEventListener('focus', function (e) {

                const linkParentActive = this.classList.contains('js_dropdown_link_parent');
                const childParentActive = this.classList.contains('js_dropdown_child_parent');
                const childActive = this.closest('.dropdown__child-wrapper--active');
                const grandchildActive = this.closest('.dropdown__grandchild-wrapper--active');
                if (linkParentActive) {

                    const childWrapperActive = this.nextElementSibling.classList.contains('dropdown__child-wrapper--active');
                    if (!childWrapperActive){
        
                        const childWrapperActives = dropdown.querySelectorAll('.dropdown__child-wrapper--active');
                        childWrapperActives.forEach(function(childWrapperActive, index) {
                            childWrapperActive.classList.remove('dropdown__child-wrapper--active');
                        });
    
                    }

                } else if  (childParentActive) {

                    const grandchildWrapperActive = this.nextElementSibling.classList.contains('dropdown__grandchild-wrapper--active');
                    if (!grandchildWrapperActive){
        
                        const grandchildWrapperActives = dropdown.querySelectorAll('.dropdown__grandchild-wrapper--active');
                        grandchildWrapperActives.forEach(function(grandchildWrapperActive, index) {
                            grandchildWrapperActive.classList.remove('dropdown__grandchild-wrapper--active');
                        });
    
                    }

                } else if  (!childActive) {

                    const childWrapperActives = dropdown.querySelectorAll('.dropdown__child-wrapper--active');
                    childWrapperActives.forEach(function(childWrapperActive, index) {
                        childWrapperActive.classList.remove('dropdown__child-wrapper--active');
                    });
            
                    const grandchildWrapperActives = dropdown.querySelectorAll('.dropdown__grandchild-wrapper--active');
                    grandchildWrapperActives.forEach(function(grandchildWrapperActive, index) {
                        grandchildWrapperActive.classList.remove('dropdown__grandchild-wrapper--active');
                    });

                } else if (!grandchildActive) {

                    const grandchildWrapperActives = dropdown.querySelectorAll('.dropdown__grandchild-wrapper--active');
                    grandchildWrapperActives.forEach(function(grandchildWrapperActive, index) {
                        grandchildWrapperActive.classList.remove('dropdown__grandchild-wrapper--active');
                    });

                }
            
            }); 

        });
    
    });
    
    // ドロップダウン範囲外をクリックで子メニューを閉じる
    document.addEventListener('click', (e) => {
        
        if (!e.target.closest('.js_dropdown')) {
    
            const childWrapperActives = document.querySelectorAll('.dropdown__child-wrapper--active');
            childWrapperActives.forEach(function(childWrapperActive, index) {
                childWrapperActive.classList.remove('dropdown__child-wrapper--active');
            });

            const grandchildWrapperActives = document.querySelectorAll('.dropdown__grandchild-wrapper--active');
            grandchildWrapperActives.forEach(function(grandchildWrapperActive, index) {
                grandchildWrapperActive.classList.remove('dropdown__grandchild-wrapper--active');
            });
    
        }

    })

    //ウィンドウリサイズの処理
    window.addEventListener('resize',function(){

        if (window.matchMedia('(max-width:991.98px)').matches) {
    
            const childWrapperActives = document.querySelectorAll('.dropdown__child-wrapper--active');
            childWrapperActives.forEach(function(childWrapperActive, index) {
                childWrapperActive.classList.remove('dropdown__child-wrapper--active');
            });

            const grandchildWrapperActives = document.querySelectorAll('.dropdown__grandchild-wrapper--active');
            grandchildWrapperActives.forEach(function(grandchildWrapperActive, index) {
                grandchildWrapperActive.classList.remove('dropdown__grandchild-wrapper--active');
            });
    
        }
    
    });
    
}