<template>
    <ion-page>
        <ion-content>
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
                    <td>
                        <div v-for="product in products_data[0]" :key="product"> {{ product.body }} </div>
                        <!-- {{ products_data }} -->
                    </td>
                </tr>
                <tr>
                    <td> <v-btn color="secondary" size="big" @click="getSalesData"> Sale id </v-btn> </td>
                    <td class="text-h6">{{ user_id }}</td>
                </tr>
                </tbody>
            </v-table>
        </ion-content>
    </ion-page>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { IonContent } from '@ionic/vue';
import { getAccessToken, exchangeToken } from '@/services/OAuthService';
import { getProductsData, getProductsId, getSalesData, getUserData } from '@/services/ApiRequestService';
import { SecureStorage } from '@aparajita/capacitor-secure-storage';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';

const APP_ID = ref(import.meta.env.VITE_APP_ID);
const REDIRECT_URI = ref(import.meta.env.VITE_REDIRECT_URI);

const apiLogged = localStorage.getItem('apiLogged');
const accessToken = ref('');
const exchangeTokenValue = ref('');
const user_id = ref('');
const products = localStorage.getItem('products');
const products_data = ref([JSON.parse(localStorage.getItem('products_data'))]);

onMounted(async () => {
    accessToken.value = await SecureStorage.getItem('newAccessToken') || '';
    exchangeTokenValue.value = await SecureStorage.getItem('newRefreshToken') || '';
    user_id.value = await SecureStorage.getItem('user_id') || '';
});

// Open browser in-app to authenticate api. If the platform is PWA opens on new tab instead.

const authApp = async () => {
    if (Capacitor.isNativePlatform()) {
        await Browser.open({ url: `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${APP_ID.value}&redirect_uri=${REDIRECT_URI.value}&code_challenge=$CODE_CHALLENGE&code_challenge_method=$CODE_METHOD`
    });
    } else {
        window.location.href = `https://auth.mercadolibre.cl/authorization?response_type=code&client_id=${APP_ID.value}&redirect_uri=${REDIRECT_URI.value}`;
    }
};

</script>