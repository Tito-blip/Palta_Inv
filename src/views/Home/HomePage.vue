<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button :auto-hide="false"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Home" />
      <SearchBar />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonButtons, IonMenuButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import SearchBar from '@/components/SearchBar.vue';
</script>