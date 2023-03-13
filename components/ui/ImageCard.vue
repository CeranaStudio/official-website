<template>
  <div class="group rounded-xl bg-black relative">
    <div
      class="absolute w-full top-[50%] left-6 z-10 text-white text-xl font-bold tracking-widest"
    >
      <slot name="title" />
    </div>
    <img
      class="max-h-[60vw] w-full h-64 object-cover rounded-xl group-hover:opacity-[0.6] transition duration-700"
      src="/img/a.jpg"
    />
  </div>
</template>
