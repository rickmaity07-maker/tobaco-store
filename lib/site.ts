// TODO before launch: replace with the real production domain and business info.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.caskandember.example"

export const business = {
  name: "Cask & Ember",
  description:
    "Neighborhood spirits, tobacco, vape, and everyday goods. Family-run, open late. Must be 21+ to purchase alcohol, tobacco, and vape products.",
  streetAddress: "412 Delridge Ave",
  addressLocality: "Riverton",
  addressRegion: "OH",
  postalCode: "43011",
  telephone: "+1-614-555-0148",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "23:00" },
    { days: ["Sunday"], opens: "10:00", closes: "21:00" },
  ],
}
