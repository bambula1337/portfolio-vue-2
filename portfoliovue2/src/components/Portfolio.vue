<template>
  <div class="portfolio">
    <WelcomeText v-bind="WelcomeTextProps" :isDarkMode="isDarkMode" />
    <div class="portfolio-main">
      <div class="slider-wrapper">
        <SliderMain :isDarkMode="isDarkMode"/>
        <Slider/>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeText from "@/components/WelcomeText.vue";
import SliderMain from '@/components/slider/sliderMain.vue';
import Slider from '@/components/slider/slider.vue';

export default {
  name: "Portfolio",
  components: {
    WelcomeText,
    SliderMain,
    Slider,
  },
  props: ['isDarkMode'],
  data() {
    return {
      WelcomeTextProps: {
        mainText: "Portfolio",
        subText: "Most recent works",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio{
  @apply mb-20;
  @apply md:mb-0;
}
</style>