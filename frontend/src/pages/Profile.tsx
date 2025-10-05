import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LayoutDashboard, BarChart3, Sparkles, Newspaper, User, LogOut, Wallet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(true);

  const menuItems = [
    { title: "Portfolio", url: "/dashboard", icon: LayoutDashboard },
    { title: "Analytics", url: "/analytics", icon: BarChart3 },
    { title: "AI Assistant", url: "/ai", icon: Sparkles },
    { title: "News", url: "/news", icon: Newspaper },
    { title: "Profile", url: "/profile", icon: User },
  ];

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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-black text-white">
        <Sidebar className="border-r border-white/10">
          <SidebarContent>
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold">SolEra AI</span>
              </div>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                        <Link to={item.url} className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 border-b border-white/10 bg-black/50 backdrop-blur-lg p-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold">Profile & Settings</h1>
            </div>
          </header>

          <div className="p-6 max-w-4xl mx-auto space-y-6">
            {/* Profile Info */}
            <Card className="glass border-white/10">
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
                      className="bg-secondary border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john@example.com"
                      className="bg-secondary border-white/10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Connected Wallet */}
            <Card className="glass border-white/10">
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
            <Card className="glass border-white/10">
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
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <select
                    id="currency"
                    className="w-full p-2 bg-secondary border border-white/10 rounded-md"
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
              <Button onClick={handleSave} className="button-gradient">
                Save Changes
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-500/50 text-red-500 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
