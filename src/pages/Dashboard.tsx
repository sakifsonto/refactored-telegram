import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Wallet, TrendingUp, Target, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExpenseChart from '@/components/finance/ExpenseChart';
import RecentTransactions from '@/components/finance/RecentTransactions';
import BudgetOverview from '@/components/finance/BudgetOverview';
import SavingsGoals from '@/components/finance/SavingsGoals';
import AIInsights from '@/components/finance/AIInsights';
import { formatCurrency } from '@/lib/utils';

const Dashboard = () => {
  const [totalBalance] = useState(2847.50);
  const [monthlySpent] = useState(1254.30);
  const [monthlyBudget] = useState(1800.00);
  const [savingsGoal] = useState(5000.00);
  const [currentSavings] = useState(1247.80);

  const budgetProgress = monthlySpent / monthlyBudget * 100;
  const savingsProgress = currentSavings / savingsGoal * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-id="yifne1b3o" data-path="src/pages/Dashboard.tsx">
      <div className="container mx-auto p-6" data-id="61hmxxq7e" data-path="src/pages/Dashboard.tsx">
        {/* Header */}
        <div className="mb-8" data-id="osq40c0w2" data-path="src/pages/Dashboard.tsx">
          <h1 className="text-3xl font-bold text-gray-900 mb-2" data-id="v7u9t0gps" data-path="src/pages/Dashboard.tsx">Financial Dashboard</h1>
          <p className="text-gray-600" data-id="es0cno3z5" data-path="src/pages/Dashboard.tsx">Take control of your student finances with AI-powered insights</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-id="zczd7swja" data-path="src/pages/Dashboard.tsx">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white" data-id="t4i4wffcj" data-path="src/pages/Dashboard.tsx">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" data-id="xm5ba0x86" data-path="src/pages/Dashboard.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="igv069n6s" data-path="src/pages/Dashboard.tsx">Total Balance</CardTitle>
              <Wallet className="h-4 w-4 opacity-90" data-id="4vfxplrtu" data-path="src/pages/Dashboard.tsx" />
            </CardHeader>
            <CardContent data-id="83jxw3nrb" data-path="src/pages/Dashboard.tsx">
              <div className="text-2xl font-bold" data-id="1irph04ws" data-path="src/pages/Dashboard.tsx">{formatCurrency(totalBalance)}</div>
              <p className="text-xs opacity-90" data-id="bkfh6lhp4" data-path="src/pages/Dashboard.tsx">+2.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white" data-id="bin7wlur2" data-path="src/pages/Dashboard.tsx">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" data-id="oyshq7qzp" data-path="src/pages/Dashboard.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="gvgggeojl" data-path="src/pages/Dashboard.tsx">Monthly Spent</CardTitle>
              <TrendingUp className="h-4 w-4 opacity-90" data-id="oi2j111ly" data-path="src/pages/Dashboard.tsx" />
            </CardHeader>
            <CardContent data-id="5y631p6zf" data-path="src/pages/Dashboard.tsx">
              <div className="text-2xl font-bold" data-id="20vxukl4c" data-path="src/pages/Dashboard.tsx">{formatCurrency(monthlySpent)}</div>
              <p className="text-xs opacity-90" data-id="k4bfw117p" data-path="src/pages/Dashboard.tsx">{budgetProgress.toFixed(1)}% of budget used</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white" data-id="t99e1m8bd" data-path="src/pages/Dashboard.tsx">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" data-id="ea5hzwpvw" data-path="src/pages/Dashboard.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="fhmio2kqu" data-path="src/pages/Dashboard.tsx">Savings Goal</CardTitle>
              <Target className="h-4 w-4 opacity-90" data-id="fiedphix4" data-path="src/pages/Dashboard.tsx" />
            </CardHeader>
            <CardContent data-id="363olreab" data-path="src/pages/Dashboard.tsx">
              <div className="text-2xl font-bold" data-id="hzvyfw61o" data-path="src/pages/Dashboard.tsx">{formatCurrency(currentSavings)}</div>
              <p className="text-xs opacity-90" data-id="9fvamo2q7" data-path="src/pages/Dashboard.tsx">{savingsProgress.toFixed(1)}% of {formatCurrency(savingsGoal)}</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white" data-id="e4mb4sk3d" data-path="src/pages/Dashboard.tsx">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" data-id="4zx6stt5v" data-path="src/pages/Dashboard.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="qvmmsz086" data-path="src/pages/Dashboard.tsx">AI Score</CardTitle>
              <Brain className="h-4 w-4 opacity-90" data-id="w5bc69jci" data-path="src/pages/Dashboard.tsx" />
            </CardHeader>
            <CardContent data-id="m3yq1elwb" data-path="src/pages/Dashboard.tsx">
              <div className="text-2xl font-bold" data-id="w4ye9zjp6" data-path="src/pages/Dashboard.tsx">8.2/10</div>
              <p className="text-xs opacity-90" data-id="np3o6075o" data-path="src/pages/Dashboard.tsx">Good financial health</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8" data-id="h93aicjx5" data-path="src/pages/Dashboard.tsx">
          <h2 className="text-xl font-semibold mb-4" data-id="hfi9dlpag" data-path="src/pages/Dashboard.tsx">Quick Actions</h2>
          <div className="flex flex-wrap gap-4" data-id="87y8g27ax" data-path="src/pages/Dashboard.tsx">
            <Link to="/expenses/add" data-id="f05ila149" data-path="src/pages/Dashboard.tsx">
              <Button className="bg-blue-600 hover:bg-blue-700" data-id="tyr3y59h1" data-path="src/pages/Dashboard.tsx">
                <Plus className="w-4 h-4 mr-2" data-id="p4y677s4d" data-path="src/pages/Dashboard.tsx" />
                Add Expense
              </Button>
            </Link>
            <Link to="/budget" data-id="lhxvvn2t6" data-path="src/pages/Dashboard.tsx">
              <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50" data-id="vjndc7ep7" data-path="src/pages/Dashboard.tsx">
                Manage Budget
              </Button>
            </Link>
            <Link to="/savings" data-id="6mz2dt33b" data-path="src/pages/Dashboard.tsx">
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50" data-id="jq3b7pfvw" data-path="src/pages/Dashboard.tsx">
                Set Savings Goal
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8" data-id="s3rxmbvjc" data-path="src/pages/Dashboard.tsx">
          {/* Expense Chart */}
          <div className="lg:col-span-2" data-id="8dh8yurtb" data-path="src/pages/Dashboard.tsx">
            <ExpenseChart data-id="tb49xjebi" data-path="src/pages/Dashboard.tsx" />
          </div>

          {/* AI Insights */}
          <div data-id="hgh9dur3w" data-path="src/pages/Dashboard.tsx">
            <AIInsights data-id="v2nsgsg4p" data-path="src/pages/Dashboard.tsx" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-id="6k4b95lci" data-path="src/pages/Dashboard.tsx">
          {/* Recent Transactions */}
          <div className="lg:col-span-1" data-id="cfif9uof8" data-path="src/pages/Dashboard.tsx">
            <RecentTransactions data-id="2yj5srqjx" data-path="src/pages/Dashboard.tsx" />
          </div>

          {/* Budget Overview */}
          <div className="lg:col-span-1" data-id="3bo8lmn3m" data-path="src/pages/Dashboard.tsx">
            <BudgetOverview data-id="umscy46hs" data-path="src/pages/Dashboard.tsx" />
          </div>

          {/* Savings Goals */}
          <div className="lg:col-span-1" data-id="37mbz3btv" data-path="src/pages/Dashboard.tsx">
            <SavingsGoals data-id="7r2pq5adl" data-path="src/pages/Dashboard.tsx" />
          </div>
        </div>
      </div>
    </div>);

};

export default Dashboard;