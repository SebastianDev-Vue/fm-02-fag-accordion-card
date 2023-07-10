<script setup lang="ts">
import FaqList from '@/components/FaqList.vue'
</script>

<template>
  <main class="bg-white rounded-3xl w-[980px] h-[550px] flex items-center backImage relative">
    <img
      src="./assets/images/illustration-box-desktop.svg"
      class="absolute top-[40%] -left-[9.5%] z-10"
      alt="Box Illumination"
    />

    <div class="w-3/5 h-[550px] relative overflow-hidden">
      <img
        src="./assets/images/illustration-woman-online-desktop.svg"
        alt="Woman Illustration"
        class="absolute top-[10%] -left-[18%] w-full"
      />
    </div>

    <FaqList />
  </main>
</template>

<style scoped>
.backImage {
  background-image: url('./assets/images/bg-pattern-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: left -550px top -290px; */
  background-position: left -34.375rem top -18.125rem;
}
</style>
