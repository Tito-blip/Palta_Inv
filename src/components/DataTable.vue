<template>
  <EasyDataTable
    theme-color="#1d90ff"
    table-class-name="customize"
    :headers="headers"
    :items="items"
  />
</template>

<script lang="ts" setup>
import type { Header, Item } from "vue3-easy-data-table";
import 'vue3-easy-data-table/dist/style.css';

const headers: Header[] = [
  // Category *
  // Image *
  { text: "Product", value: "product" },
  { text: "Price", value: "price"},
  { text: "Date", value: "date"},
  { text: "Buyer", value: "buyer"},
];

const items: Item[] = [
  // Get sales from DB | API
  // Load dynamically  
  { product: "Camera", price: "$2000", date: "01/3/2024", buyer: "Jhon Doe"},
  { product: "TV", price: "$500", date: "02/11/2024", buyer: "Harry Doe"},
  { product: "Keyboard", price: "$30", date: "10/12/2023", buyer: "Jane Koe"},
  { product: "Headphones", price: "$100", date: "05/05/2024", buyer: "Joe Schmo"},
  { product: "Pencil", price: "$10", date: "01/01/2022", buyer: "Mary Loi"},
  { product: "Clock", price: "$5", date: "02/07/2024", buyer: "Jane Moe"},
  { product: "Monitor", price: "$300", date: "20/10/2023", buyer: "Tom Toe"},
  { product: "Speakers", price: "$240", date: "06/04/2023", buyer: "Kim Joe"},
];
</script>

<style>
.customize {
    --easy-table-border: 5px solid #262626;
}
</style>