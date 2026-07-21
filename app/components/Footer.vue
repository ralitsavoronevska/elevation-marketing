<script setup lang="ts">
const { site } = useAppConfig();

// Computed once at render time so the pre-rendered and hydrated markup match
// (avoids a hydration mismatch around the New Year boundary).
const year = new Date().getFullYear();
</script>

<template>
  <footer class="mt-10 text-left">
    <!-- Main box: full-bleed horizontal borders + 90vw side borders -->
    <div class="border-y border-brand-footer-border">
      <div
        class="w-[90vw] max-w-360 mx-auto flex flex-col border-x border-brand-footer-border lg:flex-row lg:items-stretch lg:justify-between"
      >
        <!-- Logo / address / emails -->
        <div
          class="flex flex-col gap-8 p-6 w-full lg:w-80 lg:border-r lg:border-brand-footer-border"
        >
          <NuxtLink to="/" aria-label="Elevation Marketing — home" class="inline-block">
            <img
              src="/logo.webp"
              :alt="site.name"
              width="154"
              height="27"
              class="w-37.5 h-auto"
            />
          </NuxtLink>
          <!-- <p class="text-[.88rem] leading-relaxed text-black">
            {{ site.address }}
          </p> -->
          <div class="flex flex-col gap-2 text-[.88rem]">
            <a
              :href="`mailto:${site.email}`"
              class="font-medium text-black transition-colors hover:text-brand-light-blue"
              >{{ site.email }}</a
            >
          </div>
        </div>

        <!-- Company: stacked below lg, side-by-side on lg -->
        <div class="flex flex-col w-full lg:w-auto lg:flex-row">
          <!-- Company -->
          <div
            class="flex flex-row gap-8 p-6 w-full border-t border-brand-footer-border lg:w-57.5 lg:flex-col lg:gap-5 lg:border-t-0 lg:border-l"
          >
            <h2
              class="w-32.5 shrink-0 text-xl font-medium text-slate-900 md:w-1/2 lg:w-auto"
            >
              Company
            </h2>
            <ul class="flex flex-col md:w-1/2 lg:w-auto">
              <li v-for="item of site.menu" :key="item.path">
                <NuxtLink
                  :to="item.path"
                  class="block py-1 text-[.9rem] text-black transition-colors hover:text-brand-light-blue"
                  >{{ item.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar: centered + stacked below lg, split on lg -->
    <div
      class="w-[90vw] max-w-360 mx-auto flex flex-col border-x border-brand-footer-border items-center gap-4 py-6 px-6 text-center lg:flex-row lg:justify-between lg:text-left"
    >
      <p class="text-[14px] text-black">
        Copyright © {{ year }} {{ site.name }}. All rights reserved.
      </p>
      <div
        class="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[.88rem] text-black"
      >
        <template v-for="(item, i) of site.legal" :key="item.title">
          <span v-if="i > 0" class="text-black">–</span>
          <a
            :href="item.path"
            class="transition-colors hover:text-brand-light-blue"
            >{{ item.title }}</a
          >
        </template>
      </div>
    </div>
  </footer>
</template>
