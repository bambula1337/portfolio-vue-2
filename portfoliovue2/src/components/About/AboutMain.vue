<template>
  <div class="about" id="about">
    <div class="welcome-text-wrapper">
      <WelcomeText
        :main-text="WelcomeTextProps.mainText"
        :sub-text="WelcomeTextProps.subText"
        :isDarkMode="isDarkMode"
      />
    </div>
    <div class="about-main">
      <div class="top">
        <img src="@/assets/images/about/girl.jpg" class="image" alt="" />
      </div>
      <div class="bottom">
        <p class="text">
          Web developer with extensive knowledge and year of experience, working
          with web technologies and design, delivering quality work.
        </p>
        <div class="stats">
          <div
            class="stat-card"
            v-for="(card, index) in StatCards"
            :key="index"
          >
            <div class="card-number" :class="{'text-white': isDarkMode}">{{ numberFixer(card.number) }}</div>
            <div class="card-text">{{ card.text }}</div>
          </div>
        </div>
        <a download="" href="@/assets/CV/test.txt">
          <button class="download">
          <p class="text">Download CV</p>
          <i class="uil uil-download-alt icon"></i>
        </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeText from "@/components/WelcomeText.vue";

export default {
  name: "AboutMain",
  components: {
    WelcomeText,
  },
  props: ['isDarkMode'],
  methods: {
    numberFixer: function (number) {
      if (number < 10 && number > 0) {
        return "0" + number + "+";
      } else {
        return number + "+";
      }
    },
  },
  data() {
    return {
      WelcomeTextProps: {
        mainText: "About Me",
        subText: "My introduction",
      },
      StatCards: [
        {
          id: 1,
          number: 1,
          text: "Years experience",
        },
        {
          id: 2,
          number: 3,
          text: "Completed projects",
        },
        {
          id: 3,
          number: 0,
          text: "Companies worked",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  @apply mt-24 px-5 mb-20;

  & .welcome-text-wrapper {
  }

  & .about-main {
    @apply flex flex-col;
    @apply md:flex-row md:justify-around md:items-center md:mt-10;
    @apply xl:justify-center;
    & .top {
      @apply flex justify-center flex-col items-center;
      @apply xl:mx-10;
      & .image {
        @apply w-60 rounded-xl mt-10 mb-7;
        @apply smlger:w-72;
        @apply lg:w-88;
        @apply lgplus:w-96;
        @apply xl:w-100;
      }
    }

    & .bottom {
      @apply flex items-center flex-col;
      @apply md:w-80 md:justify-center;
      @apply lgplus:w-88;
      @apply xl:w-100 xl:mx-14;
      & .text {
        @apply text-center font-poppins text-gray-500;
        @apply lg:text-lg;
        @apply lgplus:text-xl;
      }
      & .stats {
        @apply flex mt-10 justify-between;
        @apply smlger:w-8/10;
        @apply md:justify-around md:w-100;
        @apply xl:w-128;
        & .stat-card {
          @apply flex flex-col items-center text-center w-3/10;
          @apply smlger:w-2/10;
          & .card-number {
            @apply font-poppins font-semibold text-2xl transition-all duration-300;
            @apply lg:text-3xl;
          }
          & .card-text {
            @apply font-poppins text-gray-500 text-sm;
            @apply lg:text-base;
          }
        }
      }
      & .download {
        &:hover .icon {
          @apply mt-0;
        }
        @apply bg-purple-600 flex h-14 px-3 items-center rounded-lg mt-7;
        & .text {
          @apply text-white font-medium;
          @apply xl:text-lg;
        }
        & .icon {
          @apply text-white ml-2 -mt-1 text-xl transition-all duration-300;
        }
      }
    }
  }
}
</style>