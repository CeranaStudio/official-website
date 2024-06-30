<template>
    <div class="max-w-screen-xl mx-auto px-5">
        <div class="mt-16 text-center">
            <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">聯絡我們</h1>
        </div>
        <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
            <div>
                <h2 class="font-medium text-2xl text-gray-800">我們可以如何幫助您?</h2>
                <p class="text-lg leading-relaxed text-slate-500 mt-3">
                    請詳細填寫下列資訊，讓我們更快速的為您服務，節省您的時間。
                </p>
                <div class="mt-5">
                    <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
                        <IconsLocation />
                        <span>1734 Sanfransico, CA 93063</span>
                    </div> -->
                    <div class="flex items-center mt-2 space-x-2 text-gray-600">
                        <IconsMail />
                        <a href="mailto:cerana@gmail.com">cerana@gmail.com</a>
                    </div>
                    <div class="flex items-center mt-2 space-x-2 text-gray-600">
                        <IconsPhone />
                        <a href="tel:(+886) 978 735 622">(+886) 978-735-622</a>
                    </div>
                </div>
            </div>
            <div>
                <form class="space-y-5" @submit="handleSubmit">
                    <h3 class="mb-4 font-semibold text-gray-900">詢問類別?</h3>
                    <ContactCheckBoxGroup
                        :initial-selected="[]"
                        class="mb-5"
                        @update="handleUpdateTopics"
                    >
                        <ContactCheckBox label="網站系統程式" />
                        <ContactCheckBox label="語言模型服務" />
                        <ContactCheckBox label="對話機器人" />
                    </ContactCheckBoxGroup>
                    <div
                        v-if="error.selectedTopics"
                        class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                    >
                        請選擇詢問類別
                    </div>

                    <h3 class="mb-4 font-semibold text-gray-900">預算區間</h3>
                    <ContactRadioGroup
                        v-model="budget"
                        :options="['1~5萬', '5~10萬', '11~20萬', '20~30萬', '30~50萬', '50萬以上']"
                        class="mb-5"
                    >
                    </ContactRadioGroup>
                    <div
                        v-if="error.budget"
                        class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                    >
                        請選擇預算區間
                    </div>

                    <h3 class="mb-4 font-semibold text-gray-900">聯絡資料</h3>
                    <div class="mb-5">
                        <input
                            v-model="name"
                            type="text"
                            placeholder="稱呼(必填)"
                            class="w-full px-4 py-3 border-2 placeholder:text-gray-300 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                        />
                        <div
                            v-if="error.name"
                            class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                        >
                            請提供名稱
                        </div>
                    </div>
                    <div class="mb-5">
                        <input
                            v-model="email"
                            type="email"
                            placeholder="電子郵件(必填)"
                            class="w-full px-4 py-3 border-2 placeholder:text-gray-300 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                        />
                        <div v-if="error.email" class="empty-feedback text-red-400 text-sm mt-1">
                            請提供正確的電子郵件
                        </div>
                    </div>
                    <div class="mb-3" data-astro-cid-uwnxe3i2="">
                        <textarea
                            v-model="message"
                            name="message"
                            placeholder="備註內容"
                            class="w-full px-4 py-3 border-2 placeholder:text-gray-300 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-black text-white hover:bg-slate-900 border-2 border-transparent"
                    >
                        送出
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const selectedTopics = ref([])
const handleUpdateTopics = (value: string[]) => {
    selectedTopics.value = value
}

const budget = ref('')
const name = ref('')
const email = ref('')
const message = ref('')

const error = reactive({
    selectedTopics: false,
    budget: false,
    name: false,
    email: false,
    message: false
})

const validate = () => {
    error.selectedTopics = selectedTopics.value.length === 0
    error.budget = budget.value === ''
    error.name = name.value === ''
    error.email = email.value === ''
    return !Object.values(error).some((v) => v)
}

const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('submit', {
    //    selectedTopics: selectedTopics.value,
    //    budget: budget.value,
    //    name: name.value,
    //    email: email.value,
    //    message: message.value
    // })
    if (!validate()) return

    const emailBody = `名稱: ${name.value}\n電子郵件: ${
        email.value
    }\n詢問類別: ${selectedTopics.value.join(', ')}\n預算區間: ${budget.value}\n備註: ${
        message.value || '無備註'
    }`
    window.location.href = `mailto:cerana@gmail.com?subject=[官網案件] 聯絡表單資訊&body=${encodeURIComponent(
        emailBody
    )}`
}
</script>
