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
      <ion-button @click="addItem"> Add Item</ion-button>
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
  import { IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonButtons, IonMenuButton, IonList, IonItem, IonButton, onIonViewDidEnter } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import Carousel from '@/components/Carousel.vue';
  import Spark from '@/components/Spark.vue';
  import SideBarMenu from '@/components/SideBarMenu.vue';
  import { useToast } from 'vue-toast-notification';
  import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';
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
  const db = ref('')
  const sqlite = ref('')

  onIonViewDidEnter(async () => {
    sqlite.value = new SQLiteConnection(CapacitorSQLite);
    const ret = await sqlite.value.checkConnectionsConsistency();
    const isConn = (await sqlite.value.isConnection("db_vite", false)).result
  
    if (ret.result && isConn) {
      db.value = await sqlite.value.retrieveConnection("db_vite", false);
    } else {
      db.value = await sqlite.value.createConnection(
        "db_vite",
        false,
        "no-encryption",
        1,
        false
      );
    }
    
    loadData();
  });

  const addItem = async () => {
    await db.value?.open();
    await db.value?.query(
      `INSERT INTO test (id, name) values (?, ?)`,
      [Date.now(), "Name " + Date.now()]
    );
  }
  
  const loadData = async () => {
    await db.value?.open();
    const respSelect = await db.value?.query('SELECT * FROM test');
    console.log(`res: ${JSON.stringify(respSelect)}`);
    await db.value?.close();
    items.value = respSelect?.values;
  }
</script>