<script setup lang="ts">
import type { CompanyValues } from "~/composables/useSiteData";

defineProps<{ content: CompanyValues }>();
</script>

<template>
  <section class="mt-20">
    <h2 class="text-2xl lg:text-3xl font-bold">{{ content.title }}</h2>
    <p class="text-lg mt-4 text-slate-600">
      {{ content.description }}
    </p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <Card v-for="item in content.valueItems" :key="item.title">
        <div class="flex flex-col">
          <div
            class="bg-brand-dark-blue rounded-full p-2 w-9 h-9 shrink-0 flex items-center justify-center"
          >
            <Icon class="text-white w-5 h-5" :name="item.icon" />
          </div>
          <div class="mt-4">
            <h2 class="text-2xl font-semibold">{{ item.title }}</h2>
            <p class="text-lg font-semibold mt-2">{{ item.highlight }}</p>
            <p class="text-gray-600 mt-3 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </Card>
    </div>
  </section>
</template>
