<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Storage Management</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
        <div class="storage-container">
          <v-card 
            class="storage-card elevation-6 rounded-lg"
            style="background: linear-gradient(145deg, #f0f4f8 0%, #e6eef5 100%)"
          >
            <v-card-title class="d-flex justify-space-between align-center pa-4 pb-0">
              <div class="d-flex align-center">
                <v-icon 
                  icon="mdi-harddisk" 
                  color="primary" 
                  size="large" 
                  class="mr-3"
                ></v-icon>
                <span class="text-h6 font-weight-bold">Storage Usage</span>
              </div>
              <ion-text color="medium" class="text-caption">
                {{ remaining }}GB / {{ stats.total }}GB
              </ion-text>
            </v-card-title>
  
            <v-card-text class="pa-4">
              <v-progress-linear
                :model-value="usagePercentage"
                color="primary"
                height="15"
                rounded
                striped
                class="mb-4"
              >
                <template v-slot:default>
                  <span class="text-caption font-weight-bold">{{ usagePercentage }}%</span>
                </template>
              </v-progress-linear>
  
              <v-list 
                density="compact" 
                class="pa-0 storage-list"
                lines="two"
              >
                <v-list-item
                  v-for="(item, index) in stats.fileTypes"
                  :key="index"
                  :prepend-icon="item.icon"
                  :title="item.type"
                  :subtitle="`${item.size}GB used`"
                  class="px-0 storage-list-item"
                >
                  <template v-slot:append>
                    <v-chip
                      :color="item.color"
                      size="small"
                      class="font-weight-bold"
                    >
                      {{ Math.round((item.size / stats.used) * 100) }}%
                    </v-chip>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
  
            <v-card-actions class="pa-4 pt-0">
              <v-btn 
                color="primary" 
                variant="tonal" 
                block 
                @click="handleCleanup" 
                class="mr-2"
              >
                <ion-icon :icon="trashOutline" slot="start"></ion-icon>
                Clean Up
              </v-btn>
              <v-btn 
                color="primary" 
                variant="elevated" 
                block 
                @click="handleUpgrade"
              >
                <ion-icon :icon="cloudUploadOutline" slot="start"></ion-icon>
                Upgrade Storage
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonText,
    IonIcon 
  } from '@ionic/vue';
  import { computed } from 'vue';
  import { trashOutline, cloudUploadOutline } from 'ionicons/icons';
  
  const props = defineProps({
    stats: {
      type: Object,
      required: true,
      default: () => ({
        total: 100,
        used: 0,
        fileTypes: []
      })
    }
  });
  
  const remaining = computed(() => props.stats.total - props.stats.used);
  const usagePercentage = computed(() => Math.round((props.stats.used / props.stats.total) * 100));
  
  const emit = defineEmits(['cleanup', 'upgrade']);
  
  const handleCleanup = () => emit('cleanup');
  const handleUpgrade = () => emit('upgrade');
  </script>
  
  <style scoped>
  .storage-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .storage-card {
    width: 100%;
    max-width: 500px;
    border-radius: 16px !important;
  }
  
  .storage-list {
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
  }
  
  .storage-list-item {
    transition: background-color 0.3s ease;
  }
  
  .storage-list-item:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  </style>