<template>
  <li>
    <label>
      <input type="checkbox" />
      <span>xxxxx</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'Item'
})
</script>

<style>
  /*item*/
  li { @apply list-none h-8 leading-8 p-0 border border-fourthcolor; }
  li label { @apply float-left cursor-pointer; }
  li label li input { @apply align-middle mr-1.5 relative -top-px; }
  li button { @apply float-right hidden mt-0.5; }
  li:before { content: initial; }
  li:last-child { @apply border-b-0; }
</style>