<template>
  <div class="contact">
    <WelcomeText v-bind="WelcomeTextProps" />
    <div class="contact-main">
      <div class="main-info">
        <div class="info-card" v-for="(card, index) in InfoCards" :key="index">
          <i class="uil icon" :class="card.icon"></i>
          <div class="card-text">
            <p class="main-text">{{ card.mainText }}</p>
            <p class="sub-text">{{ card.subText }}</p>
          </div>
        </div>
      </div>
      <div class="main-form">
        <div
          class="form-card"
          v-for="(card, index) in Form.inputs"
          :key="index"
        >
          <p class="card-text">{{ card.text }}</p>
          <input :type="card.type" class="card-input" v-model="card.Vmodel" />
        </div>
        <div class="form-textarea">
          <p class="textarea-text">{{ Form.textArea.text }}</p>
          <textarea
            :value="Form.textArea.Vmodel"
            @input="event => Form.textArea.Vmodel = event.target.value"
            class="textarea"
            maxlength="200"
          ></textarea>
        </div>
        <div class="max-amount-wrapper">
          <p class="max-amount">{{ Form.textArea.Vmodel.length }}/200</p>
        </div>
        <button class="form-button">
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
          subText: "lemopidr1@gmail.com",
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
    & .main-info {
      & .info-card {
        @apply flex items-center mb-7;
        & .icon {
          @apply text-3xl text-purple-600;
        }
        & .card-text {
          @apply ml-2.5;
          & .main-text {
            @apply font-semibold;
          }
          & .sub-text {
            @apply text-sm font-medium text-gray-500;
          }
        }
      }
    }
    & .main-form {
      @apply flex flex-col font-poppins mt-14;
      & .form-card {
        @apply mb-7 pl-3 py-3 rounded-md;
        background-color: rgb(236, 232, 255);
        & .card-text {
          @apply text-sm text-gray-500;
        }
        & .card-input {
          @apply outline-none my-1 transition-all duration-300 w-9/10;
          background-color: rgb(236, 232, 255);
        }
      }
    }
    & .form-textarea {
      @apply mb-2 pl-3 py-3 rounded-md;
      background-color: rgb(236, 232, 255);
      & .textarea-text {
        @apply text-sm text-gray-500;
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
      }
    }
    & .form-button {
      @apply bg-purple-600 flex w-40 h-14 px-3 items-center rounded-lg mt-2 transition-all duration-300;
      &:hover {
        @apply w-41;

        & .icon {
          @apply ml-3;
        }
      }
      & .button-text {
        @apply text-white text-sm font-medium;
      }
      & .icon {
        @apply text-white ml-2 text-xl transition-all duration-300;
      }
    }
  }
}
</style>