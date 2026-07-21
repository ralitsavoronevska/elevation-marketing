<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary";
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes = {
  lg: "px-7 py-3",
  md: "px-5 py-2.5 text-sm",
};

const styles = {
  outline:
    "bg-transparent border-2 border-white hover:bg-white hover:text-brand-dark-blue text-white",
  primary:
    "bg-brand-dark-blue hover:bg-brand-light-blue rounded-pill text-white rounded-full px-5 py-3.5",
};
</script>

<template>
  <NuxtLink
    :to="props.href"
    :class="[
      'inline-block rounded-full font-bold text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-300',
      props.block && 'w-full',
      sizes[props.size],
      styles[props.styleName],
      props.className,
    ]"
    ><slot />
  </NuxtLink>
</template>
