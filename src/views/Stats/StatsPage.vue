<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="text-center">Stats</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <Menu />
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Stats</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- | Placeholder | -->
      <div class="ion-padding">
          <Spark />
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/vue';
  import Menu from '@/components/SideBarMenu.vue';
  import Spark from '@/components/Spark.vue';

</script>