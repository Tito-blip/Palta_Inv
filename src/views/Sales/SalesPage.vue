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
        <div v-if="!apiLogged">
          <h1> Register API </h1>
          <a href="localhost:8100/Stats"> Register API </a>
        </div>
        <div class="ion-padding" v-else>
          <SalesDataTable />
        </div>
    </ion-content>
</ion-page>
</template>

<script setup>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/vue';
    import SalesDataTable from '@/components/SalesDataTable.vue';
    import SideBarMenu from '@/components/SideBarMenu.vue';

    const apiLogged = localStorage.getItem('apiLogged') // Change to state or other alternative
</script>