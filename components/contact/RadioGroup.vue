<template>
    <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        <li
            v-for="option in options"
            :key="option"
            class="w-full border-b border-gray-200 rounded-t-lg cursor-pointer"
            @click="() => handleChange(option)"
        >
            <div class="flex items-center ps-3">
                <input
                    :id="`list-radio-${option}`"
                    type="radio"
                    name="list-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                    :for="`list-radio-${option}`"
                    class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >{{ option }}
                </label>
            </div>
        </li>
    </ul>
</template>
<script setup lang="ts">
defineProps({
    modelValue: String,
    options: Array<String>
})
const emit = defineEmits(['update:modelValue'])
const handleChange = (option) => {
    console.log('[RadioGroup] handleChange', option)
    emit('update:modelValue', option)
}
</script>
