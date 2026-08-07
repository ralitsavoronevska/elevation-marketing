<script setup lang="ts">
useSeoMeta({
  title: "Academy — Elevation Marketing",
  description:
    "Step forward with Elevation Marketing Academy. Learn. Build. Contribute. Grow.",
});

const { hero, intro, benefits } = useSiteData();
</script>

<template>
  <Hero :content="hero.academy" />
  <Container>
    <Intro :content="intro.academy" />
    <Benefits :content="benefits.academy" />
  </Container>
  <Cta />
</template>
