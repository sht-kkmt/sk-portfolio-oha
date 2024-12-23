jQuery("#js-btn-menu").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-btn-menu").toggleClass("is-checked");
  jQuery("#js-contentArea").toggleClass("is-checked");
});

// jQuery(".js-accordion").on("click", function (e) {
//   e.preventDefault();
//   if (
//     jQuery(this)
//       .parent()
//       .hasClass(is - open)
//   ) {
//     jQuery(this)
//       .parent()
//       .remove(is - open);
//     jQuery(this).next().slideUp();
//   } else {
//     jQuery(this).parent().addClass("is-open");
//     jQuery(this).next().slideDown();
//   }
// });

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

const mySwiper = new Swiper(".swiper", {
  spaceBetween: 82,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets", // ドット型のページネーションを指定
    clickable: true, // クリック可能にする
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
