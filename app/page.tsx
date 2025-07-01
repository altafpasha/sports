'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Users, Trophy, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Youth Cricket Championship',
      date: 'March 15, 2025',
      location: 'Sports Complex, Mumbai',
      ageGroup: '10-16 years',
      sport: 'Cricket',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Football League Finals',
      date: 'March 22, 2025',
      location: 'City Stadium, Delhi',
      ageGroup: '8-14 years',
      sport: 'Football',
      image: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Badminton Open Tournament',
      date: 'April 5, 2025',
      location: 'Indoor Arena, Bangalore',
      ageGroup: '12-18 years',
      sport: 'Badminton',
      image: 'https://images.pexels.com/photos/8007531/pexels-photo-8007531.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent',
      content: 'My son has gained so much confidence through Winning Wings events. The organization is top-notch!',
      rating: 5
    },
    {
      name: 'Rahul Patel',
      role: 'Young Athlete',
      content: 'These tournaments have helped me improve my game and make new friends. Amazing experience!',
      rating: 5
    },
    {
      name: 'Coach Michael',
      role: 'Sports Coach',
      content: 'Winning Wings provides excellent platforms for young talent to showcase their skills.',
      rating: 5
    }
  ];

  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length, mounted]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Trophy className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fuel the Game
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-orange-400">
            Feel the Win
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Empowering young athletes through sports events, building champions on and off the field
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
              Join an Event
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900">
              Explore Events
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive sports event organization for all age groups, promoting health, teamwork, and community building
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Multiple Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cricket, Football, Badminton, Kabaddi, Running, Volleyball and more sports for all skill levels
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>All Age Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From kids to teens and adults, we organize events suitable for every age group and skill level
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Multiple Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Events across various cities and venues, making sports accessible to communities everywhere
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Don't miss out on these exciting upcoming sports events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.sport}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {event.ageGroup}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/events">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-xl opacity-90">
              Hear from our community of athletes, parents, and coaches
            </p>
          </div>

          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div>
                  <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-blue-200">{testimonials[currentTestimonial].role}</p>
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Action?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start your sports journey with us today. Register for an event or learn more about our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              Register for Event
            </Button>
            <Link href="/goal">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600">
                Learn Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}