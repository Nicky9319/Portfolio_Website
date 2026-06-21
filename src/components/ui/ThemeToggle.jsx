import { useSelector, useDispatch } from 'react-redux'
import { Sun, Moon } from 'lucide-react'
import { toggleTheme } from '../../store/themeSlice'

export function ThemeToggle() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.theme.mode)

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 border border-[var(--border-2)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4">
        <Sun
          className={`absolute inset-0 w-4 h-4 transition-opacity duration-200 ${
            mode === 'dark' ? 'opacity-100' : 'opacity-0'
          } text-[var(--primary)]`}
        />
        <Moon
          className={`absolute inset-0 w-4 h-4 transition-opacity duration-200 ${
            mode === 'light' ? 'opacity-100' : 'opacity-0'
          } text-[var(--primary)]`}
        />
      </div>
    </button>
  )
}
