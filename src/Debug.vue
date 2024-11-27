<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title class="text-center">Debug</ion-title>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
        <ion-content>
            <SideBarMenu />
            
            <v-table>
                <thead>
                <tr>
                    <th>Button</th>
                    <th>Response</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> <v-btn color="secondary" size="big" @click="authApp"> Authorize App </v-btn> </td>
                    <td class="text-h6">{{ apiLogged }}</td>
                </tr>
                <tr>
                    <td> <v-btn color="secondary" size="big" @click="getAccessToken"> Access Token </v-btn> </td>
                    <td class="text-h6">{{ accessToken }}</td>
                </tr>
                <tr>
                    <td> <v-btn color="secondary" size="big" @click="exchangeToken"> Exchange Token </v-btn> </td>
                    <td class="text-h6">{{ exchangeTokenValue }}</td>
                </tr>
                <tr>
                    <td> <v-btn color="secondary" size="big" @click="getUserData"> User Id </v-btn> </td>
                    <td class="text-h6">{{ user_id }}</td>
                </tr>
                <tr>
                    <td> <v-btn color="secondary" size="big" @click="getProductsId"> Products </v-btn> </td>
                    <td class="text-h6">{{ products }}</td>
                </tr>
                <tr>
                    <td> <v-btn color="secondary" size="big" @click="getProductsData"> Products Data </v-btn> </td>
                    <td v-if="products_data && products_data.length > 0 && products_data[0]">
                        <div v-for="product in products_data[0]" :key="product"> {{ product.body }} </div>
                        <!-- {{ products_data }} -->
                    </td>
                    <td v-else>
                        No product data available
                    </td>
                </tr>
                <tr>
                    <td> <v-btn color="secondary" size="big" @click="getSalesData"> Sale id </v-btn> </td>
                    <td class="text-h6">{{ user_id }}</td>
                </tr>
                <tr>
                    <td><form class="ma-auto" style="max-width: 400px; width: 100%;" @submit.prevent="submit">
                    <v-text-field
                    v-model="token.value.value"
                    :counter="30"
                    label="Token"
                    placeholder="Auth Token"
                    ></v-text-field>

                    <v-btn class="me-4" type="submit" color="#81C784"> Submit </v-btn>
                </form></td>
                </tr>
                </tbody>
            </v-table>
        </ion-content>
    </ion-page>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { IonContent, IonPage, IonTitle, IonMenuButton, IonButtons, IonToolbar, IonHeader } from '@ionic/vue';
import { getAccessToken, exchangeToken } from '@/services/OAuthService';
import { getProductsData, getProductsId, getSalesData, getUserData } from '@/services/ApiRequestService';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import SideBarMenu from '@/components/SideBarMenu.vue';
import { Preferences } from '@capacitor/preferences';
import { useField } from 'vee-validate';

const APP_ID = ref(import.meta.env.VITE_APP_ID);
const REDIRECT_URI = ref(import.meta.env.VITE_REDIRECT_URI);

const token = useField('token');

const submit = async () => {
    await Preferences.set({ key: 'authToken', value: token.value.value });
    apiLogged = token.value.value;
    console.log('Saved', apiLogged);
};

const getToken = async () => {
    const { code } = await Preferences.get({ key: 'authToken' });
    console.log(`Hello ${code}!`);
};

const accessToken = ref('');
const exchangeTokenValue = ref('');
const user_id = ref('');
let apiLogged = ref('');
const products = ref([]);
const products_data = ref([]);

onMounted(async () => {
  try {
    const productsDataRaw = await Preferences.get({ key: 'products_data' });
    products_data.value = productsDataRaw.value ? JSON.parse(productsDataRaw.value) : [];
    
    if (!products_data.value || !Array.isArray(products_data.value) || !products_data.value[0]) {
      console.warn('products_data is empty or not structured correctly');
    }

    // Other data retrieval
    products.value = JSON.parse((await Preferences.get({ key: 'products' })).value);
    apiLogged.value = await getToken();
    accessToken.value = await Preferences.get({ key: 'newAccessToken' });
    exchangeTokenValue.value = await Preferences.get({ key: 'newRefreshToken' });
    user_id.value = await Preferences.get({ key: 'user_id' });
    console.log('Retrieved User ID:', user_id.value);
  } catch (error) {
    console.error('Error loading data:', error);
  }
});

// Open browser in-app to authenticate api. If the platform is PWA opens on new tab instead.

const authApp = async () => {
    if (Capacitor.isNativePlatform()) {
        await Browser.open({ url: `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${APP_ID.value}&redirect_uri=${REDIRECT_URI.value}`
    });
    } else {
        window.location.href = `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${APP_ID.value}&redirect_uri=${REDIRECT_URI.value}`;
    }
};

</script>