<template>
  <div v-if="isOpen" class="cart-sidebar">
    <div class="cart-header">
      <h2>Carrinho</h2>
      <button class="close-button" @click="closeCart">&times;</button>
    </div>
    <div class="cart-content">
      <div v-if="cart.length === 0" class="empty">Seu carrinho está vazio.</div>
      <ul v-else>
        <li v-for="(item, index) in cart" :key="index" class="cart-item">
          <img :src="item.image" alt="Produto" class="cart-image" />
          <div class="cart-info">
            <p class="name">{{ item.name }}</p>
            <p class="price">{{ `R$ ${item.price.toFixed(2)}` }}</p>
          </div>
          <button class="remove-button" @click="removeItem(index)">Remover</button>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <button class="checkout-button">Finalizar Compra</button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const cart = inject('cart')
const isOpen = inject('cartOpen')
const closeCart = inject('closeCart')

const removeItem = (index) => {
  cart.value.splice(index, 1)
}
</script>

<style scoped>
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background-color: #fff;
  border-left: 1px solid #ccc;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
}
.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.cart-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
}
.cart-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}
.cart-info {
  flex-grow: 1;
}
.name {
  font-weight: bold;
  font-size: 14px;
}
.price {
  font-size: 13px;
  color: #666;
}
.remove-button {
  background: none;
  border: none;
  color: #d00;
  font-size: 13px;
  cursor: pointer;
}
.empty {
  text-align: center;
  margin-top: 40px;
  color: #999;
  font-size: 14px;
}
.cart-footer {
  padding: 16px;
  border-top: 1px solid #eee;
}
.checkout-button {
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
</style>
