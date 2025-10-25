import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingUp, Users, BarChart3 } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ErrorBoundary from "@/components/ErrorBoundary";

const Analytics = () => {

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

  // Ensure data is valid
  if (!networkData || !protocolData || networkData.length === 0 || protocolData.length === 0) {
    return (
      <DashboardLayout title="Blockchain Analytics">
        <div className="space-y-6">
          <div className="p-8 text-center">
            <p className="text-text-secondary">Loading analytics data...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="Blockchain Analytics">
      <div className="space-y-6">
            {/* Network Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-surface border border-border rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current TPS</CardTitle>
                  <Activity className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3,842</div>
                  <p className="text-xs text-success mt-1">+12.3% vs avg</p>
                </CardContent>
              </Card>

              <Card className="bg-surface border border-border rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Wallets</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24.5K</div>
                  <p className="text-xs text-text-secondary mt-1">Last 24 hours</p>
                </CardContent>
              </Card>

              <Card className="bg-surface border border-border rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$1.2B</div>
                  <p className="text-xs text-success mt-1">+8.4%</p>
                </CardContent>
              </Card>

              <Card className="bg-surface border border-border rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Network Fee</CardTitle>
                  <BarChart3 className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">0.00025</div>
                  <p className="text-xs text-text-secondary mt-1">SOL per tx</p>
                </CardContent>
              </Card>
            </div>

            {/* Network Activity Chart */}
            <Card className="bg-surface border border-border rounded-xl">
              <CardHeader>
                <CardTitle>Network Activity (24h)</CardTitle>
              </CardHeader>
              <CardContent>
                <ErrorBoundary fallback={
                  <div className="h-[350px] flex items-center justify-center bg-black/20 rounded-lg">
                    <p className="text-text-secondary">Chart unavailable</p>
                  </div>
                }>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={networkData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                      <XAxis dataKey="time" stroke="#9CA3AF" />
                      <YAxis yAxisId="left" stroke="#9CA3AF" />
                      <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0B0C10', border: '1px solid #1F2937', color: '#F9FAFB' }}
                      />
                      <Legend />
                      <Line 
                        yAxisId="left"
                        type="monotone" 
                        dataKey="tps" 
                        stroke="#2563EB" 
                        strokeWidth={2}
                        name="Transactions/sec"
                      />
                      <Line 
                        yAxisId="right"
                        type="monotone" 
                        dataKey="users" 
                        stroke="#06B6D4" 
                        strokeWidth={2}
                        name="Active Users"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ErrorBoundary>
              </CardContent>
            </Card>

            {/* Protocol Comparison */}
            <Card className="bg-surface border border-border rounded-xl">
              <CardHeader>
                <CardTitle>Top DEX Protocols by Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <ErrorBoundary fallback={
                  <div className="h-[350px] flex items-center justify-center bg-black/20 rounded-lg">
                    <p className="text-text-secondary">Chart unavailable</p>
                  </div>
                }>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={protocolData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0B0C10', border: '1px solid #1F2937', color: '#F9FAFB' }}
                      />
                      <Bar dataKey="volume" fill="#2563EB" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ErrorBoundary>
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-surface border border-border rounded-xl">
                <CardHeader>
                  <CardTitle>Your Risk Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Portfolio Volatility</span>
                      <span className="font-medium text-primary">Moderate</span>
                    </div>
                    <div className="h-2 bg-black rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Diversification Score</span>
                      <span className="font-medium text-success">Good</span>
                    </div>
                    <div className="h-2 bg-black rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Exposure Risk</span>
                      <span className="font-medium text-green-500">Low</span>
                    </div>
                    <div className="h-2 bg-black rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-gradient-to-r from-green-500 to-green-600 rounded-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-surface border border-border rounded-xl">
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
    </DashboardLayout>
  );
};

export default Analytics;
