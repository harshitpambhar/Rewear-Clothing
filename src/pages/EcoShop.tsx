
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle, Leaf, Award, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const EcoShop = () => {
  const { toast } = useToast();
  const [userPoints] = useState(350); // Mock user points

  const ecoProducts = [
    {
      id: 1,
      name: "Bamboo Fiber T-Shirt",
      description: "Soft, breathable, and sustainable bamboo fiber t-shirt",
      points: 200,
      category: "Clothing",
      sustainability: "100% Bamboo Fiber",
      inStock: true,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Organic Cotton Tote Bag",
      description: "Durable tote bag made from organic cotton",
      points: 80,
      category: "Accessories",
      sustainability: "Organic Cotton",
      inStock: true,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Recycled Plastic Water Bottle",
      description: "Reusable water bottle made from recycled ocean plastic",
      points: 120,
      category: "Lifestyle",
      sustainability: "Recycled Ocean Plastic",
      inStock: true,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Hemp Backpack",
      description: "Stylish and durable backpack made from hemp fiber",
      points: 300,
      category: "Accessories",
      sustainability: "100% Hemp Fiber",
      inStock: false,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Solar Power Bank",
      description: "Portable solar charger for eco-friendly power on the go",
      points: 250,
      category: "Tech",
      sustainability: "Solar Powered",
      inStock: true,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Biodegradable Phone Case",
      description: "Protective phone case that naturally decomposes",
      points: 150,
      category: "Tech",
      sustainability: "Biodegradable Material",
      inStock: true,
      image: "/placeholder.svg"
    }
  ];

  const handleRedeem = (product: typeof ecoProducts[0]) => {
    if (userPoints >= product.points) {
      toast({
        title: "Item Redeemed!",
        description: `You've successfully redeemed ${product.name} for ${product.points} points.`,
      });
    } else {
      toast({
        title: "Insufficient Points",
        description: `You need ${product.points - userPoints} more points to redeem this item.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">ReWear</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/browse" className="text-gray-700 hover:text-green-600 transition-colors">Browse Items</Link>
              <Link to="/eco-shop" className="text-green-600 font-medium">Eco Shop</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors">Dashboard</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-green-600" />
                <span className="text-green-700 font-medium">{userPoints} points</span>
              </div>
              <Link to="/login">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Eco Shop</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Redeem your points for sustainable products that make a positive impact on the environment
          </p>
        </div>

        {/* User Points Display */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Your ReWear Points</h2>
                <p className="text-green-600">Earn more points by uploading items and completing swaps!</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-green-600 mb-2">{userPoints}</div>
                <div className="flex items-center text-green-700">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Available Points</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Badge variant="outline" className="px-4 py-2 text-sm">All Items</Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">Clothing</Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">Accessories</Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">Lifestyle</Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">Tech</Badge>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecoProducts.map((product) => (
            <Card key={product.id} className={`hover:shadow-lg transition-shadow ${!product.inStock ? 'opacity-75' : ''}`}>
              <div className="aspect-square bg-gray-200 rounded-t-lg flex items-center justify-center relative">
                <Leaf className="h-20 w-20 text-gray-400" />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-green-600" />
                    <span className="text-green-700 font-semibold text-sm">{product.points}</span>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{product.category}</Badge>
                  <div className="flex items-center text-sm text-green-600">
                    <Leaf className="h-3 w-3 mr-1" />
                    {product.sustainability}
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
                  disabled={!product.inStock || userPoints < product.points}
                  onClick={() => handleRedeem(product)}
                >
                  {!product.inStock ? (
                    "Out of Stock"
                  ) : userPoints < product.points ? (
                    `Need ${product.points - userPoints} more points`
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Redeem for {product.points} points
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">How Eco Shop Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Earn Points</h3>
              <p className="text-gray-600">Upload items and complete swaps to earn ReWear points</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose Products</h3>
              <p className="text-gray-600">Browse our selection of sustainable, eco-friendly products</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Redeem & Enjoy</h3>
              <p className="text-gray-600">Use your points to get amazing eco-friendly products delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoShop;
