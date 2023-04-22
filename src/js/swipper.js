const box = document.querySelector(".block");
const boxSecond = document.querySelector(".boxsecond");

window.addEventListener("scroll", () => {
  const boxPosition = box.getBoundingClientRect().top;
  const secondPosition = boxSecond.getBoundingClientRect().top;

  const viewportHeight = window.innerHeight;

  if (boxPosition < viewportHeight / 2 || secondPosition < viewportHeight / 2) {
    box.classList.add("slide-out-right") ||
      boxSecond.classList.add("slide-out-left");
  } else {
    box.classList.remove("slide-out-right");
    boxSecond.classList.remove("slide-out-left");
  }
});

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  spaceBetween: 100,
  loop: true,

  // scrollbar: {
  //   el: ".swiper-scrollbar",

  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
