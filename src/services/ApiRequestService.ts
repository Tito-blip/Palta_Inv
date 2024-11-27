import { Preferences } from "@capacitor/preferences";
import axios from 'axios';

const access_token = await Preferences.get({ key: 'newAccessToken' });

export async function getUserData() {
    try {
        const options = {
            url: 'https://api.mercadolibre.com/users/me',
            headers: {
                Authorization: `Bearer ` + access_token.value
            }
        }
        
        const response = await axios.get(options.url, { headers: options.headers });

        Preferences.set({ key: 'user_id', value: String(response.data.id) })
    } catch (error) {
        throw error;
    }
}

export async function getProductsId() {
    try {
        const user_id = await Preferences.get({ key: 'user_id' });

        if (!user_id.value) {
            throw new Error('No user_id found');
        }

        const options = {
            url: `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/users/${user_id.value}/items/search`,
            headers: {
                Authorization: `Bearer ${access_token.value}`
            }
        }
   
        const response = await axios.get(options.url, { headers: options.headers });
        
        await Preferences.set({ key: 'seller_id', value: String(response.data.seller_id )});
        await Preferences.set({ key: 'products', value: JSON.stringify(response.data.results) });
        console.log('Userid ', user_id.value)
        console.log(JSON.stringify(response.data.results))
    } catch (error) {
        console.error('Error getting products:', error);
        throw error;
    }
}

export async function getProductsData() {
    const products_arr = await Preferences.get({ key: 'products'})
    
    if (!products_arr.value) { // Check if not null to parse
        throw new Error('No products found');
    }

    const options = {
        url: `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/items?ids=${JSON.parse(products_arr.value)}`,
        headers: {
            Authorization: `Bearer ` + access_token.value
        }
    }
    
    const response = await axios.get(options.url, { headers: options.headers });

    Preferences.set({ key: 'products_data', value: JSON.stringify(response.data)})
}

export async function getSalesData() {
    const user_id = await Preferences.get({ key: 'user_id' })

    const options = {
        url: `https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/orders/search?seller=${user_id.value}`,
        headers: {
            Authorization: `Bearer ` + access_token.value
        }
    }

    const response = await axios.get(options.url, { headers: options.headers });

    Preferences.set({ key: 'sales_data', value: JSON.stringify(response.data.results) })
    console.log(JSON.stringify(response.data.results))
}