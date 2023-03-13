<template>
  <div class="group relative rounded-xl bg-black">
    <div class="absolute top-[50%] left-6 z-10 w-full text-xl font-bold tracking-widest text-white">
      <slot name="title" />
    </div>
    <img
      class="h-64 max-h-[60vw] w-full rounded-xl object-cover transition duration-700 group-hover:opacity-[0.6]"
      src="/img/a.jpg"
    />
  </div>
</template>
