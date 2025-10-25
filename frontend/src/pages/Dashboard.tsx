import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Wallet, BarChart3 } from "lucide-react";
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "motion/react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Dashboard = () => {

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
    { name: "SOL", value: 45, color: "#3b82f6" },
    { name: "USDC", value: 30, color: "#60a5fa" },
    { name: "Other", value: 25, color: "#93c5fd" },
  ];

  const holdings = [
    { token: "SOL", balance: "12.5", value: "$1,875", change: "+5.2%" },
    { token: "USDC", balance: "1,200", value: "$1,200", change: "0%" },
    { token: "RAY", balance: "450", value: "$450", change: "+12.8%" },
    { token: "ORCA", balance: "320", value: "$275", change: "-2.3%" },
  ];

  return (
    <DashboardLayout title="Portfolio Dashboard">
      <div className="space-y-6">
            {/* Portfolio Summary */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="glass border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Wallet className="h-4 w-4 text-blue-500" />
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="text-3xl font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      $3,800
                    </motion.div>
                    <p className="text-xs text-green-500 mt-1">+15.2% this month</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="glass border-white/10 hover:border-green-500/30 transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">24h Change</CardTitle>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="text-3xl font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      +$142
                    </motion.div>
                    <p className="text-xs text-green-500 mt-1">+3.9%</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="glass border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BarChart3 className="h-4 w-4 text-blue-500" />
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="text-3xl font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      4
                    </motion.div>
                    <p className="text-xs text-gray-400 mt-1">Tokens held</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass border-white/10 lg:col-span-2 hover:border-blue-500/30 transition-all duration-300">
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <CardTitle>Portfolio Value</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={portfolioData}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
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
                            stroke="#3b82f6" 
                            fillOpacity={1} 
                            fill="url(#colorValue)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      <CardTitle>Asset Allocation</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
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
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Holdings Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass border-white/10 hover:border-green-500/30 transition-all duration-300">
                <CardHeader>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                    <CardTitle>Your Holdings</CardTitle>
                  </motion.div>
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
                        {holdings.map((holding, index) => (
                          <motion.tr 
                            key={holding.token} 
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
                            whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                          >
                            <td className="py-4 px-4 font-medium">{holding.token}</td>
                            <td className="py-4 px-4 text-right text-gray-300">{holding.balance}</td>
                            <td className="py-4 px-4 text-right font-medium">{holding.value}</td>
                            <td className={`py-4 px-4 text-right font-medium ${holding.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                              {holding.change}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
