import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, FileText, Scale, Users, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Solutions = () => {
  const mainSolutions = [
    {
      icon: Shield,
      title: "Risk Mitigation and Loss Prevention",
      description: "Comprehensive risk assessment and prevention strategies to protect your business from financial losses and operational disruptions.",
      features: [
        "Risk assessment and analysis",
        "Internal control evaluation",
        "Fraud prevention programs",
        "Compliance monitoring",
        "Business continuity planning"
      ],
      benefits: "Proactive protection that reduces exposure to financial losses and operational risks."
    },
    {
      icon: Search,
      title: "Financial Forensics",
      description: "Expert forensic accounting and financial investigation services for complex financial matters and disputes.",
      features: [
        "Financial investigations",
        "Asset tracing and recovery",
        "Fraud detection and analysis",
        "Economic damages calculation",
        "Expert witness testimony"
      ],
      benefits: "Uncover the truth with detailed financial analysis and professional expertise."
    }
  ];

  const featuredSolutions = [
    {
      icon: FileText,
      title: "Insurance Claims Forensic Accounting and Consulting",
      description: "Specialized forensic accounting services for insurance claims resolution and dispute management.",
      link: "/contact"
    },
    {
      icon: AlertTriangle,
      title: "Forensic Accounting and Corruption Investigation",
      description: "Comprehensive investigation services for suspected corruption and financial misconduct.",
      link: "/contact"
    },
    {
      icon: Scale,
      title: "Litigation Support and Expert Witness Services",
      description: "Professional litigation support and expert witness testimony for legal proceedings.",
      link: "/contact"
    },
    {
      icon: TrendingUp,
      title: "Business Valuation and Financial Analysis",
      description: "Accurate business valuations and financial analysis for various business purposes.",
      link: "/contact"
    },
    {
      icon: Users,
      title: "Corporate Compliance and Ethics",
      description: "Development and implementation of corporate compliance programs and ethics policies.",
      link: "/contact"
    },
    {
      icon: CheckCircle,
      title: "Internal Audit and Control Assessment",
      description: "Comprehensive internal audit services and control effectiveness assessments.",
      link: "/contact"
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Technology",
    "Real Estate",
    "Energy & Utilities",
    "Government",
    "Non-Profit Organizations"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Comprehensive Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Professional forensic insurance services tailored to protect your business 
              and resolve complex financial challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Primary Solution Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core expertise areas designed to address your most critical business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainSolutions.map((solution, index) => (
              <Card key={index} className="border-0 bg-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Benefits:</strong> {solution.benefits}
                    </p>
                  </div>
                  <Button className="w-full">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional expertise areas to address specific business challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSolutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {solution.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    <Link to={solution.link}>Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across multiple industries, providing specialized solutions 
              for sector-specific challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center hover:bg-muted/50 transition-colors"
              >
                <p className="font-medium text-foreground">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures comprehensive analysis and effective solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Assessment</h3>
              <p className="text-muted-foreground text-sm">
                Initial consultation and comprehensive assessment of your situation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Investigation</h3>
              <p className="text-muted-foreground text-sm">
                Detailed investigation and analysis using proven methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive analysis and development of findings and recommendations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Resolution</h3>
              <p className="text-muted-foreground text-sm">
                Implementation of solutions and ongoing support as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team today to discuss your specific needs and learn how our 
            forensic insurance solutions can protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn About Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;