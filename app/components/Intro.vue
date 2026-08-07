<script setup lang="ts">
import type { Intro } from "~/composables/useSiteData";

defineProps<{ content: Intro }>();
</script>
<template>
  <div class="grid lg:grid-cols-2 gap-8 items-start mt-20">
    <div>
      <p class="text-base font-semibold uppercase tracking-wide">
        {{ content.title }}
      </p>
      <h2 class="text-3xl lg:text-5xl font-extrabold tracking-tight mt-4">
        {{ content.highlight }}
      </h2>
    </div>
    <p class="text-lg text-slate-600 lg:pt-2 whitespace-pre-line">
      {{ content.text }}
    </p>
  </div>
</template>
