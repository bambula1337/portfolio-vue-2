<template>
  <div class="portfolio">
    <WelcomeText v-bind="WelcomeTextProps"/>
    <div class="portfolio-main">
      
    </div>
  </div>  
</template>

<script>
import WelcomeText from '@/components/WelcomeText.vue';

export default {
  name: 'Portfolio',
  components: {
    WelcomeText,
  },
  data(){
    return{
      WelcomeTextProps: {
        mainText: "Services",
        subText: "What I do",
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio{
  @apply mb-20;
}
</style>