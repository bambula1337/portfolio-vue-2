<template>
  <div id="app" :class="{ 'bg-dark': isDarkModeEnable }">
    <div class="loader" :class="{ loaded: isLoaded }" v-if="!isLoaded">
      <DoubleBounce />
    </div>
    <Header :isDarkModeEnable.sync="isDarkModeEnable" v-if="isLoaded" />
    <div class="main" v-if="isLoaded">
      <router-view :isDarkMode="isDarkModeEnable" />
    </div>
    <Footer :isDarkMode="isDarkModeEnable" v-if="isLoaded" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { DoubleBounce } from "vue-loading-spinner";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    DoubleBounce,
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.isLoaded = true;
          window.scrollTo(0, 0);
        }, 1000);
      }
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        this.isDarkModeEnable = true;
      }
    };
  },
  data() {
    return {
      isDarkModeEnable: false,
      isLoaded: false,
    };
  },
};
</script>

<style lang="scss">
// Tailwind Connection
@import "./assets/style/tailwind.scss";

//Icons
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";

//Fonts
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

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
.bg-dark {
  background-color: rgb(5, 0, 30);
}

//Loader
.loader {
  @apply w-screen h-screen flex justify-center items-center;
}

.loaded {
  width: 0 !important;
  height: 0 !important;
}
</style>
