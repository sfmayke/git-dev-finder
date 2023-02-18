import moonIcon from '../assets/icon-moon.svg';
import sunIcon from '../assets/icon-sun.svg';
import { useThemeContext } from '../context/ThemeContext.server';

console.log('server --- ?', typeof window === 'undefined');

export default function Header() {
  const { theme, themeToggle } = useThemeContext();
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[#222731] dark:text-white">devfinder</h1>
      <div className="flex gap-4">
        <h4 className="font-bold uppercase tracking-[2.5px] text-secondary-blue dark:text-white">
          {theme === 'dark' ? 'light' : 'dark'}
        </h4>
        <button type="button" onClick={themeToggle}>
          <img
            src={
              document.documentElement.classList.value === 'dark'
                ? sunIcon
                : moonIcon
            }
            alt="theme-icon"
          />
        </button>
      </div>
    </div>
  );
}
