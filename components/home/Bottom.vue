<template>
  <div class="home__bottom">
    <div class="home__bottom__text">
      <h1>了解我們</h1>
      <p>我們是由一群重視效率與產出的人組成的團隊， 對於網站服務建設有著極高的熱情和專業知識。</p>
    </div>
    <div class="home__bottom__cards">
      <div class="slide-in">
        <UiContextCard src="/img/home/brainstorm.png" href="/about">
          <template #text> 更深入的了解我們團隊的理念與成員，以及我們走過的路。 </template>
          <template #footer> 關於團隊 </template>
        </UiContextCard>
      </div>
      <div class="slide-in">
        <UiContextCard src="/img/home/position.png" href="/about">
          <template #text> 曾經參與過的專案，以及我們的獎項經歷。 </template>
          <template #footer> 獎項經歷 </template>
        </UiContextCard>
      </div>
      <div class="slide-in">
        <UiContextCard src="/img/home/cloud-database.png" href="/about">
          <template #text> 我們的服務範圍，以及我們的服務標準。 </template>
          <template #footer> 服務範圍 </template>
        </UiContextCard>
      </div>
    </div>
  </div>
</template>
<script setup>
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach((entry) => {
      const cards = entry.target.querySelectorAll('.slide-in')

      cards.forEach((card, index) => {
        if (entry.isIntersecting) {
          card.classList.add('in-view')
          return // if we added the class, exit the function
        }

        card.classList.remove('in-view')
      })
    })
  })

  observer.observe(document.querySelector('.home__bottom__cards'))
})
</script>
<style scoped>
.home__bottom {
  max-width: 1024px;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.home__bottom__text {
  margin-top: 56px;
  margin-bottom: 0;
  text-align: center;
}
.home__bottom__text h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 1rem;
}
.home__bottom__text p {
  font-size: 24px;
  font-weight: lighter;
  max-width: 700px;
  margin: auto;
}
.home__bottom .home__bottom__cards {
  margin-bottom: 88px;
  margin-top: 64px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  padding: 32px 0;

  overflow: hidden;
}
.home__bottom__cards .in-view:nth-child(1) {
  transition-delay: 0.4s !important;
}
.home__bottom__cards .in-view:nth-child(2) {
  transition-delay: 0.8s !important;
}
.home__bottom__cards .in-view:nth-child(3) {
  transition-delay: 1.2s !important;
}
@media screen and (min-width: 640px) {
  .home__bottom .home__bottom__cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
.slide-in {
  transform: translateY(100%);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.in-view {
  transform: none;
  opacity: 1;
}
</style>
