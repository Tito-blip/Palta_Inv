<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
          <ion-title class="text-center">Storage</ion-title>
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
      </ion-modal>

      <div class="ion-padding" id="ProductsGrid">  
        <div>
          <ProductCard :name="TestCard.name" :stock="TestCard.stock" :price="TestCard.price" :category="TestCard.category"/>
          <ProductCard v-for="card in cards" :key="card.name" :name="card.name" :stock="card.stock" :price="card.price" :category="card.categroy":img="card.img"/>
        </div>
        <div v-if="products_data"> <!-- Render the api data -->
          <ProductCard v-for="(product, index) in products_data" :key="index" :name="product.body.title" :stock="product.body.available_quantity" :price="product.body.price" :category="product.body.category_id" :img="product.body.thumbnail"/>
        </div>
      </div>

      <v-btn @click="debugShow"> Show cards data </v-btn>
      <!-- Iterates through cards array to render the data. From the form -->
      <div v-if="debug" class="ion-padding" id="ProductsGrid" v-for="card in cards" key="card.name">  
          <p style="border: 2px; border-style: solid;">
            Name: {{ card.name }} |
            Color: {{ card.color }} |
            Stock: {{ card.stock }} | 
            Image: {{ card.img }}
          </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonModal, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import SideBarMenu from '@/components/SideBarMenu.vue';
import AddProductForm from '../Forms/Add Product/AddProductForm.vue'; 
import { Preferences } from '@capacitor/preferences';

// TODO: Add LocalStorage persistance
// TODO: Pinia state management

onMounted(async () => {
  const storedData = await Preferences.get({ key: 'products_data' });
  products_data.value = storedData.value ? JSON.parse(storedData.value) : [];
  console.log(products_data.value)
})

const modalOpened = ref(false);

const debug = ref(false);

const cards = ref([]);

const TestCard = ref({name: 'TestCard', stock: 15, price: 1000, category: 'Tech'})

const products_data = ref([]);

const handleGetFormData = (addProductData) => { // Saves form data to array for displaying on view.
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
