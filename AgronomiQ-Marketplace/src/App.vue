<script setup>
import { ref, provide } from 'vue'

const cart = ref([])
const cartOpen = ref(false)
const closeCart = () => (cartOpen.value = false)

provide('cart', cart)
provide('cartOpen', cartOpen)
provide('closeCart', closeCart)
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped>

</style>
