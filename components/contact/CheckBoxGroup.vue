<script setup lang="ts">
import { ref, defineProps, defineEmits, provide, watch } from 'vue'

const props = defineProps({
    initialSelected: Array
})
const emit = defineEmits(['update'])

const selectedCheckboxes = ref(props.initialSelected)
watch(
    () => props.initialSelected,
    (newVal) => {
        console.log('[CheckBoxGroup] watch', newVal)
        selectedCheckboxes.value = [...newVal]
    },
    { immediate: true }
)

const handleCheckboxChange = (checked, label) => {
    if (checked) {
        selectedCheckboxes.value.push(label)
    } else {
        selectedCheckboxes.value = selectedCheckboxes.value.filter((item) => item !== label)
    }
    emit('update', selectedCheckboxes.value)
}

provide('selectedCheckboxes', selectedCheckboxes)
provide('handleCheckboxChange', handleCheckboxChange)
</script>

<template>
    <div class="grid md:grid-cols-2 gap-2">
        <slot></slot>
    </div>
</template>
