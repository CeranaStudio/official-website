<template>
  <div class="home__hero">
    <div class="home__hero__text">
      <h1>穩定、可靠</h1>
      <p>
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
<style scoped>
.home__hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 552px;
}
@media screen and (max-width: 1024px) {
  .home__hero {
    min-height: 62.5vh;
    flex-direction: column-reverse;
  }
}
.home__hero__text {
  width: calc(50%-10px);
  margin: 10px;
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
</style>
