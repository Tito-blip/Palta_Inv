<template>
  <ion-menu content-id="main-content">
    <ion-content class="ion-padding">
      <ion-list lines="none">
        <ion-list-header>
          Navigate
        </ion-list-header>
        <ion-menu-toggle :auto-hide="false" v-for="p in appPages" :key="p.title">
          <ion-item button @click="navigate(p.url)">
            <ion-icon slot="start" :icon="p.icon"></ion-icon>
            &nbsp;
            <ion-label>
              {{p.title}}
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>

      <ion-list v-if="loggedIn" lines="none">
        <ion-list-header>
          Account
        </ion-list-header>
        <ion-menu-toggle :auto-hide="false">
          <ion-item button @click="navigate('/profile')">
            <ion-icon slot="start" :icon="ionIcons.person"></ion-icon>
            <ion-label>
              Profile
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
        <ion-menu-toggle :auto-hide="false">
          <ion-item button @click="logout()">
            <ion-icon slot="start" :icon="ionIcons.logOut"></ion-icon>
            <ion-label>
              Logout
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>

      <ion-list v-if="!loggedIn" lines="none">
        <ion-list-header>
          Account
        </ion-list-header>
        <ion-menu-toggle :auto-hide="false">
          <ion-item button @click="navigate('/login')">
            <ion-icon slot="start" :icon="ionIcons.logIn"></ion-icon>
            <ion-label>
              Login
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
        <ion-menu-toggle :auto-hide="false">
          <ion-item button @click="navigate('/signup')">
            <ion-icon slot="start" :icon="ionIcons.personAdd"></ion-icon>
            <ion-label>
              Signup
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
        <ion-item>
          <ion-icon slot="start" :icon="ionIcons.moonOutline"></ion-icon>
            <ion-toggle v-model="localDark" label-placement="start">
              Dark Mode
            </ion-toggle>
          </ion-item>
      </ion-list>

    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonContent, IonMenuButton, IonButtons, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonTitle, IonToolbar, IonToggle } from '@ionic/vue';
import * as ionIcons from "ionicons/icons";
import { calendar, people, map, informationCircle } from "ionicons/icons";
import router from '@/router';

export default defineComponent({
  name: 'Menu',
  components: {
    IonContent,
    IonMenuButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar,
    IonToggle,
  },
  props: {
    darkMode: Boolean,
    currentRoute: String,
  },
  emits: ['dark-mode-changed'],
  setup(props) {
    const localDark = ref(false);
    const loggedIn = ref(false);

    const navigate = (url: string) => {
      router.push(url);
    }

    const logout = () => {
    }

    return {
      localDark,
      navigate,
      logout,
      loggedIn,
      appPages: [
        {
          title: 'Home',
          url: '/Home',
          icon: calendar
        },
        {
          title: 'Storage',
          url: '/Storage',
          icon: people
        },
        {
          title: 'Sales',
          url: '/Sales',
          icon: map
        },
        {
          title: 'Stats',
          url: '/Stats',
          icon: informationCircle
        }
      ],
      ionIcons,
      calendar,
      people,
      map,
      informationCircle
    };
  },
});
</script>