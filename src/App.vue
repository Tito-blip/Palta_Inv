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
  import { App } from '@capacitor/app';
  import router from './router';

  const setToken = async (slug) => {
    await Preferences.set({
      key: 'authToken',
      value: slug,
    });
  };

  App.addListener('appUrlOpen', (event) => {
  // Example url: https://beerswift.app/tabs/tabs2
  // slug = /tabs/tabs2
  const slug = event.url.split('://')[1];

  // We only push to the route if there is a slug present
  if (slug) {
    setToken(slug);
    router.push('Auth')
  }
  });
  </script>