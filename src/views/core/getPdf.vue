<template>
    <button class="btn" @click="e">打印</button>
    <div id="jl" class="sm:w-4/6 m-auto">
        <component :is="getPdfTemplateList[name as string]"></component>
    </div>
</template>

<script setup lang='ts'>
import {getPdfTemplateList} from './register'
import {useRoute} from 'vue-router'

const useRout = useRoute()

const name = useRout.query.id

const e = () => {
    let printHtml = document.getElementById("jl")!.innerHTML;
    window.document.body.innerHTML = printHtml;
    window.print();
    location.reload();
    return false;
}
</script>

<style lang="" scoped>

</style>