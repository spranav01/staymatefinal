
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
  
  // Mock data for roommate matches with Indian context
  const matches = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 27,
      occupation: "Software Developer",
      compatibilityScore: 96,
      image: "https://images.unsplash.com/photo-1611858246382-da4877c6668b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Koramangala, Bangalore",
      budget: "₹18,000 - ₹25,000/month"
    },
    {
      id: 2,
      name: "Vikram Patel",
      age: 25,
      occupation: "UI/UX Designer",
      compatibilityScore: 92,
      image: "https://images.unsplash.com/photo-1608549036505-ead5b1de5417?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Indiranagar, Bangalore",
      budget: "₹15,000 - ₹22,000/month"
    },
    {
      id: 3,
      name: "Neha Gupta",
      age: 26,
      occupation: "Marketing Manager",
      compatibilityScore: 88,
      image: "https://images.unsplash.com/photo-1624788190600-193a0b52478a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Powai, Mumbai",
      budget: "₹20,000 - ₹30,000/month"
    },
    {
      id: 4,
      name: "Arjun Mehta",
      age: 29,
      occupation: "Financial Analyst",
      compatibilityScore: 85,
      image: "https://images.unsplash.com/photo-1618764400608-9e7115eaeacb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Worli, Mumbai",
      budget: "₹25,000 - ₹35,000/month"
    },
    {
      id: 5,
      name: "Anjali Singh",
      age: 24,
      occupation: "Teacher",
      compatibilityScore: 82,
      image: "https://images.unsplash.com/photo-1591019052241-e4d95a5dc3fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Saket, Delhi",
      budget: "₹16,000 - ₹22,000/month"
    },
    {
      id: 6,
      name: "Rahul Kumar",
      age: 28,
      occupation: "Healthcare Professional",
      compatibilityScore: 79,
      image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500&q=80",
      location: "Vasant Kunj, Delhi",
      budget: "₹17,000 - ₹26,000/month"
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
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
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
                        <SelectItem value="budget">₹5,000 - ₹15,000</SelectItem>
                        <SelectItem value="mid">₹15,000 - ₹25,000</SelectItem>
                        <SelectItem value="high">₹25,000 - ₹35,000</SelectItem>
                        <SelectItem value="luxury">₹35,000+</SelectItem>
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
