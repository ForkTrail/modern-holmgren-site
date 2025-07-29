import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Professionals",
      description: "Certified forensic accountants and investigators"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      icon: Award,
      number: "20+",
      label: "Years Experience",
      description: "Proven track record of success"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Response",
      description: "Available when you need us most"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Holmgren",
      title: "Chief Executive Officer",
      credentials: "CPA, CFE, CFF",
      description: "Leading forensic accounting expert with over 20 years of experience in financial investigations and risk management."
    },
    {
      name: "Michael Chen",
      title: "Director of Investigations",
      credentials: "CFE, CISA, MBA",
      description: "Former federal investigator specializing in complex financial crimes and corporate fraud cases."
    },
    {
      name: "Jennifer Martinez",
      title: "Head of Risk Management",
      credentials: "CPA, CRMA, FRM",
      description: "Risk management specialist focused on developing comprehensive prevention strategies for businesses."
    },
    {
      name: "David Thompson",
      title: "Senior Forensic Accountant",
      credentials: "CPA, CFE, ASA",
      description: "Expert in financial forensics with extensive experience in litigation support and expert witness testimony."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Holmgren Insurance
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Your trusted partner for comprehensive forensic insurance solutions, 
              providing expert guidance when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Holmgren Insurance, we are dedicated to providing world-class forensic insurance 
                services that protect businesses from financial risks and provide clarity in complex 
                situations. Our team of certified professionals combines deep expertise with 
                cutting-edge technology to deliver solutions that matter.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that when businesses face financial challenges, litigation, or 
                complex investigations, they need more than just expertise—they need a trusted 
                partner who can navigate uncertainty and deliver results.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Why Choose Holmgren?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proven expertise in forensic accounting and financial investigations
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprehensive risk management and loss prevention strategies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  24/7 emergency response for urgent matters
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Global reach with personalized service
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Certified professionals with industry recognition
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our track record and global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 bg-card">
                <CardHeader className="pb-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{stat.number}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who lead our forensic insurance practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.title}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground font-medium">{member.credentials}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="opacity-90">
                We maintain the highest ethical standards in all our professional activities 
                and client relationships.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="opacity-90">
                We are committed to delivering superior results through continuous learning 
                and professional development.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Partnership</h3>
              <p className="opacity-90">
                We work collaboratively with our clients to understand their unique needs 
                and deliver customized solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;