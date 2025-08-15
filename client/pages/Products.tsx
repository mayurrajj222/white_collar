import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Grid, List } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useCart } from '../contexts/CartContext';

const products = [
  {
    id: 1,
    name: "Executive Black Suit",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
    category: "Suits",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    onSale: true
  },
  {
    id: 2,
    name: "Premium White Shirt",
    price: 129,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
    category: "Shirts",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    onSale: true
  },
  {
    id: 3,
    name: "Charcoal Grey Blazer",
    price: 399,
    originalPrice: 529,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    category: "Blazers",
    rating: 4.7,
    reviews: 156,
    isNew: true,
    onSale: true
  },
  {
    id: 4,
    name: "Classic Navy Trousers",
    price: 159,
    originalPrice: 219,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
    category: "Trousers",
    rating: 4.6,
    reviews: 203,
    isNew: false,
    onSale: true
  },
  {
    id: 5,
    name: "Midnight Blue Suit",
    price: 649,
    originalPrice: 849,
    image: "https://images.unsplash.com/photo-1594938328870-28be88cb6718?w=600&h=800&fit=crop",
    category: "Suits",
    rating: 4.8,
    reviews: 98,
    isNew: true,
    onSale: true
  },
  {
    id: 6,
    name: "Slim Fit Oxford Shirt",
    price: 89,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
    category: "Shirts",
    rating: 4.5,
    reviews: 167,
    isNew: false,
    onSale: true
  }
];

const categories = ["All", "Suits", "Shirts", "Blazers", "Trousers", "Coats", "Formal"];

export default function Products() {
  const { addToCart, openCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filteredProducts = products.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleQuickAdd = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: "M", // Default size for quick add
      color: "Black" // Default color for quick add
    });
    openCart();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
              Our Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of premium menswear, carefully curated for the modern professional
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-black text-white" 
                    : "border-gray-300 hover:border-black hover:bg-black hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            <div className="flex border border-gray-300 rounded">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`rounded-none ${viewMode === "grid" ? "bg-black text-white" : ""}`}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("list")}
                className={`rounded-none ${viewMode === "list" ? "bg-black text-white" : ""}`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 bg-white animate-scaleIn ${
                viewMode === "list" ? "flex flex-row" : ""
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 h-48" : "w-full h-80"} rounded-t-lg`}>
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                
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

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute bottom-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      wishlist.includes(product.id) 
                        ? "fill-red-500 text-red-500" 
                        : "text-gray-600"
                    }`} 
                  />
                </Button>
              </div>
              
              <CardContent className={`${viewMode === "list" ? "flex-1" : ""} p-6`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                  {product.onSale && (
                    <span className="text-green-600 text-sm font-medium">
                      Save ${product.originalPrice - product.price}
                    </span>
                  )}
                </div>
                
                <Button
                  className="w-full bg-black hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleQuickAdd(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-black text-black hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}
