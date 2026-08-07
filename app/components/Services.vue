<script setup lang="ts">
import type { Services } from "~/composables/useSiteData";

defineProps<{ content: Services }>();
</script>

<template>
  <section class="mt-20">
    <h2 class="text-3xl lg:text-5xl font-extrabold tracking-tight">
      {{ content.title }}
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      {{ content.description }}
    </p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <Card v-for="item in content.serviceItems" :key="item.number">
        <span class="text-2xl font-extrabold text-brand-dark-blue">{{
          item.number
        }}</span>
        <h3 class="text-2xl font-bold mt-4">{{ item.title }}</h3>
        <p class="text-gray-600 mt-3">{{ item.offer }}</p>
        <ul class="mt-4">
          <li
            v-for="(nutshell, i) in item.nutshell"
            :key="i"
            class="flex items-center gap-2 mt-2 text-gray-600"
          >
            <Tick className="w-4 h-4 text-brand-dark-blue shrink-0" />
            <span>{{ nutshell }}</span>
          </li>
        </ul>
      </Card>
    </div>
  </section>
</template>
