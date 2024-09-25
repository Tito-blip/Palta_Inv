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
      <ion-grid>
            <ion-row>
                <ion-col>             
                        <h2>Container 1</h2>
                        <p>This is some sample text in container 1.</p>
                        <sl-checkbox>Click</sl-checkbox>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <Card />
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons, IonGrid, IonCol, IonRow } from '@ionic/vue';
import Menu from '@/components/Menu.vue';
import Card from '@/components/Card.vue';
</script>
