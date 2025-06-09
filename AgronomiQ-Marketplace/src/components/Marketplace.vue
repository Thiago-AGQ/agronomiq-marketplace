<script setup>
import { ref, inject } from 'vue';
import Header from './Header.vue';
import CartSidebar from './CartSidebar.vue';

const products = [
  {
    id: 1,
    name: 'Propriedades rurais (SICAR/SNCI/SIGEF)',
    description: 'Descrição do Produto 1',
    price: 55.00,
    image: 'assets/images/propriedades_rurais.jpg'
  },
  {
    id: 2,
    name: 'Pedologia (Tipos de solo)',
    description: 'Descrição do Produto 2',
    price: 65.00,
    image: 'assets/images/pedologia.jpg'
  },
  {
    id: 3,
    name: 'Áreas de Reserva Legal',
    description: 'Descrição do Produto 3',
    price: 75.00,
    image: 'assets/images/reserva_legal.png'
  },
  {
    id: 4,
    name: 'Áreas de Preservação Permanente',
    description: 'Descrição do Produto 4',
    price: 85.00,
    image: 'assets/images/preservacao_permanente.jpg'
  },
  {
    id: 5,
    name: 'Uso do solo',
    description: 'Descrição do Produto 5',
    price: 95.00,
    image: 'assets/images/uso_solo.jpg'
  },
  {
    id: 6,
    name: 'Zoneamento Agroambiental Sucroalcooleiro',
    description: 'Descrição do Produto 6',
    price: 105.00,
    image: 'assets/images/zoneamento.png'
  },
  {
    id: 7,
    name: 'Dados meteorológicos',
    description: 'Descrição do Produto 7',
    price: 115.00,
    image: 'assets/images/dados_meteorologicos.jpg'
  },
]

let login = ref(true);

const cartOpen = inject('cartOpen')
const cart = inject('cart')
cartOpen.value = false

const addToCart = (product) => {
  cart.value.push(product)
  cartOpen.value = true
  console.log('ola');
  
}

const handleNavigate = () => {
    cartOpen.value = false
    window.scrollTo(0, 0)    
}
</script>

<template>
  <Header />
  <CartSidebar />
  <div class="container">
    <main class="main">
      <div class="poster mb-4">
        <img src="../assets/images/agronomia.jpg" alt="Banner" class="banner" />
      </div>

      <div class="row">
        <div class="col-md-4">
          <aside class="filters">
            <h2 class="title">Produtos</h2>
            <ul class="filter-list">
              <li v-for="product in products" :key="product.id" class="d-flex align-items-center">
                <input type="checkbox" :id="product.name" />
                <label :for="product.name">{{ product.name }}</label>
              </li>
            </ul>
          </aside>
        </div>

        <div class="col-md-8">
          <section class="product-section mb-3">
            <p class="product-count">Filtro: 5 produtos encontrados</p>
          </section>
          <!-- <div class="product-grid">
            <div v-for="product in products" :key="product.id" class="product-card">
              <img :src="product.image" alt="Produto" class="product-image" />
              <h4 class="product-title">{{ product.name }}</h4>
              <p class="product-description">{{ product.description }}</p>
              <p class="product-price">Price: ${{ product.price.toFixed(2) }}</p>
              <button class="buy-button">BUY</button>
            </div>
          </div> -->

          <div class="row">
            <router-link v-for="product in products" :key="product.id" :to="`/product/${product.id}`"
              class="product-card d-block col-md-4" @click="handleNavigate">
              <img :src="product.image" />
              <h4 class="product-title">{{ product.name }}</h4>
              <p class="product-description">{{ product.description }}</p>
              <p class="product-price">Price: ${{ product.price.toFixed(2) }}</p>
              <button class="buy-button" @click.stop.prevent="addToCart(product)">BUY</button>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>

  <footer class="footer px-5">
    <img src="../assets/images/logo-agronomiq-cor-pb.png" alt="Logo" class="logo" />

    <div>
      <div class="footer-topic">Topic</div>
      <div>Page</div>
      <div>Page</div>
      <div>Page</div>
    </div>
    <div>
      <div class="footer-topic">Topic</div>
      <div>Page</div>
      <div>Page</div>
      <div>Page</div>
    </div>
    <div>
      <div class="footer-topic">Topic</div>
      <div>Page</div>
      <div>Page</div>
      <div>Page</div>
    </div>
  </footer>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 288px;
  object-fit: cover;
}

.filters {
  padding-right: 16px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}

.filter-list {
  list-style: none;
  padding: 0;
}

.filter-list li {
  margin-bottom: 8px;
  font-size: 14px;
  column-gap: .25rem;
}

.filter-list li:hover {
  text-decoration: underline;
}

label {
  cursor: pointer;
}

.product-count {
  font-size: 14px;
  margin-bottom: 16px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
}

.product-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  object-fit: cover;
  height: 150px;
}

.product-title {
  font-weight: 600;
}

.product-description {
  font-size: 14px;
  color: #666;
}

.product-price {
  font-weight: 600;
  margin-top: 8px;
}

.buy-button {
  margin-top: 8px;
  color: #1d4ed8;
  background: none;
  border: none;
  cursor: pointer;
}

.product-card:hover .buy-button {
  text-decoration: underline;
}

.footer {
  background: #f5f5f5;
  margin-top: 32px;
  padding: 24px;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.footer-topic {
  font-weight: 600;
  margin-bottom: 4px;
}
</style>
