import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import { ScrollToTop } from "./components/ScrollToTop";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collections" element={<PlaceholderPage title="Collections" />} />
              <Route path="/about" element={<PlaceholderPage title="About Us" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
              <Route path="/new-arrivals" element={<PlaceholderPage title="New Arrivals" />} />
              <Route path="/sale" element={<PlaceholderPage title="Sale" />} />
              <Route path="/shipping" element={<PlaceholderPage title="Shipping Info" />} />
              <Route path="/returns" element={<PlaceholderPage title="Returns & Exchanges" />} />
              <Route path="/size-guide" element={<PlaceholderPage title="Size Guide" />} />
              <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
              <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Cart />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-black">{title}</h1>
        <p className="text-gray-600 mb-8">
          This page is coming soon. Continue exploring our site or let us know what you'd like to see here.
        </p>
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors duration-300"
          >
            Back to Home
          </a>
          <p className="text-sm text-gray-500">
            Want this page completed? Just ask us to build it out!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
