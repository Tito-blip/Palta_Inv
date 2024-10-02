<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Profile</ion-title>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <Menu />

        <div id="container">
          <sl-avatar
            image="https://picsum.photos/500?random=2" alt="">
          </sl-avatar>
        </div>
      </ion-content>
    </ion-page>
</template>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

<script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons } from '@ionic/vue';
</script>