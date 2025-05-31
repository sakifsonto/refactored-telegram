import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Calendar, Target } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart } from
'recharts';
import { useState } from 'react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('3months');

  const monthlySpendingData = [
  { month: 'Oct', amount: 1100, budget: 1800, savings: 250 },
  { month: 'Nov', amount: 1350, budget: 1800, savings: 180 },
  { month: 'Dec', amount: 1200, budget: 1800, savings: 320 },
  { month: 'Jan', amount: 1450, budget: 1800, savings: 150 },
  { month: 'Feb', amount: 1254, budget: 1800, savings: 280 }];


  const categoryTrendData = [
  { month: 'Oct', food: 380, transport: 250, textbooks: 150, entertainment: 120, housing: 200 },
  { month: 'Nov', food: 420, transport: 280, textbooks: 200, entertainment: 150, housing: 300 },
  { month: 'Dec', food: 400, transport: 260, textbooks: 100, entertainment: 140, housing: 300 },
  { month: 'Jan', food: 480, transport: 300, textbooks: 250, entertainment: 180, housing: 240 },
  { month: 'Feb', food: 450, transport: 280, textbooks: 200, entertainment: 180, housing: 144 }];


  const categoryDistribution = [
  { name: 'Food & Dining', value: 450, color: '#3B82F6', percentage: 35.8 },
  { name: 'Transportation', value: 280, color: '#10B981', percentage: 22.3 },
  { name: 'Textbooks', value: 200, color: '#F59E0B', percentage: 15.9 },
  { name: 'Entertainment', value: 180, color: '#EF4444', percentage: 14.3 },
  { name: 'Housing', value: 144, color: '#8B5CF6', percentage: 11.5 }];


  const savingsGoalData = [
  { month: 'Oct', target: 300, actual: 250 },
  { month: 'Nov', target: 300, actual: 180 },
  { month: 'Dec', target: 300, actual: 320 },
  { month: 'Jan', target: 300, actual: 150 },
  { month: 'Feb', target: 300, actual: 280 }];


  const weeklySpendingData = [
  { week: 'Week 1', amount: 285 },
  { week: 'Week 2', amount: 320 },
  { week: 'Week 3', amount: 275 },
  { week: 'Week 4', amount: 374 }];


  const insights = [
  {
    title: 'Spending Trend',
    value: '+12.3%',
    description: 'vs last month',
    icon: TrendingUp,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    title: 'Budget Efficiency',
    value: '69.7%',
    description: 'of budget used',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Savings Rate',
    value: '15.6%',
    description: 'of income saved',
    icon: DollarSign,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Daily Average',
    value: '₹41.80',
    description: 'per day this month',
    icon: Calendar,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-id="61k6wdwfs" data-path="src/pages/Analytics.tsx">
      <div className="container mx-auto p-6" data-id="uo8fwibk6" data-path="src/pages/Analytics.tsx">
        {/* Header */}
        <div className="flex justify-between items-center mb-8" data-id="f368w6cnw" data-path="src/pages/Analytics.tsx">
          <div data-id="7nqt63n0s" data-path="src/pages/Analytics.tsx">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-id="kwj3jwc0r" data-path="src/pages/Analytics.tsx">Financial Analytics</h1>
            <p className="text-gray-600" data-id="jan5tb934" data-path="src/pages/Analytics.tsx">Comprehensive insights into your spending patterns and financial health</p>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange} data-id="p2fs21yk3" data-path="src/pages/Analytics.tsx">
            <SelectTrigger className="w-[180px]" data-id="s6pftcth8" data-path="src/pages/Analytics.tsx">
              <SelectValue data-id="rfi3lspui" data-path="src/pages/Analytics.tsx" />
            </SelectTrigger>
            <SelectContent data-id="sykdwjeuu" data-path="src/pages/Analytics.tsx">
              <SelectItem value="1month" data-id="ol3c38wpl" data-path="src/pages/Analytics.tsx">Last Month</SelectItem>
              <SelectItem value="3months" data-id="2fy71qkf8" data-path="src/pages/Analytics.tsx">Last 3 Months</SelectItem>
              <SelectItem value="6months" data-id="jj84rlzyj" data-path="src/pages/Analytics.tsx">Last 6 Months</SelectItem>
              <SelectItem value="1year" data-id="i6w9aud19" data-path="src/pages/Analytics.tsx">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-id="bzmsek5qy" data-path="src/pages/Analytics.tsx">
          {insights.map((insight, index) => {
            const IconComponent = insight.icon;
            return (
              <Card key={index} data-id="lcg5il3is" data-path="src/pages/Analytics.tsx">
                <CardContent className="p-6" data-id="xseo3hs2c" data-path="src/pages/Analytics.tsx">
                  <div className="flex items-center justify-between" data-id="mift74imb" data-path="src/pages/Analytics.tsx">
                    <div data-id="fq0670nua" data-path="src/pages/Analytics.tsx">
                      <p className="text-sm font-medium text-gray-600" data-id="aemmb514e" data-path="src/pages/Analytics.tsx">{insight.title}</p>
                      <p className="text-2xl font-bold mt-1" data-id="08xl33270" data-path="src/pages/Analytics.tsx">{insight.value}</p>
                      <p className="text-xs text-gray-500 mt-1" data-id="qkr5wpddy" data-path="src/pages/Analytics.tsx">{insight.description}</p>
                    </div>
                    <div className={`p-3 rounded-full ${insight.bgColor}`} data-id="ohjs00wiz" data-path="src/pages/Analytics.tsx">
                      <IconComponent className={`w-6 h-6 ${insight.color}`} data-id="952d2ivax" data-path="src/pages/Analytics.tsx" />
                    </div>
                  </div>
                </CardContent>
              </Card>);

          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" data-id="gdpapfprv" data-path="src/pages/Analytics.tsx">
          {/* Monthly Spending vs Budget */}
          <Card data-id="keurvx0fn" data-path="src/pages/Analytics.tsx">
            <CardHeader data-id="ms8rffoj3" data-path="src/pages/Analytics.tsx">
              <CardTitle data-id="snns79xvo" data-path="src/pages/Analytics.tsx">Spending vs Budget Trend</CardTitle>
            </CardHeader>
            <CardContent data-id="q3g8s9ruu" data-path="src/pages/Analytics.tsx">
              <ResponsiveContainer width="100%" height={300} data-id="fi582try8" data-path="src/pages/Analytics.tsx">
                <BarChart data={monthlySpendingData} data-id="pptwzma3m" data-path="src/pages/Analytics.tsx">
                  <CartesianGrid strokeDasharray="3 3" data-id="uuq6l1mgh" data-path="src/pages/Analytics.tsx" />
                  <XAxis dataKey="month" data-id="0ib51s3y0" data-path="src/pages/Analytics.tsx" />
                  <YAxis data-id="km643x22l" data-path="src/pages/Analytics.tsx" />
                  <Tooltip formatter={(value, name) => [formatCurrency(Number(value)), name === 'amount' ? 'Spent' : 'Budget']} data-id="spdoldidd" data-path="src/pages/Analytics.tsx" />
                  <Bar dataKey="budget" fill="#E5E7EB" name="Budget" data-id="uaeqsgait" data-path="src/pages/Analytics.tsx" />
                  <Bar dataKey="amount" fill="#3B82F6" name="Spent" data-id="u2rbgl5b4" data-path="src/pages/Analytics.tsx" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card data-id="80hycotkx" data-path="src/pages/Analytics.tsx">
            <CardHeader data-id="4ddqfrsrm" data-path="src/pages/Analytics.tsx">
              <CardTitle data-id="wfkott8we" data-path="src/pages/Analytics.tsx">Current Month Breakdown</CardTitle>
            </CardHeader>
            <CardContent data-id="ap8d8war5" data-path="src/pages/Analytics.tsx">
              <div className="flex items-center justify-center" data-id="xjfe6n54h" data-path="src/pages/Analytics.tsx">
                <ResponsiveContainer width="100%" height={300} data-id="9g01ys6kv" data-path="src/pages/Analytics.tsx">
                  <PieChart data-id="7rp65xw3z" data-path="src/pages/Analytics.tsx">
                    <Pie
                      data={categoryDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value" data-id="7bp5wml9g" data-path="src/pages/Analytics.tsx">

                      {categoryDistribution.map((entry, index) =>
                      <Cell key={`cell-${index}`} fill={entry.color} data-id="o04mgbtoz" data-path="src/pages/Analytics.tsx" />
                      )}
                    </Pie>
                    <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Amount']} data-id="lbr3nigcm" data-path="src/pages/Analytics.tsx" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 gap-2 mt-4" data-id="q6u39x44u" data-path="src/pages/Analytics.tsx">
                {categoryDistribution.map((category, index) =>
                <div key={index} className="flex items-center justify-between" data-id="qosdq2tat" data-path="src/pages/Analytics.tsx">
                    <div className="flex items-center gap-2" data-id="hh1kip20y" data-path="src/pages/Analytics.tsx">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} data-id="msgept11g" data-path="src/pages/Analytics.tsx" />
                      <span className="text-sm" data-id="hpplvzn7s" data-path="src/pages/Analytics.tsx">{category.name}</span>
                    </div>
                    <div className="text-right" data-id="ks73bj50x" data-path="src/pages/Analytics.tsx">
                      <span className="text-sm font-medium" data-id="5j99f0v10" data-path="src/pages/Analytics.tsx">{formatCurrency(category.value)}</span>
                      <span className="text-xs text-gray-500 ml-2" data-id="r5kp8odbc" data-path="src/pages/Analytics.tsx">({category.percentage}%)</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" data-id="hnt4auwfb" data-path="src/pages/Analytics.tsx">
          {/* Category Trends */}
          <Card data-id="shrqafkky" data-path="src/pages/Analytics.tsx">
            <CardHeader data-id="zi19ed6pr" data-path="src/pages/Analytics.tsx">
              <CardTitle data-id="veqq7ycfn" data-path="src/pages/Analytics.tsx">Category Spending Trends</CardTitle>
            </CardHeader>
            <CardContent data-id="roe68kpbd" data-path="src/pages/Analytics.tsx">
              <ResponsiveContainer width="100%" height={300} data-id="k2mf70kwp" data-path="src/pages/Analytics.tsx">
                <LineChart data={categoryTrendData} data-id="2gzxd22bv" data-path="src/pages/Analytics.tsx">
                  <CartesianGrid strokeDasharray="3 3" data-id="yex6g8gxd" data-path="src/pages/Analytics.tsx" />
                  <XAxis dataKey="month" data-id="iwml64fpj" data-path="src/pages/Analytics.tsx" />
                  <YAxis data-id="ch74u77kn" data-path="src/pages/Analytics.tsx" />
                  <Tooltip formatter={(value, name) => [formatCurrency(Number(value)), name]} data-id="o22kniraq" data-path="src/pages/Analytics.tsx" />
                  <Line type="monotone" dataKey="food" stroke="#3B82F6" strokeWidth={2} name="Food" data-id="so0acxw8a" data-path="src/pages/Analytics.tsx" />
                  <Line type="monotone" dataKey="transport" stroke="#10B981" strokeWidth={2} name="Transport" data-id="3qs43ww97" data-path="src/pages/Analytics.tsx" />
                  <Line type="monotone" dataKey="textbooks" stroke="#F59E0B" strokeWidth={2} name="Textbooks" data-id="6qdbh7hvu" data-path="src/pages/Analytics.tsx" />
                  <Line type="monotone" dataKey="entertainment" stroke="#EF4444" strokeWidth={2} name="Entertainment" data-id="md6phvzer" data-path="src/pages/Analytics.tsx" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Savings Goal Progress */}
          <Card data-id="03a9jfgo6" data-path="src/pages/Analytics.tsx">
            <CardHeader data-id="0z63xf4zv" data-path="src/pages/Analytics.tsx">
              <CardTitle data-id="h4cx1rp0d" data-path="src/pages/Analytics.tsx">Savings Goal Tracking</CardTitle>
            </CardHeader>
            <CardContent data-id="ur4tnpwjz" data-path="src/pages/Analytics.tsx">
              <ResponsiveContainer width="100%" height={300} data-id="bwqehgzsl" data-path="src/pages/Analytics.tsx">
                <AreaChart data={savingsGoalData} data-id="9unu6c6jt" data-path="src/pages/Analytics.tsx">
                  <CartesianGrid strokeDasharray="3 3" data-id="00aemxqmn" data-path="src/pages/Analytics.tsx" />
                  <XAxis dataKey="month" data-id="s4kyfikbl" data-path="src/pages/Analytics.tsx" />
                  <YAxis data-id="mmooqbozk" data-path="src/pages/Analytics.tsx" />
                  <Tooltip formatter={(value, name) => [formatCurrency(Number(value)), name === 'target' ? 'Target' : 'Actual']} data-id="j2ax6cdnb" data-path="src/pages/Analytics.tsx" />
                  <Area type="monotone" dataKey="target" stackId="1" stroke="#E5E7EB" fill="#E5E7EB" name="Target" data-id="052o1oyng" data-path="src/pages/Analytics.tsx" />
                  <Area type="monotone" dataKey="actual" stackId="2" stroke="#10B981" fill="#10B981" name="Actual" data-id="jp6imz8cz" data-path="src/pages/Analytics.tsx" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-id="766dc1jf3" data-path="src/pages/Analytics.tsx">
          {/* Weekly Spending */}
          <Card className="lg:col-span-2" data-id="0dt5qep04" data-path="src/pages/Analytics.tsx">
            <CardHeader data-id="k6kj751yn" data-path="src/pages/Analytics.tsx">
              <CardTitle data-id="ky6hmke9d" data-path="src/pages/Analytics.tsx">Weekly Spending Pattern (Current Month)</CardTitle>
            </CardHeader>
            <CardContent data-id="hcybzjxqh" data-path="src/pages/Analytics.tsx">
              <ResponsiveContainer width="100%" height={250} data-id="nynqttxfh" data-path="src/pages/Analytics.tsx">
                <BarChart data={weeklySpendingData} data-id="8k1pgttn7" data-path="src/pages/Analytics.tsx">
                  <CartesianGrid strokeDasharray="3 3" data-id="7201lxsbb" data-path="src/pages/Analytics.tsx" />
                  <XAxis dataKey="week" data-id="mszasa67l" data-path="src/pages/Analytics.tsx" />
                  <YAxis data-id="7di7849x9" data-path="src/pages/Analytics.tsx" />
                  <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Spent']} data-id="0nyhxo3cd" data-path="src/pages/Analytics.tsx" />
                  <Bar dataKey="amount" fill="#8B5CF6" radius={[4, 4, 0, 0]} data-id="sszadp0hu" data-path="src/pages/Analytics.tsx" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Financial Health Score */}
          <Card data-id="xt2wvvn4u" data-path="src/pages/Analytics.tsx">
            <CardHeader data-id="jl1xxvpku" data-path="src/pages/Analytics.tsx">
              <CardTitle data-id="sepu9v6j4" data-path="src/pages/Analytics.tsx">Financial Health Score</CardTitle>
            </CardHeader>
            <CardContent data-id="9a4olyk5e" data-path="src/pages/Analytics.tsx">
              <div className="text-center" data-id="h76xvps7f" data-path="src/pages/Analytics.tsx">
                <div className="text-4xl font-bold text-blue-600 mb-2" data-id="t4enh9gwz" data-path="src/pages/Analytics.tsx">8.2</div>
                <div className="text-sm text-gray-600 mb-4" data-id="rnakc5iz8" data-path="src/pages/Analytics.tsx">out of 10</div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4" data-id="dbhryfbu0" data-path="src/pages/Analytics.tsx">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full" style={{ width: '82%' }} data-id="z29gyopvg" data-path="src/pages/Analytics.tsx" />
                </div>
                <div className="space-y-3" data-id="3no57qt4t" data-path="src/pages/Analytics.tsx">
                  <div className="flex justify-between items-center" data-id="qpb0n4h2i" data-path="src/pages/Analytics.tsx">
                    <span className="text-sm" data-id="2kse69bhg" data-path="src/pages/Analytics.tsx">Budget Adherence</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800" data-id="gbil5slsw" data-path="src/pages/Analytics.tsx">Excellent</Badge>
                  </div>
                  <div className="flex justify-between items-center" data-id="7wjl777wl" data-path="src/pages/Analytics.tsx">
                    <span className="text-sm" data-id="bfi9j9cfe" data-path="src/pages/Analytics.tsx">Savings Rate</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800" data-id="u5bddwq3j" data-path="src/pages/Analytics.tsx">Good</Badge>
                  </div>
                  <div className="flex justify-between items-center" data-id="0s4jtcj5c" data-path="src/pages/Analytics.tsx">
                    <span className="text-sm" data-id="hsp1231yj" data-path="src/pages/Analytics.tsx">Spending Consistency</span>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800" data-id="v88z9y2qd" data-path="src/pages/Analytics.tsx">Average</Badge>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg" data-id="1cqbf5oau" data-path="src/pages/Analytics.tsx">
                  <p className="text-xs text-blue-700" data-id="wkzzlq81v" data-path="src/pages/Analytics.tsx">
                    Great progress! Focus on reducing food expenses to reach a 9.0 score.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>);

};

export default Analytics;