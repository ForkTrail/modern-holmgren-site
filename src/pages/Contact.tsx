import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    urgency: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      urgency: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Available 24/7 for urgent matters"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@holmgreninsurance.com",
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Financial District, Suite 456",
      description: "New York, NY 10005"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8:00 AM - 8:00 PM",
      description: "Emergency support available 24/7"
    }
  ];

  const services = [
    "Risk Mitigation and Loss Prevention",
    "Financial Forensics",
    "Insurance Claims Consulting",
    "Litigation Support",
    "Business Valuation",
    "Corporate Compliance",
    "Internal Audit",
    "Other"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Get in touch with our expert team for immediate assistance with your 
              forensic insurance needs. We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 bg-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground mb-2">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get Started Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our team will contact you within 24 hours 
                to discuss your specific needs and how we can help.
              </p>

              <Card className="border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Form</CardTitle>
                  <CardDescription>
                    Please provide as much detail as possible to help us understand your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - Within 1 week</SelectItem>
                            <SelectItem value="medium">Medium - Within 2-3 days</SelectItem>
                            <SelectItem value="high">High - Within 24 hours</SelectItem>
                            <SelectItem value="urgent">Urgent - Immediate response needed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={5}
                        placeholder="Please describe your situation and how we can help..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">Emergency Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For urgent matters requiring immediate attention, please call our 
                    24/7 emergency hotline:
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-semibold text-lg">
                      Emergency Hotline: (555) 999-0000
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our emergency response team is available around the clock for critical 
                    situations requiring immediate forensic insurance expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Initial Response</h4>
                        <p className="text-sm text-muted-foreground">
                          We'll contact you within 2 hours (or immediately for urgent matters)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Consultation</h4>
                        <p className="text-sm text-muted-foreground">
                          Free initial consultation to understand your needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Proposal</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed proposal with timeline and cost estimates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Engagement</h4>
                        <p className="text-sm text-muted-foreground">
                          Begin work immediately upon your approval
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">Confidentiality Assured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="opacity-90">
                    All communications and information shared with our team are strictly 
                    confidential and protected by attorney-client privilege where applicable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;