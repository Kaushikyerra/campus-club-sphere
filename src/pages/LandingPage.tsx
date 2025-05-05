
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Bell, Search } from 'lucide-react';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern min-h-[90vh] flex items-center">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  University Community Platform
                </div>
              </div>
              
              <h1 className="font-bold">
                Discover, Join & Engage with <span className="gradient-text">University Clubs</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Connect with like-minded students, discover events happening on campus, and get involved in your university community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <Link to="/clubs">Browse Clubs</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800" 
                alt="University students collaborating" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Everything You Need in One Place</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              UniClubs provides a comprehensive platform for the entire university club experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discover</h3>
              <p className="text-muted-foreground">
                Find clubs that match your interests and passions across campus.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Connect</h3>
              <p className="text-muted-foreground">
                Join clubs and connect with student leaders and fellow members.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Events</h3>
              <p className="text-muted-foreground">
                Access a shared calendar of all campus events and activities.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get notifications about club activities and important announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collaboration Section */}
      <section className="section">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800" 
                alt="Students collaborating in university" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-bold">Foster Collaboration & Community</h2>
              <p className="text-lg text-muted-foreground">
                UniClubs brings together students from different backgrounds, majors, and interests to create a vibrant campus community.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
                    </svg>
                  </div>
                  <span>Streamline communication between club members</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
                    </svg>
                  </div>
                  <span>Simplify event planning and promotion</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-primary/10 p-1 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
                    </svg>
                  </div>
                  <span>Track membership and engagement</span>
                </li>
              </ul>
              <Button asChild className="font-semibold">
                <Link to="/contact">Collaborate With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container px-4 text-center">
          <h2 className="font-bold mb-6">Ready to transform your campus experience?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join UniClubs today and discover a world of opportunities to connect, learn, and grow with fellow students.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
