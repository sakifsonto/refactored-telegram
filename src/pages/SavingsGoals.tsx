import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, Edit, Trash2, Target, TrendingUp, AlertCircle, CheckCircle, Laptop, Plane, GraduationCap, Home, Car } from 'lucide-react';
import { format } from 'date-fns';
import { cn, formatCurrency } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface SavingsGoal {
  id: number;
  title: string;
  description: string;
  target: number;
  current: number;
  deadline: Date;
  category: string;
  priority: 'low' | 'medium' | 'high';
  monthlyContribution?: number;
}

const SavingsGoalsPage = () => {
  const { toast } = useToast();
  const [goals, setGoals] = useState<SavingsGoal[]>([
  {
    id: 1,
    title: 'Emergency Fund',
    description: '3 months of expenses for financial security',
    target: 2000,
    current: 847,
    deadline: new Date('2024-12-31'),
    category: 'Emergency',
    priority: 'high',
    monthlyContribution: 200
  },
  {
    id: 2,
    title: 'New Laptop',
    description: 'MacBook Pro for coding and school projects',
    target: 1200,
    current: 400,
    deadline: new Date('2024-08-15'),
    category: 'Technology',
    priority: 'medium',
    monthlyContribution: 150
  },
  {
    id: 3,
    title: 'Spring Break Trip',
    description: 'Trip to Europe with friends',
    target: 800,
    current: 250,
    deadline: new Date('2024-03-01'),
    category: 'Travel',
    priority: 'low',
    monthlyContribution: 100
  },
  {
    id: 4,
    title: 'Graduation Gift',
    description: 'Nice watch for graduation ceremony',
    target: 500,
    current: 125,
    deadline: new Date('2024-05-15'),
    category: 'Personal',
    priority: 'medium',
    monthlyContribution: 75
  }]
  );

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<SavingsGoal | null>(null);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    target: '',
    current: '',
    deadline: new Date(),
    category: '',
    priority: 'medium' as const,
    monthlyContribution: ''
  });

  const categories = [
  { value: 'Emergency', icon: AlertCircle, color: 'text-red-500' },
  { value: 'Technology', icon: Laptop, color: 'text-blue-500' },
  { value: 'Travel', icon: Plane, color: 'text-green-500' },
  { value: 'Education', icon: GraduationCap, color: 'text-purple-500' },
  { value: 'Housing', icon: Home, color: 'text-orange-500' },
  { value: 'Transportation', icon: Car, color: 'text-indigo-500' },
  { value: 'Personal', icon: Target, color: 'text-pink-500' }];


  const handleAddGoal = () => {
    if (!newGoal.title || !newGoal.target || !newGoal.category) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    const goal: SavingsGoal = {
      id: Date.now(),
      title: newGoal.title,
      description: newGoal.description,
      target: parseFloat(newGoal.target),
      current: parseFloat(newGoal.current) || 0,
      deadline: newGoal.deadline,
      category: newGoal.category,
      priority: newGoal.priority,
      monthlyContribution: parseFloat(newGoal.monthlyContribution) || undefined
    };

    setGoals([...goals, goal]);
    setNewGoal({
      title: '',
      description: '',
      target: '',
      current: '',
      deadline: new Date(),
      category: '',
      priority: 'medium',
      monthlyContribution: ''
    });
    setIsAddDialogOpen(false);

    toast({
      title: 'Goal Added',
      description: `Created savings goal: ${goal.title}`
    });
  };

  const handleUpdateGoal = () => {
    if (!editingGoal) return;

    setGoals(goals.map((goal) =>
    goal.id === editingGoal.id ? editingGoal : goal
    ));
    setEditingGoal(null);

    toast({
      title: 'Goal Updated',
      description: `Updated savings goal: ${editingGoal.title}`
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter((goal) => goal.id !== id));
    toast({
      title: 'Goal Deleted',
      description: 'The savings goal has been removed.'
    });
  };

  const addFunds = (goalId: number, amount: number) => {
    setGoals(goals.map((goal) =>
    goal.id === goalId ?
    { ...goal, current: Math.min(goal.current + amount, goal.target) } :
    goal
    ));

    const goal = goals.find((g) => g.id === goalId);
    toast({
      title: 'Funds Added',
      description: `Added ${formatCurrency(amount)} to ${goal?.title}`
    });
  };

  const getCategoryIcon = (category: string) => {
    const categoryInfo = categories.find((cat) => cat.value === category);
    return categoryInfo ? categoryInfo.icon : Target;
  };

  const getCategoryColor = (category: string) => {
    const categoryInfo = categories.find((cat) => cat.value === category);
    return categoryInfo ? categoryInfo.color : 'text-gray-500';
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

  const getDaysUntilDeadline = (deadline: Date) => {
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getProgressStatus = (current: number, target: number) => {
    const percentage = current / target * 100;
    if (percentage >= 100) return 'completed';
    if (percentage >= 75) return 'almost-there';
    if (percentage >= 50) return 'halfway';
    return 'getting-started';
  };

  const totalSavingsTarget = goals.reduce((sum, goal) => sum + goal.target, 0);
  const totalCurrentSavings = goals.reduce((sum, goal) => sum + goal.current, 0);
  const totalMonthlyContributions = goals.reduce((sum, goal) => sum + (goal.monthlyContribution || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20 md:pb-6" data-id="uph1jjddz" data-path="src/pages/SavingsGoals.tsx">
      <div className="container mx-auto p-6" data-id="uf8eb9pta" data-path="src/pages/SavingsGoals.tsx">
        {/* Header */}
        <div className="flex justify-between items-center mb-8" data-id="x4yqdfifl" data-path="src/pages/SavingsGoals.tsx">
          <div data-id="tbwb0gmm2" data-path="src/pages/SavingsGoals.tsx">
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-id="6s53h6l7q" data-path="src/pages/SavingsGoals.tsx">Savings Goals</h1>
            <p className="text-gray-600" data-id="g7dnuvli5" data-path="src/pages/SavingsGoals.tsx">Track your progress towards financial milestones</p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} data-id="0rxpag35l" data-path="src/pages/SavingsGoals.tsx">
            <DialogTrigger asChild data-id="ejkapzrk4" data-path="src/pages/SavingsGoals.tsx">
              <Button className="bg-green-600 hover:bg-green-700" data-id="is3g1rlvj" data-path="src/pages/SavingsGoals.tsx">
                <Plus className="w-4 h-4 mr-2" data-id="yxqmp09pd" data-path="src/pages/SavingsGoals.tsx" />
                New Goal
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]" data-id="vzwb325g0" data-path="src/pages/SavingsGoals.tsx">
              <DialogHeader data-id="17k839hxm" data-path="src/pages/SavingsGoals.tsx">
                <DialogTitle data-id="o84va3mzx" data-path="src/pages/SavingsGoals.tsx">Create New Savings Goal</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4" data-id="s2n3k7gde" data-path="src/pages/SavingsGoals.tsx">
                <div className="grid gap-2" data-id="o7eaauu0w" data-path="src/pages/SavingsGoals.tsx">
                  <Label htmlFor="title" data-id="2o496yxx1" data-path="src/pages/SavingsGoals.tsx">Goal Title *</Label>
                  <Input
                    id="title"
                    value={newGoal.title}
                    onChange={(e) => setNewGoal((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Emergency Fund" data-id="i4x7n6mjc" data-path="src/pages/SavingsGoals.tsx" />

                </div>
                <div className="grid gap-2" data-id="0c8z7up5u" data-path="src/pages/SavingsGoals.tsx">
                  <Label htmlFor="description" data-id="kudv2rnxl" data-path="src/pages/SavingsGoals.tsx">Description</Label>
                  <Input
                    id="description"
                    value={newGoal.description}
                    onChange={(e) => setNewGoal((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="e.g., 3 months of expenses" data-id="lqou38ns8" data-path="src/pages/SavingsGoals.tsx" />

                </div>
                <div className="grid grid-cols-2 gap-4" data-id="1kmerrasd" data-path="src/pages/SavingsGoals.tsx">
                  <div className="grid gap-2" data-id="jnacvs6zj" data-path="src/pages/SavingsGoals.tsx">
                    <Label htmlFor="target" data-id="qsahzc6hc" data-path="src/pages/SavingsGoals.tsx">Target Amount *</Label>
                    <Input
                      id="target"
                      type="number"
                      step="0.01"
                      value={newGoal.target}
                      onChange={(e) => setNewGoal((prev) => ({ ...prev, target: e.target.value }))}
                      placeholder="0.00" data-id="bnegxk89o" data-path="src/pages/SavingsGoals.tsx" />

                  </div>
                  <div className="grid gap-2" data-id="06wka0x9w" data-path="src/pages/SavingsGoals.tsx">
                    <Label htmlFor="current" data-id="6vd8gmne2" data-path="src/pages/SavingsGoals.tsx">Current Amount</Label>
                    <Input
                      id="current"
                      type="number"
                      step="0.01"
                      value={newGoal.current}
                      onChange={(e) => setNewGoal((prev) => ({ ...prev, current: e.target.value }))}
                      placeholder="0.00" data-id="q7j039l2x" data-path="src/pages/SavingsGoals.tsx" />

                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4" data-id="3d3l4yh06" data-path="src/pages/SavingsGoals.tsx">
                  <div className="grid gap-2" data-id="sztq9n0qw" data-path="src/pages/SavingsGoals.tsx">
                    <Label data-id="og6iocifj" data-path="src/pages/SavingsGoals.tsx">Category *</Label>
                    <Select value={newGoal.category} onValueChange={(value) => setNewGoal((prev) => ({ ...prev, category: value }))} data-id="nu56bxbro" data-path="src/pages/SavingsGoals.tsx">
                      <SelectTrigger data-id="5li0ytfl3" data-path="src/pages/SavingsGoals.tsx">
                        <SelectValue placeholder="Select category" data-id="duc17p48l" data-path="src/pages/SavingsGoals.tsx" />
                      </SelectTrigger>
                      <SelectContent data-id="b6x4kfxwm" data-path="src/pages/SavingsGoals.tsx">
                        {categories.map((category) =>
                        <SelectItem key={category.value} value={category.value} data-id="mjp9sqxn7" data-path="src/pages/SavingsGoals.tsx">
                            <div className="flex items-center gap-2" data-id="t8hxahe3c" data-path="src/pages/SavingsGoals.tsx">
                              <category.icon className={`w-4 h-4 ${category.color}`} data-id="q928l9kwn" data-path="src/pages/SavingsGoals.tsx" />
                              {category.value}
                            </div>
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2" data-id="v17zt345a" data-path="src/pages/SavingsGoals.tsx">
                    <Label data-id="v40lb0q8d" data-path="src/pages/SavingsGoals.tsx">Priority</Label>
                    <Select value={newGoal.priority} onValueChange={(value: any) => setNewGoal((prev) => ({ ...prev, priority: value }))} data-id="c6fyybqvf" data-path="src/pages/SavingsGoals.tsx">
                      <SelectTrigger data-id="wvmpmgdzz" data-path="src/pages/SavingsGoals.tsx">
                        <SelectValue data-id="rh31gwsud" data-path="src/pages/SavingsGoals.tsx" />
                      </SelectTrigger>
                      <SelectContent data-id="1tzghdyzl" data-path="src/pages/SavingsGoals.tsx">
                        <SelectItem value="low" data-id="hqw8tvez8" data-path="src/pages/SavingsGoals.tsx">Low</SelectItem>
                        <SelectItem value="medium" data-id="poak0q0js" data-path="src/pages/SavingsGoals.tsx">Medium</SelectItem>
                        <SelectItem value="high" data-id="pp6za42c3" data-path="src/pages/SavingsGoals.tsx">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4" data-id="qjj09pwmk" data-path="src/pages/SavingsGoals.tsx">
                  <div className="grid gap-2" data-id="dle71mdnk" data-path="src/pages/SavingsGoals.tsx">
                    <Label data-id="o700nj92t" data-path="src/pages/SavingsGoals.tsx">Target Date</Label>
                    <Popover data-id="fljaqn1t0" data-path="src/pages/SavingsGoals.tsx">
                      <PopoverTrigger asChild data-id="6l7sximw8" data-path="src/pages/SavingsGoals.tsx">
                        <Button
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal",
                            !newGoal.deadline && "text-muted-foreground"
                          )} data-id="8xwgfkdhq" data-path="src/pages/SavingsGoals.tsx">

                          <CalendarIcon className="mr-2 h-4 w-4" data-id="pu7v21zcs" data-path="src/pages/SavingsGoals.tsx" />
                          {newGoal.deadline ? format(newGoal.deadline, "PPP") : <span data-id="96purzqhk" data-path="src/pages/SavingsGoals.tsx">Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" data-id="z3lr9aymm" data-path="src/pages/SavingsGoals.tsx">
                        <Calendar
                          mode="single"
                          selected={newGoal.deadline}
                          onSelect={(date) => date && setNewGoal((prev) => ({ ...prev, deadline: date }))}
                          initialFocus data-id="98l4joas8" data-path="src/pages/SavingsGoals.tsx" />

                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid gap-2" data-id="s32o0jycu" data-path="src/pages/SavingsGoals.tsx">
                    <Label htmlFor="contribution" data-id="kmgmoz9gk" data-path="src/pages/SavingsGoals.tsx">Monthly Contribution</Label>
                    <Input
                      id="contribution"
                      type="number"
                      step="0.01"
                      value={newGoal.monthlyContribution}
                      onChange={(e) => setNewGoal((prev) => ({ ...prev, monthlyContribution: e.target.value }))}
                      placeholder="0.00" data-id="nl7ehwt98" data-path="src/pages/SavingsGoals.tsx" />

                  </div>
                </div>
              </div>
              <div className="flex gap-2" data-id="5ldjz0c2k" data-path="src/pages/SavingsGoals.tsx">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="flex-1" data-id="oawvbix5k" data-path="src/pages/SavingsGoals.tsx">
                  Cancel
                </Button>
                <Button onClick={handleAddGoal} className="flex-1" data-id="yg0wh9rn8" data-path="src/pages/SavingsGoals.tsx">
                  Create Goal
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-id="l58n6a8fg" data-path="src/pages/SavingsGoals.tsx">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white" data-id="9rb50nnl8" data-path="src/pages/SavingsGoals.tsx">
            <CardHeader className="pb-3" data-id="s6zqnxyq0" data-path="src/pages/SavingsGoals.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="au3bcwy92" data-path="src/pages/SavingsGoals.tsx">Total Saved</CardTitle>
            </CardHeader>
            <CardContent data-id="xdy3egc4l" data-path="src/pages/SavingsGoals.tsx">
              <div className="text-2xl font-bold" data-id="6792udlmr" data-path="src/pages/SavingsGoals.tsx">{formatCurrency(totalCurrentSavings)}</div>
              <p className="text-xs opacity-90" data-id="qo5ql8eb5" data-path="src/pages/SavingsGoals.tsx">
                {(totalCurrentSavings / totalSavingsTarget * 100).toFixed(1)}% of total goals
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white" data-id="thll0q7bw" data-path="src/pages/SavingsGoals.tsx">
            <CardHeader className="pb-3" data-id="j4lgio6o5" data-path="src/pages/SavingsGoals.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="3aba7c20i" data-path="src/pages/SavingsGoals.tsx">Total Target</CardTitle>
            </CardHeader>
            <CardContent data-id="une6x1l4i" data-path="src/pages/SavingsGoals.tsx">
              <div className="text-2xl font-bold" data-id="vnb7780kg" data-path="src/pages/SavingsGoals.tsx">{formatCurrency(totalSavingsTarget)}</div>
              <p className="text-xs opacity-90" data-id="8xj1ldq9a" data-path="src/pages/SavingsGoals.tsx">{goals.length} active goals</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white" data-id="hjxk8nb5t" data-path="src/pages/SavingsGoals.tsx">
            <CardHeader className="pb-3" data-id="4nknmgw4j" data-path="src/pages/SavingsGoals.tsx">
              <CardTitle className="text-sm font-medium opacity-90" data-id="taz576eru" data-path="src/pages/SavingsGoals.tsx">Monthly Commitment</CardTitle>
            </CardHeader>
            <CardContent data-id="br9u1cuc3" data-path="src/pages/SavingsGoals.tsx">
              <div className="text-2xl font-bold" data-id="ah6gah5ql" data-path="src/pages/SavingsGoals.tsx">{formatCurrency(totalMonthlyContributions)}</div>
              <p className="text-xs opacity-90" data-id="vfe2qos01" data-path="src/pages/SavingsGoals.tsx">Total monthly contributions</p>
            </CardContent>
          </Card>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-id="zpocshd41" data-path="src/pages/SavingsGoals.tsx">
          {goals.map((goal) => {
            const IconComponent = getCategoryIcon(goal.category);
            const progress = goal.current / goal.target * 100;
            const daysLeft = getDaysUntilDeadline(goal.deadline);
            const progressStatus = getProgressStatus(goal.current, goal.target);

            return (
              <Card key={goal.id} className="relative overflow-hidden" data-id="c7bbul4kp" data-path="src/pages/SavingsGoals.tsx">
                <CardHeader className="pb-4" data-id="32hpuwudu" data-path="src/pages/SavingsGoals.tsx">
                  <div className="flex items-center justify-between" data-id="qde0qrx2r" data-path="src/pages/SavingsGoals.tsx">
                    <div className="flex items-center gap-3" data-id="491hfxi4e" data-path="src/pages/SavingsGoals.tsx">
                      <div className={`p-2 rounded-full bg-gray-100`} data-id="gvnh71izx" data-path="src/pages/SavingsGoals.tsx">
                        <IconComponent className={`w-5 h-5 ${getCategoryColor(goal.category)}`} data-id="hvwou6dnx" data-path="src/pages/SavingsGoals.tsx" />
                      </div>
                      <div data-id="y0ybqpret" data-path="src/pages/SavingsGoals.tsx">
                        <h3 className="font-semibold" data-id="wmnx4ceyj" data-path="src/pages/SavingsGoals.tsx">{goal.title}</h3>
                        <p className="text-sm text-gray-600" data-id="ib5y1im3z" data-path="src/pages/SavingsGoals.tsx">{goal.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2" data-id="amr5wqpq5" data-path="src/pages/SavingsGoals.tsx">
                      <Badge
                        variant="secondary"
                        className={getPriorityColor(goal.priority)} data-id="ivmlhr9kx" data-path="src/pages/SavingsGoals.tsx">

                        {goal.priority}
                      </Badge>
                      <div className="flex gap-1" data-id="h22fxwijz" data-path="src/pages/SavingsGoals.tsx">
                        <Dialog data-id="75a4fowlz" data-path="src/pages/SavingsGoals.tsx">
                          <DialogTrigger asChild data-id="1bczvpx2s" data-path="src/pages/SavingsGoals.tsx">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setEditingGoal({ ...goal })} data-id="ddngit728" data-path="src/pages/SavingsGoals.tsx">

                              <Edit className="w-4 h-4" data-id="gh89yvb00" data-path="src/pages/SavingsGoals.tsx" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]" data-id="ss34nole0" data-path="src/pages/SavingsGoals.tsx">
                            <DialogHeader data-id="2ys5f5o56" data-path="src/pages/SavingsGoals.tsx">
                              <DialogTitle data-id="rthqbyn8x" data-path="src/pages/SavingsGoals.tsx">Edit Goal - {goal.title}</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4" data-id="89vnlnl94" data-path="src/pages/SavingsGoals.tsx">
                              <div className="grid gap-2" data-id="kbqbh93uo" data-path="src/pages/SavingsGoals.tsx">
                                <Label data-id="4aam2swd7" data-path="src/pages/SavingsGoals.tsx">Current Amount</Label>
                                <Input
                                  type="number"
                                  step="0.01"
                                  value={editingGoal?.current || ''}
                                  onChange={(e) => setEditingGoal((prev) =>
                                  prev ? { ...prev, current: parseFloat(e.target.value) || 0 } : null
                                  )} data-id="t39bghq97" data-path="src/pages/SavingsGoals.tsx" />

                              </div>
                              <div className="grid gap-2" data-id="drfgbkw35" data-path="src/pages/SavingsGoals.tsx">
                                <Label data-id="m1zju1nr9" data-path="src/pages/SavingsGoals.tsx">Monthly Contribution</Label>
                                <Input
                                  type="number"
                                  step="0.01"
                                  value={editingGoal?.monthlyContribution || ''}
                                  onChange={(e) => setEditingGoal((prev) =>
                                  prev ? { ...prev, monthlyContribution: parseFloat(e.target.value) || undefined } : null
                                  )} data-id="6tjyp0929" data-path="src/pages/SavingsGoals.tsx" />

                              </div>
                            </div>
                            <div className="flex gap-2" data-id="wpa1wzjix" data-path="src/pages/SavingsGoals.tsx">
                              <Button variant="outline" onClick={() => setEditingGoal(null)} className="flex-1" data-id="lypsv6ubl" data-path="src/pages/SavingsGoals.tsx">
                                Cancel
                              </Button>
                              <Button onClick={handleUpdateGoal} className="flex-1" data-id="101grsmbf" data-path="src/pages/SavingsGoals.tsx">
                                Update Goal
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteGoal(goal.id)} data-id="s71ade3xm" data-path="src/pages/SavingsGoals.tsx">

                          <Trash2 className="w-4 h-4" data-id="xws73ox17" data-path="src/pages/SavingsGoals.tsx" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent data-id="rbpxq8riv" data-path="src/pages/SavingsGoals.tsx">
                  <div className="space-y-4" data-id="vku6bbbsq" data-path="src/pages/SavingsGoals.tsx">
                    <div className="flex items-center justify-between" data-id="8mziswk22" data-path="src/pages/SavingsGoals.tsx">
                      <span className="text-2xl font-bold" data-id="uoxa3sn0y" data-path="src/pages/SavingsGoals.tsx">{formatCurrency(goal.current)}</span>
                      <span className="text-lg text-gray-600" data-id="g163s53v9" data-path="src/pages/SavingsGoals.tsx">/ {formatCurrency(goal.target)}</span>
                    </div>
                    
                    <Progress value={progress} className="h-3" data-id="u4a7ts2p2" data-path="src/pages/SavingsGoals.tsx" />
                    
                    <div className="flex items-center justify-between text-sm" data-id="4qojleuc8" data-path="src/pages/SavingsGoals.tsx">
                      <span className="text-gray-600" data-id="f3bjb50e8" data-path="src/pages/SavingsGoals.tsx">{progress.toFixed(1)}% complete</span>
                      <span className={daysLeft > 0 ? 'text-gray-600' : 'text-red-600'} data-id="hfnni377r" data-path="src/pages/SavingsGoals.tsx">
                        {daysLeft > 0 ? `${daysLeft} days left` : 'Overdue'}
                      </span>
                    </div>

                    {progressStatus === 'completed' &&
                    <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg border border-green-200" data-id="fuashxxsi" data-path="src/pages/SavingsGoals.tsx">
                        <CheckCircle className="w-4 h-4 text-green-600" data-id="50xh3oiqw" data-path="src/pages/SavingsGoals.tsx" />
                        <span className="text-sm text-green-800 font-medium" data-id="xjom950md" data-path="src/pages/SavingsGoals.tsx">Goal Completed! 🎉</span>
                      </div>
                    }

                    <div className="flex gap-2" data-id="321cewfm4" data-path="src/pages/SavingsGoals.tsx">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => addFunds(goal.id, 25)}
                        disabled={progress >= 100} data-id="u6i8rpu4b" data-path="src/pages/SavingsGoals.tsx">

                        +₹25
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => addFunds(goal.id, 50)}
                        disabled={progress >= 100} data-id="qm1n2nbjl" data-path="src/pages/SavingsGoals.tsx">

                        +₹50
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => addFunds(goal.id, 100)}
                        disabled={progress >= 100} data-id="wlf4j4iue" data-path="src/pages/SavingsGoals.tsx">

                        +₹100
                      </Button>
                    </div>

                    {goal.monthlyContribution &&
                    <div className="p-2 bg-blue-50 rounded-lg border border-blue-200" data-id="0qa0opsx7" data-path="src/pages/SavingsGoals.tsx">
                        <div className="flex items-center gap-2" data-id="b34dji7yp" data-path="src/pages/SavingsGoals.tsx">
                          <TrendingUp className="w-4 h-4 text-blue-600" data-id="m556dihm2" data-path="src/pages/SavingsGoals.tsx" />
                          <span className="text-sm text-blue-800" data-id="1kbs3r581" data-path="src/pages/SavingsGoals.tsx">
                            Monthly contribution: {formatCurrency(goal.monthlyContribution)}
                          </span>
                        </div>
                        <p className="text-xs text-blue-600 mt-1" data-id="limcp3s3q" data-path="src/pages/SavingsGoals.tsx">
                          At this rate, you'll reach your goal in {Math.ceil((goal.target - goal.current) / goal.monthlyContribution)} months
                        </p>
                      </div>
                    }
                  </div>
                </CardContent>
              </Card>);

          })}
        </div>

        {goals.length === 0 &&
        <Card className="text-center py-12" data-id="93ume5pmi" data-path="src/pages/SavingsGoals.tsx">
            <CardContent data-id="e7acpm0gn" data-path="src/pages/SavingsGoals.tsx">
              <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" data-id="157lvh07j" data-path="src/pages/SavingsGoals.tsx" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2" data-id="s7e8rea37" data-path="src/pages/SavingsGoals.tsx">No Savings Goals Yet</h3>
              <p className="text-gray-600 mb-4" data-id="na7m47348" data-path="src/pages/SavingsGoals.tsx">
                Start building your financial future by creating your first savings goal.
              </p>
              <Button onClick={() => setIsAddDialogOpen(true)} data-id="txko2deck" data-path="src/pages/SavingsGoals.tsx">
                <Plus className="w-4 h-4 mr-2" data-id="m935k58te" data-path="src/pages/SavingsGoals.tsx" />
                Create Your First Goal
              </Button>
            </CardContent>
          </Card>
        }
      </div>
    </div>);

};

export default SavingsGoalsPage;