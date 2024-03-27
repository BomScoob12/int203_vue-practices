<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <slot name="header"> Your header here!</slot>
    <slot
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :index="index"
    >
    </slot>
  </div>
</template>

<style scoped></style>
