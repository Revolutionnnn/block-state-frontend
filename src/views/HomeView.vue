<template>
    <div>
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="../assets/main.jpg" />
        <q-carousel-slide :name="2" img-src="../assets/quees.jpg" />
      </q-carousel>
    </div>
    <q-img
    src="../assets/funciones.jpg"
    basic
    style="max-width: 100%; height: auto;"
    class="rounded-borders"
  />
  <q-img
    src="../assets/metricas.jpg"
    basic
    style="max-width: 100%; height: auto;"
    class="rounded-borders"
  />
  <q-img
    src="../assets/equipo.jpg"
    basic
    style="max-width: 100%; height: auto;"
    class="rounded-borders"
  />
  </template>
  <script setup>
  import { ref } from 'vue'
  
  const slide = ref(1)
  const autoplay = ref(true)

  </script>