<script setup>
import { ref, watch } from 'vue'
import { date } from 'quasar'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'HH:mm:ss')
const text = ref('123')
const time = ref(new Date().getTime)
</script>

<template>
  <div class="full-height">
    Home首页
    <q-input v-model="text" label="Standard" />
    <q-time v-model="formattedString" with-seconds format24h />
  </div>
</template>
