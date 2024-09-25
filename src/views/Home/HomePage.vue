<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <Menu />
      <ion-searchbar color="secondary" id="custom" placeholder="Search"></ion-searchbar>
      
      <div class="ion-padding">
        <sl-carousel class="vertical" loop autoplay>
          <sl-carousel-item>
            <img src="https://picsum.photos/500?random=1">
          </sl-carousel-item>
          <sl-carousel-item>
            <img src="https://picsum.photos/500?random=2">
          </sl-carousel-item>
          <sl-carousel-item>
            <img src="https://picsum.photos/500?random=3">
          </sl-carousel-item>
          <sl-carousel-item>
            <img src="https://picsum.photos/500?random=4">
          </sl-carousel-item>
        </sl-carousel>
      </div>      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButtons, IonMenuButton } from '@ionic/vue';
import Menu from '@/components/Menu.vue';
</script>

<style>
  .vertical {
    max-height: 600px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
</style>