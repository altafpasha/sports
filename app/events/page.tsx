'use client';

import { useState } from 'react';
import { Calendar, MapPin, Users, Filter, Search, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Youth Cricket Championship',
      date: 'March 15, 2025',
      location: 'Sports Complex, Mumbai',
      ageGroup: '10-16 years',
      sport: 'Cricket',
      status: 'upcoming',
      registrationFee: '₹500',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Annual cricket championship for young talents with exciting prizes and professional coaching.'
    },
    {
      id: 2,
      title: 'Football League Finals',
      date: 'March 22, 2025',
      location: 'City Stadium, Delhi',
      ageGroup: '8-14 years',
      sport: 'Football',
      status: 'upcoming',
      registrationFee: '₹400',
      image: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Intense football competition bringing together the best young players from across the region.'
    },
    {
      id: 3,
      title: 'Badminton Open Tournament',
      date: 'April 5, 2025',
      location: 'Indoor Arena, Bangalore',
      ageGroup: '12-18 years',
      sport: 'Badminton',
      status: 'upcoming',
      registrationFee: '₹300',
      image: 'https://images.pexels.com/photos/8007531/pexels-photo-8007531.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional badminton tournament with singles and doubles categories.'
    },
    {
      id: 4,
      title: 'Inter-School Kabaddi Championship',
      date: 'February 28, 2025',
      location: 'Sports Ground, Pune',
      ageGroup: '14-18 years',
      sport: 'Kabaddi',
      status: 'past',
      registrationFee: '₹600',
      image: 'https://images.pexels.com/photos/8612991/pexels-photo-8612991.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Traditional kabaddi competition showcasing strength, strategy, and teamwork.'
    },
    {
      id: 5,
      title: 'Marathon for Kids',
      date: 'April 20, 2025',
      location: 'City Park, Chennai',
      ageGroup: '6-16 years',
      sport: 'Running',
      status: 'upcoming',
      registrationFee: '₹200',
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Fun run event promoting fitness and healthy lifestyle among children.'
    },
    {
      id: 6,
      title: 'Volleyball Championship',
      date: 'May 10, 2025',
      location: 'Beach Court, Goa',
      ageGroup: '16-20 years',
      sport: 'Volleyball',
      status: 'upcoming',
      registrationFee: '₹450',
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Beach volleyball tournament with beautiful coastal backdrop and exciting matches.'
    }
  ];

  const sports = ['Cricket', 'Football', 'Badminton', 'Kabaddi', 'Running', 'Volleyball'];
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai', 'Goa'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.sport.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === 'all' || event.sport === selectedSport;
    const matchesLocation = selectedLocation === 'all' || event.location.includes(selectedLocation);
    
    return matchesSearch && matchesSport && matchesLocation;
  });

  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming');
  const pastEvents = filteredEvents.filter(event => event.status === 'past');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Sports Events</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join exciting sports competitions designed for all age groups. 
            From cricket to volleyball, find your passion and compete with the best.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold">Filter Events</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedSport} onValueChange={setSelectedSport}>
              <SelectTrigger>
                <SelectValue placeholder="Select Sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                {sports.map(sport => (
                  <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">
                    {event.sport}
                  </Badge>
                  <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                    {event.registrationFee}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
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
        </section>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden opacity-75 hover:opacity-100 transition-opacity duration-300">
                  <div className="relative h-48">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-gray-500">
                      {event.sport}
                    </Badge>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Trophy className="h-12 w-12 text-white opacity-80" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-700">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" disabled>
                      Event Completed
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search criteria to find more events.</p>
          </div>
        )}
      </div>
    </div>
  );
}