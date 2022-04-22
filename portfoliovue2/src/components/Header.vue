<template>
  <div class="header">
    <div class="main-header" :class="{'bg-dark': isDarkModeEnable}">
      <div class="logo-wrapper">
        <p class="logo" :class="{'text-white': isDarkModeEnable}">Adm's</p>
      </div>
      <div class="wrapper">
        <div class="links-wrapper">
          <a href="https://trello.com/b/j8XxYsZg/portfolio-vue2" class="link" :class="{'text-white': isDarkModeEnable}"
            >Home</a
          >
          <a href="https://trello.com/b/j8XxYsZg/portfolio-vue2" class="link" :class="{'text-white': isDarkModeEnable}"
            >About
          </a>
          <a href="https://trello.com/b/j8XxYsZg/portfolio-vue2" class="link" :class="{'text-white': isDarkModeEnable}"
            >Skills</a
          >
          <a href="https://trello.com/b/j8XxYsZg/portfolio-vue2" class="link" :class="{'text-white': isDarkModeEnable}"
            >Services</a
          >
          <a href="https://trello.com/b/j8XxYsZg/portfolio-vue2" class="link" :class="{'text-white': isDarkModeEnable}"
            >Portfolio</a
          >
          <a href="https://trello.com/b/j8XxYsZg/portfolio-vue2" class="link" :class="{'text-white': isDarkModeEnable}"
            >Contact</a
          >
        </div>
        <div class="mode-wrapper">
          <i
            class="uil uil-moon icon"
            v-if="!isDarkModeEnable"
            @click="changeMode"
          ></i>
          <i class="uil uil-sun icon" :class="{'text-white': isDarkModeEnable}" v-else @click="changeMode"></i>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="mobile-controller" :class="{'bg-dark': isDarkModeEnable}">
        <div class="logo" :class="{'text-white': isDarkModeEnable}">Adm's</div>
        <div class="menu-opener">
          <i
            class="uil uil-moon icon"
            v-if="isDarkModeEnable"
            @click="changeMode"
            :class="{'text-white': isDarkModeEnable}"
          ></i>
          <i class="uil uil-sun icon" v-else @click="changeMode"></i>
          <i class="uil uil-apps icon" :class="{'text-white': isDarkModeEnable}" @click="mobileMenuOpened = true"></i>
        </div>
      </div>
      <div
        class="mobile-menu"
        :class="{ 'mobile-menu-opened': mobileMenuOpened, 'bg-dark': isDarkModeEnable }"
      >
        <div class="card" v-for="(card, index) in mobileMenuCards" :key="index">
          <i class="uil icon" :class="[card.icon, {'text-white': isDarkModeEnable}]"></i>
          <p class="card-text" :class="{'text-white': isDarkModeEnable}">{{ card.text }}</p>
        </div>
        <div class="close-card" @click="mobileMenuOpened = false">
          <i class="uil uil-multiply"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    changeMode: function () {
      this.isDarkModeEnable = !this.isDarkModeEnable;
      this.$emit("update:isDarkModeEnable", this.isDarkModeEnable);
    },
  },
  data() {
    return {
      isDarkModeEnable: false,
      mobileMenuOpened: false,
      mobileMenuCards: [
        {
          id: 1,
          icon: "uil-estate",
          text: "Home",
        },
        {
          id: 2,
          icon: "uil-user",
          text: "About",
        },
        {
          id: 3,
          icon: "uil-file-alt",
          text: "Skills",
        },
        {
          id: 4,
          icon: "uil-bag-alt",
          text: "Services",
        },
        {
          id: 5,
          icon: "uil-scenery",
          text: "Portfolio",
        },
        {
          id: 6,
          icon: "uil-navigator",
          text: "Contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  & .main-header {
    @apply hidden justify-between items-center px-20 font-poppins font-medium bg-gray-50 py-3.5;
    @apply transition-all duration-300;
    -webkit-box-shadow: 0px -3px 13px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0px -3px 13px 5px rgba(0, 0, 0, 0.1);
    @apply lg:flex lg:w-full lg:fixed lg:top-0 lg:left-0 lg:z-70;
    & .logo-wrapper {
      & .logo {
        @apply cursor-pointer transition-all duration-300;
        @apply lgplus:text-lg;
        &:hover {
          @apply text-purple-600;
        }
      }
    }
    & .wrapper {
      @apply flex;
      & .links-wrapper {
        & .link {
          @apply mr-7 text-sm transition-all duration-300;
          @apply lgplus:text-base lgplus:mr-10;
          &:hover {
            @apply text-purple-600;
          }
        }
      }
      & .mode-wrapper {
        & .icon {
          @apply cursor-pointer transition-all duration-300;
          &:hover {
            @apply text-purple-600;
          }
        }
      }
    }
  }
  & .mobile {
    @apply lg:hidden transition-all duration-300;
    & .mobile-controller {
      @apply fixed items-center bottom-0 left-0 w-full flex justify-between bg-gray-50 px-1/20 py-2 z-70 transition-all duration-500;
      -webkit-box-shadow: 0px 10px 13px -7px #00000075,
        0px 7px 18px 10px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 10px 13px -7px #00000075,
        0px 7px 18px 10px rgba(0, 0, 0, 0.1);

      & .logo {
        @apply text-sm font-poppins;
      }

      & .menu-opener {
        & .icon {
          @apply ml-5 transition-all duration-300 hover:text-purple-600;
        }
      }
    }
    & .mobile-menu {
      @apply flex fixed bottom-0 left-0 w-full h-52 rounded-t-3xl bg-gray-50 justify-center pt-5 transition-all duration-500 z-70;
      -webkit-box-shadow: 0px 10px 13px -7px #00000075,
        0px 7px 18px 10px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 10px 13px -7px #00000075,
        0px 7px 18px 10px rgba(0, 0, 0, 0.1);
      flex-flow: row wrap;
      & .card {
        @apply flex w-3/10 flex-col items-center;
      }
      & .close-card {
        @apply fixed bottom-2 right-5 text-purple-600 text-lg z-10;
      }
      transform: translateY(20rem);
    }

    & .mobile-menu-opened {
      transform: translateY(0);
    }
  }
}

.darkmode{
  background-color: rgb(5, 0, 30);
  background-color: rgb(5, 0, 20);
}
.bg-dark{
  background-color: rgb(5, 0, 30) !important;
}
</style>