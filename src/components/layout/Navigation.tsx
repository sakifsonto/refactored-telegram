import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  BarChart3,
  Target,
  Menu,
  Brain,
  GraduationCap } from
'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
    description: 'Overview and quick actions'
  },
  {
    title: 'Expenses',
    href: '/expenses',
    icon: Receipt,
    description: 'Track your daily spending'
  },
  {
    title: 'Budget',
    href: '/budget',
    icon: Wallet,
    description: 'Manage your monthly budgets'
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
    description: 'Financial insights and trends'
  },
  {
    title: 'Savings',
    href: '/savings',
    icon: Target,
    description: 'Track your savings goals'
  }];


  const NavItem = ({ item, onClick }: {item: typeof navigationItems[0];onClick?: () => void;}) => {
    const IconComponent = item.icon;
    const isActive = location.pathname === item.href;

    return (
      <Link to={item.href} onClick={onClick} data-id="cou4dpx3q" data-path="src/components/layout/Navigation.tsx">
        <div className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
          isActive ?
          "bg-blue-100 text-blue-700 border border-blue-200" :
          "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        )} data-id="zad5nhm5k" data-path="src/components/layout/Navigation.tsx">
          <IconComponent className="w-5 h-5" data-id="m5z89xovx" data-path="src/components/layout/Navigation.tsx" />
          <div className="flex-1" data-id="r7m1uvp71" data-path="src/components/layout/Navigation.tsx">
            <div className="font-medium text-sm" data-id="awyttpx6a" data-path="src/components/layout/Navigation.tsx">{item.title}</div>
            <div className="text-xs opacity-75" data-id="j6y8l3r6g" data-path="src/components/layout/Navigation.tsx">{item.description}</div>
          </div>
        </div>
      </Link>);

  };

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4" data-id="skz9wf2te" data-path="src/components/layout/Navigation.tsx">
        <div className="flex items-center justify-between" data-id="p6cg7vz2w" data-path="src/components/layout/Navigation.tsx">
          <div className="flex items-center gap-3" data-id="etis2s0s1" data-path="src/components/layout/Navigation.tsx">
            <div className="flex items-center gap-2" data-id="y58ng3oxh" data-path="src/components/layout/Navigation.tsx">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg" data-id="iz94jxw90" data-path="src/components/layout/Navigation.tsx">
                <GraduationCap className="w-6 h-6 text-white" data-id="tk3x61psl" data-path="src/components/layout/Navigation.tsx" />
              </div>
              <div data-id="qjiha68os" data-path="src/components/layout/Navigation.tsx">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="8ru6j6ybq" data-path="src/components/layout/Navigation.tsx">
                  StudentFinance
                </h1>
                <p className="text-xs text-gray-500" data-id="tcdf7074o" data-path="src/components/layout/Navigation.tsx">AI-Powered Finance Manager</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" data-id="wekdlxweq" data-path="src/components/layout/Navigation.tsx">
            {navigationItems.map((item) =>
            <Link key={item.href} to={item.href} data-id="86cp2nk0g" data-path="src/components/layout/Navigation.tsx">
                <Button
                variant={location.pathname === item.href ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "flex items-center gap-2",
                  location.pathname === item.href && "bg-blue-600 hover:bg-blue-700"
                )} data-id="7akv0955f" data-path="src/components/layout/Navigation.tsx">

                  <item.icon className="w-4 h-4" data-id="0mgd8e947" data-path="src/components/layout/Navigation.tsx" />
                  {item.title}
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} data-id="57a6rsh37" data-path="src/components/layout/Navigation.tsx">
            <SheetTrigger asChild data-id="80b4ncqaw" data-path="src/components/layout/Navigation.tsx">
              <Button variant="ghost" size="sm" className="md:hidden" data-id="zik1vmhx1" data-path="src/components/layout/Navigation.tsx">
                <Menu className="w-5 h-5" data-id="vgrtmlsvm" data-path="src/components/layout/Navigation.tsx" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]" data-id="t7dqmaudy" data-path="src/components/layout/Navigation.tsx">
              <SheetHeader className="mb-6" data-id="2t8nsek4q" data-path="src/components/layout/Navigation.tsx">
                <SheetTitle className="flex items-center gap-2" data-id="7a7d9bxqc" data-path="src/components/layout/Navigation.tsx">
                  <div className="p-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded" data-id="subzy2qif" data-path="src/components/layout/Navigation.tsx">
                    <GraduationCap className="w-4 h-4 text-white" data-id="ru32806i6" data-path="src/components/layout/Navigation.tsx" />
                  </div>
                  StudentFinance
                </SheetTitle>
              </SheetHeader>
              <nav className="space-y-2" data-id="3lqmggwzm" data-path="src/components/layout/Navigation.tsx">
                {navigationItems.map((item) =>
                <NavItem
                  key={item.href}
                  item={item}
                  onClick={() => setIsMobileMenuOpen(false)} data-id="d2jkwomrn" data-path="src/components/layout/Navigation.tsx" />

                )}
              </nav>
              
              {/* AI Features Section */}
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200" data-id="tclarm6lm" data-path="src/components/layout/Navigation.tsx">
                <div className="flex items-center gap-2 mb-2" data-id="5tcpjnzih" data-path="src/components/layout/Navigation.tsx">
                  <Brain className="w-4 h-4 text-purple-600" data-id="dn315fzqa" data-path="src/components/layout/Navigation.tsx" />
                  <span className="text-sm font-medium text-purple-800" data-id="daeubrdvl" data-path="src/components/layout/Navigation.tsx">AI Features</span>
                </div>
                <p className="text-xs text-purple-700" data-id="715jupstp" data-path="src/components/layout/Navigation.tsx">
                  Get personalized insights and smart budgeting recommendations powered by AI.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50" data-id="zwyivc3a0" data-path="src/components/layout/Navigation.tsx">
        <nav className="flex justify-around" data-id="bgh4g6chd" data-path="src/components/layout/Navigation.tsx">
          {navigationItems.slice(0, 4).map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link key={item.href} to={item.href} data-id="0woxiouga" data-path="src/components/layout/Navigation.tsx">
                <div className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors",
                  isActive ? "text-blue-600" : "text-gray-500"
                )} data-id="0oznzts0m" data-path="src/components/layout/Navigation.tsx">
                  <IconComponent className="w-5 h-5" data-id="3789nevt6" data-path="src/components/layout/Navigation.tsx" />
                  <span className="text-xs font-medium" data-id="hr2bf85sg" data-path="src/components/layout/Navigation.tsx">{item.title}</span>
                </div>
              </Link>);

          })}
        </nav>
      </div>
    </>);

};

export default Navigation;