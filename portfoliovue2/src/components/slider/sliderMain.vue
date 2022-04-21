<template>
  <div class="sliderMain" id="projects">
    <i class="uil uil-angle-left-b icon" @click='arrowPrev'></i>
    <Slider :ProjectName="Slider.ProjectName" :Slides="Slider.urls" :IntervalTime="Slider.IntervalTime" :IntervalAbility="Slider.IntervalAbility" :bus='eventBus' />
    <i class="uil uil-angle-right-b icon" @click='arrowNext'></i>
  </div>
</template>

<script>
import Slider from "@/components/slider/slider.vue";
import Vue from "vue";


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
    },
    arrowPrev: function(){
      this.eventBus.$emit('arrowPrev')
    },
    arrowNext: function(){
      this.eventBus.$emit('arrowNext')
    },
  },
  data() {
    return {
      Slider: {
        urls: [
          {
            id:1,
            imgUrl: "/images/portfolio/portfolio_1.jpg",
            mainText: 'Brand and Design',
            subText: 'Website adaptable to all devices, with ui components and animated interaction',
            projectUrl: 'https://iconscout.com/unicons/explore/line',
          },
          {
            id:2,
            imgUrl:  "/images/portfolio/portfolio_2.jpg",
            mainText: 'Brand and Design',
            subText: 'Website adaptable to all devices, with ui components and animated interaction',
            projectUrl: 'https://iconscout.com/unicons/explore/line',
          },
          {
            id:3,
            imgUrl: "/images/portfolio/portfolio_3.jpg",
            mainText: 'Brand and Design',
            subText: 'Website adaptable to all devices, with ui components and animated interaction',
            projectUrl: 'https://iconscout.com/unicons/explore/line',
          }
        ],
        IntervalAbility: false,
      },
      eventBus: new Vue()
    };
  },
};
</script>

<style lang="scss" scoped>
.sliderMain {
  @apply mt-10 flex items-center justify-center;

  & .icon{
    @apply text-5xl text-purple-600 -mx-12 z-60 transition-all duration-300 cursor-pointer;
    @apply smlger:-mx-26 smlger:-mb-10;
    @apply md:-mx-30 md:-mt-10;

    &:hover{
      @apply text-purple-500;
    }
  }
}
</style>