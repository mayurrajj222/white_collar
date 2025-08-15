import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useCart } from '../contexts/CartContext';

const featuredProducts = [
  {
    id: 1,
    name: "Executive Black Suit",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=800&fit=crop",
    category: "Suits",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Premium White Shirt",
    price: 129,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
    category: "Shirts",
    rating: 4.9,
    isNew: false
  },
  {
    id: 3,
    name: "Charcoal Grey Blazer",
    price: 399,
    originalPrice: 529,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    category: "Blazers",
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: "Classic Navy Trousers",
    price: 159,
    originalPrice: 219,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
    category: "Trousers",
    rating: 4.6,
    isNew: false
  }
];

const collections = [
  {
    name: "Executive Collection",
    description: "Power suits for the modern executive",
    image: "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=600&h=400&fit=crop",
    count: "12 pieces"
  },
  {
    name: "Casual Professional",
    description: "Smart casual for everyday elegance",
    image: "https://images.unsplash.com/photo-1506629905607-c0db21c8f39d?w=600&h=400&fit=crop",
    count: "8 pieces"
  },
  {
    name: "Evening Formal",
    description: "Sophisticated attire for special occasions",
    image: "https://images.unsplash.com/photo-1519872775884-b6f54f0a0ec2?w=600&h=400&fit=crop",
    count: "6 pieces"
  }
];

const testimonials = [
  {
    name: "Michael Thompson",
    role: "CEO, Tech Corp",
    content: "Outstanding quality and fit. White Collar has become my go-to for all professional attire.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "David Chen",
    role: "Investment Banker",
    content: "The attention to detail is incredible. Every piece feels custom-made.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Robert Williams",
    role: "Law Partner",
    content: "Exceptional service and premium quality. Highly recommended for professionals.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export default function Index() {
  const { addToCart, openCart } = useCart();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleQuickView = (product: typeof featuredProducts[0]) => {
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
    <div className="min-h-screen">
      {/* Hero Section - Inspired by Raymond */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop" 
            alt="Premium Menswear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className={`relative z-10 text-center max-w-6xl px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider border border-white/20">
              PREMIUM MENSWEAR COLLECTION
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tight">
            WHITE<br />
            <span className="text-gray-300">COLLAR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-6 font-light max-w-4xl mx-auto leading-relaxed">
            Trust, Quality, Excellence. Elevate your professional presence with our meticulously crafted suits, 
            premium shirts, and sophisticated accessories designed for leaders who accept nothing but the finest.
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Trusted by executives, entrepreneurs, and industry leaders worldwide. Experience the difference of true craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black px-12 py-6 text-lg font-bold transform hover:scale-105 transition-all duration-300 group shadow-2xl"
            >
              <Link to="/products">
                EXPLORE COLLECTION
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-lg font-bold transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <Link to="/about">OUR STORY</Link>
            </Button>
          </div>
        </div>

        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Trust Indicators - Raymond Style */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The White Collar <span className="text-gray-600">Promise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Excellence in every thread, precision in every stitch, perfection in every piece. Our commitment to quality is unwavering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  <Truck className="h-12 w-12 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Complimentary Delivery</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                White-glove delivery service for all orders above $299. Experience luxury from purchase to doorstep.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  <Shield className="h-12 w-12 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Lifetime Guarantee</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every piece comes with our signature lifetime craftsmanship guarantee. Your satisfaction, our commitment.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl w-24 h-24 flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  <Award className="h-12 w-12 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Master Craftsmanship</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Handpicked fabrics from Italian mills, tailored by master craftsmen with decades of expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Signature Collection
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Masterfully <span className="text-gray-600">Crafted</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each piece represents the pinnacle of sartorial excellence, meticulously designed for leaders who accept nothing less than perfection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={product.id} className="group cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border-0 bg-white overflow-hidden">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button
                      className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      onClick={() => handleQuickView(product)}
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">{product.category}</span>
                    <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-700 ml-1 font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-4 text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-semibold">
                      Save ${product.originalPrice - product.price}
                    </span>
                    <Link to={`/product/${product.id}`} className="text-sm text-gray-600 hover:text-black font-medium">
                      View Details →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              asChild 
              size="lg"
              className="bg-gray-900 hover:bg-black text-white px-12 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Link to="/products">
                EXPLORE ALL PRODUCTS
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              Curated Collections
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Signature <span className="text-gray-600">Lines</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three distinct collections, each tailored for specific moments in your professional journey. From boardroom presentations to evening galas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={collection.name} className="group cursor-pointer overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border-0 bg-white">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="mb-4">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {collection.count}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3 leading-tight">{collection.name}</h3>
                      <p className="text-lg opacity-90 mb-6 leading-relaxed">{collection.description}</p>
                      
                      <Button 
                        variant="outline" 
                        className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
                      >
                        EXPLORE COLLECTION
                      </Button>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Trusted by professionals who demand the finest in fashion and quality
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
                className="text-white hover:bg-white/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
                className="text-white hover:bg-white/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            <Card className="bg-white/10 border-0 text-center backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-300">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in Style</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive access to new collections, styling tips, and special offers
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white text-black border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-black hover:bg-gray-100 px-8 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
