
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProfileCreation from "./pages/ProfileCreation";
import RoomPreferences from "./pages/RoomPreferences";
import RoommatePreferences from "./pages/RoommatePreferences";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create-profile" element={<ProfileCreation />} />
          <Route path="/room-preferences" element={<RoomPreferences />} />
          <Route path="/roommate-preferences" element={<RoommatePreferences />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
