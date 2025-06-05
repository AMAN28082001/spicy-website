"use client"

import { useState } from "react"
import ProductCard from "../components/ProductCard"
import { allProducts } from "../data/products"

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", name: "All Products" },
    { id: "masala-blends", name: "Masala Blends" },
    { id: "whole-spices", name: "Whole Spices" },
    { id: "ground-spices", name: "Ground Spices" },
    { id: "specialty-blends", name: "Specialty Blends" },
  ]

  const filteredProducts =
    selectedCategory === "all" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  return (
    <div>
      <div className="bg-orange-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Our Products</h1>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category.id
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
