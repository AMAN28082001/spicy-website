import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProductsPage from "./pages/ProductsPage"
import ContactPage from "./pages/ContactPage"
import WhyUsPage from "./pages/WhyUsPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="why-us" element={<WhyUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
