import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, BarChart3, Bell, Zap } from "lucide-react";
import InfiniteMovingCardsDemo from "@/components/ui/infinite-moving-cards-demo";
import CryptoNavbarDemo from "@/components/ui/resizable-navbar-demo";
import CryptoFloatingDockDemo from "@/components/ui/floating-dock-demo";
import CryptoLayoutTextFlipDemo from "@/components/ui/layout-text-flip-demo";
import CryptoAnimatedModalDemo from "@/components/ui/animated-modal-demo";
import CryptoHeroHighlightDemo from "@/components/ui/hero-highlight-demo";
import CryptoWobbleCardDemo from "@/components/ui/wobble-card-demo";
import CryptoCardSpotlightDemo from "@/components/ui/card-spotlight-demo";

const CryptoLanding = () => {
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
            <div className="text-5xl md:text-7xl font-bold leading-tight text-white">
              <CryptoLayoutTextFlipDemo />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/auth">
                <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#3b82f6_50%,#60a5fa_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 text-lg font-medium text-white backdrop-blur-3xl">
                    Connect Wallet
                  </span>
                </button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
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

      {/* CTA Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-blue-950/20">
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
