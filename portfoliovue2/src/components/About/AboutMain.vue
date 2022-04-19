<template>
  <div class="about">
    <div class="welcome-text-wrapper">
      <WelcomeText
        :main-text="WelcomeTextProps.mainText"
        :sub-text="WelcomeTextProps.subText"
      />
    </div>
    <div class="about-main">
      <div class="top">
        <img src="@/assets/images/about/girl.jpg" class="image" alt="" />
        <p class="text">
          Web developer with extensive knowledge and years of experience,
          working in web technologies and Ui / Ux design, delivering quality
          work.
        </p>
      </div>
      <div class="bottom">
        <div class="stats">
          <div
            class="stat-card"
            v-for="(card, index) in StatCards"
            :key="index"
          >
            <div class="card-number">{{ numberFixer(card.number) }}</div>
            <div class="card-text">{{ card.text }}</div>
          </div>
        </div>
        <button class="download">
          <p class="text">Download CV</p>
          <i class="uil uil-download-alt icon"></i>
        </button>
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
  methods: {
    numberFixer: function (number) {
      if (number < 10) {
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
          number: 8,
          text: "Years experience",
        },
        {
          id: 2,
          number: 20,
          text: "Completed projects",
        },
        {
          id: 3,
          number: 5,
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
    & .top {
      @apply flex justify-center flex-col items-center;
      & .image {
        @apply w-60 rounded-xl mt-10 mb-7;
      }

      & .text {
        @apply text-center font-poppins text-gray-500;
      }
    }

    & .bottom {
      @apply flex items-center flex-col;
      & .stats {
        @apply flex mt-10 justify-between;
        & .stat-card {
          @apply flex flex-col items-center text-center w-3/10;
          & .card-number {
            @apply font-poppins font-semibold text-2xl;
          }
          & .card-text {
            @apply font-poppins text-gray-500 text-sm;
          }
        }
      }
      & .download {
        &:hover .icon{
          @apply mt-0;
        }
        @apply bg-purple-600 flex h-14 px-3 items-center rounded-lg mt-7;
        & .text {
          @apply text-white font-medium;
        }
        & .icon {
          @apply text-white ml-2 -mt-1 text-xl transition-all duration-300;
        }
      }
    }
  }
}
</style>