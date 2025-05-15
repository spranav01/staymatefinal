
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ProfileCreation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    occupation: "",
    bio: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to your backend
    console.log("Form submitted:", formData);
    toast.success("Profile created successfully!");
    navigate("/room-preferences");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Create Your Profile</h1>
            <p className="text-gray-600">Let's get to know you better to find your perfect roommate match</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        placeholder="(123) 456-7890" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input 
                        id="age"
                        name="age"
                        type="number" 
                        placeholder="25" 
                        value={formData.age}
                        onChange={handleInputChange}
                        min="18"
                        max="100"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About You</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <RadioGroup 
                      defaultValue={formData.gender} 
                      onValueChange={(value) => handleSelectChange("gender", value)}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="gender-male" />
                        <Label htmlFor="gender-male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="gender-female" />
                        <Label htmlFor="gender-female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non-binary" id="gender-non-binary" />
                        <Label htmlFor="gender-non-binary">Non-binary</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="prefer-not-to-say" id="gender-prefer-not-to-say" />
                        <Label htmlFor="gender-prefer-not-to-say">Prefer not to say</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Select 
                      onValueChange={(value) => handleSelectChange("occupation", value)}
                      defaultValue={formData.occupation}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your occupation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="employed">Employed Full-time</SelectItem>
                        <SelectItem value="part-time">Employed Part-time</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio"
                      name="bio"
                      placeholder="Tell us a bit about yourself..." 
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={5}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-primary hover:bg-primary-dark">
                  Continue to Room Preferences
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

export default ProfileCreation;
