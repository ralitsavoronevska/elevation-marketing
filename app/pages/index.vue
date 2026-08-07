<script setup lang="ts">
const { hero, intro, solutions } = useSiteData();

useSeoMeta({
  title: "Elevation Marketing – Digital Strategy, Technology & Growth",
  description:
    "Strategy. Business. Technology. One solution that turns digital complexity into growth.",
});
</script>

<template>
  <Hero :content="hero.index" />
  <Container>
    <Carousel :intro="intro.index" />
    <Solutions :content="solutions" />
  </Container>
  <Cta />
</template>
