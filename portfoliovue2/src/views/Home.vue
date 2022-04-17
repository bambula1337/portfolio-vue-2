<template>
  <div class="home">
    <Info/>
    <About/>
  </div>
</template>

<script>
import Info from '@/components/Info.vue';
import About from '@/components/About/AboutMain.vue'

export default {
  name: "Home",
  components: {
    Info,
    About,
  }
};
</script>
