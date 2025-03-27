
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AiInsights = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">AI Insights</h2>
        <Badge variant="secondary" className="animate-pulse">Live Updates</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-white/80 backdrop-blur-lg border border-primary/10 animate-fade-in">
          <h3 className="text-lg font-medium mb-2">Spending Pattern</h3>
          <p className="text-gray-600">Your restaurant spending is 15% higher than last month. Consider setting a dining budget.</p>
        </Card>
        <Card className="p-6 bg-white/80 backdrop-blur-lg border border-primary/10 animate-fade-in">
          <h3 className="text-lg font-medium mb-2">Investment Opportunity</h3>
          <p className="text-gray-600">Market conditions suggest increasing your ETF allocation by 10% this month.</p>
        </Card>
      </div>
    </div>
  );
};

export default AiInsights;
