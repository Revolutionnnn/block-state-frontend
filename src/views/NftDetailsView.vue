<template>
    <q-page-container>
      <q-page class="q-pa-md flex flex-center">
        <q-card class="my-card q-pa-md" shadow="hover">
          <q-card-section class="q-pb-none">
            <div class="text-h4 text-center q-mb-md">{{ nftDetails.title }}</div>
          </q-card-section>
          <q-card-section class="q-pt-none" style="text-align: center;">
            <q-img :src="nftDetails.image" :alt="nftDetails.title" class="q-mb-md" style="max-width: 90%; height: auto; border-radius: 10px;"/>
          </q-card-section>
          <q-card-section class="details-section">
            <div><strong>Descripción:</strong> {{ nftDetails.description }}</div>
            <div><strong>Precio:</strong> {{ nftDetails.price }}</div>
          </q-card-section>
          <q-card-actions align="around">
            <q-btn color="primary" label="Contactar al Agente" @click="contactAgent" />
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const nftDetails = ref({
    title: 'Inmueble NFT #1',
    description: 'Un exclusivo inmueble digital en el corazón de la blockchain.',
    price: '3 ETH',
    image: 'https://via.placeholder.com/400', // Sustituir por la URL de tu imagen generada
  });
  
  const fetchNftDetails = async () => {
    console.log("Buscando detalles para el NFT con id:", route.params.id);
  
    await nextTick();
  };
  
  onMounted(async () => {
    if (performance.navigation.type === performance.navigation.TYPE_NAVIGATE) {
      location.reload();
    } else {
      fetchNftDetails();
    }
  });
  
  const contactAgent = () => {
    console.log("Contactando al agente del NFT...");
  };
  </script>
  
  <style>
  .my-card {
    max-width: 600px;
  }
  
  .details-section {
    font-size: 16px; /* Ajusta el tamaño de la fuente para mejorar la legibilidad */
    line-height: 1.5; /* Mejora el espaciado entre líneas */
  }
  
  .q-img {
    max-height: 300px; /* Ajusta si es necesario para controlar la altura máxima de la imagen */
  }
  </style>
  