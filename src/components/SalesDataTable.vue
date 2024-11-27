<template>
  <!-- Replace with data-table-server later -->
  <v-data-table :items="items" :headers="headers">
    
  </v-data-table>
</template>

<script setup>
import { Preferences } from '@capacitor/preferences';
import { onMounted, ref } from 'vue';

onMounted(async () => {
  try {
    const sales_arr = await Preferences.get({ key: 'sales_data' });
    //console.log('Stored sales:', sales_arr);
    
    if (sales_arr.value) {
      const parsedSales = JSON.parse(sales_arr.value);
      // console.log('Parsed sales:', parsedSales);
      
      // Directly process the stored data
      if (parsedSales && parsedSales.length > 0) {
        parsedSales.forEach(sale => {
          items.value.push({
            product: sale.order_items[0]?.item?.title,
            quantity: sale.order_items[0]?.quantity,
            price: '$' + (sale.paid_amount).toLocaleString(),
            date: sale.date_created.slice(0, 10),
            buyer: sale.buyer?.nickname
          });
        });
      }
    } else {
      console.error('No sales data found in Preferences');
    }
  } catch (error) {
    console.error('Error processing sales data:', error);
  }
});

const headers = ref([
  { title: "Product", key: "product"},
  { title: "Quantity", key: "quantity"},
  { title: "Price", key: "price" },
  { title: "Date", key: "date" },
  { title: "Buyer", key: "buyer" }
]);

const items = ref([
  { product: "Camera", price: "$2000", quantity: "1", date: "01/3/2024", buyer: "John Doe" },
  { product: "TV", price: "$500", quantity: "1", date: "02/11/2024", buyer: "Harry Doe" },
  { product: "Keyboard", price: "$30", quantity: "1", date: "10/12/2023", buyer: "Jane Koe" },
  { product: "Headphones", price: "$100", quantity: "3", date: "05/05/2024", buyer: "Joe Schmo" },
  { product: "Pencil", price: "$10", quantity: "1", date: "01/01/2022", buyer: "Mary Loi" },
  { product: "Clock", price: "$5", quantity: "2", date: "02/07/2024", buyer: "Jane Moe" },
  { product: "Monitor", price: "$300", quantity: "5", date: "20/10/2023", buyer: "Tom Toe" },
]);
</script>

