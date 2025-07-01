import { Users, Award, Heart, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: 'Former national cricket player with 15+ years in sports management. Passionate about youth development.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Cricket', 'Leadership', 'Strategy']
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      bio: 'Sports science graduate specializing in event management and athlete development programs.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Operations', 'Badminton', 'Youth Training']
    },
    {
      name: 'Amit Patel',
      role: 'Technical Director',
      bio: 'Former professional football coach with expertise in sports technology and performance analysis.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Football', 'Coaching', 'Technology']
    },
    {
      name: 'Sneha Reddy',
      role: 'Community Relations Manager',
      bio: 'Dedicated to building partnerships and ensuring inclusive participation across all communities.',
      image: 'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialties: ['Community Building', 'Partnerships', 'Events']
    }
  ];

  const achievements = [
    { number: '50+', label: 'Events Organized', icon: Award },
    { number: '10,000+', label: 'Young Athletes', icon: Users },
    { number: '25+', label: 'Cities Covered', icon: MapPin },
    { number: '95%', label: 'Satisfaction Rate', icon: Heart }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of fairness and honesty in all our operations.',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Passion',
      description: 'Our love for sports drives us to create exceptional experiences for every participant.',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      title: 'Excellence',
      description: 'We continuously strive to exceed expectations in event quality and participant satisfaction.',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Inclusiveness',
      description: 'We believe sports should be accessible to everyone, regardless of background or ability.',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Winning Wings</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            Empowering young athletes since 2020, building champions on and off the field through 
            professionally organized sports events and comprehensive development programs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Winning Wings was born from a simple yet powerful vision: to create opportunities 
                  for young people to discover their potential through sports. Founded in 2020 by a 
                  group of passionate sports enthusiasts and former athletes, we recognized the need 
                  for professionally managed sports events that could truly make a difference in 
                  young lives.
                </p>
                <p>
                  What started as small local tournaments has grown into a nationwide movement, 
                  touching the lives of thousands of young athletes across India. Our commitment 
                  to excellence, fairness, and inclusivity has made us a trusted name in youth 
                  sports organization.
                </p>
                <p>
                  Today, we continue to expand our reach, bringing world-class sports experiences 
                  to communities everywhere, always staying true to our core mission of building 
                  character through competition.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Sports team celebration" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to fostering sports excellence and community building
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to creating exceptional sports experiences for young athletes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Winning Wings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`border-2 ${value.color} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-12 opacity-90">
            Ready to be part of the Winning Wings family? We'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">info@winningwings.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">+91 98765 43210</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="opacity-90">Mumbai, Maharashtra</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Linkedin className="h-6 w-6" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Mail className="h-6 w-6" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Phone className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}