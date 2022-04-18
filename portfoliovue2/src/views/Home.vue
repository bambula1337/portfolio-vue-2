<template>
  <div class="home">
    <Info/>
    <About/>
    <Skills/>
  </div>
</template>

<script>
import Info from '@/components/Info.vue';
import About from '@/components/About/AboutMain.vue';
import Skills from '@/components/Skills/SkillsMain.vue';


export default {
  name: "Home",
  components: {
    Info,
    About,
    Skills,
  }
};
</script>
