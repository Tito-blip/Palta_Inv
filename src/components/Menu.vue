<template>
    <ion-menu content-id="main">
      <ion-content class="ion-padding">
        <ion-menu-toggle>
          <ion-list lines="none">
            <ion-list-header>
              Navigate
            </ion-list-header>

            <ion-item router-link="/Home" lines="none" button>
              <sl-icon name="house-door-fill"></sl-icon>
              &nbsp;
              <ion-label><b>Home</b></ion-label>
            </ion-item>
  
            <ion-item router-link="/Storage" lines="none" button>
              <sl-icon name="inboxes-fill"></sl-icon>
              &nbsp;
              <ion-label><b>Storage</b></ion-label>
            </ion-item>
  
            <ion-item router-link="/Tracking" lines="none" button>
              <sl-icon name="map-fill"></sl-icon>
              &nbsp;
              <ion-label><b>Tracking</b></ion-label>
            </ion-item>
            
            <ion-item router-link="/Sales" lines="none" button>
              <sl-icon name="piggy-bank-fill"></sl-icon>
              &nbsp;
              <ion-label><b>Sales</b></ion-label>
            </ion-item>
            
            <ion-item router-link="/Stats" lines="none" button>
              <sl-icon name="bar-chart-fill"></sl-icon>
              &nbsp;
              <ion-label><b>Stats</b></ion-label>
            </ion-item>
            
            <ion-item router-link="/Profile" lines="none" button>
              <sl-icon name="person-fill"></sl-icon>
              &nbsp;
              <ion-label><b>Profile</b></ion-label>
            </ion-item>

            <sl-divider></sl-divider>
            
            <ion-button color="warning"> Login </ion-button>
            <ion-button color="danger"> Register   </ion-button>
          </ion-list>
        </ion-menu-toggle>
      </ion-content>
    </ion-menu>
  
    <ion-page id="main">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    </ion-page>
  </template>
  
<script setup lang="ts">
    import { IonMenu, IonContent, IonList, IonListHeader, IonItem, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonMenuToggle, IonLabel, IonButton } from '@ionic/vue';    
</script>

<style scoped>
  ion-menu {
    --width: 250px;
  }
  
  ion-content p {
    font-size: 18px;
    text-align: center;
    color: var(--ion-color-medium);
  }
</style>
  