<script setup lang="ts">
interface Props {
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary";
  className?: string;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  styleName: "primary",
});

const sizes = {
  md: "px-6 py-3",
  lg: "px-7 py-3.5",
};

const styles = {
  outline: "border-2 border-ink hover:bg-ink text-ink hover:text-white",
  primary:
    "bg-brand-dark-blue text-white hover:bg-brand-light-blue border-2 border-transparent",
};
</script>

<template>
  <button
    :class="[
      'rounded-full font-medium text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-300',
      block && 'w-full',
      sizes[size],
      styles[styleName],
      className,
    ]"
  >
    <slot />
  </button>
</template>
