import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Bus,
  MapPin,
  Clock,
  Bell,
  User,
  Phone,
  Settings,
  Navigation,
  Wifi,
  WifiOff,
} from "lucide-react";

export default function Dashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock data for the demo
  const childData = {
    name: "Emma Johnson",
    photo: "/api/placeholder/80/80",
    busNumber: "B-247",
    route: "Maple Street Route",
    driverName: "Mr. Rodriguez",
    estimatedArrival: "8 mins",
    lastUpdate: "2 mins ago",
    status: "on-route" as "on-route" | "delayed" | "arrived",
  };

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-route":
        return "bg-success";
      case "delayed":
        return "bg-warning";
      case "arrived":
        return "bg-info";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "on-route":
        return "On Route";
      case "delayed":
        return "Delayed";
      case "arrived":
        return "Arrived";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Bus className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">BusTracker</h1>
                <p className="text-xs text-muted-foreground">
                  {currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {isOnline ? (
                <Wifi className="h-4 w-4 text-success" />
              ) : (
                <WifiOff className="h-4 w-4 text-destructive" />
              )}
              <Link to="/notifications">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Bell className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <User className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-sm mx-auto p-4 space-y-4">
        {/* Child Info Card */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={childData.photo} alt={childData.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {childData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="font-semibold text-foreground">
                  {childData.name}
                </h2>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="outline"
                    className={`text-xs ${getStatusColor(
                      childData.status,
                    )} text-white border-0`}
                  >
                    {getStatusText(childData.status)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    Bus {childData.busNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Clock className="h-4 w-4 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">ETA</p>
                <p className="font-semibold text-sm text-foreground">
                  {childData.estimatedArrival}
                </p>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Navigation className="h-4 w-4 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">Route</p>
                <p className="font-semibold text-sm text-foreground">
                  {childData.route.split(" ")[0]}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Live Location</h3>
              <p className="text-xs text-muted-foreground">
                Updated {childData.lastUpdate}
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Mock Map Interface */}
            <div className="h-48 bg-gradient-to-br from-info/20 to-primary/20 relative overflow-hidden">
              {/* Mock map background */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-muted-foreground/20"
                    />
                  ))}
                </div>
              </div>

              {/* Bus location marker */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Bus className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-foreground text-background text-xs px-2 py-1 rounded-md whitespace-nowrap">
                      Bus {childData.busNumber}
                    </div>
                  </div>
                </div>
              </div>

              {/* School marker */}
              <div className="absolute bottom-6 right-6">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                </div>
              </div>

              {/* Home marker */}
              <div className="absolute top-6 left-6">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 bg-success-foreground rounded-full" />
                </div>
              </div>

              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 40 40 Q 120 80 180 120 Q 240 140 280 160"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* Map Controls */}
            <div className="p-4 bg-muted/30">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">Home</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                    <span className="text-muted-foreground">School</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-6 text-xs">
                  <MapPin className="h-3 w-3 mr-1" />
                  Full Map
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/notifications" className="block">
            <Card className="border-0 shadow-md bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Settings className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium text-foreground">
                  Notifications
                </p>
                <p className="text-xs text-muted-foreground">Manage alerts</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/emergency" className="block">
            <Card className="border-0 shadow-md bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Phone className="h-6 w-6 mx-auto mb-2 text-destructive" />
                <p className="text-sm font-medium text-foreground">Emergency</p>
                <p className="text-xs text-muted-foreground">Contact support</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Driver Info */}
        <Card className="border-0 shadow-md bg-card/80 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Driver: {childData.driverName}
                </p>
                <p className="text-xs text-muted-foreground">
                  Route: {childData.route}
                </p>
              </div>
              <Link to="/bus-details">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
