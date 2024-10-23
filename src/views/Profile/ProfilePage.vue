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
        <SideBarMenu />
        
      <v-sheet max-width="400" class="pa-6 mx-auto">
          <div class="d-flex justify-center">
            <v-avatar class="ma-3" rounded="1" size="125">
              <v-img src="https://picsum.photos/400"></v-img>
            </v-avatar>
          </div>
          <div class="justify-center">
            <h2 class="text-center"> Jhon Doe </h2>
          </div>
      </v-sheet>

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
  import SideBarMenu from '@/components/SideBarMenu.vue';
</script>