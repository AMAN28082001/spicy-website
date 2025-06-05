export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
}

export const allProducts: Product[] = [
  {
    id: "garam-masala",
    name: "Garam Masala",
    description:
      "A warm, aromatic blend of ground spices used in Indian cuisine. Perfect for curries, stews, and rice dishes.",
    price: 7.99,
    image: "/placeholder.svg?height=300&width=300&text=Garam+Masala",
    category: "masala-blends",
    featured: true,
  },
  {
    id: "tandoori-masala",
    name: "Tandoori Masala",
    description:
      "A vibrant, flavorful blend perfect for marinating meats before grilling or baking. Creates authentic tandoori flavor.",
    price: 8.49,
    image: "/placeholder.svg?height=300&width=300&text=Tandoori+Masala",
    category: "masala-blends",
    featured: true,
  },
  {
    id: "chaat-masala",
    name: "Chaat Masala",
    description:
      "A tangy, spicy blend that adds a burst of flavor to fruits, salads, and snacks. Essential for authentic street food taste.",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=300&text=Chaat+Masala",
    category: "masala-blends",
  },
  {
    id: "curry-powder",
    name: "Curry Powder",
    description:
      "A versatile blend of turmeric, coriander, cumin, and other spices. Perfect for adding depth to soups, stews, and sauces.",
    price: 7.49,
    image: "/placeholder.svg?height=300&width=300&text=Curry+Powder",
    category: "masala-blends",
    featured: true,
  },
  {
    id: "whole-cumin",
    name: "Whole Cumin Seeds",
    description:
      "Aromatic seeds with a distinctive earthy flavor. Essential for tempering oils and adding texture to dishes.",
    price: 5.99,
    image: "/placeholder.svg?height=300&width=300&text=Cumin+Seeds",
    category: "whole-spices",
  },
  {
    id: "whole-cardamom",
    name: "Green Cardamom Pods",
    description:
      "Intensely aromatic pods with a complex sweet and spicy flavor. Perfect for both sweet and savory dishes.",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=300&text=Cardamom+Pods",
    category: "whole-spices",
  },
  {
    id: "cinnamon-sticks",
    name: "Cinnamon Sticks",
    description:
      "Premium quality cinnamon sticks with a sweet, woody aroma. Ideal for infusing flavor into teas, desserts, and curries.",
    price: 6.49,
    image: "/placeholder.svg?height=300&width=300&text=Cinnamon+Sticks",
    category: "whole-spices",
  },
  {
    id: "ground-turmeric",
    name: "Ground Turmeric",
    description:
      "Vibrant yellow spice with earthy, slightly bitter flavor. Known for its anti-inflammatory properties.",
    price: 5.49,
    image: "/placeholder.svg?height=300&width=300&text=Ground+Turmeric",
    category: "ground-spices",
  },
  {
    id: "ground-coriander",
    name: "Ground Coriander",
    description:
      "Mild, citrusy spice made from ground coriander seeds. Adds brightness to curries, soups, and marinades.",
    price: 4.99,
    image: "/placeholder.svg?height=300&width=300&text=Ground+Coriander",
    category: "ground-spices",
  },
  {
    id: "kashmiri-chili",
    name: "Kashmiri Chili Powder",
    description: "Mild chili powder known for its vibrant red color. Adds rich color and mild heat to dishes.",
    price: 6.99,
    image: "/placeholder.svg?height=300&width=300&text=Kashmiri+Chili",
    category: "ground-spices",
  },
  {
    id: "biryani-masala",
    name: "Biryani Masala",
    description:
      "Special blend of spices crafted specifically for the perfect biryani. Creates authentic, aromatic rice dishes.",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=300&text=Biryani+Masala",
    category: "specialty-blends",
  },
  {
    id: "pav-bhaji-masala",
    name: "Pav Bhaji Masala",
    description: "Distinctive blend for making the popular Indian street food dish. Bold, tangy flavor profile.",
    price: 7.49,
    image: "/placeholder.svg?height=300&width=300&text=Pav+Bhaji+Masala",
    category: "specialty-blends",
  },
]

export const featuredProducts = allProducts.filter((product) => product.featured)
