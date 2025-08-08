export type EventItem = {
  id: string
  title: string
  date: string
  location: string
  description: string
}

export const events: EventItem[] = [
  {
    id: "adoption-fair",
    title: "Weekend Adoption Fair",
    date: "Sep 15, 2025",
    location: "Barkhaus Main Campus",
    description:
      "Meet adoptable pets, talk to our team, and learn about fostering.",
  },
  {
    id: "fundraiser-gala",
    title: "Paws & Hearts Gala",
    date: "Oct 05, 2025",
    location: "Barkhaus Event Hall",
    description:
      "An evening of stories, impact, and support for our animals in need.",
  },
  {
    id: "training-101",
    title: "Pup Training 101",
    date: "Oct 22, 2025",
    location: "Training Yard",
    description: "Free intro class on positive reinforcement training basics.",
  },
]
