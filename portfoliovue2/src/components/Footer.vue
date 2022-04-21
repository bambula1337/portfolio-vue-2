<template>
  <div class="footer">
    <div class="main-footer">
      <div class="main-text-wrapper">
        <p class="main-text">Adm's</p>
        <p class="sub-text">Front-end developer</p>
      </div>
      <div class="links-wrapper">
        <a
          href="https://iconscout.com/unicons/explore/line"
          target="_blank"
          class="link"
          >Services</a
        >
        <a
          href="https://iconscout.com/unicons/explore/line"
          target="_blank"
          class="link"
          >Portfolio</a
        ><a
          href="https://iconscout.com/unicons/explore/line"
          target="_blank"
          class="link"
          >Contact me</a
        >
      </div>
      <div class="icons-wrapper">
        <i class="uil uil-github-alt icon"></i>
        <i class="uil uil-twitter-alt icon"></i>
        <i class="uil uil-instagram icon"></i>
      </div>
    </div>
    <div class="copyright-text-wrapper">
      <p class="copyright-text">© Bedimcode. All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-purple-600 pb-20 pt-7 font-poppins text-white px-5;
  @apply lg:pb-5;
  @apply smlger:px-10;
  & .main-footer {
    @apply lg:flex lg:justify-between lg:px-10;
    & .main-text-wrapper {
      & .main-text {
        @apply text-xl font-semibold;
        @apply lg:text-2xl;
      }
      & .sub-text {
        @apply text-sm mt-1.5;
        @apply lg:text-base;
      }
    }
    & .links-wrapper {
      @apply flex flex-col my-14;
      @apply smplus:relative smplus:left-1/2 smplus:my-0 smplus:-mt-13;
      @apply lg:left-0 lg:mt-0 lg:flex-row;
      & .link {
        @apply flex flex-col self-start items-start mb-7 font-medium;
        @apply lg:text-lg lg:font-normal lg:mx-5;
        &::after {
          @apply ml-0.5 w-0 transition-all duration-300;
          content: "";
          border-top: 2px white solid;
        }
        &:hover {
          &::after {
            @apply w-1/2;
          }
        }
      }
    }
    & .icons-wrapper {
      @apply flex;
      & .icon {
        @apply text-xl mr-7 cursor-pointer transition-all duration-300;
        @apply lg:text-2xl;

        &:hover {
          @apply text-purple-400;
        }
      }
    }
  }
  & .copyright-text-wrapper {
    @apply flex justify-center mt-10;
    @apply lg:mt-20;
    & .copyright-text {
      @apply text-sm font-medium text-gray-300;
      @apply lg:text-base;
    }
  }
}
</style>