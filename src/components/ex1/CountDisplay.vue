<template>
    <div>
        <h1>{{ data.num }}</h1>
    </div>
</template>

<script setup>
import { inject } from 'vue';


const data = inject('data')

</script>

<style lang="scss" scoped>

</style>