/*********************************
    ハンバーガー＆ドロワー
*********************************/

export function hamburgerAndDrawer() {
    
    const hamburger = document.querySelector('.js_header_hamburger');
    const drawer = document.querySelector('.js_drawer');
    const overlay = document.querySelector('.js_drawer-overlay');
    const drawerWidth = document.querySelector('.js_drawer').clientWidth;
    let childWidth = 0;
    let grandchildWidth = 0;
    const duration = 300;

    //ドロワーを開く関数
    function drawerOpen(){
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        hamburger.classList.add('header__hamburger--active');
        drawer.style.right = drawerWidth + 'px';
        overlay.classList.add('drawer-overlay--active');
        window.globalFunction.bodyScrollStop();
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    }
    
    //ドロワーを閉じる関数
    function drawerClose(){
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        hamburger.classList.remove('header__hamburger--active');
        drawer.style.right = 0;
        overlay.classList.remove('drawer-overlay--active');
        window.globalFunction.bodyScrollStart();
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    }

    //子メニューを開く関数
    function childOpen(){
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        drawer.style.right = drawerWidth + childWidth + 'px';
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    }

    //子メニューを開く関数
    function childClose(){
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        drawer.style.right = drawerWidth + 'px';
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    } 

    //孫メニューを開く関数
    function grandchildOpen(){
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        drawer.style.right = drawerWidth + childWidth + grandchildWidth + 'px';
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    }

    //孫メニューを開く関数
    function grandchildClose(){
        drawer.style.transitionProperty = 'right';
        drawer.style.transitionDuration = duration + 'ms';
        drawer.style.right = drawerWidth + childWidth + 'px';
        setTimeout(() => {
            drawer.style.removeProperty('transition-property');
            drawer.style.removeProperty('transition-duration');
        }, duration);
    } 
 
    //ハンバーガークリックの処理
    hamburger.onclick = function() {
        const active = this.classList.contains('header__hamburger--active');
    
        if(!active){
            drawerOpen();
        } else {

            drawerClose();
            setTimeout(() => {
                const childActives = drawer.querySelectorAll('.drawer__child--active');
                childActives.forEach(function(childActive, index) {
                    childActive.classList.remove('drawer__child--active');
                });
                const grandchildActives = drawer.querySelectorAll('.drawer__grandchild--active');
                grandchildActives.forEach(function(grandchildActive, index) {
                    grandchildActive.classList.remove('drawer__grandchild--active');
                });
            }, duration);

        }
    
    } 

    // 子メニューの処理
    const parentBtns = drawer.querySelectorAll('.js_drawer_link_parent');
    parentBtns.forEach(function(parentBtn, index) {

        parentBtn.onclick = function(e) {

            const childActive = this.nextElementSibling.classList.contains('drawer__child--active');
            childWidth = this.nextElementSibling.clientWidth;

            if (!childActive){

                const childActives = drawer.querySelectorAll('.drawer__child--active');
                childActives.forEach(function(childActive, index) {
                    childActive.classList.remove('drawer__child--active');
                });
                this.nextElementSibling.classList.add('drawer__child--active');
                childOpen();

            } else {

                setTimeout(() => {
                    const childActives = drawer.querySelectorAll('.drawer__child--active');
                    childActives.forEach(function(childActive, index) {
                        childActive.classList.remove('drawer__child--active');
                    });
                }, duration);
                childClose();

            }

        }

    });

    // 孫メニューの処理
    const childParentBtns = drawer.querySelectorAll('.js_drawer_child_parent');
    childParentBtns.forEach(function(childParentBtn, index) {

        childParentBtn.onclick = function(e) {

            const grandchildActive = this.nextElementSibling.classList.contains('drawer__grandchild--active');
            grandchildWidth = this.nextElementSibling.clientWidth;

            if (!grandchildActive){

                const grandchildActives = drawer.querySelectorAll('.drawer__grandchild--active');
                grandchildActives.forEach(function(grandchildActive, index) {
                    grandchildActive.classList.remove('drawer__grandchild--active');
                });
                this.nextElementSibling.classList.add('drawer__grandchild--active');
                grandchildOpen();

            } else {

                setTimeout(() => {
                    const grandchildActives = drawer.querySelectorAll('.drawer__grandchild--active');
                    grandchildActives.forEach(function(grandchildActive, index) {
                        grandchildActive.classList.remove('drawer__grandchild--active');
                    });
                }, duration);
                grandchildClose();

            }

        }

    });
       
    
    //オーバーレイクリックの処理
    overlay.onclick = function() {

        const active = this.classList.contains('drawer-overlay--active');
        if(active){
            drawerClose();
        }
    
    }
    
    //ウィンドウリサイズの処理
    window.addEventListener('resize',function(){
    
        if (window.matchMedia('(min-width:992px)').matches) {
    
            const active = hamburger.classList.contains('header__hamburger--active');
            if(active){
                drawerClose();
            }
    
        }
    
    });

}