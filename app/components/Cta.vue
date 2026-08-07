<script setup lang="ts">
interface Props {
  title?: string;
  desc?: string;
  buttonText?: string;
  buttonLink?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Ready to move forward?",
  desc: "Let's turn your vision into action.",
  buttonText: "Contact us",
  buttonLink: "/contact-us",
});
</script>

<template>
  <div
    class="relative overflow-hidden bg-ink px-8 py-20 mt-20 mx-auto flex flex-col items-center text-center"
  >
    <!-- Responsive background image (mobile / tablet / desktop) -->
    <picture>
      <source
        media="(min-width: 1024px)"
        srcset="/cta/cta-desktop.webp"
        type="image/webp"
      />
      <source
        media="(min-width: 768px)"
        srcset="/cta/cta-tablet.webp"
        type="image/webp"
      />
      <img
        src="/cta/cta-mobile.webp"
        alt=""
        aria-hidden="true"
        width="768"
        height="512"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </picture>
    <!-- Dark overlay keeps the text readable over the image -->
    <div class="absolute inset-0 bg-ink/60"></div>

    <div class="relative z-10 flex flex-col items-center">
      <h2 class="text-white text-3xl md:text-5xl font-extrabold tracking-tight">
        {{ title }}
      </h2>
      <p class="text-white/70 mt-4 text-lg md:text-xl max-w-2xl">{{ desc }}</p>
      <div class="flex mt-8">
        <AppLink :href="buttonLink" styleName="outline">{{
          buttonText
        }}</AppLink>
      </div>
    </div>
  </div>
</template>
