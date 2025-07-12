
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Recycle, 
  Heart, 
  Users, 
  Leaf, 
  Star, 
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Package,
  Shirt,
  Award,
  MessageSquare,
  Search,
  Upload,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user } = useAuth();

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      condition: "Excellent",
      size: "M",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=300&h=300&fit=crop",
      tags: ["Vintage", "Denim", "Classic"]
    },
    {
      id: 2,
      title: "Designer Summer Dress",
      condition: "Like New", 
      size: "S",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop",
      tags: ["Designer", "Summer", "Elegant"]
    },
    {
      id: 3,
      title: "Classic White Sneakers",
      condition: "Very Good",
      size: "9",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      tags: ["Sneakers", "Classic", "Comfortable"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">ReWear</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/browse" className="text-gray-700 hover:text-green-600 transition-colors">
                Browse
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="outline" size="sm">
                      Dashboard
                    </Button>
                  </Link>
                  <Link to="/upload">
                    <Button className="bg-green-600 hover:bg-green-700" size="sm">
                      List Item
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" size="sm">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="bg-green-600 hover:bg-green-700" size="sm">
                      Join Now
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Give Fashion a{" "}
              <span className="text-green-600">Second Life</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of conscious fashion lovers in our sustainable community. 
              Swap, discover, and reduce fashion waste while finding your next favorite outfit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/browse">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Search className="w-5 h-5 mr-2" />
                  Start Browsing
                </Button>
              </Link>
              {user ? (
                <Link to="/upload">
                  <Button size="lg" variant="outline">
                    <Upload className="w-5 h-5 mr-2" />
                    List Your Items
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button size="lg" variant="outline">
                    Join Community
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Items Swapped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25K+</div>
              <div className="text-gray-600">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Cities Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500T</div>
              <div className="text-gray-600">CO2 Saved (lbs)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Items
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover unique pieces from our community members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {item.condition}
                    </Badge>
                    <span className="text-sm text-gray-600">Size {item.size}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/browse">
              <Button className="bg-green-600 hover:bg-green-700">
                View All Items
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How ReWear Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to start your sustainable fashion journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">List Your Items</h3>
              <p className="text-gray-600">
                Upload photos and details of clothes you no longer wear
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover & Connect</h3>
              <p className="text-gray-600">
                Browse items from other members and find your perfect match
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Swap & Enjoy</h3>
              <p className="text-gray-600">
                Complete the swap and enjoy your new sustainable fashion finds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Environmental Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Together, we're making a real difference for our planet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">2.5M</div>
                <div className="text-gray-600">Gallons of Water Saved</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">500</div>
                <div className="text-gray-600">Tons CO2 Reduced</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <Recycle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">50K</div>
                <div className="text-gray-600">Items Kept in Circulation</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-gray-600">Waste Reduction Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of conscious fashion lovers and start your sustainable journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <>
                <Link to="/upload">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Upload className="w-5 h-5 mr-2" />
                    List Your First Item
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                    <Search className="w-5 h-5 mr-2" />
                    Start Shopping
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/register">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Join ReWear Today
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                    Browse Items
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Recycle className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-green-800">ReWear</span>
              </div>
              <p className="text-gray-600 mb-4">
                Building a sustainable fashion community, one swap at a time.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/browse" className="hover:text-green-600">Browse Items</Link></li>
                <li><Link to="/about" className="hover:text-green-600">How it Works</Link></li>
                <li><Link to="/eco-shop" className="hover:text-green-600">Eco Shop</Link></li>
                <li><Link to="#" className="hover:text-green-600">Mobile App</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-green-600">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
                <li><Link to="#" className="hover:text-green-600">Careers</Link></li>
                <li><Link to="#" className="hover:text-green-600">Press</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="#" className="hover:text-green-600">Help Center</Link></li>
                <li><Link to="#" className="hover:text-green-600">Safety</Link></li>
                <li><Link to="#" className="hover:text-green-600">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-green-600">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 ReWear. All rights reserved. Built with sustainability in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
