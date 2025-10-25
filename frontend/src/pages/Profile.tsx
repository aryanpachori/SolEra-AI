import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(true);

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "Redirecting to landing page...",
    });
    setTimeout(() => navigate("/"), 1000);
  };

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <DashboardLayout title="Profile & Settings">
      <div className="max-w-4xl mx-auto space-y-6">
            {/* Profile Info */}
            <Card className="bg-surface border border-border rounded-xl">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20 border-2 border-blue-500">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-600 text-xl">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="border-white/20">
                      Upload Photo
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">JPG or PNG. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Display Name</Label>
                    <Input
                      id="name"
                      defaultValue="John Doe"
                      className="bg-black border-border text-text-primary placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john@example.com"
                      className="bg-black border-border text-text-primary placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connected Wallet */}
            <Card className="bg-surface border border-border rounded-xl">
              <CardHeader>
                <CardTitle>Connected Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium">7xKXt...9Yw2</p>
                      <p className="text-xs text-gray-500">Phantom Wallet</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-white/20">
                    Disconnect
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-surface border border-border rounded-xl">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Price Alerts</p>
                    <p className="text-sm text-gray-500">Get notified about price changes</p>
                  </div>
                  <Switch
                    checked={priceAlerts}
                    onCheckedChange={setPriceAlerts}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card className="bg-surface border border-border rounded-xl">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <select
                    id="currency"
                    className="w-full p-2 bg-black border border-border text-text-primary rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4">
              <Button onClick={handleSave} className="bg-primary hover:bg-primary-hover text-white shadow-glow">
                Save Changes
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-error/50 text-error hover:bg-error/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
