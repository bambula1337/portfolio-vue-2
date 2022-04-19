<template>
  <div class="portfolio">
    <WelcomeText v-bind="WelcomeTextProps" />
    <div class="portfolio-main">
      <div class="slider-wrapper">
        <SliderMain/>
        <Slider />
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
}
</style>