import { ImSpinner9 } from 'react-icons/im';

interface LoadingIndicatorProps {
  darkMode: boolean
  message?: string
  spinnerClassName?: string
  textClassName?: string
}

const LoadingIndicator = ({
    darkMode,
    message = 'Loading...',
    spinnerClassName = '',
    textClassName = ''
}: LoadingIndicatorProps) => {
    return (
        <div className={`min-h-screen flex flex-col items-center justify-center ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}>
            <ImSpinner9 className={`animate-spin text-3xl mb-4 ${spinnerClassName}`} />
            <div className={`text-xl ${textClassName}`}>{message}</div>
        </div>
    )
}

export default LoadingIndicator