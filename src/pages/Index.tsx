import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Search, FileText, Scale, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Risk Mitigation and Loss Prevention",
      description: "Comprehensive risk assessment and prevention strategies to protect your business interests.",
      link: "/solutions"
    },
    {
      icon: Search,
      title: "Financial Forensics",
      description: "Expert forensic accounting and financial investigation services for complex matters.",
      link: "/solutions"
    },
    {
      icon: FileText,
      title: "Insurance Claims Consulting",
      description: "Professional forensic accounting and consulting for insurance claims resolution.",
      link: "/solutions"
    },
    {
      icon: Scale,
      title: "Litigation Support",
      description: "Expert witness services and litigation support for legal proceedings.",
      link: "/solutions"
    }
  ];

  const features = [
    "Globally trusted expertise",
    "24/7 emergency response",
    "Certified forensic professionals",
    "Comprehensive investigation services",
    "Risk mitigation strategies",
    "Litigation support"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              Problem: <span className="text-blue-400">Solved.</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
              From forensic accounting to comprehensive investigations, when it really matters,
              organizations around the globe turn to <strong>Holmgren Insurance</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/about" className="flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Globally trusted financial forensics and risk mitigation.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For matters of extreme importance, for problems that must be solved, the Holmgren team of 
              forensic accountants, litigation experts, investigators, and risk professionals are trusted 
              to get the job done.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Solution Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive forensic insurance solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6">
                    {solution.description}
                  </CardDescription>
                  <Link 
                    to={solution.link}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Solve Your Problem?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team of experts today for a consultation on your forensic insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
