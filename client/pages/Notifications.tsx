import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Bell, Clock, MapPin, AlertCircle } from "lucide-react";

export default function Notifications() {
  const [notifications, setNotifications] = useState({
    busArrival: true,
    busDelay: true,
    emergencyAlerts: true,
    weeklyReports: false,
    maintenanceUpdates: false,
  });

  const handleToggle = (key: string) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
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
              <h1 className="font-semibold text-foreground">Notifications</h1>
              <p className="text-xs text-muted-foreground">
                Manage your alert preferences
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-sm mx-auto p-4 space-y-4">
        {/* Bus Tracking Notifications */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Bus Updates</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <Label htmlFor="bus-arrival">
                    Bus Arrival (5 min warning)
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Get notified when bus is 5 minutes away
                  </p>
                </div>
              </div>
              <Switch
                id="bus-arrival"
                checked={notifications.busArrival}
                onCheckedChange={() => handleToggle("busArrival")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <Label htmlFor="bus-delay">Delay Alerts</Label>
                  <p className="text-xs text-muted-foreground">
                    Notify about delays or route changes
                  </p>
                </div>
              </div>
              <Switch
                id="bus-delay"
                checked={notifications.busDelay}
                onCheckedChange={() => handleToggle("busDelay")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Safety & Emergency */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <h2 className="font-semibold text-foreground">
                Safety & Emergency
              </h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emergency-alerts">Emergency Alerts</Label>
                <p className="text-xs text-muted-foreground">
                  Critical safety notifications (always on)
                </p>
              </div>
              <Switch
                id="emergency-alerts"
                checked={notifications.emergencyAlerts}
                onCheckedChange={() => handleToggle("emergencyAlerts")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Optional Updates */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <h2 className="font-semibold text-foreground">Optional Updates</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="weekly-reports">Weekly Reports</Label>
                <p className="text-xs text-muted-foreground">
                  Summary of your child's bus rides
                </p>
              </div>
              <Switch
                id="weekly-reports"
                checked={notifications.weeklyReports}
                onCheckedChange={() => handleToggle("weeklyReports")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="maintenance-updates">Maintenance Updates</Label>
                <p className="text-xs text-muted-foreground">
                  Bus maintenance and route updates
                </p>
              </div>
              <Switch
                id="maintenance-updates"
                checked={notifications.maintenanceUpdates}
                onCheckedChange={() => handleToggle("maintenanceUpdates")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quiet Hours */}
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <h2 className="font-semibold text-foreground">Quiet Hours</h2>
            <p className="text-xs text-muted-foreground">
              Set times when you don't want to receive notifications
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs text-muted-foreground">From</Label>
                <Button
                  variant="outline"
                  className="w-full justify-start text-sm"
                >
                  9:00 PM
                </Button>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">To</Label>
                <Button
                  variant="outline"
                  className="w-full justify-start text-sm"
                >
                  6:00 AM
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button className="w-full h-12 text-base font-semibold shadow-lg">
          Save Preferences
        </Button>
      </div>
    </div>
  );
}
