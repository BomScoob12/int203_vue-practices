<script setup>
import { ref, reactive, toRef, toRefs } from 'vue'

const count = ref(0)
// setInterval(() => {
//   console.log(++count.value)
// }, 1000)

//ref when you need to access by using .value
const product = ref({
  id: 101,
  name: 'computer',
})
console.log(product.value.id)
console.log(product.value.name)

const testArray = ref([1001, 1002, 1003, 1004])
console.log(testArray.value[1], testArray.value[3])

//reactive access not using .value ( can't use in primitive type)
const ids = reactive([1221, 1222, 1223, 1224])
console.log('ids: ' + `${ids[0]} ${ids[1]}`)

//----------------------------
const product2 = reactive({
  id: 11000,
  name: 'product two',
})
//toRef
console.log('-------------------')
console.log(product2)

let productId = toRef(product2, 'id')
console.log(`toRef prodID: ${productId.value}`)
//change value
productId.value = 10000
console.log(product2)
console.log('-----------------------')
let { id, name } = toRefs(product2)
console.log(id.value)
console.log(name.value)
</script>

<template>
  <div>
    <p>Count = {{ count }}</p>
  </div>
  <div>
    <h2 class="">product</h2>
    <p>{{ product.id }}</p>
    <p>{{ product.name }}</p>
  </div>
</template>

<style scoped></style>
