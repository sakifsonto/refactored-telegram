import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Brain, Plus, Edit, Trash2, TrendingUp, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatCurrency } from '@/lib/utils';

interface BudgetCategory {
  id: number;
  category: string;
  budgeted: number;
  spent: number;
  aiSuggestion?: number;
}

const BudgetManager = () => {
  const { toast } = useToast();
  const [budgetCategories, setBudgetCategories] = useState<BudgetCategory[]>([
  {
    id: 1,
    category: 'Food & Dining',
    budgeted: 500,
    spent: 450,
    aiSuggestion: 480
  },
  {
    id: 2,
    category: 'Transportation',
    budgeted: 300,
    spent: 280,
    aiSuggestion: 285
  },
  {
    id: 3,
    category: 'Textbooks',
    budgeted: 250,
    spent: 200,
    aiSuggestion: 220
  },
  {
    id: 4,
    category: 'Entertainment',
    budgeted: 200,
    spent: 180,
    aiSuggestion: 175
  },
  {
    id: 5,
    category: 'Housing',
    budgeted: 550,
    spent: 144,
    aiSuggestion: 550
  }]
  );

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingBudget, setEditingBudget] = useState<BudgetCategory | null>(null);
  const [newBudget, setNewBudget] = useState({
    category: '',
    budgeted: ''
  });

  const availableCategories = [
  'Food & Dining',
  'Transportation',
  'Textbooks',
  'Entertainment',
  'Housing',
  'Utilities',
  'Healthcare',
  'Shopping',
  'Personal Care',
  'Subscriptions',
  'Other'];


  const totalBudgeted = budgetCategories.reduce((sum, cat) => sum + cat.budgeted, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalRemaining = totalBudgeted - totalSpent;

  const handleAddBudget = () => {
    if (!newBudget.category || !newBudget.budgeted) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    const existingCategory = budgetCategories.find((cat) => cat.category === newBudget.category);
    if (existingCategory) {
      toast({
        title: 'Category Exists',
        description: 'This category already has a budget. Please edit the existing one.',
        variant: 'destructive'
      });
      return;
    }

    const budget: BudgetCategory = {
      id: Date.now(),
      category: newBudget.category,
      budgeted: parseFloat(newBudget.budgeted),
      spent: 0,
      aiSuggestion: Math.round(parseFloat(newBudget.budgeted) * 0.9)
    };

    setBudgetCategories([...budgetCategories, budget]);
    setNewBudget({ category: '', budgeted: '' });
    setIsAddDialogOpen(false);

    toast({
      title: 'Budget Added',
      description: `Added budget for ${budget.category}: ${formatCurrency(budget.budgeted)}`
    });
  };

  const handleUpdateBudget = () => {
    if (!editingBudget) return;

    setBudgetCategories(budgetCategories.map((cat) =>
    cat.id === editingBudget.id ? editingBudget : cat
    ));
    setEditingBudget(null);

    toast({
      title: 'Budget Updated',
      description: `Updated budget for ${editingBudget.category}`
    });
  };

  const handleDeleteBudget = (id: number) => {
    setBudgetCategories(budgetCategories.filter((cat) => cat.id !== id));
    toast({
      title: 'Budget Deleted',
      description: 'The budget category has been removed.'
    });
  };

  const applyAISuggestions = () => {
    setBudgetCategories(budgetCategories.map((cat) => ({
      ...cat,
      budgeted: cat.aiSuggestion || cat.budgeted
    })));

    toast({
      title: 'AI Suggestions Applied',
      description: 'Your budget has been optimized based on AI recommendations.'
    });
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return 'bg-red-500';
    if (percentage >= 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusBadge = (spent: number, budgeted: number) => {
    const percentage = spent / budgeted * 100;
    if (percentage >= 100) {
      return <Badge variant="destructive" data-id="x2jmizj5t" data-path="src/pages/BudgetManager.tsx">Over Budget</Badge>;
    } else if (percentage >= 80) {
      return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800" data-id="wsuypmqas" data-path="src/pages/BudgetManager.tsx">Warning</Badge>;
    } else {
      return <Badge variant="secondary" className="bg-green-100 text-green-800" data-id="kavjnn93w" data-path="src/pages/BudgetManager.tsx">On Track</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-id="qkpqetq7d" data-path="src/pages/BudgetManager.tsx">
      <div className="container mx-auto p-6" data-id="pyt8ygzx3" data-path="src/pages/BudgetManager.tsx">
        {/* Header */}
        <div className="flex justify-between items-center mb-8" data-id="vdzr44d98" data-path="src/pages/BudgetManager.tsx">
          <div data-id="phdawqx9a" data-path="src/pages/BudgetManager.tsx">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-id="zwos9xvmm" data-path="src/pages/BudgetManager.tsx">Budget Manager</h1>
            <p className="text-gray-600" data-id="jo2cr0skv" data-path="src/pages/BudgetManager.tsx">Create and manage your monthly budgets with AI assistance</p>
          </div>
          <div className="flex gap-3" data-id="82ewd7n2l" data-path="src/pages/BudgetManager.tsx">
            <Button
              variant="outline"
              onClick={applyAISuggestions}
              className="border-purple-200 text-purple-700 hover:bg-purple-50" data-id="i589hftiu" data-path="src/pages/BudgetManager.tsx">

              <Brain className="w-4 h-4 mr-2" data-id="2r09nmiot" data-path="src/pages/BudgetManager.tsx" />
              Apply AI Suggestions
            </Button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} data-id="38f32r5tk" data-path="src/pages/BudgetManager.tsx">
              <DialogTrigger asChild data-id="aph6x5cdi" data-path="src/pages/BudgetManager.tsx">
                <Button className="bg-blue-600 hover:bg-blue-700" data-id="kqa50o6ap" data-path="src/pages/BudgetManager.tsx">
                  <Plus className="w-4 h-4 mr-2" data-id="74a9szr0d" data-path="src/pages/BudgetManager.tsx" />
                  Add Budget
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]" data-id="zxec9r62v" data-path="src/pages/BudgetManager.tsx">
                <DialogHeader data-id="om140htuv" data-path="src/pages/BudgetManager.tsx">
                  <DialogTitle data-id="oy5k17h3o" data-path="src/pages/BudgetManager.tsx">Add New Budget Category</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4" data-id="oc7vc0odg" data-path="src/pages/BudgetManager.tsx">
                  <div className="grid gap-2" data-id="meevuyjg8" data-path="src/pages/BudgetManager.tsx">
                    <Label data-id="uqw95vlkr" data-path="src/pages/BudgetManager.tsx">Category *</Label>
                    <Select value={newBudget.category} onValueChange={(value) => setNewBudget((prev) => ({ ...prev, category: value }))} data-id="f9ina0qgo" data-path="src/pages/BudgetManager.tsx">
                      <SelectTrigger data-id="waqthdfhm" data-path="src/pages/BudgetManager.tsx">
                        <SelectValue placeholder="Select a category" data-id="atg37xbwh" data-path="src/pages/BudgetManager.tsx" />
                      </SelectTrigger>
                      <SelectContent data-id="bejt3umc0" data-path="src/pages/BudgetManager.tsx">
                        {availableCategories.filter((cat) =>
                        !budgetCategories.some((budget) => budget.category === cat)
                        ).map((category) =>
                        <SelectItem key={category} value={category} data-id="o5wg3nulc" data-path="src/pages/BudgetManager.tsx">
                            {category}
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2" data-id="krwz4rmiz" data-path="src/pages/BudgetManager.tsx">
                    <Label htmlFor="budgeted" data-id="xioneutug" data-path="src/pages/BudgetManager.tsx">Monthly Budget Amount *</Label>
                    <Input
                      id="budgeted"
                      type="number"
                      step="0.01"
                      value={newBudget.budgeted}
                      onChange={(e) => setNewBudget((prev) => ({ ...prev, budgeted: e.target.value }))}
                      placeholder="0.00" data-id="svu4waxq2" data-path="src/pages/BudgetManager.tsx" />

                  </div>
                </div>
                <div className="flex gap-2" data-id="9lui6rcbe" data-path="src/pages/BudgetManager.tsx">
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="flex-1" data-id="q1afba5ll" data-path="src/pages/BudgetManager.tsx">
                    Cancel
                  </Button>
                  <Button onClick={handleAddBudget} className="flex-1" data-id="yqnxqnv13" data-path="src/pages/BudgetManager.tsx">
                    Add Budget
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-id="tch303g8x" data-path="src/pages/BudgetManager.tsx">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white" data-id="j9rr1h6xf" data-path="src/pages/BudgetManager.tsx">
            <CardHeader className="pb-3" data-id="4bbzb5lba" data-path="src/pages/BudgetManager.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="5kb34t19v" data-path="src/pages/BudgetManager.tsx">Total Monthly Budget</CardTitle>
            </CardHeader>
            <CardContent data-id="9b0tt46ld" data-path="src/pages/BudgetManager.tsx">
              <div className="text-2xl font-bold" data-id="6ertdstda" data-path="src/pages/BudgetManager.tsx">{formatCurrency(totalBudgeted)}</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white" data-id="p10wfe1bj" data-path="src/pages/BudgetManager.tsx">
            <CardHeader className="pb-3" data-id="3u1k358sb" data-path="src/pages/BudgetManager.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="uacw3t1i8" data-path="src/pages/BudgetManager.tsx">Total Spent</CardTitle>
            </CardHeader>
            <CardContent data-id="10xqju47d" data-path="src/pages/BudgetManager.tsx">
              <div className="text-2xl font-bold" data-id="n12ort8ga" data-path="src/pages/BudgetManager.tsx">{formatCurrency(totalSpent)}</div>
              <p className="text-xs opacity-90" data-id="126xr64lt" data-path="src/pages/BudgetManager.tsx">
                {(totalSpent / totalBudgeted * 100).toFixed(1)}% of budget used
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white" data-id="b4qvyt925" data-path="src/pages/BudgetManager.tsx">
            <CardHeader className="pb-3" data-id="miuaetbsj" data-path="src/pages/BudgetManager.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="yupjgp631" data-path="src/pages/BudgetManager.tsx">Remaining</CardTitle>
            </CardHeader>
            <CardContent data-id="wqrcrxt8m" data-path="src/pages/BudgetManager.tsx">
              <div className="text-2xl font-bold" data-id="uxv146eex" data-path="src/pages/BudgetManager.tsx">{formatCurrency(totalRemaining)}</div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200" data-id="6lxe7f03y" data-path="src/pages/BudgetManager.tsx">
          <CardHeader data-id="zeknacn8i" data-path="src/pages/BudgetManager.tsx">
            <CardTitle className="flex items-center gap-2" data-id="7y4qfk8p1" data-path="src/pages/BudgetManager.tsx">
              <Brain className="w-5 h-5 text-purple-600" data-id="tl3933p3u" data-path="src/pages/BudgetManager.tsx" />
              AI Budget Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent data-id="szd2cbdb2" data-path="src/pages/BudgetManager.tsx">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="17t1g6vy8" data-path="src/pages/BudgetManager.tsx">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg" data-id="tzugggioo" data-path="src/pages/BudgetManager.tsx">
                <TrendingUp className="w-5 h-5 text-green-500" data-id="4dvmiztn1" data-path="src/pages/BudgetManager.tsx" />
                <div data-id="e10y56gev" data-path="src/pages/BudgetManager.tsx">
                  <p className="font-medium text-sm" data-id="k74cud7eu" data-path="src/pages/BudgetManager.tsx">Optimize Food Budget</p>
                  <p className="text-xs text-gray-600" data-id="ms4vocyd4" data-path="src/pages/BudgetManager.tsx">Reduce by ₹20/month with meal planning</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg" data-id="jgvb0fpbf" data-path="src/pages/BudgetManager.tsx">
                <AlertTriangle className="w-5 h-5 text-orange-500" data-id="jydm7beoa" data-path="src/pages/BudgetManager.tsx" />
                <div data-id="aeojccyns" data-path="src/pages/BudgetManager.tsx">
                  <p className="font-medium text-sm" data-id="z5k1cjosp" data-path="src/pages/BudgetManager.tsx">Entertainment Warning</p>
                  <p className="text-xs text-gray-600" data-id="u723291x2" data-path="src/pages/BudgetManager.tsx">You're 90% through this budget</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Budget Categories */}
        <Card data-id="o1zt5hj2x" data-path="src/pages/BudgetManager.tsx">
          <CardHeader data-id="u1knwcqvq" data-path="src/pages/BudgetManager.tsx">
            <CardTitle data-id="3zofhv7mu" data-path="src/pages/BudgetManager.tsx">Budget Categories</CardTitle>
          </CardHeader>
          <CardContent data-id="uap5j1xrm" data-path="src/pages/BudgetManager.tsx">
            <div className="space-y-6" data-id="6fab9ap40" data-path="src/pages/BudgetManager.tsx">
              {budgetCategories.map((budget) => {
                const percentage = budget.spent / budget.budgeted * 100;
                const remaining = budget.budgeted - budget.spent;

                return (
                  <div key={budget.id} className="p-4 rounded-lg border bg-gray-50" data-id="cnbpotm1m" data-path="src/pages/BudgetManager.tsx">
                    <div className="flex items-center justify-between mb-4" data-id="akjcai1iu" data-path="src/pages/BudgetManager.tsx">
                      <div className="flex items-center gap-3" data-id="tw4rkgd09" data-path="src/pages/BudgetManager.tsx">
                        <h3 className="font-semibold" data-id="c14qvnbev" data-path="src/pages/BudgetManager.tsx">{budget.category}</h3>
                        {getStatusBadge(budget.spent, budget.budgeted)}
                      </div>
                      <div className="flex items-center gap-2" data-id="q0zbnlyev" data-path="src/pages/BudgetManager.tsx">
                        <span className="text-sm font-medium" data-id="og2d9njzu" data-path="src/pages/BudgetManager.tsx">
                          {formatCurrency(budget.spent)} / {formatCurrency(budget.budgeted)}
                        </span>
                        <div className="flex gap-1" data-id="whstpyxfl" data-path="src/pages/BudgetManager.tsx">
                          <Dialog data-id="fqg4tlsrz" data-path="src/pages/BudgetManager.tsx">
                            <DialogTrigger asChild data-id="uxs0b2ast" data-path="src/pages/BudgetManager.tsx">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setEditingBudget({ ...budget })} data-id="rq3lfz22t" data-path="src/pages/BudgetManager.tsx">

                                <Edit className="w-4 h-4" data-id="zhdnrecfz" data-path="src/pages/BudgetManager.tsx" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]" data-id="km4tbyn3p" data-path="src/pages/BudgetManager.tsx">
                              <DialogHeader data-id="obo5y11rm" data-path="src/pages/BudgetManager.tsx">
                                <DialogTitle data-id="5zijua7no" data-path="src/pages/BudgetManager.tsx">Edit Budget - {budget.category}</DialogTitle>
                              </DialogHeader>
                              <div className="grid gap-4 py-4" data-id="vb4ktmueh" data-path="src/pages/BudgetManager.tsx">
                                <div className="grid gap-2" data-id="m09fr4m7g" data-path="src/pages/BudgetManager.tsx">
                                  <Label htmlFor="edit-budgeted" data-id="1yzhtlnri" data-path="src/pages/BudgetManager.tsx">Monthly Budget Amount</Label>
                                  <Input
                                    id="edit-budgeted"
                                    type="number"
                                    step="0.01"
                                    value={editingBudget?.budgeted || ''}
                                    onChange={(e) => setEditingBudget((prev) =>
                                    prev ? { ...prev, budgeted: parseFloat(e.target.value) || 0 } : null
                                    )} data-id="y6zu99cbs" data-path="src/pages/BudgetManager.tsx" />

                                </div>
                                {budget.aiSuggestion &&
                                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200" data-id="dzxyco6gy" data-path="src/pages/BudgetManager.tsx">
                                    <div className="flex items-center gap-2 mb-1" data-id="81f5zk4zq" data-path="src/pages/BudgetManager.tsx">
                                      <Brain className="w-4 h-4 text-purple-600" data-id="i0jr687is" data-path="src/pages/BudgetManager.tsx" />
                                      <span className="text-sm font-medium text-purple-800" data-id="lmglxakpj" data-path="src/pages/BudgetManager.tsx">AI Suggestion</span>
                                    </div>
                                    <p className="text-sm text-purple-700" data-id="z7f8t1d86" data-path="src/pages/BudgetManager.tsx">
                                      Recommended budget: {formatCurrency(budget.aiSuggestion)}
                                    </p>
                                  </div>
                                }
                              </div>
                              <div className="flex gap-2" data-id="djcxjcjnm" data-path="src/pages/BudgetManager.tsx">
                                <Button variant="outline" onClick={() => setEditingBudget(null)} className="flex-1" data-id="cuu64ewsl" data-path="src/pages/BudgetManager.tsx">
                                  Cancel
                                </Button>
                                <Button onClick={handleUpdateBudget} className="flex-1" data-id="x8vxoww6q" data-path="src/pages/BudgetManager.tsx">
                                  Update Budget
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteBudget(budget.id)} data-id="lsrl5dvkk" data-path="src/pages/BudgetManager.tsx">

                            <Trash2 className="w-4 h-4" data-id="irxd0eb5p" data-path="src/pages/BudgetManager.tsx" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2" data-id="j2ydglk3w" data-path="src/pages/BudgetManager.tsx">
                      <div className="w-full bg-gray-200 rounded-full h-3" data-id="io91jy5ox" data-path="src/pages/BudgetManager.tsx">
                        <div
                          className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(percentage)}`}
                          style={{ width: `${Math.min(percentage, 100)}%` }} data-id="ep5lysk7h" data-path="src/pages/BudgetManager.tsx" />

                      </div>
                      <div className="flex items-center justify-between text-sm" data-id="uqchf5zlz" data-path="src/pages/BudgetManager.tsx">
                        <span className="text-gray-600" data-id="b8ioam6y9" data-path="src/pages/BudgetManager.tsx">{percentage.toFixed(1)}% used</span>
                        <span className={remaining >= 0 ? 'text-green-600' : 'text-red-600'} data-id="8ry6ysi36" data-path="src/pages/BudgetManager.tsx">
                          {formatCurrency(Math.abs(remaining))} {remaining >= 0 ? 'remaining' : 'over budget'}
                        </span>
                      </div>
                    </div>

                    {budget.aiSuggestion && budget.aiSuggestion !== budget.budgeted &&
                    <div className="mt-3 p-2 bg-purple-50 rounded border border-purple-200" data-id="9hiffqzdt" data-path="src/pages/BudgetManager.tsx">
                        <div className="flex items-center justify-between" data-id="k1jp3gr4t" data-path="src/pages/BudgetManager.tsx">
                          <span className="text-xs text-purple-700" data-id="q5en66gef" data-path="src/pages/BudgetManager.tsx">
                            AI suggests: {formatCurrency(budget.aiSuggestion)}
                          </span>
                          <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setBudgetCategories(budgetCategories.map((cat) =>
                            cat.id === budget.id ? { ...cat, budgeted: budget.aiSuggestion || cat.budgeted } : cat
                            ));
                            toast({
                              title: 'Budget Updated',
                              description: `Applied AI suggestion for ${budget.category}`
                            });
                          }}
                          className="text-xs h-6 px-2 text-purple-700 hover:bg-purple-100" data-id="zwznk1zph" data-path="src/pages/BudgetManager.tsx">

                            Apply
                          </Button>
                        </div>
                      </div>
                    }
                  </div>);

              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default BudgetManager;