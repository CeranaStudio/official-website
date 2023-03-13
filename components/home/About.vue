<template>
  <div
    class="-ml-6 lg:-ml-28 w-screen mt-16 m-auto flex flex-wrap justify-center items-center bg-gradient-to-r from-[#ea8e00] to-[#f5ce5d]"
  >
    <div class="relative w-full flex">
      <div class="bg-white h-24 w-48 rounded-b-full mx-auto">
        <svg
          id="scroll"
          height="32"
          viewBox="0 200 1200 1200"
          width="59"
          class="mx-auto animate-bounce cursor-pointer"
          @click="clickScroll"
        >
          <path
            id="path3134"
            d="M 600.00584,1200 778.71504,1021.2908 1200,600.00586 1021.2673,421.29666 600.00584,842.55818 178.7209,421.29666 -1.9e-5,600.01758 421.2615,1021.2791 599.9824,1200 z"
          ></path>
        </svg>
      </div>
    </div>
    <h1 class="w-[700px] text-center text-white text-xl py-10 m-10">
      我們專業的團隊能夠提供創新的網站設計和完整的開發解決方案。我們致力於提供最優質的產品和服務，並確保您的網站在所有設備上都能正常運行。
    </h1>
    <div
      class="w-screen pt-0 sm:p-20 p-8 sm:pt-0 grid-cols-1 grid gap-10 md:grid-cols-3"
    >
      <UiImageCard><template #title>網頁應用</template></UiImageCard>
      <UiImageCard><template #title>移動端支援</template></UiImageCard>
      <UiImageCard><template #title>高可用性</template></UiImageCard>
    </div>
  </div>
</template>
<style scoped></style>
<script setup>
const clickScroll = () => {
  const scroll = document.querySelector("#scroll");
  scroll.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
</script>
