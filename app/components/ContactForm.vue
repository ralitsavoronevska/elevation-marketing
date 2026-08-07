<script setup lang="ts">
// Submits to Web3Forms. Set the access key via NUXT_PUBLIC_WEB3FORMS_KEY
// (exposed as runtimeConfig.public.web3formsKey). Get a free key at
// https://web3forms.com/.
const accessKey = useRuntimeConfig().public.web3formsKey;

const form = ref<HTMLFormElement | null>(null);
const status = ref<"idle" | "sending" | "success" | "error">("idle");
const message = ref("");
const wasValidated = ref(false);

async function onSubmit() {
  const el = form.value;
  if (!el) return;

  // Trigger native validation UI; focus the first invalid field if any.
  wasValidated.value = true;
  if (!el.checkValidity()) {
    el.querySelector<HTMLElement>(":invalid")?.focus();
    return;
  }

  status.value = "sending";
  message.value = "Sending…";

  try {
    const payload = Object.fromEntries(new FormData(el));
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: accessKey, ...payload }),
    });
    const data = await response.json();

    if (response.ok) {
      status.value = "success";
      message.value = data.message ?? "Thanks! We'll be in touch shortly.";
      el.reset();
      wasValidated.value = false;
    } else {
      status.value = "error";
      message.value = data.message ?? "Something went wrong. Please try again.";
    }
  } catch {
    status.value = "error";
    message.value = "Something went wrong. Please try again.";
  } finally {
    // Clear the status message after a few seconds.
    setTimeout(() => {
      status.value = "idle";
      message.value = "";
    }, 5000);
  }
}
</script>

<template>
  <form
    ref="form"
    novalidate
    :class="['needs-validation', { 'was-validated': wasValidated }]"
    @submit.prevent="onSubmit"
  >
    <input
      type="hidden"
      name="subject"
      value="New enquiry from Elevation Marketing website"
    />
    <!-- Honeypot: bots fill this hidden field; humans never see it. -->
    <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" />

    <div class="grid sm:grid-cols-2 gap-5 mb-5">
      <div>
        <label for="first_name" class="sr-only">First Name</label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          autocomplete="given-name"
          class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please provide your first name.
        </div>
      </div>
      <div>
        <label for="last_name" class="sr-only">Last Name</label>
        <input
          id="last_name"
          type="text"
          name="last_name"
          placeholder="Last Name"
          required
          autocomplete="family-name"
          class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          Please provide your last name.
        </div>
      </div>
    </div>

    <div class="mb-5">
      <label for="email_address" class="sr-only">Email Address</label>
      <input
        id="email_address"
        type="email"
        name="email"
        placeholder="Email Address"
        required
        autocomplete="email"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Please provide your email address.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Please provide a valid email address.
      </div>
    </div>

    <div class="mb-5">
      <label for="phone" class="sr-only">Phone Number</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        autocomplete="tel"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide your phone number.
      </div>
    </div>

    <div class="mb-3">
      <label for="message" class="sr-only">Your Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        required
        maxlength="180"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-500 rounded-md outline-none h-35 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please enter your message.
      </div>
    </div>

    <Button type="submit" size="lg" block :disabled="status === 'sending'">
      {{ status === "sending" ? "Sending…" : "Send" }}
    </Button>

    <p
      v-if="message"
      class="mt-3 text-center"
      role="status"
      aria-live="polite"
      :class="{
        'text-green-600': status === 'success',
        'text-red-500': status === 'error',
      }"
    >
      {{ message }}
    </p>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
