import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, BarChart3, Bell, Zap } from "lucide-react";

const CryptoLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <span className="text-xl font-bold">SolEra AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-purple-400 transition-colors">Features</a>
            <a href="#about" className="text-sm hover:text-purple-400 transition-colors">About</a>
            <Link to="/auth">
              <Button variant="outline" className="border-purple-500/50 hover:bg-purple-500/10">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="hero-gradient absolute inset-0" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Trade smarter on Solana with{" "}
              <span className="text-gradient">SolEra AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Set price alerts, track your portfolio, and act instantly — guided by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/auth">
                <Button size="lg" className="button-gradient px-8 text-lg h-14">
                  Connect Wallet
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 h-14 px-8">
                  Sign Up with Email
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for <span className="text-gradient">Smart Trading</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to trade confidently on the Solana blockchain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<BarChart3 className="w-10 h-10 text-purple-500" />}
              title="Portfolio Tracking"
              description="Monitor all your Solana assets in real-time with advanced charts and analytics"
            />
            <FeatureCard
              icon={<Bell className="w-10 h-10 text-purple-500" />}
              title="Price Alerts"
              description="Never miss important price movements with customizable alerts"
            />
            <FeatureCard
              icon={<Sparkles className="w-10 h-10 text-purple-500" />}
              title="AI-Powered Insights"
              description="Get intelligent analysis and recommendations from our advanced AI"
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10 text-purple-500" />}
              title="Real-time Data"
              description="Access live blockchain data and market updates instantly"
            />
            <FeatureCard
              icon={<BarChart3 className="w-10 h-10 text-purple-500" />}
              title="Advanced Analytics"
              description="Deep dive into on-chain metrics and trading patterns"
            />
            <FeatureCard
              icon={<Sparkles className="w-10 h-10 text-purple-500" />}
              title="News & Updates"
              description="Stay informed with curated Solana ecosystem news"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to trade smarter?
            </h2>
            <p className="text-xl text-gray-400">
              Join the future of Solana trading with AI-powered intelligence
            </p>
            <Link to="/auth">
              <Button size="lg" className="button-gradient px-8 text-lg h-14">
                Get Started Now
              </Button>
            </Link>
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
