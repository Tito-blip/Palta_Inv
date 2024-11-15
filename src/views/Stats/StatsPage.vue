<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Stats</ion-title>
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
      <div>
        <v-btn color="secondary" size="big" @click="authApp"> Authorize App </v-btn>
      </div>
      <div>
        <v-btn color="primary" size="big" @click="getAccessToken"> Access Token </v-btn>
      </div>
      <div>
        <v-btn color="tertiary" size="big" @click="exchangeToken"> Refresh Token </v-btn>
      </div>
      <div>
        <v-btn color="tertiary" size="big" @click="logoutApi"> Remove Api </v-btn>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/vue';
  import Menu from '@/components/SideBarMenu.vue';
  import Spark from '@/components/Spark.vue';
  import { Browser } from '@capacitor/browser';
  import { Capacitor } from '@capacitor/core';
  import { ref } from 'vue';
  import { getAccessToken, exchangeToken, logoutApi } from '@/services/OAuthService';

  const APP_ID = ref(import.meta.env.VITE_APP_ID);
  const REDIRECT_URI = ref(import.meta.env.VITE_REDIRECT_URI);

  // Open browser in-app to authenticate api. If the platform is PWA opens on new tab instead.

  const authApp = async () => {
    if (Capacitor.isNativePlatform()) {
      await Browser.open({ url: `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${APP_ID.value}&redirect_uri=${REDIRECT_URI.value}&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD`
    });
    } else {
      window.location.href = `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${APP_ID.value}&redirect_uri=${REDIRECT_URI.value}`;
    }
  };
</script>