<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title class="align-center">Login</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content class="ion-padding d-flex justify-center align-center">
      <form class="ma-auto" style="max-width: 400px; width: 100%;" @submit.prevent="submit">
        <v-text-field
          v-model="name.value.value"
          :counter="10"
          :error-messages="name.errorMessage.value"
          label="Name"
        ></v-text-field>
  
        <v-text-field
          v-model="color.value.value"
          :counter="7"
          :error-messages="color.errorMessage.value"
          label="Color"
        ></v-text-field>

        <v-text-field
            v-model="stock.value.value"
            :error-messages="stock.errorMessage.value"
            label="Stock"
            type="number"
        ></v-text-field>
        
        <!-- ! Change stock text field. Error: returns string -->
        
        <!--* TODO: Add missing fields. -->

        <v-btn
          class="me-4"
          type="submit"
        >
          submit
        </v-btn>
  
        <v-btn @click="handleReset">
          clear
        </v-btn>

        <v-btn @click="$emit('close')"> Close </v-btn>
      </form>
    </ion-content>
  </ion-page>
  
  </template>
  
  <script setup>
    import { ref, defineEmits } from 'vue';
    import { useField, useForm } from 'vee-validate';
    import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

    const emit = defineEmits(['close', 'addProductData']);

    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name (value) {
          if (value?.length >= 4) return true
  
          return 'Name needs to be at least 4 characters.'
        },
        color (value) {
          if (value?.length >= 7) return true
  
          return 'Must be a valid e-mail.'
        },
        stock (value) {
            if (value >= 0) return true

            return 'Must be a valid number.'
        },
      } 
    })
  
    const name = useField('name')
    const color = useField('color')
    const stock = useField('stock')

    const submit = handleSubmit(() => {
        const addProductData = {
            name: name.value.value,
            color: color.value.value,
            stock: stock.value.value
        }
        emit('addProductData', addProductData);
        emit('close');
    })
  </script>

  <!--

    submit => data => [{formData}] => cards.value.push({ ...addProductData }); => v-for show cards 

  -->