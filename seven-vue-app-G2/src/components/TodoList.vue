<script setup>
import BaseCard from './BaseCard.vue';
import ListModal from './ListModal.vue';
import todos from '../../data/todos.json'
</script>

<template>
  <div>
    <ListModal :items="todos"/>

    <BaseCard size="lg" variant="flat">
      <template #title>1</template>
      <template #subtitle>home</template>
      <template #content>design and develop Vue project</template>
      <template #action></template>
    </BaseCard>
  </div>
</template>

<style scoped></style>
