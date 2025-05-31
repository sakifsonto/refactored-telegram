import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { formatCurrency } from '@/lib/utils';

const ExpenseChart = () => {
  const monthlyData = [
  { month: 'Jan', amount: 1200 },
  { month: 'Feb', amount: 1350 },
  { month: 'Mar', amount: 1100 },
  { month: 'Apr', amount: 1450 },
  { month: 'May', amount: 1254 }];


  const categoryData = [
  { name: 'Food & Dining', value: 450, color: '#3B82F6' },
  { name: 'Transportation', value: 280, color: '#10B981' },
  { name: 'Textbooks', value: 200, color: '#F59E0B' },
  { name: 'Entertainment', value: 180, color: '#EF4444' },
  { name: 'Housing', value: 144, color: '#8B5CF6' }];


  return (
    <Card className="h-full" data-id="6qv30qs51" data-path="src/components/finance/ExpenseChart.tsx">
      <CardHeader data-id="jl8ufpmho" data-path="src/components/finance/ExpenseChart.tsx">
        <CardTitle className="flex items-center gap-2" data-id="b55xz825p" data-path="src/components/finance/ExpenseChart.tsx">
          <span data-id="vf2sqziod" data-path="src/components/finance/ExpenseChart.tsx">Spending Analysis</span>
          <span className="text-sm font-normal text-gray-500" data-id="4ea6vmr41" data-path="src/components/finance/ExpenseChart.tsx">Last 5 months</span>
        </CardTitle>
      </CardHeader>
      <CardContent data-id="t4qq6s1ri" data-path="src/components/finance/ExpenseChart.tsx">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-id="94d73g5o3" data-path="src/components/finance/ExpenseChart.tsx">
          {/* Monthly Spending Trend */}
          <div data-id="8u1hff298" data-path="src/components/finance/ExpenseChart.tsx">
            <h3 className="text-sm font-semibold mb-4 text-gray-700" data-id="p5oalzifq" data-path="src/components/finance/ExpenseChart.tsx">Monthly Spending Trend</h3>
            <ResponsiveContainer width="100%" height={200} data-id="siepsampc" data-path="src/components/finance/ExpenseChart.tsx">
              <BarChart data={monthlyData} data-id="iwctw7s5t" data-path="src/components/finance/ExpenseChart.tsx">
                <CartesianGrid strokeDasharray="3 3" data-id="8haaxlsu2" data-path="src/components/finance/ExpenseChart.tsx" />
                <XAxis dataKey="month" data-id="36o2y6rfa" data-path="src/components/finance/ExpenseChart.tsx" />
                <YAxis data-id="3ut2qk5yj" data-path="src/components/finance/ExpenseChart.tsx" />
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Spent']} data-id="8r0yq2ko7" data-path="src/components/finance/ExpenseChart.tsx" />
                <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} data-id="e3ddhnmzs" data-path="src/components/finance/ExpenseChart.tsx" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Breakdown */}
          <div data-id="olj5ljzbc" data-path="src/components/finance/ExpenseChart.tsx">
            <h3 className="text-sm font-semibold mb-4 text-gray-700" data-id="3c4ccubx5" data-path="src/components/finance/ExpenseChart.tsx">Category Breakdown (This Month)</h3>
            <ResponsiveContainer width="100%" height={200} data-id="72imxzyvh" data-path="src/components/finance/ExpenseChart.tsx">
              <PieChart data-id="6q0qkqrqz" data-path="src/components/finance/ExpenseChart.tsx">
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} data-id="46hsky5lc" data-path="src/components/finance/ExpenseChart.tsx">

                  {categoryData.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={entry.color} data-id="o6yc0s01m" data-path="src/components/finance/ExpenseChart.tsx" />
                  )}
                </Pie>
                <Tooltip formatter={(value) => [formatCurrency(Number(value)), 'Amount']} data-id="lkqj7ku2x" data-path="src/components/finance/ExpenseChart.tsx" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Details */}
        <div className="mt-6" data-id="fsuc5bbf7" data-path="src/components/finance/ExpenseChart.tsx">
          <h3 className="text-sm font-semibold mb-3 text-gray-700" data-id="nwaar6tmy" data-path="src/components/finance/ExpenseChart.tsx">Category Details</h3>
          <div className="space-y-2" data-id="pdkhh4c5z" data-path="src/components/finance/ExpenseChart.tsx">
            {categoryData.map((category) =>
            <div key={category.name} className="flex items-center justify-between p-2 rounded-lg bg-gray-50" data-id="6npzg4d0o" data-path="src/components/finance/ExpenseChart.tsx">
                <div className="flex items-center gap-3" data-id="lobz8h0gj" data-path="src/components/finance/ExpenseChart.tsx">
                  <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }} data-id="6akqigfx7" data-path="src/components/finance/ExpenseChart.tsx" />

                  <span className="text-sm font-medium" data-id="2mmv24o3q" data-path="src/components/finance/ExpenseChart.tsx">{category.name}</span>
                </div>
                <span className="text-sm font-semibold" data-id="oblsnhu8x" data-path="src/components/finance/ExpenseChart.tsx">{formatCurrency(category.value)}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>);

};

export default ExpenseChart;