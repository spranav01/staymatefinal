
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Heart, Home, Search, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "AI Matching Algorithm",
      description: "Our advanced algorithm analyzes personality traits, habits, and preferences to find your ideal roommate match."
    },
    {
      icon: Home,
      title: "Property Preferences",
      description: "Specify your ideal living space requirements including location, amenities, and room type."
    },
    {
      icon: Search,
      title: "Budget Filtering",
      description: "Set your budget range and find roommates with compatible financial expectations."
    },
    {
      icon: Heart,
      title: "Lifestyle Compatibility",
      description: "Match with roommates who share your lifestyle, from cleanliness habits to social preferences."
    }
  ];

  const testimonials = [
    {
      quote: "I found my perfect roommate within a week! The matching algorithm is incredibly accurate.",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      location: "New York, NY"
    },
    {
      quote: "The detailed preference settings helped me find someone who shares my lifestyle. Best decision ever!",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      location: "San Francisco, CA"
    },
    {
      quote: "After trying multiple roommate apps, this one actually delivered compatible matches. Very impressed!",
      author: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      location: "Chicago, IL"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect Roommate Match
            </h1>
            <p className="text-xl mb-8 max-w-lg opacity-90">
              Our AI-powered matching system connects you with compatible roommates based on lifestyle, preferences, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 transition-colors">
                <Link to="/create-profile">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-colors">
                <Link to="/matches">Browse Matches</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=800&q=80" 
              alt="Happy roommates" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finding your ideal roommate is easy with our simple 3-step process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
              <p className="text-gray-600">Tell us about yourself, your lifestyle, and what you're looking for in a roommate.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold mb-4">Set Your Preferences</h3>
              <p className="text-gray-600">Specify your ideal location, budget, and roommate qualities that matter to you.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold mb-4">Match & Connect</h3>
              <p className="text-gray-600">Review your AI-selected matches, message potential roommates, and find your perfect fit.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RoomMate</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to make finding compatible roommates simple and effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read about the success stories from people who found their perfect roommate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                image={testimonial.image}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Roommate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of people who have already found their ideal living situation through our platform.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 transition-colors">
            <Link to="/create-profile">Get Started Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
