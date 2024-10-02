<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
          <ion-title>Tracking</ion-title>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <Menu />
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tracking</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tracking" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
