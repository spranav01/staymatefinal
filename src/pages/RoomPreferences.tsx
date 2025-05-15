
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const RoomPreferences = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    moveInDate: "",
    leaseTerm: "",
    budget: [1000],
    roomType: "",
    bathType: "",
    amenities: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData(prevState => ({
      ...prevState,
      budget: value
    }));
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData(prevState => {
      if (checked) {
        return {
          ...prevState,
          amenities: [...prevState.amenities, id]
        };
      } else {
        return {
          ...prevState,
          amenities: prevState.amenities.filter(item => item !== id)
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to your backend
    console.log("Form submitted:", formData);
    toast.success("Room preferences saved!");
    navigate("/roommate-preferences");
  };

  const amenitiesList = [
    { id: "wifi", label: "WiFi Included" },
    { id: "laundry", label: "In-unit Laundry" },
    { id: "parking", label: "Parking" },
    { id: "gym", label: "Gym Access" },
    { id: "pet-friendly", label: "Pet Friendly" },
    { id: "furnished", label: "Furnished" },
    { id: "ac", label: "Air Conditioning" },
    { id: "balcony", label: "Balcony/Patio" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Room Preferences</h1>
            <p className="text-gray-600">Tell us about your ideal living situation</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Location & Timing</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Preferred Location</Label>
                    <Input 
                      id="location"
                      name="location"
                      placeholder="City, Neighborhood, or Zip Code" 
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="moveInDate">Move-in Date</Label>
                      <Input 
                        id="moveInDate"
                        name="moveInDate"
                        type="date" 
                        value={formData.moveInDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="leaseTerm">Lease Term</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("leaseTerm", value)}
                        defaultValue={formData.leaseTerm}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select lease term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="month-to-month">Month to Month</SelectItem>
                          <SelectItem value="3-months">3 Months</SelectItem>
                          <SelectItem value="6-months">6 Months</SelectItem>
                          <SelectItem value="1-year">1 Year</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Budget & Room Details</h2>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <Label>Monthly Budget: ${formData.budget[0]}</Label>
                    <Slider
                      defaultValue={[1000]} 
                      max={5000} 
                      step={50}
                      min={500}
                      onValueChange={handleSliderChange}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$500</span>
                      <span>$5000+</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="roomType">Room Type</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("roomType", value)}
                        defaultValue={formData.roomType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private Room</SelectItem>
                          <SelectItem value="shared">Shared Room</SelectItem>
                          <SelectItem value="studio">Studio Apartment</SelectItem>
                          <SelectItem value="1-bedroom">1 Bedroom Apartment</SelectItem>
                          <SelectItem value="2-bedroom">2+ Bedroom Apartment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bathType">Bathroom</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("bathType", value)}
                        defaultValue={formData.bathType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select bathroom type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private Bathroom</SelectItem>
                          <SelectItem value="shared">Shared Bathroom</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenitiesList.map(item => (
                    <div className="flex items-center space-x-2" key={item.id}>
                      <Checkbox 
                        id={item.id}
                        checked={formData.amenities.includes(item.id)}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange(item.id, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={item.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/create-profile")}
                >
                  Back
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary-dark">
                  Continue to Roommate Preferences
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RoomPreferences;
