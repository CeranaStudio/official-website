<template>
  <div class="group relative h-24 overflow-hidden rounded-xl md:h-64" :class="class">
    <div
      class="absolute top-[45%] left-6 z-10 w-full text-xl font-bold tracking-widest text-white transition duration-700 group-hover:scale-110"
    >
      <slot name="title" />
    </div>
    <img
      class="object-fit absolute -right-[70px] top-[10%] h-48 max-h-[60vw] w-48 rounded-xl transition duration-700 group-hover:scale-110"
      :src="src"
    />
  </div>
</template>
<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ''
  }
})
</script>
