<template>
  <ul class="todo-main">
    <Item />
  </ul>
</template>
<script>
import { defineComponent } from 'vue'
import Item from './Item.vue'
export default defineComponent ({
  name: 'List',
  components:{
    Item
  }
})
</script>

<style>
/*main*/
.todo-main { @apply ml-0 border border-fourthcolor rounded-sm p-0; }
.todo-empty { @apply h-10 leading-10 border border-fourthcolor rounded-sm pl-1.5 mt-2.5; }
</style>