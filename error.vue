<template>
  <NuxtLayout>
    <div class="mx-0 my-10 h-[60vh] md:mx-10 flex">
      <div class="my-auto">
        <h1 class="my-5 text-3xl font-bold">你好像存取到了不存在的網頁喔！</h1>
        <h3 class="my-4">試試下面的幾個連結吧：</h3>
        <ul
          class="w-48 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900"
        >
          <li>
            <nuxt-link
              class="block w-full cursor-pointer rounded border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
              to="/"
              >首頁</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="block w-full cursor-pointer border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
              to="/about"
              >關於我們</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="block w-full cursor-pointer rounded border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-orange-400 focus:text-orange-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
              to="/contact"
              >聯絡我們</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </NuxtLayout>
</template>
