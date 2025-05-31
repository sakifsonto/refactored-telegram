import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, Trash2, Edit, Filter } from 'lucide-react';
import { format } from 'date-fns';
import { cn, formatCurrency } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: Date;
  paymentMethod: string;
}

const ExpenseTracker = () => {
  const { toast } = useToast();
  const [expenses, setExpenses] = useState<Expense[]>([
  {
    id: 1,
    description: 'Starbucks Coffee',
    amount: 4.95,
    category: 'Food & Dining',
    date: new Date('2024-01-15'),
    paymentMethod: 'Credit Card'
  },
  {
    id: 2,
    description: 'Bus Pass Monthly',
    amount: 75.00,
    category: 'Transportation',
    date: new Date('2024-01-14'),
    paymentMethod: 'Debit Card'
  },
  {
    id: 3,
    description: 'Physics Textbook',
    amount: 89.99,
    category: 'Textbooks',
    date: new Date('2024-01-13'),
    paymentMethod: 'Credit Card'
  }]
  );

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date(),
    paymentMethod: ''
  });

  const categories = [
  'Food & Dining',
  'Transportation',
  'Textbooks',
  'Entertainment',
  'Housing',
  'Utilities',
  'Healthcare',
  'Shopping',
  'Other'];


  const paymentMethods = [
  'Cash',
  'Credit Card',
  'Debit Card',
  'Digital Wallet',
  'Bank Transfer'];


  const handleAddExpense = () => {
    if (!newExpense.description || !newExpense.amount || !newExpense.category) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    const expense: Expense = {
      id: Date.now(),
      description: newExpense.description,
      amount: parseFloat(newExpense.amount),
      category: newExpense.category,
      date: newExpense.date,
      paymentMethod: newExpense.paymentMethod
    };

    setExpenses([expense, ...expenses]);
    setNewExpense({
      description: '',
      amount: '',
      category: '',
      date: new Date(),
      paymentMethod: ''
    });
    setIsAddDialogOpen(false);

    toast({
      title: 'Expense Added',
      description: `Added ${expense.description} for ${formatCurrency(expense.amount)}`
    });
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    toast({
      title: 'Expense Deleted',
      description: 'The expense has been removed.'
    });
  };

  const filteredExpenses = filterCategory === 'all' ?
  expenses :
  expenses.filter((expense) => expense.category === filterCategory);

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const getCategoryColor = (category: string) => {
    const colors: {[key: string]: string;} = {
      'Food & Dining': 'bg-orange-100 text-orange-800',
      'Transportation': 'bg-blue-100 text-blue-800',
      'Textbooks': 'bg-purple-100 text-purple-800',
      'Entertainment': 'bg-green-100 text-green-800',
      'Housing': 'bg-indigo-100 text-indigo-800',
      'Utilities': 'bg-yellow-100 text-yellow-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Shopping': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-id="0l0hc694m" data-path="src/pages/ExpenseTracker.tsx">
      <div className="container mx-auto p-6" data-id="bwy78d7t5" data-path="src/pages/ExpenseTracker.tsx">
        {/* Header */}
        <div className="flex justify-between items-center mb-8" data-id="0oubs1edb" data-path="src/pages/ExpenseTracker.tsx">
          <div data-id="jhz2gsp50" data-path="src/pages/ExpenseTracker.tsx">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-id="4po2qw3uv" data-path="src/pages/ExpenseTracker.tsx">Expense Tracker</h1>
            <p className="text-gray-600" data-id="fn1vs6eiy" data-path="src/pages/ExpenseTracker.tsx">Track and manage your daily expenses</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} data-id="ldh8c6r46" data-path="src/pages/ExpenseTracker.tsx">
            <DialogTrigger asChild data-id="kzlwkvl4w" data-path="src/pages/ExpenseTracker.tsx">
              <Button className="bg-blue-600 hover:bg-blue-700" data-id="nmxiyp1x1" data-path="src/pages/ExpenseTracker.tsx">
                <Plus className="w-4 h-4 mr-2" data-id="g0z78t78t" data-path="src/pages/ExpenseTracker.tsx" />
                Add Expense
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]" data-id="38r07ve40" data-path="src/pages/ExpenseTracker.tsx">
              <DialogHeader data-id="ep85lhfmx" data-path="src/pages/ExpenseTracker.tsx">
                <DialogTitle data-id="8smhgx383" data-path="src/pages/ExpenseTracker.tsx">Add New Expense</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4" data-id="f9tdq71ku" data-path="src/pages/ExpenseTracker.tsx">
                <div className="grid gap-2" data-id="heveqzxo3" data-path="src/pages/ExpenseTracker.tsx">
                  <Label htmlFor="description" data-id="grwem2h5n" data-path="src/pages/ExpenseTracker.tsx">Description *</Label>
                  <Input
                    id="description"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="e.g., Lunch at cafeteria" data-id="3t4y2qjir" data-path="src/pages/ExpenseTracker.tsx" />

                </div>
                <div className="grid gap-2" data-id="4a3ixsd1d" data-path="src/pages/ExpenseTracker.tsx">
                  <Label htmlFor="amount" data-id="4se40rat0" data-path="src/pages/ExpenseTracker.tsx">Amount *</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense((prev) => ({ ...prev, amount: e.target.value }))}
                    placeholder="0.00" data-id="voodbz5r9" data-path="src/pages/ExpenseTracker.tsx" />

                </div>
                <div className="grid gap-2" data-id="42zcmdc56" data-path="src/pages/ExpenseTracker.tsx">
                  <Label data-id="6pszf2n7n" data-path="src/pages/ExpenseTracker.tsx">Category *</Label>
                  <Select value={newExpense.category} onValueChange={(value) => setNewExpense((prev) => ({ ...prev, category: value }))} data-id="540p0503n" data-path="src/pages/ExpenseTracker.tsx">
                    <SelectTrigger data-id="19lsv536w" data-path="src/pages/ExpenseTracker.tsx">
                      <SelectValue placeholder="Select a category" data-id="z34aax284" data-path="src/pages/ExpenseTracker.tsx" />
                    </SelectTrigger>
                    <SelectContent data-id="qifulb1lc" data-path="src/pages/ExpenseTracker.tsx">
                      {categories.map((category) =>
                      <SelectItem key={category} value={category} data-id="c32ccywb6" data-path="src/pages/ExpenseTracker.tsx">
                          {category}
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2" data-id="siubsj873" data-path="src/pages/ExpenseTracker.tsx">
                  <Label data-id="3eua9l5zl" data-path="src/pages/ExpenseTracker.tsx">Date</Label>
                  <Popover data-id="6v71b4yir" data-path="src/pages/ExpenseTracker.tsx">
                    <PopoverTrigger asChild data-id="5kowromga" data-path="src/pages/ExpenseTracker.tsx">
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal",
                          !newExpense.date && "text-muted-foreground"
                        )} data-id="r1w8xt93l" data-path="src/pages/ExpenseTracker.tsx">

                        <CalendarIcon className="mr-2 h-4 w-4" data-id="4amhewhzk" data-path="src/pages/ExpenseTracker.tsx" />
                        {newExpense.date ? format(newExpense.date, "PPP") : <span data-id="tupbqdup5" data-path="src/pages/ExpenseTracker.tsx">Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" data-id="orms0r1p3" data-path="src/pages/ExpenseTracker.tsx">
                      <Calendar
                        mode="single"
                        selected={newExpense.date}
                        onSelect={(date) => date && setNewExpense((prev) => ({ ...prev, date }))}
                        initialFocus data-id="qp3u1ogsl" data-path="src/pages/ExpenseTracker.tsx" />

                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2" data-id="6cd3fj6gy" data-path="src/pages/ExpenseTracker.tsx">
                  <Label data-id="0ifp2aew1" data-path="src/pages/ExpenseTracker.tsx">Payment Method</Label>
                  <Select value={newExpense.paymentMethod} onValueChange={(value) => setNewExpense((prev) => ({ ...prev, paymentMethod: value }))} data-id="tmu60vfud" data-path="src/pages/ExpenseTracker.tsx">
                    <SelectTrigger data-id="xvtua9gi0" data-path="src/pages/ExpenseTracker.tsx">
                      <SelectValue placeholder="Select payment method" data-id="j0kll5xiz" data-path="src/pages/ExpenseTracker.tsx" />
                    </SelectTrigger>
                    <SelectContent data-id="5xfz9qcpu" data-path="src/pages/ExpenseTracker.tsx">
                      {paymentMethods.map((method) =>
                      <SelectItem key={method} value={method} data-id="4m0tla30d" data-path="src/pages/ExpenseTracker.tsx">
                          {method}
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2" data-id="kcoppj6rm" data-path="src/pages/ExpenseTracker.tsx">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="flex-1" data-id="nrgcnsik0" data-path="src/pages/ExpenseTracker.tsx">
                  Cancel
                </Button>
                <Button onClick={handleAddExpense} className="flex-1" data-id="u9ottfes5" data-path="src/pages/ExpenseTracker.tsx">
                  Add Expense
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-id="1ybja1008" data-path="src/pages/ExpenseTracker.tsx">
          <Card data-id="ar6anu91y" data-path="src/pages/ExpenseTracker.tsx">
            <CardHeader className="pb-3" data-id="8hif9ug5x" data-path="src/pages/ExpenseTracker.tsx">
              <CardTitle className="text-sm font-medium text-gray-600" data-id="orn2vxqvk" data-path="src/pages/ExpenseTracker.tsx">Total Spent This Month</CardTitle>
            </CardHeader>
            <CardContent data-id="6x8dghvgi" data-path="src/pages/ExpenseTracker.tsx">
              <div className="text-2xl font-bold text-red-600" data-id="b13jt8u7w" data-path="src/pages/ExpenseTracker.tsx">{formatCurrency(totalSpent)}</div>
            </CardContent>
          </Card>
          <Card data-id="h5y5h6l2f" data-path="src/pages/ExpenseTracker.tsx">
            <CardHeader className="pb-3" data-id="18rb9t5i2" data-path="src/pages/ExpenseTracker.tsx">
              <CardTitle className="text-sm font-medium text-gray-600" data-id="dgn920syr" data-path="src/pages/ExpenseTracker.tsx">Number of Transactions</CardTitle>
            </CardHeader>
            <CardContent data-id="ylyzzyucd" data-path="src/pages/ExpenseTracker.tsx">
              <div className="text-2xl font-bold text-blue-600" data-id="b6ccp2yzq" data-path="src/pages/ExpenseTracker.tsx">{expenses.length}</div>
            </CardContent>
          </Card>
          <Card data-id="e1igajouq" data-path="src/pages/ExpenseTracker.tsx">
            <CardHeader className="pb-3" data-id="ry51tzdvl" data-path="src/pages/ExpenseTracker.tsx">
              <CardTitle className="text-sm font-medium text-gray-600" data-id="3gq3cbe9j" data-path="src/pages/ExpenseTracker.tsx">Average per Transaction</CardTitle>
            </CardHeader>
            <CardContent data-id="fo1vmo55n" data-path="src/pages/ExpenseTracker.tsx">
              <div className="text-2xl font-bold text-purple-600" data-id="profd4rp9" data-path="src/pages/ExpenseTracker.tsx">
                {expenses.length > 0 ? formatCurrency(totalSpent / expenses.length) : formatCurrency(0)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Expense List */}
        <Card data-id="6zvvkjje4" data-path="src/pages/ExpenseTracker.tsx">
          <CardHeader data-id="2g3ohzyz0" data-path="src/pages/ExpenseTracker.tsx">
            <div className="flex justify-between items-center" data-id="tzblo1kjb" data-path="src/pages/ExpenseTracker.tsx">
              <CardTitle data-id="m8yhgbs69" data-path="src/pages/ExpenseTracker.tsx">Recent Expenses</CardTitle>
              <div className="flex items-center gap-2" data-id="uek1gjlv6" data-path="src/pages/ExpenseTracker.tsx">
                <Filter className="w-4 h-4 text-gray-500" data-id="kmltgd2xc" data-path="src/pages/ExpenseTracker.tsx" />
                <Select value={filterCategory} onValueChange={setFilterCategory} data-id="jw6b0co70" data-path="src/pages/ExpenseTracker.tsx">
                  <SelectTrigger className="w-[180px]" data-id="1xamaz4fo" data-path="src/pages/ExpenseTracker.tsx">
                    <SelectValue placeholder="Filter by category" data-id="f51mw4gl8" data-path="src/pages/ExpenseTracker.tsx" />
                  </SelectTrigger>
                  <SelectContent data-id="n1c60rpzl" data-path="src/pages/ExpenseTracker.tsx">
                    <SelectItem value="all" data-id="huqo1zdl6" data-path="src/pages/ExpenseTracker.tsx">All Categories</SelectItem>
                    {categories.map((category) =>
                    <SelectItem key={category} value={category} data-id="9pqmjk10c" data-path="src/pages/ExpenseTracker.tsx">
                        {category}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent data-id="yme0n61fs" data-path="src/pages/ExpenseTracker.tsx">
            <div className="space-y-4" data-id="lcvwxjv0c" data-path="src/pages/ExpenseTracker.tsx">
              {filteredExpenses.length === 0 ?
              <div className="text-center py-8 text-gray-500" data-id="8nsv8pb6r" data-path="src/pages/ExpenseTracker.tsx">
                  No expenses found. Add your first expense to get started!
                </div> :

              filteredExpenses.map((expense) =>
              <div key={expense.id} className="flex items-center justify-between p-4 rounded-lg border bg-gray-50 hover:bg-gray-100 transition-colors" data-id="4uer8v1xk" data-path="src/pages/ExpenseTracker.tsx">
                    <div className="flex-1" data-id="gqn6dt33z" data-path="src/pages/ExpenseTracker.tsx">
                      <div className="flex items-center gap-3 mb-2" data-id="8l7q2hsmo" data-path="src/pages/ExpenseTracker.tsx">
                        <h3 className="font-medium" data-id="7v6amfkuw" data-path="src/pages/ExpenseTracker.tsx">{expense.description}</h3>
                        <Badge
                      variant="secondary"
                      className={getCategoryColor(expense.category)} data-id="1516kx5ob" data-path="src/pages/ExpenseTracker.tsx">

                          {expense.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600" data-id="3xy4bf43e" data-path="src/pages/ExpenseTracker.tsx">
                        <span data-id="kfj18wo12" data-path="src/pages/ExpenseTracker.tsx">{format(expense.date, 'MMM dd, yyyy')}</span>
                        <span data-id="4dxtkug5p" data-path="src/pages/ExpenseTracker.tsx">{expense.paymentMethod}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3" data-id="v1zx2nfop" data-path="src/pages/ExpenseTracker.tsx">
                      <span className="text-lg font-semibold text-red-600" data-id="2whl3o704" data-path="src/pages/ExpenseTracker.tsx">
                        {formatCurrency(expense.amount)}
                      </span>
                      <div className="flex gap-1" data-id="sptck6b65" data-path="src/pages/ExpenseTracker.tsx">
                        <Button variant="ghost" size="sm" data-id="hawsnk97a" data-path="src/pages/ExpenseTracker.tsx">
                          <Edit className="w-4 h-4" data-id="2ympsistb" data-path="src/pages/ExpenseTracker.tsx" />
                        </Button>
                        <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteExpense(expense.id)} data-id="n42jf38jt" data-path="src/pages/ExpenseTracker.tsx">

                          <Trash2 className="w-4 h-4" data-id="2eetfoic5" data-path="src/pages/ExpenseTracker.tsx" />
                        </Button>
                      </div>
                    </div>
                  </div>
              )
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default ExpenseTracker;