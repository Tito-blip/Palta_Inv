<template>
    <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :mousewheel="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
    :direction="'vertical'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :modules="[EffectCoverflow, Mousewheel, Autoplay]"
    class="mySwiper"
    >
      <swiper-slide><img src="https://picsum.photos/500/768/?random=1" alt=""></swiper-slide>
      <swiper-slide><img src="https://picsum.photos/500/768/?random=2" alt=""></swiper-slide>
      <swiper-slide><img src="https://picsum.photos/500/768/?random=3" alt=""></swiper-slide>
      <swiper-slide><img src="https://picsum.photos/500/768/?random=4" alt=""></swiper-slide>
    </swiper>
  </template>

<script setup>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';

    import 'swiper/css/effect-coverflow';

    import { EffectCoverflow, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
  </script>

<style scoped>
    .swiper {
      width: 80%;
      height: 40%;
      border-radius: 20px;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
</style>