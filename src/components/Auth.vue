<template>
  <div class="d-flex align-center justify-center fill-height"> 
    <div class="d-flex flex-column align-center">
      <v-progress-circular class="text-center" :indeterminate="true" color="green" size="90" width="5"></v-progress-circular>
      <v-text class="text-center text-h5 font-weight-medium mt-4">Loading...</v-text>
    </div>
  </div>
</template>

<script setup>
  import { SecureStorage } from '@aparajita/capacitor-secure-storage';
  import { onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  onMounted(() => {

    // If route has code in url, get the token, and save to encrypted storage.

    let code = route.query.code;

    if (code) { 
      SecureStorage.setItem('authToken', code);
      localStorage.setItem('apiLogged', true); // localStorage used only for testing
      localStorage.setItem('showToastSuccess', true)
    } else {
      console.error('No code found in URL');
      localStorage.remove('apiLogged', false);
      localStorage.setItem('showToastError', true)
    }

    router.push('/Home')
  });
</script>