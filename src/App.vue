<template>
    <ion-app>
      <ion-split-pane content-id="main-content">
        <Menu :dark="dark" @dark-mode-changed="handleDarkModeChanged" />
        <ion-router-outlet id="main-content" />
      </ion-split-pane>
    </ion-app>
  </template>
  
  <script lang="ts">
  import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/vue';
  import { Ref, defineComponent, ref } from 'vue';
  import Menu from "./components/SideBarMenu.vue";
  
  export default defineComponent({
    name: 'App',
    components: {
      IonApp,
      IonSplitPane,
      IonRouterOutlet,
      Menu,
    },
    setup() {
      let dark: Ref<boolean> = ref(false);
  
      const handleDarkModeChanged = (newDarkValue: boolean) => {
        dark.value = newDarkValue;
        document.documentElement.classList.toggle('ion-palette-dark', newDarkValue);
      };
  
      return {
        dark,
        handleDarkModeChanged,
      };
    },
  });
  </script>