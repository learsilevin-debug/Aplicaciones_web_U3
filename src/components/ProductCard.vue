<template>
  <div class="card" :class="{ 'agotado': product.stock === 0 }">
    
    <!-- Imagen del suplemento (Añadido nuevo) -->
    <div class="img-container">
      <img :src="product.image" :alt="product.name" class="producto-img" />
    </div>

    <span class="categoria">{{ product.category }}</span>
    <h3>{{ product.name }}</h3>
    <p class="precio">${{ product.price.toFixed(2) }}</p>
    
    <p v-if="product.stock === 0" class="alerta-stock">Agotado temporalmente</p>
    <p v-else class="stock-ok">Unidades disponibles: {{ product.stock }}</p>
    
    <button 
      :disabled="product.stock === 0" 
      @click="agregarAlCarrito"
    >
      {{ product.stock === 0 ? 'No disponible' : 'Añadir al carrito' }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['add-to-cart']);

const agregarAlCarrito = () => {
  if (props.product.stock > 0) {
    emit('add-to-cart', props.product);
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 12px; /* Un poco más redondo para que se vea moderno */
  padding: 1.5rem;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}

.agotado {
  opacity: 0.7;
  background-color: #f9f9f9;
}

/* --- Estilos para la imagen --- */
.img-container {
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
}

.producto-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que la imagen no se deforme */
  transition: transform 0.3s;
}

.card:hover .producto-img {
  transform: scale(1.05); /* Pequeño zoom al pasar el mouse */
}
/* ------------------------------- */

.categoria {
  background-color: #e63946;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 0.5rem;
}

h3 {
  margin: 0.5rem 0;
  color: #1a1a1a;
  font-size: 1.2rem;
}

.precio {
  font-size: 1.6rem;
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.alerta-stock {
  color: #e63946;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.stock-ok {
  color: #2a9d8f;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
}

button {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background-color: #1a1a1a;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  background-color: #e63946;
}
</style>