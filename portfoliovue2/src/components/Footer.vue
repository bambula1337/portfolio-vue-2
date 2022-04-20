<template>
  <div class="footer">
    <div class="main-text-wrapper">
      <p class="main-text">Alexa</p>
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
  & .main-text-wrapper {
    & .main-text {
      @apply text-xl font-semibold;
    }
    & .sub-text {
      @apply text-sm mt-1.5;
    }
  }
  & .links-wrapper {
    @apply flex flex-col my-14;
    & .link {
      @apply flex flex-col self-start items-start mb-7 font-medium;

      &::after{
        @apply ml-0.5 w-0 transition-all duration-300;
        content: '';
        border-top: 2px white solid;
      }
      &:hover{
        &::after{
          @apply w-1/2;
        }
      }
    }
  }
  & .icons-wrapper {
    @apply flex;
    & .icon {
      @apply text-xl mr-7 cursor-pointer transition-all duration-300;

      &:hover{
        @apply text-purple-400;
      }
    }
  }
  & .copyright-text-wrapper {
    @apply flex justify-center mt-10;
    & .copyright-text {
      @apply text-sm font-medium text-gray-400;
    }
  }
}
</style>