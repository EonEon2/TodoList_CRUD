<template>
    <div>


        
        {{ str1 }}
        {{ str2 }}
    </div>
</template>

<script setup>
import { computed, ref, toRef } from 'vue';


const obj = ref({v1:'aaa'})
let str1 = toRef(obj.value, "v1")
let str2 = obj.value.v1

setTimeout(() => {
    obj.value.v1 = 'zzz'
    
}, 3000);
</script>

<style lang="scss" scoped>

</style>