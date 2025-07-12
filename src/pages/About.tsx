
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Heart, Users, Award, Leaf, ArrowRight, Globe, Shirt, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Passionate about sustainable fashion and circular economy",
      image: "/placeholder.svg"
    },
    {
      name: "Alex Rodriguez",
      role: "Head of Technology",
      bio: "Building technology that connects communities",
      image: "/placeholder.svg"
    },
    {
      name: "Maya Patel",
      role: "Sustainability Director",
      bio: "Expert in environmental impact and sustainable practices",
      image: "/placeholder.svg"
    },
    {
      name: "Jordan Kim",
      role: "Community Manager",
      bio: "Fostering connections within the ReWear community",
      image: "/placeholder.svg"
    }
  ];

  const milestones = [
    { year: "2023", event: "ReWear Founded", description: "Started with a vision to make fashion sustainable" },
    { year: "2023", event: "First 1,000 Users", description: "Built our initial community of eco-conscious fashion lovers" },
    { year: "2024", event: "10,000 Items Swapped", description: "Reached our first major milestone in clothing exchanges" },
    { year: "2024", event: "Carbon Neutral Platform", description: "Achieved carbon neutrality across all operations" }
  ];

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
              <Link to="/eco-shop" className="text-gray-700 hover:text-green-600 transition-colors">Eco Shop</Link>
              <Link to="/about" className="text-green-600 font-medium">About</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">ReWear</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're on a mission to transform the fashion industry by creating a sustainable community 
            where clothes get a second life instead of ending up in landfills.
          </p>
          <div className="flex justify-center">
            <Heart className="h-16 w-16 text-green-600" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2 border-green-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To revolutionize fashion consumption by building a global community where clothing 
                  is shared, swapped, and reused. We believe that every piece of clothing deserves 
                  multiple lives, and every person deserves access to sustainable fashion choices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-green-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A world where fast fashion is obsolete, where communities are connected through 
                  sustainable practices, and where everyone can express their style while caring 
                  for our planet. We envision a circular fashion economy that benefits everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Environmental Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Shirt className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <div className="text-4xl font-bold mb-2">12,450</div>
              <div className="text-green-100">Items Given New Life</div>
            </div>
            <div>
              <Leaf className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <div className="text-4xl font-bold mb-2">8,200kg</div>
              <div className="text-green-100">CO₂ Emissions Saved</div>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <div className="text-4xl font-bold mb-2">15,000</div>
              <div className="text-green-100">Community Members</div>
            </div>
            <div>
              <Globe className="h-12 w-12 mx-auto mb-4 text-green-200" />
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-green-100">Cities Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Started */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It All Started</h2>
            <p className="text-xl text-gray-600">The story behind ReWear</p>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              ReWear was born from a simple observation: our closets are full of clothes we rarely wear, 
              while the fashion industry continues to produce at an unsustainable pace.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our founder, Sarah Chen, noticed this pattern in her own life and among her friends. 
              Despite having wardrobes full of clothes, they often felt like they had "nothing to wear." 
              Meanwhile, perfectly good clothing items sat unused, contributing to the global textile waste problem.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The idea was simple: what if we could create a platform where people could easily exchange 
              clothes with others in their community? What if we could make sustainable fashion choices 
              as convenient and rewarding as traditional shopping?
            </p>
            <p className="text-lg leading-relaxed">
              Today, ReWear has grown into a global community of fashion-forward, environmentally conscious 
              individuals who believe that style and sustainability can go hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in building ReWear</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The people behind ReWear</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Sustainability First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every decision we make considers its environmental impact. We're committed to reducing 
                  waste and promoting circular fashion.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our community is at the heart of everything we do. We build features and make decisions 
                  based on what our members need.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Accessible Fashion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Everyone deserves access to great fashion, regardless of budget. We make style 
                  accessible through our community-driven approach.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Be part of the sustainable fashion movement. Start swapping today.
          </p>
          <Link to="/register">
            <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4">
              Join ReWear <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
