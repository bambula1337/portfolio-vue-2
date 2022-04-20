<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from '@/components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
// Tailwind Connection
@import "./assets/style/tailwind.scss";

//Icons
@import 'https://unicons.iconscout.com/release/v4.0.0/css/line.css';

//Fonts
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

#app {
  @apply overflow-x-hidden;
}

</style>
