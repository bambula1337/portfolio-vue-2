<template>
  <div class="portfolio" id="portfolio">
    <WelcomeText v-bind="WelcomeTextProps" :isDarkMode="isDarkMode" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" />
    <div class="portfolio-main" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
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