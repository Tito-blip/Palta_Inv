<template>
  <div class="ion-margin">
  <v-lazy :min-height="200" :options="{'threshold':0.5}" transition="fade-transition">
    <v-card class="mx-auto rounded-lg my-2" max-width="400" elevation="3" :color="color">
      
          <v-img :src="img" class="img-overlay align-end" height="250" cover>
            <div class="overlay-gradient"></div>
            
            <div class="d-flex justify-space-between pa-2">
              <v-chip
                v-if="stock > 0"
                color="success"
                variant="elevated"
              >
                In Stock
              </v-chip>
              <v-chip
                v-else
                color="error"
                variant="elevated"
              >
                Out of Stock
              </v-chip>
              <v-btn
                icon="mdi-pencil"
                size="small"
                color="#8D6E63"
                variant="elevated"
                @click="router.push(`ProductDetails/${id}`)"
              >
              </v-btn>
            </div>
          </v-img>

          <v-card-title class="pt-4 d-flex justify-space-between align-center">
          
          <div class="text-h6 text-truncate me-2">{{ name }}</div>
              <v-chip
                size="small"
                color="#00897B"
                class="text-caption"
              >
                {{ category }}
              </v-chip>
            </v-card-title>
  
            <v-card-text>
            <v-row dense>
              <v-col cols="6">
                <div class="text-subtitle-1 font-weight-bold">
                  <v-icon color="success" icon="mdi-currency-usd" size="small"></v-icon>
                  {{ price }}
                </div>
              </v-col>
            </v-row>

            <v-row dense class="mt-2">
              <v-col cols="12">
                <div class="text-body-2 text-grey-darken-1">
                  <v-icon icon="mdi-package-variant" size="small" class="me-1"></v-icon>
                  Stock: {{ stock }} units
                </div>
              </v-col>
            </v-row>
            
            <v-divider class="mt-4 mb-4"></v-divider>

            <v-row dense class="mt-1">
              <v-col cols="12">
                <div class="text-body-2"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, reiciendis. </div>
              </v-col>
            </v-row>

          </v-card-text>

        </v-card>
      </v-lazy>
    </div>
</template>

<style scoped>
  .img-overlay {
    position: relative;
  }

  .overlay-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
</style>

<script setup>
import router from '@/router';

const props = defineProps({
  id: {
    type: Number,
    default: 0,
    increment: true
  },
  color: {
    type: String,
    default: 'white',
  },
  img: {
    type: String,
    default: 'src/assets/placeholder.png',
  },
  name: {
    type: String,
    default: 'Product',
  },
  stock: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    default: 'MLC',
  }
});
</script>