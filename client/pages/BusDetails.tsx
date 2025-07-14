import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Bus,
  User,
  Shield,
  MapPin,
  Clock,
  Route,
  Star,
  Calendar,
  Phone,
  AlertCircle,
} from "lucide-react";

export default function BusDetails() {
  const busInfo = {
    number: "B-247",
    model: "2019 Blue Bird Vision",
    capacity: 48,
    currentOccupancy: 23,
    safetyRating: 4.8,
    lastInspection: "2024-01-10",
    nextInspection: "2024-04-10",
    routeName: "Maple Street Route",
    totalStops: 12,
    estimatedDuration: "35 mins",
  };

  const driverInfo = {
    name: "Carlos Rodriguez",
    photo: "/api/placeholder/60/60",
    experience: "8 years",
    rating: 4.9,
    certifications: ["CDL Class B", "Passenger Endorsement", "First Aid"],
    phone: "(555) 987-6543",
  };

  const routeStops = [
    { name: "Riverside Elementary", time: "7:30 AM", status: "completed" },
    { name: "Maple & Oak Street", time: "7:35 AM", status: "completed" },
    { name: "Pine Avenue", time: "7:40 AM", status: "completed" },
    { name: "Cedar Park", time: "7:45 AM", status: "current" },
    { name: "Elm Street Junction", time: "7:50 AM", status: "upcoming" },
    { name: "Birch Lane", time: "7:55 AM", status: "upcoming" },
    { name: "Your Stop - 123 Maple St", time: "8:05 AM", status: "upcoming" },
  ];

  const getStopIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <div className="w-3 h-3 bg-success rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-success-foreground rounded-full" />
          </div>
        );
      case "current":
        return (
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse flex items-center justify-center">
            <Bus className="h-2 w-2 text-primary-foreground" />
          </div>
        );
      case "upcoming":
        return <div className="w-3 h-3 border-2 border-muted rounded-full" />;
      default:
        return <div className="w-3 h-3 bg-muted rounded-full" />;
    }
  };

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
              <h1 className="font-semibold text-foreground">Bus Details</h1>
              <p className="text-xs text-muted-foreground">
                {busInfo.number} • {busInfo.routeName}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-sm mx-auto p-4 space-y-4">
        {/* Bus Information */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Bus className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Bus Information</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-foreground">
                  {busInfo.number}
                </p>
                <p className="text-sm text-muted-foreground">{busInfo.model}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-success" />
                  <span className="text-sm font-semibold text-success">
                    {busInfo.safetyRating}
                  </span>
                  <Star className="h-3 w-3 text-warning fill-current" />
                </div>
                <p className="text-xs text-muted-foreground">Safety Rating</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Occupancy</span>
                <span className="text-foreground">
                  {busInfo.currentOccupancy}/{busInfo.capacity} passengers
                </span>
              </div>
              <Progress
                value={(busInfo.currentOccupancy / busInfo.capacity) * 100}
                className="h-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">
                  Last Inspection
                </p>
                <p className="text-sm font-medium text-foreground">
                  {new Date(busInfo.lastInspection).toLocaleDateString()}
                </p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">
                  Next Inspection
                </p>
                <p className="text-sm font-medium text-foreground">
                  {new Date(busInfo.nextInspection).toLocaleDateString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Driver Information */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Driver</h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={driverInfo.photo} alt={driverInfo.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {driverInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  {driverInfo.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {driverInfo.experience} experience
                </p>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="h-3 w-3 text-warning fill-current" />
                  <span className="text-xs text-muted-foreground">
                    {driverInfo.rating}
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Phone className="h-3 w-3" />
              </Button>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-2">
                Certifications
              </p>
              <div className="flex flex-wrap gap-1">
                {driverInfo.certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs bg-success/10 text-success border-success/20"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Route Progress */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Route className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">
                  Route Progress
                </h2>
              </div>
              <Badge variant="outline" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {busInfo.estimatedDuration}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {routeStops.map((stop, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {getStopIcon(stop.status)}
                  <div className="flex-1">
                    <p
                      className={`text-sm ${
                        stop.status === "current"
                          ? "font-semibold text-primary"
                          : stop.status === "completed"
                            ? "text-muted-foreground"
                            : "text-foreground"
                      }`}
                    >
                      {stop.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{stop.time}</p>
                  </div>
                  {stop.status === "current" && (
                    <Badge className="bg-primary text-primary-foreground text-xs">
                      Current
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alert */}
        <Card className="border-0 shadow-lg bg-info/5 border-info/20">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-4 w-4 text-info mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Running on schedule
                </p>
                <p className="text-xs text-muted-foreground">
                  The bus is currently running on time. Estimated arrival at
                  your stop is 8:05 AM.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
