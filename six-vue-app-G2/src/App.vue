<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
//local registration for component.
import PageFooter from './components/Footer.vue';
import FancyFooter from './components/FancyFooter.vue';

//before mount state
onBeforeMount(() => {
  console.log('App.vue on before mount');
});

//mounted state
onMounted(() => {
  console.log('App.vue on mounted');
});

//at created state
console.log('App.vue within <script setup> on created');

onBeforeUpdate(() => {
  console.log('App.vue on before update. NAME:' + name.value);
});
onUpdated(() => {
  console.log('App.vue on updated.');
});

const hasFooter = ref(true);
const name = ref('');
</script>

<template>
  <div>
    <PageHeader />
    <h1 class="flex text-5xl text-red-800 font-bold">Hello world!</h1>
    <div class="flex items-center bg-blue-200 gap-2 p-2">
      <span class="text-lg">Footer</span>
      <input
        type="checkbox"
        v-model="hasFooter"
        class="border border-gray-500"
      />
      {{ hasFooter }}
    </div>
    <div>
      <span>Enter Name:</span>
      <input type="text" v-model="name" class="border border-gray-500" />
      {{ name }}
    </div>
    <div class="flex justify-center align-middle m-10">
      <PageFooter v-if="hasFooter">
        <FancyFooter>
          <template #title> <h2 class="text-2xl">Testing</h2> </template>
          <template #content>
            <ul class="list-disc">
              <li>11</li>
              <li>22</li>
              <li>33</li>
              <li>44</li>
            </ul>
          </template>
        </FancyFooter>
        <FancyFooter>
          <template #title> <h2 class="text-2xl">Testing2</h2> </template>
          <template #content>
            <ul class="list-disc">
              <li>Buy</li>
              <li>Sale</li>
              <li>Haha</li>
            </ul>
          </template>
        </FancyFooter>
      </PageFooter>
    </div>
  </div>
</template>

<style scoped></style>
