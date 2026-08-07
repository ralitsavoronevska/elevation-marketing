<script setup lang="ts">
const { site } = useAppConfig();
const menuitems = site.menu;

const open = ref(false);
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
</script>

<template>
  <header class="fixed w-full top-8 md:top-8 inset-x-0 z-50 px-6">
    <div class="max-w-full flex flex-col">
      <div
        class="relative overflow-hidden bg-white rounded-pill px-3 md:px-7 py-3 flex flex-row items-center justify-between gap-6 backdrop-blur-xl shadow-md h-full border border-gray-100 lg:min-w-[60vw] lg:mx-auto"
      >
        <NuxtLink
          to="/"
          aria-label="Elevation Marketing — home"
          class="relative z-10 shrink-0"
        >
          <img
            src="/logo.webp"
            alt="Elevation Marketing"
            width="160"
            height="32"
            class="max-w-41.5 h-10 md:h-8 w-auto"
          />
        </NuxtLink>

        <nav class="relative z-10 hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="item of menuitems"
            :key="item.path"
            :to="item.path"
            class="px-3 py-2 text-sm text-black hover:text-brand-light-blue transition"
            activeClass="text-brand-light-blue"
            exactActiveClass="text-brand-light-blue"
            >{{ item.title }}</NuxtLink
          >
        </nav>

        <div class="relative z-10 hidden lg:block shrink-0">
          <NuxtLink
            to="/contact-us"
            class="inline-block bg-brand-dark-blue text-white rounded-full px-5 py-2.5 font-bold transition hover:bg-brand-light-blue"
            >Contact Us</NuxtLink
          >
        </div>

        <!-- Mobile burger -->
        <button
          @click="open = !open"
          type="button"
          class="relative z-10 lg:hidden flex flex-col items-center justify-center gap-1 bg-brand-dark-blue rounded-full px-5 py-3.5"
          aria-label="Toggle menu"
          :aria-expanded="open"
          aria-controls="mobile-menu"
        >
          <span
            class="block w-6.25 h-0.75 bg-white rounded-full transition-all duration-300"
            :class="open ? 'translate-y-1.75 rotate-45' : ''"
          ></span>
          <span
            class="block w-6.25 h-0.75 bg-white rounded-full transition-all duration-300"
            :class="open ? 'opacity-0' : ''"
          ></span>
          <span
            class="block w-6.25 h-0.75 bg-white rounded-full transition-all duration-300"
            :class="open ? '-translate-y-1.75 -rotate-45' : ''"
          ></span>
        </button>
      </div>

      <transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        leave-active-class="transition duration-100 ease-in"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="open"
          id="mobile-menu"
          class="lg:hidden mt-3 bg-white backdrop-blur-xl shadow-md h-full border border-gray-100 rounded-3xl p-5"
        >
          <ul class="flex flex-col gap-1">
            <li v-for="item of menuitems" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="px-3 py-2 text-sm text-black hover:text-brand-light-blue transition block"
                activeClass="text-brand-light-blue"
                exactActiveClass="text-brand-light-blue"
                >{{ item.title }}</NuxtLink
              >
            </li>
          </ul>
          <div class="mt-4">
            <NuxtLink
              to="/contact-us"
              class="block w-full bg-brand-dark-blue rounded-full text-white text-center font-bold px-5 py-2.5 transition active:bg-brand-light-blue hover:bg-brand-light-blue"
              >Contact Us</NuxtLink
            >
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
