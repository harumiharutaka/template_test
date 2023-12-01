/*********************************
    プラグイン
*********************************/

export function plugin() {
    
  /* Swiper */
  const mySwiper = new Swiper('.swiper', {

    loop: true, // ループ
    slidesPerView: 'auto', // 一度に表示する枚数
    centeredSlides: true, // アクティブなスライドを中央にする
    autoplay: { // 自動再生
        delay: 3000, // 1秒後に次のスライド
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    pagination: { // ページネーション
      el: '.swiper-pagination',
    },
    navigation: { // 前後の矢印
      nextEl: '.slideshow__button-next',
      prevEl: '.slideshow__button-prev',
    },
    
  });

}