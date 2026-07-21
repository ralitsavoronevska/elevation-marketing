<script setup lang="ts">
// Shared surface for the landing-page cards (Services, Solutions, Company
// Values, Benefits, Selection Process). The chrome is identical everywhere; the
// only variants are interior padding and an optional horizontal row layout.
interface Props {
  // Tailwind padding utility for the card interior.
  padding?: string;
  // Lay the card out as a horizontal row (icon/tick + text) instead of a block.
  row?: boolean;
}

withDefaults(defineProps<Props>(), {
  padding: "p-6",
  row: false,
});
</script>

<template>
  <div
    class="bg-white rounded-2xl backdrop-blur-xl shadow-md h-full border border-gray-100"
    :class="[padding, { 'flex items-start gap-2': row }]"
  >
    <slot />
  </div>
</template>
