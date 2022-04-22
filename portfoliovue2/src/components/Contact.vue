<template>
  <div class="contact" id="contact">
    <WelcomeText
      v-bind="WelcomeTextProps"
      :isDarkMode="isDarkMode"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-once="true"
    />
    <div
      class="contact-main"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-once="true"
    >
      <div class="main-info">
        <div class="info-card" v-for="(card, index) in InfoCards" :key="index">
          <i class="uil icon" :class="card.icon"></i>
          <div class="card-text">
            <p class="main-text" :class="{ 'text-white': isDarkMode }">
              {{ card.mainText }}
            </p>
            <p class="sub-text">{{ card.subText }}</p>
          </div>
        </div>
      </div>
      <div class="main-form">
        <div
          class="form-card"
          v-for="(card, index) in Form.inputs"
          :key="index"
          :class="{ 'input-bg-dark': isDarkMode }"
        >
          <p class="card-text">{{ card.text }}</p>
          <input
            :type="card.type"
            class="card-input"
            :class="{ 'input-bg-dark': isDarkMode }"
            v-model="card.Vmodel"
          />
        </div>
        <div class="form-textarea" :class="{ 'input-bg-dark': isDarkMode }">
          <p class="textarea-text">{{ Form.textArea.text }}</p>
          <textarea
            :value="Form.textArea.Vmodel"
            @input="(event) => (Form.textArea.Vmodel = event.target.value)"
            class="textarea"
            :class="{ 'input-bg-dark': isDarkMode }"
            maxlength="200"
          ></textarea>
        </div>
        <div class="max-amount-wrapper">
          <p class="max-amount">{{ Form.textArea.Vmodel.length }}/200</p>
        </div>
        <button class="form-button" @click="submit" title="Error: this function is temporary disabled, you should write in one of social medias which you can find on site">
          <p class="button-text">Send Message</p>
          <i class="uil uil-navigator icon"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeText from "@/components/WelcomeText.vue";

export default {
  name: "Contact",
  components: {
    WelcomeText,
  },
  methods: {
    submit: function () {
      this.Form.inputs.forEach((el) => {
        el.Vmodel = "";
      });
      this.Form.textArea.Vmodel = "";
      alert('Error: this function is temporary disabled, you should write in one of social medias which you can find on site');
    },
  },
  props: ["isDarkMode"],
  data() {
    return {
      WelcomeTextProps: {
        mainText: "Contact Me",
        subText: "Get in touch",
      },
      InfoCards: [
        {
          id: 1,
          icon: "uil-phone",
          mainText: "Call Me",
          subText: "098-17-96-703",
        },
        {
          id: 2,
          icon: "uil-envelope-alt",
          mainText: "Email",
          subText: "oleg133766@gmail.com",
        },
        {
          id: 3,
          icon: "uil-map-marker",
          mainText: "Location",
          subText: "UA - Lviv",
        },
      ],
      Form: {
        inputs: [
          {
            id: 1,
            type: "text",
            text: "Name",
            Vmodel: "",
          },
          {
            id: 2,
            type: "email",
            text: "Email",
            Vmodel: "",
          },
          {
            id: 3,
            type: "text",
            text: "Project",
            Vmodel: "",
          },
        ],
        textArea: {
          text: "Message",
          Vmodel: "",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  @apply mb-20;

  & .contact-main {
    @apply mt-10 px-5 font-poppins;
    @apply smlger:px-10;
    @apply smplus:flex smplus:justify-around;
    @apply lg:justify-evenly;
    @apply xl:mt-20 xl:mb-36;
    & .main-info {
      @apply smplus:mx-10;
      & .info-card {
        @apply flex items-center mb-7;
        & .icon {
          @apply text-3xl text-purple-600;
          @apply lg:text-4xl;
        }
        & .card-text {
          @apply ml-2.5;
          & .main-text {
            @apply font-semibold transition-all duration-300;
            @apply lg:text-lg;
          }
          & .sub-text {
            @apply text-sm font-medium text-gray-500;
            @apply lg:text-base;
          }
        }
      }
    }
    & .main-form {
      @apply flex flex-col font-poppins mt-14 transition-all duration-300;
      @apply smplus:mt-0;
      & .form-card {
        @apply mb-7 pl-3 py-3 rounded-md transition-all duration-300;
        background-color: rgb(236, 232, 255);
        & .card-text {
          @apply text-sm text-gray-500;
          @apply lg:text-base;
        }
        & .card-input {
          @apply outline-none my-1 transition-all duration-300 w-9/10;
          @apply smplus:w-64;
          @apply md:w-80;
          @apply lg:w-100;
          @apply lgplus:w-112;
          background-color: rgb(236, 232, 255);
        }
      }
    }
    & .form-textarea {
      @apply mb-2 pl-3 py-3 rounded-md transition-all duration-300;
      background-color: rgb(236, 232, 255);
      & .textarea-text {
        @apply text-sm text-gray-500;
        @apply lg:text-base;
      }
      & .textarea {
        @apply outline-none my-1 transition-all h-40 duration-300 w-19/20 resize-none pr-3;
        background-color: rgb(236, 232, 255);
      }
    }
    & .max-amount-wrapper {
      @apply flex justify-end;
      & .max-amount {
        @apply text-sm text-gray-500;
        @apply lg:text-base;
      }
    }
    & .form-button {
      @apply bg-purple-600 flex w-40 h-14 px-3 items-center rounded-lg mt-2 transition-all duration-300;
      @apply lg:w-44;
      &:hover {
        @apply w-41;
        @apply lg:w-45;

        & .icon {
          @apply ml-3;
        }
      }
      & .button-text {
        @apply text-white text-sm font-medium;
        @apply lg:text-base;
      }
      & .icon {
        @apply text-white ml-2 text-xl transition-all duration-300;
      }
    }
  }
}

.input-bg-dark {
  background-color: rgb(5, 0, 60) !important;
  color: white !important;
}

</style>