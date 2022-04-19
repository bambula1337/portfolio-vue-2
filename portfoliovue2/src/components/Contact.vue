<template>
  <div class="contact">
    <WelcomeText v-bind="WelcomeTextProps" />
    <div class="contact-main">
      <div class="main-info">

      </div>
      <div class="main-form">
        
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeText from "@/components/WelcomeText.vue";

export default {
  name: 'Contact',
  components: {
    WelcomeText,
  },
  data(){
    return{
      WelcomeTextProps: {
        mainText: "Contact Me",
        subText: "Get in touch",
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.contact{
  @apply mb-20;
}
</style>