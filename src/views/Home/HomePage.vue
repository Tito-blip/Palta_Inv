<template>
  <ion-page>
   <ion-content>
    <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-searchbar color="secondary" id="custom" placeholder="Search"></ion-searchbar>
   
      <Carousel />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButtons, IonMenuButton } from '@ionic/vue';
  import Carousel from '@/components/Carousel.vue';
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