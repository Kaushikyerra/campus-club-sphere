
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import ClubsPage from "./pages/ClubsPage";
import ClubDetailPage from "./pages/ClubDetailPage";
import CalendarPage from "./pages/CalendarPage";
import { LoginPage, SignupPage } from "./pages/AuthPages";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth pages without standard layout */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Pages with standard layout */}
            <Route 
              path="/"
              element={
                <Layout>
                  <LandingPage />
                </Layout>
              } 
            />
            <Route 
              path="/clubs" 
              element={
                <Layout>
                  <ClubsPage />
                </Layout>
              } 
            />
            <Route 
              path="/clubs/:clubId" 
              element={
                <Layout>
                  <ClubDetailPage />
                </Layout>
              } 
            />
            <Route 
              path="/calendar" 
              element={
                <Layout>
                  <CalendarPage />
                </Layout>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Layout>
                  <ContactPage />
                </Layout>
              } 
            />
            
            {/* Not Found page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
