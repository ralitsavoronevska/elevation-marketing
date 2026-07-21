<script setup lang="ts">
const { hero, intro, companyValues, benefits, selectionProcess } =
  useSiteData();

useSeoMeta({
  title: "Careers — Elevation Marketing",
  description:
    "Work that shapes your future. One mission, many roles. United to create lasting impact.",
});
</script>

<template>
  <Hero :content="hero.careers" />
  <Container>
    <Intro :content="intro.careers" />
    <CompanyValues :content="companyValues.careers" />
    <Benefits :content="benefits.careers" />
    <SelectionProcess :content="selectionProcess" />
  </Container>
  <Cta />
</template>
