<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
          <ion-title>Storage</ion-title>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <Menu />
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Storage</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding">
        <v-chip-group filter multiple>
          <v-chip color="primary" variant="elevated">
              Category
          </v-chip>
          <v-chip color="green" variant="elevated">
              Category
          </v-chip>
          <v-chip color="pink" variant="elevated">
              Category
          </v-chip>
        </v-chip-group>
      </div>

      <div class="ion-padding">  
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons } from '@ionic/vue';
import Card from '@/components/Card.vue';
</script>
