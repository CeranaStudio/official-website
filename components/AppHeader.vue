<template>
  <header class="menu">
    <div class="menu__logo" :class="{ open: isOpen }">
      <img :src="`/img/logo${open}.svg`" alt="logo" />
    </div>
    <div
      class="bruger"
      :class="{ open: isOpen }"
      @click="open === '' ? (open = '-open') : (open = '')"
    >
      <span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </header>
  <nav class="menu__nav" v-if="isOpen">
    <NuxtLink class="menu__nav__link" to="/">主頁</NuxtLink>
    <NuxtLink class="menu__nav__link" to="/about">關於我們</NuxtLink>
    <!-- <NuxtLink class="menu__nav__link" to="/portfolio">Portfolio</NuxtLink> -->
    <!-- <NuxtLink class="menu__nav__link" to="/press">Press</NuxtLink> -->
    <NuxtLink class="menu__nav__link" to="/contact">聯絡方式</NuxtLink>
  </nav>
</template>
<script setup>
const open = ref('')
const isOpen = computed(() => open.value === '-open')
</script>
<style scoped>
.menu {
  height: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}
.menu__logo {
  z-index: 100;
}
.menu__logo img {
  height: 3vh;
  max-width: 300px;
}

@media screen and (min-width: 1024px) {
  .menu__logo img {
    max-width: 200px;
  }
}

.menu__logo:hover {
  cursor: pointer;
}

.menu__logo.open {
  color: #fff;
}
.bruger {
  z-index: 100;
  width: 60px;
  height: 45px;
  position: relative;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: rotate 0.5s ease-in-out;
  transition: rotate 0.5s ease-in-out;
  cursor: pointer;
}

.bruger.open span {
  opacity: 0.8;
  background: #fff;
}

.bruger.open:hover span {
  opacity: 1;
  background: #d2a357;
}

.bruger.open:active span {
  opacity: 1;
  background: #fff;
}

@media screen and (max-width: 425px) {
  .bruger {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
    margin-right: -18px;
  }
}

@media screen and (min-width: 425px) {
  .bruger {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
    margin-right: -18px;
  }
}

@media screen and (min-width: 768px) {
  .bruger {
    -webkit-transform: scale(0.45);
    transform: scale(0.45);
    margin-right: -16px;
  }
}

.bruger span {
  display: block;
  position: absolute;
  height: 9px;
  width: 50%;
  background: #333;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.bruger span:nth-child(2n) {
  left: 50%;
}

.bruger span:nth-child(odd) {
  left: 0;
}

.bruger span:first-child,
.bruger span:nth-child(2) {
  top: 0;
}

.bruger span:nth-child(3),
.bruger span:nth-child(4) {
  top: 18px;
}

.bruger span:nth-child(5),
.bruger span:nth-child(6) {
  top: 36px;
}

.bruger.open span:first-child,
.bruger.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.bruger.open span:nth-child(2),
.bruger.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.bruger.open span:first-child {
  left: 5px;
  top: 7px;
}

.bruger.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 7px;
}

.bruger.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

.bruger.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

.bruger.open span:nth-child(5) {
  left: 5px;
  top: 29px;
}

.bruger.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 29px;
}
.menu__nav {
  z-index: 99;
  background: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.menu__nav__link {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 36px;
  opacity: 0.8;
  min-height: 40px;
}
a {
  text-decoration: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: color, background-color, opacity;
}
a:hover {
  color: #d2a357;
}
</style>
