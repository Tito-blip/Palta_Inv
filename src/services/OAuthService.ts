import axios from "axios";
import { SecureStorage } from "@aparajita/capacitor-secure-storage";

const url = 'https://api.mercadolibre.com/oauth/token';

const data = new URLSearchParams();
const code = await SecureStorage.getItem('authToken');
const refresh = await SecureStorage.getItem('refreshToken');

data.append('grant_type', 'refresh_token');
data.append('client_id', import.meta.env.VITE_APP_ID);
data.append('client_secret', import.meta.env.VITE_APP_SECRET);
data.append('refresh_token', 'TG-673513aacac41100014ffcd1-2092614606')
//data.append('code', code || ''); // code has value or is null
//data.append('redirect_uri', import.meta.env.VITE_REDIRECT_URI);

const config = {
  headers: {
    'accept': 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
  }
};

/**
 * Don't set token response on storage when using PWA, only use for dev or mobile version.
 * Replace with PKCE flow.
*/

/**
 * Retrieves an access token by making a POST request to the specified URL with the provided data and configuration.
 * On successful response, stores the access token and refresh token in secure storage and removes the auth token.
 * 
 * @throws Will throw an error if the request fails.
 * 
 * @returns {Promise<void>} A promise that resolves when the tokens are successfully stored.
 */

export async function getAccessToken() {
    try {
        const response = await axios.post(url, data, config);
        console.log('Response:', response.data);
        SecureStorage.set('accessToken', response.data.access_token)
        SecureStorage.set('refreshToken', response.data.refresh_token)
        SecureStorage.removeItem('authToken')
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

/**
 * Exchanges the current access and refresh tokens for new ones.
 * 
 * This function sends a POST request to the specified URL with the provided data and configuration.
 * Upon a successful response, it removes the old access and refresh tokens from secure storage
 * and stores the new tokens.
 * 
 * @throws Will throw an error if the token exchange fails.
 */

export async function exchangeToken() {
    try {
        const response = await axios.post(url, data, config);
        SecureStorage.removeItem('accessToken')
        SecureStorage.removeItem('refreshToken')
        SecureStorage.set('newAccessToken', response.data.access_token)
        SecureStorage.set('newRefreshToken', response.data.refresh_token)
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

/**
 * Logs out the user by clearing secure storage and removing the 'apiLogged' item from local storage.
 * Also logs a success message to the console.
 */

export function logoutApi()  {
    // Add request to remove user from authenticated list.
    SecureStorage.clear()
    localStorage.removeItem('apiLogged')
    console.info('Logout successfull')
};