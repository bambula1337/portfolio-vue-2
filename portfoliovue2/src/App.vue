<template>
  <div id="app" :class="{'bg-dark': isDarkModeEnable}">
    <Header :isDarkModeEnable.sync="isDarkModeEnable"/>
    <div class="main">
      <router-view :isDarkMode="isDarkModeEnable"/>
    </div>
    <Footer :isDarkMode="isDarkModeEnable"/>
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
  data(){
    return{
      isDarkModeEnable: false,
    }
  }
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
  @apply overflow-x-hidden transition-all duration-300;
}

//Scroll Styles
::-webkit-scrollbar {
  width: 0.6vw;
}

::-webkit-scrollbar-track {
  background-color: rgba(139, 92, 246);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(91, 33, 182);
  border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(76, 29, 149);
}

//Dark Mode Styles
.bg-dark{
  background-color: rgb(5, 0, 30);
}
</style>
