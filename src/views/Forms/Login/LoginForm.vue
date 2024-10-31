<template>
  <ion-page>
  <ion-header>
    <ion-toolbar color="secondary">
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Login</ion-title>
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
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        label="Option"
        type="checkbox"
        value="1"
      ></v-checkbox>

      <v-btn
        class="me-4"
        type="submit"
      >
        submit
      </v-btn>

      <v-btn @click="handleReset">
        clear
      </v-btn>
    </form>
  </ion-content>
</ion-page>

</template>

<script setup>
  import { ref } from 'vue';
  import { useField, useForm } from 'vee-validate';
  import { IonPage, IonContent, IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle } from '@ionic/vue';
  import router from '@/router';

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 4) return true

        return 'Name needs to be at least 4 characters.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      checkbox (value) {
        if (value === '1') 
          return true

        return 'Must be checked.'
      },
    },
  })

  const name = useField('name')
  const email = useField('email')
  const checkbox = useField('checkbox')

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
    router.push("/")
    console.log(name.value.value, email.value.value, checkbox.value.value)
    loggedIn.value = true
  })
</script>