import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, BarChart3, Bell, Zap, Wallet, Activity, TrendingUp, Users, Shield, Lock, Link2 } from "lucide-react";
import InfiniteMovingCardsDemo from "@/components/ui/infinite-moving-cards-demo";
import CryptoNavbarDemo from "@/components/ui/resizable-navbar-demo";
import CryptoFloatingDockDemo from "@/components/ui/floating-dock-demo";
import CryptoLayoutTextFlipDemo from "@/components/ui/layout-text-flip-demo";
import CryptoAnimatedModalDemo from "@/components/ui/animated-modal-demo";
import CryptoHeroHighlightDemo from "@/components/ui/hero-highlight-demo";
import CryptoWobbleCardDemo from "@/components/ui/wobble-card-demo";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ColourfulText from "@/components/ui/colourful-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const CryptoLanding = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Mock data for Live Network Pulse
  const networkData = [
    { time: "00:00", tps: 2400 },
    { time: "04:00", tps: 3200 },
    { time: "08:00", tps: 2800 },
    { time: "12:00", tps: 4100 },
    { time: "16:00", tps: 3800 },
    { time: "20:00", tps: 2900 },
    { time: "24:00", tps: 2600 },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Floating Dock Navigation */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <CryptoFloatingDockDemo />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="hero-gradient absolute inset-0" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-5xl md:text-7xl font-bold leading-tight text-white font-heading">
              <CryptoLayoutTextFlipDemo />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/auth">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-black text-white flex items-center space-x-2 px-8 py-4 text-lg font-medium"
                >
                  <Wallet className="w-5 h-5" />
                  <span>Connect Wallet</span>
                </HoverBorderGradient>
              </Link>
              <CryptoAnimatedModalDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Powerful Features for <span className="text-gradient">Smart Trading</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to trade confidently on the Solana blockchain
            </p>
          </div>

          <CryptoWobbleCardDemo />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Users Say</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join thousands of traders who are already using SolEra AI to maximize their Solana trading potential
            </p>
          </div>
          <InfiniteMovingCardsDemo />
        </div>
      </section>

      {/* Live Network Pulse Section */}
      <section id="network-pulse" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
              See Solana in <ColourfulText text="Motion" />
            </h2>
            <p className="text-gray-400 text-lg text-center mb-12">
              Live blockchain data, token analytics, and market momentum at a glance.
            </p>
          </div>

          <div className="rounded-2xl w-full p-6 mb-8 bg-[#0B0C10] border border-gray-800">
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={networkData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Line 
                    type="monotone" 
                    dataKey="tps" 
                    stroke="#2563EB" 
                    strokeWidth={3}
                    dot={{ fill: "#2563EB", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#2563EB", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <Activity className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-500 mb-1">3,847</div>
              <div className="text-gray-400">TPS</div>
            </div>
            <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-500 mb-1">$2.4B</div>
              <div className="text-gray-400">24h Volume</div>
            </div>
            <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-500 mb-1">847K</div>
              <div className="text-gray-400">Active Wallets</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Trend Engine Section */}
      <section id="ai-engine" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
              The <ColourfulText text="AI" /> Behind SolEra
            </h2>
            <p className="text-gray-400 text-lg text-center mb-12">
              Analyze thousands of signals, news, and on-chain metrics — before they move the market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#0B0C10] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-semibold text-white font-heading">Sentiment Engine</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Monitors X (Twitter) + news sentiment in real-time to detect market mood shifts before they impact prices.
                </p>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#0B0C10] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-semibold text-white font-heading">Predictive Signals</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Detects whale moves, breakouts, and pattern formations using advanced ML algorithms trained on Solana data.
                </p>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations & Ecosystem Section */}
      <section id="ecosystem" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
              Powered by the <ColourfulText text="Solana" /> Ecosystem
            </h2>
            <p className="text-gray-400 text-lg text-center mb-12">
              Integrated with the fastest and most reliable DeFi infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-center w-24 h-24 bg-white/5 rounded-xl hover:bg-blue-500/10 transition-colors">
              <span className="text-white font-bold text-lg">SOL</span>
            </div>
            <div className="flex items-center justify-center w-24 h-24 bg-white/5 rounded-xl hover:bg-blue-500/10 transition-colors">
              <span className="text-white font-bold text-sm">Jupiter</span>
            </div>
            <div className="flex items-center justify-center w-24 h-24 bg-white/5 rounded-xl hover:bg-blue-500/10 transition-colors">
              <span className="text-white font-bold text-sm">Helius</span>
            </div>
            <div className="flex items-center justify-center w-24 h-24 bg-white/5 rounded-xl hover:bg-blue-500/10 transition-colors">
              <span className="text-white font-bold text-sm">Pyth</span>
            </div>
            <div className="flex items-center justify-center w-24 h-24 bg-white/5 rounded-xl hover:bg-blue-500/10 transition-colors">
              <span className="text-white font-bold text-sm">Tensor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Transparency Section */}
      <section id="security" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
              Your Keys, Your <ColourfulText text="Control" />.
            </h2>
            <p className="text-gray-400 text-lg text-center mb-12">
              Non-custodial by design — your funds never leave your wallet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500 transition-colors group">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:text-[#06B6D4] transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">End-to-end Encryption</h3>
              <p className="text-gray-400">All data transmission uses military-grade encryption protocols.</p>
            </div>
            <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500 transition-colors group">
              <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:text-[#06B6D4] transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">On-chain Verification</h3>
              <p className="text-gray-400">Every transaction is verified on the Solana blockchain in real-time.</p>
            </div>
            <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500 transition-colors group">
              <Link2 className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:text-[#06B6D4] transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">No Custodial Risk</h3>
              <p className="text-gray-400">We never hold your funds. You maintain full control of your assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
              The <ColourfulText text="SolEra" /> Roadmap
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 hidden lg:block"></div>
            
            <div className="space-y-12">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="bg-[#0B0C10] border border-blue-500 rounded-xl p-6 max-w-md">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-blue-500 font-semibold">Phase 1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-heading">Portfolio & Alerts</h3>
                  <p className="text-gray-400">Real-time portfolio tracking and customizable price alerts. (Now Live)</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-6 max-w-md">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-gray-400 font-semibold">Phase 2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-heading">AI Insights & Auto-Trading</h3>
                  <p className="text-gray-400">Advanced AI predictions and automated trading strategies. (Coming Soon)</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <div className="bg-[#0B0C10] border border-gray-800 rounded-xl p-6 max-w-md">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-gray-400 font-semibold">Phase 3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-heading">Multi-Chain Expansion</h3>
                  <p className="text-gray-400">Extend AI insights to Ethereum, BSC, and other major blockchains.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
              FAQ & <ColourfulText text="Support" />
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-500">
                  How do I connect my wallet?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Simply click "Connect Wallet" and select your preferred Solana wallet (Phantom, Solflare, etc.). 
                  Your wallet will prompt you to approve the connection. We never store your private keys.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-500">
                  What tokens are supported?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We support all SPL tokens on Solana, including SOL, USDC, USDT, and thousands of other tokens. 
                  Our AI analyzes any token with sufficient trading volume and market data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-500">
                  Is SolEra AI non-custodial?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, SolEra AI is completely non-custodial. Your funds never leave your wallet. 
                  We only read your portfolio data to provide insights and analytics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-500">
                  How does AI prediction work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our AI analyzes thousands of data points including price action, trading volume, social sentiment, 
                  on-chain metrics, and whale movements to identify patterns and predict potential market movements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-500">
                  Is there a mobile app?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Currently, SolEra AI is web-based and works perfectly on mobile browsers. 
                  A dedicated mobile app is planned for Phase 2 of our roadmap.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-500">
                  What makes SolEra different?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  SolEra AI combines real-time on-chain data with advanced machine learning to provide actionable insights 
                  specifically for Solana traders. Our non-custodial approach ensures you maintain full control of your assets.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-blue-950/20 relative">
        <div className="container mx-auto text-center relative">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-8">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                Ready to trade <ColourfulText text="smarter" />?
              </h2>
              <div className="flex-shrink-0">
                <AnimatedTooltip items={[{
                  id: 1,
                  name: "Aryan Pachori",
                  designation: "Software Engineer",
                  image: "/cat_pfp.jpg"
                }]} />
              </div>
            </div>
            <p className="text-xl text-gray-400">
              Join the future of Solana trading with <ColourfulText text="AI-powered intelligence" />
            </p>
            <button 
              onClick={scrollToTop}
              className="button-gradient px-8 text-lg h-14 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 SolEra AI. Built on Solana.</p>
        </div>
      </footer>

    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default CryptoLanding;
