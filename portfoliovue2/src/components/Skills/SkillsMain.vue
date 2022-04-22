<template>
  <div class="skills" id="skills" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
    <WelcomeText v-bind="WelcomeTextProps" :isDarkMode="isDarkMode" />
    <div class="skills-main" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
      <details class="details" v-for="(card, index) in cards" :key="index">
        <summary class="summary" @click.prevent="summaryClicked">
          <div class="text-wrapper">
            <i class="uil icon" :class="card.summary.icon"></i>
            <div class="text">
              <p class="main-text" :class="{'text-white': isDarkMode}">{{ card.summary.mainText }}</p>
              <p class="sub-text">{{ card.summary.subText }}</p>
            </div>
          </div>
          <div class="icon-wrapper">
            <i class="uil uil-angle-down icon"></i>
          </div>
        </summary>
        <div class="main-content">
          <div
            class="main-card"
            v-for="(card, index) in card.skills"
            :key="index"
          >
            <div class="card-text">
              <p class="text" :class="{'text-white-dark': isDarkMode}">{{ card.text }}</p>
              <hr class="line" />
            </div>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import WelcomeText from "@/components/WelcomeText.vue";

export default {
  name: "Skills",
  components: {
    WelcomeText,
  },
  methods: {
    summaryClicked(event) {
      this.clickedCard = event.target.closest(".details");
      if (this.clickedCard.open == true) {
        this.clickedCard.open = false;
      } else {
        document.querySelectorAll(".details").forEach((el) => {
          el.open = false;
        });
        this.clickedCard.open = true;
      }
    },
  },
  props: ['isDarkMode'],
  data() {
    return {
      clickedCard: null,
      WelcomeTextProps: {
        mainText: "Skills",
        subText: "My technical level",
      },
      cards: [
        {
          id: 1,
          summary: {
            icon: "uil-brackets-curly",
            mainText: "Developer",
            subText: "More than 1 years",
          },
          skills: [
            {
              id: 1,
              text: "HTML",
            },
            {
              id: 2,
              text: "JS",
            },
            {
              id: 3,
              text: "CSS",
            },
            {
              id: 4,
              text: "SCSS",
            },
            {
              id: 5,
              text: "Vue",
            },
            {
              id: 6,
              text: "Tailwind",
            },
          ],
        },
        {
          id: 2,
          summary: {
            icon: "uil-edit-alt",
            mainText: "Designer",
            subText: "More than 3 years",
          },
          skills: [
            {
              id: 1,
              text: "Photoshop",
            },
            {
              id: 2,
              text: "Premiere",
            },
            {
              id: 3,
              text: "Cinema 4D",
            },
            {
              id: 4,
              text: "Figma",
            },
            {
              id: 5,
              text: "Illustrator",
            },
            {
              id: 6,
              text: "Blender",
            },
          ],
        },
        {
          id: 3,
          summary: {
            icon: "uil-cube",
            mainText: "Other",
            subText: "More than 1 years",
          },
          skills: [
            {
              id: 1,
              text: "Git",
            },
            {
              id: 2,
              text: "Streamlabs OBS",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skills {
  @apply mb-20 flex justify-center flex-col items-center;
  & .skills-main {
    @apply mt-10;
    @apply smplus:flex smplus:justify-center;
    @apply xl:mt-20 xl:mb-20;
    flex-flow: row wrap;
    & .details {
      @apply transition-all overflow-hidden;
      transition-duration: 1200ms;
      @apply md:mx-5;
      &[open] .summary .icon-wrapper .icon {
        transform: rotateX(180deg);
      }

      // &[open] .main-content {
      //   animation: opening-card-animation 1s ease-in-out;
      // }

      &:not([open]) {
        max-height: 3em;
        @apply xl:max-h-16;
      }

      &[open] {
        max-height: 27em;
      }

      @apply font-poppins mb-7;
      @apply smplus:mb-10;
      & .summary {
        @apply flex justify-between w-80;
        @apply smplus:w-66 smplus:mx-5;
        @apply md:w-72;
        @apply smplus:w-76;
        @apply xl:w-84;

        & .text-wrapper {
          @apply flex justify-center items-center;
          & .icon {
            @apply text-purple-600 text-3xl;
            @apply lg:text-4xl;
            @apply xl:text-4.5xl;
          }
          & .text {
            @apply flex flex-col ml-2;
            & .main-text {
              @apply text-lg font-semibold transition-all duration-300;
              @apply lg:text-xl;
              @apply xl:text-2xl;
            }
            & .sub-text {
              @apply font-medium text-gray-500 text-xs;
              @apply lg:text-sm;
            }
          }
        }
        & .icon-wrapper {
          @apply flex justify-center items-center;
          & .icon {
            @apply text-purple-600 text-3xl transition-all duration-500;
            @apply lg:text-4xl;
            @apply xl:text-4.5xl;
          }
        }
      }
      & .main-content {
        @apply flex flex-col transition-all duration-500;
        & .main-card {
          @apply pl-9.5 pr-2 my-3;
          @apply smplus:text-center smplus:px-5;
          & .card-text {
            @apply mt-2;
            & .text {
              @apply font-poppins font-medium transition-all duration-300;
              @apply lg:text-lg lg:font-semibold lg:text-gray-700;
            }
            & .line {
              @apply bg-purple-600 h-1 rounded-full;
              border-top: 1px rgba(124, 58, 237, 1) solid;
            }
          }
        }
      }
    }
  }
}

@keyframes opening-card-animation {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 2000px;
  }
}

.text-white-dark{
  color: white !important;
}
</style>