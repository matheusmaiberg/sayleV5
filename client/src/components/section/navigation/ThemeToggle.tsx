import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
    >
      {theme === "light" ? (
        <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
      ) : (
        <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
      )}
    </Button>
  );
}
