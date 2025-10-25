import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEmailAuth = async (type: "login" | "signup") => {
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      toast({
        title: type === "login" ? "Welcome back!" : "Account created!",
        description: "Redirecting to dashboard...",
      });
      navigate("/dashboard");
    }, 1000);
  };


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="hero-gradient absolute inset-0" />
      
      <div className="w-full max-w-md relative z-10">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="/solera.png" 
              alt="SolEra AI" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-2xl font-bold">SolEra AI</span>
        </Link>

        <Card className="glass border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome to SolEra</CardTitle>
            <CardDescription className="text-gray-400">
              Sign in with your email to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email/Password Auth */}
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#0B0C10] border border-gray-800">
                <TabsTrigger value="login" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Login</TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#0B0C10] border-gray-800 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#0B0C10] border-gray-800 focus:border-blue-500"
                  />
                </div>
                <Button
                  onClick={() => handleEmailAuth("login")}
                  disabled={isLoading}
                  className="w-full button-gradient"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#0B0C10] border-gray-800 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#0B0C10] border-gray-800 focus:border-blue-500"
                  />
                </div>
                <Button
                  onClick={() => handleEmailAuth("signup")}
                  disabled={isLoading}
                  className="w-full button-gradient"
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-gray-500 mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Auth;
