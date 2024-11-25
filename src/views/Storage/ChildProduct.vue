<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
          <ion-title class="text-center">Storage</ion-title>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Storage</ion-title>
        </ion-toolbar>
      </ion-header>

      <h1>{{ product_id }}</h1>
    </ion-content>
</ion-page>
</template>

<script setup>
    import { IonBackButton, IonTitle, IonButtons, IonPage, IonContent, IonHeader, IonToolbar } from '@ionic/vue';
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    
    const products_data = ref([JSON.parse(localStorage.getItem('products_data'))]);
    const route = useRoute();
    const product_id = route.params;  
</script>