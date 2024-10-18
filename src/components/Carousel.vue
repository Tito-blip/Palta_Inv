<template>
    <swiper
      :pagination="{
        clickable: true,
      }"
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
  </script>

<style>
    .swiper {
    width: 90%;
    height: 45%;
    }

    .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>