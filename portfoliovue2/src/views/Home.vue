<template>
  <div class="home">
    <Info :isDarkMode="isDarkMode"/>
    <About :isDarkMode="isDarkMode"/>
    <Skills :isDarkMode="isDarkMode"/>
    <Services :isDarkMode="isDarkMode"/>
    <Portfolio :isDarkMode="isDarkMode"/>
    <Project :isDarkMode="isDarkMode"/>
    <Contact :isDarkMode="isDarkMode"/>
  </div>
</template>

<script>
import Info from '@/components/Info.vue';
import About from '@/components/About/AboutMain.vue';
import Skills from '@/components/Skills/SkillsMain.vue';
import Services from '@/components/Services.vue';
import Portfolio from '@/components/Portfolio.vue';
import Project from '@/components/Project.vue';
import Contact from '@/components/Contact.vue';


export default {
  name: "Home",
  components: {
    Info,
    About,
    Skills,
    Services,
    Portfolio,
    Project,
    Contact
  },
  props: ['isDarkMode'],
};
</script>
