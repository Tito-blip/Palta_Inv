<template>
    <form @submit.prevent="submit">
        <v-text-field 
            v-model="name.value.value"
            :counter="10"
            :error-messages="name.errorMessage.value"
            label="name"
        </v-text-field>
    </form>
</template>
