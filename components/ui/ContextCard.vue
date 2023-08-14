<template>
  <NuxtLink
    class="card cursor-pointer transition-shadow duration-300 hover:shadow-xl"
    :href="href"
  >
    <div class="card__svg">
      <img class="p-8 mx-auto md:p-16" :src="src" alt="brainstorm" />
    </div>
    <div class="card__txt">
      <div class="card__txt__p mb-2 text-sm font-thin min-h-[40px]">
        <slot name="text"></slot>
      </div>
      <div class="card__txt__h">
        <div class="my-2 tracking-widest"><slot name="footer"></slot></div>
        <div class="arrow my-2 h-6 w-6 rotate-90 transition duration-500 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 96 120"
          >
            <path
              d="M19 41a4 4 0 002.83-1.17L44 17.66V88a4 4 0 008 0V17.66l22.17 22.17a4 4 0 005.66-5.66l-29-29h-.05a4 4 0 00-.56-.46c-.1-.07-.21-.11-.31-.17a4 4 0 00-.38-.2 3.94 3.94 0 00-.4-.12c-.12 0-.23-.08-.35-.1A4 4 0 0048 4a4 4 0 00-.73.07c-.12 0-.23.07-.35.1a3.94 3.94 0 00-.4.12 3.94 3.94 0 00-.38.2c-.1.06-.21.1-.31.17a4 4 0 00-.56.46h-.05l-29 29A4 4 0 0019 41z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  href: {
    type: String,
  },
});
</script>
<style scoped>
.card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border: 0.1px solid rgba(51, 51, 51, 0.1);
  background-color: #fff;
}
.card__svg {
  background-color: #ea8e00;
}
.card__txt {
  border-top: 0.1px solid rgba(51, 51, 51, 0.1);
  padding: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-transition: color 0.2s ease-out, border-bottom-color 0.2s ease-out;
  transition: color 0.2s ease-out, border-bottom-color 0.2s ease-out;
}
.card__txt__h {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 1px;
}
.arrow {
  opacity: 0;
}
.card:hover .arrow {
  opacity: 1;
}
</style>
