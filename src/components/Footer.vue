<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span>
      <span>已完成0</span> / 全部2
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent ({
  name: 'Footer'
})
</script>

<style>
/*footer*/
.todo-footer { @apply h-10 leading-10 pl-1.5 mt-1.5; }
.todo-footer label { @apply inline-block mr-5 cursor-pointer; }
.todo-footer label input { @apply relative -top-px align-middle mr-1.5; }
.todo-footer button { @apply float-right mt-1.5; }
</style>