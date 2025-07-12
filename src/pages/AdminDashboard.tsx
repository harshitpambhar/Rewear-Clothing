
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  Users, 
  Flag, 
  Search,
  Filter,
  Eye,
  Trash2,
  MoreHorizontal,
  Package,
  AlertTriangle,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock data for pending items
  const pendingItems = [
    {
      id: 1,
      title: "Vintage Band T-Shirt",
      category: "Tops",
      user: "John Doe",
      userEmail: "john@example.com",
      submittedAt: "2024-01-15 10:30 AM",
      condition: "Good",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150"],
      description: "Vintage Nirvana band t-shirt from the 90s, some fading but still in good condition."
    },
    {
      id: 2,
      title: "Designer Handbag",
      category: "Accessories",
      user: "Sarah Smith",
      userEmail: "sarah@example.com",
      submittedAt: "2024-01-15 09:15 AM",
      condition: "Like New",
      images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150"],
      description: "Authentic designer handbag, barely used, comes with original dust bag."
    },
    {
      id: 3,
      title: "Summer Dress",
      category: "Dresses",
      user: "Emma Wilson",
      userEmail: "emma@example.com",
      submittedAt: "2024-01-15 08:45 AM",
      condition: "Excellent",
      images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=150"],
      description: "Beautiful floral summer dress, perfect for warm weather occasions."
    }
  ];

  // Mock data for reported items
  const reportedItems = [
    {
      id: 1,
      title: "Questionable Item Quality",
      reportedItem: "Designer Jacket",
      reporter: "User123",
      reason: "Item condition doesn't match description",
      reportedAt: "2024-01-14 3:30 PM",
      status: "Under Review"
    },
    {
      id: 2,
      title: "Inappropriate Content",
      reportedItem: "Graphic T-Shirt",
      reporter: "User456",
      reason: "Offensive graphics on clothing",
      reportedAt: "2024-01-14 1:15 PM",
      status: "Resolved"
    }
  ];

  // Mock data for users
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      joinDate: "2024-01-01",
      totalItems: 12,
      totalSwaps: 8,
      rating: 4.5,
      status: "Active"
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      joinDate: "2024-01-05",
      totalItems: 6,
      totalSwaps: 4,
      rating: 4.8,
      status: "Active"
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma@example.com",
      joinDate: "2024-01-10",
      totalItems: 3,
      totalSwaps: 2,
      rating: 4.2,
      status: "Suspended"
    }
  ];

  const stats = [
    { title: "Pending Approvals", value: "23", icon: Package, color: "text-yellow-600" },
    { title: "Total Users", value: "1,247", icon: Users, color: "text-blue-600" },
    { title: "Active Reports", value: "5", icon: Flag, color: "text-red-600" },
    { title: "Items This Week", value: "89", icon: TrendingUp, color: "text-green-600" }
  ];

  const handleApprove = (itemId: number) => {
    console.log(`Approved item ${itemId}`);
    // API call to approve item
  };

  const handleReject = (itemId: number) => {
    console.log(`Rejected item ${itemId}`);
    // API call to reject item
  };

  const handleSuspendUser = (userId: number) => {
    console.log(`Suspended user ${userId}`);
    // API call to suspend user
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-800">ReWear Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800">Administrator</Badge>
              <Link to="/">
                <Button variant="outline" size="sm">
                  View Site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="items">Pending Items</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Pending Items */}
          <TabsContent value="items">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Items Pending Approval</CardTitle>
                    <CardDescription>Review and moderate submitted clothing items</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search items..."
                        className="pl-10 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pendingItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-6 bg-white">
                      <div className="flex items-start space-x-6">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                              <div className="flex items-center space-x-4 mt-2">
                                <Badge variant="secondary">{item.category}</Badge>
                                <Badge variant="outline">{item.condition}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div>
                                <span className="font-medium">Submitted by:</span> {item.user} ({item.userEmail})
                              </div>
                              <div>
                                <span className="font-medium">Date:</span> {item.submittedAt}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 mt-4">
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleApprove(item.id)}
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleReject(item.id)}
                            >
                              <XCircle className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Monitor and manage platform users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">User</th>
                        <th className="text-left py-3 px-4">Join Date</th>
                        <th className="text-left py-3 px-4">Items</th>
                        <th className="text-left py-3 px-4">Swaps</th>
                        <th className="text-left py-3 px-4">Rating</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">{user.joinDate}</td>
                          <td className="py-3 px-4 text-sm">{user.totalItems}</td>
                          <td className="py-3 px-4 text-sm">{user.totalSwaps}</td>
                          <td className="py-3 px-4 text-sm">{user.rating}★</td>
                          <td className="py-3 px-4">
                            <Badge className={user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => handleSuspendUser(user.id)}
                              >
                                <AlertTriangle className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports */}
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Content Reports</CardTitle>
                <CardDescription>Review and resolve user reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportedItems.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4 bg-white">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{report.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Item:</span> {report.reportedItem}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Reported by:</span> {report.reporter}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Reason:</span> {report.reason}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">{report.reportedAt}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={report.status === "Resolved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                            {report.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          {report.status === "Under Review" && (
                            <Button size="sm" variant="destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Items Listed</span>
                      <span className="text-lg font-bold">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Successful Swaps</span>
                      <span className="text-lg font-bold">1,523</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Active Users</span>
                      <span className="text-lg font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Avg. Response Time</span>
                      <span className="text-lg font-bold">2.4 hrs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="font-medium">15 new items</span> submitted for approval
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">8 swaps</span> completed today
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">3 new users</span> joined today
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">2 reports</span> resolved
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
