<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

//before mount state
onBeforeMount(() => {
  console.log('Footer.vue on before mount');
});

//mounted state
onMounted(() => {
  console.log('Footer.vue on mounted');
});

onBeforeUnmount(() => {
  console.log('Footer.vue on before un-mount');
});

onUnmounted(() => {
  console.log('Footer.vue on un-mounted');
});
</script>

<template>
  <div class="flex">
    <slot></slot>
  </div>
</template>

<style scoped></style>
