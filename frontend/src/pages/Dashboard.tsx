import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LayoutDashboard, BarChart3, Sparkles, Newspaper, User, TrendingUp, Wallet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const Dashboard = () => {
  const location = useLocation();

  const menuItems = [
    { title: "Portfolio", url: "/dashboard", icon: LayoutDashboard },
    { title: "Analytics", url: "/analytics", icon: BarChart3 },
    { title: "AI Assistant", url: "/ai", icon: Sparkles },
    { title: "News", url: "/news", icon: Newspaper },
    { title: "Profile", url: "/profile", icon: User },
  ];

  // Mock portfolio data
  const portfolioData = [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1800 },
    { date: "Mar", value: 1600 },
    { date: "Apr", value: 2400 },
    { date: "May", value: 3200 },
    { date: "Jun", value: 2800 },
  ];

  const assetAllocation = [
    { name: "SOL", value: 45, color: "#8b5cf6" },
    { name: "USDC", value: 30, color: "#a78bfa" },
    { name: "Other", value: 25, color: "#c4b5fd" },
  ];

  const holdings = [
    { token: "SOL", balance: "12.5", value: "$1,875", change: "+5.2%" },
    { token: "USDC", balance: "1,200", value: "$1,200", change: "0%" },
    { token: "RAY", balance: "450", value: "$450", change: "+12.8%" },
    { token: "ORCA", balance: "320", value: "$275", change: "-2.3%" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-black text-white">
        <Sidebar className="border-r border-white/10">
          <SidebarContent>
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-500" />
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
              <h1 className="text-2xl font-bold">Portfolio Dashboard</h1>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Portfolio Summary */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                  <Wallet className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$3,800</div>
                  <p className="text-xs text-green-500 mt-1">+15.2% this month</p>
                </CardContent>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">24h Change</CardTitle>
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">+$142</div>
                  <p className="text-xs text-green-500 mt-1">+3.9%</p>
                </CardContent>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                  <BarChart3 className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4</div>
                  <p className="text-xs text-gray-400 mt-1">Tokens held</p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="glass border-white/10 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Portfolio Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={portfolioData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="date" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#8b5cf6" 
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="glass border-white/10">
                <CardHeader>
                  <CardTitle>Asset Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={assetAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {assetAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Holdings Table */}
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle>Your Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Token</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Balance</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Value</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">24h Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holdings.map((holding) => (
                        <tr key={holding.token} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-4 px-4 font-medium">{holding.token}</td>
                          <td className="py-4 px-4 text-right text-gray-300">{holding.balance}</td>
                          <td className="py-4 px-4 text-right font-medium">{holding.value}</td>
                          <td className={`py-4 px-4 text-right font-medium ${holding.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {holding.change}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
