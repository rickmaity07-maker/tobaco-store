import { IntroReveal } from "@/components/IntroReveal"
import { AgeGate } from "@/components/AgeGate"
import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { CategoryOverview } from "@/components/CategoryOverview"
import { PromoDuo } from "@/components/PromoDuo"
import { CategoryGrid } from "@/components/sections/CategoryGrid"
import { Compliance } from "@/components/Compliance"
import { Footer } from "@/components/Footer"
import { ScrollSpy } from "@/components/ScrollSpy"
import { categories } from "@/data/catalog"

const byId = Object.fromEntries(categories.map((c) => [c.id, c]))

const sectionIds = [
  "top",
  "categories",
  "featured",
  ...categories.map((c) => c.id),
  "compliance",
  "visit",
]

export default function Home() {
  return (
    <>
      <IntroReveal />
      <AgeGate />
      <Nav />
      <ScrollSpy ids={sectionIds} />
      <main>
        <Hero />
        <CategoryOverview />
        <PromoDuo categories={[byId.alcohol, byId.vapes]} />
        {categories.map((c) => (
          <CategoryGrid key={c.id} category={c} />
        ))}
        <Compliance />
      </main>
      <Footer />
    </>
  )
}
