<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/Home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="storage" href="/Storage">
          <ion-icon aria-hidden="true" :icon="storefront" />
          <ion-label>Storage</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tracking" href="/Tracking">
          <ion-icon aria-hidden="true" :icon="archive" />
          <ion-label>Tracking</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="sales" href="/Sales">
          <ion-icon aria-hidden="true" :icon="cash" />
          <ion-label>Sales</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="stats" href="/Stats">
          <ion-icon aria-hidden="true" :icon="star" />
          <ion-label>Stats</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/Profile">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { home, storefront, archive, cash, star, person } from 'ionicons/icons';
</script>
