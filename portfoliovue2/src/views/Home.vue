<template>
  <div class="home">
    <Info/>
    <About/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Project/>
  </div>
</template>

<script>
import Info from '@/components/Info.vue';
import About from '@/components/About/AboutMain.vue';
import Skills from '@/components/Skills/SkillsMain.vue';
import Services from '@/components/Services.vue';
import Portfolio from '@/components/Portfolio.vue';
import Project from '@/components/Project.vue';


export default {
  name: "Home",
  components: {
    Info,
    About,
    Skills,
    Services,
    Portfolio,
    Project,
  }
};
</script>
