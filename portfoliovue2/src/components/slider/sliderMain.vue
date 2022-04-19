<template>
  <div class="sliderMain" id="projects">
    <Slider :ProjectName="Slider.ProjectName" :Slides="Slider.urls" :IntervalTime="Slider.IntervalTime" :IntervalAbility="Slider.IntervalAbility" />
  </div>
</template>

<script>
import Slider from "@/components/slider/slider.vue";

export default {
  name: "SliderMain",
  components: {
    Slider,
  },
  methods:{
    scrollToTop: function(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  },
  data() {
    return {
      Slider: {
        urls: [
          "/images/portfolio/portfolio_1.jpg",
          "/images/portfolio/portfolio_2.jpg",
          "/images/portfolio/portfolio_3.jpg",
        ],
        IntervalAbility: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.sliderMain {
  @apply mt-10;
}
</style>