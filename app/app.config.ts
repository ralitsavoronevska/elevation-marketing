// app.config.ts
export default defineAppConfig({
  site: {
    name: "Elevation Marketing",
    description:
      "Your all-in-one partner for digital growth. One solution that turns digital complexity into growth.",
    // SEO copy used for <title>, meta description, Open Graph and Twitter.
    seoTitle: "Elevation Marketing – Digital Strategy, Technology & Growth",
    seoDescription:
      "Elevation Marketing integrates strategy, software, and customer operations into one agile system. We modernize tech and boost retention to turn complexity into growth.",
    // Social share image (1200x630). Add the file at public/og-image.png.
    // ogImage: "/og-image.png",
    email: "contacts@elevation-marketing.net",
    address: "Some address, 1234, City, State, Country",
    menu: [
      { title: "Services", path: "/services" },
      { title: "Careers", path: "/careers" },
      { title: "Academy", path: "/academy" },
      { title: "About Us", path: "/about" },
    ],
    // TODO: point these at real policy pages when they exist.
    legal: [
      { title: "Cookie Policy", path: "#" },
      { title: "Privacy Policy", path: "#" },
      { title: "Terms & Conditions", path: "#" },
    ],
  },
});
