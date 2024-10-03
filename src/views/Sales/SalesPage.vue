<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
          <ion-title>Sales</ion-title>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <Menu />
        <div class="ion-padding">
            <DataTable />
        </div>
    </ion-content>
</ion-page>
</template>

<script setup>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/vue';
    import Menu from '@/components/Menu.vue';
    import DataTable from '@/components/DataTable.vue';
</script>