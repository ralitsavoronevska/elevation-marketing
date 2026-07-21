<script setup lang="ts">
useSeoMeta({
  title: "About Us — Elevation Marketing",
  description:
    "United by purpose, focused on results. Every result starts with the right minds working in sync.",
});

const { hero, intro, companyValues } = useSiteData();
</script>

<template>
  <Hero :content="hero.aboutUs" />
  <Container>
    <Intro :content="intro.aboutUs" />
    <CompanyValues :content="companyValues.aboutUs" />
  </Container>
  <Cta />
</template>
