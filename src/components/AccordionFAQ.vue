<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  question: string
  answer: string
}

const props = defineProps<Props>()

const isActive = ref(false)
const accordionRef = ref<HTMLElement | null>(null)

const handleActive = () => {
  isActive.value = !isActive.value

  if (accordionRef.value && isActive.value) {
    accordionRef.value.style.height = `${accordionRef.value.scrollHeight}px`
  } else {
    accordionRef.value!.style.height = '56px'
  }
}
</script>

<template>
  <div
    class="border-b border-fm-light-grayish-blue py-5 w-[350px] h-14 overflow-hidden transition-all ease-out duration-300"
    :class="{ accordion: isActive }"
    ref="accordionRef"
  >
    <div class="flex items-center justify-between">
      <h2
        class="text-fm-very-dark-grayish-blue text-[15px] mb-3 transition-all ease-out duration-300 hover:text-fm-soft-red cursor-pointer"
        :class="{ 'text-black font-bold': isActive }"
        @click="handleActive"
      >
        {{ props.question }}
      </h2>
      <button class="mb-2" @click="handleActive">
        <img
          src="../assets/images/icon-arrow-down.svg"
          alt="Arrow Down Icon"
          :class="{ '-rotate-180': isActive }"
          class="transition-all ease-out duration-300"
        />
      </button>
    </div>
    <p class="text-xs text-fm-grayish-blue">
      {{ props.answer }}
    </p>
  </div>
</template>

<style scoped>
.accordion {
  height: auto;
}

.rotation {
  transform: rotate(-180deg);
}

p {
  line-height: 1.7;
}
</style>
