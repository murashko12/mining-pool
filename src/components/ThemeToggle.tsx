import { IoMoonOutline } from "react-icons/io5"
import { MdOutlineWbSunny } from "react-icons/md"

interface ThemeToggleProps {
    darkMode: boolean
    toggleTheme: () => void
}

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => {
    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
            {darkMode ? (
                <MdOutlineWbSunny />
            ) : (
                <IoMoonOutline />
            )}
        </button>
    )
}

export default ThemeToggle