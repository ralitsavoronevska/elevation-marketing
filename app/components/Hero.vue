<script setup lang="ts">
import type { Hero } from "~/composables/useSiteData";

defineProps<{ content: Hero }>();

const asset = useAsset();
</script>

<template>
  <!--
    Full-bleed image hero. A responsive <picture> swaps the background image
    per device (mobile / tablet / desktop). The -mt cancels the layout's top
    padding so the image sits behind the fixed navbar.
  -->
  <section
    id="hero"
    class="relative w-full -mt-28 md:-mt-36 min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div class="absolute inset-0">
      <picture>
        <!-- desktop: 1024px and up -->
        <source
          media="(min-width: 1024px)"
          :srcset="asset('/hero/hero-desktop.webp')"
          type="image/webp"
        />
        <!-- tablet: 768px–1023px -->
        <source
          media="(min-width: 768px)"
          :srcset="asset('/hero/hero-tablet.webp')"
          type="image/webp"
        />
        <!-- mobile: up to 767px (default img) -->
        <img
          :src="asset('/hero/hero-mobile.webp')"
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          width="768"
          height="513"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.4)_100%)]"
      ></div>
    </div>

    <div
      class="relative z-10 w-full mx-auto text-center px-5 max-w-6xl xl:max-w-7xl"
    >
      <h1
        class="font-display text-white font-bold text-4xl sm:text-5xl leading-tight"
      >
        {{ content.title }}
      </h1>
      <p class="text-white/90 text-lg md:text-2xl mt-6">
        {{ content.subtitle }}
      </p>
    </div>
  </section>
</template>
