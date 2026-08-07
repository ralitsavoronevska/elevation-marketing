<script setup lang="ts">
import type { ProcessSteps } from "~/composables/useSiteData";

defineProps<{ content: ProcessSteps }>();
</script>

<template>
  <section class="mt-20">
    <h2 class="text-3xl lg:text-4xl font-bold lg:tracking-tight">
      {{ content.title }}
    </h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      <Card v-for="item of content.selectionSteps" :key="item.step">
        <span class="text-2xl font-extrabold text-brand-dark-blue">{{
          item.step
        }}</span>
        <h3 class="font-bold text-xl mt-4">{{ item.title }}</h3>
        <p class="font-semibold text-lg mt-2">{{ item.highlight }}</p>
        <p class="text-gray-600 mt-3 leading-relaxed whitespace-pre-line">
          {{ item.description }}
        </p>
      </Card>
    </div>
  </section>
</template>
