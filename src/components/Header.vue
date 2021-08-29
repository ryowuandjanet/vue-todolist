<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'Header'
})
</script>

<style>
/*header*/
.todo-header input { @apply w-w560 leading-7 text-tiny border border-fourthcolor rounded py-1 px-2; }
.todo-header input:focus { @apply outline-none border border-fivecolor shadow-box; }
</style>