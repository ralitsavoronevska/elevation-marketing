<script setup lang="ts">
const { site } = useAppConfig();

useSeoMeta({
  title: "Contact Us — Elevation Marketing",
  description:
    "Schedule a consultation with Elevation Marketing. Partner with us and unlock your business's full potential.",
});
</script>

<template>
  <!--
    Full-bleed dark background using the CTA imagery. The -mt cancels the
    layout's top padding so the image sits behind the fixed navbar; the pt
    re-adds clearance so the content clears it. Same bg-ink/60 overlay as the
    CTA keeps the white text readable over the photo.
  -->
  <section
    class="relative overflow-hidden -mt-28 md:-mt-36 pt-36 md:pt-40 pb-16 lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
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

    <Container class="relative z-10">
      <section class="max-w-4xl mx-auto text-center">
        <h1 class="text-white text-4xl sm:text-5xl font-bold lg:tracking-tight">
          Schedule a Consultation
        </h1>
        <p class="text-lg md:text-xl mt-6 text-white/80 max-w-3xl mx-auto">
          Partner with Elevation Marketing and unlock your business's full
          potential. See how we turn strategy into execution and ideas into
          results.
        </p>
      </section>

      <div class="grid md:grid-cols-2 gap-12 mx-auto max-w-4xl mt-16">
        <div>
          <h2 class="font-bold text-2xl text-white">Partner With Us</h2>
          <p class="text-lg leading-relaxed text-white/80 mt-3">
            Great things happen when the right people align. Ready to build
            what's next with us? Fill out the form or reach us directly.
          </p>
          <div class="mt-6 space-y-3">
            <!-- <div class="flex items-start gap-2 text-white/80">
              <Icon
                class="text-white/60 w-5 h-5 mt-0.5 shrink-0"
                name="uil:map-marker"
              />
              <span>{{ site.address }}</span>
            </div> -->
            <div class="flex items-center gap-2 text-white/80">
              <Icon
                class="text-white/60 w-5 h-5 shrink-0"
                name="uil:envelope"
              />
              <a :href="`mailto:${site.email}`" class="hover:text-white">{{
                site.email
              }}</a>
            </div>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <AppLink href="/about" styleName="outline" size="md"
              >More about us</AppLink
            >
            <AppLink href="/careers" styleName="outline" size="md"
              >Job vacancies</AppLink
            >
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-md p-6">
          <ContactForm />
        </div>
      </div>
    </Container>
  </section>
</template>
