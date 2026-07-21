<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <Header />
    <main class="flex-1 pt-28 md:pt-36">
      <slot />
    </main>
    <Footer />
  </div>
</template>
