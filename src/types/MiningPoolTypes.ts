export type PoolStatus = 'online' | 'degraded' | 'offline'

export interface MiningPool {
    id: string
    name: string
    hashrateTHs: number
    activeWorkers: number
    rejectRate: number
    status: PoolStatus
    details?: PoolDetails
}

export interface PoolDetails {
    last24hRevenueBTC: number
    uptimePercent: number
    location: string
    feePercent: number
}