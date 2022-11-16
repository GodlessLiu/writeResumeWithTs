<template>
    <div class="item mb-4">
        <div class="header mb-2 border-b-4 border-slate-700 flex flex-row" :style="{borderColor:props.theme}">
            <div class="h-10 bg-slate-700 w-32 leading-10 flex flex-row justify-around" :style="{backgroundColor:props.theme}">
                <span class="h-full">
                    <svg t="1668610937730" class="icon h-full" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1235" width="40" height="40">
                        <path
                            d="M818.01216 414.09536L510.81216 266.24 203.60704 414.1056l43.2896 26.10176v228.29568h21.11488V452.9408l63.33952 38.1952v261.82656h358.92736V491.19744l127.73376-77.10208z m-307.2-124.43136l262.86592 126.53568-262.71232 158.57664-263.00928-158.58688 262.85568-126.52544z m158.35136 442.17856H352.4608V503.8592l158.50496 95.57504 158.19776-95.49312v227.90144z"
                            fill="#e6e6e6" p-id="1236"></path>
                    </svg>
                </span>
                <span class="text-white mr-4">{{props.name}}</span>
            </div>
            <div
                class=" border-l-3 border-b-5 border-t-5 border-r-3 border-transparent border-l-slate-700 border-b-slate-700" :style="{borderLeftColor:props.theme,borderBottomColor:props.theme}">

            </div>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>

type propsType = {
    name:string
    icon?:string
    theme?:string
}
const props = defineProps<propsType>()

</script>

<style lang="" scoped>

</style>