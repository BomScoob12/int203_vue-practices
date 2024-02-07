<script setup>
import { ref } from 'vue'
const count = ref(0)

const decreaseCount = () => {
  count.value <= 0 ? (count.value = 0) : --count.value
}

const isDark = ref(true)
</script>

<template>
  <div :class="isDark ? 'bg-black': 'bg-white'" class="w-full">
    <div class="flex justify-between align-middle">
      <h1 class="text-pink-400 tracking-widest p-8 font-bold text-3xl">
        Hello World, Vue3 Application
      </h1>
      <div class="form-control w-40 justify-center">
        <label class="cursor-pointer label">
          <span class="label-text">Dark mode</span>
          <input
            @click="isDark = !isDark"
            type="checkbox"
            class="toggle"
            checked
          />
          {{ isDark }}
        </label>
      </div>
    </div>
    <div class="flex gap-3 m-3">
      <button
        @click="decreaseCount"
        class="px-3 py-1 bg-red-600 rounded-lg"
      >
        -
      </button>
      <span class="">Counter: {{ count }}</span>
      <button
        @click="++count"
        class="px-3 py-1 bg-green-600 text-white rounded-lg"
      >
        +
      </button>
    </div>
  </div>
</template>

<style scoped></style>
