// init Swiper (carousel) - options for smoothness & responsiveness
document.addEventListener("DOMContentLoaded", function () {
  // Swiper init
  const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 700,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: { delay: 3500, disableOnInteraction: false },
    breakpoints: {
      700: { slidesPerView: 1.2 },
      1000: { slidesPerView: 1.3 },
    },
  })

  // IntersectionObserver for reveal animations
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible")
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el))
})
