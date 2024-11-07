import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.palta.inv',
  appName: 'Palta_Inv',
  webDir: 'dist',
  server: {
    hostname: 'localhost',
    androidScheme: 'https'
  }
};

export default config;
