<template>
  <div class="ion-margin">
  <v-lazy :min-height="200" :options="{'threshold':0.5}" transition="fade-transition">
    <v-card class="mx-auto" max-width="400" :color="color">

      <v-img :src="img">
      </v-img>

    <v-card-actions>
      <v-list-item class="w-100">

        <v-list-item-title>{{ name }}</v-list-item-title>

        <v-list-item-subtitle>Stock: {{ stock }}</v-list-item-subtitle>

        <template v-slot:append>
          <div class="align-end">
            <v-btn icon="mdi-pencil"></v-btn>
            &nbsp;
          </div>
        </template>
        </v-list-item>
        </v-card-actions>
        </v-card>
        </v-lazy>
      </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  img: {
    type: String,
    default: 'src/assets/product-placeholder.jpg',
  },
  name: {
    type: String,
    default: 'Product',
  },
  stock: {
    type: Number,
    default: 0,
  }
});
</script>