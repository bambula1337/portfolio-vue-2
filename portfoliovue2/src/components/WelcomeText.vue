<template>
  <div class="welcome-text">
    <p class="main-text">{{ mainText }}</p>
    <p class="sub-text">{{ subText }}</p>
  </div>
</template>

<script>
export default {
  name: "WelcomeTextComponent",
  props: ["mainText", "subText"],
};
</script>

<style lang="scss" scoped>
.welcome-text{
  @apply flex flex-col justify-center text-center;
  & .main-text{
    @apply text-3xl font-poppins font-semibold;
  }
  & .sub-text{
    @apply text-gray-500 font-poppins font-medium;
  }
}
</style>