
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatchCard from "@/components/MatchCard";

const Matches = () => {
  const [compatibilityFilter, setCompatibilityFilter] = useState([70]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data for roommate matches
  const matches = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      occupation: "Software Developer",
      compatibilityScore: 96,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Downtown, New York",
      budget: "$1,200 - $1,800/month"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 25,
      occupation: "Graphic Designer",
      compatibilityScore: 92,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Brooklyn, New York",
      budget: "$1,000 - $1,500/month"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      age: 27,
      occupation: "Marketing Manager",
      compatibilityScore: 88,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Queens, New York",
      budget: "$1,400 - $2,000/month"
    },
    {
      id: 4,
      name: "David Wilson",
      age: 30,
      occupation: "Financial Analyst",
      compatibilityScore: 85,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Upper East Side, New York",
      budget: "$1,800 - $2,500/month"
    },
    {
      id: 5,
      name: "Jessica Kim",
      age: 26,
      occupation: "Teacher",
      compatibilityScore: 82,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Harlem, New York",
      budget: "$1,100 - $1,600/month"
    },
    {
      id: 6,
      name: "James Moore",
      age: 29,
      occupation: "Nurse",
      compatibilityScore: 79,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Hell's Kitchen, New York",
      budget: "$1,200 - $1,900/month"
    }
  ];
  
  // Filter matches based on compatibility score and search query
  const filteredMatches = matches
    .filter(match => match.compatibilityScore >= compatibilityFilter[0])
    .filter(match => 
      searchQuery === "" || 
      match.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.occupation.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Roommate Matches</h1>
            <p className="text-gray-600">Based on your preferences, we've found these compatible roommates for you</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="md:w-80 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Filter Matches</h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium">Minimum Compatibility</label>
                      <span className="text-sm text-primary font-medium">{compatibilityFilter[0]}%</span>
                    </div>
                    <Slider
                      defaultValue={[70]} 
                      max={100} 
                      step={5}
                      min={50}
                      onValueChange={setCompatibilityFilter}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="All Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="downtown">Downtown</SelectItem>
                        <SelectItem value="brooklyn">Brooklyn</SelectItem>
                        <SelectItem value="queens">Queens</SelectItem>
                        <SelectItem value="upper-east">Upper East Side</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Budget Range</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Any Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Budget</SelectItem>
                        <SelectItem value="budget">$500 - $1,000</SelectItem>
                        <SelectItem value="mid">$1,000 - $1,500</SelectItem>
                        <SelectItem value="high">$1,500 - $2,000</SelectItem>
                        <SelectItem value="luxury">$2,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Age Range</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Any Age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Age</SelectItem>
                        <SelectItem value="18-25">18-25</SelectItem>
                        <SelectItem value="26-30">26-30</SelectItem>
                        <SelectItem value="31-40">31-40</SelectItem>
                        <SelectItem value="40+">40+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    placeholder="Search by name, location, or occupation..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select defaultValue="compatibility">
                  <SelectTrigger className="w-full md:w-60">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compatibility">Highest Compatibility</SelectItem>
                    <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                    <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                    <SelectItem value="age-young">Age: Youngest First</SelectItem>
                    <SelectItem value="age-old">Age: Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Tabs defaultValue="matches" className="mb-6">
                <TabsList className="mb-2">
                  <TabsTrigger value="matches">All Matches</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                  <TabsTrigger value="contacted">Contacted</TabsTrigger>
                </TabsList>
                <TabsContent value="matches">
                  {filteredMatches.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredMatches.map(match => (
                        <MatchCard 
                          key={match.id}
                          name={match.name}
                          age={match.age}
                          occupation={match.occupation}
                          compatibilityScore={match.compatibilityScore}
                          image={match.image}
                          location={match.location}
                          budget={match.budget}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg">
                      <p className="text-gray-600 mb-4">No matches found with the current filters.</p>
                      <Button onClick={() => setCompatibilityFilter([50])}>Reset Filters</Button>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="saved">
                  <div className="text-center py-12 bg-white rounded-lg">
                    <p className="text-gray-600">You haven't saved any matches yet.</p>
                  </div>
                </TabsContent>
                <TabsContent value="contacted">
                  <div className="text-center py-12 bg-white rounded-lg">
                    <p className="text-gray-600">You haven't contacted any matches yet.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Matches;
