import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'budget',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    url: 'http://172.23.32.1:3000',
    cleartext: true,
  },
};

export default config;
