<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-searchbar color="secondary" id="custom" placeholder="Search"></ion-searchbar>
      
      <sl-carousel loop autoplay class="scroll-hint" pagination style="--scroll-hint: 10%;">
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

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/vue';
</script>