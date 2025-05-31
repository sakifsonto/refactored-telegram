import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const AIInsights = () => {
  const insights = [
  {
    type: 'warning',
    icon: AlertTriangle,
    title: 'High Food Spending',
    description: 'You\'ve spent 23% more on food this month. Consider meal prepping to save ₹150/month.',
    priority: 'high',
    savings: 150
  },
  {
    type: 'success',
    icon: CheckCircle,
    title: 'Transportation Optimized',
    description: 'Great job! You\'re saving ₹45/month by using public transport instead of rideshares.',
    priority: 'low',
    savings: 45
  },
  {
    type: 'tip',
    icon: TrendingUp,
    title: 'Textbook Savings',
    description: 'Try renting textbooks instead of buying. You could save up to ₹120 this semester.',
    priority: 'medium',
    savings: 120
  }];


  const getInsightStyle = (type: string) => {
    switch (type) {
      case 'warning':
        return 'border-orange-200 bg-orange-50';
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'tip':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'text-orange-500';
      case 'success':
        return 'text-green-500';
      case 'tip':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
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
    <Card className="h-full" data-id="tm7803va1" data-path="src/components/finance/AIInsights.tsx">
      <CardHeader data-id="x0jlg0vth" data-path="src/components/finance/AIInsights.tsx">
        <CardTitle className="flex items-center gap-2" data-id="t7idezf48" data-path="src/components/finance/AIInsights.tsx">
          <Brain className="w-5 h-5 text-purple-600" data-id="ib3x62wjv" data-path="src/components/finance/AIInsights.tsx" />
          AI Financial Insights
        </CardTitle>
      </CardHeader>
      <CardContent data-id="gnca4ciaj" data-path="src/components/finance/AIInsights.tsx">
        <div className="space-y-4" data-id="lmlvsrc43" data-path="src/components/finance/AIInsights.tsx">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border ${getInsightStyle(insight.type)}`} data-id="30g94eseh" data-path="src/components/finance/AIInsights.tsx">

                <div className="flex items-start gap-3" data-id="dx2u86rf4" data-path="src/components/finance/AIInsights.tsx">
                  <IconComponent className={`w-5 h-5 mt-0.5 ${getIconColor(insight.type)}`} data-id="s67huhe5p" data-path="src/components/finance/AIInsights.tsx" />
                  <div className="flex-1" data-id="mkwb1k0vh" data-path="src/components/finance/AIInsights.tsx">
                    <div className="flex items-center justify-between mb-2" data-id="53rho7bkk" data-path="src/components/finance/AIInsights.tsx">
                      <h4 className="font-semibold text-sm" data-id="0udppldh5" data-path="src/components/finance/AIInsights.tsx">{insight.title}</h4>
                      <Badge
                        variant="secondary"
                        className={getPriorityColor(insight.priority)} data-id="x8uemf5vx" data-path="src/components/finance/AIInsights.tsx">

                        {insight.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2" data-id="8k8eirfhd" data-path="src/components/finance/AIInsights.tsx">{insight.description}</p>
                    <div className="flex items-center justify-between" data-id="eek3c0we7" data-path="src/components/finance/AIInsights.tsx">
                      <span className="text-xs font-medium text-green-600" data-id="p2v8q9e2m" data-path="src/components/finance/AIInsights.tsx">
                        Potential savings: {formatCurrency(insight.savings)}/month
                      </span>
                    </div>
                  </div>
                </div>
              </div>);

          })}
        </div>

        {/* AI Score */}
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200" data-id="d1ng0cdik" data-path="src/components/finance/AIInsights.tsx">
          <div className="flex items-center justify-between mb-2" data-id="j44eqas8c" data-path="src/components/finance/AIInsights.tsx">
            <h4 className="font-semibold text-sm" data-id="rwd3j2x0k" data-path="src/components/finance/AIInsights.tsx">Financial Health Score</h4>
            <span className="text-2xl font-bold text-purple-600" data-id="c6jig3u22" data-path="src/components/finance/AIInsights.tsx">8.2/10</span>
          </div>
          <p className="text-xs text-gray-600 mb-3" data-id="mgewhrti2" data-path="src/components/finance/AIInsights.tsx">
            Your financial habits are on track! Focus on reducing food expenses to reach 9.0.
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2" data-id="g5ejeg27u" data-path="src/components/finance/AIInsights.tsx">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: '82%' }} data-id="yulf3ix01" data-path="src/components/finance/AIInsights.tsx" />

          </div>
        </div>
      </CardContent>
    </Card>);

};

export default AIInsights;