import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Target, Plus, Laptop, Plane, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/lib/utils';

const SavingsGoals = () => {
  const savingsGoals = [
  {
    id: 1,
    title: 'Emergency Fund',
    target: 2000,
    current: 847,
    deadline: '2024-12-31',
    icon: Target,
    color: 'bg-red-500',
    priority: 'high'
  },
  {
    id: 2,
    title: 'New Laptop',
    target: 1200,
    current: 400,
    deadline: '2024-08-15',
    icon: Laptop,
    color: 'bg-blue-500',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Spring Break Trip',
    target: 800,
    current: 250,
    deadline: '2024-03-01',
    icon: Plane,
    color: 'bg-green-500',
    priority: 'low'
  }];


  const totalSavingsTarget = savingsGoals.reduce((sum, goal) => sum + goal.target, 0);
  const totalCurrentSavings = savingsGoals.reduce((sum, goal) => sum + goal.current, 0);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full" data-id="4kb9x6h3p" data-path="src/components/finance/SavingsGoals.tsx">
      <CardHeader data-id="rze1kr6lc" data-path="src/components/finance/SavingsGoals.tsx">
        <CardTitle className="flex items-center justify-between" data-id="j9ngf0utm" data-path="src/components/finance/SavingsGoals.tsx">
          <span data-id="975f2a9z0" data-path="src/components/finance/SavingsGoals.tsx">Savings Goals</span>
          <Link to="/savings" data-id="nnk3f6zxu" data-path="src/components/finance/SavingsGoals.tsx">
            <Button variant="outline" size="sm" data-id="h9xs0q26g" data-path="src/components/finance/SavingsGoals.tsx">
              <Plus className="w-4 h-4 mr-2" data-id="7e9tljt7p" data-path="src/components/finance/SavingsGoals.tsx" />
              Add Goal
            </Button>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent data-id="z38m20vy9" data-path="src/components/finance/SavingsGoals.tsx">
        {/* Total Progress */}
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg" data-id="ukto4dzkj" data-path="src/components/finance/SavingsGoals.tsx">
          <div className="flex items-center justify-between mb-2" data-id="hs3obuqdh" data-path="src/components/finance/SavingsGoals.tsx">
            <span className="text-sm font-medium text-gray-700" data-id="fpl8hubk6" data-path="src/components/finance/SavingsGoals.tsx">Total Savings Progress</span>
            <span className="text-sm font-bold" data-id="10ftokscd" data-path="src/components/finance/SavingsGoals.tsx">
              {formatCurrency(totalCurrentSavings)} / {formatCurrency(totalSavingsTarget)}
            </span>
          </div>
          <Progress
            value={totalCurrentSavings / totalSavingsTarget * 100}
            className="h-3 mb-2" data-id="xnq4biein" data-path="src/components/finance/SavingsGoals.tsx" />

          <div className="text-center text-xs text-gray-600" data-id="y0pptibvd" data-path="src/components/finance/SavingsGoals.tsx">
            {(totalCurrentSavings / totalSavingsTarget * 100).toFixed(1)}% of total goals achieved
          </div>
        </div>

        {/* Individual Goals */}
        <div className="space-y-4" data-id="1js1y8nmt" data-path="src/components/finance/SavingsGoals.tsx">
          {savingsGoals.map((goal) => {
            const IconComponent = goal.icon;
            const progress = goal.current / goal.target * 100;
            const daysLeft = getDaysUntilDeadline(goal.deadline);

            return (
              <div key={goal.id} className="p-4 rounded-lg border bg-gray-50" data-id="2t4z7vkfp" data-path="src/components/finance/SavingsGoals.tsx">
                <div className="flex items-center justify-between mb-3" data-id="h79b2c2wo" data-path="src/components/finance/SavingsGoals.tsx">
                  <div className="flex items-center gap-2" data-id="e6kqqfjbn" data-path="src/components/finance/SavingsGoals.tsx">
                    <div className={`p-2 rounded-full ${goal.color} bg-opacity-10`} data-id="jgg4s4fmw" data-path="src/components/finance/SavingsGoals.tsx">
                      <IconComponent className={`w-4 h-4 ${goal.color.replace('bg-', 'text-')}`} data-id="6s4200jiz" data-path="src/components/finance/SavingsGoals.tsx" />
                    </div>
                    <div data-id="omypptygl" data-path="src/components/finance/SavingsGoals.tsx">
                      <h4 className="font-medium text-sm" data-id="al421rlp8" data-path="src/components/finance/SavingsGoals.tsx">{goal.title}</h4>
                      <p className="text-xs text-gray-500" data-id="j1b9f2li0" data-path="src/components/finance/SavingsGoals.tsx">Due: {formatDate(goal.deadline)}</p>
                    </div>
                  </div>
                  <div className="text-right" data-id="u4c7moanx" data-path="src/components/finance/SavingsGoals.tsx">
                    <div className="text-sm font-semibold" data-id="c0obno4ic" data-path="src/components/finance/SavingsGoals.tsx">{formatCurrency(goal.current)} / {formatCurrency(goal.target)}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(goal.priority)}`} data-id="l6zaabtxd" data-path="src/components/finance/SavingsGoals.tsx">
                      {goal.priority} priority
                    </div>
                  </div>
                </div>
                
                <Progress value={progress} className="h-2 mb-2" data-id="x516pzczr" data-path="src/components/finance/SavingsGoals.tsx" />
                
                <div className="flex items-center justify-between text-xs text-gray-600" data-id="3oxoe9ne7" data-path="src/components/finance/SavingsGoals.tsx">
                  <span data-id="zsqm75wj9" data-path="src/components/finance/SavingsGoals.tsx">{progress.toFixed(1)}% complete</span>
                  <span data-id="sozwskoy4" data-path="src/components/finance/SavingsGoals.tsx">
                    {daysLeft > 0 ? `${daysLeft} days left` : 'Overdue'}
                  </span>
                </div>
              </div>);

          })}
        </div>

        {/* Savings Tip */}
        <div className="mt-6 p-3 bg-purple-50 rounded-lg border border-purple-200" data-id="jd26ubzjw" data-path="src/components/finance/SavingsGoals.tsx">
          <div className="flex items-center gap-2 mb-2" data-id="4961hapw9" data-path="src/components/finance/SavingsGoals.tsx">
            <GraduationCap className="w-4 h-4 text-purple-600" data-id="uiy7103k1" data-path="src/components/finance/SavingsGoals.tsx" />
            <span className="text-sm font-medium text-purple-800" data-id="f6ejfg0a9" data-path="src/components/finance/SavingsGoals.tsx">Savings Tip</span>
          </div>
          <p className="text-xs text-purple-700" data-id="8ms6zqnmw" data-path="src/components/finance/SavingsGoals.tsx">
            Set up automatic transfers of $50/week to reach your emergency fund goal 2 months earlier!
          </p>
        </div>
      </CardContent>
    </Card>);

};

export default SavingsGoals;