import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Coffee, Car, Book, Home, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatTransactionAmount } from '@/lib/utils';

const RecentTransactions = () => {
  const transactions = [
  {
    id: 1,
    description: 'Starbucks Coffee',
    category: 'Food & Dining',
    amount: -4.95,
    date: '2024-01-15',
    icon: Coffee,
    color: 'text-orange-500'
  },
  {
    id: 2,
    description: 'Bus Pass Monthly',
    category: 'Transportation',
    amount: -75.00,
    date: '2024-01-14',
    icon: Car,
    color: 'text-blue-500'
  },
  {
    id: 3,
    description: 'Textbook - Physics',
    category: 'Textbooks',
    amount: -89.99,
    date: '2024-01-13',
    icon: Book,
    color: 'text-purple-500'
  },
  {
    id: 4,
    description: 'Part-time Job',
    category: 'Income',
    amount: 350.00,
    date: '2024-01-12',
    icon: Home,
    color: 'text-green-500'
  },
  {
    id: 5,
    description: 'Grocery Shopping',
    category: 'Food & Dining',
    amount: -67.43,
    date: '2024-01-11',
    icon: Utensils,
    color: 'text-red-500'
  }];


  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Food & Dining':
        return 'bg-orange-100 text-orange-800';
      case 'Transportation':
        return 'bg-blue-100 text-blue-800';
      case 'Textbooks':
        return 'bg-purple-100 text-purple-800';
      case 'Income':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <Card className="h-full" data-id="ij4hww7ri" data-path="src/components/finance/RecentTransactions.tsx">
      <CardHeader data-id="iozt8ofwx" data-path="src/components/finance/RecentTransactions.tsx">
        <CardTitle className="flex items-center justify-between" data-id="1r9fa3f5u" data-path="src/components/finance/RecentTransactions.tsx">
          <span data-id="uf96tu6ab" data-path="src/components/finance/RecentTransactions.tsx">Recent Transactions</span>
          <Link to="/expenses" data-id="jyu47pee0" data-path="src/components/finance/RecentTransactions.tsx">
            <Button variant="outline" size="sm" data-id="e1zm27flr" data-path="src/components/finance/RecentTransactions.tsx">
              <ArrowUpDown className="w-4 h-4 mr-2" data-id="euiqtvpmi" data-path="src/components/finance/RecentTransactions.tsx" />
              View All
            </Button>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent data-id="7digct5zq" data-path="src/components/finance/RecentTransactions.tsx">
        <div className="space-y-4" data-id="zkyj51me5" data-path="src/components/finance/RecentTransactions.tsx">
          {transactions.map((transaction) => {
            const IconComponent = transaction.icon;
            return (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors" data-id="veh2nw65t" data-path="src/components/finance/RecentTransactions.tsx">
                <div className="flex items-center gap-3" data-id="79aqk741a" data-path="src/components/finance/RecentTransactions.tsx">
                  <div className={`p-2 rounded-full bg-white ${transaction.color}`} data-id="ovo4wd311" data-path="src/components/finance/RecentTransactions.tsx">
                    <IconComponent className="w-4 h-4" data-id="ehla7bauc" data-path="src/components/finance/RecentTransactions.tsx" />
                  </div>
                  <div data-id="d7aqv594x" data-path="src/components/finance/RecentTransactions.tsx">
                    <p className="font-medium text-sm" data-id="xsjqf61mx" data-path="src/components/finance/RecentTransactions.tsx">{transaction.description}</p>
                    <div className="flex items-center gap-2 mt-1" data-id="pjbnmca1j" data-path="src/components/finance/RecentTransactions.tsx">
                      <Badge
                        variant="secondary"
                        className={`text-xs ${getCategoryColor(transaction.category)}`} data-id="rprrrrrac" data-path="src/components/finance/RecentTransactions.tsx">

                        {transaction.category}
                      </Badge>
                      <span className="text-xs text-gray-500" data-id="htdsc74t1" data-path="src/components/finance/RecentTransactions.tsx">
                        {formatDate(transaction.date)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right" data-id="55cv9llaq" data-path="src/components/finance/RecentTransactions.tsx">
                  <span className={`font-semibold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`
                  } data-id="k0x0cme5i" data-path="src/components/finance/RecentTransactions.tsx">
                    {formatTransactionAmount(transaction.amount)}
                  </span>
                </div>
              </div>);

          })}
        </div>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200" data-id="e8yzl5u1p" data-path="src/components/finance/RecentTransactions.tsx">
          <div className="flex items-center justify-between text-sm" data-id="u3v3k8u14" data-path="src/components/finance/RecentTransactions.tsx">
            <span className="text-blue-700 font-medium" data-id="dzzag18a2" data-path="src/components/finance/RecentTransactions.tsx">This Week's Spending</span>
            <span className="text-blue-900 font-bold" data-id="m40z094yu" data-path="src/components/finance/RecentTransactions.tsx">₹237.37</span>
          </div>
          <div className="mt-2 w-full bg-blue-200 rounded-full h-2" data-id="o14k1nkk5" data-path="src/components/finance/RecentTransactions.tsx">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: '65%' }} data-id="d3rnshvw7" data-path="src/components/finance/RecentTransactions.tsx" />

          </div>
          <p className="text-xs text-blue-600 mt-1" data-id="nwow0nszq" data-path="src/components/finance/RecentTransactions.tsx">65% of weekly budget used</p>
        </div>
      </CardContent>
    </Card>);

};

export default RecentTransactions;