<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
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
}

</style>
