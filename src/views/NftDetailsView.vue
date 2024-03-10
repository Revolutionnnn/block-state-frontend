<template>
  <q-page-container>
    <q-page class="q-pa-md flex flex-center">
      <div v-if="nftDetails === null">Cargando detalles del NFT...</div>
      <q-card v-else class="my-card q-pa-md" shadow="hover">
        <q-card-section class="q-pb-none">
          <div class="text-h4 text-center q-mb-md">{{ nftDetails.name }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none" style="text-align: center;">
          <q-img :src="nftDetails.image || 'https://via.placeholder.com/800x600?text=Inmueble+NFT'" :alt="nftDetails.name" class="q-mb-md" style="max-width: 90%; height: auto; border-radius: 10px;"/>
        </q-card-section>
        <q-card-section class="details-section">
          <div><strong>ID:</strong> {{ nftDetails.id }}</div>
          <div><strong>Descripción:</strong> {{ nftDetails.description }}</div>
          <div><strong>Precio:</strong> {{ nftDetails.price }}</div>
        </q-card-section>
        <q-card-actions align="around">
          <q-btn color="primary" label="Contactar al Agente" @click="contactAgent" />
        </q-card-actions>
      </q-card>
      <q-page padding>
        <q-table
          :rows="changes"
          :columns="columns"
          row-key="id"
        />
      </q-page>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const nftDetails = ref(null); // Inicializamos nftDetails como null
const changes = ref([])
const columns = [
      {
        name: 'changed_field',
        required: true,
        label: 'Campo Modificado',
        align: 'left',
        field: 'changed_field',
        sortable: true,
      },
      {
        name: 'old_value',
        align: 'left',
        label: 'Valor Anterior',
        field: 'old_value',
        sortable: true,
      },
      {
        name: 'new_value',
        align: 'left',
        label: 'Valor Nuevo',
        field: 'new_value',
        sortable: true,
      },
      {
        name: 'changed_at',
        align: 'left',
        label: 'Fecha de Cambio',
        field: (row) => {
          return row.changed_at.split('T')[0]; // Esto solo extraerá la fecha sin la hora
        },
        sortable: true,
      },
    ];

const fetchNftDetails = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/properties/${route.params.id}`);
    nftDetails.value = response.data; // Asumiendo que la respuesta del servidor es directamente el objeto de detalles del NFT
    const response2 = await axios.get(`http://localhost:8000/properties/${route.params.id}/changes`);
    changes.value = response2.data
  } catch (error) {
    console.error("Error buscando detalles para el NFT con id:", route.params.id, error);
    // Manejo de error, por ejemplo, mostrando un mensaje al usuario
  }
};

onMounted(() => {
  fetchNftDetails();
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
