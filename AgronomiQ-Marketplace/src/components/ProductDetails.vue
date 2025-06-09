<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, inject, watch } from 'vue'
import Header from './Header.vue';
import CartSidebar from './CartSidebar.vue';

const cart = inject('cart')
const cartOpen = inject('cartOpen')

const addToCart = (product) => {
    cart.value.push(product)
    cartOpen.value = true
}

const route = useRoute()

const products = [
    {
        id: 1,
        name: 'Propriedades rurais (SICAR/SNCI/SIGEF)',
        description: 'Descrição do Produto 1',
        price: 55.00,
        image: '/src/assets/images/propriedades_rurais.jpg'
    },
    {
        id: 2,
        name: 'Pedologia (Tipos de solo)',
        description: 'Descrição do Produto 2',
        price: 65.00,
        image: '/src/assets/images/pedologia.jpg'
    },
    {
        id: 3,
        name: 'Áreas de Reserva Legal',
        description: 'Descrição do Produto 3',
        price: 75.00,
        image: '/src/assets/images/reserva_legal.png'
    },
    {
        id: 4,
        name: 'Áreas de Preservação Permanente',
        description: 'Descrição do Produto 4',
        price: 85.00,
        image: '/src/assets/images/preservacao_permanente.jpg'
    },
    {
        id: 5,
        name: 'Uso do solo',
        description: 'Descrição do Produto 5',
        price: 95.00,
        image: '/src/assets/images/uso_solo.jpg'
    },
    {
        id: 6,
        name: 'Zoneamento Agroambiental Sucroalcooleiro',
        description: 'Descrição do Produto 6',
        price: 105.00,
        image: '/src/assets/images/zoneamento.png'
    },
    {
        id: 7,
        name: 'Dados meteorológicos',
        description: 'Descrição do Produto 7',
        price: 115.00,
        image: '/src/assets/images/dados_meteorologicos.jpg'
    },
]

const productId = computed(() => Number(route.params.id))
const product = computed(() => products.find(p => p.id === productId.value) || {})
const related = products.filter(p => p.id !== productId)

watch(() => route.params.id, (newId) => {
    productId.value = Number(newId)
})

const handleNavigate = () => {
    cartOpen.value = false
    window.scrollTo(0, 0)    
}
</script>

<template>
    <div class="product-detail-container">
        <Header />
        <CartSidebar />
        <main class="main">
            <div class="container">
                <section class="product-main">
                    <img :src="product.image" alt="Produto" class="product-main-image" />
                    <div class="product-info">
                        <h1 class="product-name">{{ product.name }}</h1>
                        <h2 class="product-subheading">{{ product.subheading }}</h2>
                        <p class="product-price">{{ `$ ${product.price.toFixed(2)}` }}</p>
                        <p class="product-description">{{ product.description }}</p>
                        <button class="add-to-cart" @click="addToCart(product)">Add to cart</button>
                        <p class="fine-print">Text box for additional details or fine print</p>
                    </div>
                </section>
                <section class="related-section row">
                    <h2 class="related-title">Related products</h2>
                    <router-link v-for="product in products" :key="product.id" :to="`/product/${product.id}`"
                        @click="handleNavigate" class="product-card d-block col-md-3">
                        <img :src="product.image" />
                        <h4 class="product-title">{{ product.name }}</h4>
                        <p class="product-description">{{ product.description }}</p>
                        <button class="buy-button" @click.stop.prevent="addToCart(product)">BUY</button>
                    </router-link>
                </section>
            </div>
        </main>

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
    </div>
</template>

<style scoped>
.product-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 40px;
}

.product-main-image {
    width: 100%;
    border-radius: 8px;
    height: 300px;
    object-fit: cover;
}

.product-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.product-name {
    font-size: 24px;
    font-weight: bold;
}

.product-subheading {
    font-size: 18px;
    color: #777;
}

.product-price {
    font-size: 20px;
    font-weight: 600;
}

.product-description {
    color: #444;
}

.add-to-cart {
    background: #24aa18;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.fine-print {
    font-size: 12px;
    color: #aaa;
}

.related-section {
    padding: 0 40px 40px;
}

.related-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
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
