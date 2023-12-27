<template>
    <ol class="relative border-l border-gray-200">
        <li v-for="(history, index) in histories" :key="index" class="mb-10 ml-6">
            <span
                class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 ring-8 ring-white"
            >
                <svg
                    aria-hidden="true"
                    class="h-3 w-3 text-orange-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </span>
            <h3 class="mb-1 flex items-center text-lg font-semibold text-gray-900">
                {{ history.title }}
                <span
                    v-if="index === 0"
                    class="mr-2 ml-3 rounded bg-orange-100 px-2.5 py-0.5 text-sm font-medium text-orange-800"
                    >近期</span
                >
            </h3>
            <time class="mb-2 block text-sm font-normal leading-none text-gray-400">
                {{ history.date }}
            </time>
            <p class="mb-4 text-base font-normal text-gray-500">{{ history.description }}</p>
        </li>
    </ol>
</template>
<script setup>
defineProps({
    histories: {
        type: Array,
        required: true
    }
})
</script>
