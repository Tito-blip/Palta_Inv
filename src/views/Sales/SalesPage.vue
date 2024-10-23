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
        <SideBarMenu />
        <div class="ion-padding">
          <SalesDataTable />
        </div>
    </ion-content>
</ion-page>
</template>

<script setup>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/vue';
    import SalesDataTable from '@/components/SalesDataTable.vue';
    import SideBarMenu from '@/components/SideBarMenu.vue';
</script>