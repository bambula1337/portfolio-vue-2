<template>
  <div class="services" id="services">
    <WelcomeText v-bind="WelcomeTextProps" :isDarkMode="isDarkMode" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" />
    <div class="services-main" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true"> 
      <div class="card" :class="{'bg-dark': isDarkMode}" v-for="(card, index) in Cards" :key="index">
        <i class="uil icon" :class="card.icon"></i>
        <p class="text" :class="{'text-white': isDarkMode}">
          {{ card.text }}
        </p>
        <div
          class="link"
          @click="
            openModal(card.modalProps.mainText, card.modalProps.abilities)
          "
        >
          <p class="link-text">View More</p>
          <i class="uil uil-arrow-right link-icon"></i>
        </div>
      </div>
    </div>
    <div
      class="services-modal"
      @click="closeModal"
      :class="[Modal.isOpened ? 'flex' : 'hidden']"
    >
      <div class="modal-card" :class="{'bg-dark': isDarkMode}">
        <div class="top">
          <p class="text" :class="{'text-white': isDarkMode}">
            <span v-html="Modal.mainText"></span>
          </p>
          <i class="uil uil-multiply icon" @click="closeModal" :class="{'text-white-on-hover': isDarkMode}"></i>
        </div>
        <div class="bottom">
          <div
            class="ability-card"
            v-for="(ability, index) in Modal.abilities"
            :key="index"
          >
            <i class="uil uil-check icon"></i>
            <p class="text">{{ ability.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeText from "@/components/WelcomeText.vue";

export default {
  name: "Services",
  components: {
    WelcomeText,
  },
  props: ['isDarkMode'],
  methods: {
    openModal: function (text, abilities) {
      this.Modal.isOpened = true;
      this.Modal.mainText = text;
      this.Modal.abilities = abilities;
      document.body.style.overflowY = "hidden";
    },
    closeModal: function (event) {
      if (
        event.target.matches(".services-modal") ||
        event.target.matches(".icon")
      ) {
        this.Modal.isOpened = false;
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";
      }
    },
  },
  data() {
    return {
      WelcomeTextProps: {
        mainText: "Services",
        subText: "What I do",
      },
      Cards: [
        {
          id: 1,
          icon: "uil-arrow",
          text: "Front-end Developer",
          modalProps: {
            mainText: "Front-end <br> Developer",
            abilities: [
              {
                id: 1,
                text: "Develop Web sites",
              },
              {
                id: 2,
                text: "Work in team",
              },
              {
                id: 3,
                text: "Develop Web pages",
              },
              {
                id: 4,
                text: "Coding streams",
              },
              {
                id: 5,
                text: "Work with SCV",
              },
            ],
          },
        },
        {
          id: 2,
          icon: "uil-brush-alt",
          text: "Designer",
          modalProps: {
            mainText: "Designer",
            abilities: [
              {
                id: 1,
                text: "Create templates",
              },
              {
                id: 2,
                text: "Design project",
              },
              {
                id: 3,
                text: "Montage video",
              },
              {
                id: 4,
                text: "3D Modelling",
              },
              {
                id: 5,
                text: "3D Animation",
              },
            ],
          },
        },
      ],
      Modal: {
        isOpened: false,
        mainText: "",
        abilities: [
          {
            id: 1,
            text: "",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  @apply mb-20 font-poppins font-medium;

  & .services-main {
    @apply flex justify-around items-center mt-10;
    @apply smplus:justify-evenly;
    @apply lgplus:justify-center;
    @apply xl:mt-20;
    flex-flow: row wrap;
    & .card {
      @apply w-36 h-52 rounded-md flex flex-col justify-evenly pl-3 mb-7 transition-all duration-300;
      @apply smlger:w-42 h-56;
      @apply md:w-60 md:pr-5 md:h-68;
      @apply lgplus:mx-20;
      -webkit-box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.15);

      & .icon {
        @apply text-purple-600 text-2xl;
        @apply lg:text-3xl;
      }
      & .text {
        @apply text-xl  transition-all duration-300;
        @apply lg:text-2xl;
      }
      & .link {
        @apply flex items-center text-purple-600 cursor-pointer;
        & .link-text {
          @apply text-base;
          @apply lg:text-lg;
        }
        & .link-icon {
          @apply text-xl -mb-0.5 ml-2 transition-all duration-300;
        }
        &:hover {
          & .link-icon {
            @apply ml-3;
          }
        }
      }
    }
  }

  & .services-modal {
    @apply w-screen h-screen justify-center items-center fixed top-0 left-0;
    background-color: rgba(128, 128, 128, 0.337);
    animation-name: modal-main-reveal;
    animation-duration: 400ms;
    z-index: 75;

    & .modal-card {
      @apply w-72 bg-white rounded-lg p-5 flex flex-col justify-between;
      @apply md:w-88;
      @apply xl:w-98;
      animation-name: modal-card-reveal;
      animation-duration: 400ms;
      & .top {
        @apply flex justify-between relative mb-5;
        & .text {
          @apply md:text-2xl md:font-medium;
        }
        & .icon {
          @apply text-gray-500 h-7 cursor-pointer transition-all duration-300 text-xl;
          @apply hover:text-black;
          @apply md:text-2xl;
          transition-delay: 50ms;


          &:hover{
            transform: rotateY(180deg);
          }
        }
      }
      & .bottom {
        @apply flex flex-col;

        & .ability-card {
          @apply flex items-center mb-2;
          & .icon {
            @apply text-purple-600 text-2xl;
            @apply md:text-3xl;
          }
          & .text {
            @apply text-gray-500 ml-1;
            @apply md:text-lg;
            @apply xl:ml-3;
          }
        }
      }
    }
  }
}

@keyframes modal-main-reveal {
  from {
    background-color: rgba(128, 128, 128, 0);
  }
  to {
    background-color: rgba(128, 128, 128, 0.337);
  }
}
@keyframes modal-card-reveal {
  from {
    transform: translateY(20rem);
  }
  to {
    transform: translateY(0rem);
  }
}

.bg-dark{
  background-color: rgb(5, 0, 50) !important;
}
.text-white-on-hover{
  &:hover{
    color: white !important;
  }
}
</style>