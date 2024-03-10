<template>
    <q-page padding>
        <h4 class="text-center">Mint NFT Inmobiliario</h4>
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
          <div class="col">
            <q-input filled v-model="form.createdAt" label="Created At" />
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
            <q-input filled v-model="form.garage" label="Garage" />
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
import { ref } from 'vue';
import swal from 'sweetalert';

const form = ref({
  name: null,
  description: null,
  image: null,
  location: null,
  price: null,
  address: null,
  createdAt: null,
  area: null,
  rooms: null,
  bathrooms :null,
  garage: null,
  isSold: false
});

const onSubmit = () => {
  swal("Good job!", "Haz minteado tu NFT!", "success");
  console.log('Form Data:', form.value);
};

</script>