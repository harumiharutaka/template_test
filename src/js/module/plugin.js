/*********************************
    プラグイン
*********************************/

export function plugin() {

  /* Splide */
  const splide = document.querySelector('.splide');
  if (splide) {
    new Splide(".splide", {
      type: "loop", // ループ
      autoplay: true, // 自動再生
      interval: 3000, // 自動再生の間隔
      pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
      pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
      padding: "calc((100% - 1200px) / 2)", // 左右の隙間
      classes: {
        pagination: "splide__pagination slideshow__pagination",
        page: "splide__pagination__page slideshow__page",
      },
    }).mount();
  }

}