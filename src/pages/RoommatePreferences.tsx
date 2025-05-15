
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const RoommatePreferences = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ageRange: [25, 35],
    gender: "",
    cleanliness: "",
    smoking: "",
    pets: "",
    workSchedule: "",
    socialLevel: 50,
    interests: [] as string[],
    additionalInfo: ""
  });

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSocialLevelChange = (value: number[]) => {
    setFormData(prevState => ({
      ...prevState,
      socialLevel: value[0]
    }));
  };

  const handleAgeRangeChange = (value: number[]) => {
    setFormData(prevState => ({
      ...prevState,
      ageRange: value
    }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleInterestChange = (id: string, checked: boolean) => {
    setFormData(prevState => {
      if (checked) {
        return {
          ...prevState,
          interests: [...prevState.interests, id]
        };
      } else {
        return {
          ...prevState,
          interests: prevState.interests.filter(item => item !== id)
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to your backend
    console.log("Form submitted:", formData);
    toast.success("Preferences saved! Matching you with compatible roommates...");
    navigate("/dashboard");
  };

  const interestsList = [
    { id: "movies", label: "Movies & TV" },
    { id: "music", label: "Music" },
    { id: "sports", label: "Sports" },
    { id: "outdoors", label: "Outdoors" },
    { id: "tech", label: "Technology" },
    { id: "art", label: "Arts & Culture" },
    { id: "cooking", label: "Cooking" },
    { id: "reading", label: "Reading" },
    { id: "travel", label: "Travel" },
    { id: "gaming", label: "Gaming" },
    { id: "fitness", label: "Fitness" },
    { id: "pets", label: "Pets" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Roommate Preferences</h1>
            <p className="text-gray-600">Tell us what you're looking for in a roommate</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Basic Preferences</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Preferred Age Range: {formData.ageRange[0]} - {formData.ageRange[1]}</Label>
                    <Slider
                      defaultValue={[25, 35]} 
                      max={70} 
                      step={1}
                      min={18}
                      onValueChange={handleAgeRangeChange}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>18</span>
                      <span>70+</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Preferred Gender</Label>
                    <RadioGroup 
                      onValueChange={(value) => handleSelectChange("gender", value)}
                      defaultValue={formData.gender}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="gender-pref-male" />
                        <Label htmlFor="gender-pref-male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="gender-pref-female" />
                        <Label htmlFor="gender-pref-female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-preference" id="gender-pref-no-pref" />
                        <Label htmlFor="gender-pref-no-pref">No Preference</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Lifestyle Preferences</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cleanliness">Cleanliness Level</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("cleanliness", value)}
                        defaultValue={formData.cleanliness}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select cleanliness level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="very-neat">Very Neat</SelectItem>
                          <SelectItem value="neat">Neat</SelectItem>
                          <SelectItem value="average">Average</SelectItem>
                          <SelectItem value="relaxed">Relaxed</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="smoking">Smoking Preferences</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("smoking", value)}
                        defaultValue={formData.smoking}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select smoking preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="non-smoker">Non-Smoker Only</SelectItem>
                          <SelectItem value="outside-only">Outside Smoking OK</SelectItem>
                          <SelectItem value="smoker-ok">Smoker OK</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pets">Pet Preferences</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("pets", value)}
                        defaultValue={formData.pets}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select pet preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no-pets">No Pets</SelectItem>
                          <SelectItem value="cats-only">Cats Only</SelectItem>
                          <SelectItem value="dogs-only">Dogs Only</SelectItem>
                          <SelectItem value="pets-welcome">All Pets Welcome</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workSchedule">Work Schedule</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("workSchedule", value)}
                        defaultValue={formData.workSchedule}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select work schedule preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="day-worker">Day Worker (9-5)</SelectItem>
                          <SelectItem value="night-worker">Night Worker</SelectItem>
                          <SelectItem value="remote-worker">Remote Worker</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Social Preference: {formData.socialLevel < 33 ? 'Quiet/Private' : formData.socialLevel < 66 ? 'Balanced' : 'Social/Outgoing'}</Label>
                    <Slider
                      defaultValue={[50]} 
                      max={100} 
                      step={1}
                      onValueChange={handleSocialLevelChange}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Quiet/Private</span>
                      <span>Social/Outgoing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Interests & Compatibility</h2>
                <div className="space-y-6">
                  <div>
                    <Label className="block mb-3">Shared Interests (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {interestsList.map(item => (
                        <div className="flex items-center space-x-2" key={item.id}>
                          <Checkbox 
                            id={`interest-${item.id}`}
                            checked={formData.interests.includes(item.id)}
                            onCheckedChange={(checked) => 
                              handleInterestChange(item.id, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={`interest-${item.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Preferences</Label>
                    <Textarea 
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Any other preferences or details you'd like to share..." 
                      value={formData.additionalInfo}
                      onChange={handleTextareaChange}
                      rows={4}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/room-preferences")}
                >
                  Back
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary-dark">
                  Find My Matches
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

export default RoommatePreferences;
