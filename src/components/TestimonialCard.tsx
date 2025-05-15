
interface TestimonialCardProps {
  quote: string;
  author: string;
  image: string;
  location: string;
}

const TestimonialCard = ({ quote, author, image, location }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md card-hover">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i}
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-yellow-400" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 15.934l-6.18 3.254 1.18-6.875L.001 7.26l6.902-1.003L10 0l3.097 6.257 6.903 1.003-4.999 5.053 1.18 6.875z" 
              clipRule="evenodd" 
            />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={author} 
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
