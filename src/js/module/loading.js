/*********************************
    ローディング
*********************************/

export function loading() {
    
    const loading = document.querySelector('.js_loading');
    const progressBar = document.querySelector('.js_loading_bar');
    const home = document.querySelector('.home');
    
    // ローディングを表示する関数
    function loadingTime(duration = 1000, transition = 300) {
        loading.classList.add('loading--active');
        loading.style.removeProperty('transition-property');
        loading.style.removeProperty('transition-duration');
        window.globalFunction.bodyScrollStop();
        progressBar.animate({
            width: ['0', '100%'],
        }, duration);
        setTimeout(() => {
            loading.classList.remove('loading--active');
            loading.style.transitionProperty = 'opacity, visibility';
            loading.style.transitionDuration = transition + 'ms';
            window.globalFunction.bodyScrollStart();
        }, duration);
    }
    
    // アクセスした時1回だけ表示する処理
    if (home) {
        window.addEventListener('DOMContentLoaded', function() {
            if (!sessionStorage.getItem('visited')) {
                sessionStorage.setItem('visited', 'first');
                loadingTime();
                home.classList.add('home--active');
            } else {
                home.classList.add('home--active');
            }
        })
    }

    // ※テスト用 クリックしたとき表示する処理
    const loadingTest = document.querySelector('.js_loading_test');
    if (loadingTest) {
        loadingTest.onclick = function() {
            loadingTime();
        }
    }

}