interface ErrorDisplayProps {
  error: string
  darkMode?: boolean
  className?: string
  errorClassName?: string
}

const ErrorDisplay = ({
    error,
    darkMode = false,
    className = '',
    errorClassName = ''
}: ErrorDisplayProps) => {
    return (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} ${className}`}>
            <div className={`text-xl text-red-500 ${errorClassName}`}>{error}</div>
        </div>
    )
}

export default ErrorDisplay