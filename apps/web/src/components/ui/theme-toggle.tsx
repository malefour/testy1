"use client"

import { useTheme } from "../../contexts/ThemeContext"
import { cn } from "../../lib/utils"
import { Moon, Sun, Monitor } from "lucide-react"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, effectiveTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'system') return Monitor;
    return effectiveTheme === 'dark' ? Moon : Sun;
  };

  const Icon = getIcon();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200",
        "bg-secondary hover:bg-tertiary border border-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        "hover:scale-105 active:scale-95",
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
    >
      <Icon 
        className={cn(
          "w-5 h-5 transition-all duration-200",
          "text-secondary hover:text-accent"
        )}
      />
    </button>
  )
}