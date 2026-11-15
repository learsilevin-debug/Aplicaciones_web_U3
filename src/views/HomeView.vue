<template>
  <main class="catalogo-container">
    <header class="cabecera">
      <h1>Catálogo PowerFit</h1>
      <div class="carrito-resumen">
        🛒 Carrito: <strong>{{ carrito.length }}</strong> items
      </div>
    </header>

    <!-- ESTADO 1: Cargando -->
    <div v-if="loading" class="estado-mensaje cargando">
      <p>⏳ Cargando suplementos...</p>
    </div>

    <!-- ESTADO 2: Error -->
    <div v-else-if="error" class="estado-mensaje error">
      <p>❌ Ocurrió un problema: {{ error }}</p>
      <button @click="cargarProductos">Reintentar</button>
    </div>

    <!-- ESTADO 3: Vacío -->
    <div v-else-if="products.length === 0" class="estado-mensaje vacio">
      <p>📦 No hay productos disponibles en este momento.</p>
    </div>

    <!-- ESTADO 4: Éxito (Lista de productos) -->
    <div v-else class="productos-grid">
      <!-- Iteramos usando v-for y la clave estable :key -->
      <ProductCard 
        v-for="producto in products" 
        :key="producto.id" 
        :product="producto"
        @add-to-cart="manejarCarrito"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { apiService } from '../services/api.js';

// Variables reactivas para el manejo de estados
const products = ref([]);
const loading = ref(true);
const error = ref(null);
const carrito = ref([]);

// Función para consumir el servicio HTTP centralizado
const cargarProductos = async () => {
  loading.value = true;
  error.value = null;
  
  try {
    const data = await apiService.getProducts();
    products.value = data;
  } catch (err) {
    error.value = err.message || "Error desconocido al cargar";
  } finally {
    loading.value = false;
  }
};

// Se ejecuta automáticamente al montar el componente
onMounted(() => {
  cargarProductos();
});

// Función que reacciona al evento 'add-to-cart' emitido por el componente hijo
const manejarCarrito = (productoSeleccionado) => {
  carrito.value.push(productoSeleccionado);
  alert(`¡${productoSeleccionado.name} añadido al carrito!`);
};
</script>

<style scoped>
.catalogo-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.cabecera {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  /* Línea roja */
  border-bottom: 2px solid #e63946; 
  padding-bottom: 1rem;
}

h1 {
  /* Letras blancas con un poco de sombra */
  color: white; 
  margin: 0;
  font-size: 2.2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.carrito-resumen {
  background-color: #e63946;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
}

/* Estilos de los estados */
.estado-mensaje {
  text-align: center;
  padding: 3rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
}

.cargando { background-color: #e0f7fa; color: #006064; }
.error { background-color: #ffebee; color: #c62828; }
.vacio { background-color: #f5f5f5; color: #424242; }

/* Grid responsivo para las tarjetas */
.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>