<template>
    <div class="pl-8 w-4/6 m-auto box-border bg-red-200 pb-10" id="jl">
        <div class="introduction pr-8 pt-10 mb-8">
            <p class=" text-3xl">{{j.name}}</p>
            <p class="text-sm mt-1">{{j.JobHuntingIntention}}</p>
            <p class="mt-4 text-sm bg-gray-100 pt-4 pb-4 pl-4">
                <span class="pr-2">
                    电话：{{j.contactMe.phone}}
                </span>
                <span class="pr-2">
                    邮箱：{{j.contactMe.email}}
                </span>
                <span>
                    毕业院校：{{j.contactMe.school}}
                </span>
            </p>
        </div>
        <div class="job">
            <itemVue :name="`工作经历`" :theme="j.theme">
                <template v-slot:content>
                    <div class="content mb-4" v-for="job in j.jobBackgrounds" :key="job.name">
                        <div class="top mb-2">
                            <p>
                                <span class=" font-bold mr-2">{{job.name}}</span>
                                <span class=" font-bold">({{job.time.start}}——{{job.time.end}})</span>
                            </p>
                            <p class=" font-thin text-sm">
                                <span class=" border-r-2 pr-2 border-gray-400">
                                    部门：{{job.department}}
                                </span>
                                <span class=" pl-2">
                                    职位：{{job.position}}
                                </span>
                            </p>
                        </div>
                        <div class="bottom">
                            <p class=" font-bold">
                                工作职责：
                            </p>
                            <ul class=" pl-4">
                                <li class="font-thin text-sm mt-1" v-for="e,index in job.duty" :key="e">
                                    {{connectIndexWithString(index,"、",e)}}
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </template>
            </itemVue>
        </div>
        <div class="skill">
            <itemVue :name="`相关技能`" :theme="j.theme">
                <template v-slot:content>
                    <ul>
                        <li class=" font-thin text-sm mb-1" v-for="skill,index in j.skills" :key="skill">{{connectIndexWithString(index,'、',skill)}}</li>
                    </ul>
                </template>
            </itemVue>
        </div>
        <div class="project">
            <itemVue :name="`项目经历`" :theme="j.theme">
                <template v-slot:content>
                    <div class="content mb-4" v-for="p in j.projectBackgrounds" :key="p.name">
                        <div class="top mb-2">
                            <p>
                                <span class=" font-bold mr-2">项目名称：{{p.name}}</span>
                            </p>
                        </div>
                        <div class="bottom">
                            <p class="font-thin text-sm mb-1">
                                工作描述：{{p.describe}}
                            </p>
                            <p class="font-thin text-sm mb-1">
                                工作技能：{{translateListToString(p.technology)}}
                            </p>
                            <p class="font-thin text-sm mb-1">
                                工作内容：
                            </p>
                            <ul class=" pl-4">
                                <li class="font-thin text-sm mt-1" v-for="c,index in p.content" :key="c">
                                    {{connectIndexWithString(index,'、',c)}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </itemVue>
        </div>
        <div class="self">
            <itemVue :name="`自我介绍`" :theme="j.theme">
                <template v-slot:content>
                    <ul> 
                        <li class=" font-thin text-sm mb-1" v-for="s,index in j.selfIntroduction" :key="s">
                            {{connectIndexWithString(index,'、',s)}}
                        </li>
                    </ul>
                </template>
            </itemVue>
        </div>
    </div>
</template>

<script setup lang='ts'>
import itemVue from './comp/temp2-item.vue'
import {translateListToString,connectIndexWithString} from '../utils/index'
import {t} from '../example/temp2'

const j = t()
</script>

<style lang="" scoped>

</style>