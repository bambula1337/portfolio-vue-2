<template>
  <div class="project">
    <div class="project-info">
      <p class="main-text">You have a new project</p>
      <p class="sub-text">
        Contact me now and get a 30% discount on your project.
      </p>
      <button class="contact-button">
        <p class="button-text">Contact Me</p>
        <i class="uil uil-navigator icon"></i>
      </button>
    </div>
    <div class="image-wrapper">
      <img class="image" src="@/assets/images/project/girl.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
};
</script>

<style lang="scss" scoped>
.project {
  @apply mb-20 bg-purple-600 font-poppins text-white flex flex-col pt-10;

  & .project-info {
    @apply flex flex-col justify-center items-center text-center px-7;
    & .main-text {
      @apply text-xl font-semibold;
    }
    & .sub-text {
      @apply text-sm font-medium m-3;
    }
    & .contact-button {
      &:hover .icon {
        @apply ml-3;
      }
      @apply flex bg-white text-purple-600 h-14 px-3 items-center rounded-lg mt-2 mb-7;
      & .button-text {
        @apply font-medium;
      }
      & .icon {
        @apply ml-2 text-xl transition-all duration-300;
      }
    }
  }
  & .image-wrapper {
    @apply flex justify-center items-center;
    & .image {
      @apply w-52;
    }
  }
}
</style>