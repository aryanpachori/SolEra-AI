import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const News = () => {

  const newsItems = [
    {
      id: 1,
      title: "Solana Network Processes Record 65 Million Transactions",
      source: "CoinDesk",
      time: "2 hours ago",
      category: "Network",
      summary: "Solana blockchain achieved a new milestone with 65M transactions in 24 hours, showcasing improved network stability.",
      trending: true,
    },
    {
      id: 2,
      title: "Jupiter Aggregator Surpasses $100B in Total Volume",
      source: "The Block",
      time: "4 hours ago",
      category: "DeFi",
      summary: "Leading Solana DEX aggregator Jupiter celebrates major milestone as trading volume crosses $100 billion mark.",
      trending: true,
    },
    {
      id: 3,
      title: "New Solana Mobile Saga Phone Pre-orders Open",
      source: "Decrypt",
      time: "6 hours ago",
      category: "Ecosystem",
      summary: "Solana Mobile announces Chapter 2 device with enhanced features for crypto enthusiasts and developers.",
      trending: false,
    },
    {
      id: 4,
      title: "Institutional DeFi Protocol Launches on Solana",
      source: "CoinTelegraph",
      time: "8 hours ago",
      category: "DeFi",
      summary: "Major institutional-grade DeFi protocol chooses Solana for its high throughput and low transaction costs.",
      trending: false,
    },
    {
      id: 5,
      title: "Solana Foundation Announces Developer Grant Program",
      source: "Solana News",
      time: "12 hours ago",
      category: "Development",
      summary: "New $10M fund allocated to support ecosystem developers building innovative applications on Solana.",
      trending: false,
    },
    {
      id: 6,
      title: "NFT Marketplace Magic Eden Expands Solana Features",
      source: "NFT Now",
      time: "1 day ago",
      category: "NFTs",
      summary: "Leading NFT marketplace introduces new creator tools and improved trading experience for Solana collections.",
      trending: false,
    },
  ];

  const categoryColors: Record<string, string> = {
    "Network": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "DeFi": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Ecosystem": "bg-green-500/20 text-green-400 border-green-500/30",
    "Development": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "NFTs": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  };

  return (
    <DashboardLayout title="Solana Ecosystem News">
      <div>
            {/* Trending Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <h2 className="text-xl font-bold">Trending Now</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {newsItems
                  .filter(item => item.trending)
                  .map((item) => (
                    <Card key={item.id} className="bg-surface border border-border hover:bg-white/5 transition-all cursor-pointer group rounded-xl">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <Badge className={categoryColors[item.category] + " mb-2 border"}>
                              {item.category}
                            </Badge>
                            <CardTitle className="text-lg leading-tight group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </CardTitle>
                          </div>
                          <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400 mb-3">{item.summary}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{item.source}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* All News */}
            <div>
              <h2 className="text-xl font-bold mb-4">Latest Updates</h2>
              <div className="space-y-4">
                {newsItems
                  .filter(item => !item.trending)
                  .map((item) => (
                    <Card key={item.id} className="bg-surface border border-border hover:bg-white/5 transition-all cursor-pointer group rounded-xl">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={categoryColors[item.category] + " border text-xs"}>
                                {item.category}
                              </Badge>
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <Clock className="w-3 h-3" />
                                <span>{item.time}</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-2">{item.summary}</p>
                            <span className="text-xs text-gray-500">{item.source}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
      </div>
    </DashboardLayout>
  );
};

export default News;
