import axios from "axios";
import { SecureStorage } from "@aparajita/capacitor-secure-storage";
import { Preferences } from "@capacitor/preferences";

const url = 'https://api.mercadolibre.com/oauth/token';

const config = {
  headers: {
    'accept': 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
  }
};

/**
 * Don't set token response on storage when using PWA, only use for dev or mobile version.
 * Replace with PKCE flow.
 * 
 * 
 * Preferences API usage only for testing, replace with DB solution for mass data. Use safer solution for sensitive data.
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
        const code = await Preferences.get({ key: 'authToken' });
        const data = new URLSearchParams();
        console.log(code.value);
        data.append('grant_type', 'authorization_code');
        data.append('client_id', import.meta.env.VITE_APP_ID);
        data.append('client_secret', import.meta.env.VITE_APP_SECRET);
        data.append('code', code.value || ''); // code has value or is null
        data.append('redirect_uri', import.meta.env.VITE_REDIRECT_URI);
        console.log(data.values);
        const response = await axios.post(url, data, config);
        await Preferences.set({ key: 'accessToken', value: response.data.access_token });
        await Preferences.set({ key: 'refreshToken', value: response.data.refresh_token });
        await Preferences.remove({ key: 'authToken' });
        console.log('| | |');
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
        const refresh = await Preferences.get({ key: 'refreshToken' });
        console.log(refresh.value);
        const data = new URLSearchParams();
        data.set('grant_type', 'refresh_token');
        data.set('client_id', import.meta.env.VITE_APP_ID);
        data.set('client_secret', import.meta.env.VITE_APP_SECRET);
        data.set('refresh_token', refresh.value || '');

        const response = await axios.post(url, data, config);
        await Preferences.remove({key: 'accessToken'})
        await Preferences.remove({key: 'refreshToken'})
        await Preferences.set({key: 'newAccessToken', value: response.data.access_token})
        await Preferences.set({ key: 'newRefreshToken', value: response.data.refresh_token })
        console.log('| | |');
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