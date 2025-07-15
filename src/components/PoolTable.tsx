import type { MiningPool } from '@/types/MiningPoolTypes'

interface PoolTableProps {
  pools: MiningPool[]
  onPoolClick: (pool: MiningPool) => void
  darkMode: boolean
}

const PoolTable = ({ pools, onPoolClick, darkMode }: PoolTableProps) => {
    
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'online': return 'bg-green-500'
            case 'degraded': return 'bg-yellow-500'
            case 'offline': return 'bg-red-500'
            default: return 'bg-gray-500'
        }
    }

    return (
        <div className={`rounded-lg overflow-hidden shadow-md transition-colors duration-200 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-100'}>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Pool Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Hashrate (TH/s)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Active Workers</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Reject Rate</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className={`divide-y divide-gray-200 ${darkMode ? 'divide-gray-700' : ''}`}>
                        {pools.map((pool) => (
                            <tr 
                                key={pool.id} 
                                className={`transition-colors duration-150 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">{pool.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pool.hashrateTHs.toLocaleString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{pool.activeWorkers.toLocaleString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{(pool.rejectRate * 100).toFixed(2)}%</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${darkMode ? 'text-white' : 'text-gray-800'} ${getStatusColor(pool.status)}`}>
                                        {pool.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => onPoolClick(pool)}
                                        className={`px-3 py-1 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors duration-200`}
                                    >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PoolTable