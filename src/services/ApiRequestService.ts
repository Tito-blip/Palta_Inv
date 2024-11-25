import { Http } from "@capacitor-community/http";
import { SecureStorage } from "@aparajita/capacitor-secure-storage";
import { HttpResponse } from "@capacitor/core";

const access_token = await SecureStorage.get('newAccessToken');

export async function getUserData() {
    const options = {
        url: 'https://api.mercadolibre.com/users/me',
        headers: {
            Authorization: `Bearer ` + access_token
        }
    }
    
    const response: HttpResponse = await Http.get(options)
    
    SecureStorage.setItem('user_id', response.data.id)
}

export async function getProductsId() {
    const user_id = await SecureStorage.getItem('user_id')

    if (!user_id) {
        console.error('No user_id found');
    }

    const options = {
        url: `http://localhost:8080/https://api.mercadolibre.com//users/${user_id}/items/search`,
        headers: {
            Authorization: `Bearer ` + access_token
        }
    }
    
    const response: HttpResponse = await Http.get(options)

    localStorage.setItem('seller_id', response.data.seller_id)
    localStorage.setItem('products', response.data.results)
}

export async function getProductsData() {
    const products_arr = localStorage.getItem('products') 

    const options = {
        url: `http://localhost:8080/https://api.mercadolibre.com/items?ids=${products_arr}`,
        headers: {
            Authorization: `Bearer ` + access_token
        }
    }
    
    const response: HttpResponse = await Http.get(options)

    localStorage.setItem('products_data', JSON.stringify(response.data))
}

export async function getSalesData() {
    const user_id = await SecureStorage.getItem('user_id')

    const options = {
        url: `http://localhost:8080/https://api.mercadolibre.com/orders/search?seller=${user_id}`,
        headers: {
            Authorization: `Bearer ` + access_token
        }
    }

    const response: HttpResponse = await Http.get(options)

    localStorage.setItem('sales_data', JSON.stringify(response.data))
}