<template>
    <div class="preview w-4/5 m-auto">
        <div class=" h-96 w-96 mr-4 mt-4 inline-block hover:scale-105 cursor-pointer hover:shadow-xl duration-500" v-for="temp in previewTemplateList" :key="temp.name">
            <img :src="temp.preview" alt="" class=" w-full" @click="goTo(temp.name)">
        </div>
        
    </div>
</template>

<script setup lang='ts'>
import {useRouter } from "vue-router";
import {previewTemplateList} from './index'


const router = useRouter()
const goTo = (e:string)=>{
    router.push({name:'template',query:{id:e}})
}
</script>

<style lang="" scoped>

</style>