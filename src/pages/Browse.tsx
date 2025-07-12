
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Heart, Eye, Package, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  size: string;
  condition: string;
  type?: string;
  tags: string[];
  location?: string;
  images: string[];
  views: number;
  likes: number;
  created_at: string;
}

// Mock items data
const mockItems: Item[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    description: 'Classic vintage denim jacket in excellent condition. Perfect for layering.',
    category: 'Outerwear',
    size: 'M',
    condition: 'Excellent',
    type: "Men's",
    tags: ['Vintage', 'Denim', 'Classic'],
    location: 'New York',
    images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=300&h=300&fit=crop'],
    views: 45,
    likes: 12,
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Designer Summer Dress',
    description: 'Beautiful summer dress with floral pattern. Light and comfortable.',
    category: 'Dresses',
    size: 'S',
    condition: 'Like New',
    type: "Women's",
    tags: ['Designer', 'Summer', 'Elegant'],
    location: 'Los Angeles',
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop'],
    views: 67,
    likes: 15,
    created_at: '2024-01-10T14:20:00Z'
  },
  {
    id: '3',
    title: 'Classic White Sneakers',
    description: 'Comfortable white sneakers in very good condition. Perfect for everyday wear.',
    category: 'Shoes',
    size: '9',
    condition: 'Very Good',
    type: "Unisex",
    tags: ['Sneakers', 'Classic', 'Comfortable'],
    location: 'San Francisco',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop'],
    views: 32,
    likes: 8,
    created_at: '2024-01-05T09:15:00Z'
  },
  {
    id: '4',
    title: 'Casual T-Shirt',
    description: 'Soft cotton t-shirt in good condition. Great for casual outings.',
    category: 'Tops',
    size: 'L',
    condition: 'Good',
    type: "Men's",
    tags: ['Casual', 'Cotton', 'Comfortable'],
    location: 'Chicago',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop'],
    views: 28,
    likes: 5,
    created_at: '2024-01-12T11:45:00Z'
  },
  {
    id: '5',
    title: 'Leather Handbag',
    description: 'Stylish leather handbag in excellent condition. Perfect for work or casual use.',
    category: 'Accessories',
    size: 'One Size',
    condition: 'Excellent',
    type: "Women's",
    tags: ['Leather', 'Stylish', 'Professional'],
    location: 'Miami',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop'],
    views: 89,
    likes: 23,
    created_at: '2024-01-08T16:30:00Z'
  }
];

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, signOut } = useAuth();

  const categories = [
    "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", 
    "Accessories", "Activewear", "Formal", "Casual", "Vintage"
  ];

  const sizes = [
    "XS", "S", "M", "L", "XL", "XXL", "6", "7", "8", "9", "10", "11", "12"
  ];

  const conditions = [
    "Like New", "Excellent", "Very Good", "Good", "Fair"
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setItems(mockItems);
    setLoading(false);
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSize = selectedSize === "all" || item.size === selectedSize;
    const matchesCondition = selectedCondition === "all" || item.condition === selectedCondition;
    
    return matchesSearch && matchesCategory && matchesSize && matchesCondition;
  });

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Like New": return "bg-green-100 text-green-800";
      case "Excellent": return "bg-blue-100 text-blue-800";
      case "Very Good": return "bg-purple-100 text-purple-800";
      case "Good": return "bg-yellow-100 text-yellow-800";
      case "Fair": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-800">ReWear</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-1" />
                  Dashboard
                </Button>
              </Link>
              {user && (
                <Button variant="outline" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              )}
              {!user && (
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Sustainable Fashion</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover unique pre-loved clothing from our community. Every swap makes a difference for our planet.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search items, brands, or styles..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full sm:w-[100px]">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  {sizes.map(size => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger className="w-full sm:w-[120px]">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  {conditions.map(condition => (
                    <SelectItem key={condition} value={condition}>
                      {condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            {searchTerm && (
              <span> for "<span className="font-medium">{searchTerm}</span>"</span>
            )}
          </p>
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || selectedCategory !== "all" || selectedSize !== "all" || selectedCondition !== "all"
                ? "Try adjusting your search or filters to find more items."
                : "Be the first to list an item in our community!"
              }
            </p>
            <Link to="/upload">
              <Button className="bg-green-600 hover:bg-green-700">
                List Your First Item
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    {item.images && item.images.length > 0 ? (
                      <img 
                        src={item.images[0]} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-16 h-16 text-gray-300" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 truncate flex-1 mr-2">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {item.size}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`text-xs ${getConditionColor(item.condition)}`}>
                        {item.condition}
                      </Badge>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {item.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views || 0}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes || 0}</span>
                        </div>
                      </div>
                      {item.location && (
                        <span className="text-xs truncate max-w-[100px]">
                          {item.location}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
