<template>
  <div class="welcome-text">
    <p class="main-text" :class="{'text-white': isDarkMode}">{{ mainText }}</p>
    <p class="sub-text">{{ subText }}</p>
  </div>
</template>

<script>
export default {
  name: "WelcomeTextComponent",
  props: ["mainText", "subText", 'isDarkMode'],
};
</script>

<style lang="scss" scoped>
.welcome-text{
  @apply flex flex-col justify-center text-center;
  & .main-text{
    @apply text-3xl font-poppins font-semibold transition-all duration-300;
    @apply lg:text-4xl;
    @apply xl:text-4.5xl;
  }
  & .sub-text{
    @apply text-gray-500 font-poppins font-medium;
    @apply lg:text-lg;
    @apply xl:text-xl;
  }
}
</style>