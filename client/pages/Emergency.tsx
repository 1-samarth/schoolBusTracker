import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  Phone,
  Mail,
  AlertTriangle,
  MessageSquare,
  Clock,
  MapPin,
  Info,
} from "lucide-react";

export default function Emergency() {
  const emergencyContacts = [
    {
      title: "School Transportation",
      phone: "(555) 123-4567",
      email: "transport@school.edu",
      description: "Bus schedules, routes, and general inquiries",
    },
    {
      title: "Emergency Dispatch",
      phone: "911",
      email: null,
      description: "Life-threatening emergencies only",
    },
    {
      title: "School Main Office",
      phone: "(555) 234-5678",
      email: "office@school.edu",
      description: "General school matters and attendance",
    },
  ];

  const faqItems = [
    {
      question: "What if my child misses the bus?",
      answer:
        "Contact the school transportation office immediately. They can provide information about the next pickup time or alternative arrangements. You'll receive an automatic notification if your child's bus is running late.",
    },
    {
      question: "How do I report a bus safety concern?",
      answer:
        "Use the 'Report Problem' button below or call the transportation office directly. For immediate safety concerns, contact emergency services. All reports are taken seriously and investigated promptly.",
    },
    {
      question: "What if the bus breaks down?",
      answer:
        "The driver will contact dispatch immediately. Parents will receive automatic notifications about delays and alternative pickup arrangements. A replacement bus is typically dispatched within 15-20 minutes.",
    },
    {
      question: "Can I change my child's pickup location?",
      answer:
        "Contact the transportation office at least 24 hours in advance. Temporary changes require written notification from the school office. Emergency location changes may be accommodated on a case-by-case basis.",
    },
    {
      question: "What if I can't see the bus location on the map?",
      answer:
        "This may indicate a GPS connectivity issue. Try refreshing the app or checking your internet connection. If the problem persists, contact technical support or the transportation office.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-3">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="font-semibold text-foreground">
                Emergency Support
              </h1>
              <p className="text-xs text-muted-foreground">
                Get help when you need it
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-sm mx-auto p-4 space-y-4">
        {/* Quick Actions */}
        <Card className="border-0 shadow-lg bg-destructive/5 border-destructive/20">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <h2 className="font-semibold text-foreground">Quick Actions</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="destructive"
              className="w-full h-12 text-base font-semibold"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Emergency (911)
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 text-base font-semibold border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Report Problem
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Contact Numbers</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="p-3 bg-muted/30 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground">
                    {contact.title}
                  </h3>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="h-8 px-2">
                      <Phone className="h-3 w-3" />
                    </Button>
                    {contact.email && (
                      <Button size="sm" variant="outline" className="h-8 px-2">
                        <Mail className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
                <p className="text-sm font-mono text-primary">
                  {contact.phone}
                </p>
                {contact.email && (
                  <p className="text-xs text-muted-foreground">
                    {contact.email}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {contact.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Status Information */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-info" />
              <h2 className="font-semibold text-foreground">Current Status</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg">
              <Clock className="h-4 w-4 text-success" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  All systems operational
                </p>
                <p className="text-xs text-muted-foreground">
                  Bus tracking and notifications are working normally
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  GPS tracking active
                </p>
                <p className="text-xs text-muted-foreground">
                  Last updated 30 seconds ago
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <h2 className="font-semibold text-foreground">
              Frequently Asked Questions
            </h2>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-sm text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Additional Help */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Need additional help or have feedback?
            </p>
            <Button variant="outline" className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
