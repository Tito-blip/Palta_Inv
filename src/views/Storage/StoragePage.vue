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

      <div class="ion-padding d-flex flex-nowrap">
        <v-chip class="ma-2" color="#1B5E20" label>
          <v-icon icon="mdi-filter" start></v-icon>
            Filters:
        </v-chip>
        <v-chip-group filter multiple v-for="category in categorys">
          <v-chip :color="category.color" variant="elevated" inline v-if="!!category.name">
            {{category.name}}
          </v-chip>
        </v-chip-group>
      </div>

      <div class="ion-padding">  
        <Card :name="'PC'" :color="'#9575CD'" :stock="20"/>
        <Card :name="'Example'" :stock="10" :color="'secondary'" :src="'https://picsum.photos/500/?random=1'"/>
        <Card :name="'Example 2'" :stock="34" :color="'#FFD180'" :src="'https://picsum.photos/500/?random=2'"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons } from '@ionic/vue';
import Card from '@/components/Card.vue';
import Menu from '@/components/Menu.vue';

const categorys = [
  {name: "Tech", color: "#6D4C41"},
  {name: "Other", color: "green"}
]
</script>
