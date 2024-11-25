<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary">
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title class="text-center">Register</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding d-flex justify-center align-center">
        <form class="ma-auto" style="max-width: 400px; width: 100%;">
          <v-text-field label="Name" placeholder="Jhon Doe" class="mb-4"></v-text-field>  
          <v-text-field label="Email" placeholder="johndoe@gmail.com" class="mb-4"></v-text-field>
          <v-text-field label="Password" placeholder="*****" class="mb-4"></v-text-field>
          <div class="d-flex justify-space-between mt-4">
            <v-btn color="success">Submit</v-btn>
            <v-btn color="red">Cancel</v-btn>
          </div>
        </form>
      </ion-content>
    </ion-page>
</template>
  
<script setup>
    import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/vue';
</script>

<style scoped>
    .ion-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    }
</style>
  