<template>
  <transition :name="effect">
    <div class="sliderItem" v-show="currentSlideID === index">
      <div class="wrapper">
        <img class="bgImg" :src="urlStartingFromAssets(slideImgSrc)" alt="" />
        <div class="about-project-wrapper">
          <p class="main-text">{{ mainText }}</p>
          <p class="sub-text">{{ subText }}</p>
          <a :href="projectURL" target="_blank">
            <button class="demo-button">
              <p class="button-text">Demo</p>
              <i class="uil uil-arrow-right icon"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SliderItemComponent",
  props: [
    "slideImgSrc",
    "currentSlideID",
    "index",
    "effect",
    "mainText",
    "subText",
    "projectURL",
  ],
  methods: {
    urlStartingFromAssets: function (url) {
      return require(`@/assets${url}`);
    },
  },
};
</script>

<style lang="scss">
.sliderItem {
  @apply absolute top-0 left-0 right-0 bottom-0;
  & .bgImg {
    @apply rounded-xl;
    @apply md:-ml-36;
  }

  & .about-project-wrapper {
    @apply font-poppins;
    @apply md:ml-5 md:flex md:flex-col md:justify-between md:-mt-2;
    & .main-text {
      @apply text-xl font-semibold my-4;
      @apply md:w-52;
      @apply lg:text-2xl;
      @apply lgplus:w-68;
    }

    & .sub-text {
      @apply mb-4 text-gray-500 font-medium;
      @apply md:w-60;
      @apply lgplus:text-xl lgplus:w-72;
    }
    & .demo-button {
      @apply flex bg-purple-600 text-white rounded-lg px-3 items-center h-14 cursor-pointer;

      &:hover .icon {
        @apply ml-2.5;
      }
      & .button-text {
        @apply ml-1 font-medium;
        @apply lgplus:text-lg;
      }
      & .icon {
        @apply text-xl ml-1.5 mt-0.5 transition-all duration-300;
        @apply lgplus:text-2xl;
      }
    }
  }

  & .wrapper {
    @apply mx-10;
    @apply smlger:mx-28;
    @apply md:flex md:mx-72;
    @apply lgplus:mx-84;
    @apply xl:mx-112;
  }
}

///PrevAnimations
.prev-enter-active {
  animation: prevInAnimation 0.8s ease-in-out;
}

.prev-leave-active {
  animation: prevOutAnimation 0.8s ease-in-out;
}

@keyframes prevInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes prevOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

///NextAnimations
.next-enter-active {
  animation: nextInAnimation 0.8s ease-in-out;
}

.next-leave-active {
  animation: nextOutAnimation 0.8s ease-in-out;
}

@keyframes nextInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes nextOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>