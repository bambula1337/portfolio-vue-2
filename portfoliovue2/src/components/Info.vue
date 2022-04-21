<template>
  <div class="info">
    <div class="top">
      <div class="icons">
        <i class="uil uil-instagram icon"></i>
        <i class="uil uil-twitter-alt icon"></i>
        <i class="uil uil-github-alt icon"></i>
      </div>
      <div class="image">
        <svg
          viewBox="0 0 200 187"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="bubble-svg"
        >
          <mask id="mask0" mask-type="alpha">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image class="bubble-image" x='12' y='18' href="@/assets/images/info/info_girl.png" />
          </g>
        </svg>
      </div>
    </div>
    <div class="bottom">
      <p class="main-text">Hi, I'm Adm's</p>
      <p class="sub-text">Front-end developer</p>
      <p class="text">
        High level experience in web design and development knowledge, producing
        quality work
      </p>
      <button class="contact-button">
        <p class="text">Contact Me</p>
        <i class="uil uil-navigator icon"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info'
};
</script>

<style lang="scss" scoped>
.info{
  @apply mt-20 pl-1/20;
  @apply md:flex md:flex-row-reverse md:justify-around;
  & .top{
    @apply flex items-center justify-start;
    & .icons{
      @apply flex flex-col -mb-5 mr-13/100;
      @apply smplus:-mb-14;
      @apply md:absolute md:left-10;
      & .icon{
        @apply mb-4 text-xl text-purple-600 cursor-pointer transition-all duration-300;
        @apply smplus:text-2xl smplus:mb-7;
        &:hover{
          @apply text-purple-400;
        }
      }
    }
    & .image{
      & .bubble-svg{
        @apply w-52;
        @apply smplus:w-72;
        fill: rgb(124, 58, 237);
      }
      & .bubble-image{
        @apply w-44;
      }
    }
  }

  & .bottom{
    @apply font-poppins mt-7;
    @apply md:w-64 md:ml-7;
    & .main-text{
      @apply text-3xl font-semibold;
    }
    & .sub-text{
      @apply mt-1 mb-3 text-gray-500 font-medium;
    }
    & .text{
      @apply text-gray-500;
    }
    & .contact-button{
      &:hover .icon{
        @apply ml-3;
      }
      @apply bg-purple-600 flex h-14 px-3 items-center rounded-lg mt-7;
      & .text{
        @apply text-white font-medium;
      }
      & .icon{
        @apply text-white ml-2 text-xl transition-all duration-300;
      }
    }
  }
}
</style>