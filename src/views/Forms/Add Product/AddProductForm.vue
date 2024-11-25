<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" class="text-white">
        <ion-title class="text-center">Add Product</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content class="ion-padding d-flex justify-center align-center">
      <form class="ma-auto" style="max-width: 400px; width: 100%;" @submit.prevent="submit">
        <v-text-field
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Name"
          placeholder="Product Name"
        ></v-text-field>
  
        <v-text-field
          v-model="price.value.value"
          :error-messages="price.errorMessage.value"
          label="Price"
          placeholder="1000"
          type="number"
          min="1"
        ></v-text-field>

        <v-text-field
            v-model="stock.value.value"
            :error-messages="stock.errorMessage.value"
            label="Stock"
            placeholder="0"
            type="number"
            min="0"
        ></v-text-field>
        
        <v-text-field
          v-model="category.value.value"
          :error-messages="category.errorMessage.value"
          counter="4"
          label="Category"
          placeholder="MLC"
        ></v-text-field>

        <v-text-field
          v-model="image.value.value"
          placeholder="Url"
          label="Image"
        ></v-text-field>

        <!-- ! Change stock text field. Error: returns string -->
        
        <!--* TODO: Add missing fields. -->

        <v-btn class="me-4" type="submit" color="#81C784"> Submit </v-btn>

        <v-btn @click="handleReset" color="#FFE082"> Clear </v-btn>
        &nbsp;

        <v-btn @click="$emit('close')" color="#E57373"> Close </v-btn>
      </form>
    </ion-content>
  </ion-page>
  
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { useField, useForm } from 'vee-validate';
    import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
    import { useToast } from 'vue-toast-notification';

    const emit = defineEmits(['close', 'addProductData']);
    const $toast = useToast();

    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name (value) {
          if (value?.length >= 4) return true
  
          return 'Name needs to be at least 4 characters.'
        },
        category (value) {
          if (value?.length >= 4) return true
  
          return 'Category needs to be at least 4 characters.'
        },
        price (value) {
          if (value >= 1) return true
  
          return 'Needs to be greater or equal than 1.'
        },
        stock (value) {
            if (value >= 0) return true

            return 'Must be a valid number.'
        },
      } 
    })
    
    const name = useField('name')
    const stock = useField('stock')
    const price = useField('price')
    const category = useField('category')
    const image = useField('image')

    const submit = handleSubmit(() => {
        const addProductData = {
            name: name.value.value,
            price: price.value.value,
            stock: stock.value.value,
            category: category.value.value,
            img: image.value.value
        }
        $toast.success(`Product ${name.value.value} added successfuly!`, {
          position: 'top',
          duration: 2000
        })
        emit('addProductData', addProductData);
        emit('close');
    })
  </script>