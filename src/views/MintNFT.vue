<template>
    <q-page padding>
        <h4 class="text-center">Mint NFT Inmobiliario</h4>
      <div class="q-gutter-md q-mb-md">
        <q-input filled v-model="searchQuery" label="Buscar" />
        <q-btn color="primary" label="Buscar" @click="buscar" />
        <q-btn color="primary" label="Limpiar" @click="limpiarFormulario" />
      </div>
      <br>
      <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <div class="q-gutter-md q-mb-md">
          <q-input filled v-model="form.name" label="Name" />
          <q-input filled v-model="form.description" label="Description" />
          <q-input filled v-model="form.image" label="Image URL" />
        </div>
  
        <div class="q-gutter-md row">
          <div class="col">
            <q-input filled v-model="form.location" label="Location" />
          </div>
          <div class="col">
            <q-input filled v-model="form.price" label="Price" />
          </div>
        </div>
  
        <div class="q-gutter-md row">
          <div class="col">
            <q-input filled v-model="form.address" label="Address" />
          </div>
        </div>
  
        <div class="q-gutter-md row">
          <div class="col">
            <q-input filled v-model="form.area" label="Area" />
          </div>
          <div class="col">
            <q-input filled v-model="form.rooms" label="Rooms" />
          </div>
        </div>
  
        <div class="q-gutter-md row">
          <div class="col">
            <q-input filled v-model="form.bathrooms" label="Bathrooms" />
          </div>
          <div class="col">
            <q-toggle v-model="form.garage" label="Garage" />
          </div>
        </div>
  
        <div class="q-gutter-md">
          <q-toggle v-model="form.isSold" label="Is Sold?" />
        </div>
  
        <div class="q-gutter-md">
          <q-btn label="Mint NFT" type="submit" color="primary" class="q-mt-md" />
        </div>
      </q-form>
    </q-page>
  </template>
<script setup>
import { ref, onMounted } from 'vue';
import swal from 'sweetalert';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const searchQuery = ref(null)

const id = ref(null)

const form = ref({
  name: null,
  description: null,
  image: null,
  location: null,
  price: null,
  address: null,
  area: null,
  rooms: null,
  bathrooms :null,
  garage: false,
  isSold: false
});

const onSubmit = async () => {
  try {
    if (id.value === null) {
      await axios.post('http://localhost:8000/properties/create', form.value);
      swal("¡Buen trabajo!", "¡Haz minteado tu NFT exitosamente!", "success");
      router.push({ name: 'market' });
    } else {
      await axios.put(`http://localhost:8000/properties/${id.value}`, form.value);
      swal("¡Buen trabajo!", "¡Haz actualiado la metada exitosamente!", "success");
      router.push({ name: 'market' });
    }
  } catch (error) {
    console.error('Error minteando el NFT:', error);
    swal("Error", "Hubo un problema minteando tu NFT.", "error");
  }
};

async function buscar() {
  try {
    const response = await axios.get(`http://localhost:8000/properties/${searchQuery.value}`);
    const data = response.data;
    id.value = data.id;
    form.value.name = data.name;
    form.value.description = data.description;
    form.value.image = data.image;
    form.value.location = data.location;
    form.value.price = data.price;
    form.value.address = data.address;
    form.value.area = data.area;
    form.value.rooms = data.rooms;
    form.value.bathrooms = data.bathrooms;
    form.value.garage = data.garage;
    form.value.isSold = data.isSold;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // Manejo específico para cuando la propiedad no se encuentra
      swal("Error", "La propiedad no existe", "error");
    } else {
      // Manejo de otros tipos de errores HTTP o errores de red
      swal("Error", "Ocurrió un error al buscar la propiedad", "error");
    }
  }
}

function limpiarFormulario() {
  id.value = null
  form.value = {
    name: null,
    description: null,
    image: null,
    location: null,
    price: null,
    address: null,
    area: null,
    rooms: null,
    bathrooms: null,
    garage: false,
    isSold: false
  };
}

onMounted(() => {
  console.log(route.props)
});

</script>