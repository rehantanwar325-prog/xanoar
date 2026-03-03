import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        const theme = localStorage.getItem('theme');
        return theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-xl transition-all duration-300 relative overflow-hidden group hover:bg-dark-100 dark:hover:bg-dark-800"
            aria-label="Toggle Dark Mode"
        >
            <div className="relative z-10 text-dark-600 dark:text-dark-300 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                {isDark ? (
                    <Sun className="w-5 h-5 animate-spin-slow origin-center" />
                ) : (
                    <Moon className="w-5 h-5 animate-pulse-slow" />
                )}
            </div>
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </button>
    );
}
