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

      <div class="ion-padding ion-margin" style="border: solid 1px;">
        <v-timeline side="end">
          <v-timeline-item dot-color="grey"> Ordered </v-timeline-item>
          <v-timeline-item dot-color="green"> Shipped </v-timeline-item>
          <v-timeline-item dot-color="red"> Problem </v-timeline-item>
        </v-timeline>
      </div>

      <div class="ion-padding">
        <v-btn color="#FFD54F" prepend-icon="mdi-reload"> Update Status </v-btn>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons } from '@ionic/vue';
import Menu from '@/components/Menu.vue';
</script>
