<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    label: String
})

const handleCheckboxChange = inject('handleCheckboxChange')
const handleChange = (event) => {
    // console.log('[CheckBox] handleChange', event.target.checked)
    handleCheckboxChange(event.target.checked, props.label)
}

const selected = inject('selectedCheckboxes')
const isChecked = computed(() => {
    // console.log(
    //    '[CheckBox] isChecked',
    //    selected.value,
    //    props.label,
    //    selected.value.includes(props.label)
    // )
    return selected.value.includes(props.label)
})
</script>

<template>
    <div class="flex items-center me-4">
        <input
            id="inline-checkbox"
            :checked="isChecked"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            @change="handleChange"
        />
        <label for="inline-checkbox" class="ms-2 text-md font-medium text-gray-900">{{
            label
        }}</label>
    </div>
</template>
