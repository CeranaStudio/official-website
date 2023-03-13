<template>
  <div class="team__grid__item flex flex-col sm:flex-row">
    <div class="team__full-width">
      <img :src="src" class="team__full-width__image" />
    </div>
    <div class="team__details">
      <div class="title">{{ title }}</div>
      <div class="role">{{ role }}</div>
      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
.team__grid__item {
  max-width: 500px;
  min-height: 160px;
  margin-top: 32px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  position: relative;
  background: #fff;
  color: #333;
  border: 0.1px solid rgba(51, 51, 51, 0.1);
  padding: 16px;
  overflow: hidden;
}
.team__full-width {
  max-width: 250px;
  max-height: 250px;
  margin-top: -32px;
  margin-left: -32px;
  margin-bottom: -32px;
}
@media screen and (max-width: 640px) {
  .team__full-width {
    margin: -16px -48px 24px;
  }
}
.team__details {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin-left: 32px;
}
.team__grid__item .title {
  line-height: 1.5;
  font-size: 24px;
}
.team__grid__item .description,
.team__grid__item .role {
  line-height: 1.5;
  opacity: 0.9;
}
.team__grid__item .description {
  font-size: 12px;
}
.team__grid__item .description {
  padding-top: 16px;
  padding-right: 16px;
  max-width: 28em;
}
</style>
