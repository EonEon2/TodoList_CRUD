<template>
    <div>
        <button @click="()=>changeNum(props.amount)"> 
                {{ props.label }}
        </button>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const changeNum = inject('changeNum')
const props = defineProps(['label','amount']) // countButtons에서 만든 속성값들을 props를 통해서 받기


</script>

<style lang="scss" scoped>

</style>