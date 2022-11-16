<template>
  <div class="bg-white shadow-lg pb-10">
    <div :style="{backgroundColor:j.theme}" class="mb-4 h-14 bg-blue-300 pl-4">
      <img src="./assets/study.svg" alt="" class="h-2/3 inline-block align-text-bottom">
      <span class="text-white font-bold text-2xl">
        个人简历
      </span>
    </div>
    <div class="content bg-white m-auto">
      <!-- 自我介绍 -->
      <div class="introduction pl-12 pr-12 flex flex-row justify-between pb-2">
        <div class="left flex-1">
          <p class="name">
          <h1 class="text-3xl font-bold">{{j.name}} {{j.identity}}</h1>
          </p>
          <p>
            <span class="border-r-2 pr-2 border-black font-bold">{{j.contactMe.phone}}</span>
            <span class="pl-2 border-r-2 pr-2 border-black font-bold">{{j.contactMe.email}}</span>
            <span class="pl-2 font-thin">{{j.contactMe.where}}</span>
          </p>
          <p>
            年龄：<span class="font-bold pr-1">{{j.age}}</span>岁
          </p>
          <p>求职意向：
            <span>
              {{j.JobHuntingIntention}}
            </span>
          </p>
        </div>
        <div class="right h-40 pr-2">
          <img :src="j.headerLogo" alt="" class="h-full">
        </div>
      </div>
      <!-- item -->
      <div class="item pl-12 pr-12 mb-3" v-for="item in j.items" :key="item.title">
        <p class="text-blue-400  tracking-wider mb-1 font-medium" :style="{color:j.theme}">{{item.title}}</p>
        <div class=" h-2 bg-blue-300 mb-2" :style="{backgroundColor:j.theme}"></div>
        <div class="item-name flex flex-row justify-between mb-2" v-if="item.header">
          <span class="name font-thin">
            {{item.header.title}}
          </span>
          <span class="time font-thin" v-if="item.header.time">
            {{item.header.time.start}} —— {{item.header.time.end}}
          </span>
        </div>
        <ul>
          <li class="mb-1 flex flex-row text-sm" v-for="e in item.content" :key="e.name"><span
              class="pr-2">⭕</span><span>
              {{e.name}}{{e.describe}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>
<script lang="ts" setup>
import { t } from '../example/temp1'
const j = t()

</script>