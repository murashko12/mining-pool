import { useState, useEffect } from 'react'

import type { MiningPool } from '@/types/MiningPoolTypes'
import PoolTable from '@components/PoolTable'
import { MiningPoolService } from '@/api/MiningPoolService'
import ThemeToggle from '@components/ThemeToggle'
import PoolDetailsModal from '@components/PoolDetailsModal'
import ErrorDisplay from '@components/ui/ErrorDisplay'
import LoadingIndicator from '@components/ui/Loader'

function App() {
  
  const [pools, setPools] = useState<MiningPool[]>([])
  const [selectedPool, setSelectedPool] = useState<MiningPool | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await MiningPoolService.getMiningPools()
        setPools(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load mining pools data')
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handlePoolClick = (pool: MiningPool) => {
    setSelectedPool(pool)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  if (loading) {
    return <LoadingIndicator darkMode={darkMode} />
  }


  if (error) {
    return (
      <ErrorDisplay
        error={error}
        darkMode={darkMode}
        className="p-4"
        errorClassName="font-bold"
      />
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Mining Pools Dashboard</h1>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
        
        <PoolTable 
          pools={pools} 
          onPoolClick={handlePoolClick} 
          darkMode={darkMode}
        />
        
        {isModalOpen && selectedPool && (
          <PoolDetailsModal 
            pool={selectedPool} 
            onClose={closeModal} 
            darkMode={darkMode}
          />
        )}
      </div>
    </div>
  )
}

export default App