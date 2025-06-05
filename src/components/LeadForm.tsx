"use client"

import type React from "react"

import { useState } from "react"
import { sendLeadData } from "../services/leadService"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  interestedProducts: string[]
}

const LeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    interestedProducts: [],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      interestedProducts: checked
        ? [...prev.interestedProducts, value]
        : prev.interestedProducts.filter((item) => item !== value),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendLeadData(formData)
      setSubmitStatus({
        success: true,
        message: "Thank you for your interest! We will contact you soon.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interestedProducts: [],
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-orange-600">Get in Touch</h3>

      {submitStatus && (
        <div
          className={`p-4 mb-4 rounded-md ${submitStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <p className="block text-sm font-medium text-gray-700 mb-2">I'm interested in (select all that apply):</p>
          <div className="space-y-2">
            {["Garam Masala", "Chaat Masala", "Tandoori Masala", "Curry Powder", "Other Spice Blends"].map(
              (product) => (
                <div key={product} className="flex items-center">
                  <input
                    type="checkbox"
                    id={product.replace(/\s+/g, "-").toLowerCase()}
                    name="interestedProducts"
                    value={product}
                    checked={formData.interestedProducts.includes(product)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor={product.replace(/\s+/g, "-").toLowerCase()} className="ml-2 text-sm text-gray-700">
                    {product}
                  </label>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default LeadForm
