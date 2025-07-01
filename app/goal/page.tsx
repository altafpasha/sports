import { Target, Heart, Users, Trophy, Globe, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Goal() {
  const goals = [
    {
      icon: Heart,
      title: 'Promote Health & Fitness',
      description: 'Encouraging active lifestyles and physical wellness through engaging sports activities for all age groups.'
    },
    {
      icon: Users,
      title: 'Build Strong Communities',
      description: 'Creating connections and fostering teamwork that extends beyond the playing field into everyday life.'
    },
    {
      icon: Trophy,
      title: 'Develop Champions',
      description: 'Nurturing talent and building character, creating winners both in sports and in life.'
    },
    {
      icon: Globe,
      title: 'Expand Our Reach',
      description: 'Growing our network to serve more communities and make sports accessible to everyone, everywhere.'
    }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We believe in fair play, honesty, and maintaining the highest ethical standards in all our events.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Passion',
      description: 'Our love for sports drives everything we do, inspiring others to discover their own athletic passions.',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in event organization, facilities, and participant experience.',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Inclusiveness',
      description: 'Sports should be for everyone, regardless of background, skill level, or economic status.',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Goal</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            To create a world where every young person has access to quality sports experiences 
            that build character, foster community, and inspire lifelong wellness.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Winning Wings is dedicated to empowering young athletes through professionally organized 
              sports events that promote physical fitness, mental resilience, and social development. 
              We believe that sports are more than games – they are powerful tools for building character, 
              teaching life skills, and creating lasting friendships.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through our events, we aim to discover and nurture sporting talent while ensuring that 
              every participant, regardless of skill level, experiences the joy of competition and 
              the satisfaction of personal achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Aim to Achieve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our goals guide every decision we make and every event we organize
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl">{goal.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg leading-relaxed">{goal.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles form the foundation of everything we do at Winning Wings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold mx-auto ${value.color}`}>
                    {value.title}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Long-term Vision</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">National Expansion</h3>
                    <p className="opacity-90">
                      Establish Winning Wings as the premier youth sports organization across India, 
                      with events in every major city and town.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Infrastructure Development</h3>
                    <p className="opacity-90">
                      Build state-of-the-art sports facilities and training centers to provide 
                      world-class venues for our events and programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-full mt-1">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scholarship Programs</h3>
                    <p className="opacity-90">
                      Launch comprehensive scholarship and sponsorship programs to ensure 
                      talented athletes from all backgrounds can participate and excel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Sports vision" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're a young athlete, parent, coach, or sponsor, you can be part of our journey 
            to transform lives through sports. Together, we can build a stronger, healthier, and more 
            connected community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Involved
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}