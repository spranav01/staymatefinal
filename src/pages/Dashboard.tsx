
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Home, MessageCircle, Search, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  const userStats = [
    { label: "Profile Views", value: "34" },
    { label: "Potential Matches", value: "12" },
    { label: "Messages", value: "5" },
    { label: "Saved Listings", value: "8" },
  ];

  const recentActivity = [
    { type: "view", name: "Sarah Thompson", time: "2 hours ago" },
    { type: "message", name: "Michael Chen", time: "1 day ago" },
    { type: "match", name: "Emily Rodriguez", time: "2 days ago" },
    { type: "save", name: "David Wilson", time: "3 days ago" },
  ];

  const recommendedSteps = [
    { 
      title: "Complete Your Profile", 
      description: "Add more details to get better matches",
      icon: User,
      progress: 75,
      action: "Complete",
      link: "/create-profile"
    },
    { 
      title: "Refine Your Preferences", 
      description: "Specify more details about your ideal roommate",
      icon: Search,
      progress: 60,
      action: "Refine",
      link: "/roommate-preferences"
    },
    { 
      title: "Browse Available Matches", 
      description: "Check out compatible roommate options",
      icon: Heart,
      progress: 0,
      action: "Browse",
      link: "/matches"
    },
    { 
      title: "List Your Property", 
      description: "Do you have a space to share?",
      icon: Home,
      progress: 0,
      action: "List Now",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
            <p className="text-gray-600">Here's what's happening with your roommate search</p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {userStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recommended Next Steps */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Recommended Next Steps</h2>
                <div className="space-y-6">
                  {recommendedSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                        <step.icon size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{step.title}</h3>
                          {step.progress > 0 ? (
                            <span className="text-sm text-gray-600">{step.progress}% Complete</span>
                          ) : (
                            <span className="text-sm text-gray-600">Not Started</span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                          <div 
                            className="bg-primary h-1.5 rounded-full" 
                            style={{ width: `${step.progress}%` }}
                          ></div>
                        </div>
                        <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                          <Link to={step.link}>{step.action}</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recent Matches</h2>
                  <Link to="/matches" className="text-primary hover:underline">View All</Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-24 bg-gray-200">
                        <img 
                          src={`https://source.unsplash.com/random/300x200?portrait&sig=${index}`}
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">Jane Doe</h3>
                          <span className="text-sm text-white bg-primary px-2 py-0.5 rounded-full">94%</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">28 • Professional</p>
                        <div className="flex justify-between">
                          <Button size="sm" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                            <MessageCircle size={16} className="mr-1" />
                            Message
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Heart size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar with Activity & Messages */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                        {activity.type === "view" && <User size={16} />}
                        {activity.type === "message" && <MessageCircle size={16} />}
                        {activity.type === "match" && <Heart size={16} />}
                        {activity.type === "save" && <Home size={16} />}
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">{activity.name}</span>
                          {activity.type === "view" && " viewed your profile"}
                          {activity.type === "message" && " sent you a message"}
                          {activity.type === "match" && " matched with you"}
                          {activity.type === "save" && " saved your listing"}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="ghost">View All Activity</Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Messages</h2>
                <div className="space-y-4">
                  {["Sarah Thompson", "Michael Chen", "Emily Rodriguez"].map((name, index) => (
                    <div key={index} className="flex items-center pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                        <img 
                          src={`https://source.unsplash.com/random/100x100?face&sig=${index}`}
                          alt={name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-gray-600 truncate">Hey there! I'm interested in...</p>
                      </div>
                      <div className="text-xs text-gray-500">
                        {index === 0 ? "Just now" : index === 1 ? "2h ago" : "1d ago"}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="ghost">View All Messages</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
