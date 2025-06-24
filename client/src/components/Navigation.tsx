import { Sun, Moon, Menu, X } from 'lucide-react';
import logoPath from '@assets/logo-sayle_1750644418509.webp';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '@/hooks/useTranslation';
import { languages } from '@/lib/i18n';
import { useState } from 'react';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src={logoPath} 
              alt="Sayle.ai Logo" 
              className="h-6 w-auto"
            />
          </div>
          
          {/* Desktop Navigation - Hidden on tablet and mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#agents" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navAgents')}
            </a>
            <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navIntegrations')}
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navProcess')}
            </a>
          </div>
          
          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Selector */}
            <select 
              value={language}
              onChange={(e) => changeLanguage(e.target.value as any)}
              className="bg-background border border-border rounded-lg px-2 py-1 text-xs sm:text-sm text-foreground min-w-0"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.code.toUpperCase()}
                </option>
              ))}
            </select>
            
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
            >
              {theme === 'light' ? (
                <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              ) : (
                <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
              )}
            </Button>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" className="hover:bg-accent hover:text-foreground transition-colors">{t('login')}</Button>
              <Button 
                className="bg-[#00D6AB] text-white hover:bg-[#00b898] hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {t('buyNow')}
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-3 w-3 sm:h-4 sm:w-4" /> : <Menu className="h-3 w-3 sm:h-4 sm:w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a 
                href="#agents" 
                className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navAgents')}
              </a>
              <a 
                href="#integrations" 
                className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navIntegrations')}
              </a>
              <a 
                href="#process" 
                className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navProcess')}
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start w-full">{t('login')}</Button>
                <Button 
                  className="justify-start text-white w-full" 
                  style={{ backgroundColor: 'hsl(168, 100%, 42%)' }}
                >
                  {t('buyNow')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
