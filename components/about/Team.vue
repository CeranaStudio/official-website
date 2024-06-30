<template>
    <div class="mt-16 px-20">
        <h1 class="text-center text-4xl font-bold">團隊</h1>
        <p class="text-center text-lg text-gray-500 mt-4">
            我們是一個多元團隊！我們來自不同的背景，為工作帶來不同的個性、經驗和技能。這就是我們團隊如此特別的原因!
        </p>
        <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
            <UiPersonCard
                class="mx-auto"
                src="/img/about/YJack.jpg"
                title="YJack Zheng"
                role="專案管理"
            />
            <UiPersonCard
                class="mx-auto"
                src="/img/about/Yan.png"
                title="Yan Chiu"
                role="產品設計"
            />
            <UiPersonCard
                class="mx-auto"
                src="/img/about/Brandon.jpg"
                title="Brandon Lu"
                role="雲原生工程師"
            />
            <UiPersonCard
                class="mx-auto"
                src="/img/about/Ian.jpg"
                title="Ian Chiu"
                role="軟體工程師"
            />
            <UiPersonCard
                class="mx-auto"
                src="/img/about/CTHua.jpg"
                title="CTHua"
                role="全端工程師"
            />
            <UiPersonCard
                class="mx-auto"
                src="/img/about/Mark.jpg"
                title="Mark Lai"
                role="後端工程師"
            />
        </div>
    </div>
</template>
