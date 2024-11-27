<template>
  <ion-page>
   <ion-content>
    <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-title class="text-center"> Home </ion-title>
          <ion-buttons slot="start">
            <ion-button>
              <ion-menu-button></ion-menu-button>
            </ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button>
              <ion-button @click="toggle()">
                <ion-icon aria-hidden="true" :icon="search"></ion-icon>
              </ion-button>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <SideBarMenu />
      <ion-searchbar v-if="toggled" v-on:ion-cancel="closeToggle" class="custom" show-cancel-button="always" placeholder="Search"></ion-searchbar>
      <!--<ion-button @click="addItem"> Add Item</ion-button>-->
      <ion-list>
        <ion-item v-for="item in items" :key="item.id">
          {{ item.name }}
        </ion-item>
      </ion-list>
      <Carousel />
      <div class="ion-padding mb-1">
        <Spark />
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
  ion-searchbar.custom {
    --box-shadow: none;
    --background: #dcdcdc;
    --border-radius: 1rem;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
  }
</style>

<script setup>
  import { IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButtons, IonMenuButton, IonList, IonItem, IonButton } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import Carousel from '@/components/Carousel.vue';
  import Spark from '@/components/Spark.vue';
  import SideBarMenu from '@/components/SideBarMenu.vue';
  import { createDatabase } from '@/services/DatabaseService'
  import { useToast } from 'vue-toast-notification';
  import { CapacitorSQLite } from '@capacitor-community/sqlite';
  import { search } from 'ionicons/icons';

  const toggled = ref(false);

  function toggle() {
    toggled.value = true;
  }

  function closeToggle() {
    toggled.value = false;
  }

  const $toast = useToast();

  // Show alert after API authentication
  const showToastSuccess = localStorage.getItem('showToastSuccess'); // Replace with state management or other solution.
  const showToastError = localStorage.getItem('showToastError');

  if (showToastSuccess) {
    $toast.success('Api authorized!', {
      position: 'top',
      duration: 5000
    })
    localStorage.removeItem('showToastSuccess')
  } else if (showToastError)  {
    $toast.error(`An error ocurred! ${showToastError}`, { // `An error ocurred! ${message}`
      position: 'top',
      duration: 5000
    })
    localStorage.removeItem('showToastError')    
  }

  const items = ref([])

  /** Apply when testing on mobile
  onMounted(async () => {
    await createDatabase();
    await fetchItems();
    console.log('DB Created!')
  });

  async function fetchItems() {
    const db = await CapacitorSQLite.createConnection(
      'myDb',
      false,
      'no-encryption',
      1
    );
    await db.open();
    const res = await db.query('SELECT * FROM items');
    items.value = res.values;
    await CapacitorSQLite.closeConnection('myDb');
    console.log('DB Closed!')
  }

  async function addItem() {
    const db = await CapacitorSQLite.createConnection(
    'myDb',
    false,
    'no-encryption',
    1
    );
    await db.open();
    const name = `Item ${items.value.length + 1}`;
    await db.run('INSERT INTO items (name) VALUES (?);', [name]);
    console.log('Items inserted')
    await CapacitorSQLite.closeConnection('myDb');
    await fetchItems();
  }
*/
</script>