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

/*---------------------------
モーダル表示時、背景スクロール制御
----------------------------*/
jQuery(document).ready(function () {
  // モーダルを開く処理
  jQuery(".modal-open-btn").on("click", function (e) {
    e.preventDefault();
    console.log("モーダルを開きます"); // デバッグ用ログ
    jQuery("body").addClass("modal-open"); // 背景スクロールを固定
    jQuery("#modal").fadeIn(300); // モーダルを表示（300msでアニメーション）
  });

  // モーダルを閉じる処理（ボタンで閉じる）
  jQuery(".modal-close-btn, .modal__close").on("click", function (e) {
    e.preventDefault();
    console.log("モーダルを閉じます"); // デバッグ用ログ
    jQuery("body").removeClass("modal-open"); // 背景スクロールを解除
    jQuery("#modal").fadeOut(300); // モーダルを非表示（300msでアニメーション）
  });

  // モーダル外をクリックした際に閉じる処理
  jQuery("#modal").on("click", function (e) {
    if (jQuery(e.target).closest(".modal__inner").length === 0) {
      console.log("モーダル外をクリックしました"); // デバッグ用ログ
      jQuery("body").removeClass("modal-open"); // 背景スクロールを解除
      jQuery("#modal").fadeOut(300); // モーダルを非表示
    }
  });
});

// jQuery(document).ready(function () {
//   // モーダルを開く処理
//   jQuery(".modal-open-btn").on("click", function (e) {
//     e.preventDefault();
//     jQuery("body").addClass("modal-open"); // 背景スクロールを固定
//     jQuery("#modal").fadeIn(); // モーダルを表示
//   });

//   // モーダルを閉じる処理（ボタンで閉じる）
//   jQuery(".modal-close-btn, .modal__close").on("click", function (e) {
//     e.preventDefault();
//     jQuery("body").removeClass("modal-open"); // 背景スクロールを解除
//     jQuery("#modal").fadeOut(); // モーダルを非表示
//   });

//   // モーダル外をクリックした際に閉じる処理
//   jQuery(document).on("click", function (e) {
//     if (
//       jQuery(e.target).closest(".modal__inner").length === 0 && // モーダル内部を除外
//       jQuery("#modal").is(":visible") // モーダルが表示されている場合のみ実行
//     ) {
//       jQuery("body").removeClass("modal-open"); // 背景スクロールを解除
//       jQuery("#modal").fadeOut(); // モーダルを非表示
//     }
//   });
// });
