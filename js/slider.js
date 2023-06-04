const testimony_slider = new Swiper(".testimony-slider", {
        slidesPerView: 1,
        loop: true,
        effect: "coverflow",
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 177,
          slideShadows: false,
          modifier: 2,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            coverflowEffect: {
              stretch: 139,
            },
          },
          768: {
            coverflowEffect: {
              stretch: 133,
            },
          },
          992: {
            coverflowEffect: {
              stretch: 177,
            },
          },
        },
      });
