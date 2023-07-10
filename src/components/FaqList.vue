<script setup lang="ts">
import AccordionFAQ from './AccordionFAQ.vue'

const FQS = [
  {
    question: 'How many team members can I invite?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  },

  {
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },

  {
    question: 'How do I reset my password?',
    answer:
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },

  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes! Send us a message and we’ll process your request no questions asked.'
  },

  {
    question: 'Do you provide additional support?',
    answer:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  }
]
</script>

<template>
  <div class="w-1/2 h-full py-20 pr-14 overflow-y-scroll">
    <h1 class="font-bold text-fm-dark-desaturated-blue text-3xl mb-6">FAQ</h1>

    <AccordionFAQ
      v-for="(item, index) in FQS"
      :key="index"
      :question="item.question"
      :answer="item.answer"
    />
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
  scrollbar-width: none;
  background-color: transparent;
}
</style>
