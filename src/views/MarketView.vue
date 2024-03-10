<template>
  <q-page class="q-pa-md">
      <h4 class="text-center">Inmuebles disponibles</h4>
    <div class="q-gutter-md" style="display: flex; flex-wrap: wrap; justify-content: start;">
      <q-card v-for="property in properties" :key="property.id" class="my-card">
        <q-img :src="property.image || defaultImage" :alt="property.name" />
        <q-card-section>
          <div class="text-h6">{{ property.name }}</div> 
          <div class="text-subtitle2">{{ property.description }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Ver más" color="primary" @click="viewDetails(property.id)" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const defaultImage = 'https://via.placeholder.com/800x600?text=Inmueble+NFT';

const properties = ref([]);

const loadProperties = async () => {
  try {
    const response = await axios.get('http://localhost:8000/properties');
    properties.value = response.data.map(property => ({
      ...property,
      image: property.image || defaultImage
    }));
  } catch (error) {
    console.error('Error cargando las propiedades:', error);
  }
};

onMounted(() => {
  loadProperties();
});

function viewDetails(property) {
    router.push({ name: 'nftDetails', params: { id: property } });
  }
</script>
  
<style>
.my-card {
    width: 300px;
    margin: 20px;
}
</style>
  