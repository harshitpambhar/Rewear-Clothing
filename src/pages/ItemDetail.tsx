
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Recycle, 
  ArrowLeft, 
  Star, 
  MapPin, 
  Calendar, 
  Heart, 
  MessageCircle, 
  Share2,
  ChevronLeft,
  ChevronRight,
  User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ItemDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock item data - in real app, fetch based on id
  const item = {
    id: 1,
    title: "Vintage Denim Jacket",
    description: "This beautiful vintage denim jacket is in excellent condition. Perfect for layering and adding a classic touch to any outfit. Features original vintage buttons and has been well-maintained. Great for casual wear or dressing up a simple outfit.",
    category: "Outerwear",
    size: "M",
    condition: "Excellent",
    points: 150,
    user: {
      name: "Sarah M.",
      avatar: "/placeholder.svg",
      rating: 4.8,
      completedSwaps: 23,
      joinedDate: "March 2023"
    },
    location: "Downtown, NYC",
    uploadedDate: "2 days ago",
    tags: ["vintage", "denim", "casual", "classic"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    measurements: {
      chest: "42 inches",
      length: "24 inches",
      sleeves: "23 inches"
    },
    material: "100% Cotton Denim",
    brand: "Vintage Lee",
    swapHistory: [
      { user: "Emma K.", date: "Last month", rating: 5 },
      { user: "Mike R.", date: "3 months ago", rating: 4 }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const handleRequestSwap = () => {
    toast({
      title: "Swap Request Sent!",
      description: "Your swap request has been sent to Sarah M. They will respond shortly.",
    });
  };

  const handleRedeemPoints = () => {
    toast({
      title: "Points Redeemed!",
      description: `You've redeemed this item for ${item.points} points. Contact details will be shared.`,
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from favorites" : "Added to favorites",
      description: isLiked ? "Item removed from your favorites" : "Item added to your favorites",
    });
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
            <Link to="/browse">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Browse</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-8xl text-gray-400">👕</div>
              </div>
              {item.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Images */}
            {item.images.length > 1 && (
              <div className="flex space-x-2">
                {item.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center ${
                      currentImageIndex === index ? 'ring-2 ring-green-500' : ''
                    }`}
                  >
                    <div className="text-2xl text-gray-400">👕</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLike}
                    className={isLiked ? 'text-red-500 border-red-500' : ''}
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-green-600 fill-current" />
                  <span className="text-green-700 font-semibold">{item.points} points</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.location}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.uploadedDate}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">{item.category}</Badge>
                <Badge variant="outline">Size {item.size}</Badge>
                <Badge variant="outline">{item.condition}</Badge>
                <Badge variant="outline">{item.brand}</Badge>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            {/* Details */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Item Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Material:</span>
                  <span className="ml-2 font-medium">{item.material}</span>
                </div>
                <div>
                  <span className="text-gray-500">Brand:</span>
                  <span className="ml-2 font-medium">{item.brand}</span>
                </div>
                <div>
                  <span className="text-gray-500">Chest:</span>
                  <span className="ml-2 font-medium">{item.measurements.chest}</span>
                </div>
                <div>
                  <span className="text-gray-500">Length:</span>
                  <span className="ml-2 font-medium">{item.measurements.length}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                onClick={handleRequestSwap}
              >
                Request Swap
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-lg py-6"
                onClick={handleRedeemPoints}
              >
                Redeem with {item.points} Points
              </Button>
              <Button variant="outline" className="w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message Owner
              </Button>
            </div>
          </div>
        </div>

        {/* Owner Info */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>About the Owner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={item.user.avatar} />
                <AvatarFallback>
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.user.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{item.user.rating} rating</span>
                  </div>
                  <span>{item.user.completedSwaps} completed swaps</span>
                  <span>Joined {item.user.joinedDate}</span>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Similar Items */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <div className="text-4xl text-gray-400">👕</div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Similar Item {i}</CardTitle>
                  <CardDescription>Great condition item</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">M</Badge>
                    <div className="flex items-center text-green-600">
                      <Star className="h-3 w-3 fill-current mr-1" />
                      <span className="text-sm font-medium">120</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
