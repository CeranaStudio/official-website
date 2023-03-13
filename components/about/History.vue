<template>
  <div>
    <h1 class="text-center text-4xl font-bold my-10">時間線</h1>
    <UiTimeLine :histories="histories" />
  </div>
</template>
<script setup>
const histories = [
  {
    title: 'TSMC 高可用性分散式系統黑客松 - 2th',
    date: '得獎於 2023 年 2 月 10-11',
    description:
      '設計一套高可用性的分散式網路服務，部署在一群數目固定的伺服器上，並兼顧接收到的資料正確性。'
  },
  {
    title: 'Ledger - 小型店面記帳系統',
    date: '上線於 2022 年 12 月 24',
    description:
      'Ledger 是一個簡潔、方便、快速的線上服務。進貨、銷售、利潤管理、員工管理，只需要一台筆電或平板就可以輕鬆滿足您的需求！'
  },
  {
    title: 'Chill Wallet - 可驗證憑證管理系統',
    date: '上線於 2022 年 6 月 9',
    description:
      'Chill Wallet遵循W3C的規範，設計一個以Ethereum為環境的可驗證憑證機制，並且架設一平台提供Issuer、Holder、Verifier相關的功能，像是協助Issuer發佈憑證、identity wallet、驗證介面等。'
  },
  {
    title: 'Stylish - 服飾電商網站',
    date: '上線於 2022 年 4 月 16',
    description:
      '建立前台、後台，管理顧客和產品資料。前台主要功能包括商品展示、購物車、訂單管理和付款系統。後台主要功能包括商品管理、訂單管理、庫存管理和資料分析。'
  },
  {
    title: '租迪 Zudii - 專為學生／小資族設計的租屋爬蟲應用',
    date: '上線於 2022 年 1 月 6 ',
    description:
      '透過定期爬取租屋網站資料，並透過 LINE Messaging Notify ，在第一時間回傳使用者有興趣的租屋貼文。'
  },
  {
    title: '多倉儲管理系統',
    date: '完成於 2021 年 11 月 21',
    description:
      '使用全套 Google Firebase 服務製作的多倉儲管理系統，包含倉儲管理、商品管理、訂單管理、庫存管理、資料分析等功能。'
  },
  {
    title: '久太建設分帳系統 - 分帳應用程式',
    date: '完成於 2021 年 10 月 31',
    description:
      '使用 Vue.js 與 Electron 製作跨平台分帳應用程式，包含帳戶管理、帳單管理、帳單分帳、帳單結算與匯出等功能。'
  }
]
</script>
