<script setup> 
import { ref, inject } from 'vue';
import CartSidebar from './CartSidebar.vue';

let login = ref(true);
const cart = inject('cart')
const cartOpen = inject('cartOpen')
cartOpen.value = false

function toggleCart() {
    cartOpen.value = !cartOpen.value;
}

</script>

<template>
    <header class="header  px-5">
        <div class="header-menu d-flex align-items-center">
            <a href="/" class="logo-section">
                <img src="/agronomiq-marketplace/assets/images/logo-agronomiq-cor-pb.png" alt="Logo" class="logo" />
            </a>
            <a href="https://www.agronomiq.com.br/landing" class="project-name">AgronomiQ Website</a>
        </div>
        <div class="actions">
            <input type="text" placeholder="Search Bar" class="search-bar" />
            <span class="cart" ><i class="fa-solid fa-cart-plus" @click="toggleCart"></i><span v-if="cart.length" class="cart-badge">{{ cart.length }}</span></span>
            <span v-if="login">Olá, Antonio <i class="fa-solid fa-arrow-down"></i></span>
            <button v-else class="login-button">Login</button>
        </div>
    </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ccc;
  /* position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  z-index: 1000; */
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  width: 120px;
}

.project-name {
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 24px;
  align-items: center;
}

.search-bar {
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.cart {
  cursor: pointer;
}

.login-button {
  background: black;
  color: white;
  padding: 4px 16px;
  border: none;
  border-radius: 4px;
}
</style>