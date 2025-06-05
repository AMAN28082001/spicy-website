import { Link } from "react-router-dom"

interface ProductCardProps {
  id: string
  name: string
  description: string
  image: string
  price: number
}

const ProductCard = ({ id, name, description, image, price }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1 text-sm line-clamp-2">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-orange-600 font-bold">${price.toFixed(2)}</span>
          <Link
            to={`/products/${id}`}
            className="px-3 py-1 bg-orange-600 text-white rounded-md hover:bg-orange-700 text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
