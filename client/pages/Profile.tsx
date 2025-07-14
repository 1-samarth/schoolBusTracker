import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowLeft,
  User,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Bus,
  Settings,
} from "lucide-react";

export default function Profile() {
  // Mock bus history data
  const busHistory = [
    {
      date: "2024-01-15",
      status: "on-time",
      arrivalTime: "8:05 AM",
      expectedTime: "8:05 AM",
      route: "Maple Street Route",
    },
    {
      date: "2024-01-14",
      status: "delayed",
      arrivalTime: "8:15 AM",
      expectedTime: "8:05 AM",
      route: "Maple Street Route",
    },
    {
      date: "2024-01-13",
      status: "on-time",
      arrivalTime: "8:03 AM",
      expectedTime: "8:05 AM",
      route: "Maple Street Route",
    },
    {
      date: "2024-01-12",
      status: "missed",
      arrivalTime: "N/A",
      expectedTime: "8:05 AM",
      route: "Maple Street Route",
    },
    {
      date: "2024-01-11",
      status: "on-time",
      arrivalTime: "8:07 AM",
      expectedTime: "8:05 AM",
      route: "Maple Street Route",
    },
  ];

  const childData = {
    name: "Emma Johnson",
    photo: "/api/placeholder/80/80",
    grade: "5th Grade",
    school: "Riverside Elementary",
    busNumber: "B-247",
    route: "Maple Street Route",
    homeAddress: "123 Maple Street",
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "on-time":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "delayed":
        return <AlertCircle className="h-4 w-4 text-warning" />;
      case "missed":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "on-time":
        return "On Time";
      case "delayed":
        return "Delayed";
      case "missed":
        return "Missed";
      default:
        return "Unknown";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-time":
        return "bg-success/10 text-success border-success/20";
      case "delayed":
        return "bg-warning/10 text-warning border-warning/20";
      case "missed":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b shadow-sm">
        <div className="max-w-sm mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="font-semibold text-foreground">Profile</h1>
                <p className="text-xs text-muted-foreground">
                  Child info & bus history
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-sm mx-auto p-4 space-y-4">
        {/* Child Profile */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={childData.photo} alt={childData.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {childData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground">
                  {childData.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {childData.grade} �� {childData.school}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <Bus className="h-3 w-3 text-primary" />
                  <span className="text-xs text-muted-foreground">
                    Bus {childData.busNumber}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Route</p>
                <p className="text-sm font-medium text-foreground">
                  {childData.route}
                </p>
              </div>
              <div className="p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">
                  Home Address
                </p>
                <p className="text-sm font-medium text-foreground">
                  {childData.homeAddress}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bus History */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Bus History</h2>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Recent bus ride history and punctuality
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {busHistory.map((trip, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  {getStatusIcon(trip.status)}
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {new Date(trip.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {trip.arrivalTime !== "N/A"
                        ? `Arrived ${trip.arrivalTime}`
                        : "Missed pickup"}
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={getStatusColor(trip.status)}
                >
                  {getStatusText(trip.status)}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <h2 className="font-semibold text-foreground">This Week</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-success/10 rounded-lg">
                <p className="text-lg font-bold text-success">4</p>
                <p className="text-xs text-muted-foreground">On Time</p>
              </div>
              <div className="text-center p-3 bg-warning/10 rounded-lg">
                <p className="text-lg font-bold text-warning">1</p>
                <p className="text-xs text-muted-foreground">Delayed</p>
              </div>
              <div className="text-center p-3 bg-destructive/10 rounded-lg">
                <p className="text-lg font-bold text-destructive">0</p>
                <p className="text-xs text-muted-foreground">Missed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
