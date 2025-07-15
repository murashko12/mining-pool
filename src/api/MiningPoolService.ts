import type { MiningPool } from '../types/MiningPoolTypes'

export const MiningPoolService = {
    async getMiningPools(): Promise<MiningPool[]> {
        return [
        {
            id: "pool-1",
            name: "US East Pool",
            hashrateTHs: 830.5,
            activeWorkers: 1240,
            rejectRate: 0.012,
            status: "online",
            details: {
                last24hRevenueBTC: 0.035,
                uptimePercent: 99.82,
                location: "Ashburn, VA",
                feePercent: 1.0
            }
        }, {
                id: "pool-2",
                name: "EU Central Pool",
                hashrateTHs: 460.3,
                activeWorkers: 876,
                rejectRate: 0.045,
                status: "degraded",
                details: {
                    last24hRevenueBTC: 0.022,
                    uptimePercent: 92.15,
                    location: "Frankfurt, DE",
                    feePercent: 1.5
                }
            }, {
                id: "pool-3",
                name: "Asia Pool",
                hashrateTHs: 720.8,
                activeWorkers: 1102,
                rejectRate: 0.085,
                status: "offline",
                details: {
                    last24hRevenueBTC: 0.0,
                    uptimePercent: 0.0,
                    location: "Singapore, SG",
                    feePercent: 1.2
                }
            }
        ]
    }
}