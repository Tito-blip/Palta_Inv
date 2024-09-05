<template>
    <ion-searchbar color="light" id="custom" placeholder="Custom"></ion-searchbar>
  </template>
  
<script lang="ts" setup>
    import { IonSearchbar } from '@ionic/vue';
</script>

<style>
@media screen and (max-width: 600px) {
    #custom {
        margin: auto;
    }
}
</style>