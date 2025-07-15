import { IoMdClose } from 'react-icons/io'
import type { MiningPool } from '@/types/MiningPoolTypes'

interface PoolDetailsModalProps {
    pool: MiningPool
    onClose: () => void
    darkMode: boolean
}

const PoolDetailsModal = ({ pool, onClose, darkMode }: PoolDetailsModalProps) => {

    if (!pool.details) return null

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50" 
            onClick={handleOverlayClick}
        >
            <div className={`rounded-lg shadow-xl p-6 w-full max-w-md transition-colors duration-200 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{pool.name} Details</h2>
                    <button 
                        onClick={onClose}
                        className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                    >
                        <IoMdClose />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold">24h Revenue</h3>
                        <p>{pool.details.last24hRevenueBTC} BTC</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Uptime</h3>
                        <p>{pool.details.uptimePercent.toFixed(2)}%</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Location</h3>
                        <p>{pool.details.location}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Fee</h3>
                        <p>{pool.details.feePercent}%</p>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={onClose}
                        className={`w-full py-2 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PoolDetailsModal