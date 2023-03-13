<template>
  <footer class="footer">
    <section class="footer_copyright">
      © 2023 Cerana Team. All rights reserved.
    </section>
  </footer>
</template>
<style scoped>
.footer {
  color: #333;
  line-height: 1.5;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 64px;
  background-color: #f3f3f3;
  left: 0;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media screen and (max-width: 320px) {
  .footer {
    padding: 32px 20px;
  }
}

@media screen and (min-width: 320px) {
  .footer {
    padding: 32px 20px;
  }
}

@media screen and (min-width: 375px) {
  .footer {
    padding: 32px 24px;
  }
}

@media screen and (min-width: 425px) {
  .footer {
    padding: 32px 24px;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    padding: 50px 115px;
  }
}

@media screen and (min-width: 1280px) {
  .footer {
    padding: 50px 120px;
  }
}

@media screen and (min-width: 1440px) {
  .footer {
    padding: 50px 120px;
  }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .footer span {
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .footer {
    font-size: 12px;
    line-height: 1.5;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    font-size: 16px;
    line-height: 1.4;
  }
}

@media screen and (max-width: 425px) {
  .footer__copyright {
    width: 200px;
  }
}
</style>
