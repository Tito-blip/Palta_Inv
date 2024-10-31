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
      <SideBarMenu />
      <ion-searchbar color="secondary" id="custom" placeholder="Search"></ion-searchbar>
   
      <Carousel />
      <div class="ion-padding mb-1">
        <Spark />
      </div>

      <Button />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButtons, IonMenuButton } from '@ionic/vue';
  import Carousel from '@/components/Carousel.vue';
  import Spark from '@/components/Spark.vue';
  import SideBarMenu from '@/components/SideBarMenu.vue';
  import Button from 'primevue/button';
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