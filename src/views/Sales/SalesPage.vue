<template>
<ion-page>
    <ion-header>
    <ion-toolbar>
        <ion-title>Sales</ion-title>
    </ion-toolbar>
    </ion-header>
        <ion-grid>
            <ion-row>
                <ion-col>             
                        <h2>Container 1</h2>
                        <p>This is some sample text in container 1.</p>
                        <sl-checkbox>Click</sl-checkbox>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <Card />
                </ion-col>
            </ion-row>
        </ion-grid>
</ion-page>
</template>

<script setup lang="ts">
    import {IonCol, IonRow, IonGrid, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
    import Card from '@/components/Card.vue';
</script>