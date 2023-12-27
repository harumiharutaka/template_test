/*********************************
    ハンバーガー＆ドロワー
*********************************/

export function hamburgerAndDrawer() {
    
    const hamburger = document.querySelector('.js_header_hamburger');
    const drawer = document.querySelector('.js_drawer');
    const overlay = document.querySelector('.js_drawer-overlay');
    let drawerWidth = 0;
    let childWidth = 0;
    let grandchildWidth = 0;
    const duration = 300;

    //ドロワーを開く関数
    function drawerOpen(){
        drawerWidth = drawer.getBoundingClientRect().width;
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        hamburger.classList.add('header__hamburger--active');
        drawer.classList.add('drawer--active')
        drawer.style.right = drawerWidth - 1 + 'px';
        overlay.classList.add('drawer-overlay--active');
        window.globalFunction.bodyScrollStop();
        document.querySelector('.wrapper').inert = true;
        document.querySelector('.footer').inert = true;
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    }
    
    //ドロワーを閉じる関数
    function drawerClose(){
        drawerWidth = drawer.getBoundingClientRect().width;
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        hamburger.classList.remove('header__hamburger--active');
        drawer.style.right = 0;
        overlay.classList.remove('drawer-overlay--active');
        window.globalFunction.bodyScrollStart();
        document.querySelector('.wrapper').inert = false;
        document.querySelector('.footer').inert = false;
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
            drawer.classList.remove('drawer--active')
        }, duration);
    }

    //子メニューを開く関数
    function childOpen(){
        drawerWidth = drawer.getBoundingClientRect().width;
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        drawer.style.right = drawerWidth + childWidth - 2 + 'px';
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    }

    //子メニューを閉じる関数
    function childClose(){
        drawerWidth = drawer.getBoundingClientRect().width;
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        drawer.style.right = drawerWidth - 1 + 'px';
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    } 

    //孫メニューを開く関数
    function grandchildOpen(){
        drawerWidth = drawer.getBoundingClientRect().width;
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        drawer.style.right = drawerWidth + childWidth + grandchildWidth - 3 + 'px';
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    }

    //孫メニューを閉じる関数
    function grandchildClose(){
        drawerWidth = drawer.getBoundingClientRect().width;
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        drawer.style.right = drawerWidth + childWidth - 2 + 'px';
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    } 
 
    // 子メニューを全て閉じる関数
    function childAllClose(){
        const childActives = drawer.querySelectorAll('.drawer__child--active');
        childActives.forEach(function(childActive, index) {
            childActive.classList.remove('drawer__child--active');
        });
    }

    // 孫メニューを全て閉じる関数
    function grandchildAllClose(){
        const grandchildActives = drawer.querySelectorAll('.drawer__grandchild--active');
        grandchildActives.forEach(function(grandchildActive, index) {
            grandchildActive.classList.remove('drawer__grandchild--active');
        });
    }

    //ハンバーガーボタンの処理
    hamburger.onclick = function() {
        const active = this.classList.contains('header__hamburger--active');
    
        if(!active){
            drawerOpen();
        } else {

            drawerClose();
            setTimeout(() => {
                childAllClose();
                grandchildAllClose();
            }, duration);

        }
    
    } 

    // 子メニューを展開するボタンの処理
    const parentBtns = drawer.querySelectorAll('.js_drawer_link_parent');
    parentBtns.forEach(function(parentBtn, index) {

        parentBtn.onclick = function(e) {

            const childActive = this.nextElementSibling.classList.contains('drawer__child--active');
            childWidth = this.nextElementSibling.getBoundingClientRect().width;

            if (!childActive){

                childAllClose();
                grandchildAllClose();
                this.nextElementSibling.classList.add('drawer__child--active');
                childOpen();

            } else {

                setTimeout(() => {
                    childAllClose();
                }, duration);
                childClose();

            }

        }

        parentBtn.addEventListener('keydown', (e) => {

            if(e.key == 'Enter') {

                const childActive = parentBtn.nextElementSibling.classList.contains('drawer__child--active');
                childWidth = parentBtn.nextElementSibling.getBoundingClientRect().width;
    
                if (!childActive){
    
                    childAllClose();
                    grandchildAllClose();
                    parentBtn.nextElementSibling.classList.add('drawer__child--active');
                    childOpen();
    
                } else {
    
                    setTimeout(() => {
                        childAllClose();
                    }, duration);
                    childClose();
    
                }

            }

        });

    });

    // 子メニューを閉じるボタンの処理
    const childCloseBtns = drawer.querySelectorAll('.js_drawer_child_close');
    childCloseBtns.forEach(function(childCloseBtn, index) {

        childCloseBtn.onclick = function(e) {
            
            setTimeout(() => {
                childAllClose();
                grandchildAllClose();
            }, duration);
            childClose();
            
        }
        
        childCloseBtn.addEventListener('keydown', (e) => {

            if(e.key == 'Enter') {

                setTimeout(() => {
                    childAllClose();
                    grandchildAllClose();
                }, duration);
                childClose();  

            }

        });

    });

    // 孫メニューを展開するボタンの処理
    const childParentBtns = drawer.querySelectorAll('.js_drawer_child_parent');
    childParentBtns.forEach(function(childParentBtn, index) {

        childParentBtn.onclick = function(e) {

            const grandchildActive = this.nextElementSibling.classList.contains('drawer__grandchild--active');
            grandchildWidth = this.nextElementSibling.getBoundingClientRect().width;

            if (!grandchildActive){

                grandchildAllClose();
                this.nextElementSibling.classList.add('drawer__grandchild--active');
                grandchildOpen();

            } else {

                setTimeout(() => {
                    grandchildAllClose();
                }, duration);
                grandchildClose();

            }

        }
        
        childParentBtn.addEventListener('keydown', (e) => {

            if(e.key == 'Enter') {

                const grandchildActive = childParentBtn.nextElementSibling.classList.contains('drawer__grandchild--active');
                grandchildWidth = childParentBtn.nextElementSibling.getBoundingClientRect().width;
    
                if (!grandchildActive){
    
                    grandchildAllClose();
                    childParentBtn.nextElementSibling.classList.add('drawer__grandchild--active');
                    grandchildOpen();
    
                } else {
    
                    setTimeout(() => {
                        grandchildAllClose();
                    }, duration);
                    grandchildClose();
    
                }

            }

        });

    });

    // 孫メニューを閉じるボタンの処理
    const grandchildCloseBtns = drawer.querySelectorAll('.js_drawer_grandchild_close');
    grandchildCloseBtns.forEach(function(grandchildCloseBtn, index) {

        grandchildCloseBtn.onclick = function(e) {
            
            setTimeout(() => {
                grandchildAllClose();
            }, duration);
            grandchildClose();
            
        }
        
        grandchildCloseBtn.addEventListener('keydown', (e) => {

            if(e.key == 'Enter') {

                setTimeout(() => {
                    grandchildAllClose();
                }, duration);
                grandchildClose();

            }

        });

    });
       
    //オーバーレイクリックの処理
    overlay.onclick = function() {

        const active = this.classList.contains('drawer-overlay--active');
        if(active){
            drawerClose();
            childAllClose();
            grandchildAllClose();
        }
    
    }
    
    //ウィンドウリサイズの処理
    window.addEventListener('resize',function(){
    
        if (window.matchMedia('(min-width:992px)').matches) {
    
            const active = hamburger.classList.contains('header__hamburger--active');
            if(active){
                drawerClose();
                childAllClose();
                grandchildAllClose();
            }
    
        }
    
    });

}