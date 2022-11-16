<template>
  <button class="btn" @click="e">打印</button>
  <div id="jl" class="w-4/6 m-auto">
    <template2Vue></template2Vue>
  </div>
</template>

<script setup lang='ts'>
import template1Vue from './components/template1.vue'
import template2Vue from './components/template2.vue'

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