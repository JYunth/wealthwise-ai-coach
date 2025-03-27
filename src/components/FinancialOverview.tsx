
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSign, TrendingUp, PiggyBank } from "lucide-react";

const FinancialOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="p-6 bg-white/80 backdrop-blur-lg border border-primary/10">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <DollarSign className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Balance</p>
            <h3 className="text-2xl font-semibold">$24,500</h3>
          </div>
        </div>
        <Progress value={65} className="mt-4" />
      </Card>
      
      <Card className="p-6 bg-white/80 backdrop-blur-lg border border-primary/10">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-secondary/10 rounded-full">
            <TrendingUp className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Investments</p>
            <h3 className="text-2xl font-semibold">$12,750</h3>
          </div>
        </div>
        <Progress value={45} className="mt-4" />
      </Card>
      
      <Card className="p-6 bg-white/80 backdrop-blur-lg border border-primary/10">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-accent/10 rounded-full">
            <PiggyBank className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Savings Goal</p>
            <h3 className="text-2xl font-semibold">$8,200</h3>
          </div>
        </div>
        <Progress value={82} className="mt-4" />
      </Card>
    </div>
  );
};

export default FinancialOverview;
