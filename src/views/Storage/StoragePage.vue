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
      <SideBarMenu />
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Storage</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding d-flex flex-nowrap">
        <v-chip class="ma-2" color="#1B5E20" label>
          <v-icon icon="mdi-filter" start></v-icon>
            Filters:
        </v-chip>
        <v-chip-group filter multiple v-for="category in categorys" :key="category.name">
          <v-chip :color="category.color" variant="elevated" inline v-if="!!category.name">
            {{category.name}}
          </v-chip>
        </v-chip-group>
      </div>

      <div class="d-flex justify-center">
        <v-col cols="auto">
          <v-btn color="secondary" icon="mdi-plus" size="small" @click="openModal"></v-btn>
        </v-col>
      </div>

      <ion-modal :isOpen="modalOpened" @onDidDismiss="closeModal"> 
        <AddProductForm @addProductData="handleGetFormData" @close="closeModal" />
        <v-btn @click="closeModal"></v-btn>
      </ion-modal>

      <div class="ion-padding" id="ProductsGrid" v-for="card in cards" key="card.name">  
          <ProductCard :name="card.name" :color="card.color" :stock="card.stock"/>
      </div>

      <v-btn @click="debugShow"> Show cards data </v-btn>

      <div v-if="debug" class="ion-padding" id="ProductsGrid" v-for="card in cards" key="card.name">  
          <p style="border: 2px; border-style: solid;">
            Name: {{ card.name }} |
            Color: {{ card.color }} |
            Stock: {{ card.stock }}
          </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonModal, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons } from '@ionic/vue';
import { ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import SideBarMenu from '@/components/SideBarMenu.vue';
import AddProductForm from '../Forms/Add Product/AddProductForm.vue'; 

// TODO: Add LocalStorage persistance
// TODO: Later add Pinia state management

const modalOpened = ref(false);

const debug = ref(false);

const cards = ref([]);

const handleGetFormData = (addProductData) => {
  cards.value.push({ ...addProductData });
  console.log(cards);
};

const categorys = [
  {name: "Tech", color: "#6D4C41"},
  {name: "Other", color: "green"}
]

const debugShow = () => {
  debug.value = !debug.value;
}

const openModal = () => {
  modalOpened.value = true;
}

const closeModal = () => {
  modalOpened.value = false;
}
</script>
