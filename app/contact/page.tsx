'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['123 Sports Avenue', 'Bandra West, Mumbai', 'Maharashtra 400050'],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 98765 43210', '+91 98765 43211', 'Mon-Sat: 9 AM - 7 PM'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@winningwings.com', 'events@winningwings.com', 'support@winningwings.com'],
      color: 'text-orange-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9 AM - 7 PM', 'Saturday: 10 AM - 5 PM', 'Sunday: Closed'],
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Have questions about our events? Want to sponsor or partner with us? 
            We're here to help and would love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Send us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-semibold">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType" className="text-base font-semibold">Inquiry Type *</Label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="event-registration">Event Registration</SelectItem>
                          <SelectItem value="sponsorship">Sponsorship Opportunities</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="feedback">Feedback/Complaint</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 h-14">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full bg-gray-100`}>
                        <IconComponent className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <CardTitle className="text-xl">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Contact Card */}
            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-100 mb-4">
                  For urgent inquiries about ongoing events or emergencies, 
                  call our 24/7 hotline.
                </p>
                <Button className="bg-white text-orange-600 hover:bg-gray-100 w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Hotline
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Find Us</CardTitle>
              <CardDescription>
                Visit our headquarters in Mumbai for in-person consultations and event planning.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p>123 Sports Avenue, Bandra West</p>
                  <p>Mumbai, Maharashtra 400050</p>
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our events and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I register for an event?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can register through our events page, by calling us directly, 
                  or visiting our office. Online registration is available 24/7.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your refund policies?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Full refunds are available up to 7 days before the event. 
                  Partial refunds may apply within 3-7 days of the event date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer sponsorship opportunities?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! We offer various sponsorship packages for businesses 
                  looking to support youth sports and gain community visibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there age restrictions for events?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Each event has specific age categories. We organize events 
                  for various age groups from 6 years to adult categories.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}