<template>
  <!-- Replace with data-table-server later -->
  <v-data-table :items="items" :headers="headers">
    <template v-slot:item.actions="{ item }">
      <v-icon class="me-2" size="small" @click=""> mdi-pencil </v-icon>
      <v-icon class="me-2" size="small" @click=""> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script setup>
import { ref } from 'vue';

const headers = ref([
  { title: "Product", key: "product" },
  { title: "Price", key: "price" },
  { title: "Date", key: "date" },
  { title: "Buyer", key: "buyer" },
  { title: "Actions", key: "actions", sortable: false }
]);

const items = ref([
  { product: "Camera", price: "$2000", date: "01/3/2024", buyer: "John Doe" },
  { product: "TV", price: "$500", date: "02/11/2024", buyer: "Harry Doe" },
  { product: "Keyboard", price: "$30", date: "10/12/2023", buyer: "Jane Koe" },
  { product: "Headphones", price: "$100", date: "05/05/2024", buyer: "Joe Schmo" },
  { product: "Pencil", price: "$10", date: "01/01/2022", buyer: "Mary Loi" },
  { product: "Clock", price: "$5", date: "02/07/2024", buyer: "Jane Moe" },
  { product: "Monitor", price: "$300", date: "20/10/2023", buyer: "Tom Toe" },
  { product: "Speakers", price: "$240", date: "06/04/2023", buyer: "Kim Joe" }
]);
</script>