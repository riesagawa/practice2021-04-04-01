// alert("test");

const swiper = new Swiper('.swiper-container', {
  // Optional parameters 
  // direction: 'vertical', ←縦方向のスライダーの時（ほとんど使わない）
  loop: true, //スライダーが最後までいった時

  // If we need pagination
  pagination: {
    el: '.swiper-pagination', //クラス名をあてる
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //ページネーションがあるので、スクロールバーはあまり使わない
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
