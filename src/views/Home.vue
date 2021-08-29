<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <List />
      <Footer />
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import Header from '../components/Header.vue'
  import List from '../components/List.vue'
  import Footer from '../components/Footer.vue'
  export default defineComponent ({
    name: 'App',
    components: {
      Header,
      List,
      Footer
    }
  })
</script>
<style>
/*app*/
.todo-container { @apply w-w600 m-xauto;}
.todo-container .todo-wrap { @apply p-2.5 border border-thirdcolor rounded-md; }
</style>
