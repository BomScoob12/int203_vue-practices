<script setup>
// defineProps({
//   title: String,
//   subtitle: String,
//   content: String,
//   actions: {
//     size: {
//       type: String,
//       default() {
//         this.size = sizes.sm;
//       },
//     },
//     variant: {
//       type: String,
//       default() {
//         this.variant = variants.flat;
//       },
//     },
//   },
// });

const props = defineProps({
  size: {
    validator(value) {
      return ['sm', 'md', 'lg'].includes(value)
    },
    default: 'sm'
  },
  variant: {
    validator(value) {
      return ['flat', 'tonal', 'outlined'].includes(value)
    },
    default: 'flat'
  }
})
console.log(props.size)
console.log(props.variant)
</script>

<template>
  <div
    class="flex flex-col p-3"
    :class="[
      size === 'sm' ? 'w-44 h-36' : size === 'md' ? 'w-60 h-52' : 'w-80 h-72',
      variant === 'flat'
        ? 'shadow-md'
        : variant === 'tonal'
        ? 'bg-slate-50'
        : 'border border-slate-300'
    ]"
  >
    <!-- title -->
    <div
      class="font-bold"
      :class="
        size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'
      "
    >
      <slot name="title">Untitled</slot>
    </div>
    <!-- subtitle -->
    <div
      class="font-semibold"
      :class="size === 'sm' ? 'text-md' : size === 'md' ? 'text-lg' : 'text-xl'"
    >
      <slot name="subtitle">replace with your subtitle</slot>
    </div>
    <!-- content -->
    <div
      class="pt-2"
      :class="size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : 'text-lg'"
    >
      <slot name="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam
        laborum architecto impedit.</slot
      >
    </div>
    <!-- actions -->
    <div
      class="flex justify-end pt-2"
      :class="size === 'sm' ? 'text-sm' : size === 'md' ? 'text-md' : 'text-lg'"
    >
      <slot name="action">your action here</slot>
    </div>
  </div>
</template>
