<template>
    <q-page class="q-pa-md">
        <h4 class="text-center">Inmuebles disponibles</h4>
      <div class="q-gutter-md" style="display: flex; flex-wrap: wrap; justify-content: start;">
        <q-card v-for="nft in nfts" :key="nft.id" class="my-card">
          <q-img :src="nft.image" :alt="nft.title" />
          <q-card-section>
            <div class="text-h6">{{ nft.title }}'</div>
            <div class="text-subtitle2">{{ nft.description }}</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Ver más" color="primary" @click="viewDetails(nft.id)" />
          </q-card-actions>
        </q-card>
      </div>
    </q-page>
  </template>
  
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const nfts = ref([
          {
            id: 1,
            title: 'NFT #1',
            description: 'Descripción del NFT #1',
            image: 'https://via.placeholder.com/150',
          },
          {
            id: 2,
            title: 'NFT #2',
            description: 'Descripción del NFT #2',
            image: 'https://via.placeholder.com/150',
          },
        ])

function viewDetails(nftId) {
    router.push({ name: 'nftDetails', params: { id: nftId } });
  }
</script>
  
<style>
.my-card {
    width: 300px;
    margin: 20px;
}
</style>
  