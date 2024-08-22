<template>
    <div><!--버튼의 다양한 종류를 만들기 위한 컨테이너-->
        <CustomButton :label="'PLUS'" :amount="1"></CustomButton>
        <CustomButton :label="'MINUS'" :amount="-1"></CustomButton>
    </div>
</template>

<script setup>
import CustomButton from './CustomButton.vue';



</script>
<style lang="scss" scoped>
</style>