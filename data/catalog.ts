export function unsplashUrl(photoId: string, width: number) {
  return `https://images.unsplash.com/${photoId}?q=70&w=${width}&fm=jpg&fit=crop`
}

export type Product = {
  name: string
  detail: string
  price: string
  image: string
  photo?: string
}

export type Category = {
  id: string
  label: string
  restricted: boolean
  blurb: string
  seed: string
  photo?: string
  bgPhoto: string
  items: Product[]
}

export const categories: Category[] = [
  {
    id: "alcohol",
    label: "Alcohol",
    restricted: true,
    blurb: "Beer, wine, and spirits from regional distillers and the usual standbys.",
    seed: "cask-ember-alcohol-shelf",
    bgPhoto: "photo-1758247706694-7830caadea8d",
    items: [
      { name: "Hazy IPA, 6-pack", detail: "Local brewery, 6.2% ABV", price: "$13.99", image: "cask-ember-ipa", photo: "photo-1626320290598-03656e931a31" },
      { name: "Cabernet Sauvignon", detail: "750ml, medium body", price: "$16.49", image: "cask-ember-wine", photo: "photo-1700893417257-c87e3d2857a4" },
      { name: "Silver Tequila", detail: "750ml, 100% agave", price: "$28.99", image: "cask-ember-tequila", photo: "photo-1516535794938-6063878f08cc" },
      { name: "Straight Bourbon", detail: "750ml, 90 proof", price: "$32.00", image: "cask-ember-bourbon", photo: "photo-1576751412295-7e7360fa3f71" },
      { name: "Sparkling Seltzer, 8-pack", detail: "Mixed citrus, 5% ABV", price: "$11.99", image: "cask-ember-seltzer", photo: "photo-1680627542594-1f57af98a5fb" },
      { name: "Pilsner, 12-pack", detail: "Domestic lager, cans", price: "$14.99", image: "cask-ember-pilsner", photo: "photo-1545690520-676a9809eea8" },
    ],
  },
  {
    id: "non-alcoholic",
    label: "Non-Alcoholic Drinks",
    restricted: false,
    blurb: "Sodas, sparkling water, juice, and cold coffee for the drive.",
    seed: "cask-ember-fridge",
    bgPhoto: "photo-1640766322140-ab90a7bc71e5",
    items: [
      { name: "Cold Brew Coffee", detail: "11oz can, black", price: "$3.49", image: "cask-ember-coldbrew", photo: "photo-1559525839-b184a4d698c7" },
      { name: "Sparkling Water, 4-pack", detail: "Lime and grapefruit", price: "$4.99", image: "cask-ember-sparkling", photo: "photo-1705413085032-77fec96871cf" },
      { name: "Energy Drink", detail: "16oz, sugar-free", price: "$2.99", image: "cask-ember-energy", photo: "photo-1613208602577-50fd21015cca" },
      { name: "Fresh-Pressed Juice", detail: "12oz, orange", price: "$4.49", image: "cask-ember-juice", photo: "photo-1628200487311-7bdfd5e6ace3" },
      { name: "Classic Cola, 2L", detail: "Bottle, chilled", price: "$3.29", image: "cask-ember-cola", photo: "photo-1562115260-42521bf8b1a4" },
      { name: "Iced Tea", detail: "20oz, unsweet", price: "$2.79", image: "cask-ember-icedtea", photo: "photo-1681974913878-1c446bac7cf5" },
    ],
  },
  {
    id: "tobacco",
    label: "Tobacco",
    restricted: true,
    blurb: "Cigars, rolling tobacco, and papers for the traditionalists.",
    seed: "cask-ember-humidor",
    photo: "photo-1612659429081-4d261418adc1",
    bgPhoto: "photo-1756981168649-0e3c3c8a32f3",
    items: [
      { name: "Robusto Cigar", detail: "Single, medium body", price: "$9.99", image: "cask-ember-cigar", photo: "photo-1547652577-b4fe2f34d7ee" },
      { name: "Rolling Tobacco, 1.5oz", detail: "Pouch, additive-free", price: "$12.49", image: "cask-ember-rolling", photo: "photo-1649779117064-107e63b88758" },
      { name: "Rolling Papers", detail: "King size, 32-count", price: "$1.99", image: "cask-ember-papers", photo: "photo-1778361999485-56d82875983a" },
      { name: "Pipe Tobacco, 2oz", detail: "Tin, aromatic blend", price: "$14.99", image: "cask-ember-pipe", photo: "photo-1516739178846-cbcff5b01f90" },
    ],
  },
  {
    id: "cigarettes",
    label: "Cigarettes",
    restricted: true,
    blurb: "Full-flavor, light, and menthol packs and cartons.",
    seed: "cask-ember-counter",
    bgPhoto: "photo-1657593091045-3927d4967afe",
    items: [
      { name: "Full-Flavor Pack", detail: "King size, 20-count", price: "$8.49", image: "cask-ember-cig1", photo: "photo-1627449543657-ab677b2105cf" },
      { name: "Menthol Pack", detail: "King size, 20-count", price: "$8.49", image: "cask-ember-cig2", photo: "photo-1572113564617-7230ee196d9a" },
      { name: "Lights Pack", detail: "100s, 20-count", price: "$8.29", image: "cask-ember-cig3", photo: "photo-1610975727119-cfdc910e2333" },
      { name: "Carton, Full-Flavor", detail: "10-pack cartons", price: "$74.99", image: "cask-ember-carton", photo: "photo-1652538962106-d3edb2e737ff" },
    ],
  },
  {
    id: "vapes",
    label: "Vapes",
    restricted: true,
    blurb: "Disposables, pod systems, and e-liquid, age-verified at checkout.",
    seed: "cask-ember-vapecase",
    bgPhoto: "photo-1618588487745-2d46620cabc5",
    items: [
      { name: "Disposable Vape", detail: "5% nic, 5000 puffs", price: "$16.99", image: "cask-ember-disposable", photo: "photo-1653179767794-44eb91b60955" },
      { name: "Pod System Starter Kit", detail: "Rechargeable, 2 pods", price: "$24.99", image: "cask-ember-podkit", photo: "photo-1594189738947-f3705174410f" },
      { name: "Nic Salt Pods, 4-pack", detail: "Assorted flavors", price: "$13.99", image: "cask-ember-pods", photo: "photo-1675958876665-bbec537b5af2" },
      { name: "E-Liquid, 60ml", detail: "Freebase, 3mg", price: "$18.99", image: "cask-ember-eliquid", photo: "photo-1594177914682-d408d96e458b" },
    ],
  },
  {
    id: "everyday",
    label: "Everyday Essentials",
    restricted: false,
    blurb: "Snacks, ice, lighters, chargers, lottery, and the rest of the counter.",
    seed: "cask-ember-counter-misc",
    bgPhoto: "photo-1768464705938-1d43e07023cf",
    items: [
      { name: "Kettle Chips", detail: "Sea salt, family size", price: "$3.99", image: "cask-ember-chips", photo: "photo-1641693148759-843d17ceac24" },
      { name: "Bagged Ice, 10lb", detail: "Kept at the door", price: "$2.99", image: "cask-ember-ice", photo: "photo-1742911350792-783678552a38" },
      { name: "Butane Lighter, 2-pack", detail: "Refillable", price: "$3.49", image: "cask-ember-lighter", photo: "photo-1576682631235-90941f11cf04" },
      { name: "Phone Charging Cable", detail: "USB-C, 6ft", price: "$7.99", image: "cask-ember-cable", photo: "photo-1711056823627-64e9089d4a82" },
      { name: "Scratch Lottery Tickets", detail: "Assorted, behind counter", price: "From $1.00", image: "cask-ember-lottery", photo: "photo-1715520928476-cd350276d96e" },
      { name: "Beef Jerky", detail: "Peppered, 3oz bag", price: "$5.49", image: "cask-ember-jerky", photo: "photo-1652209695374-7a91c243f12f" },
    ],
  },
]
