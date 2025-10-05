import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LayoutDashboard, BarChart3, Sparkles, Newspaper, User, Activity, TrendingUp, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Analytics = () => {
  const location = useLocation();

  const menuItems = [
    { title: "Portfolio", url: "/dashboard", icon: LayoutDashboard },
    { title: "Analytics", url: "/analytics", icon: BarChart3 },
    { title: "AI Assistant", url: "/ai", icon: Sparkles },
    { title: "News", url: "/news", icon: Newspaper },
    { title: "Profile", url: "/profile", icon: User },
  ];

  // Mock analytics data
  const networkData = [
    { time: "00:00", tps: 2500, users: 15000 },
    { time: "04:00", tps: 2800, users: 16500 },
    { time: "08:00", tps: 3200, users: 22000 },
    { time: "12:00", tps: 4100, users: 28000 },
    { time: "16:00", tps: 3800, users: 25000 },
    { time: "20:00", tps: 3500, users: 21000 },
  ];

  const protocolData = [
    { name: "Jupiter", volume: 45 },
    { name: "Raydium", volume: 32 },
    { name: "Orca", volume: 28 },
    { name: "Meteora", volume: 18 },
    { name: "Others", volume: 12 },
  ];

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
              <h1 className="text-2xl font-bold">Blockchain Analytics</h1>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Network Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current TPS</CardTitle>
                  <Activity className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3,842</div>
                  <p className="text-xs text-green-500 mt-1">+12.3% vs avg</p>
                </CardContent>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Wallets</CardTitle>
                  <Users className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24.5K</div>
                  <p className="text-xs text-gray-400 mt-1">Last 24 hours</p>
                </CardContent>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$1.2B</div>
                  <p className="text-xs text-green-500 mt-1">+8.4%</p>
                </CardContent>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Network Fee</CardTitle>
                  <BarChart3 className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">0.00025</div>
                  <p className="text-xs text-gray-400 mt-1">SOL per tx</p>
                </CardContent>
              </Card>
            </div>

            {/* Network Activity Chart */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle>Network Activity (24h)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={networkData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="time" stroke="#888" />
                    <YAxis yAxisId="left" stroke="#3b82f6" />
                    <YAxis yAxisId="right" orientation="right" stroke="#60a5fa" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                    />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="tps" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      name="Transactions/sec"
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="users" 
                      stroke="#60a5fa" 
                      strokeWidth={2}
                      name="Active Users"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Protocol Comparison */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle>Top DEX Protocols by Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={protocolData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                    />
                    <Bar dataKey="volume" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle>Your Risk Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Portfolio Volatility</span>
                      <span className="font-medium text-blue-500">Moderate</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Diversification Score</span>
                      <span className="font-medium text-green-500">Good</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Exposure Risk</span>
                      <span className="font-medium text-green-500">Low</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle>Market Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-sm text-blue-400 font-medium">📈 SOL trending up</p>
                    <p className="text-xs text-gray-400 mt-1">+8.2% in last 24h with strong volume</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-sm text-blue-400 font-medium">💎 DeFi TVL growing</p>
                    <p className="text-xs text-gray-400 mt-1">Total value locked increased by $120M</p>
                  </div>
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-sm text-green-400 font-medium">🔥 Network activity high</p>
                    <p className="text-xs text-gray-400 mt-1">Above average TPS and user engagement</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
