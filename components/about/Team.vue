<template>
  <div>
    <h1 class="text-center text-3xl">團隊</h1>
    <div class="mt-10 grid grid-cols-1 gap-4 xl:grid-cols-2">
      <UiPersonCard
        class="mx-auto"
        src="/img/about/YJack.png"
        title="YJack0000"
        role="專案管理"
        description="YJack 擁有物聯網、微服務和前端開發的經驗。曾經於賴瑞科技設計結合影像視覺和訊號模擬的硬體遊戲助手，目前負責經營與聯繫東蜂工作室。"
      />
      <UiPersonCard
        class="mx-auto"
        src="/img/about/Yan.png"
        title="Yan Chiu"
        role="服務架構"
        description="Yan Chiu 擁有四年的後端開發的經驗，現為於陽明交大研究區塊鏈。曾經於橘橘鏈科技股份有限公司擔任後端工程師，目前正在與 CeranaTeam 合作提供在線服務。"
      />
      <UiPersonCard class="mx-auto" />
      <UiPersonCard class="mx-auto" />
    </div>
  </div>
</template>
