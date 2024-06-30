<template>
    <div
        class="m-auto -ml-6 mt-16 flex w-screen flex-wrap items-center justify-center bg-gradient-to-r from-[#ea8e00] to-[#f5ce5d] lg:-ml-28"
    >
        <div class="max-w-[1200px]">
            <div class="relative flex w-full">
                <div class="mx-auto h-24 w-48 rounded-b-full bg-white">
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
            <h1
                class="my-10 mx-auto w-full max-w-[700px] py-10 px-2 text-center text-2xl text-white"
            >
                特色
            </h1>

            <!-- <h1
                class="my-10 mx-auto w-full max-w-[700px] py-10 px-2 text-center text-2xl text-white"
            >
                我們專業的團隊能夠提供創新的網站設計和完整的開發解決方案。我們致力於提供最優質的產品和服務，並確保您的網站在所有設備上都能正常運行。
            </h1> -->
            <div
                class="grid w-screen max-w-[1200px] grid-cols-1 gap-10 p-8 pt-0 sm:p-20 sm:pt-0 md:grid-cols-3"
            >
                <UiImageCard class="bg-green-500" src="/img/home/app-development.png"
                    ><template #title>界面開發</template>
                </UiImageCard>
                <UiImageCard class="bg-sky-500" src="/img/home/smartphone.png"
                    ><template #title>移動端支援</template>
                </UiImageCard>
                <UiImageCard class="bg-red-500" src="/img/home/high-avalibility.png"
                    ><template #title>輕鬆上雲</template>
                </UiImageCard>
            </div>
        </div>
    </div>
</template>
<script setup>
const clickScroll = () => {
    const scroll = document.querySelector('#scroll')
    scroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })
}
</script>
<style scoped></style>
