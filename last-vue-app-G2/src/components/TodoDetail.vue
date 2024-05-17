<script setup>
import { useRoute, useRouter } from 'vue-router';
const { params } = useRoute();
console.log(params.todoId);
const router = useRouter();
const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div>
    <img :src="`../../images/${$route.params.todoId}.jpg`" class="w-72 h-52" />
    <button @click="goBack">Back</button>
  </div>
</template>

<style scoped></style>
