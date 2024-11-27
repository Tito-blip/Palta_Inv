<template>
    <ion-menu content-id="main-content">
      <ion-content>
        <div class="menu-header-bg"></div>
          <div class="header-content">
            <img src="../assets/logo.png" alt="">
            <ion-label>
              <h2>User</h2>
              <p>Welcome!</p>
            </ion-label>
          </div>
        <ion-list class="menu-items" lines="none">
        <ion-menu-toggle :auto-hide="false" v-for="p in appPages" :key="p.title">
            <ion-item :class="{ active: isActive(p.url) }" button @click="navigate(p.url)">
            <ion-icon slot="start" :icon="p.icon"></ion-icon>
            &nbsp;
            <ion-label>
              {{p.title}}
            </ion-label>
          </ion-item>
        </ion-menu-toggle>

        <ion-menu-toggle :auto-hide="false">
          <ion-item v-if="loggedIn" :class="{ active: isActive('/Profile') }" button  @click="navigate('/Profile')">
            <ion-icon slot="start" :icon="personCircleOutline"></ion-icon>
            &nbsp;
            <ion-label>
              Profile
            </ion-label>
          </ion-item>
 
          <ion-item v-if="loggedIn" button @click="logout()">
            <ion-icon slot="start" :icon="logOutOutline"></ion-icon>
            <ion-label>
              Logout
            </ion-label>
          </ion-item>
        </ion-menu-toggle>

        <ion-menu-toggle :auto-hide="false">
          <ion-item v-if="!loggedIn" button @click="navigate('/Login')">
            <ion-icon slot="start" :icon="logInOutline"></ion-icon>
            <ion-label>
              Login
            </ion-label>
          </ion-item>

          <ion-item v-if="!loggedIn" button @click="navigate('/Register')">
            <ion-icon slot="start" :icon="accessibilityOutline"></ion-icon>
            <ion-label>
              Signup
            </ion-label>
          </ion-item>
        </ion-menu-toggle>

        <ion-item class="mt-10">
          <ion-icon slot="start" :icon="contrastOutline"></ion-icon>
            <ion-toggle :checked="paletteToggle" @ionChange="toggleChange($event)" label-placement="start">
                Dark Mode
            </ion-toggle>
        </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main"></ion-router-outlet>
</template>

<style scoped>
  .menu-header-bg {
    height: 180px;
    width: 350px;
    background: #75d69c;
    background: linear-gradient(90deg, #75d69d 0%, #4dd766 100%);
    box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);
    transform: rotate(-15deg);
    border-radius: 10px 10px 10px 50px;
    margin-left: -18px;
    margin-top: -50px;
    margin-bottom: 60px;
  }

  .header-content {
    position: absolute;
    top: 30px;
    left: 15px;
    display: flex;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 7px solid #4dd766;
    }

    h2 {
      font-weight: 300;
      margin-left: 10px;
    }

    p {
      font-size: 12px;
      color: aliceblue;
      font-weight: 100;
      letter-spacing: 0.4px;
      margin-left: 10px;
    }
  }

  .menu-items {

    margin: 0px;


    ion-icon {
      margin-right: 20px;
      color: #86979f;
    }

    ion-item {
      padding-left: 20px;
      margin-bottom: 10px;
    }

    .active {
      border-left: 5px solid;
      color: #75d69c;
      padding-left: 15px;

      ion-icon {
        margin-right: 20px;
        color: #86979f;
      }
    }
  }

  ion-menu::part(container) {
    border-radius: 0 20px 20px 0;
  }
</style>

<script setup lang="ts">

import { ref } from 'vue';
import { IonRouterOutlet, IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonToggle, ToggleCustomEvent } from '@ionic/vue';
import { logInOutline, logOutOutline, personCircleOutline, accessibilityOutline, contrastOutline, homeOutline, cubeOutline, pinOutline, receiptOutline, statsChartOutline, shieldCheckmarkOutline } from "ionicons/icons";
import router from '@/router';

const loggedIn = ref(true);

const navigate = (url: string) => {
  router.push(url);
};

const isActive = (url: string) => {
  return router.currentRoute.value.path === url;
};

const logout = () => {
  loggedIn.value = false;
};

const paletteToggle = ref(false);

const toggleDarkPalette = (paletteToggle: boolean) => { // Set ion-palete value based on paletteToggle
  document.documentElement.classList.toggle('ion-palette-dark', paletteToggle);
};

const toggleChange = (ev: ToggleCustomEvent) => { // Listen for the toggle check/uncheck to toggle the dark palette
  toggleDarkPalette(ev.detail.checked);
};

const appPages = [
        {
          title: 'Home',
          url: '/Home',
          icon: homeOutline
        },
        {
          title: 'Storage',
          url: '/Storage',
          icon: cubeOutline
        },
        {
          title: 'Tracking',
          url: '/Tracking',
          icon: pinOutline
        },
        {
          title: 'Sales',
          url: '/Sales',
          icon: receiptOutline
        },
        {
          title: 'Stats',
          url: '/Stats',
          icon: statsChartOutline
        },
        {
          title: 'Debug',
          url: '/Debug',
          icon: shieldCheckmarkOutline
        }
      ] 
</script>

<style scoped>
.welcome-container {
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

ion-item {
  --transition: none;
}

</style>