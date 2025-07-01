'use client';

import { useState } from 'react';
import { Star, Heart, Smile, Meh, Frown, Send, Upload, MessageCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Feedback() {
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    eventName: '',
    feedbackType: '',
    rating: 0,
    satisfaction: '',
    experience: '',
    suggestions: '',
    wouldRecommend: ''
  });

  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFeedbackData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFeedbackData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
    setFeedbackData(prev => ({
      ...prev,
      satisfaction: emoji
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedbackData);
    alert('Thank you for your valuable feedback! Your input helps us improve our events.');
    // Reset form
    setFeedbackData({
      name: '',
      email: '',
      eventName: '',
      feedbackType: '',
      rating: 0,
      satisfaction: '',
      experience: '',
      suggestions: '',
      wouldRecommend: ''
    });
    setSelectedEmoji('');
  };

  const emojiOptions = [
    { emoji: '😊', label: 'Excellent', value: 'excellent', color: 'text-green-500' },
    { emoji: '🙂', label: 'Good', value: 'good', color: 'text-blue-500' },
    { emoji: '😐', label: 'Average', value: 'average', color: 'text-yellow-500' },
    { emoji: '😕', label: 'Poor', value: 'poor', color: 'text-orange-500' },
    { emoji: '😞', label: 'Very Poor', value: 'very-poor', color: 'text-red-500' }
  ];

  const recentTestimonials = [
    {
      name: 'Arjun Patel',
      event: 'Football Championship',
      rating: 5,
      comment: 'Amazing organization! My son had the best time and learned so much.',
      date: '2 days ago'
    },
    {
      name: 'Kavya Sharma',
      event: 'Badminton Tournament',
      rating: 5,
      comment: 'Professional setup and great coaching. Will definitely participate again!',
      date: '1 week ago'
    },
    {
      name: 'Rohan Singh',
      event: 'Cricket League',
      rating: 4,
      comment: 'Well organized event with fair play. Great experience overall.',
      date: '2 weeks ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-purple-300 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Your Feedback Matters</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Help us improve by sharing your experience. Your feedback drives our commitment 
            to excellence and helps us create better events for everyone.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Share Your Experience</CardTitle>
                <CardDescription className="text-lg">
                  Your honest feedback helps us continuously improve our events and services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={feedbackData.name}
                          onChange={handleInputChange}
                          className="h-12"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={feedbackData.email}
                          onChange={handleInputChange}
                          className="h-12"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eventName" className="text-base font-semibold">Event Name</Label>
                        <Select value={feedbackData.eventName} onValueChange={handleSelectChange('eventName')}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select the event" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cricket-championship">Youth Cricket Championship</SelectItem>
                            <SelectItem value="football-league">Football League Finals</SelectItem>
                            <SelectItem value="badminton-tournament">Badminton Open Tournament</SelectItem>
                            <SelectItem value="kabaddi-championship">Kabaddi Championship</SelectItem>
                            <SelectItem value="marathon-kids">Marathon for Kids</SelectItem>
                            <SelectItem value="volleyball-championship">Volleyball Championship</SelectItem>
                            <SelectItem value="general">General Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="feedbackType" className="text-base font-semibold">Feedback Type</Label>
                        <Select value={feedbackData.feedbackType} onValueChange={handleSelectChange('feedbackType')}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select feedback type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="event-experience">Event Experience</SelectItem>
                            <SelectItem value="website-experience">Website Experience</SelectItem>
                            <SelectItem value="registration-process">Registration Process</SelectItem>
                            <SelectItem value="staff-service">Staff Service</SelectItem>
                            <SelectItem value="facility-quality">Facility Quality</SelectItem>
                            <SelectItem value="general-suggestion">General Suggestion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Rating Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Rate Your Experience</h3>
                    
                    {/* Star Rating */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Overall Rating</Label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingChange(star)}
                            className="transition-colors"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= feedbackData.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Emoji Rating */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">How satisfied were you?</Label>
                      <div className="flex space-x-4">
                        {emojiOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleEmojiSelect(option.value)}
                            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                              selectedEmoji === option.value
                                ? 'bg-blue-100 border-2 border-blue-500'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                          >
                            <span className="text-3xl mb-1">{option.emoji}</span>
                            <span className={`text-sm font-medium ${option.color}`}>
                              {option.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Detailed Feedback */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Tell Us More</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-base font-semibold">
                        Describe your experience
                      </Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={feedbackData.experience}
                        onChange={handleInputChange}
                        rows={4}
                        className="resize-none"
                        placeholder="What did you like most? What could we improve?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="suggestions" className="text-base font-semibold">
                        Suggestions for improvement
                      </Label>
                      <Textarea
                        id="suggestions"
                        name="suggestions"
                        value={feedbackData.suggestions}
                        onChange={handleInputChange}
                        rows={3}
                        className="resize-none"
                        placeholder="Any suggestions to make our events better?"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Would you recommend us to others?</Label>
                      <RadioGroup 
                        value={feedbackData.wouldRecommend} 
                        onValueChange={(value) => setFeedbackData(prev => ({...prev, wouldRecommend: value}))}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="recommend-yes" />
                          <Label htmlFor="recommend-yes">Yes, definitely!</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maybe" id="recommend-maybe" />
                          <Label htmlFor="recommend-maybe">Maybe</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="recommend-no" />
                          <Label htmlFor="recommend-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Upload photos or documents (optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-2">Drag and drop files here, or click to select</p>
                      <p className="text-sm text-gray-500">Support for images and documents up to 10MB</p>
                      <Button type="button" variant="outline" className="mt-3">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 h-14">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span>Recent Testimonials</span>
                </CardTitle>
                <CardDescription>
                  See what others are saying about their experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentTestimonials.map((testimonial, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{testimonial.date}</span>
                      </div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-blue-600 mb-2">{testimonial.event}</p>
                      <p className="text-gray-600 text-sm italic">"{testimonial.comment}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Feedback */}
            <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle>Quick Feedback</CardTitle>
                <CardDescription className="text-blue-100">
                  Just want to leave a quick rating? Click below!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <Button className="bg-white/20 hover:bg-white/30 flex flex-col items-center py-4">
                    <Smile className="h-6 w-6 mb-1" />
                    <span className="text-xs">Great</span>
                  </Button>
                  <Button className="bg-white/20 hover:bg-white/30 flex flex-col items-center py-4">
                    <Meh className="h-6 w-6 mb-1" />
                    <span className="text-xs">Okay</span>
                  </Button>
                  <Button className="bg-white/20 hover:bg-white/30 flex flex-col items-center py-4">
                    <Frown className="h-6 w-6 mb-1" />
                    <span className="text-xs">Poor</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you have specific concerns or need immediate assistance, 
                  feel free to contact us directly.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your feedback is invaluable to us. Every comment, suggestion, and rating 
              helps us improve and deliver better experiences for all our participants. 
              Together, we're building a stronger sports community!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}