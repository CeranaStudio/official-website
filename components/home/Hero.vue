<template>
  <div
    class="flex max-w-[1200px] min-h-[552px] flex-col-reverse flex-wrap items-center justify-center lg:min-h-[60vh] lg:flex-row"
  >
    <div class="home__hero__text">
      <h1 name="title">穩定、可靠</h1>
      <p name="context">
        規劃！設計！實作！建構！<br />
        東蜂根據您的需求和目標，製作出符合您期望的網站。
      </p>
    </div>
    <div class="home__hero__img h-96">
      <img src="/img/home.svg" alt="home" />
      <!-- <UiHexAnimation /> -->
    </div>
  </div>
</template>
<script setup>
onMounted(() => {
  document.getElementsByName('title').forEach((el) => {
    el.classList.add('fade-in')
  })
  document.getElementsByName('context').forEach((el) => {
    el.classList.add('opacity-0')
  })
  setTimeout(() => {
    document.getElementsByName('context').forEach((el) => {
      el.classList.remove('opacity-0')
      el.classList.add('fade-in')
    })
  }, 1000)
})
</script>
<style scoped>
.home__hero__text {
  width: calc(50%-10px);
  padding: 10px;
}
.home__hero__text h1 {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 1rem;
}
.home__hero__text p {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
@media screen and (max-width: 1024px) {
  .home__hero__text {
    width: 100%;
    text-align: center;
  }
  .home__hero__text h1 {
    font-size: 48px;
  }
}
.home__hero__img {
  width: 50%;
  overflow: hidden;
  position: relative;
}
.home__hero__img img {
  width: 50vw;
  max-width: 540px;
  max-height: none;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: contain;
  object-position: center;
}
@media screen and (max-width: 1024px) {
  .home__hero__img {
    height: 400px;
    width: 100%;
  }
  .home__hero__img img {
    width: 80vw;
    max-width: 540px;
    max-height: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    object-position: center;
  }
}
@media screen and (max-width: 425px) {
  .home__hero__img {
    height: 250px;
  }
}
.fade-in {
  animation: fade-in 1s ease-in-out;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
