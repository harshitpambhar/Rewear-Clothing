
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Recycle, User, Shield, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [adminForm, setAdminForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted with:', userForm);
    
    if (!userForm.email || !userForm.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    console.log('Calling signIn function...');
    const { error } = await signIn(userForm.email, userForm.password);
    console.log('SignIn completed, error:', error);
    
    if (error) {
      console.log('Login failed with error:', error);
      toast({
        title: "Login Failed",
        description: error.message || "Invalid email or password",
        variant: "destructive"
      });
      setLoading(false);
    } else {
      console.log('Login successful, navigating to dashboard');
      toast({
        title: "Login Successful!",
        description: "Welcome back to ReWear community",
      });
      navigate("/dashboard");
    }
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminForm.email || !adminForm.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    const { error } = await signIn(adminForm.email, adminForm.password);
    
    if (error) {
      toast({
        title: "Admin Login Failed",
        description: error.message || "Invalid admin credentials",
        variant: "destructive"
      });
      setLoading(false);
    } else {
      toast({
        title: "Admin Login Successful!",
        description: "Welcome to ReWear Admin Panel",
      });
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <Recycle className="h-10 w-10 text-green-600" />
            <span className="text-3xl font-bold text-green-800">ReWear</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue your sustainable fashion journey</p>
        </div>

        {/* Login Tabs */}
        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="user" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>User Login</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Admin Login</span>
            </TabsTrigger>
          </TabsList>

          {/* User Login */}
          <TabsContent value="user">
            <Card className="border-0 shadow-lg">
              <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-xl">User Portal</CardTitle>
                <CardDescription>
                  Access your digital closet and manage your swaps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUserLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="user-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={userForm.email}
                        onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="user-password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10"
                        value={userForm.password}
                        onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={loading}
                  >
                    {loading ? "Signing In..." : "Sign In as User"}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin Login */}
          <TabsContent value="admin">
            <Card className="border-0 shadow-lg">
              <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-xl">Admin Portal</CardTitle>
                <CardDescription>
                  Manage listings, users, and moderate content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="Enter admin email"
                        className="pl-10"
                        value={adminForm.email}
                        onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Admin Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="Enter admin password"
                        className="pl-10"
                        value={adminForm.password}
                        onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? "Signing In..." : "Sign In as Admin"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-600 hover:underline font-medium">
              Join ReWear today
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
