import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Truck, Shield, RotateCcw, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useCart } from '../contexts/CartContext';

const productData = {
  1: {
    id: 1,
    name: "Executive Black Suit",
    price: 599,
    originalPrice: 799,
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1594938328870-28be88cb6718?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
    ],
    category: "Suits",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    onSale: true,
    description: "Crafted from premium Italian wool, this executive black suit represents the pinnacle of professional elegance. The contemporary slim fit silhouette is tailored to perfection, featuring peak lapels, functional sleeve buttons, and a sophisticated finish that commands respect in any boardroom.",
    features: [
      "100% Premium Italian Wool",
      "Slim Fit Contemporary Cut",
      "Peak Lapels with Notched Detail",
      "Functional Sleeve Buttons",
      "Half-Canvassed Construction",
      "Dry Clean Only"
    ],
    sizes: ["38", "40", "42", "44", "46", "48", "50"],
    colors: ["Black", "Charcoal", "Navy"],
    inStock: true
  },
  2: {
    id: 2,
    name: "Premium White Shirt",
    price: 129,
    originalPrice: 179,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1594938328870-28be88cb6718?w=800&h=1000&fit=crop"
    ],
    category: "Shirts",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    onSale: true,
    description: "Impeccably tailored from premium Egyptian cotton, this classic white dress shirt embodies timeless sophistication. Features a modern slim fit, French seams, and mother-of-pearl buttons for an elevated finish that transitions seamlessly from boardroom to evening events.",
    features: [
      "100% Premium Egyptian Cotton",
      "Slim Fit Design",
      "French Seam Construction",
      "Mother-of-Pearl Buttons",
      "Spread Collar",
      "Machine Washable"
    ],
    sizes: ["38", "40", "42", "44", "46", "48", "50"],
    colors: ["White", "Light Blue", "Cream"],
    inStock: true
  },
  3: {
    id: 3,
    name: "Charcoal Grey Blazer",
    price: 399,
    originalPrice: 529,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1594938328870-28be88cb6718?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&h=1000&fit=crop"
    ],
    category: "Blazers",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    onSale: true,
    description: "A sophisticated charcoal grey blazer crafted from fine wool blend fabric. This versatile piece features a contemporary cut with natural shoulder construction, making it perfect for both business and casual occasions.",
    features: [
      "Wool Blend Fabric",
      "Contemporary Fit",
      "Natural Shoulder Construction",
      "Two-Button Closure",
      "Side Vents",
      "Dry Clean Only"
    ],
    sizes: ["38", "40", "42", "44", "46", "48", "50"],
    colors: ["Charcoal", "Navy", "Black"],
    inStock: true
  },
  4: {
    id: 4,
    name: "Classic Navy Trousers",
    price: 159,
    originalPrice: 219,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1594938328870-28be88cb6718?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
    ],
    category: "Trousers",
    rating: 4.6,
    reviews: 203,
    isNew: false,
    onSale: true,
    description: "Premium navy trousers designed for the modern professional. Features a comfortable mid-rise fit with tapered legs, perfect for pairing with dress shirts and blazers for a polished look.",
    features: [
      "Premium Cotton Blend",
      "Mid-Rise Fit",
      "Tapered Leg Design",
      "Side Pockets",
      "Back Welt Pockets",
      "Machine Washable"
    ],
    sizes: ["28", "30", "32", "34", "36", "38", "40", "42"],
    colors: ["Navy", "Charcoal", "Black"],
    inStock: true
  }
};

const relatedProducts = [
  {
    id: 2,
    name: "Premium White Shirt",
    price: 129,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop"
  },
  {
    id: 3,
    name: "Charcoal Grey Blazer", 
    price: 399,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Classic Navy Trousers",
    price: 159,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop"
  }
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart, openCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  const product = productData[id as keyof typeof productData] || productData[1];

  // Reset component state when product changes and scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentImageIndex(0);
    setSelectedSize("");
    setSelectedColor("");
    setQuantity(1);
    setIsWishlisted(false);
    setActiveTab("details");
  }, [id]); // Trigger when product ID changes

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor
      });
    }

    // Open cart to show the added item
    openCart();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-black transition-colors">Products</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[4/5]">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-sm font-medium rounded">
                  New
                </span>
              )}
              {product.onSale && (
                <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-sm font-medium rounded">
                  Sale
                </span>
              )}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === index 
                      ? "border-black" 
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-2"
                >
                  <Heart 
                    className={`h-5 w-5 ${
                      isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
                    }`} 
                  />
                </Button>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Options */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Color: {selectedColor && <span className="text-gray-600">{selectedColor}</span>}
                </label>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                        selectedColor === color
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Size: {selectedSize && <span className="text-gray-600">{selectedSize}</span>}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-lg border-2 text-center transition-all duration-300 ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Quantity</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-medium transform hover:scale-105 transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-2 border-black text-black hover:bg-black hover:text-white py-4 text-lg font-medium"
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                <span className="text-sm text-gray-600">Quality Guarantee</span>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                <span className="text-sm text-gray-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {["details", "care", "shipping"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab === "details" ? "Product Details" : 
                   tab === "care" ? "Care Instructions" : "Shipping & Returns"}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="mt-8">
            <Card>
              <CardContent className="p-6">
                {activeTab === "details" && (
                  <>
                    <h3 className="text-lg font-semibold mb-4">Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {activeTab === "care" && (
                  <>
                    <h3 className="text-lg font-semibold mb-4">Care Instructions</h3>
                    <p className="text-gray-600">Dry clean only. Store on cedar hangers. Steam to remove wrinkles.</p>
                  </>
                )}
                {activeTab === "shipping" && (
                  <>
                    <h3 className="text-lg font-semibold mb-4">Shipping & Returns</h3>
                    <p className="text-gray-600">Free shipping on orders over $200. Express delivery available.</p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <Link to={`/product/${relatedProduct.id}`}>
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-64 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                    <p className="text-lg font-bold">${relatedProduct.price}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
