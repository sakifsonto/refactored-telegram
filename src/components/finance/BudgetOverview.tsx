import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Settings, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/lib/utils';

const BudgetOverview = () => {
  const budgetCategories = [
  {
    category: 'Food & Dining',
    budgeted: 500,
    spent: 450,
    color: 'bg-orange-500'
  },
  {
    category: 'Transportation',
    budgeted: 300,
    spent: 280,
    color: 'bg-blue-500'
  },
  {
    category: 'Textbooks',
    budgeted: 250,
    spent: 200,
    color: 'bg-purple-500'
  },
  {
    category: 'Entertainment',
    budgeted: 200,
    spent: 180,
    color: 'bg-green-500'
  },
  {
    category: 'Housing',
    budgeted: 550,
    spent: 144,
    color: 'bg-indigo-500'
  }];


  const totalBudgeted = budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const overallProgress = totalSpent / totalBudgeted * 100;

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <Card className="h-full" data-id="9xneq58v7" data-path="src/components/finance/BudgetOverview.tsx">
      <CardHeader data-id="ew621ba61" data-path="src/components/finance/BudgetOverview.tsx">
        <CardTitle className="flex items-center justify-between" data-id="mg9v7r4y4" data-path="src/components/finance/BudgetOverview.tsx">
          <span data-id="la65t5qc6" data-path="src/components/finance/BudgetOverview.tsx">Budget Overview</span>
          <Link to="/budget" data-id="vtpahm41n" data-path="src/components/finance/BudgetOverview.tsx">
            <Button variant="outline" size="sm" data-id="9whqqhr2j" data-path="src/components/finance/BudgetOverview.tsx">
              <Settings className="w-4 h-4 mr-2" data-id="0t8tvi5kh" data-path="src/components/finance/BudgetOverview.tsx" />
              Manage
            </Button>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent data-id="082w9h1h0" data-path="src/components/finance/BudgetOverview.tsx">
        {/* Overall Progress */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg" data-id="elo3v3ra8" data-path="src/components/finance/BudgetOverview.tsx">
          <div className="flex items-center justify-between mb-2" data-id="vz5m6j6be" data-path="src/components/finance/BudgetOverview.tsx">
            <span className="text-sm font-medium text-gray-700" data-id="mp5ohq1ne" data-path="src/components/finance/BudgetOverview.tsx">Monthly Budget</span>
            <span className="text-sm font-bold" data-id="f58a0duue" data-path="src/components/finance/BudgetOverview.tsx">
              {formatCurrency(totalSpent)} / {formatCurrency(totalBudgeted)}
            </span>
          </div>
          <Progress
            value={overallProgress}
            className="h-3 mb-2" data-id="coql52ksr" data-path="src/components/finance/BudgetOverview.tsx" />

          <div className="flex items-center justify-between text-xs" data-id="3v8tkkd8y" data-path="src/components/finance/BudgetOverview.tsx">
            <span className="text-gray-600" data-id="zby2dvwep" data-path="src/components/finance/BudgetOverview.tsx">{overallProgress.toFixed(1)}% used</span>
            <span className="text-gray-600" data-id="p5evqdq4g" data-path="src/components/finance/BudgetOverview.tsx">
              {formatCurrency(totalBudgeted - totalSpent)} remaining
            </span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="space-y-4" data-id="4mcmubei8" data-path="src/components/finance/BudgetOverview.tsx">
          <h4 className="text-sm font-semibold text-gray-700" data-id="wc06r430h" data-path="src/components/finance/BudgetOverview.tsx">Category Breakdown</h4>
          {budgetCategories.map((item, index) => {
            const percentage = item.spent / item.budgeted * 100;
            return (
              <div key={index} className="space-y-2" data-id="x3fbdk576" data-path="src/components/finance/BudgetOverview.tsx">
                <div className="flex items-center justify-between" data-id="zb4wuj8wc" data-path="src/components/finance/BudgetOverview.tsx">
                  <span className="text-sm font-medium" data-id="q6m2ksfdl" data-path="src/components/finance/BudgetOverview.tsx">{item.category}</span>
                  <span className="text-sm text-gray-600" data-id="0nilfg3nb" data-path="src/components/finance/BudgetOverview.tsx">
                    {formatCurrency(item.spent)} / {formatCurrency(item.budgeted)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2" data-id="punhd92jm" data-path="src/components/finance/BudgetOverview.tsx">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(percentage)}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }} data-id="lh0fyuufc" data-path="src/components/finance/BudgetOverview.tsx" />

                </div>
                <div className="flex items-center justify-between text-xs text-gray-500" data-id="rghe2tgbl" data-path="src/components/finance/BudgetOverview.tsx">
                  <span data-id="1rm090xa8" data-path="src/components/finance/BudgetOverview.tsx">{percentage.toFixed(1)}% used</span>
                  <span data-id="culb3lfwz" data-path="src/components/finance/BudgetOverview.tsx">{formatCurrency(item.budgeted - item.spent)} left</span>
                </div>
              </div>);

          })}
        </div>

        {/* Budget Tips */}
        <div className="mt-6 p-3 bg-green-50 rounded-lg border border-green-200" data-id="8m2jit4j2" data-path="src/components/finance/BudgetOverview.tsx">
          <div className="flex items-center gap-2 mb-2" data-id="wsmua1jys" data-path="src/components/finance/BudgetOverview.tsx">
            <TrendingUp className="w-4 h-4 text-green-600" data-id="hg43nvnib" data-path="src/components/finance/BudgetOverview.tsx" />
            <span className="text-sm font-medium text-green-800" data-id="b8pkci2e2" data-path="src/components/finance/BudgetOverview.tsx">Budget Tip</span>
          </div>
          <p className="text-xs text-green-700" data-id="uylwubuph" data-path="src/components/finance/BudgetOverview.tsx">
            You're on track this month! Consider moving some unused housing budget to your emergency fund.
          </p>
        </div>
      </CardContent>
    </Card>);

};

export default BudgetOverview;