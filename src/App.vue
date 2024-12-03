<template>
    <ion-app>
      <ion-split-pane content-id="main-content">
        <Menu />
        <ion-router-outlet id="main-content" />
      </ion-split-pane>
    </ion-app>
  </template>
  
  <script setup>
  import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/vue';
  import Menu from "./components/SideBarMenu.vue";
  </script>