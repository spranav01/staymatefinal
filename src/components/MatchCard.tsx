
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, User } from "lucide-react";

interface MatchCardProps {
  name: string;
  age: number;
  occupation: string;
  compatibilityScore: number;
  image: string;
  location: string;
  budget: string;
}

const MatchCard = ({ 
  name, 
  age, 
  occupation, 
  compatibilityScore, 
  image,
  location,
  budget
}: MatchCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${name}'s profile`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold">{name}, {age}</h3>
            <p className="text-gray-600">{occupation}</p>
          </div>
          <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {compatibilityScore}% Match
          </div>
        </div>
        
        <div className="mb-4 text-gray-600">
          <div className="flex items-center mb-1">
            <User size={16} className="mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">Budget:</span>
            <span className="ml-2">{budget}</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Button className="flex-1 bg-primary hover:bg-primary-dark">
            <MessageCircle size={18} className="mr-2" />
            Message
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Heart size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
