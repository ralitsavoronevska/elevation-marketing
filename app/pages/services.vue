<script setup lang="ts">
const { hero, intro, services, solutions } = useSiteData();

useSeoMeta({
  title: "Services — Elevation Marketing",
  description:
    "Everything You Need, Working as One. Strategic marketing | Seamless retention | Targeted acquisition | Scalable software | Structured delivery | Trusted compliance | Efficient finance",
});
</script>

<template>
  <Hero :content="hero.services" />
  <Container>
    <Intro :content="intro.services" />
    <Services :content="services" />
    <Solutions :content="solutions" />
  </Container>
  <Cta />
</template>
