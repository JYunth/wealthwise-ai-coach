
import { useEffect, useState } from "react";
import FinancialOverview from "@/components/FinancialOverview";
import AiInsights from "@/components/AiInsights";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [userName, setUserName] = useState("Alex");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background to-white p-6 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4">AI-Powered Finance</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Welcome back, {userName}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your personal AI financial coach is here to help you make smarter decisions
            with your money, all while keeping your data private and secure.
          </p>
        </div>

        <FinancialOverview />
        <AiInsights />

        <Card className="p-8 bg-white/80 backdrop-blur-lg border border-primary/10 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gamified Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-2xl font-bold text-primary">85%</span>
              </div>
              <h3 className="font-medium">Savings Target</h3>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-2xl font-bold text-secondary">62%</span>
              </div>
              <h3 className="font-medium">Investment Goals</h3>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-2xl font-bold text-accent">93%</span>
              </div>
              <h3 className="font-medium">Credit Score</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
