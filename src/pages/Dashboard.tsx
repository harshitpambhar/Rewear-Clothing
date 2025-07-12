
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Shirt, 
  Star, 
  Bell, 
  MessageCircle, 
  Plus, 
  Award, 
  Package, 
  RefreshCw,
  CheckCircle,
  Clock,
  Eye,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface UserProfile {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  location?: string;
  avatar_url?: string;
}

interface UserItem {
  id: string;
  title: string;
  category: string;
  status: string;
  views: number;
  likes: number;
  images: string[];
  created_at: string;
}

// Mock data for demonstration
const mockUserItems: UserItem[] = [
  {
    id: '1',
    title: 'Vintage Denim Jacket',
    category: 'Outerwear',
    status: 'active',
    views: 45,
    likes: 12,
    images: ['https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=300&h=300&fit=crop'],
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Classic White Sneakers',
    category: 'Shoes',
    status: 'active',
    views: 32,
    likes: 8,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop'],
    created_at: '2024-01-10T14:20:00Z'
  },
  {
    id: '3',
    title: 'Summer Dress',
    category: 'Dresses',
    status: 'swapped',
    views: 67,
    likes: 15,
    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=300&fit=crop'],
    created_at: '2024-01-05T09:15:00Z'
  }
];

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [userItems, setUserItems] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProfile();
      fetchUserItems();
    }
  }, [user]);

  const fetchUserProfile = async () => {
    if (!user) return;

    // Mock profile data
    const mockProfile: UserProfile = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      location: user.location,
      avatar_url: user.avatar_url
    };

    setProfile(mockProfile);
  };

  const fetchUserItems = async () => {
    if (!user) return;

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUserItems(mockUserItems);
    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "swapped": return "bg-blue-100 text-blue-800";
      case "removed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "Live";
      case "pending": return "Pending Approval";
      case "swapped": return "Swapped";
      case "removed": return "Removed";
      default: return status;
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const userName = profile ? `${profile.first_name || ''} ${profile.last_name || ''}`.trim() : user?.email || 'User';
  const userInitials = profile ? `${profile.first_name?.[0] || ''}${profile.last_name?.[0] || ''}` : user?.email?.[0]?.toUpperCase() || 'U';

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
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-1" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
              <Avatar>
                <AvatarImage src={profile?.avatar_url} alt={userName} />
                <AvatarFallback>{userInitials}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={profile?.avatar_url} alt={userName} />
                  <AvatarFallback className="text-lg">{userInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">{userName}</CardTitle>
                  <CardDescription className="text-base">{profile?.email || user?.email}</CardDescription>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Community Member
                    </Badge>
                    {profile?.location && (
                      <span className="text-sm text-gray-600">{profile.location}</span>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">Total Swaps</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{userItems.length}</div>
                  <div className="text-sm text-gray-600">Items Listed</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-2xl font-bold text-yellow-600">
                    <Star className="w-6 h-6 mr-1" />
                    5.0
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/upload">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Item
                </Button>
              </Link>
              <Link to="/browse">
                <Button variant="outline" className="w-full">
                  <Shirt className="w-4 h-4 mr-2" />
                  Browse Items
                </Button>
              </Link>
              <Link to="/eco-shop">
                <Button variant="outline" className="w-full">
                  <Award className="w-4 h-4 mr-2" />
                  Eco Shop
                </Button>
              </Link>
              <Button variant="outline" className="w-full" disabled>
                <MessageCircle className="w-4 h-4 mr-2" />
                Messages (Coming Soon)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="closet" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="closet">My Closet</TabsTrigger>
            <TabsTrigger value="swaps">Swaps</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* My Closet */}
          <TabsContent value="closet">
            <Card>
              <CardHeader>
                <CardTitle>My Digital Closet</CardTitle>
                <CardDescription>Manage your uploaded items and track their performance</CardDescription>
              </CardHeader>
              <CardContent>
                {userItems.length === 0 ? (
                  <div className="text-center py-12">
                    <Shirt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No items yet</h3>
                    <p className="text-gray-600 mb-6">
                      Start building your digital closet by listing your first item!
                    </p>
                    <Link to="/upload">
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Plus className="w-4 h-4 mr-2" />
                        List Your First Item
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userItems.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <div className="aspect-square overflow-hidden bg-gray-100">
                          {item.images && item.images.length > 0 ? (
                            <img 
                              src={item.images[0]} 
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Package className="w-16 h-16 text-gray-300" />
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <Badge className={`mb-3 ${getStatusColor(item.status)}`}>
                            {getStatusLabel(item.status)}
                          </Badge>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Eye className="w-4 h-4" />
                              <span>{item.views || 0}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Heart className="w-4 h-4" />
                              <span>{item.likes || 0}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Swaps */}
          <TabsContent value="swaps">
            <Card>
              <CardHeader>
                <CardTitle>My Swaps</CardTitle>
                <CardDescription>Track your ongoing and completed swaps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <RefreshCw className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No swaps yet</h3>
                  <p className="text-gray-600 mb-6">
                    Start browsing items to make your first swap!
                  </p>
                  <Link to="/browse">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Browse Items
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your account information and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Account Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <p className="text-sm text-gray-900">{userName}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <p className="text-sm text-gray-900">{profile?.email || user?.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <p className="text-sm text-gray-900">{profile?.location || 'Not specified'}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                        <p className="text-sm text-gray-900">
                          {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Recently'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Button className="bg-green-600 hover:bg-green-700" disabled>
                      Edit Profile (Coming Soon)
                    </Button>
                    <Button variant="outline" disabled>
                      Change Password (Coming Soon)
                    </Button>
                    <Button variant="outline" disabled>
                      Privacy Settings (Coming Soon)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
