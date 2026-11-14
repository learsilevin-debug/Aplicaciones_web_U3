// src/services/api.js

const API_URL = '/api/products.json';

export const apiService = {
  async getProducts() {
    try {
      const response = await fetch(API_URL);
      
      // Validación 
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Simulamos un retraso de red (800ms) para poder visualizar el estado "Cargando..." en la UI
      return new Promise((resolve) => {
        setTimeout(() => resolve(data), 800);
      });

    } catch (error) {
      console.error("Fallo la petición a la API de PowerFit:", error);
      throw error; 
    }
  }
};