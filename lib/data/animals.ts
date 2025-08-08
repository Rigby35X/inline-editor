export type Animal = {
  id: string
  name: string
  species: "Dog" | "Cat" | "Other"
  age: string
  description: string
  image: string
  traits: string[]
}

export const animals: Animal[] = [
  {
    id: "bella",
    name: "Bella",
    species: "Dog",
    age: "2 years",
    description:
      "Sweet and playful. Loves walks and cuddles. Great with kids and other dogs.",
    image:
      "/placeholder.svg?height=320&width=480",
    traits: ["House-trained", "Vaccinated", "Good with kids"],
  },
  {
    id: "max",
    name: "Max",
    species: "Dog",
    age: "3 years",
    description:
      "Energetic and smart. Enjoys fetch and learning new tricks. Best as only pet.",
    image:
      "/placeholder.svg?height=320&width=480",
    traits: ["Active", "Leash-trained", "Neutered"],
  },
  {
    id: "luna",
    name: "Luna",
    species: "Cat",
    age: "1 year",
    description:
      "Affectionate lap cat who loves sunny windowsills. Gentle and calm.",
    image:
      "/placeholder.svg?height=320&width=480",
    traits: ["Indoor", "Vaccinated", "Microchipped"],
  },
  {
    id: "charlie",
    name: "Charlie",
    species: "Dog",
    age: "4 years",
    description:
      "Laid back companion. Perfect for a quiet home and leisurely strolls.",
    image:
      "/placeholder.svg?height=320&width=480",
    traits: ["Calm", "Good with seniors", "Neutered"],
  },
  {
    id: "milo",
    name: "Milo",
    species: "Cat",
    age: "2 years",
    description:
      "Curious and playful. Loves feather toys and cardboard boxes.",
    image:
      "/placeholder.svg?height=320&width=480",
    traits: ["Playful", "Litter trained", "Vaccinated"],
  },
  {
    id: "rosie",
    name: "Rosie",
    species: "Dog",
    age: "5 years",
    description:
      "Gentle soul with big heart. Enjoys naps, treats, and quiet company.",
    image:
      "/placeholder.svg?height=320&width=480",
    traits: ["Gentle", "Low energy", "House-trained"],
  },
]
